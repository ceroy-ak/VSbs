var page= document.getElementById('page');
var btn=document.getElementById('btn');
let bpage=chrome.extension.getBackgroundPage();
btn.addEventListener("click", ()=>{
  chrome.runtime.sendMessage({num: page.value}, (response)=>{
    console.log(response);
  });

 });
