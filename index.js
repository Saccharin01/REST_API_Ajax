import {tagComponent} from "./tagComponent.js";
const xhr = new XMLHttpRequest()
let reqMethod = "GET"
let apiKey = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA1Mjg1NjQifQ.OVaDZZp4wwS1EpDMDlNUvAUgGSfXNbTXYUbMiqd-NGbaj5MeVzJaSVBwdr68MAU-Fg1_muH13MmMer6qgE8JL4NLciG_4hXg0gXOprZ-dc9nxMQ9zdkzgetRVKz1Pw2AUFgDP342Wolms5GdH9i97C-gcYm9EdnJQKj5FNcm0iycT1qxuJH8yPhD5Uew4wgeUEkFo1PSjbsX4f29Sy2xO2cj9lnPQI4ArPDyCL4cP41yxXR3rJ2Kx0B-egydyQfiCaCTuliqunx2JDAh9kJMZ_GmehkzBJ6eMAcEt9hSN6QhYrbql6c8Nne1tCpmFgph09oguOGzUAQu-pQKA5-DIQ`

let charRequestUrl = "https://developer-lostark.game.onstove.com/characters/%EC%82%AC%EC%95%84%EC%B9%B4%EB%A6%B0/siblings"

xhr.open(reqMethod, `${charRequestUrl}`,true)
xhr.setRequestHeader('accept','application/json')
xhr.setRequestHeader('authorization', `bearer ${apiKey}`);
xhr.send()


const root = document.getElementById("root");
root.style.height = "100vh";
root.style.width = "70vw";
root.style.marginLeft = "13vw";
let divOne = root.appendChild(document.createElement("div"));
let divTwo = root.appendChild(document.createElement("div"));

divOne.style.height = "40%";
divOne.style.backgroundColor = "orange";
divOne.style.marginBottom = "4vh";
divOne.style.marginTop = "4vh";

divTwo.style.display = "grid";
divTwo.style.gridTemplateColumns = "repeat(4 ,1fr)";
divTwo.style.gridTemplateRows = "repeat(4, 1fr)";
divTwo.style.gap = "30px";
divTwo.style.height = "50%";
// root.style.

xhr.addEventListener(`load`, ()=>{
  if(xhr.status === 200){
    let jsondata = JSON.parse(xhr.responseText);
    console.dir(jsondata);

    let valueContainer = [];

    jsondata.forEach((ele) => {
      let jsonValue = Object.values(ele);
      valueContainer.push(jsonValue);
      let div = document.createElement("div");
      divTwo.appendChild(div);
      div.style.backgroundColor = "bisque";
      div.setAttribute("class", "charSection")
    });
    let charSection = document.querySelectorAll(".charSection")
    console.log(charSection)

    let charInfo = valueContainer.map((ele)=>{
      return tagComponent("P",ele)
    })
    console.log(charInfo)
    for(let i = 0; i<charSection.length; i++){
      charSection[i].innerHTML = charInfo[i]
    }
  }
  if(xhr.status > 399){
    throw new Error('something happen')
  }  
})