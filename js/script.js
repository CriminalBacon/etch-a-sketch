function createDivs(size){

    // set number of items per row
    document.getElementById("main-div").style.gridTemplateColumns = `repeat(${size}, auto)`;

    for (var j = 0; j < size; j++){  
        for (var i = 0; i < size; i++){
            var div = document.createElement("div");
            div.className = "gridBlock";
            document.getElementById("main-div").appendChild(div);
        }
    }
}

createDivs(16);