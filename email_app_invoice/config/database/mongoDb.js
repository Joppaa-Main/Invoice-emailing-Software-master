//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDBUrl = 'mongodb+srv://joppaaapp:Joppaashopping20@cluster0.nvtwv.mongodb.net/Joppaadb';
mongoose.connect(mongoDBUrl, { useNewUrlParser: true , useUnifiedTopology: true});
console.log('Database connection established')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));