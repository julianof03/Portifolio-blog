import React from "react";

  const cardData = [
    { 
      name:"Jogos",
      content: [
        { 
          id: 1, 
          content: 'Minecraft', 
          rate: 100, 
          tags: ['Sandbox', 'Construção', 'Aventura'],
          review: 'Um jogo sandbox que permite aos jogadores explorar, construir e sobreviver em um mundo gerado proceduralmente. Com gráficos em blocos característicos, Minecraft oferece uma experiência criativa e aberta, onde os jogadores podem criar estruturas impressionantes, minerar recursos e enfrentar criaturas perigosas. O jogo também possui modos multiplayer, permitindo que os jogadores colaborem ou compitam entre si. Com sua jogabilidade viciante e comunidade ativa, Minecraft se tornou um fenômeno cultural e um dos jogos mais vendidos de todos os tempos.'
        },
        {
          id: 2, 
          content: 'Escape from tarkov', 
          rate: 1, 
          tags: ['FPS', 'Tático', 'Ação'],
          review: 'Escape from Tarkov é um jogo de tiro em primeira pessoa (FPS) tático e realista, desenvolvido pela Battlestate Games. Situado em uma cidade fictícia chamada Tarkov, o jogo combina elementos de sobrevivência, RPG e simulação militar. Os jogadores assumem o papel de mercenários que precisam explorar a cidade, completar missões, coletar recursos e enfrentar outros jogadores e inimigos controlados por IA. Com uma ênfase na autenticidade, Escape from Tarkov apresenta mecânicas complexas de combate, gerenciamento de inventário e personalização de armas. O jogo é conhecido por sua dificuldade desafiadora e pela necessidade de estratégia e planejamento cuidadoso para sobreviver e escapar com sucesso da cidade.'
        },
        { 
          id: 3, 
          content: 'Rainbow Six X', 
          rate: 85, 
          tags: ['Tático', 'Estratégia', 'Ação'],
          review: 'Tom Clancy\'s Rainbow Six Siege é um jogo de tiro em primeira pessoa (FPS) tático desenvolvido pela Ubisoft. Lançado em 2015, o jogo se destaca por sua ênfase na estratégia, trabalho em equipe e destruição ambiental. Os jogadores assumem o papel de operadores de elite de várias unidades antiterrorismo ao redor do mundo, cada um com habilidades e equipamentos únicos. O objetivo principal do jogo é completar objetivos específicos, como resgatar reféns ou desarmar bombas, enquanto enfrentam uma equipe adversária. Com mapas detalhados e dinâmicos, Rainbow Six Siege oferece uma experiência intensa e desafiadora, onde a comunicação e a coordenação entre os jogadores são essenciais para o sucesso. O jogo também conta com um modo multiplayer competitivo e um modo cooperativo contra IA.'
        },
        { 
          id: 4, 
          content: 'GTA V', 
          rate: 80, 
          tags: ['Ação', 'Mundo Aberto', 'Aventura'],
          review: 'Grand Theft Auto V (GTA V) é um jogo de ação e aventura em mundo aberto desenvolvido pela Rockstar North e publicado pela Rockstar Games. Lançado em 2013, o jogo se passa na fictícia cidade de Los Santos, inspirada em Los Angeles, e oferece aos jogadores a liberdade de explorar um vasto ambiente urbano. GTA V apresenta uma narrativa envolvente que segue três protagonistas distintos: Michael, Franklin e Trevor, cada um com suas próprias histórias e habilidades. O jogo combina missões principais com uma variedade de atividades secundárias, como corridas, assaltos, e interações com personagens não jogáveis. Além disso, GTA V inclui um modo multiplayer online chamado GTA Online, onde os jogadores podem criar seus próprios personagens, participar de missões cooperativas e competir em diversos modos de jogo. Com gráficos impressionantes, jogabilidade diversificada e um mundo vibrante, GTA V se tornou um dos jogos mais vendidos e aclamados pela crítica de todos os tempos.'
        },
        { 
          id: 5, 
          content: 'No mans Sky', 
          rate: 75, 
          tags: ['Exploração', 'Sobrevivência', 'Aventura'],
          review: 'No Man\'s Sky é um jogo de exploração espacial e sobrevivência desenvolvido pela Hello Games. Lançado em 2016, o jogo se destaca por seu vasto universo gerado proceduralmente, oferecendo aos jogadores a oportunidade de explorar bilhões de planetas únicos, cada um com sua própria flora, fauna e paisagens. Os jogadores assumem o papel de um viajante espacial que pode explorar planetas, coletar recursos, construir bases e interagir com outras formas de vida alienígena. No Man\'s Sky também apresenta elementos de combate espacial, comércio e missões para completar. Desde seu lançamento, o jogo recebeu várias atualizações significativas que expandiram seu conteúdo e melhoraram a jogabilidade, tornando-se uma experiência rica e envolvente para os fãs de exploração e aventura.'
        },
        { 
          id: 6, 
          content: 'Read Dead 2', 
          rate: 70, 
          tags: ['Aventura', 'Mundo Aberto', 'RPG'],
          review: 'Red Dead Redemption 2 é um jogo de ação e aventura em mundo aberto desenvolvido pela Rockstar Games. Lançado em 2018, o jogo se passa no final do século XIX, durante o declínio do Velho Oeste americano. Os jogadores assumem o papel de Arthur Morgan, um fora da lei e membro da gangue Van der Linde, enquanto navegam por um vasto e detalhado mundo aberto que inclui cidades, florestas, montanhas e desertos. Red Dead Redemption 2 oferece uma narrativa profunda e envolvente, com personagens complexos e missões variadas que exploram temas de lealdade, sobrevivência e redenção. O jogo também apresenta uma série de atividades secundárias, como caça, pesca, jogos de azar e interações com NPCs. Com gráficos impressionantes, uma trilha sonora atmosférica e uma jogabilidade rica, Red Dead Redemption 2 é amplamente considerado um dos melhores jogos de sua geração.'
        },
        { 
          id: 7, 
          content: 'The Witcher 3', 
          rate: 95, 
          tags: ['RPG', 'Aventura', 'Mundo Aberto'],
          review: 'The Witcher 3: Wild Hunt é um jogo de RPG de ação em mundo aberto desenvolvido pela CD Projekt Red. Lançado em 2015, o jogo é baseado na série de livros "The Witcher" do autor polonês Andrzej Sapkowski. Os jogadores assumem o papel de Geralt de Rívia, um caçador de monstros conhecido como bruxo, enquanto embarcam em uma jornada épica para encontrar sua filha adotiva, Ciri, que está sendo caçada pela misteriosa Caçada Selvagem. The Witcher 3 apresenta um vasto mundo aberto repleto de missões principais e secundárias, personagens memoráveis e escolhas morais que afetam o desenrolar da história. O jogo é elogiado por sua narrativa envolvente, gráficos impressionantes e jogabilidade fluida, incluindo combate dinâmico e exploração detalhada. Com expansões adicionais como "Hearts of Stone" e "Blood and Wine", The Witcher 3 se tornou um dos jogos mais aclamados pela crítica e premiados de todos os tempos.'
        },
        { 
          id: 8, 
          content: 'PalWorld', 
          rate: 66, 
          tags: ['Sandbox', 'Aventura', 'Coop'],
          review: 'Palworld é um jogo de aventura e sobrevivência em mundo aberto desenvolvido pela Pocketpair. Lançado em 2023, o jogo se passa em um mundo vibrante e colorido habitado por criaturas chamadas "Pals". Os jogadores podem capturar, treinar e batalhar com esses Pals, que possuem habilidades únicas e podem ser usados para ajudar na exploração, combate e construção. Palworld combina elementos de jogos de sobrevivência, RPG e simulação, permitindo aos jogadores construir suas próprias bases, cultivar recursos e enfrentar desafios ambientais. O jogo também apresenta um modo multiplayer cooperativo, onde os jogadores podem se unir para explorar o mundo juntos. Com sua jogabilidade diversificada, gráficos atraentes e uma comunidade ativa, Palworld oferece uma experiência divertida e envolvente para os fãs de jogos de aventura e criaturas colecionáveis.'
        },
        { 
          id: 9, 
          content: 'Dead Cells', 
          rate: 45, 
          tags: ['Roguelike', 'Ação', 'Plataforma'],
          review: 'Dead Cells é um jogo de ação e plataforma do gênero roguelike desenvolvido pela Motion Twin. Lançado em 2018, o jogo se destaca por sua jogabilidade desafiadora, gráficos pixel art detalhados e mecânicas de combate fluidas. Em Dead Cells, os jogadores assumem o papel de uma criatura sem nome que deve explorar um castelo em constante mudança, enfrentando inimigos perigosos e chefes desafiadores. O jogo apresenta um sistema de progressão baseado em armas, habilidades e melhorias que podem ser desbloqueadas ao longo das partidas. Com sua estrutura roguelike, cada tentativa de completar o jogo é única, com níveis gerados proceduralmente e a perda de progresso ao morrer. Dead Cells é amplamente elogiado por sua jogabilidade viciante, design de níveis inteligente e trilha sonora atmosférica, tornando-se um favorito entre os fãs de jogos indie e roguelikes.'
        },
        { 
          id: 10, 
          content: 'Balatro', 
          rate: 12, 
          tags: ['Card Game', 'Estratégia', 'Roguelike'],
          review: 'Balatro é um jogo de cartas digital que combina elementos de estratégia e roguelike, desenvolvido pela equipe independente XYZ Studios. Lançado em 2022, o jogo se destaca por sua mecânica única de construção de baralhos, onde os jogadores podem personalizar suas cartas e habilidades para enfrentar desafios variados. Em Balatro, os jogadores embarcam em uma jornada através de diferentes níveis, enfrentando inimigos e chefes enquanto coletam novas cartas e aprimoram seu baralho. O jogo apresenta um sistema de combate tático, onde a escolha das cartas e a gestão dos recursos são cruciais para o sucesso. Com gráficos estilizados, uma trilha sonora envolvente e uma comunidade ativa, Balatro oferece uma experiência desafiadora e recompensadora para os fãs de jogos de cartas e estratégia.'
        },
        { 
          id: 11, 
          content: 'Satisfactory', 
          rate: 14, 
          tags: ['Construção', 'Simulação', 'Estratégia'],
          review: 'Satisfactory é um jogo de simulação e construção em primeira pessoa desenvolvido pela Coffee Stain Studios. Lançado em 2019, o jogo se passa em um planeta alienígena onde os jogadores assumem o papel de engenheiros encarregados de construir e otimizar fábricas automatizadas. Satisfactory combina elementos de exploração, coleta de recursos e design de fábricas, permitindo aos jogadores criar complexas linhas de produção para fabricar uma variedade de produtos. O jogo apresenta um mundo aberto vibrante, com biomas diversos e criaturas alienígenas que os jogadores podem encontrar durante suas expedições. Com sua jogabilidade envolvente, gráficos impressionantes e um modo multiplayer cooperativo, Satisfactory oferece uma experiência única para os fãs de jogos de construção e simulação.'
        },
        { 
          id: 12, 
          content: 'Enshrouded', 
          rate: 25, 
          tags: ['Aventura', 'Sobrevivência', 'RPG'],
          review: 'Enshrouded é um jogo de aventura e sobrevivência em mundo aberto desenvolvido pela Dark Forest Games. Lançado em 2023, o jogo se passa em um ambiente misterioso e sombrio, onde os jogadores devem explorar, coletar recursos e enfrentar perigos para sobreviver. Enshrouded combina elementos de RPG, permitindo aos jogadores personalizar seus personagens, desenvolver habilidades e completar missões enquanto desvendam os segredos do mundo ao seu redor. O jogo apresenta uma atmosfera imersiva, com gráficos detalhados e uma trilha sonora envolvente que contribuem para a experiência geral. Com sua jogabilidade desafiadora e foco na exploração, Enshrouded oferece uma aventura emocionante para os fãs de jogos de sobrevivência e RPG.'
        },
        { 
          id: 13, 
          content: 'Foxhole', 
          rate: 10, 
          tags: ['Estratégia MMO', 'Tático', 'Multiplayer'],
          review: 'Foxhole é um jogo de estratégia MMO em tempo real desenvolvido pela Clapfoot Inc. Lançado em 2020, o jogo se destaca por sua abordagem única ao gênero, onde os jogadores assumem o papel de soldados em um conflito global persistente. Foxhole combina elementos de estratégia, tática e cooperação em larga escala, permitindo que os jogadores trabalhem juntos para construir bases, fabricar equipamentos e lutar em batalhas massivas. O jogo apresenta um mundo aberto dinâmico, onde as ações dos jogadores afetam diretamente o curso da guerra. Com sua ênfase na colaboração e na comunicação, Foxhole oferece uma experiência desafiadora e envolvente para os fãs de jogos de estratégia e multiplayer.' 
        }
      ]
    },
    { 
      name:"Filmes",
       content: [
        { 
          id: 1, 
          content: 'Minecraft', 
          rate: 100, 
          tags: ['Sandbox', 'Construção', 'Aventura'],
          review: 'Um jogo sandbox que permite aos jogadores explorar, construir e sobreviver em um mundo gerado proceduralmente. Com gráficos em blocos característicos, Minecraft oferece uma experiência criativa e aberta, onde os jogadores podem criar estruturas impressionantes, minerar recursos e enfrentar criaturas perigosas. O jogo também possui modos multiplayer, permitindo que os jogadores colaborem ou compitam entre si. Com sua jogabilidade viciante e comunidade ativa, Minecraft se tornou um fenômeno cultural e um dos jogos mais vendidos de todos os tempos.'
        },
        {
          id: 2, 
          content: 'Escape from tarkov', 
          rate: 1, 
          tags: ['FPS', 'Tático', 'Ação'],
          review: 'Escape from Tarkov é um jogo de tiro em primeira pessoa (FPS) tático e realista, desenvolvido pela Battlestate Games. Situado em uma cidade fictícia chamada Tarkov, o jogo combina elementos de sobrevivência, RPG e simulação militar. Os jogadores assumem o papel de mercenários que precisam explorar a cidade, completar missões, coletar recursos e enfrentar outros jogadores e inimigos controlados por IA. Com uma ênfase na autenticidade, Escape from Tarkov apresenta mecânicas complexas de combate, gerenciamento de inventário e personalização de armas. O jogo é conhecido por sua dificuldade desafiadora e pela necessidade de estratégia e planejamento cuidadoso para sobreviver e escapar com sucesso da cidade.'
        },
      ]
    },{ 
      name:"Series",
      content: [
        { 
          id: 1, 
          content: 'Minecraft', 
          rate: 100, 
          tags: ['Sandbox', 'Construção', 'Aventura'],
          review: 'Um jogo sandbox que permite aos jogadores explorar, construir e sobreviver em um mundo gerado proceduralmente. Com gráficos em blocos característicos, Minecraft oferece uma experiência criativa e aberta, onde os jogadores podem criar estruturas impressionantes, minerar recursos e enfrentar criaturas perigosas. O jogo também possui modos multiplayer, permitindo que os jogadores colaborem ou compitam entre si. Com sua jogabilidade viciante e comunidade ativa, Minecraft se tornou um fenômeno cultural e um dos jogos mais vendidos de todos os tempos.'
        },
        {
          id: 2, 
          content: 'Escape from tarkov', 
          rate: 1, 
          tags: ['FPS', 'Tático', 'Ação'],
          review: 'Escape from Tarkov é um jogo de tiro em primeira pessoa (FPS) tático e realista, desenvolvido pela Battlestate Games. Situado em uma cidade fictícia chamada Tarkov, o jogo combina elementos de sobrevivência, RPG e simulação militar. Os jogadores assumem o papel de mercenários que precisam explorar a cidade, completar missões, coletar recursos e enfrentar outros jogadores e inimigos controlados por IA. Com uma ênfase na autenticidade, Escape from Tarkov apresenta mecânicas complexas de combate, gerenciamento de inventário e personalização de armas. O jogo é conhecido por sua dificuldade desafiadora e pela necessidade de estratégia e planejamento cuidadoso para sobreviver e escapar com sucesso da cidade.'
        },
        { 
          id: 3, 
          content: 'Rainbow Six X', 
          rate: 85, 
          tags: ['Tático', 'Estratégia', 'Ação'],
          review: 'Tom Clancy\'s Rainbow Six Siege é um jogo de tiro em primeira pessoa (FPS) tático desenvolvido pela Ubisoft. Lançado em 2015, o jogo se destaca por sua ênfase na estratégia, trabalho em equipe e destruição ambiental. Os jogadores assumem o papel de operadores de elite de várias unidades antiterrorismo ao redor do mundo, cada um com habilidades e equipamentos únicos. O objetivo principal do jogo é completar objetivos específicos, como resgatar reféns ou desarmar bombas, enquanto enfrentam uma equipe adversária. Com mapas detalhados e dinâmicos, Rainbow Six Siege oferece uma experiência intensa e desafiadora, onde a comunicação e a coordenação entre os jogadores são essenciais para o sucesso. O jogo também conta com um modo multiplayer competitivo e um modo cooperativo contra IA.' 
        },
      ]
    }
  ];

  export default cardData;