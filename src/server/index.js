const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const massive = require('massive');
const ctrl = require('./controller');

const checkForSession = require('./middleware/checkForSession');

const user_controller = require('./controllers/user_controller');
const auth_controller = require('./controllers/auth_controller');

const app = express();

app.use( bodyParser.json() );
app.use( session({
  login: 'houser',
  password: 'password',
  resave: false,
  saveUninitialized: false
}));

app.use(checkForSession);

app.get('/api/home', user_controller); // login

//authorization
app.post('/api/auth/login', auth_controller.login)

app.post('/api/auth/register', auth_controller.register)

app.post('api/auth/logout', auth_controller.logout)


//properties

app.post('/api/properties', //new_property, returns all props with the logged in user)

app.get('/api/properties', //user_property, returns all props with logged in user)

app.delete('/api/properties/:id', //controller_delete)

app.get('/api/properties/filter', //controller_filter, filter by desired rent, returns all props )


const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );