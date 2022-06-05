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
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
