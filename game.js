var canvas = document.getElementById("canvas")
var rect = [0, 0, 1, 1]
var a = 0, b = 0
var work
var posMouseX = 0, posMouseY = 0
var velRep = 1
update()
function update(){
	if (a == 0){
		draw()
		a = 0
	}
	if (work == "rand"){
		if (b >= 10/velRep){
			randpos()
			b = 0
		}
		b++
		document.getElementById("rand").style.backgroundColor = "white"
	} else{
		document.getElementById("rand").style.backgroundColor = "lightgray"
	}
	
	if (work == "followMouse"){
		if (b >= 10/velRep){
			rectFollowMouse()
			b = 0
		}
		followMouse()
		b++
		document.getElementById("followMouse").style.backgroundColor = "white"
	} else{
		document.getElementById("followMouse").style.backgroundColor = "lightgray"
	}
	
	
	logic()
	window.requestAnimationFrame(update)
}


function draw(){
	var canvas = document.getElementById("canvas")
	var ctx = canvas.getContext("2d")
	ctx.clearRect(0, 0, 1000, 1000)
	ctx.fillStyle = "black"
	ctx.fillRect(rect[0],rect[1],rect[2],rect[3])
}
function logic(){
	if (rect[0] < 0){
		rect[0] = 0
	}
	if (rect[0] > 40 - rect[2]){
		rect[0] = 40 - rect[2]
	}
	if (rect[1] < 0){
		rect[1] = 0
	}
	if (rect[1] > 20 - rect[3]){
		rect[1] = 20 - rect[3]
	}
	if (velRep == 1){
		document.getElementById("vel_1p00").style.backgroundColor = "white"
	} else{
		document.getElementById("vel_1p00").style.backgroundColor = "lightgray"
	}
	if (velRep == 1.5){
		document.getElementById("vel_1p50").style.backgroundColor = "white"
	} else{
		document.getElementById("vel_1p50").style.backgroundColor = "lightgray"
	}
	if (velRep == 2){
		document.getElementById("vel_2p00").style.backgroundColor = "white"
	} else{
		document.getElementById("vel_2p00").style.backgroundColor = "lightgray"
	}
	if (velRep == 0.75){
		document.getElementById("vel_0p75").style.backgroundColor = "white"
	} else{
		document.getElementById("vel_0p75").style.backgroundColor = "lightgray"
	}
	if (velRep == 0.50){
		document.getElementById("vel_0p50").style.backgroundColor = "white"
	} else{
		document.getElementById("vel_0p50").style.backgroundColor = "lightgray"
	}
}

document.getElementById("rand").onclick = function(){
	work = "rand"
	rect = [0, 0, 1, 1]
}
document.getElementById("followMouse").onclick = function(){
	work = "followMouse"
	rect = [0, 0, 1, 1]
}

function randpos(){
	rect[0] += (Math.floor(Math.random() * 3) - 1)
	rect[1] += (Math.floor(Math.random() * 3) - 1)
}
function followMouse(){
	document.getElementById("canvas").onmouseover = function(){
		addEventListener("mousemove", mouseMove)
	}
	document.getElementById("canvas").onmouseout = function(){
		removeEventListener("mousemove", mouseMove)
	}
}
function mouseMove(e){
	posMouseX = e.pageX
	posMouseY = e.pageY - 80
}
function rectFollowMouse(){
	if ((rect[0] + rect[2]) - posMouseX/20 > 0.5){
		rect[0] -= 1
	}
	if ((rect[0] + rect[2]) - posMouseX/20 < -0.4){
		rect[0] += 1
	}
	
	if ((rect[1] + rect[3]) - (posMouseY/20 - 5) > 0.4){
		rect[1] -= 1
	}
	if ((rect[1] + rect[3]) - (posMouseY/20 - 5) < -0.5){
		rect[1] += 1
	}
}
document.getElementById("vel_1p00").onclick = function(){velRep = 1}
document.getElementById("vel_1p50").onclick = function(){velRep = 1.50}
document.getElementById("vel_2p00").onclick = function(){velRep = 2}
document.getElementById("vel_0p75").onclick = function(){velRep = 0.75}
document.getElementById("vel_0p50").onclick = function(){velRep = 0.50}