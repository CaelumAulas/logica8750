function pegaNumero( mensagem ) {
    var virgula = ","
    var ponto = "."

    var valorDigitado = parseFloat( 
        prompt(mensagem).replace("O", "0").replace(virgula, ponto).replace("I", "1")
    )

    return valorDigitado 
}

function formataDinheiro() {
    var dinheiro = valor.toFixed(2).replace("." , ",")
    return dinheiro
}
