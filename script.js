function regdisplay(){
    document.getElementById("reg").style.display="block";
    document.getElementById("pre").style.display="none";

}

function regular(){
    var timereg,cost;

   
    timereg =parseFloat(document.getElementById("timeregular").value);
    
    if(timereg<=50){
        cost = 10
    }

    else{
        cost = 10 + (timereg - 50)*0.20
    }
    
    document.getElementById("costreg").value = "$" + cost;
}


function predisplay(){
    document.getElementById("pre").style.display="block";    
    document.getElementById("reg").style.display="none";
}


function premium(){
    var timeday,timenight,costday,costnight,costtotal;

    timeday =parseFloat(document.getElementById("timeday").value);
    timenight =parseFloat(document.getElementById("timenight").value);

    if(timeday<=75){
        costday = 0
    }

    else{
        costday = (timeday - 75)*0.10
    }
    costtotal = costday+costnight
    document.getElementById("costpre").value = "$" + costtotal;
  

    if(timenight<=100){
        costnight = 0
    }

    else{
        costnight = (timenight - 100)*0.5
    }
}
