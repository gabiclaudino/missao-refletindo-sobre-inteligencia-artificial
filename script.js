const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual foi o ano em que a World Wide Web foi lançada para o público?",
        alternativas: [
            {
                texto: "1989",
                afirmacao: "1991"
            },
            {
                texto: "1995",
                afirmacao: "2000"
            }
        ]
    },
    {
        enunciado: "Qual é o protocolo principal utilizado para a transmissão de páginas web?",
        alternativas: [
            {
                texto: "FTP",
                afirmacao: "SMTP"
            },
            {
                texto: "HTTP",
                afirmacao: "TCP/IP"
            }
        ]
    },
    {
        enunciado: "Quais são os diferentes tipos de sistemas de aquecimento residencial e quais são suas principais vantagens e desvantagens?",
        alternativas: [
            {
                texto: "Aquecimento a gás, aquecimento elétrico e aquecimento a lenha.",
                afirmacao: "Aquecimento solar, aquecimento geotérmico e aquecimento  a óleo."
            },
            {
                texto: "Aquecimento a água quente, aquecimento por ar forçado e aquecimento  radiadores.",
                afirmacao: "Aquecimento a carvão, aquecimento por infravermelho e aquecimento por energia eólica."
            }
        ]
    },
    {
        enunciado: "Como o isolamento térmico de uma casa pode influenciar a eficiência ao reduzir a perda de calor e a  necessidade de usar o sistema de aquecimento?",
        alternativas: [
            {
                texto: "Melhora a eficiência ao reduzir  a perda de calor e a necessidade de ussar o sistema de aquecimento com frequência.",
                afirmacao: "Reduz a eficiência ao fazer com que o sistema de aquecimento trabalhe mais para manter a temperatura."
            },
            {
                texto: "Não tem impacto significativo na eficiência do sistema de aquecimento.",
                afirmacao: "Aumenta a umidade dentro da casa, tornando o sistema de aquecimento menos eficiente."
            }
        ]
    },
    {
        enunciado: "Qual é a diferença entre aquecimento central e aquecimento por radiadores individuais, e qual sistema é mais adequado para diferentes tipos de construções? ",
        alternativas: [
            {
                texto: "O aquecimento central usa um único sistema para aquecer toda a casa, enquanto os radiadores individuais aquecem apenas cômodos específicos.",
                afirmacao: "O aquecimento central é menos eficiente do que os radiadores individuais porque aquece somente uma área da casa."
            },
            {
                texto: "Radiadires individuais usam energia solar, enquanto o aquecimento central utiliza eletricidade.",
                afirmacao: "O aquecimento central é ideal para construções pequemas e os radiadores individuais para grandes indíviduos."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();