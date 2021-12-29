var jj =[70,10,50,30,40,90]
function setup() 
{
  createCanvas(400,400);
  fanatico();
}
function fanatico(){
 var s = jj[0] +jj[1]+ jj[2]+ jj[3]+ jj[4]+ jj[5];
 var m = s/jj.length;
 console.log(m);
}
function draw() 
{
background(51);

}

