const express = require('express');
const app = express();
const port = process.env.PORT || 4000;


const webRouter = require('./routes/web_router');


app.use('/', webRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port, function() {
    console.log('Running on PORT: ' + port);
});