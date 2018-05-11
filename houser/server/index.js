const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ic = require('./controller')
require('dotenv').config()

const app = express();
app.use( bodyParser.json() );
app.use( express.static( `${__dirname}/build` ) )

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  console.log('Database connecting...')
  app.set('db', dbInstance)
})

app.get('/api/inventory', ic.getAll);
app.post('/api/inventory', ic.create);
app.delete('/api/inventory/:id', ic.delete);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on port ${port}.`))
