const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())

const port = process.env.PORT || 8080;

//Static files
app.use(express.static('assets'))
app.use('/css', express.static(__dirname + 'assets/css'))
app.use('/img', express.static(__dirname + 'assets/img'))
app.use('/js', express.static(__dirname + 'assets/js'))


app.get('/', (req, res) => {
  res.send('Hello World again!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
