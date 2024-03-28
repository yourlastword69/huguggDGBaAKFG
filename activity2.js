function back()
{
 window.location="activity_1.html";
}
function getscore()
{
a=localStorage.getItem("Score");
document.getElementById("output").innerHTML="score="+a;
}