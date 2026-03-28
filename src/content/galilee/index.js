// Scene images
import imgCana from '../../assets/images/galilee/cana.png';
import imgCalling from '../../assets/images/galilee/calling.png';
import imgSermon from '../../assets/images/galilee/sermon.png';
import imgBeatitudes from '../../assets/images/galilee/beatitudes.png';
import imgHealings from '../../assets/images/galilee/healings.png';
import imgTwelve from '../../assets/images/galilee/twelve_apostles.png';
import imgParables from '../../assets/images/galilee/parables.png';
import imgStorm from '../../assets/images/galilee/storm.png';
import imgLeper from '../../assets/images/galilee/leper.png';
import imgCenturion from '../../assets/images/galilee/centurion.png';

// Parable sub-scene images
import imgSower from '../../assets/images/galilee/sower.png';
import imgWeeds from '../../assets/images/galilee/weeds.png';
import imgMustardSeed from '../../assets/images/galilee/mustard_seed.png';
import imgTreasurePearl from '../../assets/images/galilee/treasure_pearl.png';

// Sermon on the Mount sub-scene images
import imgSaltLight from '../../assets/images/galilee/salt_light.png';
import imgBirdsFlowers from '../../assets/images/galilee/birds_flowers.png';
import imgSpeckLog from '../../assets/images/galilee/speck_log.png';
import imgNarrowGate from '../../assets/images/galilee/narrow_gate.png';
import imgTreeFruits from '../../assets/images/galilee/tree_fruits.png';
import imgTwoBuilders from '../../assets/images/galilee/two_builders.png';

const galileeData = [
  {
    id: 'cana',
    sectionTitle: { it: "Le Nozze di Cana", en: "The Wedding at Cana" },
    description: { it: "Gesù trasforma l'acqua in vino, il suo primo miracolo.", en: "Jesus turns water into wine, his first miracle." },
    coordinate: [32.747, 35.331],
    zoom: 12,
    location: { it: "Cana di Galilea", en: "Cana of Galilee" },
    image: imgCana,
    sources: {
      john: {
        label: { it: "Giovanni", en: "John" },
        ref: "2:1-11",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "Tre giorni dopo, ci fu una festa nuziale in Cana di Galilea e c'era la madre di Gesù.", en: "On the third day a wedding took place at Cana in Galilee. Jesus' mother was there," } },
          { number: 2, text: { it: "Anche Gesù fu invitato alle nozze con i suoi discepoli.", en: "and Jesus and his disciples had also been invited to the wedding." } },
          { number: 3, text: { it: "Venuto a mancare il vino, la madre di Gesù gli disse: «Non hanno più vino».", en: "When the wine was gone, Jesus' mother said to him, 'They have no more wine.'" } },
          { number: 4, text: { it: "Gesù le rispose: «O donna, che c'è fra me e te? L'ora mia non è ancora venuta».", en: "'Woman, why do you involve me?' Jesus replied. 'My hour has not yet come.'" } },
          { number: 5, text: { it: "Sua madre disse ai servitori: «Fate tutto quel che vi dirà».", en: "His mother said to the servants, 'Do whatever he tells you.'" } },
          { number: 6, text: { it: "C'erano là sei recipienti di pietra, del tipo adoperato per la <InsightLink insightId='cana_sign'>purificazione</InsightLink> dei Giudei, i quali contenevano ciascuno due o tre misure.", en: "Nearby stood six stone water jars, the kind used by the Jews for ceremonial <InsightLink insightId='cana_sign'>washing</InsightLink>, each holding from twenty to thirty gallons." } },
          { number: 7, text: { it: "Gesù disse loro: «Riempite d'acqua i recipienti». Ed essi li riempirono fino all'orlo.", en: "Jesus said to the servants, 'Fill the jars with water'; so they filled them to the brim." } },
          { number: 8, text: { it: "Poi disse loro: «Attingetene ora e portatene al maestro di tavola». Ed essi gliene portarono.", en: "Then he told them, 'Now draw some out and take it to the master of the banquet.' They did so," } },
          { number: 9, text: { it: "Quando il maestro di tavola ebbe assaggiato l'acqua che era diventata vino (egli non ne conosceva la provenienza, ma la sapevano bene i servitori che avevano attinto l'acqua), chiamò lo sposo", en: "and the master of the banquet tasted the water that had been turned into wine. He did not realize where it had come from, though the servants who had drawn the water knew. Then he called the bridegroom aside" } },
          { number: 10, text: { it: "e gli disse: «Ognuno serve prima il vino buono; e quando si è bevuto abbondantemente, il meno buono; tu, invece, hai tenuto il vino buono fino ad ora».", en: "and said, 'Everyone brings out the choice wine first and then the cheaper wine after the guests have had too much to drink; but you have saved the best till now.'" } },
          { number: 11, text: { it: "Gesù fece questo primo dei suoi segni miracolosi in Cana di Galilea e manifestò la sua gloria; e i suoi discepoli credettero in lui.", en: "What Jesus did here in Cana of Galilee was the first of the signs through which he revealed his glory; and his disciples believed in him." } }
        ]
      }
    }
  },
  {
    id: 'calling',
    sectionTitle: { it: "La Chiamata dei Discepoli", en: "Calling the Disciples" },
    description: { it: "Gesù chiama Pietro, Andrea, Giacomo e Giovanni sul Mar di Galilea.", en: "Jesus calls Peter, Andrew, James, and John at the Sea of Galilee." },
    coordinate: [32.82, 35.58],
    zoom: 12,
    location: { it: "Mar di Galilea", en: "Sea of Galilee" },
    image: imgCalling,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "4:18-22",
        verses: [
          { number: 18, text: { it: "Mentre camminava lungo il mare della Galilea, Gesù vide due fratelli, Simone detto Pietro e Andrea, suo fratello, i quali gettavano la rete in mare, perché erano pescatori.", en: "One day as Jesus was walking along the shore of the Sea of Galilee, he saw two brothers—Simon, also called Peter, and Andrew—throwing a net into the water, for they fished for a living." } },
          { number: 19, text: { it: "E disse loro: «<InsightLink insightId='immediate_response'>Venite dietro a me</InsightLink> e vi farò pescatori di uomini».", en: "Jesus called out to them, “<InsightLink insightId='immediate_response'>Come, follow me</InsightLink>, and I will show you how to fish for people!”" } },
          { number: 20, text: { it: "Ed essi, lasciate subito le reti, lo seguirono.", en: "And they left their nets at once and followed him." } },
          { number: 21, text: { it: "Passato oltre, vide altri due fratelli, Giacomo di Zebedeo e Giovanni, suo fratello, i quali nella barca con Zebedeo, loro padre, rassettavano le loro reti; e li chiamò.", en: "A little farther up the shore he saw two other brothers, James and John, sitting in a boat with their father, Zebedee, repairing their nets. And he called them to come, too." } },
          { number: 22, text: { it: "Essi, lasciando subito la barca e il padre loro, lo seguirono.", en: "They immediately followed him, leaving the boat and their father behind." } }
        ]
      },
      luke: {
        label: { it: "Luca", en: "Luke" },
        ref: "5:1-11",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "Mentre la folla si accalcava intorno a lui per ascoltare la parola di Dio, Gesù si trovava sulla riva del lago di Gennesaret.", en: "One day as Jesus was preaching on the shore of the Sea of Galilee, great crowds pressed in on him to listen to the word of God." } },
          { number: 2, text: { it: "Vide due barche ormeggiate alla riva; i pescatori erano scesi e lavavano le reti.", en: "He noticed two empty boats at the water’s edge, for the fishermen had left them and were washing their nets." } },
          { number: 3, text: { it: "Salì su una di quelle barche, che era di Simone, e lo pregò di scostarsi un po' da terra; poi, sedutosi sulla barca, istruiva la folla.", en: "Stepping into one of the boats, Jesus asked Simon, its owner, to push it out a little from the shore. Then he sat down in the boat and taught the crowds from there." } },
          { number: 4, text: { it: "Quando ebbe finito di parlare, disse a Simone: «Prendi il largo, e calate le vostre reti per pescare».", en: "When he had finished speaking, he said to Simon, “Now go out where it is deeper, and let down your nets to catch some fish.”" } },
          { number: 5, text: { it: "Simone gli rispose: «Maestro, tutta la notte ci siamo affaticati e non abbiamo preso nulla; però, alla tua parola, calerò le reti».", en: "“Master,” Simon replied, “we worked hard all night and didn’t catch a thing. But if you say so, I’ll let the nets down again.”" } },
          { number: 6, text: { it: "E fatto così, presero una tal quantità di pesci che le reti si rompevano.", en: "And this time their nets were so full of fish they began to tear!" } },
          { number: 7, text: { it: "Allora fecero segno ai loro compagni dell'altra barca di venire ad aiutarli. Quelli vennero e riempirono tutte e due le barche, tanto che stavano per affondare.", en: "A shout for help brought their partners in the other boat, and soon both boats were filled with fish and on the verge of sinking." } },
          { number: 8, text: { it: "A tal vista, Simon Pietro si gettò ai ginocchi di Gesù, dicendo: «Signore, allontanati da me, perché sono un uomo peccatore».", en: "When Simon Peter realized what had happened, he fell to his knees before Jesus and said, “Oh, Lord, please leave me—I’m such a sinful man.”" } },
          { number: 9, text: { it: "Egli e tutti quelli che erano con lui erano stati presi da spavento per la quantità di pesci che avevano presi;", en: "For he was awestruck by the number of fish they had caught, as were the others with him." } },
          { number: 10, text: { it: "lo stesso accadde anche a Giacomo e a Giovanni, figli di Zebedeo, che erano soci di Simone. Allora Gesù disse a Simone: «Non temere; da ora in poi sarai pescatore di uomini».", en: "His partners, James and John, the sons of Zebedee, were also amazed. Jesus replied to Simon, “Don’t be afraid! From now on you’ll be fishing for people!”" } },
          { number: 11, text: { it: "Ed essi, tratte le barche a terra, lasciarono tutto e lo seguirono.", en: "And as soon as they landed, they left everything and followed Jesus." } }
        ]
      }
    }
  },
  {
    id: 'sermon_beatitudes',
    sectionTitle: { it: "Le Beatitudini", en: "The Beatitudes" },
    description: { it: "La vera felicità nel carattere del Regno di Dio.", en: "True blessedness in the character of the Kingdom of God." },
    coordinate: [32.880, 35.555],
    zoom: 13,
    location: { it: "Monte delle Beatitudini", en: "Mount of Beatitudes" },
    image: imgBeatitudes,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "5:1-12",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "Gesù, vedendo le folle, salì sul monte e, come si fu seduto, i suoi discepoli si accostarono a lui.", en: "One day as he saw the crowds gathering, Jesus went up on the mountainside and sat down. His disciples gathered around him," } },
          { number: 2, text: { it: "Ed egli, aperta la bocca, insegnava loro dicendo:", en: "and he began to teach them. He said:" } },
          { number: 3, text: { it: "«Beati i <InsightLink insightId='kingdom_character'>poveri in spirito</InsightLink>, perché di loro è il regno dei cieli.", en: "“God blesses those who are <InsightLink insightId='kingdom_character'>poor in spirit</InsightLink> and realize their need for him, for the Kingdom of Heaven is theirs." } },
          { number: 4, text: { it: "Beati quelli che sono afflitti, perché saranno consolati.", en: "God blesses those who mourn, for they will be comforted." } },
          { number: 5, text: { it: "Beati i mansueti, perché erediteranno la terra.", en: "God blesses those who are gentle, for they will inherit the whole earth." } },
          { number: 6, text: { it: "Beati quelli che sono affamati e assetati di giustizia, perché saranno saziati.", en: "God blesses those who hunger and thirst for justice, for they will be satisfied." } },
          { number: 7, text: { it: "Beati i misericordiosi, perché a loro sarà fatta misericordia.", en: "God blesses those who are merciful, for they will be shown mercy." } },
          { number: 8, text: { it: "Beati i <InsightLink insightId='new_birth'>puri di cuore</InsightLink>, perché vedranno Dio.", en: "God blesses those <InsightLink insightId='new_birth'>whose hearts are pure</InsightLink>, for they will see God." } },
          { number: 9, text: { it: "Beati quelli che si adoperano per la pace, perché saranno chiamati figli di Dio.", en: "God blesses those who work for peace, for they will be called the children of God." } },
          { number: 10, text: { it: "Beati i perseguitati per motivo di giustizia, perché di loro è il regno dei cieli.", en: "God blesses those who are persecuted for doing right, for the Kingdom of Heaven is theirs." } },
          { number: 11, text: { it: "Beati voi, quando vi oltraggeranno, vi perseguiteranno e, mentendo, diranno contro di voi ogni sorta di male per causa mia.", en: "“God blesses you when people mock you and persecute you and lie about you and say all sorts of evil things against you because you are my followers." } },
          { number: 12, text: { it: "Rallegratevi e giubilate, perché il vostro premio è grande nei cieli; poiché così hanno perseguitato i profeti che sono stati prima di voi.", en: "Be happy about it! Be very glad! For a great reward awaits you in heaven. And remember, the ancient prophets were persecuted in the same way." } }
        ]
      }
    }
  },
  {
    id: 'sermon_menu',
    type: 'menu',
    sectionTitle: { it: "Il Sermone sul Monte", en: "The Sermon on the Mount" },
    description: { it: "Gli insegnamenti centrali del ministero di Gesù: la legge dell'amore e il Regno.", en: "The central teachings of Jesus' ministry: the law of love and the Kingdom." },
    coordinate: [32.880, 35.555],
    zoom: 12,
    location: { it: "Monte delle Beatitudini", en: "Mount of Beatitudes" },
    image: imgSermon,
    subScenes: [
      { id: 'sermon_salt_light', image: imgSaltLight, title: { it: "Sale e Luce", en: "Salt and Light" } },
      { id: 'sermon_birds_flowers', image: imgBirdsFlowers, title: { it: "Uccelli e Gigli", en: "Birds and Flowers" } },
      { id: 'sermon_speck_log', image: imgSpeckLog, title: { it: "Pagliuzza e Trave", en: "Speck and Log" } },
      { id: 'sermon_narrow_gate', image: imgNarrowGate, title: { it: "Porta Stretta", en: "The Narrow Gate" } },
      { id: 'sermon_tree_fruits', image: imgTreeFruits, title: { it: "L'Albero e i Frutti", en: "The Tree and Fruit" } },
      { id: 'sermon_two_builders', image: imgTwoBuilders, title: { it: "I Due Costruttori", en: "The Two Builders" } }
    ]
  },
  {
    id: 'sermon_salt_light',
    isSubScene: true,
    sectionTitle: { it: "Sale della Terra e Luce del Mondo", en: "Salt and Light" },
    description: { it: "L'influenza trasformativa dei discepoli nella società.", en: "The transformative influence of disciples in society." },
    coordinate: [32.880, 35.555],
    zoom: 13,
    location: { it: "Monte delle Beatitudini", en: "Mount of Beatitudes" },
    image: imgSaltLight,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "5:13-16",
        verses: [
          { number: 13, text: { it: "«Voi siete il sale della terra; ma, se il sale diventa insipido, con che lo si salerà? Non è più buono a nulla se non a essere gettato via e calpestato dagli uomini.", en: "'You are the salt of the earth. But if the salt loses its saltiness, how can it be made salty again? It is no longer good for anything, except to be thrown out and trampled underfoot.'" } },
          { number: 14, text: { it: "Voi siete la luce del mondo; una città posta sopra un monte non può essere nascosta.", en: "'You are the light of the world. A town built on a hill cannot be hidden.'" } },
          { number: 15, text: { it: "E non si accende una lampada per metterla sotto il moggio; anzi la si mette sul candeliere ed essa fa luce a tutti quelli che sono in casa.", en: "Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it gives light to everyone in the house.'" } },
          { number: 16, text: { it: "Così risplenda la vostra luce davanti agli uomini, affinché vedano le vostre buone opere e glorifichino il Padre vostro che è nei cieli.»", en: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.'" } }
        ]
      }
    }
  },
  {
    id: 'sermon_birds_flowers',
    isSubScene: true,
    sectionTitle: { it: "Uccelli del Cielo e Gigli del Campo", en: "Birds and Flowers" },
    description: { it: "Un invito alla fiducia totale nella provvidenza del Padre.", en: "An invitation to total trust in the Father's providence." },
    coordinate: [32.880, 35.555],
    zoom: 13,
    location: { it: "Monte delle Beatitudini", en: "Mount of Beatitudes" },
    image: imgBirdsFlowers,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "6:24-34",
        verses: [
          { number: 24, text: { it: "«Nessuno può servire due padroni; perché o odierà l'uno e amerà l'altro, o si affezionerà all'uno e disprezzerà l'altro. Voi non potete servire Dio e <span className='glossary-item'>Mammona</span>.", en: "“No one can serve two masters. For you will hate one and love the other; you will be devoted to one and despise the other. You cannot serve God and <span className='glossary-item'>be enslaved to money</span>.”" } },
          { number: 25, text: { it: "Perciò vi dico: <InsightLink insightId='kingdom_first'>non siate in ansia</InsightLink> per la vostra vita, di che cosa mangerete o di che cosa berrete; né per il vostro corpo, di che cosa vi vestirete. Non è la vita più del nutrimento e il corpo più del vestito?", en: "“That is why I tell you not to worry about everyday life—whether you have enough food and drink, or enough clothes to wear. Isn’t life more than food, and your body more than clothing?”" } },
          { number: 26, text: { it: "Guardate gli uccelli del cielo: non seminano, non mietono, non raccolgono in granai, e il Padre vostro celeste li nutre. Non valete voi molto più di loro?", en: "Look at the birds. They don’t plant or harvest or store food in barns, for your heavenly Father feeds them. And aren’t you far more valuable to him than they are?" } },
          { number: 27, text: { it: "E chi di voi può, con la sua preoccupazione, aggiungere un'ora sola alla durata della sua vita?", en: "Can all your worries add a single moment to your life?" } },
          { number: 28, text: { it: "E perché siete in ansia per il vestito? Osservate come crescono i gigli della campagna: essi non faticano e non filano;", en: "And why worry about your clothing? Look at the lilies of the field and how they grow. They don’t work or make their clothing," } },
          { number: 29, text: { it: "eppure io vi dico che neppure Salomone, con tutta la sua gloria, fu vestito come uno di loro.", en: "yet Solomon in all his glory was not dressed as beautifully as they are." } },
          { number: 30, text: { it: "Ora se Dio veste così l'erba della campagna che oggi c'è e domani viene gettata nel forno, non vestirà egli molto meglio voi, o gente di poca fede?", en: "And if God cares so wonderfully for wildflowers that are here today and thrown into the fire tomorrow, he will certainly care for you. Why do you have so little faith?" } },
          { number: 31, text: { it: "Non siate dunque in ansia, dicendo: “Che mangeremo? Che berremo? Di che ci vestiremo?”", en: "“So don’t worry about these things, saying, ‘What will we eat? What will we drink? What will we wear?’" } },
          { number: 32, text: { it: "Perché sono i pagani che ricercano tutte queste cose; ma il Padre vostro celeste sa che avete bisogno di tutte queste cose.", en: "These things dominate the thoughts of unbelievers, but your heavenly Father already knows all your needs." } },
          { number: 33, text: { it: "Cercate prima il regno di Dio e la sua giustizia, e tutte queste cose vi saranno date in aggiunta.", en: "Seek the Kingdom of God above all else, and live righteously, and he will give you everything you need." } },
          { number: 34, text: { it: "Non siate dunque in ansia per il domani, perché il domani si preoccuperà di se stesso. Basta a ciascun giorno il suo affanno.»", en: "“So don’t worry about tomorrow, for tomorrow will bring its own worries. Today’s trouble is enough for today.”" } }
        ]
      }
    }
  },
  {
    id: 'sermon_speck_log',
    isSubScene: true,
    sectionTitle: { it: "La Pagliuzza e la Trave", en: "The Speck and the Log" },
    description: { it: "L'ipocrisia del giudizio e la necessità dell'auto-esame.", en: "The hypocrisy of judgment and the necessity of self-examination." },
    coordinate: [32.880, 35.555],
    zoom: 13,
    location: { it: "Monte delle Beatitudini", en: "Mount of Beatitudes" },
    image: imgSpeckLog,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "7:1-5",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "«Non giudicate, affintentché non siate giudicati;", en: "'Do not judge, or you too will be judged.'" } },
          { number: 2, text: { it: "perché con il giudizio con cui giudicate, sarete giudicati; e con la misura con cui misurate, sarà misurato a voi.", en: "For in the same way you judge others, you will be judged, and with the measure you use, it will be measured to you.'" } },
          { number: 3, text: { it: "Perché guardi la pagliuzza che è nell'occhio di tuo fratello, mentre non scorgi la trave che è nell'occhio tuo?", en: "Why do you look at the speck of sawdust in your brother's eye and pay no attention to the plank in your own eye?'" } },
          { number: 4, text: { it: "O come potrai dire a tuo fratello: 'Lascia che ti tolga dall'occhio la pagliuzza', mentre ecco la trave è nell'occhio tuo?", en: "How can you say to your brother, 'Let me take the speck out of your eye,' when all the time there is a plank in your own eye?'" } },
          { number: 5, text: { it: "Ipocrita, togli prima dal tuo occhio la trave, e allora ci vedrai bene per togliere la pagliuzza dall'occhio di tuo fratello.»", en: "You hypocrite, first take the plank out of your own eye, and then you will see clearly to remove the speck from your brother's eye.'" } }
        ]
      }
    }
  },
  {
    id: 'sermon_narrow_gate',
    isSubScene: true,
    sectionTitle: { it: "La Porta Stretta", en: "The Narrow Gate" },
    description: { it: "La scelta radicale tra la via facile e la via della vita.", en: "The radical choice between the easy way and the way of life." },
    coordinate: [32.880, 35.555],
    zoom: 13,
    location: { it: "Monte delle Beatitudini", en: "Mount of Beatitudes" },
    image: imgNarrowGate,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "7:13-14",
        verses: [
          { number: 13, text: { it: "«Entrate per la <InsightLink insightId='narrow_gate_choice'>porta stretta</InsightLink>, poiché larga è la porta e spaziosa la via che conduce alla perdizione, e molti sono quelli che entrano per essa.", en: "“You can enter God’s Kingdom only through the <InsightLink insightId='narrow_gate_choice'>narrow gate</InsightLink>. The highway to hell is broad, and its gate is wide for the many who choose that way." } },
          { number: 14, text: { it: "Stretta invece è la porta e angusta la via che conduce alla vita, e pochi sono quelli che la trovano.»", en: "But the gateway to life is very narrow and the road is difficult, and only a few ever find it.”" } }
        ]
      }
    }
  },
  {
    id: 'sermon_tree_fruits',
    isSubScene: true,
    sectionTitle: { it: "L'Albero e i Frutti", en: "The Tree and Fruits" },
    description: { it: "Riconoscere l'autenticità spirituale attraverso i frutti della vita.", en: "Recognizing spiritual authenticity through the fruits of life." },
    coordinate: [32.880, 35.555],
    zoom: 13,
    location: { it: "Monte delle Beatitudini", en: "Mount of Beatitudes" },
    image: imgTreeFruits,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "7:15-20",
        verses: [
          { number: 15, text: { it: "«Guardatevi dai falsi profeti i quali vengono a voi in vesti da pecore, ma dentro sono lupi rapaci.", en: "'Watch out for false prophets. They come to you in sheep's clothing, but inwardly they are ferocious wolves.'" } },
          { number: 16, text: { it: "Voi li riconoscerete dai loro frutti. Si raccoglie uva dalle spine, o fichi dai rovi?", en: "By their fruit you will recognize them. Do people pick grapes from thornbushes, or figs from thistles?'" } },
          { number: 17, text: { it: "Così, ogni albero buono fa frutti buoni; ma l'albero cattivo fa frutti cattivi.", en: "Likewise, every good tree bears good fruit, but a bad tree bears bad fruit.'" } },
          { number: 18, text: { it: "Un albero buono non può fare frutti cattivi, né un albero cattivo fare frutti buoni.", en: "A good tree cannot bear bad fruit, and a bad tree cannot bear good fruit.'" } },
          { number: 20, text: { it: "Li riconoscerete dunque dai loro frutti.»", en: "Thus, by their fruit you will recognize them.'" } }
        ]
      }
    }
  },
  {
    id: 'sermon_two_builders',
    isSubScene: true,
    sectionTitle: { it: "I Due Costruttori", en: "The Two Builders" },
    description: { it: "Le fondamenta della vita: mettere in pratica la parola di Dio.", en: "The foundations of life: putting God's word into practice." },
    coordinate: [32.880, 35.555],
    zoom: 13,
    location: { it: "Monte delle Beatitudini", en: "Mount of Beatitudes" },
    image: imgTwoBuilders,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "7:24-27",
        verses: [
          { number: 24, text: { it: "«Perciò chiunque ascolta queste mie parole e le mette in pratica sarà paragonato a un uomo avveduto che ha costruito la sua casa sopra la <InsightLink insightId='foundation_rock'>roccia</InsightLink>.", en: "“Anyone who listens to my teaching and follows it is wise, like a person who builds a house on solid <InsightLink insightId='foundation_rock'>rock</InsightLink>." } },
          { number: 25, text: { it: "La pioggia è caduta, sono venuti i torrenti, i venti hanno soffiato e hanno investito quella casa; ma essa non è caduta, perché era fondata sulla roccia.", en: "Though the rain comes in torrents and the floodwaters rise and the winds beat against that house, it won’t collapse because it is built on bedrock." } },
          { number: 26, text: { it: "E chiunque ascolta queste mie parole e non le mette in pratica sarà paragonato a un uomo stolto che ha costruito la sua casa sulla sabbia.", en: "But anyone who hears my teaching and doesn’t obey it is foolish, like a person who builds a house on sand." } },
          { number: 27, text: { it: "La pioggia è caduta, sono venuti i torrenti, i venti hanno soffiato e hanno fatto impeto contro quella casa, ed essa è caduta e la sua rovina è stata grande».", en: "When the rains and floods come and the winds beat against that house, it will collapse with a mighty crash.”" } }
        ]
      }
    }
  },
  {
    id: 'leper',
    sectionTitle: { it: "Il Lebbroso", en: "The Man with Leprosy" },
    description: { it: "Gesù tocca un lebbroso, sfidando lo stigma sociale per portargli guarigione.", en: "Jesus touches a leper, defying social stigma to bring him healing." },
    coordinate: [32.880, 35.555],
    zoom: 13,
    location: { it: "Galilea", en: "Galilee" },
    image: imgLeper,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "8:1-4",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "Quando egli scese dal monte, una gran folla lo seguì.", en: "Large crowds followed Jesus as he came down the mountainside." } },
          { number: 2, text: { it: "Ed ecco un <span className='glossary-item'>lebbroso</span>, avvicinatosi, gli si prostrò davanti, dicendo: «Signore, se vuoi, tu puoi purificarmi».", en: "Suddenly, a man with <span className='glossary-item'>leprosy</span> approached him and knelt before him. “Lord,” the man said, “if you are willing, you can heal me and make me clean.”" } },
          { number: 3, text: { it: "<InsightLink insightId='leper_stigma'>Gesù, tesa la mano, lo toccò</InsightLink> dicendo: «Lo voglio, sii purificato». E in quell’istante egli fu purificato dalla lebbra.", en: "<InsightLink insightId='leper_stigma'>Jesus reached out and touched him</InsightLink>. “I am willing,” he said. “Be healed!” And instantly the leprosy disappeared." } },
          { number: 4, text: { it: "Gesù gli disse: «Guarda di non dirlo a nessuno, ma va’, mostrati al sacerdote e fa’ l’offerta che Mosè ha prescritto, e ciò serva loro di testimonianza».", en: "Then Jesus said to him, “Don’t tell anyone about this. Instead, go to the priest and let him examine you. Take along the offering required in the law of Moses... This will be a public testimony.”" } }
        ]
      }
    }
  },
  {
    id: 'centurion',
    sectionTitle: { it: "La Fede del Centurione", en: "The Centurion's Faith" },
    description: { it: "Gesù ammira la fede di un ufficiale romano che riconosce la Sua autorità assoluta.", en: "Jesus admires the faith of a Roman officer who recognizes His absolute authority." },
    coordinate: [32.881, 35.575],
    zoom: 13,
    location: { it: "Cafarnao", en: "Capernaum" },
    image: imgCenturion,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "8:5-13",
        verses: [
          { number: 5, isChapterStart: true, text: { it: "Quando Gesù fu entrato in <span className='glossary-item'>Capernaum</span>, un <span className='glossary-item'>centurione</span> gli venne incontro, pregandolo e dicendo:", en: "When Jesus returned to <span className='glossary-item'>Capernaum</span>, a <span className='glossary-item'>Roman officer</span> came and pleaded with him," } },
          { number: 6, text: { it: "«Signore, il mio servo giace in casa paralizzato e soffre terribilmente».", en: "“Lord, my young servant lies in bed, paralyzed and in terrible pain.”" } },
          { number: 7, text: { it: "Gesù gli disse: «Io verrò e lo guarirò».", en: "Jesus said, “I will come and heal him.”" } },
          { number: 8, text: { it: "Ma il <span className='glossary-item'>centurione</span> rispose: «Signore, io non sono degno che tu entri sotto il mio tetto, ma <InsightLink insightId='centurion_faith'>di’ soltanto una parola e il mio servo sarà guarito</InsightLink>.", en: "But the officer said, “Lord, I am not worthy to have you come into my home. <InsightLink insightId='centurion_faith'>Just say the word from where you are, and my servant will be healed</InsightLink>.”" } },
          { number: 9, text: { it: "Perché anch’io sono uomo sottoposto all’autorità e ho sotto di me dei soldati; e dico a uno: “Va’”, ed egli va; e a un altro: “Vieni”, ed egli viene; e al mio servo: “Fa’ questo”, ed egli lo fa».", en: "“I know this because I am under the authority of my superior officers, and I have authority over my soldiers. I only need to say, ‘Go,’ and they go, or ‘Come,’ and they come. And if I say to my slaves, ‘Do this,’ they do it.”" } },
          { number: 10, text: { it: "Gesù, udito questo, ne restò ammirato e disse a quelli che lo seguivano: «Io vi dico in verità che in nessuno, in Israele, ho trovato una fede così grande.", en: "When Jesus heard this, he was amazed. Turning to those who were following him, he said, “I tell you the truth, I haven’t seen faith like this in all Israel!”" } },
          { number: 11, text: { it: "E io vi dico che molti verranno da oriente e da occidente e sederanno a tavola con Abraamo, Isacco e Giacobbe nel regno dei cieli;", en: "“And I tell you this, that many Gentiles will come from all over the world—from east and west—and sit down with Abraham, Isaac, and Jacob at the feast in the Kingdom of Heaven.”" } },
          { number: 12, text: { it: "ma i figli del regno saranno gettati nelle tenebre di fuori. Là sarà il pianto e lo stridore dei denti».", en: "“But many Israelites—those for whom the Kingdom was prepared—will be thrown into outer darkness, where there will be weeping and gnashing of teeth.”" } },
          { number: 13, text: { it: "Gesù disse al <span className='glossary-item'>centurione</span>: «Va’ e ti sia fatto come hai creduto». E il servitore fu guarito in quella stessa ora.", en: "Then Jesus said to the Roman officer, “Go back home. Because you believed, it has happened.” And the young servant was healed that same hour." } }
        ]
      },
      luke: {
        label: { it: "Luca", en: "Luke" },
        ref: "7:1-10",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "Quando egli ebbe finito di pronunciare tutti questi discorsi in udienza del popolo, entrò in <span className='glossary-item'>Capernaum</span>.", en: "When Jesus had finished saying all this to the people, he returned to <span className='glossary-item'>Capernaum</span>." } },
          { number: 2, text: { it: "Il servo di un <span className='glossary-item'>centurione</span>, che questi aveva molto caro, era malato e stava per morire.", en: "At that time the highly valued slave of a Roman officer was sick and near death." } },
          { number: 3, text: { it: "Il <span className='glossary-item'>centurione</span>, avendo udito parlare di Gesù, gli mandò degli anziani dei Giudei per pregarlo che venisse a salvare il suo servo.", en: "When the officer heard about Jesus, he sent some respected Jewish elders to ask him to come and heal his slave." } },
          { number: 4, text: { it: "Essi si presentarono a Gesù e lo pregarono con insistenza, dicendo: «Egli merita che tu gli faccia questo;", en: "So they earnestly begged Jesus to help the man. “If anyone deserves your help, it’s him,” they said," } },
          { number: 5, text: { it: "perché ama la nostra nazione ed è lui che ci ha costruito la <span className='glossary-item'>sinagoga</span>».", en: "“for he loves the Jewish people and even built a <span className='glossary-item'>synagogue</span> for us at his own expense.”" } },
          { number: 6, text: { it: "Gesù s’incamminò con loro; ma ormai non era più molto lontano dalla casa, quando il centurione mandò degli amici a dirgli: «Signore, non darti fastidio, perché io non sono degno che tu entri sotto il mio tetto;", en: "So Jesus went with them. But just before they arrived at the house, the officer sent some friends to say, “Lord, don’t trouble yourself by coming to my home, for I am not worthy of such an honor.”" } },
          { number: 7, text: { it: "perciò non mi sono neppure ritenuto degno di venire da te; ma di’ una parola e il mio servo sarà guarito.", en: "“I am not even worthy to come and meet you. Just say the word from where you are, and my servant will be healed.”" } },
          { number: 8, text: { it: "Perché anch’io sono uomo sottoposto all’autorità altrui e ho sotto di me dei soldati; e dico a uno: “Va’”, ed egli va; e a un altro: “Vieni”, ed egli viene; e al mio servo: “Fa’ questo”, ed egli lo fa».", en: "“I know this because I am under the authority of my superior officers, and I have authority over my soldiers. I only need to say, ‘Go,’ and they go, or ‘Come,’ and they come. And if I say to my slaves, ‘Do this,’ they do it.”" } },
          { number: 9, text: { it: "Udito questo, Gesù restò ammirato di lui; e, rivoltosi alla folla che lo seguiva, disse: «Io vi dico che neppure in Israele ho trovato una fede così grande!»", en: "When Jesus heard this, he was amazed. Turning to the crowd, he said, “I tell you, I haven’t seen faith like this in all Israel!”" } },
          { number: 10, text: { it: "E quando i messi furono tornati a casa, trovarono il servo guarito.", en: "And when the officer’s friends returned to his house, they found the slave completely healed." } }
        ]
      }
    }
  },
  {
    id: 'healings',
    sectionTitle: { it: "Il Paralitico", en: "The Paralyzed Man" },
    description: { it: "Gesù guarisce un paralitico calato dal tetto e perdona i suoi peccati, dimostrando la Sua divinità.", en: "Jesus heals a paralyzed man lowered from a roof and forgives his sins, demonstrating His divinity." },
    coordinate: [32.881, 35.575],
    zoom: 13,
    location: { it: "Cafarnao", en: "Capernaum" },
    image: imgHealings,
    sources: {
      mark: {
        label: { it: "Marco", en: "Mark" },
        ref: "2:1-12",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "Gesù entrò di nuovo in <span className='glossary-item'>Capernaum</span> dopo alcuni giorni. Si seppe che era in casa", en: "When Jesus returned to <span className='glossary-item'>Capernaum</span> several days later, the news spread quickly that he was back home." } },
          { number: 2, text: { it: "e si radunò tanta gente che non c'era più posto neppure davanti alla porta. Egli annunziava loro la Parola.", en: "Soon the house where he was staying was so packed with visitors that there was no more room, even outside the door. While he was preaching God’s word to them," } },
          { number: 3, text: { it: "Allora vennero a lui alcuni con un paralitico portato da quattro uomini.", en: "four men arrived carrying a paralyzed man on a mat." } },
          { number: 4, text: { it: "Non potendo farlo giungere fino a lui a causa della folla, scoperchiarono il tetto dalla parte dove si trovava Gesù e, fatta un'apertura, calarono il lettuccio sul quale giaceva il paralitico.", en: "They couldn't bring him to Jesus because of the crowd, so they dug a hole through the roof above his head. Then they lowered the man on his mat, right down in front of Jesus." } },
          { number: 5, text: { it: "Gesù, veduta la loro fede, disse al paralitico: «Figliolo, <InsightLink insightId='authority_forgive'>i tuoi peccati ti sono perdonati</InsightLink>».", en: "Seeing their faith, Jesus said to the paralyzed man, “My child, <InsightLink insightId='authority_forgive'>your sins are forgiven</InsightLink>.”" } },
          { number: 6, text: { it: "C'erano là seduti alcuni <span className='glossary-item'>scribi</span> che ragionavano così in cuor loro:", en: "But some of the <span className='glossary-item'>teachers of religious law</span> who were sitting there thought to themselves," } },
          { number: 7, text: { it: "«Perché costui parla in questo modo? Egli bestemmia! Chi può perdonare i peccati, se non un solo, cioè Dio?»", en: "“What is he saying? This is blasphemy! Who but God can forgive sins?”" } },
          { number: 8, text: { it: "Ma Gesù, conosciuto subito nello spirito che ragionavano così dentro di loro, disse: «Perché fate questi ragionamenti nei vostri cuori?", en: "Jesus knew immediately what they were thinking, so he asked them, “Why do you question this in your hearts?" } },
          { number: 9, text: { it: "Che cosa è più facile, dire al paralitico: “I tuoi peccati ti sono perdonati”, oppure dirgli: “Àlzati, prendi il tuo lettuccio e cammina”?", en: "Is it easier to say to the paralyzed man ‘Your sins are forgiven,’ or ‘Stand up, pick up your mat, and walk’?" } },
          { number: 10, text: { it: "Ma, affinché sappiate che il Figlio dell’uomo ha sulla terra autorità di perdonare i peccati,", en: "So I will prove to you that the Son of Man has the authority on earth to forgive sins.”" } },
          { number: 11, text: { it: "io ti dico (disse al paralitico): “Àlzati, prendi il tuo lettuccio e va’ a casa tua!”».", en: "Then Jesus turned to the paralyzed man and said, “I tell you, stand up, pick up your mat, and go home!”" } },
          { number: 12, text: { it: "Ed egli si alzò e, preso subito il lettuccio, uscì in presenza di tutti; sicché tutti si stupivano e glorificavano Dio, dicendo: «Non abbiamo mai visto nulla di simile».", en: "And the man jumped up, grabbed his mat, and walked out through the stunned onlookers. They were all amazed and praised God, exclaiming, “We’ve never seen anything like this before!”" } }
        ]
      },
      luke: {
        label: { it: "Luca", en: "Luke" },
        ref: "5:17-26",
        verses: [
          { number: 17, isChapterStart: true, text: { it: "Un giorno egli stava insegnando; c’erano là seduti dei <span className='glossary-item'>farisei</span> e dei dottori della legge, venuti da tutti i villaggi della Galilea, della Giudea e da Gerusalemme; e la potenza del Signore gli dava di compiere guarigioni.", en: "One day while Jesus was teaching, some <span className='glossary-item'>Pharisees</span> and <span className='glossary-item'>teachers of religious law</span> were sitting nearby. (It seemed that these men showed up from every village in all Galilee and Judea, as well as from Jerusalem.) And the Lord’s healing power was strongly with Jesus." } },
          { number: 18, text: { it: "Ed ecco degli uomini che portavano sopra un letto un uomo paralizzato, e cercavano di farlo entrare e di metterlo davanti a lui.", en: "Some men came carrying a paralyzed man on a sleeping mat. They tried to take him inside to Jesus," } },
          { number: 19, text: { it: "Non trovando il modo di introdurlo a causa della folla, salirono sul tetto e, attraverso le tegole, lo calarono col suo lettuccio in mezzo alla gente davanti a Gesù.", en: "but they couldn’t reach him because of the crowd. So they went up to the roof and took off some tiles. Then they lowered the sick man on his mat into the middle of the crowd, right in front of Jesus." } },
          { number: 20, text: { it: "Egli, veduta la loro fede, disse: «Uomo, <InsightLink insightId='authority_forgive'>i tuoi peccati ti sono perdonati</InsightLink>».", en: "Seeing their faith, Jesus said to the man, “Young man, <InsightLink insightId='authority_forgive'>your sins are forgiven</InsightLink>.”" } },
          { number: 21, text: { it: "Allora gli <span className='glossary-item'>scribi</span> e i farisei cominciarono a ragionare, dicendo: «Chi è costui che pronuncia bestemmie? Chi può perdonare i peccati se non Dio solo?»", en: "“Who does this man think he is?” the <span className='glossary-item'>Pharisees</span> and <span className='glossary-item'>teachers of religious law</span> said to each other. “It’s blasphemy! Only God can forgive sins!”" } },
          { number: 22, text: { it: "Ma Gesù, conosciuti i loro pensieri, rispose: «Che cosa ragionate nei vostri cuori?", en: "Jesus knew what they were thinking, so he asked them, “Why do you question this in your hearts?" } },
          { number: 23, text: { it: "Che cos’è più facile, dire: “I tuoi peccati ti sono perdonati”, oppure dire: “Àlzati e cammina”?", en: "Is it easier to say ‘Your sins are forgiven,’ or ‘Stand up and walk’?" } },
          { number: 24, text: { it: "Ma, affinché sappiate che il Figlio dell’uomo ha sulla terra autorità di perdonare i peccati: Io ti dico (disse al paralitico), àlzati, prendi il tuo lettuccio e va’ a casa tua».", en: "So I will prove to you that the Son of Man has the authority on earth to forgive sins.” Then Jesus turned to the paralyzed man and said, “I tell you, stand up, pick up your mat, and go home!”" } },
          { number: 25, text: { it: "E subito, alzatosi in loro presenza, egli prese il suo lettuccio e se ne andò a casa sua, glorificando Dio.", en: "And immediately, as everyone watched, the man jumped up, picked up his mat, and went home praising God." } },
          { number: 26, text: { it: "E tutti furono presi da stupore e glorificavano Dio; e, pieni di spavento, dicevano: «Oggi abbiamo visto cose straordinarie».", en: "Amazement seized everyone, and they praised God and were filled with holy fear, saying, “We have seen amazing things today!”" } }
        ]
      },
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "9:1-8",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "Gesù, salito su una barca, passò all’altra riva e venne nella sua città.", en: "Jesus climbed into a boat and went back across the lake to his own town." } },
          { number: 2, text: { it: "Ed ecco gli fu presentato un paralitico disteso sopra un letto. Gesù, veduta la loro fede, disse al paralitico: «Figliolo, fatti animo, i tuoi peccati ti sono perdonati».", en: "Some people brought to him a paralyzed man on a mat. Seeing their faith, Jesus said to the paralyzed man, “Be encouraged, my child! Your sins are forgiven.”" } },
          { number: 3, text: { it: "Allora alcuni <span className='glossary-item'>scribi</span> dissero fra sé: «Costui bestemmia».", en: "But some of the <span className='glossary-item'>teachers of religious law</span> said to themselves, “That’s blasphemy! Does he think he’s God?”" } },
          { number: 4, text: { it: "Ma Gesù, conosciuti i loro pensieri, disse: «Perché pensate cose malvage nei vostri cuori?", en: "Jesus knew what they were thinking, so he asked them, “Why do you have such evil thoughts in your hearts?" } },
          { number: 5, text: { it: "Infatti, che cos’è più facile, dire: “I tuoi peccati ti sono perdonati”, oppure dire: “Alzati e cammina”?", en: "Is it easier to say ‘Your sins are forgiven,’ or ‘Stand up and walk’?" } },
          { number: 6, text: { it: "Ma, affinché sappiate che il Figlio dell’uomo ha sulla terra autorità di perdonare i peccati: <InsightLink insightId='authority_forgive'>Alzati (disse allora al paralitico), prendi il tuo letto e va’ a casa tua</InsightLink>».", en: "So I will prove to you that the Son of Man has the authority on earth to forgive sins.” <InsightLink insightId='authority_forgive'>Then Jesus turned to the paralyzed man and said, “Stand up, pick up your mat, and go home!”</InsightLink>" } },
          { number: 7, text: { it: "Ed egli si alzò e se ne andò a casa sua.", en: "And the man jumped up and went home!" } },
          { number: 8, text: { it: "La folla, veduto questo, fu presa da timore e glorificò Dio, che aveva dato tale autorità agli uomini.", en: "Fear swept through the crowd as they saw this happen. And they praised God for sending a man with such great authority." } }
        ]
      }
    }
  },
  {
    id: 'twelve_apostles',
    sectionTitle: { it: "I Dodici Apostoli", en: "The Twelve Apostles" },
    description: { it: "Gesù sceglie i dodici apostoli per inviarli a predicare e guarire.", en: "Jesus chooses the twelve apostles to send them out to preach and heal." },
    coordinate: [32.881, 35.575],
    zoom: 13,
    location: { it: "Monte delle Beatitudini", en: "Mount of Beatitudes" },
    image: imgTwelve,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "10:1-4",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "Gesù, chiamati a sé i suoi dodici discepoli, diede loro potere di scacciare gli spiriti immondi e di guarire qualunque malattia e qualunque infermità.", en: "Jesus called his twelve disciples together and gave them authority to cast out evil spirits and to heal every kind of disease and illness." } },
          { number: 2, text: { it: "I nomi dei dodici apostoli sono questi: il primo, Simone detto Pietro, e Andrea suo fratello; Giacomo di Zebedeo e Giovanni suo fratello;", en: "Here are the names of the twelve apostles: first, Simon (also called Peter), then Andrew (Peter’s brother), James (son of Zebedee), John (James’s brother)," } },
          { number: 3, text: { it: "Filippo e Bartolomeo; Tommaso e Matteo il <span className='glossary-item'>pubblicano</span>; Giacomo di Alfeo e Taddeo;", en: "Philip, Bartholomew, Thomas, Matthew (the <span className='glossary-item'>tax collector</span>), James (son of Alphaeus), Thaddaeus," } },
          { number: 4, text: { it: "Simone il Cananeo e Giuda Iscariota, quello stesso che poi lo tradì.", en: "Simon (the zealot), and Judas Iscariot (who later betrayed him)." } }
        ]
      }
    }
  },
  {
    id: 'parables_kingdom',
    type: 'menu',
    sectionTitle: { it: "Le Parabole del Regno", en: "Parables of the Kingdom" },
    description: { it: "Gesù usa illustrazioni della vita quotidiana per spiegare i misteri del Regno di Dio.", en: "Jesus uses illustrations from daily life to explain the mysteries of God's Kingdom." },
    coordinate: [32.82, 35.58],
    zoom: 12,
    location: { it: "Mar di Galilea", en: "Sea of Galilee" },
    image: imgParables,
    subScenes: [
      { id: 'parable_sower', image: imgSower, title: { it: "Il Seminatore", en: "The Sower" } },
      { id: 'parable_weeds', image: imgWeeds, title: { it: "La Zizzania", en: "The Weeds" } },
      { id: 'parable_mustard_leaven', image: imgMustardSeed, title: { it: "Senape e Lievito", en: "Mustard and Leaven" } },
      { id: 'parable_treasure_pearl', image: imgTreasurePearl, title: { it: "Tesoro e Perla", en: "Treasure and Pearl" } }
    ]
  },
  {
    id: 'parable_sower',
    isSubScene: true,
    sectionTitle: { it: "La Parabola del Seminatore", en: "The Parable of the Sower" },
    description: { it: "Quattro tipi di terreno rappresentano la risposta del cuore umano alla Parola di Dio.", en: "Four types of soil representing the response of the human heart to the Word of God." },
    coordinate: [32.82, 35.58],
    zoom: 13,
    location: { it: "Mar di Galilea", en: "Sea of Galilee" },
    image: imgSower,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "13:1-23",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "Quel giorno Gesù, uscito di casa, si sedette presso il mare;", en: "Later that same day Jesus left the house and sat beside the lake." } },
          { number: 2, text: { it: "una gran folla si radunò intorno a lui; così egli, salito su una barca, vi sedette; e tutta la folla stava sulla riva.", en: "A large crowd soon gathered around him, so he got into a boat. Then he sat there and taught as the people stood on the shore." } },
          { number: 3, text: { it: "Egli espose loro molte cose in parabole, dicendo: «Il seminatore uscì a seminare.", en: "He told many stories in the form of parables, such as this one: “Listen! A farmer went out to plant some seeds.”" } },
          { number: 4, text: { it: "Mentre seminava, una parte del seme cadde lungo la strada; gli uccelli vennero e la mangiarono.", en: "“As he scattered them across his field, some seeds fell on a footpath, and the birds came and ate them.”" } },
          { number: 5, text: { it: "Un’altra cadde in luoghi rocciosi dove non aveva molta terra; e subito germogliò, perché non aveva terreno profondo;", en: "“Other seeds fell on shallow soil with underlying rock. The seeds sprouted quickly because the soil was shallow.”" } },
          { number: 6, text: { it: "ma, levatosi il sole, fu bruciata; e, non avendo radice, inaridì.", en: "“But the plants soon wilted under the hot sun, and since they didn’t have deep roots, they died.”" } },
          { number: 7, text: { it: "Un’altra cadde tra le spine; e le spine crebbero e la soffocarono.", en: "“Other seeds fell among thorns that grew up and choked out the tender plants.”" } },
          { number: 8, text: { it: "Un’altra cadde nella buona terra e portò frutto, dando il cento, il sessanta, il trenta per uno.", en: "“Still other seeds fell on fertile soil, and they produced a crop that was thirty, sixty, and even a hundred times as much as had been planted!”" } },
          { number: 9, text: { it: "Chi ha orecchi [per udire] oda».", en: "“Anyone with ears to hear should listen and understand.”" } },
          { number: 18, text: { it: "«<InsightLink insightId='sower_soils'>Voi dunque ascoltate la parabola del seminatore</InsightLink>.", en: "“<InsightLink insightId='sower_soils'>Now listen to the explanation of the parable about the farmer scattering seeds</InsightLink>.”" } },
          { number: 19, text: { it: "Ogni volta che uno ode la parola del regno e non la comprende, viene il maligno e porta via quel che è stato seminato nel suo cuore: questi è colui che ha ricevuto il seme lungo la strada.", en: "“The seed that fell on the footpath represents those who hear the message about the Kingdom and don’t understand it. Then the evil one comes and snatches away the seed that was planted in their hearts.”" } },
          { number: 20, text: { it: "Quello che ha ricevuto il seme in luoghi rocciosi è colui che ode la parola e subito la riceve con gioia;", en: "“The seed on the rocky soil represents those who hear the message and immediately receive it with joy.”" } },
          { number: 21, text: { it: "però non ha radice in sé ed è di corta durata; e quando giunge la tribolazione o la persecuzione a motivo della parola, è subito scavallato.", en: "“But since they don’t have deep roots, they don’t last long. They fall away as soon as they have problems or are persecuted for believing God’s word.”" } },
          { number: 22, text: { it: "Quello che ha ricevuto il seme tra le spine è colui che ode la parola, poi gli affanni del mondo e l’inganno delle ricchezze soffocano la parola, che rimane infruttuosa.", en: "“The seed that fell among the thorns represents those who hear God’s word, but all too quickly the message is choked out by the worries of this life and the lure of wealth, so no fruit is produced.”" } },
          { number: 23, text: { it: "Ma quello che ha ricevuto il seme in buona terra è colui che ode la parola e la comprende; egli porta del frutto e dà, l’uno il cento, l’altro il sessanta e l’altro il trenta».", en: "“The seed that fell on good soil represents those who truly hear and understand God’s word and produce a harvest of thirty, sixty, or even a hundred times as much as had been planted!”" } }
        ]
      }
    }
  },
  {
    id: 'parable_weeds',
    isSubScene: true,
    sectionTitle: { it: "La Parabola della Zizzania", en: "The Parable of the Weeds" },
    description: { it: "Il conflitto tra il buon seme del Regno e le contraffazioni del nemico fino al giudizio finale.", en: "The conflict between the good seed of the Kingdom and the enemy's counterfeits until the final judgment." },
    coordinate: [32.82, 35.58],
    zoom: 13,
    location: { it: "Mar di Galilea", en: "Sea of Galilee" },
    image: imgWeeds,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "13:24-30, 36-43",
        verses: [
          { number: 24, isChapterStart: true, text: { it: "Egli propose loro un’altra parabola, dicendo: «Il regno dei cieli è simile a un uomo che aveva seminato buon seme nel suo campo.", en: "Here is another story Jesus told: “The Kingdom of Heaven is like a farmer who planted good seed in his field.”" } },
          { number: 25, text: { it: "Ma mentre gli uomini dormivano, venne il suo nemico e seminò della zizzania in mezzo al frumento e se ne andò.", en: "“But that night as the workers slept, his enemy came and planted weeds among the wheat, then slipped away.”" } },
          { number: 26, text: { it: "Quando l’erba germogliò ed ebbe fatto frutto, allora apparve anche la zizzania.", en: "“When the crop began to grow and produce grain, the weeds also grew.”" } },
          { number: 27, text: { it: "E i servi del padrone di casa vennero a dirgli: “Signore, non avevi seminato buon seme nel tuo campo? Come mai, dunque, c’è della zizzania?”", en: "“The farmer’s workers went to him and said, ‘Sir, the field where you planted that good seed is full of weeds! Where did they come from?’”" } },
          { number: 28, text: { it: "Egli disse loro: “Un nemico ha fatto questo”. I servi gli dissero: “Vuoi che andiamo a coglierla?”", en: "“‘An enemy has done this!’ the farmer exclaimed. ‘Should we pull out the weeds?’ they asked.”" } },
          { number: 29, text: { it: "Ma egli rispose: “No, affinché, cogliendo la zizzania, non sradichiate insieme ad essa il frumento.", en: "“‘No,’ he replied, ‘you’ll uproot the wheat if you do.’”" } },
          { number: 30, text: { it: "Lasciate che tutti e due crescano insieme fino alla mietitura; e al tempo della mietitura dirò ai mietitori: <InsightLink insightId='final_judgment'>«Raccogliete prima la zizzania e legatela in fasci per bruciarla; ma il frumento riponetelo nel mio granaio»</InsightLink>».", en: "“Let both grow together until the harvest. Then I will tell the harvesters to <InsightLink insightId='final_judgment'>sort out the weeds and burn them, but to put the wheat in the barn</InsightLink>.”" } },
          { number: 36, text: { it: "Allora Gesù, lasciate le folle, tornò a casa; e i suoi discepoli si avvicinarono a lui, dicendo: «Spiegaci la parabola della zizzania nel campo».", en: "Then, leaving the crowds, Jesus went into the house. His disciples said, “Please explain to us the story of the weeds in the field.”" } },
          { number: 37, text: { it: "Egli rispose loro: «Colui che semina il buon seme è il Figlio dell’uomo;", en: "Jesus replied, “The Son of Man is the farmer who plants the good seed.”" } },
          { number: 38, text: { it: "il campo è il mondo; il buon seme sono i figli del regno; la zizzania sono i figli del maligno;", en: "“The field is the world, and the good seed represents the people of the Kingdom. The weeds are the people who belong to the evil one.”" } },
          { number: 39, text: { it: "il nemico che l’ha seminata è il diavolo; la mietitura è la fine del mondo; i mietitori sono angeli.", en: "“The enemy who planted the weeds among the wheat is the devil. The harvest is the end of the world, and the harvesters are the angels.”" } }
        ]
      }
    }
  },
  {
    id: 'parable_mustard_leaven',
    isSubScene: true,
    sectionTitle: { it: "Il Granello di Senape e il Lievito", en: "Mustard Seed and Leaven" },
    description: { it: "La crescita invisibile ma inarrestabile del Regno di Dio.", en: "The invisible but unstoppable growth of God's Kingdom." },
    coordinate: [32.82, 35.58],
    zoom: 13,
    location: { it: "Mar di Galilea", en: "Sea of Galilee" },
    image: imgMustardSeed,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "13:31-35",
        verses: [
          { number: 31, isChapterStart: true, text: { it: "<InsightLink insightId='mustard_leaven_growth'>Egli propose loro un’altra parabola, dicendo: «Il regno dei cieli è simile a un granello di senape che un uomo prende e semina nel suo campo</InsightLink>.", en: "<InsightLink insightId='mustard_leaven_growth'>Here is another illustration Jesus used: “The Kingdom of Heaven is like a mustard seed planted in a field</InsightLink>.”" } },
          { number: 32, text: { it: "Esso è il più piccolo di tutti i semi; ma, quando è cresciuto, è maggiore degli ortaggi e diventa un albero; tanto che gli uccelli del cielo vengono a ripararsi tra i suoi rami».", en: "“It is the smallest of all seeds, but it becomes the largest of garden plants; it grows into a tree, and birds come and make nests in its branches.”" } },
          { number: 33, text: { it: "Disse loro un’altra parabola: «Il regno dei cieli è simile al lievito che una donna prende e nasconde in tre misure di farina, finché la pasta sia tutta lievitata».", en: "Jesus also used this illustration: “The Kingdom of Heaven is like the yeast a woman used in making bread. Even though she used a large amount of flour, the yeast permeated every part of the dough.”" } },
          { number: 34, text: { it: "Tutte queste cose disse Gesù in parabole alle folle e non parlava loro senza parabole,", en: "Jesus always used stories and illustrations like these when speaking to the crowds. In fact, he never spoke to them without using such parables." } },
          { number: 35, text: { it: "affinché si adempisse quel che era stato detto per mezzo del profeta: «Aprirò in parabole la mia bocca; proclamerò cose nascoste fin dalla fondazione del mondo».", en: "This fulfilled what God had spoken through the prophet: “I will speak to you in parables. I will explain things hidden since the creation of the world.”" } }
        ]
      }
    }
  },
  {
    id: 'parable_treasure_pearl',
    isSubScene: true,
    sectionTitle: { it: "Il Tesoro e la Perla", en: "Hidden Treasure and Pearl" },
    description: { it: "L'inestimabile valore del Regno che merita ogni sacrificio per essere posseduto.", en: "The priceless value of the Kingdom worth any sacrifice to be possessed." },
    coordinate: [32.82, 35.58],
    zoom: 13,
    location: { it: "Mar di Galilea", en: "Sea of Galilee" },
    image: imgTreasurePearl,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "13:44-46",
        verses: [
          { number: 44, isChapterStart: true, text: { it: "<InsightLink insightId='treasure_pearl_value'>«Il regno dei cieli è simile a un tesoro nascosto nel campo, che un uomo, dopo averlo trovato, nasconde; e per la gioia che ne ha, va, vende tutto quello che ha e compra quel campo</InsightLink>.", en: "<InsightLink insightId='treasure_pearl_value'>“The Kingdom of Heaven is like a treasure that a man discovered hidden in a field. In his excitement, he hid it again and sold everything he owned to get enough money to buy the field</InsightLink>.”" } },
          { number: 45, text: { it: "Il regno dei cieli è anche simile a un mercante che va in cerca di belle perle;", en: "“Again, the Kingdom of Heaven is like a merchant on the lookout for choice pearls.”" } },
          { number: 46, text: { it: "e, trovata una perla di gran valore, va, vende tutto quello che ha e la compra».", en: "“When he discovered a pearl of great value, he sold everything he owned and bought it!”" } }
        ]
      }
    }
  },
  {
    id: 'storm',
    sectionTitle: { it: "Gesù calma la tempesta", en: "Jesus Calms the Storm" },
    description: { it: "Gesù dimostra autorità assoluta sugli elementi naturali nel Mar di Galilea, sfidando la paura dei discepoli.", en: "Jesus demonstrates absolute authority over the natural elements in the Sea of Galilee, challenging the disciples' fear." },
    coordinate: [32.82, 35.58],
    zoom: 12,
    location: { it: "Mar di Galilea", en: "Sea of Galilee" },
    image: imgStorm,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "8:23-27",
        verses: [
          { number: 23, isChapterStart: true, text: { it: "Gesù salì sulla barca e i suoi discepoli lo seguirono.", en: "Then Jesus got into the boat and started across the lake with his disciples." } },
          { number: 24, text: { it: "Ed ecco si sollevò in mare una gran burrasca, tanto che la barca era coperta dalle onde; ma egli dormiva.", en: "Suddenly, a fierce storm struck the lake, with waves breaking into the boat. But Jesus was sleeping." } },
          { number: 25, text: { it: "I suoi discepoli, avvicinatisi, lo svegliarono dicendo: «Signore, salvaci, siamo perduti!»", en: "The disciples went and woke him up, shouting, “Lord, save us! We’re going to drown!”" } },
          { number: 26, text: { it: "Ed egli disse loro: «Perché avete paura, o gente di poca fede?» <InsightLink insightId='faith_vs_fear'>Allora, alzatosi, sgridò i venti e il mare, e si fece gran bonaccia</InsightLink>.", en: "Jesus responded, “Why are you afraid? You have so little faith!” <InsightLink insightId='faith_vs_fear'>Then he got up and rebuked the wind and waves, and suddenly there was a great calm</InsightLink>." } },
          { number: 27, text: { it: "E quegli uomini ne restarono stupiti e dicevano: «Che uomo è mai questo, che anche i venti e il mare gli ubbidiscono?»", en: "The disciples were amazed. “Who is this man?” they asked. “Even the winds and waves obey him!”" } }
        ]
      },
      mark: {
        label: { it: "Marco", en: "Mark" },
        ref: "4:35-41",
        verses: [
          { number: 35, isChapterStart: true, text: { it: "In quello stesso giorno, alla sera, Gesù disse loro: «Passiamo all’altra riva».", en: "As evening came, Jesus said to his disciples, “Let’s cross to the other side of the lake.”" } },
          { number: 36, text: { it: "I discepoli, congedata la folla, lo presero con sé, così com’era, nella barca. C’erano delle altre barche con lui.", en: "So they took Jesus in the boat and started out, leaving the crowds behind (although other boats followed)." } },
          { number: 37, text: { it: "Ed ecco levarsi una gran burrasca di vento, che gettava le onde nella barca, tanto che questa già si riempiva.", en: "But soon a fierce storm arose. High waves were breaking into the boat, and it began to fill with water." } },
          { number: 38, text: { it: "Egli stava a poppa, sul guanciale, e dormiva. Essi lo svegliarono e gli dissero: «Maestro, non t’importa che noi moriamo?»", en: "Jesus was sleeping at the back of the boat with his head on a cushion. The disciples woke him up, shouting, “Teacher, don’t you care that we’re going to drown?”" } },
          { number: 39, text: { it: "Egli, svegliatosi, sgridò il vento e disse al mare: «Taci, càlmati!» Il vento cessò e si fece gran bonaccia.", en: "When Jesus woke up, he rebuked the wind and said to the waves, “Silence! Be still!” Suddenly the wind stopped, and there was a great calm." } },
          { number: 40, text: { it: "Poi disse loro: «Perché avete così paura? Non avete ancora fede?»", en: "Then he asked them, “Why are you afraid? Do you still have no faith?”" } },
          { number: 41, text: { it: "Ed essi furono presi da gran timore e si dicevano gli uni gli altri: «Chi è dunque costui, al quale persino il vento e il mare ubbidiscono?»", en: "The disciples were absolutely terrified. “Who is this man?” they asked each other. “Even the wind and waves obey him!”" } }
        ]
      },
      luke: {
        label: { it: "Luca", en: "Luke" },
        ref: "8:22-25",
        verses: [
          { number: 22, isChapterStart: true, text: { it: "Un giorno egli salì su una barca con i suoi discepoli e disse loro: «Passiamo all’altra riva del lago». E presero il largo.", en: "One day Jesus said to his disciples, “Let’s go over to the other side of the lake.” So they got into a boat and set out." } },
          { number: 23, text: { it: "Mentre navigavano, egli si addormentò; e si abbatté sul lago un turbine di vento, tanto che la barca si riempiva d’acqua ed essi erano in pericolo.", en: "As they sailed across, Jesus settled down for a nap. But soon a fierce storm swept down on the lake. The boat was filling with water, and they were in real danger." } },
          { number: 24, text: { it: "Essi, avvicinatisi, lo svegliarono, dicendo: «Maestro, Maestro, noi periamo!» Ma egli, destatosi, sgridò il vento e i flutti del mare, che si calmarono, e si fece bonaccia.", en: "The disciples went and woke him up, shouting, “Master, Master, we’re going to drown!” When Jesus woke up, he rebuked the wind and the surging waves. The storm stopped and all was calm!" } },
          { number: 25, text: { it: "Poi disse loro: «Dov’è la vostra fede?» Ma essi, impauriti e meravigliati, dicevano l’un l’altro: «Chi è dunque costui che comanda anche ai venti e all’acqua, e gli ubbidiscono?»", en: "Then he asked them, “Where is your faith?” And they were filled with awe and amazement. “Who is this man?” they asked each other. “When he gives a command, even the wind and waves obey him!”" } }
        ]
      }
    }
  }
];

export default galileeData;
