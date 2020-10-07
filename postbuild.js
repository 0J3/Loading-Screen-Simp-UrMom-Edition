setTimeout(() => {
  var esformatter = require('esformatter');
  var fs = require('fs');

  // for a list of available options check "lib/preset/default.js"
  var options = {
    indent: {
      value: '  '
    },
    lineBreak: {
      before: {
        // at least one line break before BlockStatement
        BlockStatement: '>=1',
        // only one line break before DoWhileStatementOpeningBrace
        DoWhileStatementOpeningBrace: 1,
        // ...
      }
    },
    whiteSpace: {
      // ...
    }
  };

  const files = fs.readdirSync("./src/");

  files.forEach(file => {
    
    const formattedCode = esformatter.format(codeStr, options);
  })
}, 0)

const fs = require('fs');
const path = require("path")

const dir = './bin/';

try {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    if (file.endsWith(".scss") || file.endsWith(".ts")) {
      fs.unlink(`${dir}${file}`, () => {
        console.log(`Removed file: ${dir}${file}`)
      })
    } else {
      let split = file.split(".")
      let extension = `${split[split.length-1]}`
      split.pop()

      if (extension == "map") {
        extension = split[split.length - 1].toString()
      }

      if (extension == "html") {
        // nothing to do
      } else if (extension == "css") {
        extension = "scss"
      } else if (extension == "js") {
        extension = "ts"
      }

      let originalFile = split.join(".")

      let OriginalFilePath = path.resolve(`${dir}../src/${originalFile}.${extension}`)

      if (!fs.existsSync(OriginalFilePath)) {
        fs.unlink(`${dir}${file}`, () => {
          console.log("src missing file:", OriginalFilePath + "; removing from bin")
        })
      }
    }
  });
} catch (err) {
  console.log(err);
}