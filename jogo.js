function ObterEscolhaComputador() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
    
    console.log ('Escolha do computador:' , opcoes[indiceAleatorio]);
    return opcoes [indiceAleatorio]; 
}

function Jogar(jogador) {
    console.log('Sua escolha:', jogador);
    computador = ObterEscolhaComputador();

    if (jogador === computador) {
        return 'empate!';
    } else if (
        (jogador === 'pedra'  && computador === 'tesoura') ||
        (jogador === 'tesoura' && computador === 'papel') ||
        (jogador === 'papel' && computador === 'pedra') 
    ) {
        return 'vc ganhou!';
        
    }
    else {
        return 'vc perdeu!';
    }
}
const resultado = Jogar('tesoura');
console.log(resultado);
