const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');

app.use(methodOverride('_method'))
//Connect to db
db.connect();

//static file path
app.use(express.static(path.join(__dirname, 'public')));
//xu ly req.body
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//XMLtHttpRequest, fetch .....

//HTTP logger
// app.use(morgan('combined'));
//template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum:(a,b) =>a+b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
