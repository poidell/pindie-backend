const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/apiRouter');
const connectToDatabase = require('./database/connect');
const customCors = require('./middlewares/cors');
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages");

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(express.static(path.join(__dirname, 'public')))
app.use(
    customCors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    express.static(path.join(__dirname, 'public'))
);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})