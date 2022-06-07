const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://swathi:1234@cluster0.bh4fcjr.mongodb.net/?retryWrites=true&w=majority")
}