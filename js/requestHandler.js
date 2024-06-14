const htmlTemplate = require('./template.js')

const requestHandler = (reqUrl, Dirname, res, contentType)=>{
  
  if (`${reqUrl}`.split(".")[1] === `${Dirname}`) {
    const fs = require("fs");
    fs.readdir(`${Dirname}`, (err, data) => {
      if (err) {
      } else {
        fs.readFile(`${Dirname}/${data[data.indexOf(`${reqUrl}`.split("/")[1])]}`,"utf-8",(err, data) => {
            if (err) {
              res.writeHead(500, { "content-Type": "text/plain" });
              res.write(htmlTemplate(`<h1>Server Error</h1>`));
              res.end();
              console.error(err);
            } else {
              res.writeHead(200, {
                "content-Type": `${contentType}`,
              });
              res.write(data);
              res.end();
            }
          }
        );
      }
    });
  }
}

module.exports = requestHandler
