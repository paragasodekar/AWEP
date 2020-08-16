function save() {
   let a = document.querySelector('#userid').value;
   let b = document.querySelector('#passid').value;
   if (a=="" || b=="") {
       window.alert('Empty not allowed');
   } else {
    let x = document.querySelector('#userid').value;
    let y = document.querySelector('#passid').value;

    const newitem = document.querySelector('#refer').cloneNode('true');
    newitem.removeAttribute('id');
    newitem.children[0].innerhtml=x;
    newitem.children[1].innerhtml=y;
    
    contentbox.insertBefore(newitem,contentbox.firstChild);
    // document.querySelector('#contentbox').appendChild(newitem);
    document.querySelector('#userid').value="";
    document.querySelector('#passid').value="";
       
   }
}