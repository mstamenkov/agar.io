var myX, myY;

function initGame(){
    //set initial properties of current user
    sharedStorage.setForMe("myX", 0);
    sharedStorage.setForMe("myY", 0);
    
    //get properties for current user (no latency for this action)
    myX = sharedStorage.getForMe("myX");
    myY = sharedStorage.getForMe("myX");
}

function update() {
	myX = myX+(mouseX-myX)/10;
	myY = myY+(mouseY-myY)/10;
    sharedStorage.setForMe("myX", myX);
    sharedStorage.setForMe("myY", myY);
}

function draw() {
    for (var i=0; i<sharedStorage.list.length; ++i){
        if (sharedStorage.list[i]){
            context.fillRect(sharedStorage.getForUser(i, "myX"), sharedStorage.getForUser(i, "myY"), 30, 30);
        }
    }
}

function keyup(key) {}
function mouseup() {}
