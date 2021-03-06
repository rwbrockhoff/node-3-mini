const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.SERVER_PORT;
const session = require('express-session');

const messagesCtrl = require('./messagesCtrl');

const app = express();

app.use(bodyParser.json());

app.use(session({
    secret: 'superdupersecret',
    resave: false, 
    saveUninitialized: false
}))



app.listen(port, () => console.log(`Making all the magic happen at port: ${port}`));


app.get('/api/messages', messagesCtrl.getAllMessages);
app.get('/api/messages/history', messagesCtrl.history);
app.post('/api/messages', messagesCtrl.createMessage);




// Create a POST endpoint with a path of /api/messages and use the createMessage method as the callback.



