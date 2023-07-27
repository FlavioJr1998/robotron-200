let falas = [
    "Fala arrombado!",
    "Eae zé!",
    "Opa, fala comigo!",
    "Quero Café",
    "Que dia lindo!",
    "Como vai você?",
    "Estou com fome!",
    "Hoje é meu dia de sorte!",
    "A vida é bela!",
    "Não aguento mais essa chuva!",
    "Você é incrível!",
    "Estou me sentindo bem hoje!",
    "Estou com sono...",
    "É hora de estudar!",
    "Vamos dar um passeio?",
    "Meu time vai ganhar!",
    "Não consigo acreditar!",
    "Estou tão feliz!",
    "Aguenta coração!",
    "O mundo é cheio de mistérios!",
    "Essa música é contagiante!",
    "Preciso de um abraço!",
    "Que preguiça!",
    "Estou com calor!",
    "Você é meu herói!",
    "Nunca desista dos seus sonhos!",
    "Hora do almoço!",
    "Você está brincando, certo?",
    "Isso é muito engraçado!",
    "Eu te desafio!",
    "Me ajuda, por favor!",
    "Que sorte a minha!",
    "Você é um gênio!",
    "Estou apaixonado(a)!",
    "Vamos nos divertir!",
    "Quero viajar pelo mundo!",
    "Que dia cansativo!",
    "Essa é a vida!",
    "Não posso esperar!",
    "Não sei o que dizer...",
    "Estou tremendo de medo!",
    "Isso é incrível!",
    "Quero mais!",
    "Vamos dançar!",
    "Chega de trabalho por hoje!",
    "É hora de relaxar!",
    "Socorro!",
    "Que saudade!",
    "Viva a liberdade!",
    "O que você faria?",
    "Não me faça rir!",
    "Fique longe de mim!",
    "Isso é sério!",
    "Estou confuso(a)!",
    "Fala sério!",
  ];
  const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
// somar.addEventListener("click", () => { manipulaDados("somar")});
// subtrair.addEventListener("click", () => { manipulaDados("subtrair")});
controle.forEach( (elemento) => {
    elemento.addEventListener("click", ( evento ) => {
        manipulaDados( evento.target.dataset.controle , evento.target.parentNode )
        atualizaEstatistica( evento.target.dataset.peca )
    })
})

function atualizaEstatistica( peca ){
    estatisticas.forEach( ( elemento ) => {
        console.log( pecas[ peca ]  )
        elemento.textContent = parseInt( elemento.textContent ) + pecas[ peca ][ elemento.dataset.estatistica ]
    })
} 

function manipulaDados( operacao,controle ){
    const peca = controle.querySelector("[data-contador")

    if( operacao === "-"){
        peca.value = parseInt( peca.value ) - 1;
    }else{
        peca.value = parseInt( peca.value ) + 1;
    }
}

let robotron = document.querySelector("#robotron");
function falaRobotron(){
    let num = Math.floor( Math.random() * falas.length );
    alert( falas[ num ] );
    console.log( falas[ num ]);
}