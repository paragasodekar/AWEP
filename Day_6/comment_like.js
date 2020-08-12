let counter=1;
let commcounter=1;
function like() {
    document.querySelector('#likeid').innerHTML=counter++   
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

