require('dotenv').config()

module.exports = {
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080',
    CLOUDINARY_UPLOAD_PRESET: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET, 
    CLOUDINARY_UPLOAD_URL: process.env.REACT_APP_CLOUDINARY_UPLOAD_URL  
}