let counter=1;
let commcounter=1;
function like() {
    document.querySelector('#likeid').innerHTML=counter++   
}
function comment(){
    let usercomm=document.querySelector('#inputid').value;
    
   const newElement= document.querySelector("#reference").cloneNode(true);
    newElement.removeAttribute("id"); //good practice to keep unique id.
    newElement.style.visibility = "visible";
    newElement.children[0].innerHTML=usercomm;

    // newElement.children[1].innerHTML=commcounter++;

    commbox.insertBefore(newElement,commbox.firstChild)
    // commentBox.insertBefore(newElement, commentBox.firstChild);
    // document.querySelector('#commbox').appendChild(newElement);


    document.querySelector('#inputid').value="";
}

function delcomm(delid) {
    delid.parentElement.remove();
  }