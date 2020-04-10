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

    isMouseDown = !isMouseDown;

}

function changeBackground(){
    if (isMouseDown){
        this.style.backgroundColor = "black";
    }
}

var isMouseDown = false;

createDivs(64);