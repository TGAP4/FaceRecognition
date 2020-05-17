const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
// const knex = require('knex');
// const register = require('./controllers/register');
// const signin = require('./controllers/signin');
// const profile = require('./controllers/profile');
// const image = require('./controllers/image');

// const db = knex({
//     client: 'pg',
//     connection: {
//       connectionString: process.env.DATABASE_URL,
//       ssl: true
//     }
// });
console.log('HIII')
const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.use(express.static('build/'));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build/', 'index.html'));
// });


// app.get('/', (req, res) => res.json(db.users));

// app.post('/signin', (req, res) => signin.handleSignin(req, res, db, bcrypt));

// app.post('/register', (req, res) => register.handleRegister(req, res, db, bcrypt));

// app.get('/profile/:id', (req, res) => profile.handleProfile(req, res, db));

// app.put('/image', (req, res) => image.handleImage(req, res, db));

// app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)});

app.listen(process.env.PORT || 3000);