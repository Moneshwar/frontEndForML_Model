const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(fileUpload());
app.get('/', (req, res) => {
});
app.post('/upload', (req, res) => {
  try{
    const { image } = req.files;
      image.name="Analyser.png";
      image.mv(__dirname + '/Uploads/' + image.name);
      res.send("File received successfully");
  }
  catch(err){
    res.send("Unsupported format");
  }

});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
