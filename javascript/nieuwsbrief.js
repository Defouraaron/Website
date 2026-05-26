function nieuwsbrief(){
    let naam;
    let leeftijd;
    let mail;

    naam=document.getElementById("naam").value;
    leeftijd=document.getElementById("leeftijd").value; 
    mail=document.getElementById("mail").value;

    if(leeftijd<18)
    {
        document.getElementById("uitv").innerHTML="Je bent niet welkom voor deze inhoud  ";
    }
    else
    {
            document.getElementById("uitv").innerHTML="Vanaf nu krijgt u de nieuwsbrief "+naam +" ,op het e-mail:"+mail; 
}
}