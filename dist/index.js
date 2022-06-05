"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const request_1 = __importDefault(require("request"));
const cors_1 = __importDefault(require("cors"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const botKey = process.env.botKey;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// app.get('/', (req: Request, res: Response) => {
//   res.status(200).send(botKey);
// });
app.get('/tg/send', (req, res) => {
    res.status(200).json({ version: 1 });
});
app.post('/tg/send', (req, res) => {
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
    };
    (0, request_1.default)(options, function (error, response) {
        res.status(200).json(response.body);
        return;
    });
});
https_1.default
    .createServer(
// Provide the private and public key to the server by reading each
// file's content with the readFileSync() method.
{
    key: fs_1.default.readFileSync("privatekey.pem"),
    cert: fs_1.default.readFileSync("public.crt"),
}, app)
    .listen(port, () => {
    console.log(`Hello world app listening on port ${port}!`);
});
// app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
