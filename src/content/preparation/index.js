// Preparation section scene images
import imgPrologue from '../../assets/images/preparation/prologue.png';
import imgJohnBaptist from '../../assets/images/preparation/john_baptist.png';
import imgBaptism from '../../assets/images/preparation/baptism.png';
import imgTemptations from '../../assets/images/preparation/temptations.png';

export const preparationData = [
  {
    id: 'prologue',
    chapter: 1,
    isChapterStart: true,
    sectionTitle: { it: 'Prologo', en: 'Prologue' },
    location: { it: 'Gerusalemme / Tempio', en: 'Jerusalem / Temple' },
    coordinate: [31.7774, 35.2354],
    image: imgPrologue,
    imagePrompt: "Cosmic explosion of light and golden nebulae forming an ethereal figure, symbolizing the Word (John 1:1-18). Watercolor on textured paper style, hand-drawn biblical illustration, no white borders, vertical format. Warm and divine lighting.",
    sources: {
      john: {
        label: { it: 'Giovanni', en: 'John' },
        ref: '1:1-18',
        verses: [
          { isChapterStart: true, number: 1, text: { it: 'Nel principio era la Parola, la Parola era con Dio, e la Parola era Dio.', en: 'In the beginning the Word already existed. The Word was with God, and the Word was God.' } },
          { number: 2, text: { it: 'Essa era nel principio con Dio.', en: 'He existed in the beginning with God.' } },
          { number: 3, text: { it: 'Ogni cosa è stata fatta per mezzo di lei; e senza di lei neppure una delle cose fatte è stata fatta.', en: 'God created everything through him, and nothing was created except through him.' } },
          { number: 4, text: { it: 'In lei era la [[vita|gods_purpose]], e la vita era la luce degli uomini.', en: 'The Word [[gave life|gods_purpose]] to everything that was created, and his life brought light to everyone.' } },
          { number: 5, text: { it: 'La luce splende nelle tenebre, e le tenebre non l\'hanno sopraffatta.', en: 'The light shines in the darkness, and the darkness can never extinguish it.' } },
          { number: 6, text: { it: 'Vi fu un uomo mandato da Dio, il cui nome era Giovanni.', en: 'God sent a man, John the Baptist,' } },
          { number: 7, text: { it: 'Egli venne come testimone per render testimonianza alla luce, affinché tutti credessero per mezzo di lui.', en: 'to tell about the light so that everyone might believe because of his testimony.' } },
          { number: 8, text: { it: 'Egli non era la luce, ma doveva render testimonianza alla luce.', en: 'John himself was not the light; he was simply a witness to tell about the light.' } },
          { number: 9, text: { it: 'La vera luce che illumina ogni uomo stava venendo nel mondo.', en: 'The one who is the true light, who gives light to everyone, was coming into the world.' } },
          { number: 10, text: { it: 'Egli era nel mondo, e il mondo fu fatto per mezzo di lui, ma il mondo non l\'ha conosciuto.', en: 'He came into the very world he created, but the world didn\'t recognize him.' } },
          { number: 11, text: { it: 'È venuto in casa sua e i suoi non l\'hanno ricevuto;', en: 'He came to his own people, and even they rejected him.' } },
          { number: 12, text: { it: 'ma a tutti quelli che l\'hanno ricevuto egli ha dato il diritto di diventar figli di Dio, a quelli, cioè, che [[credono nel suo nome|personal_response]],', en: 'But to all who [[believed him|personal_response]] and accepted him, he gave the right to become children of God.' } },
          { number: 13, text: { it: 'i quali non sono nati da sangue, né da volontà di carne, né da volontà d\'uomo, ma sono nati da Dio.', en: 'They are reborn—not with a physical birth resulting from human passion or plan, but a birth that comes from God.' } },
          { number: 14, text: { it: 'E la Parola è diventata carne e ha abitato per un tempo fra di noi, piena di grazia e di verità; e noi abbiamo contemplato la sua gloria, gloria come di unigenito dal Padre.', en: 'So the Word became human and made his home among us. He was full of unfailing love and faithfulness. And we have seen his glory, the glory of the Father\'s one and only Son.' } },
          { number: 15, text: { it: 'Giovanni gli ha reso testimonianza, esclamando: «Era di lui che io dicevo: "Colui che viene dopo di me mi ha preceduto, perché era prima di me"».', en: 'John testified about him when he shouted to the crowds, "This is the one I was talking about when I said, \'Someone is coming after me who is far greater than I am, for he existed long before me.\'"' } },
          { number: 16, text: { it: 'Infatti, dalla sua pienezza noi tutti abbiamo ricevuto grazia su grazia.', en: 'From his abundance we have all received one gracious blessing after another.' } },
          { number: 17, text: { it: 'Poiché la legge è stata data per mezzo di Mosè; la grazia e la verità sono venute per mezzo di Gesù Cristo.', en: 'For the law was given through Moses, but God\'s unfailing love and faithfulness came through Jesus Christ.' } },
          { number: 18, text: { it: 'Nessuno ha mai visto Dio; l\'unigenito Dio, che è nel seno del Padre, è quello che l\'ha fatto conoscere.', en: 'No one has ever seen God. But the unique One, who is himself God, is near to the Father\'s heart. He has revealed God to us.' } }
        ]
      }
    }
  },
  {
    id: 'ministry_john_baptist',
    chapter: 3,
    isChapterStart: true,
    sectionTitle: { it: 'Il Ministero del Battista', en: 'The Ministry of John the Baptist' },
    location: { it: 'Deserto di Giudea', en: 'Judean Desert' },
    coordinate: [31.84, 35.40],
    image: imgJohnBaptist,
    imagePrompt: "Austere man in camel hair garments preaching near the Jordan river in a desert landscape. Watercolor on textured paper style, hand-drawn biblical illustration, no white borders, vertical format. Historical biblical setting.",
    sources: {
      matthew: {
        label: { it: 'Matteo', en: 'Matthew' },
        ref: '3:1-12',
        verses: [
          { isChapterStart: true, number: 1, text: { it: 'In quei giorni venne Giovanni il battista, che predicava nel deserto della Giudea, e diceva:', en: 'In those days John the Baptist came to the Judean wilderness and began preaching. His message was,' } },
          { number: 2, text: { it: '«[[Ravvedetevi|repentance_new_life]], perché il regno dei cieli è vicino».', en: '“[[Repent|repentance_new_life]] of your sins and turn to God, for the Kingdom of Heaven is near.”' } },
          { number: 3, text: { it: 'Di lui parlò il profeta Isaia quando disse: «Voce di uno che grida nel deserto: "Preparate la via del Signore, raddrizzate i suoi sentieri"».', en: 'The prophet Isaiah was speaking about John when he said, “He is a voice shouting in the wilderness, ‘Prepare the way for the Lord’s coming! Clear the road for him!’”' } },
          { number: 4, text: { it: 'Giovanni aveva un vestito di pelo di cammello e una cintura di cuoio intorno ai fianchi; e il suo cibo erano locuste e miele selvatico.', en: 'John’s clothes were woven from coarse camel hair, and he wore a leather belt around his waist. For food he ate locusts and wild honey.' } },
          { number: 5, text: { it: 'Allora Gerusalemme, tutta la Giudea e tutto il paese limitrofo al Giordano accorrevano a lui;', en: 'People from Jerusalem and from all of Judea and all over the Jordan Valley went out to see and hear John.' } },
          { number: 6, text: { it: 'ed erano battezzati da lui nel fiume Giordano, confessando i loro peccati.', en: 'And when they confessed their sins, he baptized them in the Jordan River.' } },
          { number: 7, text: { it: 'Ma vedendo molti farisei e sadducei venire al suo battesimo, disse loro: «Razza di vipere, chi vi ha insegnato a sfuggire all\'[[ira futura|mans_problem]]?', en: 'But when he saw many Pharisees and Sadducees coming to watch him baptize, he denounced them. “You brood of snakes!” he exclaimed. “Who warned you to flee God’s [[coming wrath|mans_problem]]?' } },
          { number: 8, text: { it: 'Fate dunque dei frutti degni del ravvedimento.', en: 'Prove by the way you live that you have repented of your sins and turned to God.' } },
          { number: 9, text: { it: 'E non pensate di dire dentro di voi: "Abbiamo per padre Abraamo"; perché io vi dico che da queste pietre Dio può far sorgere dei figli ad Abraamo.', en: 'Don’t just say to each other, ‘We’re safe, for we are descendants of Abraham.’ That means nothing, for I tell you, God can create children of Abraham from these very stones.' } },
          { number: 10, text: { it: 'Già la scure è posta alla radice degli alberi; ogni albero dunque che non fa buon frutto, viene tagliato e gettato nel fuoco.', en: 'Even now the ax of God’s judgment is poised, ready to sever the roots of the trees. Yes, every tree that does not produce good fruit will be chopped down and thrown into the fire.' } },
          { number: 11, text: { it: 'Io vi battezzo con acqua, in vista del ravvedimento; ma colui che viene dopo di me è più forte di me, e io non sono degno di portargli i calzari; egli vi battezzerà con lo Spirito Santo e con il fuoco.', en: '“I baptize with water those who repent of their sins and turn to God. But someone is coming soon who is greater than I am—so much greater that I’m not worthy even to be his slave and carry his sandals. He will baptize you with the Holy Spirit and with fire.' } },
          { number: 12, text: { it: 'Egli ha il suo ventilabro in mano, e ripulirà interamente la sua aia e raccoglierà il suo grano nel granaio, ma brucerà la pula con fuoco inestinguibile».', en: 'He is ready to separate the chaff from the wheat with his winnowing fork. Then he will clean up the threshing area, gathering the wheat into his barn but burning the chaff with never-ending fire.”' } }
        ]
      },
      mark: {
        label: { it: 'Marco', en: 'Mark' },
        ref: '1:1-8',
        verses: [
          { isChapterStart: true, number: 1, text: { it: 'Inizio del vangelo di Gesù Cristo, Figlio di Dio.', en: 'This is the Good News about Jesus the Messiah, the Son of God.' } },
          { number: 2, text: { it: 'Come sta scritto nel profeta Isaia: «Ecco, io mando davanti a te il mio messaggero per prepararti la via...', en: 'It began just as the prophet Isaiah had written: “Look, I am sending my messenger ahead of you, and he will prepare your way...' } },
          { number: 3, text: { it: 'Voce di uno che grida nel deserto: "Preparate la via del Signore, raddrizzate i suoi sentieri"»,', en: 'He is a voice shouting in the wilderness, ‘Prepare the way for the Lord’s coming! Clear the road for him!’”' } },
          { number: 4, text: { it: 'vi fu Giovanni il battista nel deserto che predicava un battesimo di ravvedimento per il perdono dei peccati.', en: 'This messenger was John the Baptist. He was in the wilderness and preached that people should be baptized to show that they had repented of their sins and turned to God to be forgiven.' } },
          { number: 5, text: { it: 'Tutto il paese della Giudea e tutti quelli di Gerusalemme accorrevano a lui ed erano battezzati da lui nel fiume Giordano, confessando i loro peccati.', en: 'All of Judea, including all the people of Jerusalem, went out to see and hear John. And when they confessed their sins, he baptized them in the Jordan River.' } },
          { number: 6, text: { it: 'Giovanni era vestito di pelo di cammello, con una cintura di cuoio intorno ai fianchi, e si nutriva di locuste e di miele selvatico.', en: 'His clothes were woven from coarse camel hair, and he wore a leather belt around his waist. For food he ate locusts and wild honey.' } },
          { number: 7, text: { it: 'E predicava, dicendo: «Dopo di me viene colui che è più forte di me; al quale io non sono degno di chinarmi a sciogliere il legaccio dei calzari.', en: 'John announced: “Someone is coming soon who is greater than I am—so much greater that I’m not even worthy to stoop down like a slave and untie the straps of his sandals.' } },
          { number: 8, text: { it: 'Io vi ho battezzati con acqua, ma lui vi battezzerà con lo Spirito Santo».', en: 'I baptize you with water, but he will baptize you with the Holy Spirit!”' } }
        ]
      },
      luke: {
        label: { it: 'Luca', en: 'Luke' },
        ref: '3:1-20',
        verses: [
          { isChapterStart: true, number: 1, text: { it: 'Nell\'anno quindicesimo dell\'impero di Tiberio Cesare, quando Ponzio Pilato era governatore della Giudea...', en: 'It was now the fifteenth year of the reign of Tiberius, the Roman emperor. Pontius Pilate was governor over Judea...' } },
          { number: 2, text: { it: 'la parola di Dio fu diretta a Giovanni, figlio di Zaccaria, nel deserto.', en: 'at this time a message from God came to John son of Zechariah, who was living in the wilderness.' } },
          { number: 3, text: { it: 'Ed egli andò per tutta la regione intorno al Giordano, predicando un battesimo di ravvedimento per il perdono dei peccati,', en: 'Then John went from place to place on both sides of the Jordan River, preaching that people should be baptized to show that they had repented of their sins and turned to God to be forgiven.' } },
          { number: 4, text: { it: 'com\'è scritto nel libro delle parole del profeta Isaia: «Voce di uno che grida nel deserto: "Preparate la via del Signore, raddrizzate i suoi sentieri.', en: 'Isaiah had spoken of John when he said, "He is a voice shouting in the wilderness, \'Prepare the way for the Lord\'s coming! Clear the road for him!' } },
          { number: 5, text: { it: 'Ogni valle sarà colmata e ogni monte e ogni colle sarà abbassato; le vie tortuose saranno fatte diritte e quelle accidentate saranno appianate;', en: 'The valleys will be filled, and the mountains and hills made level. The curves will be straightened, and the rough places made smooth.' } },
          { number: 6, text: { it: 'e ogni creatura vedrà la salvezza di Dio"».', en: 'And then all people will see the salvation sent from God.\'"' } },
          { number: 7, text: { it: 'Diceva dunque alle folle che andavano per essere battezzate da lui: «Razza di vipere, chi vi ha insegnato a sfuggire all\'ira futura?', en: 'When the crowds came to John for baptism, he said, "You brood of snakes! Who warned you to flee God\'s coming wrath?' } },
          { number: 8, text: { it: 'Fate dunque dei frutti degni del ravvedimento, e non cominciate a dire in voi stessi: "Noi abbiamo Abraamo per padre!" Perché vi dico che Dio può da queste pietre far sorgere dei figli ad Abraamo.', en: 'Prove by the way you live that you have repented of your sins and turned to God. Don\'t just say to each other, \'We\'re safe, for we are descendants of Abraham.\' That means nothing, for I tell you, God can create children of Abraham from these very stones.' } },
          { number: 9, text: { it: 'Ormai la scure è posta alla radice degli alberi; ogni albero dunque che non fa buon frutto, viene tagliato e gettato nel fuoco».', en: 'Even now the ax of God\'s judgment is poised, ready to sever the roots of the trees. Yes, every tree that does not produce good fruit will be chopped down and thrown into the fire."' } },
          { number: 10, text: { it: 'Le folle lo interrogavano, dicendo: «Che cosa dobbiamo fare, dunque?»', en: 'The crowds asked, "What should we do?"' } },
          { number: 11, text: { it: 'Egli rispondeva loro: «Chi ha due tuniche, ne faccia parte a chi non ne ha; e chi ha da mangiare, faccia altrettanto».', en: 'John replied, "If you have two shirts, give one to the poor. If you have food, share it with those who are hungry."' } },
          { number: 12, text: { it: 'Vennero anche dei pubblicani per essere battezzati e gli dissero: «Maestro, che dobbiamo fare?»', en: 'Even corrupt tax collectors came to be baptized and asked, "Teacher, what should we do?"' } },
          { number: 13, text: { it: 'Ed egli rispose loro: «Non riscuotete nulla di più di quello che vi è ordinato».', en: 'He replied, "Collect no more taxes than the government requires."' } },
          { number: 14, text: { it: 'Lo interrogarono pure dei soldati, dicendo: «E noi, che dobbiamo fare?» Ed egli a loro: «Non fate estorsioni, non accusate falsamente nessuno, e accontentatevi della vostra paga».', en: '"What should we do?" asked some soldiers. John replied, "Don\'t extort money or make false accusations. And be content with your pay."' } },
          { number: 15, text: { it: 'Ora, poiché il popolo era in attesa e tutti si domandavano in cuor loro se Giovanni non fosse il Cristo,', en: 'Everyone was expecting the Messiah to come soon, and they were eager to know whether John might be the Messiah.' } },
          { number: 16, text: { it: 'Giovanni rispose, dicendo a tutti: «Io vi battezzo con acqua; ma viene colui che è più forte di me, al quale io non sono degno di sciogliere il legaccio dei calzari. Egli vi battezzerà con lo Spirito Santo e con il fuoco.', en: 'John answered their questions by saying, "I baptize you with water; but someone is coming soon who is greater than I am—so much greater that I\'m not even worthy to be his slave and untie the straps of his sandals. He will baptize you with the Holy Spirit and with fire.' } },
          { number: 17, text: { it: 'Egli ha in mano il suo ventilabro per ripulire interamente la sua aia, e raccogliere il grano nel suo granaio; ma la pula la brucerà con fuoco inestinguibile».', en: 'He is ready to separate the chaff from the wheat with his winnowing fork. Then he will clean up the threshing area, gathering the wheat into his barn but burning the chaff with never-ending fire."' } },
          { number: 18, text: { it: 'Così, con molte e varie esortazioni, evangelizzava il popolo.', en: 'John used many such warnings as he announced the Good News to the people.' } },
          { number: 19, text: { it: 'Ma Erode, il tetrarca, essendo da lui rimproverato a motivo di Erodiada, moglie di suo fratello, e per tutte le malvagità che Erode aveva commesse,', en: 'John also publicly reprimanded Herod Antipas, the ruler of Galilee, for marrying Herodias, his brother\'s wife, and for many other wrongs he had done.' } },
          { number: 20, text: { it: 'aggiunse anche questa a tutte le altre: chiuse Giovanni in prigione.', en: 'So Herod put John in prison, adding this sin to his many others.' } }
        ]
      },
      john: {
        label: { it: 'Giovanni', en: 'John' },
        ref: '1:19-28',
        verses: [
          { isChapterStart: true, number: 19, text: { it: 'Questa è la testimonianza di Giovanni, quando i Giudei mandarono da Gerusalemme dei sacerdoti e dei Leviti per domandargli: «Tu chi sei?»', en: 'This was John’s testimony when the Jewish leaders sent priests and Temple assistants from Jerusalem to ask John, “Who are you?”' } },
          { number: 20, text: { it: 'Egli confessò e non negò; confessò dicendo: «Io non sono il Cristo».', en: 'He came right out and said, "I am not the Messiah."' } },
          { number: 21, text: { it: 'Essi gli domandarono: «Chi sei dunque? Sei Elia?» Egli rispose: «Non lo sono». «Sei tu il profeta?» Egli rispose: «No».', en: '"Well then, who are you?" they asked. "Are you Elijah?" "No," he replied. "Are you the Prophet we are expecting?" "No."' } },
          { number: 22, text: { it: 'Essi dunque gli dissero: «Chi sei? affinché diamo una risposta a quelli che ci hanno mandati. Che dici di te stesso?»', en: '"Then who are you? We need an answer for those who sent us. What do you have to say about yourself?"' } },
          { number: 23, text: { it: 'Egli rispose: «Io sono la voce di uno che grida nel deserto: "Raddrizzate la via del Signore", come ha detto il profeta Isaia».', en: 'John replied in the words of the prophet Isaiah: “I am a voice shouting in the wilderness, ‘Clear the way for the Lord’s coming!’”' } },
          { number: 24, text: { it: 'Quelli che erano stati mandati da lui erano del gruppo dei farisei.', en: 'Then the Pharisees who had been sent' } },
          { number: 25, text: { it: 'E lo interrogarono dicendogli: «Perché dunque battezzi, se tu non sei il Cristo, né Elia, né il profeta?»', en: 'asked him, "If you aren\'t the Messiah or Elijah or the Prophet, what right do you have to baptize?"' } },
          { number: 26, text: { it: 'Giovanni rispose loro, dicendo: «Io battezzo con acqua; ma tra di voi è presente uno che voi non conoscete,', en: 'John told them, "I baptize with water, but right here in the crowd is someone you do not recognize.' } },
          { number: 27, text: { it: 'colui che viene dopo di me, al quale io non sono degno di sciogliere il legaccio dei calzari».', en: 'Though his ministry follows mine, I\'m not even worthy to be his slave and untie the straps of his sandal."' } },
          { number: 28, text: { it: 'Queste cose avvennero in Betania, di là dal Giordano, dove Giovanni stava battezzando.', en: 'This encounter took place in Bethany, an area east of the Jordan River, where John was baptizing.' } }
        ]
      }
    }
  },
  {
    id: 'baptism',
    chapter: 3,
    isChapterStart: false,
    sectionTitle: { it: 'Il Battesimo di Gesù', en: 'The Baptism of Jesus' },
    location: { it: 'Betania oltre il Giordano', en: 'Bethany beyond the Jordan' },
    coordinate: [31.8488, 35.5397],
    image: imgBaptism,
    imagePrompt: "Jesus standing in the Jordan river water, a beam of divine light descending from heaven, with a white brushstroke stylised dove. Watercolor on textured paper style, hand-drawn biblical illustration, no white borders, vertical format. Peace and divinity.",
    sources: {
      matthew: {
        label: { it: 'Matteo', en: 'Matthew' },
        ref: '3:13-17',
        verses: [
          { isChapterStart: true, number: 13, text: { it: 'Allora Gesù dalla Galilea si recò al Giordano da Giovanni per essere da lui battezzato.', en: 'Then Jesus went from Galilee to the Jordan River to be baptized by John.' } },
          { number: 14, text: { it: 'Ma questi vi si opponeva dicendo: «Sono io che ho bisogno di essere battezzato da te, e tu vieni da me?»', en: 'But John tried to talk him out of it. “I am the one who needs to be baptized by you,” he said, “so why are you coming to me?”' } },
          { number: 15, text: { it: 'Ma Gesù gli rispose: «Lascia fare per ora, poiché conviene che noi adempiamo in questo modo ogni giustizia». Allora Giovanni lo lasciò fare.', en: 'But Jesus said, “It should be done, for we must carry out all that God requires.” So John agreed to baptize him.' } },
          { number: 16, text: { it: 'Gesù, appena fu battezzato, salì fuori dall\'acqua; ed ecco i cieli gli si aprirono, ed egli vide lo Spirito di Dio scendere come una colomba e venire su di lui.', en: 'After his baptism, as Jesus came up out of the water, the heavens were opened and he saw the Spirit of God descending like a dove and settling on him.' } },
          { number: 17, text: { it: 'Ed ecco una voce dai cieli che disse: «Questo è il mio diletto Figlio, nel quale mi sono compiaciuto».', en: 'And a voice from heaven said, “This is my dearly loved Son, who brings me great joy.”' } }
        ]
      },
      mark: {
        label: { it: 'Marco', en: 'Mark' },
        ref: '1:9-11',
        verses: [
          { isChapterStart: true, number: 9, text: { it: 'In quei giorni Gesù venne da Nazaret di Galilea e fu battezzato da Giovanni nel Giordano.', en: 'One day Jesus came from Nazareth in Galilee, and John baptized him in the Jordan River.' } },
          { number: 10, text: { it: 'A un tratto, come egli usciva dall\'acqua, vide aprirsi i cieli e lo Spirito scendere su di lui come una colomba.', en: 'As Jesus came up out of the water, he saw the heavens splitting apart and the Holy Spirit descending on him like a dove.' } },
          { number: 11, text: { it: 'Una voce venne dai cieli: «Tu sei il mio diletto Figlio; in te mi sono compiaciuto».', en: 'And a voice from heaven said, “You are my dearly loved Son, and you bring me great joy.”' } }
        ]
      },
      luke: {
        label: { it: 'Luca', en: 'Luke' },
        ref: '3:21-22',
        verses: [
          { isChapterStart: true, number: 21, text: { it: 'Ora, mentre tutto il popolo si faceva battezzare, anche Gesù fu battezzato; e, mentre pregava, si aprì il cielo', en: 'One day when the crowds were being baptized, Jesus himself was baptized. As he was praying, the heavens opened,' } },
          { number: 22, text: { it: 'e lo Spirito Santo scese su di lui in forma corporea, come una colomba; e venne una voce dal cielo: «Tu sei il mio diletto Figlio; in te mi sono compiaciuto».', en: 'and the Holy Spirit, in bodily form, descended on him like a dove. And a voice from heaven said, “You are my dearly loved Son, and you bring me great joy.”' } }
        ]
      },
      john: {
        label: { it: 'Giovanni', en: 'John' },
        ref: '1:29-34',
        verses: [
          { isChapterStart: true, number: 29, text: { it: 'Il giorno seguente Giovanni vide Gesù che veniva verso di lui e disse: «Ecco l\'[[Agnello di Dio|gods_solution]], che toglie il peccato del mondo!', en: 'The next day John saw Jesus coming toward him and said, “Look! The [[Lamb of God|gods_solution]] who takes away the sin of the world!' } },
          { number: 30, text: { it: 'Questi è colui del quale dicevo: "Dopo di me viene un uomo che mi ha preceduto, perché egli era prima di me".', en: 'He is the one I was talking about when I said, ‘A man is coming after me who is far greater than I am, for he existed long before me.’' } },
          { number: 31, text: { it: 'Io non lo conoscevo; ma appunto affinché egli sia manifestato a Israele, io sono venuto a battezzare in acqua».', en: 'I did not recognize him as the Messiah, but I have been baptizing with water so that he might be revealed to Israel”.' } },
          { number: 32, text: { it: 'Poi Giovanni rese la sua testimonianza, dicendo: «Ho visto lo Spirito scendere dal cielo come una colomba e fermarsi su di lui.', en: 'Then John testified, “I saw the Holy Spirit descending like a dove from heaven and resting upon him.' } },
          { number: 33, text: { it: 'Io non lo conoscevo; ma colui che mi ha mandato a battezzare in acqua, mi ha detto: "Colui sul quale vedrai lo Spirito scendere e fermarsi, è quello che battezza con lo Spirito Santo".', en: 'I didn\'t know he was the one, but when God sent me to baptize with water, he told me, \'The one on whom you see the Spirit descend and rest is the one who will baptize with the Holy Spirit.\'' } },
          { number: 34, text: { it: 'E io ho veduto e ho attestato che questi è il Figlio di Dio».', en: 'I saw this happen to Jesus, so I testify that he is the Chosen One of God.”' } }
        ]
      }
    }
  },
  {
    id: 'temptations',
    chapter: 4,
    isChapterStart: true,
    sectionTitle: { it: 'Le Tentazioni di Gesù', en: 'The Temptations of Jesus' },
    location: { it: 'Monte della Quarantena', en: 'Mount of Temptation' },
    coordinate: [31.8744, 35.4319],
    image: imgTemptations,
    imagePrompt: "Jesus sitting alone on an arid rock in the desert wilderness, long dramatic shadows, majestic solitude. Watercolor on textured paper style, hand-drawn biblical illustration, no white borders, vertical format. Desolate and spiritual atmosphere.",
    sources: {
      matthew: {
        label: { it: 'Matteo', en: 'Matthew' },
        ref: '4:1-11',
        verses: [
          { isChapterStart: true, number: 1, text: { it: 'Allora Gesù fu condotto dallo Spirito nel deserto, per essere tentato dal diavolo.', en: 'Then Jesus was led by the Spirit into the wilderness to be tempted there by the devil.' } },
          { number: 2, text: { it: 'E, dopo aver digiunato quaranta giorni e quaranta notti, alla fine ebbe fame.', en: 'For forty days and forty nights he fasted and became very hungry.' } },
          { number: 3, text: { it: 'E il tentatore, avvicinatosi, gli disse: «Se tu sei Figlio di Dio, ordina che queste pietre diventino pani».', en: 'During that time the devil came and said to him, “If you are the Son of God, tell these stones to become loaves of bread.”' } },
          { number: 4, text: { it: 'Ma egli rispose: «Sta scritto: "Non di pane soltanto vivrà l\'uomo, ma di ogni parola che proviene dalla bocca di Dio"».', en: 'But Jesus told him, "No! The Scriptures say, \'People do not live by bread alone, but by every word that comes from the mouth of God.\'"' } },
          { number: 5, text: { it: 'Allora il diavolo lo portò con sé nella città santa, lo pose sul pinnacolo del tempio,', en: 'Then the devil took him to the holy city, Jerusalem, to the highest point of the Temple,' } },
          { number: 6, text: { it: 'e gli disse: «Se tu sei Figlio di Dio, gettati giù; poiché sta scritto: "Egli darà ordini ai suoi angeli a tuo riguardo, ed essi ti porteranno sulle loro mani, perché non urti col piede contro una pietra"».', en: 'and said, "If you are the Son of God, jump off! For the Scriptures say, \'He will order his angels to protect you. And they will hold you up with their hands so you won\'t even hurt your foot on a stone.\'"' } },
          { number: 7, text: { it: 'Gesù gli rispose: «È altresì scritto: "Non tentare il Signore Dio tuo"».', en: 'Jesus responded, "The Scriptures also say, \'You must not test the LORD your God.\'"' } },
          { number: 8, text: { it: 'Di nuovo il diavolo lo portò con sé sopra un monte altissimo e gli mostrò tutti i regni del mondo e la loro gloria, dicendogli:', en: 'Next the devil took him to the peak of a very high mountain and showed him all the kingdoms of the world and their glory.' } },
          { number: 9, text: { it: '«Tutte queste cose ti darò, se tu ti prostri e mi adori».', en: '"I will give it all to you," he said, "if you will kneel down and worship me."' } },
          { number: 10, text: { it: 'Allora Gesù gli disse: «Vattene, Satana, poiché sta scritto: "Adora il Signore Dio tuo e a lui solo rendi il culto"».', en: '"Get out of here, Satan," Jesus told him. "For the Scriptures say, \'You must worship the LORD your God and serve only him.\'"' } },
          { number: 11, text: { it: 'Allora il diavolo lo lasciò, ed ecco degli angeli si avvicinarono a lui e lo servivano.', en: 'Then the devil went away, and angels came and took care of Jesus.' } }
        ]
      },
      mark: {
        label: { it: 'Marco', en: 'Mark' },
        ref: '1:12-13',
        verses: [
          { isChapterStart: true, number: 12, text: { it: 'Subito dopo lo Spirito lo sospinse nel deserto;', en: 'The Spirit then compelled Jesus to go into the wilderness,' } },
          { number: 13, text: { it: 'e nel deserto rimase per quaranta giorni, tentato da Satana. Stava tra le bestie selvatiche e gli angeli lo servivano.', en: 'where he was tempted by Satan for forty days. He was out among the wild animals, and angels took care of him.' } }
        ]
      },
      luke: {
        label: { it: 'Luca', en: 'Luke' },
        ref: '4:1-13',
        verses: [
          { isChapterStart: true, number: 1, text: { it: 'Gesù, pieno di Spirito Santo, ritornò dal Giordano e fu condotto dallo Spirito nel deserto', en: 'Then Jesus, full of the Holy Spirit, returned from the Jordan River. He was led by the Spirit in the wilderness,' } },
          { number: 2, text: { it: 'per quaranta giorni, dove era tentato dal diavolo. Durante quei giorni non mangiò nulla; e quando furono trascorsi, ebbe fame.', en: 'where he was tempted by the devil for forty days. Jesus ate nothing all that time and became very hungry.' } },
          { number: 3, text: { it: 'Il diavolo gli disse: «Se tu sei Figlio di Dio, di\' a questa pietra che diventi pane».', en: 'Then the devil said to him, "If you are the Son of God, tell this stone to become a loaf of bread."' } },
          { number: 4, text: { it: 'Gesù gli rispose: «Sta scritto: "Non di pane soltanto vivrà l\'uomo"».', en: 'But Jesus told him, "No! The Scriptures say, \'People do not live by bread alone.\'"' } },
          { number: 5, text: { it: 'Il diavolo lo condusse in alto, gli mostrò in un attimo tutti i regni del mondo e gli disse:', en: 'Then the devil took him up and revealed to him all the kingdoms of the world in a moment of time.' } },
          { number: 6, text: { it: '«Ti darò tutta questa potenza e la gloria di questi regni; perché essa mi è stata data, e la do a chi voglio.', en: '"I will give you the glory of these kingdoms and authority over them," the devil said, "because they are mine to give to anyone I please.' } },
          { number: 7, text: { it: 'Se dunque tu ti prostri ad adorarmi, sarà tutta tua».', en: 'I will give it all to you if you will worship me."' } },
          { number: 8, text: { it: 'Gesù gli rispose: «Sta scritto: "Adora il Signore, il tuo Dio, e a lui solo rendi il tuo culto"».', en: 'Jesus replied, "The Scriptures say, \'You must worship the LORD your God and serve only him.\'"' } },
          { number: 9, text: { it: 'Poi lo portò a Gerusalemme, lo pose sul pinnacolo del tempio e gli disse: «Se tu sei Figlio di Dio, gettati giù di qui;', en: 'Then the devil took him to Jerusalem, to the highest point of the Temple, and said, "If you are the Son of God, jump off!' } },
          { number: 10, text: { it: 'perché sta scritto: "Egli darà ordini ai suoi angeli a tuo riguardo, di conservarti";', en: 'For the Scriptures say, \'He will order his angels to protect and guard you.\'' } },
          { number: 11, text: { it: 'e: "Essi ti porteranno sulle mani, perché tu non urti col piede contro una pietra"».', en: 'And they will hold you up with their hands so you won\'t even hurt your foot on a stone."' } },
          { number: 12, text: { it: 'Gesù gli rispose: «È stato detto: "Non tentare il Signore Dio tuo"».', en: 'Jesus responded, "The Scriptures also say, \'You must not test the LORD your God.\'"' } },
          { number: 13, text: { it: 'Allora il diavolo, dopo aver finito ogni tentazione, si allontanò da lui fino a un momento determinato.', en: 'When the devil had finished tempting Jesus, he left him until the next opportunity came.' } }
        ]
      }
    }
  }
];

export default preparationData;
