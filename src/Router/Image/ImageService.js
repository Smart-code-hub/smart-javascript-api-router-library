const loadImageLibraries = require("./imageLibraries");

const UploadImageMiddelwaredeclaration = props => {
  return `upload.fields([${props.map(a => `{name: '${a.name}'}`)}])`;
};

const ImageUpload = entity => `
 ${loadImageLibraries()}
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      let dir =  path.join(process.cwd(), 'images/${entity.name.toLowerCase()}/'+file.fieldname);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      cb(null,dir);
    },
    filename: function(req, file, cb) {
      cb(null,file.fieldname+'-${entity.name.toLowerCase()}-'+
       Date.now() +
          file.originalname.substring(
            file.originalname.lastIndexOf("."),
            file.originalname.length
          ));
    }
  });
  const upload = multer({ storage: storage });
  `;

module.exports = {
  UploadImageMiddelwaredeclaration,
  ImageUpload
};
