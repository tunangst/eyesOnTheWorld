const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EyeSchema = new Schema({
    pic: {
        fieldname: { type: String },
        originalname: { type: String, required: true },
        encoding: { type: String },
        mimetype: { type: String },
        id: { type: String },
        filename: { type: String, required: true },
        bucketName: { type: String },
        chunkSize: { type: Number },
        size: { type: Number },
        md5: { type: String },
        uploadDate: { type: Date, required: true },
        contentType: { type: String }
    },
    info: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        camera: { type: String },
        date: { type: Date },
        width: { type: Number },
        height: { type: Number },
        aperture: { type: Number },
        shutter: { type: Number },
        iso: { type: Number },
        exposure: { type: Number },
        light: { type: String },
        flash: { type: String },
        flashStrength: { type: String },
        contrast: { type: String },
        saturation: { type: String },
        sharpness: { type: String },
        brightness: { type: Number },
        whiteBalance: { type: String },
        zoom: { type: Number },
        artist: { type: String },
        software: { type: String },
        copyright: { type: String }
    }
});

module.exports = Eye = mongoose.model('eye', EyeSchema);
