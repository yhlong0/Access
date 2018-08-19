const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;


const webRouter = require('./routes/web_router');
const userRouter = require('./routes/user');
const roleRouter = require('./routes/role');
const systemRouter = require('./routes/system');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', webRouter);
app.use('/users', userRouter);
app.use('/roles', roleRouter);
app.use('/systems', systemRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port, function() {
    console.log('Running on PORT: ' + port);
});