const PORT=8000
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const KEY = '**** secret'
const MODEL = 'gpt-3.5-turbo'

app.post('/completions', async (req, res) => {
    console.log("backend: /completions")
    const options = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model : MODEL,
            messages: [{ role: "user", content: req.body.message}],
            max_tokens: 100,
        })
    }
    
    try{
       console.log(`sending request to openAI: ${JSON.stringify(options)}`) 
       const response = await fetch('https://api.openai.com/v1/chat/completions', options)
       const data = await response.json()
       console.error(`Response from openAI: ${JSON.stringify(data)}`)

       res.send(data)

    }catch (err){
        console.error(`Error from openAI: ${err.message}`)
        console.error(err);
    }
})

app.listen(PORT, ()=> console.log('Server running on port '+PORT))