setInterval(function() {

    const now = new Date();
    const hour = now.getHours();
    const min=now.getMinutes();
    const sec=now.getSeconds();

    console.log(hour,":",min,":",sec);
    
    if(hour>12){
        hourpm=hour%12;
        console.log(hourpm,":",min,":",sec, "PM");
    }
    else{console.log(hour,":",min,":",sec, "AM");}
    
}, 1000);