import { Injectable } from '@angular/core';

import { Jogo } from '../models/jogo.model';



@Injectable({
  providedIn: 'root'
})
export class JogosService {

  public jogos: Array<Jogo> = [
    {
      id: 1,
      nome: 'Borderlands 3',
      imgRetrato: 'assets/img/retrato/borderlands3.png',
      imgPaisagem: 'assets/img/paisagem/borderlands3.png',
      destaque: true,
      maisVendido: false,
      novidade: false,
      descricao: 'O jogo de tiro original está de volta, com milhões de armas e uma aventura cheia de destruição! <br><br> Acabe com novos mundos e inimigos com um dos quatro novos Vault Hunters. <br><br> Jogue sozinho ou com amigos para enfrentar inimigos insanos, conseguir um monte de itens e salvar seu lar dos líderes cultistas mais cruéis da galáxia.'
    },
    {
      id: 2,
      nome: 'Marvel\'s Avengers',
      imgRetrato: 'assets/img/retrato/avengers.png',
      imgPaisagem: 'assets/img/paisagem/avengers.png',
      destaque: false,
      maisVendido: true,
      novidade: false,
      descricao: 'Monte sua equipe com os heróis mais poderosos da Terra, incorpore seus poderes e viva seus sonhos de super-herói.<br><br>Marvel\'s Avengers é um jogo épico de ação e aventura em terceira pessoa que combina uma história original cinematográfica com jogabilidade individual e cooperativa. <br><br> Monte uma equipe com até quatro jogadores online, domine habilidades extraordinárias, personalize um elenco crescente de heróis e proteja a Terra de ameaças cada vez maiores.'
    },
    {
      id: 3,
      nome: 'Call of Duty: Black Ops Cold War',
      imgRetrato: 'assets/img/retrato/cod.png',
      imgPaisagem: 'assets/img/paisagem/cod.png',
      destaque: false,
      maisVendido: true,
      novidade: false,
      descricao: 'Nada é o que parece numa emocionante campanha para um jogador da Raven Software, onde os intervenientes se defrontam com figuras históricas e verdades duras, ao lutarem em todo o mundo, passando por locais icónicos como Berlim Oriental, o Vietname, a Turquia, a sede do KGB soviético e muito mais.'
    },
    {
      id: 4,
      nome: 'Samurai Jack: Battle Through Time',
      imgRetrato: 'assets/img/retrato/samurai.png',
      imgPaisagem: 'assets/img/paisagem/samurai.png',
      destaque: false,
      maisVendido: true,
      novidade: false,
      descricao: 'Com as vozes dos atores originais, Samurai Jack: Battle Through Time é um jogo de ação em plataformas que vai atravessar todo o espaço-tempo, onde as tuas ações vão criar uma nova lenda! <br><br> Uma aventura inédita que encaixa no final épico da série, junta-te a aliados de confiança da série e enfrenta inimigos familiares.<br><br> Visita locais e momentos clássicos dos teus episódios favoritos. Viaja até um futuro sombrio para libertar a humanidade. Mergulha no passado para enfrentar monstros diabólicos. Encontra o teu destino enquanto viajas pelo espaço-tempo.'
    },
    {
      id: 5,
      nome: 'Monster Hunter World: Iceborne',
      imgRetrato: 'assets/img/retrato/monster.png',
      imgPaisagem: 'assets/img/paisagem/monster.png',
      destaque: false,
      maisVendido: true,
      novidade: false,
      descricao: '"Explore o novo mundo... e além!" <br><br>A aventura de Monster Hunter: World chega a novas alturas em "Monster Hunter World: Iceborne".<br><br>Com novos monstros, novos locais, novas missões, novas combinações de armas e muito mais, Iceborne expande as possibilidades do vasto e estonteante universo de Monster Hunter: World.<br><br>Junte-se à Comissão de Pesquisa e embarque em uma aventura inesquecível rumo às profundezas da Fronteira Glacial, uma tundra nevada que diversos monstros lendários chamam de lar.'
    },
    {
      id: 6,
      nome: 'Poly Bridge',
      imgRetrato: 'assets/img/retrato/polybridge.png',
      imgPaisagem: 'assets/img/paisagem/polybridge.png',
      destaque: false,
      maisVendido: false,
      novidade: false,
      descricao: 'Use suas habilidades em engenharia neste novo e envolvente simulador de construção de pontes repleto de recursos.<br><br> Passe horas resolvendo quebra-cabeças no modo Campanha e, em seguida, crie seu próprio design no modo Caixa de Areia.<br><br> Desafie seus amigos e outros membros da comunidade na Oficina do Steam para que tentem resolver seus quebra-cabeças, e aproveite para baixar os novos níveis enviados por outros jogadores.'
    },
    {
      id: 7,
      nome: 'Fall Guys',
      imgRetrato: 'assets/img/retrato/fallguys.png',
      imgPaisagem: 'assets/img/paisagem/fallguys.png',
      destaque: false,
      maisVendido: false,
      novidade: true,
      descricao: 'Fall Guys: Ultimate Knockout reúne hordas de participantes online em disparada por rounds e rounds cada vez mais caóticos até sobrar um único vencedor!<br><br> Enfrente obstáculos bizarros, empurre seus concorrentes inconvenientes e desafie as leis da física a caminho da vitória. Deixe sua dignidade para trás e prepare-se para fracassos hilários em sua missão pela coroa!<br><br> Um imenso pandemônio online: Encare uma série de percursos com desafios malucos, obstáculos ridículos e uma multidão de concorrentes online, todos na esperança de avançar para o próximo round caótico.<br><br>Competição e cooperação: Alterne entre desafios competitivos free-for-all e os cooperativos, onde a equipe perdedora inteira é eliminada!'
    },
    {
      id: 8,
      nome: 'Among Us',
      imgRetrato: 'assets/img/retrato/amongus.png',
      imgPaisagem: 'assets/img/paisagem/amongus.png',
      destaque: false,
      maisVendido: false,
      novidade: true,
      descricao: 'Jogue com 4-10 jogadores online ou via WiFi local enquanto tenta preparar sua nave para a partida, mas cuidado, pois um ou mais jogadores aleatórios entre a Tripulação são Impostores empenhados em matar todos!<br><br> Criado originalmente como um party game, recomendamos jogar com amigos em uma party em LAN ou online usando o chat de voz. Desfrute de jogo multiplataforma entre Android, iOS e PC.'
    },
    {
      id: 9,
      nome: 'Mafia: Definitive Edition',
      imgRetrato: 'assets/img/retrato/mafiade.png',
      imgPaisagem: 'assets/img/paisagem/mafiade.png',
      destaque: false,
      maisVendido: false,
      novidade: true,
      descricao: 'Neste jogo refeito do zero, suba na hierarquia da máfia durante a Lei Seca. Após um encontro acidental com a máfia, o taxista Tommy Angelo entra em um terrível submundo. Apesar da relutância em se relacionar com a família Salieri, Tommy logo descobre que as oportunidades são grandes demais para ignorar. <br><br> Histórias da máfia: Entre na pele de um gângster da Lei Seca e suba na hierarquia. <br><br> Lost Heaven: A paisagem urbana da década de 1930 foi recriada da arquitetura aos carros e à cultura do entreguerras para ver, ouvir e interagir.<br><br>Um clássico refeito: Fielmente recriado, com história ampliada, jogabilidade e trilha sonora original. É Mafia como você lembrava e muito mais.'
    },
    {
      id: 10,
      nome: 'Resident Evil 2',
      imgRetrato: 'assets/img/retrato/re2.png',
      imgPaisagem: 'assets/img/paisagem/re2.png',
      destaque: true,
      maisVendido: false,
      novidade: false,
      descricao: 'Obra prima que definiu o gênero, Resident Evil 2 retorna, completamente refeito com uma experiência narrativa mais profunda. Usando o RE Engine de propriedade da Capcom, Resident Evil 2 oferece uma nova visão na clássica saga de horror de sobrevivência com visuais realistas de tirar o fôlego, áudio imersivo de acelerar o coração, uma nova câmera sobre o ombro e controles modernos além de modos de jogabilidade do jogo original.<br><br> Em Resident Evil 2, a ação clássica, exploração tensa e a jogabilidade de resolver quebra-cabeças que definiu a série Resident Evil retorna. Os jogadores se juntam ao policial novato, Leon S. Kennedy, e à estudante universitária, Claire Redfield, que acabam juntos por uma epidemia desastrosa em Raccoon City que transformou sua população em zumbis mortais. Leon e Claire possuem suas próprias campanhas separadas, permitindo que os jogadores vejam a história da perspectiva de ambos os personagens. O destino desses dois personagens favoritos dos fãs está nas mãos dos jogadores conforme eles trabalham juntos para sobreviver e descobrir o que está por trás do terrível ataque à cidade. Será que eles sairão com vida?'
    }
  ]

  constructor() { }

  getAll(): Array<Jogo> {
    return this.jogos
  }

  getJogoById(id: number): Jogo {
    for (let obj of this.jogos) {
      if(obj.id == id){
        return obj
      }
    }
    return null
  }

  deletar(id: number) {
    for(let i=0; i<this.jogos.length; i++) {
      if (id === this.jogos[i].id) {
        this.jogos.splice(i, 1);
        break;
      }
    }
  }

  cadastrar(jogo: Jogo) {
    const id = this.jogos.length+1;
    jogo.id = id;

    this.jogos.push(jogo);
  }

  editar(jogo: Jogo) {
    for(let obj of this.jogos) {
      if (jogo.id === obj.id) {
        obj = jogo;
        break;
      }
    }
  }
}
