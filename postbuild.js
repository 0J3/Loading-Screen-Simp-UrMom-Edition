const fs = require('fs');

const dir = './bin/';

try {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    if (file.endsWith(".scss")||file.endsWith(".ts")) {
      fs.unlink(`${dir}${file}`,()=>{
        console.log(`removed ${dir}${file}`)
      })
    }
  });

} catch (err) {
  console.log(err);
}