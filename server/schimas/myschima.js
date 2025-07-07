const mongoose = require('mongoose')

const mydatapattern = mongoose.Schema({
    title:String,
    content:String,
    updatedAt:Date,
})

const myschimatype = mongoose.model('usernotes',mydatapattern)
module.exports = myschimatype