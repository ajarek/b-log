const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
   postedAt: {
        type: String,
        default: new Date().toLocaleString()
    },
})
module.exports = new mongoose.model('Blog',BlogSchema)