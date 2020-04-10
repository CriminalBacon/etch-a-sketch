function createDivs(size){

    // set number of items per row
    document.getElementById("main-div").style.gridTemplateColumns = `repeat(${size}, auto)`;

    for (var j = 0; j < size; j++){  
        for (var i = 0; i < size; i++){
            var div = document.createElement("div");
            div.className = "gridBlock";
            div.addEventListener("mousedown", changeIsMouseDown);
            div.addEventListener("mouseover", changeBackground);
            div.addEventListener("mouseup", changeIsMouseDown);
            div.addEventListener("drag", changeIsMouseDown);
            document.getElementById("main-div").appendChild(div);
        }
    }
}

function changeIsMouseDown(){
    // change isMouseDown boolean to the opposite value
    isMouseDown = !isMouseDown;

}

function changeBackground(){
    //check to see if the mouse is down then change the block's background
    if (isMouseDown){
        this.style.backgroundColor = "black";
    }
}

function validateInput(number){
    // checks to see if input is a number greater than 0
    if (!isNaN(number) && (number > 0)){
        return true;
    } else {
        return false;
    }
}

function removeAllBocks(){
    // removes all blocks by selecting the last child of "main-div" and removing it
    var allBlocks = document.getElementById("main-div")
    while (allBlocks.firstChild){
        allBlocks.removeChild(allBlocks.lastChild);
    }
}

function resetGrid(){
    //changes all blocks background color to white
    var allBlocks = document.querySelectorAll(".gridBlock");
    allBlocks.forEach((block) => {
        block.style.backgroundColor = "white";
    });

    var newSize = prompt("Enter new grid size");
    if (validateInput(newSize)){
        removeAllBocks();
        createDivs(newSize);

    }

}

var isMouseDown = false;
var numberOfBlocks = 16;

createDivs(numberOfBlocks);