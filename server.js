const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static("build"))

app.get("/", (req, res) => {
  res.sendFile("index.html")
})
app.get('/api/test', cors(), (req, res) => {
  
  res.json({msg:"react-express project 43"});
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);