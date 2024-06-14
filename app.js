const {htmlTemplate, tagComponent,http,fs,requestHandler} = require('./Assembly.js')
const XMLHttpRequest = require('xhr2')
const xhr = new XMLHttpRequest()

// console.log(xhr)
// console.log(htmlTemplate)
// console.log(tagComponent)
// console.log(fs)
// console.log(requestHandler)

let server = http.createServer((req,res)=>{

  if (req.method === "GET") {
    console.log(req.url)

    if (req.url === "/") {
      res.writeHead(200, {"content-Type": "text/html"});
      res.write(
        htmlTemplate(tagComponent('h1', 'hola'))
      );
    }else{
      if (req.url === "/favicon.ico") {
        res.writeHead(200, {"content-Type": "image.ico"});
        fs.readFile()
        res.write();
        res.end()
      }
  
      if(req.url.split(".")[1] === 'js'){
        requestHandler(req.url, "js", res,"application/javaScript")
      }
      // if(req.url.split(".")[1] === 'ico'){
      //   requestHandler(req.url, "ico", res,"image/ico")
      // }

    }

    // res.write(tagComponent('h1', 'hola'))

  }
})

let PORT = 8080
server.listen(PORT, console.log(`server running on http://localhost:${PORT}/`))