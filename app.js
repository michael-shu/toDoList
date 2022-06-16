'use strict';

const add = document.getElementById('add');
add.addEventListener('click', function(){
    let test = document.querySelector('input').value;

    if(test)
    {
        /* Create a node, add it to the ol using DOM*/
        let input = document.querySelector('input').value;
        let btnDone = document.createElement("button");

        
        btnDone.className = 'toggleCompleted';
        btnDone.innerHTML = '✓';
        let node = document.createElement('li');

        node.appendChild(document.createTextNode(input));
        node.appendChild(btnDone);

        btnDone.addEventListener("click", () => {
            done();
    });
    function done() {
        //To designate the list item as checked for completion
        node.classList.toggle('checked');
        
        //To restyle the button itself when you click it
        btnDone.classList.toggle("btnDone");
      }

        document.getElementById('toDo').appendChild(node);
        document.getElementById('input').value = '';
    }
});


const clear = document.getElementById('clear');
clear.addEventListener('click',function(){
    let myList = document.getElementById('completed');
    myList.innerHTML = '';
});


const moveToCompleted = document.getElementById('completeButton');
moveToCompleted.addEventListener('click',function(){

    let mover = document.getElementsByClassName('checked');
    let completed = document.getElementById('completed')
    for(let i = 0; i<mover.length;i++)
    {
        let temp = mover[i].textContent;
        let input = removeCheckMark(temp);
        let node = document.createElement('li');
        node.appendChild(document.createTextNode(input));
        completed.append(node);
        
    }
    for(let i = mover.length-1; i>=0; i--)
    {
        mover[i].remove();
    }
});

function removeCheckMark(str){
    let temp = str.slice(0,-1);
    return temp;
}

const toggle = document.getElementById('dropdownMenuToggle');
const menu = document.getElementById('dropdownMenu');
toggle.addEventListener('click',function(){
    menu.classList.toggle('show');

    console.log(toggle.ariaExpanded);
    console.log(typeof(toggle.ariaExpanded));

    if(toggle.ariaExpanded === 'true')
    {
        toggle.ariaExpanded = false;
    } else {
        toggle.ariaExpanded = true;
    }

});




