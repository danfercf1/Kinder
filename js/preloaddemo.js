/**
 * HTML5 Preloading animations
 * March 2011
 * Author: Sakthivel ganesan
 * Author: Sasikumar Periyasamy
 * Contact: support@capjo.com
 **/
var PRE_LOAD_SIZE=20;
// Size of the preloading animation
// As the animation is rendered within
// a virtual square. The  width and height are the same
var animTypes=new Array('snake','bee','madsnake','worm',
                        'shades','fan','dots','impatience',
                        'slice','smooth','crazydisc','juggle');
    // List of handles for the timers that are used to hold the animation controls
var MadSnakeAnim=function(canvasId,reverse){
this.colorControl=0;
this.canvasId=canvasId;
this.reverse=reverse;
this.timerControl=null;
this.interval=30;
this.madsnake=function(){
    // By default this rotates in opposite direction
    // as this is a mad snake :)
    var animcanvas=document.getElementById(this.canvasId);
    // get the canvas
    var context = animcanvas.getContext('2d');
    // get the 2d context
    var offSetX=parseInt((context.canvas.width-PRE_LOAD_SIZE)/2);
    var offSetY=parseInt((context.canvas.height-PRE_LOAD_SIZE)/2);
    // get the offset values for centering the animation
    var coordinatesX=[10,15,18.6,20,18.6,15,10,5,1.4,0,1.4,5];
    var coordinatesY=[0,1.4,5,10,15,18.6,20,18.6,15,10,5,1.4];
    // get the coordinates for drawing the dots
    var colors=['#050505','#0c0c0c','#131313','#1a1a1a',
                '#222222','#292929','#303030','#373737',
                '#3f3f3f','#464646','#4d4d4d','#555555'];
    // Colors to create the scheme for the animation

    var size=[2,1.9,1.83,1.75,1.66,1.6,1.5,1.41,1.33,1.25,1.16,1];
    if(this.reverse){
        coordinatesX=coordinatesX.reverse();
        coordinatesY=coordinatesY.reverse();
        colors=colors.reverse();
        size=size.reverse();
        // coordinates has to reversed here for the
        // reversing the animation
    }
    context.clearRect(0, 0, animcanvas.width, animcanvas.height);
    var w = animcanvas.width;
    animcanvas.width = 1;
    animcanvas.width = w;
    // Reseting the canvas is done here for animations
    for(var ik=0;ik<colors.length;ik++){
       context.save();
       context.fillStyle =colors[(ik)%colors.length];
       context.beginPath();
       // Draw the mad snake dots here
       context.arc(coordinatesX[ik]+offSetX,coordinatesY[ik]+offSetY,size[(ik+this.colorControl)%colors.length],0,Math.PI*2,true);
       context.closePath();
       context.shadowColor = '#888888';
       context.shadowBlur = 5;
       context.fill();
       context.restore();
    }
    this.colorControl=this.colorControl+1;
    this.colorControl%=colors.length;
    // color scheme for drawing the animation
};
}

var WormAnim=function(canvasId,reverse){
this.colorControl=0;
this.canvasId=canvasId;
this.reverse=reverse;
this.timerControl=null;
this.interval=30;
this.worm=function(){
    var animcanvas=document.getElementById(this.canvasId);
    // get the canvas
    var context = animcanvas.getContext('2d');
    // get the 2d context
    var offSetX=parseInt((context.canvas.width-PRE_LOAD_SIZE)/2);
    var offSetY=parseInt((context.canvas.height-PRE_LOAD_SIZE)/2);
    // get the offset values for centering the animation
    var coordinatesX=[0,2,4,6,8,10,12,14,16,18,18,18,18,18,18,18,18,18,18,16,14,12,10,8,6,4,2,0,0,0,0,0,0,0,0,0];
    coordinatesX=coordinatesX.reverse();
    var coordinatesY=[0,0,0,0,0,0,0,0,0,0,2,4,6,8,10,12,14,16,18,18,18,18,18,18,18,18,18,18,16,14,12,10,8,6,4,2];
    coordinatesY=coordinatesY.reverse();
    var colors=['#f2f2f2','#ededed','#e8e8e8','#e3e3e3',
                '#dedede','#d9d9d9','#d4d4d4','#cfcfcf',
                '#cacaca','#c5c5c6','#c0c0c1','#bbbbbc',
                '#b7b7b7','#b2b2b2','#adadad','#a8a8a8',
                '#a3a3a3','#9e9e9e','#99999a','#949495',
                '#8f8f90','#8a8a8b','#858586','#808081',
                '#7c7c7c','#777777','#727272','#6d6d6e',
                '#686869','#636364','#5e5e5f','#59595a',
                '#545455','#4f4f50','#4a4a4b','#464647'];
    colors=colors.reverse();
    if(this.reverse){
        coordinatesX=coordinatesX.reverse();
        coordinatesY=coordinatesY.reverse();
        colors=colors.reverse();
    // Coordinates are reversed here
    // to make the reverse animation effect
    }
    context.clearRect(0, 0, animcanvas.width, animcanvas.height);
    var w = animcanvas.width;
    animcanvas.width = 1;
    animcanvas.width = w;
    // reset the canvas for drawing the animations
    for(var ik=0;ik<colors.length;ik++){
        context.save();
        context.fillStyle =colors[(ik+this.colorControl)%colors.length];
        context.beginPath();
        // draw the rectangles here
        context.fillRect(coordinatesX[ik]+offSetX, coordinatesY[ik]+offSetY, 2, 2);
        context.closePath();
        context.fill();
        context.restore();
    }
    this.colorControl=this.colorControl+1;
    this.colorControl%=colors.length;
    // color scheme configuration
};
}

var DotsAnim=function(canvasId,reverse){
this.colorControl=0;
this.canvasId=canvasId;
this.reverse=reverse;
this.timerControl=null;
this.interval=30;
this.dots=function(){
    var animcanvas=document.getElementById(this.canvasId);
    // get the canvas
    var context = animcanvas.getContext('2d');
    // get the 2d context
    var offSetX=parseInt((context.canvas.width-PRE_LOAD_SIZE)/2);
    var offSetY=parseInt((context.canvas.height-PRE_LOAD_SIZE)/2);
    // get the offset values for centering the animation
    var coordinatesX=[0,7,14];
    coordinatesX=coordinatesX.reverse();
    var coordinatesY=[10,10,10];
    var colors=['#444444','#d6d6d6','#d6d6d6'];
    context.clearRect(0, 0, animcanvas.width, animcanvas.height);
    if(this.reverse){
        coordinatesX=coordinatesX.reverse();
        colors=colors.reverse();
    }
    var w = animcanvas.width;
    animcanvas.width = 1;
    animcanvas.width = w;
    // for loop to draw three dots
    for(var ik=0;ik<3;ik++){
        context.save();
        context.fillStyle=colors[(ik+this.colorControl)%colors.length];
        context.beginPath();
        // dots are drawn here
        context.arc(coordinatesX[ik]+offSetX,coordinatesY[ik]+offSetY,3,0,Math.PI*2,true);
        context.closePath();
        context.fill();
        context.restore();
    }
    this.colorControl=this.colorControl+1;
    this.colorControl%=colors.length;
    // color scheme configuration
};
}

Object.prototype.timerid=0;
Object.prototype.currentAnim='';
Object.prototype.alphaVal=0.0;
Object.prototype.StartPreload=function(animType,reverse){
   var inId=this.id;
   if(inId){
    var element=document.getElementById(inId);
       if(element.getContext){
            if(animType=='madsnake'){
                var i=new MadSnakeAnim(inId, reverse);
                this.currentAnim='madsnake';
                this.timerid=setInterval(function(){i.madsnake()},60);
            } else if(animType=='worm'){
                var j=new WormAnim(inId, reverse);
                this.currentAnim='worm';
                this.timerid=setInterval(function(){j.worm()},30);
            } else if(animType=='dots'){
                var m=new DotsAnim(inId, reverse);
                this.currentAnim='dots';
                this.timerid=setInterval(function(){m.dots()},250);
            }
            }
        }
    }

Object.prototype.StopPreload=function(){
   var inId=this.id;
   if(inId){
    var element=document.getElementById(inId);
        if(element.getContext){
            if(this.currentAnim!=''){
                clearTimeout(this.timerid);
                StopPreLoading(inId);
            }
        }
    }
}

function StopPreLoading(canvasId){
            var dCanvas=document.getElementById(canvasId);
            dCanvas.currentAnim='stopping';
            var context = dCanvas.getContext('2d');
            dCanvas.alphaVal=dCanvas.alphaVal+0.05;
            if(dCanvas.alphaVal>=1.0){
                context.clearRect(0, 0, dCanvas.width, dCanvas.height);
                var cw = dCanvas.width;
                dCanvas.width = 1;
                dCanvas.width = cw;
                // reset the canvas
                dCanvas.currentAnim='';
                dCanvas.alphaVal=0;
                Process(canvasId);

            } else {
                context.save();
                context.globalAlpha=dCanvas.alphaVal;
                context.fillStyle = "#ffffff";
                // render the rectangle with the changing global alpha value
                context.fillRect(0, 0, context.canvas.width, context.canvas.height);
                context.restore();
                // continue fading out if the alpha value has not reached
                setTimeout('StopPreLoading("'+canvasId+'")',30);
            }
}

function getCanvas(uid){
	return document.getElementById(uid);
}