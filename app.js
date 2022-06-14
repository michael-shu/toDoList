'use strict';

const add = document.getElementById('add');

add.addEventListener('click', function(){
    let test = document.querySelector('input').value;

    if(test)
    {
        /* Create a node, add it to the ol using DOM*/
        let input = document.querySelector('input').value;
        let btnDone = document.createElement("button");
        let node = document.createElement('li');

        node.appendChild(document.createTextNode(input));
        node.appendChild(btnDone);

        btnDone.innerHTML = "<i class='fas fa-check'></i>";
        btnDone.addEventListener("click", () => {
            done();
    });

    function done() {
        node.classList.toggle("checked");
        btnDone.classList.toggle("btnDone");
      }

        document.getElementById('list').appendChild(node);
        document.getElementById('input').value = '';
        
        const list = document.querySelector('list');
    }
});

const clear = document.getElementById('clear');

clear.addEventListener('click',function(){
    let myList = document.getElementById('list');
    myList.innerHTML = '';
});

if(list){
list.addEventListener('dblclick',function(){
    console.log('Something is happening');
    console.log(list);
});
}

const remove = document.getElementById('rC');

remove.addEventListener('click',function(){

    let removal = document.getElementsByClassName('checked');
    for(let i = removal.length-1; i>=0; i--)
    {
        removal[i].remove();
    }
});




