import express from 'express';
import bodyParser from 'body-parser';
import { db } from './src/database/db.js';
import router from './src/routes/mainRouter.js';
import cors from 'cors'
const app = express();
const port = 3000;

app.use(cors("*"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
