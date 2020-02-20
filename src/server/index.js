const express = require('express');
const app = express();
const cors = require('cors');
const jsonParser = express.json();
app.listen(3000);
app.use(cors());

const path = require('path');
const fetch = require('node-fetch');
const fs = require('fs');

const api_key = '29212d0e16eff75e8b70a32f76ff374be4f8';
const url = `https://currencyapi.net/api/v1/rates?key=${api_key}`;
let rates = {};

fetch( url )
  .then( res => res.json() )
  .then( body => 
      fs.writeFileSync(
        path.join(__dirname, '../client/api_dump/api_dump.json'),
        JSON.stringify( body )
      )
    )
  .catch( err => console.warn( err ) );

// app.use(jsonParser)
//     .use(express.static(path.join(__dirname, '../../bundle')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../bundle/index.html'));
// });

// app.get('/rates', (req, res) => {
//   res.json( rates );
// });