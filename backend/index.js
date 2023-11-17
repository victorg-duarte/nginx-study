const express = require('express')
const cors = require('cors')
const os = require('os');
const PORT = process.env.PORT || 5000
const API_PATH = process.env.API_PATH

const app = express()

app.use(express.json())
app.use(cors({ origin: true, credentials: false }))

app.get(`/${API_PATH}`, (req, res) => {
  res.send(`<h1>Hello from the backend!</h1> ContainerIID: <strong>${os.hostname()}</strong>`);
});

app.get(`/${API_PATH}/hello`, (req, res) => {
  res.status(200).json({ message: 'Hello from the backend!', os: os.hostname() });
});

app.get(`/${API_PATH}/running`, (req, res) => {
  return res.status(200).json({ message: `Server is running on port ${PORT}`, containerID: os.hostname(), timestamp: Date.now() })
})

app.listen(PORT, () => {
  console.log('API_PATH: ', API_PATH);
  console.log(`Server is running on port ${PORT}! HOST: ${os.hostname()}`)
})