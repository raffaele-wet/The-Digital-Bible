import imgPrologo from '../../assets/images/Luke_1_1-4.png';
import imgZaccaria from '../../assets/images/Luke_1_5-25.png';
import imgMaria from '../../assets/images/Luke_1_26-38.png';
import imgElisabetta from '../../assets/images/Luke_1_39-56.png';
import imgCantico from '../../assets/images/Luke_1_57-80.png';
import imgNascita from '../../assets/images/Luke_2_1-7.png';
import imgPastori from '../../assets/images/Luke_2_8-20.png';
import imgTempio from '../../assets/images/Luke_2_21-38.png';
import imgNazaret from '../../assets/images/Luke_2_39-40.png';
import imgGesuTempio from '../../assets/images/Luke_2_41-52.png';

const nativityScenes = [
  {
    id: 1,
    chapter: 1,
    isChapterStart: true,
    sectionTitle: {
      it: "Prologo",
      en: "Introduction"
    },
    verses: [
      { number: 1, text: { it: "Poiché molti hanno intrapreso a ordinare una narrazione dei fatti che si sono compiuti tra di noi,", en: "Many people have set out to write accounts about the events that have been fulfilled among us." } },
      { number: 2, text: { it: "secondo quello che ci hanno tramandato coloro che da principio ne furono testimoni oculari e divennero ministri della Parola,", en: "They used the eyewitness reports circulating among us from the early disciples and other ministers of the word." } },
      { number: 3, text: { it: "è parso bene anche a me, dopo essermi accuratamente informato di ogni cosa dall'origine, di scrivertene per ordine, illustre [[Teofilo|1:1-4]],", en: "Having carefully investigated everything from the beginning, I also have decided to write an accurate account for you, most honorable [[Theophilus|1:1-4]]," } },
      { number: 4, text: { it: "perché tu riconosca la certezza delle cose che ti sono state insegnate.", en: "so you can be certain of the truth of everything you were taught." } }
    ],
    location: { it: "Giudea", en: "Judea" },
    coordinate: [31.7774, 35.2354],
    image: imgPrologo,
    imagePrompt: "Vertical portrait format. A symbolic glowing scroll with ancient Hebrew text, illuminated by soft golden light piercing through dark shadows, in traditional watercolor painting style on textured paper, soft fluid pigments, delicate washes, cinematic lighting."
  },
  {
    id: 2,
    chapter: 1,
    isChapterStart: false,
    sectionTitle: {
      it: "L'annuncio a Zaccaria",
      en: "The Birth of John the Baptist Foretold"
    },
    verses: [
      { number: 5, text: { it: "Al tempo di Erode, re della Giudea, c'era un sacerdote di nome Zaccaria, del [[turno di Abia; sua moglie era discendente di Aronne|1:5]] e si chiamava Elisabetta.", en: "When Herod was king of Judea, there was a Jewish priest named Zechariah. He was a member of the [[priestly order of Abijah, and his wife, Elizabeth, was also from the priestly line of Aaron|1:5]]." } },
      { number: 6, text: { it: "Erano entrambi giusti davanti a Dio, e osservavano irreprensibili tutti i comandamenti e i precetti del Signore.", en: "Zechariah and Elizabeth were righteous in God’s eyes, careful to obey all of the Lord’s commandments and regulations." } },
      { number: 7, text: { it: "Essi non avevano figli, perché Elisabetta era sterile, ed erano tutti e due avanzati in età.", en: "They had no children because Elizabeth was unable to conceive, and they were both very old." } },
      { number: 8, text: { it: "Ora, mentre egli esercitava il sacerdozio davanti a Dio nel turno della sua classe,", en: "One day Zechariah was serving God in the Temple, for his order was on duty that week." } },
      { number: 9, text: { it: "secondo la consuetudine del sacerdozio, gli toccò in sorte di entrare nel tempio del Signore per offrirvi il profumo;", en: "As was the custom of the priests, he was chosen by lot to enter the sanctuary of the Lord and burn incense." } },
      { number: 10, text: { it: "e tutta la moltitudine del popolo stava fuori in preghiera, nell'ora in cui si offriva il profumo.", en: "While the incense was being burned, a great crowd stood outside, praying." } },
      { number: 11, text: { it: "Allora gli apparve un angelo del Signore, in piedi alla destra dell'altare dei profumi.", en: "While Zechariah was in the sanctuary, an angel of the Lord appeared to him, standing to the right of the incense altar." } },
      { number: 12, text: { it: "Zaccaria, vedendolo, fu turbato e preso da spavento.", en: "Zechariah was shaken and overwhelmed with fear when he saw him." } },
      { number: 13, text: { it: "Ma l'angelo gli disse: «Non temere, Zaccaria, perché la tua preghiera è stata esaudita; tua moglie Elisabetta ti partorirà un figlio, e gli porrai nome Giovanni.", en: "But the angel said, 'Don’t be afraid, Zechariah! God has heard your prayer. Your wife, Elizabeth, will give you a son, and you are to name him John.'" } },
      { number: 14, text: { it: "Tu ne avrai gioia ed esultanza, e molti si rallegreranno per la sua nascita.", en: "'You will have great joy and gladness, and many will rejoice at his birth,'" } },
      { number: 15, text: { it: "Perché sarà grande davanti al Signore; non berrà né [[vino né bevande inebrianti|1:15b]], e sarà [[ripieno di Spirito Santo|1:15a]] fin dal grembo di sua madre;", en: "for he will be great in the eyes of the Lord. He must never touch [[wine or other alcoholic drinks|1:15b]]. He will be [[filled with the Holy Spirit|1:15a]], even before his birth." } },
      { number: 16, text: { it: "e convertirà molti dei figli d'Israele al Signore, loro Dio;", en: "And he will turn many Israelites to the Lord their God." } },
      { number: 17, text: { it: "e andrà davanti a lui [[con lo spirito e la potenza di Elia|1:17a]], per volgere i cuori dei [[padri ai figli|1:17b]] e i ribelli alla saggezza dei giusti, per preparare al Signore un popolo ben disposto».", en: "He will be a man [[with the spirit and power of Elijah|1:17a]]. He will prepare the people for the coming of the Lord. He will turn the hearts of the [[fathers to their children|1:17b]], and he will cause those who are rebellious to accept the wisdom of the godly." } },
      { number: 18, text: { it: "E Zaccaria disse all'angelo: «Da che cosa conoscerò questo? Perché io sono vecchio e mia moglie è avanzata in età».", en: "Zechariah said to the angel, 'How can I be sure this will happen? I’m an old man now, and my wife is also well along in years.'" } },
      { number: 19, text: { it: "L'angelo gli rispose: «Io sono Gabriele, che sto alla presenza di Dio; e sono stato mandato per parlarti e per recarti questo lieto annuncio.", en: "Then the angel said, 'I am Gabriel! I stand in the very presence of God. It was he who sent me to bring you this good news!'" } },
      { number: 20, text: { it: "Ecco, tu sarai muto, e non potrai parlare fino al giorno che queste cose avverranno, perché non hai creduto alle mie parole, che si adempiranno a loro tempo».", en: "'But now, since you didn’t believe what I said, you will be silent and unable to speak until the child is born. For my words will certainly be fulfilled at the proper time.'" } },
      { number: 21, text: { it: "Il popolo intanto stava aspettando Zaccaria, e si meravigliava del suo indugiare nel tempio.", en: "Meanwhile, the people were waiting for Zechariah to come out of the sanctuary, wondering why he was taking so long." } },
      { number: 22, text: { it: "Ma quando fu uscito, non poteva parlare loro; e capirono che aveva avuto una visione nel tempio; ed egli faceva loro dei cenni e restava muto.", en: "When he finally did come out, he couldn’t speak to them. Then they realized from his gestures and his silence that he must have seen a vision in the sanctuary." } },
      { number: 23, text: { it: "Quando furono compiuti i giorni del suo servizio, egli se ne andò a casa sua.", en: "When Zechariah’s week of service in the Temple was over, he returned home." } },
      { number: 24, text: { it: "Dopo quei giorni, sua moglie Elisabetta rimase incinta, e si tenne nascosta per cinque mesi, dicendo:", en: "Soon afterward his wife, Elizabeth, became pregnant and went into seclusion for five months." } },
      { number: 25, text: { it: "«Ecco quanto ha fatto per me il Signore, nei giorni in cui mi ha guardata per togliere la mia vergogna in mezzo agli uomini».", en: "'How kind the Lord is!' she exclaimed. 'He has taken away my disgrace of having no children.'" } }
    ],
    location: { it: "Gerusalemme - Tempio", en: "Jerusalem - Temple" },
    coordinate: [31.7774, 35.2354],
    image: imgZaccaria,
    imagePrompt: "Vertical portrait format. An elderly Jewish priest Zechariah in ornate temple robes, looking astonished at an ethereal glowing archangel Gabriel inside an ancient stone temple filled with rising incense, in traditional watercolor painting style on textured paper, soft fluid pigments, delicate washes, cinematic lighting."
  },
  {
    id: 3,
    chapter: 1,
    isChapterStart: false,
    sectionTitle: {
      it: "L'annuncio a Maria",
      en: "The Birth of Jesus Foretold"
    },
    verses: [
      { number: 26, text: { it: "Al sesto mese, l'angelo Gabriele fu mandato da Dio in una città della Galilea, chiamata Nazaret,", en: "In the sixth month of Elizabeth’s pregnancy, God sent the angel Gabriel to Nazareth, a village in Galilee," } },
      { number: 27, text: { it: "a una vergine [[fidanzata a un uomo|1:27]] chiamato Giuseppe, della casa di Davide; e il nome della vergine era Maria.", en: "to a virgin named Mary. She was [[engaged to be married to a man|1:27]] named Joseph, a descendant of King David." } },
      { number: 28, text: { it: "L'angelo, entrato da lei, disse: «Ti saluto, o [[favorita dalla grazia|1:28]]; il Signore è con te».", en: "Gabriel appeared to her and said, 'Greetings, [[favored woman|1:28]]! The Lord is with you!'" } },
      { number: 29, text: { it: "Ella fu turbata a queste parole, e si domandava che cosa volesse dire un tale saluto.", en: "Confused and disturbed, Mary tried to think what the angel could mean." } },
      { number: 30, text: { it: "L'angelo le disse: «Non temere, Maria, perché hai trovato grazia presso Dio.", en: "'Don’t be afraid, Mary,' the angel told her, 'for you have found favor with God!'" } },
      { number: 31, text: { it: "Ecco, tu concepirai e partorirai un figlio, e gli porrai nome Gesù.", en: "'You will conceive and give birth to a son, and you will name him Jesus.'" } },
      { number: 32, text: { it: "Questi sarà grande e sarà chiamato Figlio dell'Altissimo, e il Signore Dio gli darà il trono di [[Davide, suo padre|1:32]].", en: "'He will be very great and will be called the Son of the Most High. The Lord God will give him the throne of his [[ancestor David|1:32]].'" } },
      { number: 33, text: { it: "Egli regnerà sulla casa di Giacobbe in eterno, e il suo regno non avrà mai fine».", en: "'And he will reign over Israel forever; his Kingdom will never end!'" } },
      { number: 34, text: { it: "Maria disse all'angelo: «Come avverrà questo, dal momento che non conosco uomo?»", en: "Mary asked the angel, 'But how can this happen? I am a virgin.'" } },
      { number: 35, text: { it: "L'angelo le rispose: «Lo Spirito Santo verrà su di te e la potenza dell'Altissimo ti coprirà dell'ombra sua; perciò, anche colui che nascerà sarà chiamato [[Santo|1:35]], Figlio di Dio.", en: "The angel replied, 'The Holy Spirit will come upon you, and the power of the Most High will overshadow you. So the baby to be born will be [[holy|1:35]], and he will be called the Son of God.'" } },
      { number: 36, text: { it: "Ecco, Elisabetta, tua parente, ha concepito anche lei un figlio nella sua vecchiaia; e questo è il sesto mese per lei, che era chiamata sterile;", en: "'What’s more, your relative Elizabeth has become pregnant in her old age! People used to say she was barren, but she has conceived a son and is now in her sixth month.'" } },
      { number: 37, text: { it: "poiché nessuna parola di Dio rimarrà inefficace».", en: "'For the word of God will never fail.'" } },
      { number: 38, text: { it: "Maria disse: «Ecco, io sono la serva del Signore; mi sia fatto [[secondo la tua parola|1:38]]». E l'angelo la lasciò.", en: "Mary responded, 'I am the Lord’s servant. [[May everything you have said about me come true|1:38]].' And then the angel left her." } }
    ],
    location: { it: "Nazaret", en: "Nazareth" },
    coordinate: [32.7019, 35.3033],
    image: imgMaria,
    imagePrompt: "Vertical portrait format. A humble young Jewish woman Mary in a simple blue and white tunic, kneeling in awe before the brilliant glowing archangel Gabriel in a rustic Nazareth home, in traditional watercolor painting style on textured paper, soft fluid pigments, delicate washes, cinematic lighting."
  },
  {
    id: 4,
    chapter: 1,
    isChapterStart: false,
    sectionTitle: {
      it: "Maria fa visita a Elisabetta",
      en: "Mary Visits Elizabeth"
    },
    verses: [
      { number: 39, text: { it: "In quei giorni Maria si alzò e andò in fretta nella regione montuosa, in una città di Giuda,", en: "A few days later Mary hurried to the hill country of Judea, to the town" } },
      { number: 40, text: { it: "ed entrò in casa di Zaccaria e salutò Elisabetta.", en: "where Zechariah lived. She entered his home and greeted Elizabeth." } },
      { number: 41, text: { it: "Appena Elisabetta udì il saluto di Maria, il bambino le sussultò nel grembo; ed Elisabetta fu piena di Spirito Santo,", en: "At the sound of Mary’s greeting, Elizabeth’s child leaped within her, and Elizabeth was filled with the Holy Spirit." } },
      { number: 42, text: { it: "ed esclamò a gran voce: «Benedetta sei tu fra le donne, e benedetto è il frutto del tuo grembo!", en: "Elizabeth gave a glad cry and exclaimed to Mary, 'God has blessed you above all women, and your child is blessed.'" } },
      { number: 43, text: { it: "Come mai mi è dato che la madre del mio Signore venga da me?", en: "'Why am I so honored, that the mother of my Lord should visit me?'" } },
      { number: 44, text: { it: "Poiché ecco, non appena la voce del tuo saluto mi è giunta agli orecchi, per la gioia il bambino mi è sussultato nel grembo.", en: "'When I heard your greeting, the baby in my womb jumped for joy.'" } },
      { number: 45, text: { it: "Beata è colei che ha creduto che le parole dettele da parte del Signore si compiranno!»", en: "'You are blessed because you believed that the Lord would do what he said.'" } },
      { number: 46, text: { it: "E Maria disse: «L’anima mia magnifica il Signore,", en: "Mary responded, 'Oh, how my soul praises the Lord.'" } },
      { number: 47, text: { it: "e lo spirito mio esulta in [[Dio, mio Salvatore|1:47]],", en: "'How my spirit rejoices in [[God my Savior|1:47]]!'" } },
      { number: 48, text: { it: "perché egli ha guardato alla bassezza della sua serva. Da ora in poi tutte le generazioni mi chiameranno beata,", en: "'For he took notice of his lowly servant girl, and from now on all generations will call me blessed.'" } },
      { number: 49, text: { it: "perché grandi cose mi ha fatte il Potente. Santo è il suo nome;", en: "'For the Mighty One is holy, and he has done great things for me.'" } },
      { number: 50, text: { it: "e la sua misericordia si estende di generazione in generazione su quelli che lo temono.", en: "'He shows mercy from generation to generation to all who fear him.'" } },
      { number: 51, text: { it: "Egli ha operato potentemente con il suo braccio; ha disperso quelli che erano superbi nei pensieri del loro cuore;", en: "'His mighty arm has done tremendous things! He has scattered the proud and haughty ones.'" } },
      { number: 52, text: { it: "ha detronizzato i potenti, e ha innalzato gli umili;", en: "'He has brought down princes from their thrones and exalted the humble.'" } },
      { number: 53, text: { it: "ha ricolmato di beni gli affamati, e ha rimandato a mani vuote i ricchi.", en: "'He has filled the hungry with good things and sent the rich away with empty hands.'" } },
      { number: 54, text: { it: "Ha soccorso Israele, suo servitore, ricordandosi della sua misericordia,", en: "'He has helped his servant Israel and remembered to be merciful.'" } },
      { number: 55, text: { it: "come aveva promesso ai nostri padri, verso Abraamo e la sua discendenza per sempre».", en: "'For he made this promise to our ancestors, to Abraham and his children forever.'" } },
      { number: 56, text: { it: "Maria rimase con Elisabetta circa tre mesi; poi se ne tornò a casa sua.", en: "Mary stayed with Elizabeth about three months and then went back to her own home." } }
    ],
    location: { it: "Giuda (Ain Karem)", en: "Judean Hill Country" },
    coordinate: [31.7656, 35.1636],
    image: imgElisabetta,
    imagePrompt: "Vertical portrait format. Two joyous holy women Mary and Elizabeth embracing in a sunlit ancient courtyard in the Judean hills. One is young, the other elderly but pregnant, in traditional watercolor painting style on textured paper, soft fluid pigments, delicate washes, cinematic lighting."
  },
  {
    id: 5,
    chapter: 1,
    isChapterStart: false,
    sectionTitle: {
      it: "Nascita di Giovanni Battista e Cantico di Zaccaria",
      en: "The Birth of John the Baptist"
    },
    verses: [
      { number: 57, text: { it: "Compiutosi per Elisabetta il tempo di partorire, diede alla luce un figlio.", en: "When it was time for Elizabeth’s baby to be born, she gave birth to a son." } },
      { number: 58, text: { it: "I suoi vicini e i parenti udirono che il Signore le aveva mostrato la sua grande misericordia e se ne rallegravano con lei.", en: "And when her neighbors and relatives heard that the Lord had been very merciful to her, everyone rejoiced with her." } },
      { number: 59, text: { it: "L’ottavo giorno vennero per circoncidere il bambino e lo volevano chiamare Zaccaria, dal nome di suo padre.", en: "When the baby was eight days old, they all came for the circumcision ceremony. They wanted to name him Zechariah, after his father." } },
      { number: 60, text: { it: "Ma sua madre, intervenendo, disse: «No, sarà chiamato Giovanni».", en: "But Elizabeth said, 'No! His name is John!'" } },
      { number: 61, text: { it: "Essi le dissero: «Non c’è nessuno tra i tuoi parenti che porti questo nome».", en: "'What?' they exclaimed. 'There is no one in all your family by that name.'" } },
      { number: 62, text: { it: "E fecero dei cenni a suo padre per sapere come lo voleva chiamare.", en: "So they used gestures to ask the baby’s father what he wanted to name him." } },
      { number: 63, text: { it: "Egli, domandata una tavoletta, scrisse così: «Il suo nome è Giovanni». E tutti si meravigliarono.", en: "He motioned for a writing tablet, and to everyone’s surprise he wrote, 'His name is John.'" } },
      { number: 64, text: { it: "In quell’istante la sua bocca fu aperta e la sua lingua sciolta, ed egli parlava benedicendo Dio.", en: "Instantly Zechariah could speak again, and he began praising God." } },
      { number: 65, text: { it: "E un gran timore prese tutti i loro vicini; in tutta la regione montuosa della Giudea si discorreva di tutte queste cose.", en: "Awe fell upon the whole neighborhood, and the news of what had happened spread throughout the Judean hills." } },
      { number: 66, text: { it: "Tutti quelli che le udirono le serbarono in cuor loro, dicendo: «Che sarà mai questo bambino?» Perché la mano del Signore era con lui.", en: "Everyone who heard about it reflected on these events and asked, 'What will this child turn out to be?' For the hand of the Lord was surely upon him in a special way." } },
      { number: 67, text: { it: "Zaccaria, suo padre, fu [[pieno di Spirito Santo|1:67]] e profetizzò, dicendo:", en: "Then his father, Zechariah, was [[filled with the Holy Spirit|1:67]] and gave this prophecy:" } },
      { number: 68, text: { it: "«Benedetto sia il Signore, il Dio d’Israele, perché ha visitato e riscattato il suo popolo,", en: "'Praise the Lord, the God of Israel, because he has visited and redeemed his people.'" } },
      { number: 69, text: { it: "e ci ha suscitato un potente Salvatore nella casa di Davide suo servo,", en: "'He has sent us a mighty Savior from the royal line of his servant David,'" } },
      { number: 70, text: { it: "come aveva promesso da tempo per bocca dei suoi profeti;", en: "'just as he promised through his holy prophets long ago.'" } },
      { number: 71, text: { it: "per salvarci dai nostri nemici e dalle mani di tutti quelli che ci odiano.", en: "'Now we will be saved from our enemies and from all who hate us.'" } },
      { number: 72, text: { it: "Egli usa così misericordia verso i nostri padri e si ricorda del suo santo patto,", en: "'He has been merciful to our ancestors by remembering his sacred covenant—'" } },
      { number: 73, text: { it: "del giuramento che fece ad Abraamo nostro padre,", en: "'the covenant he swore with an oath to our ancestor Abraham.'" } },
      { number: 74, text: { it: "di concederci che, liberati dalle mani dei nostri nemici, lo serviamo senza paura,", en: "'We have been rescued from our enemies so we can serve God without fear,'" } },
      { number: 75, text: { it: "in [[santità e giustizia|1:75]], davanti a lui, tutti i giorni della nostra vita.", en: "'in [[holiness and righteousness|1:75]] for as long as we live.'" } },
      { number: 76, text: { it: "E tu, bambino, sarai chiamato profeta dell’Altissimo, perché andrai davanti al Signore per preparare le sue vie,", en: "'And you, my little son, will be called the prophet of the Most High, because you will prepare the way for the Lord.'" } },
      { number: 77, text: { it: "per dare al suo popolo conoscenza della salvezza mediante il perdono dei loro peccati,", en: "'You will tell his people how to find salvation through forgiveness of their sins.'" } },
      { number: 78, text: { it: "grazie ai sentimenti di misericordia del nostro Dio; per i quali l’aurora dall’alto ci visiterà", en: "'Because of God’s tender mercy, the morning light from heaven is about to break upon us,'" } },
      { number: 79, text: { it: "per risplendere su quelli che giacciono in tenebre e in ombra di morte, per guidare i nostri passi verso la via della pace».", en: "'to give light to those who sit in darkness and in the shadow of death, and to guide us to the path of peace.'" } },
      { number: 80, text: { it: "E il bambino cresceva e si fortificava nello spirito; e stette nei deserti fino al giorno in cui doveva manifestarsi a Israele.", en: "John grew up and became strong in spirit. And he lived in the wilderness until he began his public ministry to Israel." } }
    ],
    location: { it: "Giuda (Ain Karem)", en: "Judean Hill Country" },
    coordinate: [31.7656, 35.1636],
    image: imgCantico,
    imagePrompt: "Vertical portrait format. An elderly father Zechariah joyously holding his newborn son John up to the heavens, singing ecclesial canticles, surrounded by amazed relatives in a rustic biblical room, in traditional watercolor painting style on textured paper, soft fluid pigments, delicate washes, cinematic lighting."
  },
  {
    id: 6,
    chapter: 2,
    isChapterStart: true,
    sectionTitle: {
      it: "La nascita di Gesù",
      en: "The Birth of Jesus"
    },
    verses: [
      { number: 1, text: { it: "In quei giorni un decreto di [[Cesare Augusto|censimento_augusto]] ordinò che si facesse il censimento di tutto l'impero.", en: "At that time the Roman emperor, [[Augustus|censimento_augusto]], decreed that a census should be taken throughout the Roman Empire." } },
      { number: 2, text: { it: "Questo primo censimento fu fatto quando Quirinio era governatore della Siria.", en: "(This was the first census taken when Quirinius was governor of Syria.)" } },
      { number: 3, text: { it: "E tutti andavano a farsi registrare, ciascuno nella sua città.", en: "All returned to their own ancestral towns to register for this census." } },
      { number: 4, text: { it: "Anche Giuseppe, che era della casa e della famiglia di Davide, dalla città di Nazaret e dalla Galilea salì in Giudea alla città di Davide, chiamata Betlemme,", en: "And because Joseph was a descendant of King David, he had to go to Bethlehem in Judea, David’s ancient home. He traveled there from the village of Nazareth in Galilee." } },
      { number: 5, text: { it: "per farsi registrare con Maria, sua sposa, che era incinta.", en: "He took with him Mary, to whom he was engaged, who was now expecting a child." } },
      { number: 6, text: { it: "Mentre erano là, si compì per lei il tempo del parto;", en: "And while they were there, the time came for her baby to be born." } },
      { number: 7, text: { it: "ed ella diede alla luce il suo figlio primogenito, lo fasciò e lo coricò [[in una mangiatoia|2:7]], perché non c’era posto per loro nell’albergo.", en: "She gave birth to her firstborn son. She wrapped him snugly in strips of cloth and laid him [[in a manger|2:7]], because there was no lodging available for them." } }
    ],
    location: { it: "Betlemme", en: "Bethlehem" },
    coordinate: [31.7054, 35.2024],
    image: imgNascita,
    imagePrompt: "Vertical portrait format. The glowing newborn baby Jesus wrapped in swaddling clothes laying in a rustic wooden manger. Mother Mary and Joseph look down with adoration in a dark stable, in traditional watercolor painting style on textured paper, soft fluid pigments, delicate washes, cinematic lighting."
  },
  {
    id: 7,
    chapter: 2,
    isChapterStart: false,
    sectionTitle: {
      it: "L'annuncio ai pastori",
      en: "The Shepherds and Angels"
    },
    verses: [
      { number: 8, text: { it: "In quella stessa regione c’erano dei pastori che stavano nei campi e di notte facevano la guardia al loro gregge.", en: "That night there were shepherds staying in the fields nearby, guarding their flocks of sheep." } },
      { number: 9, text: { it: "E un angelo del Signore si presentò a loro e la gloria del Signore risplendé intorno a loro, e furono presi da gran timore.", en: "Suddenly, an angel of the Lord appeared among them, and the radiance of the Lord’s glory surrounded them. They were terrified," } },
      { number: 10, text: { it: "L’angelo disse loro: «Non temete, perché io vi porto la buona notizia di una grande gioia che tutto il popolo avrà:", en: "but the angel reassured them. 'Don’t be afraid!' he said. 'I bring you good news that will bring great joy to all people.'" } },
      { number: 11, text: { it: "Oggi, nella città di Davide, è nato per voi un [[Salvatore, che è Cristo, il Signore|2:11]].", en: "'The [[Savior—yes, the Messiah, the Lord|2:11]]—has been born today in Bethlehem, the city of David!'" } },
      { number: 12, text: { it: "E questo vi servirà di segno: troverete un bambino avvolto in fasce e coricato in una mangiatoia».", en: "'And you will recognize him by this sign: You will find a baby wrapped snugly in strips of cloth, lying in a manger.'" } },
      { number: 13, text: { it: "E a un tratto vi fu con l’angelo una moltitudine dell’esercito celeste, che lodava Dio e diceva:", en: "Suddenly, the angel was joined by a vast host of others—the armies of heaven—praising God and saying," } },
      { number: 14, text: { it: "«Gloria a Dio nei luoghi altissimi, e pace in terra agli uomini ch’egli gradisce!»", en: "'Glory to God in highest heaven, and peace on earth to those with whom God is pleased.'" } },
      { number: 15, text: { it: "Quando gli angeli se ne furono andati verso il cielo, i pastori dicevano tra di loro: «Andiamo fino a Betlemme e vediamo ciò che è avvenuto e che il Signore ci ha fatto sapere».", en: "When the angels had returned to heaven, the shepherds said to each other, 'Let’s go to Bethlehem! Let’s see this thing that has happened, which the Lord has told us about.'" } },
      { number: 16, text: { it: "Andarono in fretta e trovarono Maria e Giuseppe, e il bambino che giaceva nella mangiatoia.", en: "They hurried to the village and found Mary and Joseph. And there was the baby, lying in the manger." } },
      { number: 17, text: { it: "E, vedutolo, [[divulgarono quello che era stato loro detto|2:17]] di questo bambino.", en: "After seeing him, the shepherds [[told everyone what had happened and what the angel had said|2:17]] to them about this child." } },
      { number: 18, text: { it: "E tutti quelli che li udirono si meravigliarono delle cose dette loro dai pastori.", en: "All who heard the shepherds’ story were astonished," } },
      { number: 19, text: { it: "Maria serbava in sé tutte queste cose, meditandole in cuor suo.", en: "but Mary kept all these things in her heart and thought about them often." } },
      { number: 20, text: { it: "E i pastori tornarono indietro, glorificando e lodando Dio per tutto quello che avevano udito e visto, com’era stato loro annunziato.", en: "The shepherds went back to their flocks, glorifying and praising God for all they had heard and seen. It was just as the angel had told them." } }
    ],
    location: { it: "Campagne di Betlemme", en: "Fields of Bethlehem" },
    coordinate: [31.7054, 35.2024],
    image: imgPastori,
    imagePrompt: "Vertical portrait format. Rugged biblical shepherds with their flock of sheep on a dark starry hillside, looking up in awe at a brilliant multitude of glowing heavenly angels in the night sky, in traditional watercolor painting style on textured paper, soft fluid pigments, delicate washes, cinematic lighting."
  },
  {
    id: 8,
    chapter: 2,
    isChapterStart: false,
    sectionTitle: {
      it: "Circoncisione e presentazione al tempio",
      en: "Jesus is Presented in the Temple"
    },
    verses: [
      { number: 21, text: { it: "Quando furono compiuti gli otto giorni per circonciderlo, gli fu messo il nome Gesù, che gli era stato dato dall'angelo prima che egli fosse concepito.", en: "Eight days later, when the baby was circumcised, he was named Jesus, the name given him by the angel even before he was conceived." } },
      { number: 22, text: { it: "Quando furono compiuti i giorni della loro purificazione secondo la legge di Mosè, portarono il bambino a Gerusalemme per [[presentarlo al Signore|2:22]],", en: "Then it was time for their purification offering, as required by the law of Moses after the birth of a child; so his parents took him to Jerusalem to [[present him to the Lord|2:22]]." } },
      { number: 23, text: { it: "come è scritto nella legge del Signore: «Ogni maschio primogenito sarà consacrato al Signore»;", en: "The law of the Lord says, 'If a woman’s first child is a boy, he must be dedicated to the LORD.'" } },
      { number: 24, text: { it: "e per fare il sacrificio conforme a quel che è detto nella legge del Signore: «[[Un paio di tortore o due giovani colombi|2:24]]».", en: "So they offered the sacrifice required in the law of the Lord—'[[either a pair of turtledoves or two young pigeons|2:24]]'." } },
      { number: 25, text: { it: "Vi era in Gerusalemme un uomo di nome Simeone; quest’uomo era [[giusto e pio|2:25a]], e [[aspettava la consolazione d’Israele|2:25b]]; lo Spirito Santo era sopra di lui;", en: "At that time there was a man in Jerusalem named Simeon. He was [[righteous and devout|2:25a]] and was [[eagerly waiting for the Messiah to come and rescue Israel|2:25b]]. The Holy Spirit was upon him" } },
      { number: 26, text: { it: "e gli era stato rivelato dallo Spirito Santo che non sarebbe morto prima di aver visto il Cristo del Signore.", en: "and had revealed to him that he would not die until he had seen the Lord’s Messiah." } },
      { number: 27, text: { it: "Egli, mosso dallo Spirito, andò nel tempio; e, come i genitori vi portavano il bambino Gesù per adempiere a suo riguardo le prescrizioni della legge,", en: "That day the Spirit led him to the Temple. So when Mary and Joseph came to present the baby Jesus to the Lord as the law required," } },
      { number: 28, text: { it: "lo prese in braccio, benedisse Dio e disse:", en: "Simeon was there. He took the child in his arms and praised God, saying," } },
      { number: 29, text: { it: "«Ora, o mio Signore, tu lasci andare in pace il tuo servo, secondo la tua parola;", en: "'Sovereign Lord, now let your servant die in peace, as you have promised.'" } },
      { number: 30, text: { it: "perché i miei occhi hanno visto la tua salvezza,", en: "'I have seen your salvation,'" } },
      { number: 31, text: { it: "che hai preparata dinanzi a tutti i popoli;", en: "'which you have prepared for all people.'" } },
      { number: 32, text: { it: "luce per illuminare le genti e gloria del tuo popolo Israele».", en: "'He is a light to reveal God to the nations, and he is the glory of your people Israel!'" } },
      { number: 33, text: { it: "Il padre e la madre di Gesù restavano meravigliati delle cose che si dicevano di lui.", en: "Jesus’ parents were amazed at what was being said about him." } },
      { number: 34, text: { it: "Simeone li benedisse e disse a Maria, madre di lui: «Ecco, costui è destinato a essere occasione di caduta e di rialzamento per molti in Israele, e segno di contraddizione", en: "Then Simeon blessed them, and he said to Mary, the baby’s mother, 'This child is destined to cause many in Israel to fall, and many others to rise. He has been sent as a sign from God, but many will oppose him.'" } },
      { number: 35, text: { it: "(e a te stessa [[una spada trafiggerà l’anima|2:35]]), affinché i pensieri di molti cuori siano svelati».", en: "'As a result, the deepest thoughts of many hearts will be revealed. And a [[sword will pierce your very soul|2:35]].'" } },
      { number: 36, text: { it: "Vi era anche [[Anna, profetessa|2:36]], figlia di Fanuel, della tribù di Aser. Era molto avanzata in età: dopo essere vissuta con il marito sette anni dalla sua raggazza,", en: "[[Anna, a prophet|2:36]], was also there in the Temple. She was the daughter of Phanuel from the tribe of Asher, and she was very old. Her husband died when they had been married only seven years," } },
      { number: 37, text: { it: "era rimasta vedova e aveva raggiunto gli ottantaquattro anni. Non si allontanava mai dal tempio e serviva Dio notte e giorno con digiuni e preghiere.", en: "then she lived as a widow to the age of eighty-four. She never left the Temple but stayed there day and night, worshiping God with fasting and prayer." } },
      { number: 38, text: { it: "Sopraggiunta in quella stessa ora, anche lei lodava Dio e parlava del bambino a tutti quelli che aspettavano la redenzione di Gerusalemme.", en: "She came along just as Simeon was talking with Mary and Joseph, and she began praising God. She talked about the child to everyone who had been waiting expectantly for God to rescue Jerusalem." } }
    ],
    location: { it: "Gerusalemme - Tempio", en: "Jerusalem - Temple" },
    coordinate: [31.7774, 35.2354],
    image: imgTempio,
    imagePrompt: "Vertical portrait format. The devout elderly prophet Simeon holding the glowing infant Jesus in the grand stone architecture of the Jerusalem Temple, with Mary and Joseph, in traditional watercolor painting style on textured paper, soft fluid pigments, delicate washes, cinematic lighting."
  },
  {
    id: 9,
    chapter: 2,
    isChapterStart: false,
    sectionTitle: {
      it: "Ritorno a Nazaret",
      en: "The Return to Nazareth"
    },
    verses: [
      { number: 39, text: { it: "Quando ebbero adempiuto a tutto ciò che richiedeva la legge del Signore, tornarono in Galilea, alla loro città di Nazaret.", en: "When Jesus’ parents had fulfilled all the requirements of the law of the Lord, they returned home to Nazareth in Galilee." } },
      { number: 40, text: { it: "E [[il bambino cresceva|2:40]] e si fortificava; era pieno di sapienza e la grazia di Dio era su di lui.", en: "There the [[child grew|2:40]] up healthy and strong. He was filled with wisdom, and God’s favor was on him." } }
    ],
    location: { it: "Nazaret", en: "Nazareth" },
    coordinate: [32.7019, 35.3033],
    image: imgNazaret,
    imagePrompt: "Vertical portrait format. A serene holy family, Mary, Joseph with a staff, and the growing boy Jesus, walking down a dusty ancient road towards a Galilean village in the golden hour, in traditional watercolor painting style on textured paper, soft fluid pigments, delicate washes, cinematic lighting."
  },
  {
    id: 10,
    chapter: 2,
    isChapterStart: false,
    sectionTitle: {
      it: "Gesù dodicenne al tempio",
      en: "Jesus Speaks with the Teachers"
    },
    verses: [
      { number: 41, text: { it: "I suoi genitori andavano ogni anno a Gerusalemme, per la festa della Pasqua.", en: "Every year Jesus’ parents went to Jerusalem for the Passover festival." } },
      { number: 42, text: { it: "Quando egli giunse ai dodici anni, salirono a Gerusalemme, secondo l’usanza della festa;", en: "When Jesus was twelve years old, they attended the festival as usual." } },
      { number: 43, text: { it: "passati i giorni della festa, mentre tornavano, il bambino Gesù rimase in Gerusalemme all’insaputa dei genitori;", en: "After the celebration was over, they started home to Nazareth, but Jesus stayed behind in Jerusalem. His parents didn’t miss him at first," } },
      { number: 44, text: { it: "i quali, pensando che egli fosse nella comitiva, camminarono una giornata, poi si misero a cercarlo tra i parenti e i conoscenti;", en: "because they assumed he was among the other travelers. But when he didn’t show up that evening, they started looking for him among their relatives and friends." } },
      { number: 45, text: { it: "e, non avendolo trovato, tornarono a Gerusalemme cercandolo.", en: "When they couldn’t find him, they went back to Jerusalem to search for him there." } },
      { number: 46, text: { it: "Tre giorni dopo lo trovarono nel tempio, seduto in mezzo ai maestri, mentre li ascoltava e faceva loro delle domande;", en: "Three days later they finally discovered him in the Temple, sitting among the religious teachers, listening to them and asking questions." } },
      { number: 47, text: { it: "e tutti quelli che l’udivano si stupivano della sua intelligenza e delle sue risposte.", en: "All who heard him were amazed at his understanding and his answers." } },
      { number: 48, text: { it: "Quando i suoi genitori lo videro, rimasero stupiti; e sua madre gli disse: «Figlio, perché ci hai fatto così? Ecco, tuo padre e io ti cercavamo e stavamo in grande ansia».", en: "His parents didn’t know what to think. 'Son,' his mother said to him, 'why have you done this to us? Your father and I have been frantic, searching for you everywhere.'" } },
      { number: 49, text: { it: "Ed egli disse loro: «Perché mi cercavate? Non sapevate che io [[dovevo trovarmi nella casa del Padre mio|2:49]]?»", en: "'But why did you need to search?' he asked. 'Didn’t you know that [[I must be in my Father’s house|2:49]]?'" } },
      { number: 50, text: { it: "Ma essi non capirono le parole che aveva detto loro.", en: "But they didn’t understand what he meant." } },
      { number: 51, text: { it: "Poi discese con loro, tornò a Nazaret e stava loro sottomesso. Sua madre serbava tutte queste cose nel suo cuore.", en: "Then he returned to Nazareth with them and was obedient to them. And his mother stored all these things in her heart." } },
      { number: 52, text: { it: "E [[Gesù cresceva in sapienza|2:52]], in statura e in grazia davanti a Dio e agli uomini.", en: "[[Jesus grew in wisdom|2:52]] and in stature and in favor with God and all the people." } }
    ],
    location: { it: "Gerusalemme - Tempio", en: "Jerusalem - Temple" },
    coordinate: [31.7774, 35.2354],
    image: imgGesuTempio,
    imagePrompt: "Vertical portrait format. The 12-year-old boy Jesus sitting calmly in the magnificent Jerusalem Temple, brightly illuminated, surrounded by elderly bearded Jewish scholars listening intently, in traditional watercolor painting style on textured paper, soft fluid pigments, delicate washes, cinematic lighting."
  }
];

export default nativityScenes;
