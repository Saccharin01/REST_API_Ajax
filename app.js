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
      res.end(htmlTemplate());
    }
    requestHandler(req.url, "js", res,"application/javaScript")
    requestHandler(req.url, "ico", res,"image/ico")
    tagComponent('h1','환영합니다')
  }

})

let PORT = 8080
server.listen(PORT, console.log(`server running on http://localhost:${PORT}/`))