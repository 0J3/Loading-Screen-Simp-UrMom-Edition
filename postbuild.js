const fs = require('fs');
const path = require("path")

const dir = './bin/';

try {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    if (file.endsWith(".scss")||file.endsWith(".ts")) {
      fs.unlink(`${dir}${file}`,()=>{
        console.log(`Removed file: ${dir}${file}`)
      })
    } else {
      let split = file.split(".")
      let extension = `${split[split.length-1]}`
      split.pop()
      let originalFile=split.join(".")

      if (extension == "html"){
        // nothing to do
      } else if (extension == "css") {
        extension="scss"
      } else if (extension == "js") {
        extension="ts"
      } else if (extension == "map") {
        return
      }

      let OriginalFilePath = path.resolve(`${dir}../src/${originalFile}.${extension}`)

      if (!fs.existsSync(OriginalFilePath)){
        fs.unlink(`${dir}${file}`,()=>{
          console.log("src missing file:",OriginalFilePath+"; removing from bin")
        })
      }
    }
  });

} catch (err) {
  console.log(err);
}