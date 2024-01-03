const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({
    email:{
        type:String,
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
}, {timestamps: true})

const Expense = mongoose.model('expense',ExpenseSchema)
module.exports = Expense;