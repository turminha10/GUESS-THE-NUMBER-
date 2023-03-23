var y = Math.floor(Math.random() *  10 + 1);

var x = document.getElementById("guessField").value;

 if(x == y)
{
    alert("PARABENS!!"+playername+", voce acertou em "
    + guess + "tentativa(s)!");
    guess= 1;
}
else if (x > y)
{
    guess++;
    alert("Opa,resposta errada!! tente um numero menor");
}
else
{
    guess++;
    alert("Opa, resposta errada!! tente um numero maior");
}
function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
}