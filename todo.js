let input=document.getElementById("input");
let btn=document.getElementById("btn");
btn.addEventListener('click',additem);
function additem(){                                             
    let val=input.value;
    if(val==""){
        alert("Input is blank");
        return;
    }
    createItem(val);
    input.value="";
    // console.log(data);
}
function deleteitem(e){
    console.log(e.target);
    e.target.parentElement.remove();
}
function createItem(data){
    let item=document.createElement('li');
    item.className="lis";
    item.textContent=data;

    let butn=document.createElement('button');
    butn.textContent='X';
    item.appendChild(butn);
    butn.addEventListener('click',deleteitem);

    let parent=document.querySelector(".output ul");
    console.log(parent);
    parent.appendChild(item);
}