function iniciaJogo() {
    var nome = "Ramom";
    var confirmarRamom = confirm(` O ${nome} era apenas o jardineiro leal e pacato de dona Clotide, não faz mal nem às plantas. Tem certeza que gostaria de continuar?`);

    if (confirmarRamom  == true) {
        historiaRamom ();
    }

    function historiaRamom () {
        alert("Após coletar a evidência do carretel, você volta a interrogar o homem:-“E Quanto a Senhora Margareth, teria algum motivo para cometer o crime? ”");
        alert("- “Vixe... a Dona Margareth e a Dona Clotilde nunca se deram muito bem não, a rixa entre elas é da época de escola, parece que as duas paqueravam o falecido patrão que Deus o tenha, e Dona Margareth nunca se conformou com o patrão ter se casado com a patroa não. ” – o Homem responde");
        alert("- “ Interessante, e você relatou que encontrou os dois juntos. Qual a relação entre eles? ” – Você pergunta");
        alert("- “ Tem boatos na vizinhança que a Dona Margareth anda dando uns trocados para o garoto quebrar os vasos e atormentar a Dona Clotilde, mas você sabe né.... O povo gosta de uma fofoca. “ ");

        var brincoRa = prompt("Você encontra um brinco no chão próximo ao corpo, e nota que o mesmo brinco está faltando em uma das orelhas de Margareth \n\n Gostaria de prosseguir com investigação? Digite 1 para continuar investigando \n Digite 0 para desisitir do suspeito.");

        if (validarEscolhaUsuario(brincoRa) == false) {
            historiaRamom ()
        }

        if (brincoRa == 1) {
            historiaRamom1 ();
        } else if (rastroDeSangue == 0) {
            gameOver();
        }
    }

    function historiaRamom1() {
        alert("Após coletar a evidência, você retoma o interrogatório:-“ Mas por que essa tesoura de poda está embrulhada dessa maneira? ” ");
        alert("- “É que eu estava indo embora, já havia terminado meu serviço quando ouvi o barulho da patroa caindo e voltei para acudi-la”");
        alert("Você nota as pegadas de lama vindo do quintal e não da porta da frente.");
    }

    var theEnd = prompt(" Você nota as pegadas de lama vindo do quintal e não da porta da frente. \n\n Como gostaria de prosseguir? Digite 1 para prender o suspeito\n Digite 0 para desisitir de suspeita.");

    if (validarEscolhaUsuario(theEnd) == false) {
        historiaRamomP1()
    }

 
    if (theEnd == 1) {
        gameOver();
    } else if (theEnd == 0) {
        gameOver();
    }
}

function gameOver() {
    alert("Você acabou de deixar uma assassina fugir impune!");
    alert("Margareth tinha rancor guardado com relação à Clotilde pois quando novas, no colegial, supostamente Clotilde havia roubado quem Margareth considerava o amor da sua vida e em seguida se casou com o mesmo e teve uma longa vida feliz ao lado de seu amado, deixando a mesma eternamente descontanda com o ocorrido e sede de vingança");
    alert(" Ao passar pelo jardim, já com luvas na mão, pegou a tesoura de Ramom para tentar se livrar da culpa pelo homicídio. Após o enfiar a tesoura e matar Clotilde, enquanto ele socorria dona Clotilde, Margareth colocou a tesoura novamene no local onde pegou, fazendo com quê Ramom se tornasse suspeito por seu crime.");

}

function validarEscolhaUsuario(escolha) {
    if (escolha == 0 || escolha == 1 || escolha == null) {
        return true
    }

    alert("Você deve escolher 0 ou 1")
    return false
}
