
let commcounter=1;
function like(btn) {
    // let v = btn.innerHTML;
    // let counter=parseInt(v);
    let counter=parseInt(btn.innerHTML);
    btn.innerHTML=++counter; 
    // let counter=parseInt(btn.children[1].innerHTML);
    // btn.children[1].innerHTML=++counter; 
}

function comment(){
    let usercomm=document.querySelector('#inputid').value;
    const element=document.createElement('div');

    const child1 = document.createElement('div');
    const child2 = document.createElement('button');

    child1.textContent=usercomm;
    child2.textContent='Delete';

    element.appendChild(child1);
    element.appendChild(child2);

    element.style.background="black";
    element.style.color='white';
    element.style.font='15px';
    
    document.querySelector('#commbox').appendChild(element);


    document.querySelector('#inputid').value="";
}

