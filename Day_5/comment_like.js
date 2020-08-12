let counter=1;
let commcounter=1;
function like() {
    document.querySelector('#likeid').innerHTML=counter++   
}
function comment(){
    let element=document.createElement('div');
    element.textContent='new comment'+ commcounter++;
    element.style.background="black";
    element.style.font='15px';
    document.querySelector('#commid').appendChild(element);
}