const htmlTemplate = require('./template.js')

const requestHandler = (reqUrl, Dirname, res, contentType)=>{
  let container = []

  if (!container.includes(`${reqUrl}`)) {
  container.push(`${reqUrl}`);
  }
  console.log(container)
  
  if (`${reqUrl}`.split(".")[1] === `${Dirname}`) {
    const fs = require("fs");
    console.log(Dirname)
    fs.readdir(`${Dirname}`, (err, data) => {
      console.log(data)
      if (err) {
      } else {
        fs.readFile(`${Dirname}/${data[data.indexOf(`${reqUrl}`.split("/")[1])]}`,"utf-8",(err, data) => {
          console.log(Dirname)
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
