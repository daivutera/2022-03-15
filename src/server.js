const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path'); //nereik isntalinti, vidinis node bajeris tik

// const mysql = require('mysql2/promise');
// const dbConfig = require('./dbConfig');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

//setengine, default directory/views
app.set('view engine', 'ejs');
app.set('views', 'src/views');
// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  // const kelias = path.join(__dirname, 'views', 'index.html');
  // console.log('kelias---', kelias);
  // // res.send('Hello express');
  // res.sendFile(kelias);
  const data = {
    title: 'Homepage',
    age: 25,
  };
  res.render('index', data);
});
app.get('/about', (req, res) => {
  const data = {
    title: 'About us',
    techArr: ['HTML', 'CSS', 'JS', 'Node'],
  };
  // const keliasAbout = path.join(__dirname, 'views', 'about.html');
  // console.log('kelias---', keliasAbout);
  // // res.send('Hello express');
  // res.sendFile(keliasAbout);
  res.render('about', data);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
