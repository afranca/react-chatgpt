# Interacting with ChatGPT API using simple React project

This project is based on Ania ChatGPT clone [AniaChatGPT clone](https://www.youtube.com/watch?v=uRQH2CFvedY&t=4542s).

## Create an OpenAI account
OpenAI Main Site: https://openai.com/
Developers API Reference: https://platform.openai.com/docs/api-reference

## Enviroment Variables
Create a `.env` file in your project root directory with an API_KEY defined
Eg.: API_KEY = sk-zpV8DGYvb3B6KAHJ6Qx2T3AmptXGhnbHruTetERqGGPuW1hK

This API Key can to be found under you OpenAI account. 

## Execute `npm install` to get all dependencies

## Front end
Run the front end by executing this script: `npm run start:front`
It will run on port 3000
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Back end
Run the back end by executing this script: `npm run start:back`
It will run express on port 8000 
Open [http://localhost:8000/completions](http://localhost:8000/completions) to opent it in your browser to make sure it is working.

It will accept POST requests only, with a payload from the Front End. Payload format is defined in the Front end code.