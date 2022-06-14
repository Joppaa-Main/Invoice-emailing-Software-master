var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('../serverfiles/routes/index');
var usersRouter = require('../serverfiles/routes/users');
var itemsRouter = require('../serverfiles/routes/item');
var dashboardRouter = require('../serverfiles/routes/dashboard');
var invoiceRouter = require('../serverfiles/routes/invoice');
var customerRouter = require('../serverfiles/routes/customer');
var expenseRouter = require('../serverfiles/routes/expense');
var accountRouter = require('../serverfiles/routes/account');
var addressRouter = require('../serverfiles/routes/address');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

var app = express();
var db = require('../config/database/mongoDb')

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Invoice API",
      description: "Invoice API documentation",
      contact: {
        name: " Carlos Tamale"
      },
      servers: ["http://localhost:5000"]
    }
  },
    apis: ["./serverfiles/routes/*"]
}; 

const swaggerDocs = swaggerJsdoc(swaggerOptions);
//Test swagger documentation
// console.log(swaggerDocs);
// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);
app.use('/dashboard', dashboardRouter); 
app.use('/invoices', invoiceRouter); 
app.use('/customers', customerRouter); 
app.use('/expenses', expenseRouter); 
app.use('/accounts', accountRouter); 
app.use('/locations', addressRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
