const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'application/pdf': 'pdf',
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    console.log(file);
    if (MIME_TYPES[file.mimetype]) {
      cb(null, true);
    } else {
      console.log("File not supported");
      cb(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 4
  }
}).single('upload');
