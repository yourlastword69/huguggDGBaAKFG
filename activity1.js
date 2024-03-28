score=0;
function Update()
{
    score=score+1;
    document.getElementById("score").innerHTML="Score:"+ score;
}
function Save()
{
    localStorage.setItem("Score",score);
}
function Next()
{
    window.location="activity_2.html";
}