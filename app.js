const {htmlTemplate, tagComponent,http,fs,requestHandler} = require('./Assembly.js')
const XMLHttpRequest = require('xhr2')
const xhr = new XMLHttpRequest()

console.log(xhr)
console.log(htmlTemplate)
console.log(tagComponent)
console.log(fs)
console.log(requestHandler)
let server = http.createServer((req,res)=>{})