require('dotenv').config();
console.log("API KEY CARGADA:", process.env.OPENAI_API_KEY);
const fs = require('fs');
const { open } = require('inspector/promises');
const path = require('path');

async function transcribeAudio(audioFilePath, apiKeyOpenai) {
    try {
        if (!fs.existsSync(audioFilePath)) {
            throw new Error('El archivo de audio no existe.');
        }

        const audioFile = fs.readFileSync(audioFilePath);
        const formData = new FormData();
        const blob = new Blob([audioFile], { type: 'audio/mpeg' });

        formData.append('file', blob, path.basename(audioFilePath));
        formData.append('model', 'whisper-1');

        const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKeyOpenai}`
            },
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error en la transcripción: ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        const transcription = data.text;

        const outputFilePath = path.join(
            path.dirname(audioFilePath),
            `${path.basename(audioFilePath, path.extname(audioFilePath))}_transcription.txt`            
        );

        fs.writeFileSync(outputFilePath, transcription);
        console.log(`Transcripción guardada en: ${outputFilePath}`);

        return transcription;

    } catch (error) {
        console.error('Error durante la transcripción:', error.message);
        throw error;
    }
}

const audioPath = './assets/audio.mp3'
const openaiApiKey = process.env.OPENAI_API_KEY;

transcribeAudio(audioPath, openaiApiKey)
    .then(transcription => {
        console.log('Transcripción completada con éxito');
        console.log(transcription);
    })
    .catch(error => {
        console.log('Falló la transcripción', error);
    });