const mongoose = require("mongoose")

const videoSchema = mongoose.Schema({
    videoId: {
        required: true,
        type: String
    },
    imageThumbnailUrl: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Video', videoSchema)