function iniciaJogoThi() {
    var nome = "Thiago";
    var confirmarThi = confirm(`O ${nome} é apenas um menino que estava soltando pipa na rua horas antes do ocorrido, assim como faz todos os dias. Gostaria de continuar mesmo assim?`);

    if (confirmarThi == true) {
        historiaThi();
    }

    function historiaThi() {
        alert("Após uma olhada rápida para as pegadas, você volta sua atenção novamente o garoto, continua o seu relato.");
        alert("- “Bem também não me espantaria se a Dona Margareth ter feito o serviço, já que vive tendo desavenças com a Dona Clotilde, elas se odiavam saca? Sempre competiam em tudo”. – Diz o garoto com certo desdém na voz.");
        alert("- “Que tipos de desavenças? ” – Você pergunta com certo interesse na voz.");
        alert("-“Bem a Margareth vive dizendo que a Clotilde é uma ladra de maridos, uma sirigaita sem vergonha. E sempre que algo de ruim acontece na vida dele está de alguma maneira relacionada com a presença da Clotilde” – Completa o garoto.");

        var brinco = prompt("Você encontra um brinco no chão próximo ao corpo, e nota que o mesmo brinco está faltando em uma das orelhas de Margareth. \n\n Gostaria de prosseguir com investigação? Digite 1 para continuar investigando \n Digite 0 para desisitir do suspeito.");

        if (validarEscolhaUsuario(brinco) == false) {
            historiaThi()
        }

        if (brinco == 1) {
            historiaThi2();
        } else if (brinco == 0) {
            gameOver();
        }
    }

    function historiaThi2() {
        alert("Após coletar a Evidência, você questiona o garoto: - “E esse corte meu rapaz, parece bem recente, você deveria tratar isso” ");
        alert(" O Garoto recua, puxando o braço para o peito e diz: -“ Não é nada não, eu cortei com cerol momentos antes, quando fui pedir uma faixa para Dona Clotilde ouvi o barulhão e corri para socorre-la “ ");
    }

    var theEnd = prompt("Você vê um pequeno rastro de sangue saindo do corpo e indo até debaixo da mesa onde se encontra um carretel de linha de pipa ensanguentado. \n\n Como gostaria de prosseguir? Digite 1 para prender o suspeito \n Digite 0 para desisitir de suspeita.");

    if (validarEscolhaUsuario(theEnd) == false) {
        historiaThi2()
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
    alert(" Ao passar pelo jardim, já com luvas na mão, pegou a tesoura de Ramom para tentar se livrar da culpa pelo homicídio.")

}

function validarEscolhaUsuario(escolha) {
    if (escolha == 0 || escolha == 1 || escolha == null) {
        return true
    }

    alert("Você deve escolher 0 ou 1")
    return false
}
