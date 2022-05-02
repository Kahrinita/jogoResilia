function iniciaJogo() {
    var nome = "Margareth";
    var confirmarMargareth = confirm(`A Dona ${nome} é apenas uma velhinha que morava ao lado de dona Clotilde, aparentemente inofensiva e sem força para poder muito mal levantar uma bola. Tem certeza que gostaria de continuar?`);

    if (confirmarMargareth == true) {
        historiaMargareth();
    }

    function historiaMargareth() {
        alert("Após uma olhada rápida para as pegadas, você volta sua atenção novamente a idosa, que continua o seu relato.");
        alert("“Achei bem estranho o Thiaguinho estar na casa da Clotilde, por que ela sempre brigava com ele, por pular no seu quintal atrás de pipa e estragar suas plantas. Teve uma vez que ela chamou a polícia e o fez ser detido por uma noite inteira”. – Diz Margareth com um certo tom de raiva na voz.")
        alert("“Mas apenas uma noite detido não parece ser motivo para assassinar alguém” – Você questiona novamente ")
        alert("“Mas soube que seus pais ficaram muito envergonhados de ter o bairro todo sabendo que ele foi detido, e venderam seu vídeo game e seu skate, por conta disso o garoto começou a pisotear as plantas de Clotilde e chutar a lata de lixo dela, ele sempre foi um bom rapaz e me ajudava a carregar as compras, e eu dava uns troquinhos para ele comprar suas pipas e a Clotilde sempre foi muita rabugenta mesmo e quebrava as pipas do coitado”. – Completou a senhora.")


        var rastroDeSangue = prompt("Você vê um pequeno rastro de sangue saindo do corpo e indo até debaixo da mesa onde se encontra um carretel de linha de pipa ensanguentado. \n\n Gostaria de prosseguir com investigação? Digite 1 para continuar investigando \n Digite 0 para desisitir de suspeita.");

        if (validarEscolhaUsuario(rastroDeSangue) == false) {
            historiaMargareth()
        }

        if (rastroDeSangue == 1) {
            historiaMargarethP1();
        } else if (rastroDeSangue == 0) {
            gameOver();
        }
    }

    function historiaMargarethP1() {
        alert("Após coletar a evidência do carretel, você se volta a Senhora e pergunta sobre algo que chamou sua atenção desde o início : “E a senhora qual sua relação com a Dona Clotilde? ” – Você inicia o interrogatório.")
        alert("“ Clotilde e eu frequentávamos a mesma escola, e tínhamos a mesma paixão de adolescência, Joaquim que veio a se tornar o falecido marido de Clotilde” – responde Margareth meio incomodada com o seu tom questionador.")
        alert("-“ E Como explicaria essa mancha em sua manga? ” – Você pressiona a idosa")
        alert("-“Eu estava fazendo uma torta de frutas vermelhas, quando ouvi o barulho que me assustou e acabei enfiando a manga na torta sem querer”")

    }

    var theEnd = prompt("Você agora com o olhar mais afiado, encontra um brinco no chão próximo ao corpo, e nota que o mesmo brinco está presente em apenas uma das orelhas de Margareth. \n\n Como gostaria de prosseguir? Digite 1 para prender a suspeita\n Digite 0 para desisitir de suspeita.");

    if (validarEscolhaUsuario(theEnd) == false) {
        historiaMargarethP1()
    }

    if (theEnd == 1) {
        alert("Parabéns, você prendeu a verdadeira culpada!");
        alert("Margareth tinha rancor guardado com relação à Clotilde pois quando novas, no colegial, supostamente Clotilde havia roubado quem Margareth considerava o amor da sua vida e em seguida se casou com o mesmo e teve uma longa vida feliz ao lado de seu amado, deixando a mesma eternamente descontanda com o ocorrido e sede de vingança");
    } else if (theEnd == 0) {
        gameOver();
    }
}

function gameOver() {
    alert("Você acabou de deixar uma assassina fugir impune!");
    alert("Margareth tinha rancor guardado com relação à Clotilde pois quando novas, no colegial, supostamente Clotilde havia roubado quem Margareth considerava o amor da sua vida e em seguida se casou com o mesmo e teve uma longa vida feliz ao lado de seu amado, deixando a mesma eternamente descontanda com o ocorrido e sede de vingança");
    alert(" Ao passar pelo jardir, já com luvas na mão, pegou a tesoura de Ramom para tentar se livrar da culpa pelo homicídio.")

}

function validarEscolhaUsuario(escolha) {
    if (escolha == 0 || escolha == 1 || escolha == null) {
        return true
    }

    alert("Você deve escolher 0 ou 1")
    return false
}
