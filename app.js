'use strict';

/* Code to give functionality to the add button */
const add = document.getElementById('add');
add.addEventListener('click', function(){
    let test = document.querySelector('input').value;

    /* Only if there's actually a value in input, should you start this whole process of creating a list element */
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

/* Clear automatically clears all elements that have been marked as completed by the user and moved to the completed list */
const clear = document.getElementById('clear');
clear.addEventListener('click',function(){
    let myList = document.getElementById('completed');
    myList.innerHTML = '';
});


/* Adds all elements to the unordered list that represents the completed tasks, and then removes all of them from the ordered list */
const moveToCompleted = document.getElementById('completeButton');
moveToCompleted.addEventListener('click',function(){

    let mover = document.getElementsByClassName('checked');
    let completed = document.getElementById('completed')

    /* Adding loop */
    for(let i = 0; i<mover.length;i++)
    {
        let temp = mover[i].textContent;
        let input = removeCheckMark(temp);
        let node = document.createElement('li');
        node.appendChild(document.createTextNode(input));
        completed.append(node);
        
    }

    /* Removing loop */
    for(let i = mover.length-1; i>=0; i--)
    {
        mover[i].remove();
    }

});

/* Simple function that removes the last bit of a string, which in this case is the checkmark so it doesn't appear in the unordered list of completed items */
function removeCheckMark(str){
    let temp = str.slice(0,-1);
    return temp;
}

/* Adds the functionality of the dropdown menu, which allows the user to acess 3 buttons without taking up too much space */
const toggle = document.getElementById('dropdownMenuToggle');
const menu = document.getElementById('dropdownMenu');
toggle.addEventListener('click',function(){
    menu.classList.toggle('show');

    if(toggle.ariaExpanded === 'true')
    {
        toggle.ariaExpanded = false;
    } else {
        toggle.ariaExpanded = true;
    }

});




