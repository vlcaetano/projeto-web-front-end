import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jogo-detalhes',
  templateUrl: './jogo-detalhes.component.html',
  styleUrls: ['./jogo-detalhes.component.css']
})
export class JogoDetalhesComponent implements OnInit {

  jogos = [
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
      nome: 'JR Adventures',
      imgRetrato: 'assets/img/retrato/jr-adventures.png',
      imgPaisagem: 'assets/img/paisagem/jr-adventures.png',
      destaque: false,
      maisVendido: false,
      novidade: true,
      descricao: 'Teste <br> <br> Teste'
    },
    {
      id: 9,
      nome: 'Under World',
      imgRetrato: 'assets/img/retrato/underworld.png',
      imgPaisagem: 'assets/img/paisagem/underworld.png',
      destaque: false,
      maisVendido: false,
      novidade: true,
      descricao: 'Teste <br> <br> Teste'
    }
  ]

  public jogo

  constructor(private route: ActivatedRoute) { 
    // const id: number = Number(this.route.snapshot.queryParamMap.get('id'))
    const id: number = Number(this.route.snapshot.params.id) // nome do parâmetro igual a como está no app-routing

    console.log(id)

    this.jogo = this.getJogo(id)

    console.log(this.jogo)
  }

  ngOnInit(): void {
  }

  getJogo(id: number) {
    for (let obj of this.jogos) {
      if(obj.id == id){
        return obj
      }
    }
    return null
  }
}
