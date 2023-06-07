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
    let distance = 10;

    // Get the key and convert it to lowercase
    let key = e.key;
    key = key.toLowerCase();

    // console.log(key.key);
    switch(key){
        case "d":
            movingRight(distance);
        break;
        // moving with negative x direction to move to left
        case "a":
            movingLeft(distance); 
        break;

        case "w":
            movingYDirection(distance); 
        break;

        case "s":
            movingYDirection(distance); 
        break;
    }
}

// calculate the width in percentage
function getBoxWidth(){
    let boxWidth = box.clientWidth;
    let playAreaWidth = playArea.clientWidth;

    let boxPercentWidth = Math.ceil((boxWidth / playAreaWidth)*100);
    return boxPercentWidth;
}

// calcualte the height in percentage
function getBoxHeight(){
    let boxHeight = box.clientHeight;
    let playAreaHeight = playArea.clientHeight;

    let boxPercentHeight = Math.ceil((boxHeight / playAreaHeight)*100);
    return boxPercentHeight;
}

// check if the box move out of the play area toward right direction
function checkMovingRight(distance){
    let playAreaWidth = 100 - getBoxWidth();

    if((x + distance) > playAreaWidth)
        return false;

    return true;
}

// check if the box move out of the play area toward left direction
function checkMovingLeft(distance){
    let playAreaWidth = 100 - getBoxWidth();

    if((x - distance) < 0)
        return false;

    return true;
}

// check if the box move out of the top of the play area
function checkMovingTop(distance){
    let playAreaHeight = 100 - getBoxHeight();

    if((y - distance) < 0)
        return false;

    return true;
}

// check if the box moves out of the botton pf the play area
function checkMovingDown(distance){

    return true;
}

// How many right space does the box can move 
function get_RightSpace(){
    let playAreaWidth = 100 - calculateXLimit();
    let distance = playAreaWidth - x;

    return distance;
}


// How many left space does the box can move
function get_LeftSpace(){
    return x;
}

// move to right
function movingRight(distance){
    if(checkMovingRight(distance)){
        x += distance;
        box.style.left = x + "%";
    }
    else{
        let playAreaWidth = 100 - getBoxWidth();

        if(x < playAreaWidth){
            x += get_RightSpace();
            box.style.left = x + "%";
        }
        else{
            alert("The box cannot move to right");
        }
    }
}

// move to left
function movingLeft(distance){
    if(checkMovingLeft(distance)){
        x -= distance;
        box.style.left = x + "%";
    }
    else{
        let playAreaWidth = 100 - getBoxWidth();

        if(x > 0){
            x -= get_LeftSpace();
            box.style.left = x + "%";
        }
        else{
            alert("The box cannot move to left");
        }
    }
}

function movingYDirection(distance){
    y += distance;
    box.style.top = y + "%";
}

