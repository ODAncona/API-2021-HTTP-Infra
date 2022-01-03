const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'application/pdf': 'pdf',
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const extension = MIME_TYPES[file.mimetype];
    if (extension == 'pdf')
      // Upload a document
      cb(null, 'upload/document');
    else
      // Upload an image
      cb(null, 'upload/image');
  },
  filename: (req, file, cb) => {
    const extension = MIME_TYPES[file.mimetype];
    const name = file.originalname.split('.')[0].replaceAll(' ', '_') + '_' + Date.now() + '.' + extension;
    cb(null, name);
  }
});

module.exports = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (MIME_TYPES[file.mimetype]) {
      cb(null, true);
    } else {
      console.log("File not supported");
      cb(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 16
  },
  onFileSizeLimit: file => fs.unlinkSync('./' + file.path)
});
