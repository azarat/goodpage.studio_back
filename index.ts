import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import request from 'request';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const botKey = process.env.botKey;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/', (req: Request, res: Response) => {
//   res.status(200).send(botKey);
// });

app.post('/tg/send', (req: Request, res: Response) => {
  let msg = "Заявка с сайта: Базовая\r\n";
  msg += "Имя: " + req.body.f_name + "\r\n";
  msg += "Email: " + req.body.email + "\r\n";

  const options = {
    uri: 'https://api.telegram.org/bot' + process.env.botKey + '/sendMessage',
    body: JSON.stringify({
      chat_id: '@goodpage2022',
      text: msg
    }),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  request(options, function (error, response) {
    res.status(200).json(response.body);
    return;
  });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
