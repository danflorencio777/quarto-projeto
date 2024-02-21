class Personagem {
    constructor(nome, cla, aldeia, jutsu){
      this.nome = nome;
      this.cla = cla;
      this.aldeia = aldeia;
      this.jutsu = jutsu;
    }
  }
  
  function escolherPersonagem(){
    const personagensDisponiveis = [
      new Personagem("Naruto Uzumaki", "Uzumaki", "Konoha" , "Rasengan"),
      new Personagem("Sasuke Uchiha", "Uchiha", "Konoha", "Chidori"),
      new Personagem("Sakura Haruno", "Haruno", "Konoha", "Força Incomum"),
      new Personagem("Kakashi Hatake", "Hatake", "Konoha", "Chidori"),
      new Personagem("Gaara", "Nara", "Areia", "Sabaku Kyu"),
      new Personagem("Rock Lee", "Lee", "Konoha", "Taijutsu")  
    ];
    
    const indice = parseInt(prompt("Escolha o número correspondente ao personagem que deseja:\n1. Naruto Uzumaki\n2. Sasuke Uchiha\n3. Sakura Haruno\n4. Kakashi Hatake\n5. Gaara\n6. Rock Lee"));
    
    if(indice >= 1 && indice <= personagensDisponiveis.length){
        return personagensDisponiveis[indice - 1];
    } else {
        console.log("Opção inválida! Escolha um número válido.");
        return escolherPersonagem(); // Chamada recursiva em caso de opção inválida
    }
  }
  

  const meuPersonagem = escolherPersonagem();
  console.log("Personagem escolhido:", meuPersonagem);
  