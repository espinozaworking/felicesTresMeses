function dijoSi(){

    window.location.href="../HTML/metas/metassi.html";

}

function dijoNo(){
    ohno.textContent = "Tu sabes que si sientes que hay algo que no quiere funcionar me lo puedes decir, quiero que tengamos un lindo futuro juntos y sé que tú también lo piensas o pensaste así. Hablemos, ¿si?, intentemos resolver eso que te incomoda o te hace sentir mal, por favor."
}

document.getElementById("si").addEventListener("click", dijoSi);
document.getElementById("no").addEventListener("click",dijoNo)