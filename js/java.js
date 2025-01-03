function abrirMenu() {
    var menu = document.getElementById("menu_skills");
    var fundo = document.getElementById("fundo_menu");

    // Inicializa a posição de "left" do menu
    var left = parseFloat(menu.style.left) || 100; // Pega o valor de left ou assume 100

    // Torna o menu visível
    menu.style.display = "flex";
    fundo.style.display = "block";

    // Movendo o menu para a esquerda
    var x = setInterval(function() {
        if (left > 70) { // Se ainda não atingiu 70vw
            left--; // Diminui o valor de left
            menu.style.left = left + "vw"; // Atualiza a posição de left
        } else {
            clearInterval(x); // Para o movimento quando atingir 70vw
        }
    }, 16); // Atualiza a cada 100ms (1 segundo por unidade)

    // Torna o menu e fundo visíveis com opacidade após pequeno atraso
    setTimeout(function() {
        menu.style.opacity = 1;
        fundo.style.opacity = 0.6;
    }, 100);
}


function fecharMenu() {
    var menu = document.getElementById("menu_skills");
    var fundo = document.getElementById("fundo_menu");

    // Inicializa a posição de "left" do menu
    var left = parseFloat(menu.style.left) || 70; // Pega o valor de left ou assume 100

    // Movendo o menu para a esquerda
    var x = setInterval(function() {
        if (left < 100) { // Se ainda não atingiu 70vw
            left++; // Diminui o valor de left
            menu.style.left = left + "vw"; // Atualiza a posição de left
        } else {
            clearInterval(x); // Para o movimento quando atingir 70vw
            menu.style.display = "none";
            fundo.style.display = "none";
        }
    }, 16); // Atualiza a cada 100ms (1 segundo por unidade)

    // Torna o menu e fundo visíveis com opacidade após pequeno atraso
    setTimeout(function() {
        menu.style.opacity = 0;
        fundo.style.opacity = 0;
    }, 100);


}

let valor = 0; // Índice global para rastrear o estado atual

function trocarDados(novoValor) {
    const personagens = [
        {
            idade: "17 anos (2007)",
            nome: "Zephy Nullus",
            classe: "Espadachim focado em Furtividade",
            descricao: "Zephy cresceu em um dojo, treinando sob um mestre que o desprezava. O mestre traiu e matou sua família, e Zephy, ao sobreviver, percebeu que força era sinônimo de controle sobre a vida. Determinado a ser forte, ele focou no treino físico e adotou a furtividade como seu estilo de luta, inspirado por uma frase de seu pai: ''Quem não pode ser visto, torna-se invencível.'' Entrou para a escola de jujutsu, aprimorando suas habilidades e transformando sua katana em extensão de sua vontade.",
            vicio: "Whiskey",
            imagem: "imgs/ch1.png",
            fundo: "imgs/dojo.jpg",
            hab1: "Corte Silencioso",
            hab2: "Lâmina do Éter",
            hab3: "Passiva: Elo da Lâmina Eterna",
            habr1:"Corte Despótico",
            exp:"Caminho das Lâminas Invisíveis",
            menu_icone: "imgs/katana.png",
            img_altura: "200%",
            img_marginTopo: "50vw"
        },
        {
            idade: "18 anos (2006)",
            nome: "Eros Mint",
            classe: "Agente focado em Espionagem",
            descricao: "Eros, nascido em uma cidade do interior do Brasil, enfrentou uma infância difícil marcada pela pobreza e encontrou consolo em balas de hortelã. Descobrindo habilidades únicas para exorcizar maldições, foi recrutado pela escola Jujutsu, onde se destacou como espião graças à sua capacidade de detectar maldições à distância. Motivado pela perda trágica de seus pais para uma maldição, Eros dedica sua vida a proteger os inocentes, infiltrando-se em organizações nefastas enquanto seu vício em balas permanece como símbolo de sua resistência.",
            vicio: "Bala de Hortela",
            imagem: "imgs/ch2.png",
            fundo: "imgs/baseEspionagem.jpg",
            hab1: "Roubo de Aparência",
            hab2: "Cenários Ilusórios",
            hab3: "Reflexo dos Ecos (Forma Verdadeira)",
            habr1:"Cura de Vitalidade",
            exp:"Realidade Fragmentada",
            menu_icone: "imgs/gun.png",
            img_altura: "200%",
            img_marginTopo: "50vw"
        },
        {
            idade: "26 anos (1998)",
            nome: "Ranz",
            classe: "Feiticeiro Pirocinético",
            descricao: "Uma ex-feiticeira, agora freira, enfrentou uma maldição demoníaca de fogo que surgiu do medo das colegas em 8 de setembro de 1997. Incapaz de derrotá-la sozinha, foi salva por outros feiticeiros, mas, dois meses depois, descobriu estar grávida da maldição. Em 7 de junho de 1998, deu à luz um filho que foi rejeitado por todos, mas mantido na igreja contra sua vontade. Aos 13 anos, o menino fugiu, tornando-se foragido, sendo encontrado apenas sete anos depois por um feiticeiro.",
            vicio: "Suco de Uva",
            imagem: "imgs/ch3.png",
            fundo: "imgs/igreja.jpg",
            hab1: "Controle de Chamas Brancas",
            hab2: "Manipulação da Temperatura",
            hab3: "Maldição",
            habr1:"Invocação de Fumaça",
            exp:"Catedral do Inferno",
            menu_icone: "imgs/fire.png",
            img_altura: "200%",
            img_marginTopo: "50vw"
        },
        {
            idade: "17 anos (2007)",
            nome: "Dante Leoni",
            classe: "Militar guiado por Emoções",
            descricao: "Dante, de 17 anos, é reservado e tem cicatrizes. Seu único amigo é Zephy, que conhece desde a infância. Ele cresceu em um ambiente caótico, com um pai alcoólatra e constantes brigas familiares, além de sofrer bullying. Após ser colocado em uma escola militar, mudou significativamente. Quando começou a ver coisas estranhas, pediu ajuda a Zephy, que o incentivou a ingressar na escola de Jujutsu, onde decidiu estudar.",
            vicio: "Cigarro",
            imagem: "imgs/ch4.png",
            fundo: "imgs/militar.jpg",
            hab1: "Ataque Flamejante",
            hab2: "Velocidade Mortal",
            hab3: "Esforço de Vontade",
            habr1:"Cura de Vitalidade",
            exp:"Área do Caçador",
            menu_icone: "imgs/axe.png",
            img_altura: "160%",
            img_marginTopo: "35vw"
        },
        {
            idade: "19 anos (2005)",
            nome: "Levi",
            classe: "Combatente Bruto",
            descricao: "Levi, um jovem intenso e marcado por um passado turbulento, encontrou no cigarro uma fuga para os ecos das brigas familiares que ecoam em sua mente. Abandonado emocionalmente desde cedo, ele carrega um olhar sombrio e uma presença inquietante. Sua intensidade é tanto sua força quanto sua maldição, empurrando-o para desafios extremos enquanto tenta encontrar um propósito que o liberte das sombras de sua infância.",
            vicio: "Cigarro",
            imagem: "imgs/ch5.png",
            fundo: "imgs/espada.jpg",
            hab1: "--",
            hab2: "--",
            hab3: "--",
            habr1:"--",
            exp:"--",
            menu_icone: "imgs/greatsword.png",
            img_altura: "135%",
            img_marginTopo: "25vw"
        },
        {
            idade: "21 anos (2003)",
            nome: "Ze Silva",
            classe: "Lutador de Boxing",
            descricao: "Após aceitar uma missão solo misteriosa, ele retornou gravemente alterado, com uma restrição celestial forçada que limitou seus poderes. Para piorar, perdeu todas as memórias de sua vida e de seus feitos heroicos. Agora, Ze luta para reconstruir sua identidade enquanto busca respostas sobre o que aconteceu naquela missão. Cada pista descoberta revela fragmentos de um passado sombrio que ele nem sabia possuir.",
            vicio: "Luta",
            imagem: "imgs/ch6.png",
            fundo: "imgs/boxing.jpg",
            hab1: "--",
            hab2: "--",
            hab3: "--",
            habr1:"--",
            exp:"--",
            menu_icone: "imgs/boxingGloves.png",
            img_altura: "200%",
            img_marginTopo: "50vw"
        },
        // Adicione mais personagens aqui
    ];

    // Ajusta o índice para evitar valores fora do intervalo
    if (novoValor >= 0 && novoValor < personagens.length) {
        valor = novoValor; // Atualiza o índice
        const personagem = personagens[valor];

        // Atualiza os elementos na página
        document.querySelector(".idade_txt").textContent = personagem.idade;
        document.querySelector(".nome_txt").textContent = personagem.nome;
        document.querySelector(".classe_txt").textContent = personagem.classe;
        document.querySelector(".descricao_txt").textContent = personagem.descricao;
        document.querySelector(".vicio_txt").textContent = `Vicio(s): ${personagem.vicio}`;
        document.getElementById("character_img").src = personagem.imagem;
        document.getElementById("character_img").style.height = personagem.img_altura;
        document.getElementById("character_img").style.marginTop = personagem.img_marginTopo;
        document.getElementById("fundo").src = personagem.fundo;
        document.getElementById("botao_icon").src = personagem.menu_icone;
        document.querySelector(".hab1").textContent = personagem.hab1;
        document.querySelector(".hab2").textContent = personagem.hab2;
        document.querySelector(".hab3").textContent = personagem.hab3;
        document.querySelector(".habr1").textContent = personagem.habr1;
        document.querySelector(".exp").textContent = personagem.exp;
        document.getElementById("menu_icone").src = personagem.menu_icone;
    }
}

function avancar() {
    trocarDados(valor + 1); // Avança para o próximo personagem
}

function voltar() {
    trocarDados(valor - 1); // Volta para o personagem anterior
}
