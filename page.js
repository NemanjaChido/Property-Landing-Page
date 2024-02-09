let nextCard = document.getElementById('next');
let prevCard = document.getElementById('prev');
let wrappedItem = document.querySelector('.item');
let listItem = document.querySelector('.item .cover');

let timeRunning = 1500;
let runTimeOut;

function displayNextRoom(outcome){
    //determine/declare the scope of the item to be displayed 
    let roomItem = document.querySelectorAll('.item .cover .enclosed-item');


    if(outcome === 'next'){
        //Append the child element to displaced into its parent element
        listItem.appendChild(roomItem[0]);
        //displayed the "next" classlist
        wrappedItem.classList.add('next');
    }else{
        let LastItem = roomItem.length - 1;
        listItem.prepend(roomItem[LastItem]);
        //displayed the "previous" classlist
        wrappedItem.classList.add('prev');
    }

    //set interval
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        wrappedItem.classList.remove('next');
        wrappedItem.classList.remove('prev');
    }, timeRunning);
}


//diclare a function when "next" arrow is toggled
nextCard.onclick = function(){
    displayNextRoom('next');
}

//diclare a function when "prevoius" arrow is toggled
prevCard.onclick = function(){
    displayNextRoom('prev');
}



//FOR THE MOBILE SECTION
//select the necessary tags

let menuBar = document.querySelector('.Menu-icon');
let exitBar = document.querySelector('.Exit-icon');
let dropDownMenu = document.querySelector('.dropBar');

//Add an event listener to the Menu-icon to add/display a new classlist
menuBar.addEventListener('click', ()=>{
    dropDownMenu.classList.add('MobileMenu');
});

//Add an event listener to the Exit-icon to remove the added "classlist" 
exitBar.addEventListener('click', ()=>{
    dropDownMenu.classList.remove('MobileMenu');
});