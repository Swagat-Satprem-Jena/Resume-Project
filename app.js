import express from 'express';
import web from './routes/web.js';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(process.cwd(), 'public')));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', web); 

app.listen(port, () => {
    console.log(`Server Running at Port Link:- http://localhost:${port}`);
})