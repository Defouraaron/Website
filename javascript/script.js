function controleer(isJuist, juistAntwoord,Antwoord)
{
    if(isJuist)
    {
        document.getElementById(Antwoord).innerHTML =
        "Juist! Antwoord " + juistAntwoord + " was correct.";

        document.getElementById("true").style.color = "green";
        
    }
    else
    {
        document.getElementById(Antwoord).innerHTML =
        "Fout! Het juiste antwoord was " + juistAntwoord + ".";

    }
}
