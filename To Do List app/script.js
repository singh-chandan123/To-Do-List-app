const inputelement=document.getElementById('input-tag');
const buttons=document.getElementById("buttons");
buttons.addEventListener('click',function(){
  if(inputelement.value===''){
    alert("please enter some text inside document");
  }
  else{
    //crete element tag so that we can write sometext inside li
const lists=document.createElement("li");
 lists.innerHTML=inputelement.value;
 listitem.appendChild(lists);
    //now make cross sign so that we can  delete 
let spantag=document.createElement("span");
spantag.innerHTML="\u00d7";
lists.appendChild(spantag);
  }
  //remove text after writing in input
  inputelement.value="";
  //call function savedata
  savedata();

})

listitem.addEventListener('click',function(e){
if(e.target.tagName==="LI"){
e.target.classList.toggle("list-1");
  //call function savedata
savedata();
}
else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
  //call function savedata
savedata();
}
},false);

//function for set data in the browser 
function savedata(){
  localStorage.setItem("data",listitem.innerHTML)//key and value for storage
}
//function for getdata
function getalldata(){
 listitem.innerHTML= localStorage.getItem('data');//call data by key in savedata
}
getalldata();