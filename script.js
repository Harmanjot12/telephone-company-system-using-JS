function regular(){
    document.getElementById("reg").style.display="block";
}

function premium(){
    document.getElementById("pre").style.display="block";
}

function Telephone()
{
    var account,service,timereg,timeday,timenight,cost,costday,costnight,costtotal;
    
    accountnum = parseFloat(document.getElementById("account").value);
    ser = document.getElementById("service").value;
    timereg =parseFloat(document.getElementById("timeregular").value);
    timeday =parseFloat(document.getElementById("timeday").value);
    timenight =parseFloat(document.getElementById("timenight").value);
   
    if (ser=='regular'){
        if(timereg<=50){
            cost = 10
        }

        else{
            cost = 10 + (timereg - 50)*0.20
        }
        cost = costtotal;
        alert(cost);
    }

    else{
        if(timeday<=75 || timenight<=100){
            costday = 0
            costnight = 0
        }

        else{
            costday = (timeday - 75)*0.10
            costnight = (timenight - 100)*0.5
        }
        costtotal = costday+costnight
    }

    document.getElementById("cost").value = "$" + costtotal;
}