// The area that a box can move
let playArea = document.querySelector("#play-area");
// The box
let box = document.querySelector("#box");

// The position of the box in x and y component
let x = 0;
let y = 0;

// When key pressing, start moving
document.addEventListener("keypress", keyPressMoving);

function keyPressMoving(e){
    // Default moving distance
    let distance = 50;

    // Get the key and convert it to lowercase
    let key = e.key;
    key = key.toLowerCase();

    // console.log(key.key);
    switch(key){
        case "d":
            movingXDirection(distance);
        break;
        // moving with negative x direction to move to left
        case "a":
            movingXDirection(-distance); 
        break;

        case "w":
            movingYDirection(-distance); 
        break;

        case "s":
            movingYDirection(distance); 
        break;
    }
}

// check if the box on the edge of the x or y component 
// The width and height of the play area initially has taken by the width and the height of the box
// so minus 100
function checkDirection(direction, distance){
    if(direction == "x"){
        let playAreaWidth = playArea.clientWidth - 100;

        if(((x + distance) > playAreaWidth) || ((x + distance) < 0)){
            return true;
        }
        else{
            return false;
        }

    }else{
        let playAreaHeight = playArea.clientHeight - 100;

        if(((y + distance) > playAreaHeight) || ((y + distance) < 0)){
            return true;
        }else{
            return false;
        }
    }
}

function movingXDirection(distance){
    // (x + distance) < 0 is (x - distance) < 0 when moving with negative x
    if(checkDirection("x", distance)){
        alert("The box is on the edge of the x axis.");
    }
    else{
        x += distance;
        let translate = "translate(" + x + "px," + y + "px)";
        box.style.transform = translate;
    }
}

function movingYDirection(distance){
    if(checkDirection("y", distance)){
        alert("The box is on the edge of the y axis.");
    }
    else{
        y += distance;
        let translate = "translate(" + x + "px," + y + "px)";
        box.style.transform = translate;
    }
}
