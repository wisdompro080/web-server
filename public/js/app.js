

console.log("this is a js file after using commit"); 
 const weatherform=document.querySelector('form');
 const search=document.querySelector('input');
 const msg1=document.querySelector('#msg-1');


 weatherform.addEventListener('submit',(e)=>{
   e.preventDefault();
  fetch("/weather?address="+search.value)
  .then((res)=>{
    if(res.error){console.log("eee")}else{
      res.json().then((response)=>{
        msg1.textContent="loading..."
        console.log("public js app.js")
        console.log(response);
        msg1.textContent=response.location.name+" "+response.location.country+" "+response.weather;
       
      })}
  })
 
 });