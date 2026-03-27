import imgCana from '../../assets/images/galilee_cana.png';
import imgCalling from '../../assets/images/galilee_calling.png';
import imgSermon from '../../assets/images/galilee_sermon.png';
import imgBeatitudes from '../../assets/images/galilee_beatitudes.png';
import imgHealings from '../../assets/images/galilee_healings.png';
import imgTwelve from '../../assets/images/galilee_twelve.png';
import imgParables from '../../assets/images/galilee_parables.png';
import imgStorm from '../../assets/images/galilee_storm.png';

// Importazioni immagini parabole sermone
import imgSaltLight from '../../assets/images/sermon_salt_light.png';
import imgBirdsFlowers from '../../assets/images/sermon_birds_flowers.png';
import imgSpeckLog from '../../assets/images/sermon_speck_log.png';
import imgNarrowGate from '../../assets/images/sermon_narrow_gate.png';
import imgTreeFruits from '../../assets/images/sermon_tree_fruits.png';
import imgTwoBuilders from '../../assets/images/sermon_two_builders.png';

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
          { number: 1, isChapterStart: true, text: { it: "Il terzo giorno ci fu una festa nuziale in Cana di Galilea, e c'era la madre di Gesù.", en: "On the third day a wedding took place at Cana in Galilee. Jesus' mother was there," } },
          { number: 2, text: { it: "E Gesù pure fu invitato con i suoi discepoli alle nozze.", en: "and Jesus and his disciples had also been invited to the wedding." } },
          { number: 3, text: { it: "Venuto a mancare il vino, la madre di Gesù gli disse: «Non hanno più vino».", en: "When the wine was gone, Jesus' mother said to him, 'They have no more wine.'" } },
          { number: 4, text: { it: "Gesù le disse: «Che c'è fra me e te, o donna? L'ora mia non è ancora venuta».", en: "'Woman, why do you involve me?' Jesus replied. 'My hour has not yet come.'" } },
          { number: 5, text: { it: "Sua madre disse ai servitori: «Fate tutto quello che vi dirà».", en: "His mother said to the servants, 'Do whatever he tells you.'" } },
          { number: 6, text: { it: "C'erano là sei recipienti di pietra, del tipo adoperato per la [[purificazione|cana_sign]] dei [[Giudei|jews]], i quali contenevano ciascuno due o tre misure.", en: "Nearby stood six stone water jars, the kind used by the [[Jews|jews]] for ceremonial [[washing|cana_sign]], each holding from twenty to thirty gallons." } },
          { number: 7, text: { it: "Gesù disse loro: «Riempite d'acqua i recipienti». Ed essi li riempirono fino all'orlo.", en: "Jesus said to the servants, 'Fill the jars with water'; so they filled them to the brim." } },
          { number: 8, text: { it: "Poi disse loro: «Attingetene ora, e portatene al maestro di tavola». Ed essi gliene portarono.", en: "Then he told them, 'Now draw some out and take it to the master of the banquet.' They did so," } },
          { number: 9, text: { it: "Quando il maestro di tavola ebbe assaggiato l'acqua che era diventata vino (egli non ne conosceva la provenienza, ma la sapevano bene i servitori che avevano attinto l'acqua), chiamò lo sposo e gli disse:", en: "and the master of the banquet tasted the water that had been turned into wine. He did not realize where it had come from, though the servants who had drawn the water knew. Then he called the bridegroom aside" } },
          { number: 10, text: { it: "«Ognuno serve prima il vino buono; e quando si è bevuto abbondantemente, il meno buono; tu, invece, hai tenuto il vino buono fino ad ora».", en: "and said, 'Everyone brings out the choice wine first and then the cheaper wine after the guests have had too much to drink; but you have saved the best till now.'" } },
          { number: 11, text: { it: "Gesù fece questo primo dei suoi segni miracolosi in Cana di Galilea, e manifestò la sua gloria; e i suoi discepoli credettero in lui.", en: "What Jesus did here in Cana of Galilee was the first of the signs through which he revealed his glory; and his disciples believed in him." } }
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
          { number: 18, text: { it: "Mentre camminava lungo il mare di Galilea, Gesù vide due fratelli, Simone detto Pietro, e Andrea suo fratello, i quali gettavano la rete in mare, perché erano pescatori.", en: "As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother Andrew. They were casting a net into the lake, for they were fishermen." } },
          { number: 19, text: { it: "E disse loro: «[[Venite dietro a me|immediate_response]], e vi farò pescatori di uomini».", en: "'[[Come, follow me|immediate_response]],' Jesus said, 'and I will send you out to fish for people.'" } },
          { number: 20, text: { it: "Ed essi, lasciate subito le reti, lo seguirono.", en: "At once they left their nets and followed him." } },
          { number: 21, text: { it: "Andando oltre, vide altri due fratelli, Giacomo di Zebedeo e Giovanni suo fratello, i quali nella barca, con Zebedeo loro padre, assettavano le reti; e li chiamò.", en: "Going on from there, he saw two other brothers, James son of Zebedee and his brother John. They were in a boat with their father Zebedee, preparing their nets. Jesus called them," } },
          { number: 22, text: { it: "Essi, lasciata subito la barca e il padre, lo seguirono.", en: "and immediately they left the boat and their father and followed him." } }
        ]
      },
      luke: {
        label: { it: "Luca", en: "Luke" },
        ref: "5:1-11",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "Mentre la folla faceva ressa intorno a lui per ascoltare la [[Parola|theWord]] di Dio, egli si trovava sulla riva del lago di Gennesaret.", en: "One day as Jesus was standing by the Lake of Gennesaret, the people were crowding around him and listening to the [[word|theWord]] of God." } },
          { number: 4, text: { it: "Com'ebbe terminato di parlare, disse a Simone: «Prendi il largo, e gettate le reti per pescare».", en: "When he had finished speaking, he said to Simon, 'Put out into deep water, and let down the nets for a catch.'" } },
          { number: 5, text: { it: "Simone rispose: «Maestro, tutta la notte ci siamo affaticati, e non abbiamo preso nulla; però, alla tua parola, getterò le reti».", en: "Simon answered, 'Master, we've worked hard all night and haven't caught anything. But because you say so, I will let down the nets.'" } },
          { number: 6, text: { it: "E, fatto così, presero una tal quantità di pesci, che le reti si rompevano.", en: "When they had done so, they caught such a large number of fish that their nets began to break." } },
          { number: 8, text: { it: "Simon Pietro, veduto ciò, si gettò ai ginocchi di Gesù, dicendo: «Signore, allontanati da me, perché sono un uomo peccatore».", en: "When Simon Peter saw this, he fell at Jesus' knees and said, 'Go away from me, Lord; I am a sinful man!'" } },
          { number: 10, text: { it: "Gesù disse a Simone: «Non temere; d'ora in poi sarai pescatore di uomini».", en: "Then Jesus said to Simon, 'Don't be afraid; from now on you will fish for people.'" } },
          { number: 11, text: { it: "Essi, tratte le barche a terra, [[lasciarono ogni cosa|immediate_response]] e lo seguirono.", en: "So they pulled their boats up on shore, [[left everything|immediate_response]] and followed him." } }
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
          { number: 1, isChapterStart: true, text: { it: "Gesù, vedendo le folle, salì sul monte e si mise a sedere. I suoi discepoli si accostarono a lui", en: "Now when Jesus saw the crowds, he went up on a mountainside and sat down. His disciples came to him," } },
          { number: 2, text: { it: "ed egli, aperta la bocca, insegnava loro dicendo:", en: "and he began to teach them. He said:" } },
          { number: 3, text: { it: "«Beati i [[poveri in spirito|kingdom_character]], perché di loro è il regno dei cieli.", en: "'Blessed are the [[poor in spirit|kingdom_character]], for theirs is the kingdom of heaven." } },
          { number: 4, text: { it: "Beati quelli che sono afflitti, perché saranno consolati.", en: "Blessed are those who mourn, for they will be comforted." } },
          { number: 5, text: { it: "Beati i mansueti, perché erediteranno la terra.", en: "Blessed are the meek, for they will inherit the earth." } },
          { number: 6, text: { it: "Beati quelli che sono affamati e assetati di giustizia, perché saranno saziati.", en: "Blessed are those who hunger and thirst for righteousness, for they will be filled." } },
          { number: 7, text: { it: "Beati i misericordiosi, perché a loro misericordia sarà fatta.", en: "Blessed are the merciful, for they will be shown mercy." } },
          { number: 8, text: { it: "Beati i puri di cuore, perché vedranno Dio.", en: "Blessed are the pure in heart, for they will see God." } },
          { number: 9, text: { it: "Beati quelli che si adoperano per la pace, perché saranno chiamati figli di Dio.", en: "Blessed are the peacemakers, for they will be called children of God." } },
          { number: 10, text: { it: "Beati i perseguitati per motivo di giustizia, perché di loro è il regno dei cieli.", en: "Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven." } },
          { number: 11, text: { it: "Beati voi, quando vi insulteranno e vi perseguiteranno e, mentendo, diranno contro di voi ogni sorta di male per causa mia.", en: "Blessed are you when people insult you, persecute you and falsely say all kinds of evil against you because of me." } },
          { number: 12, text: { it: "Rallegratevi e giubilate, perché il vostro premio è grande nei cieli; poiché così hanno perseguitato i profeti che sono stati prima di voi.»", en: "Rejoice and be glad, because great is your reward in heaven, for in the same way they persecuted the prophets who were before you.'" } }
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
        ref: "6:25-34",
        verses: [
          { number: 25, text: { it: "«Perciò vi dico: non siate in ansia per la vostra vita... Non è la vita più del nutrimento e il corpo più del vestito?", en: "Therefore I tell you, do not worry about your life... Is not life more than food, and the body more than clothes?'" } },
          { number: 26, text: { it: "Guardate gli uccelli del cielo: non seminano, non mietono, non raccolgono in granai; e il Padre vostro celeste li nutre. Non valete voi molto più di loro?", en: "Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?'" } },
          { number: 28, text: { it: "E perché siete in ansia per il vestito? Osservate come crescono i gigli della campagna: essi non faticano e non filano;", en: "And why do you worry about clothes? See how the flowers of the field grow. They do not labor or spin.'" } },
          { number: 29, text: { it: "eppure io vi dico che neppure Salomone, con tutta la sua gloria, fu vestito come uno di loro.", en: "Yet I tell you that not even Solomon in all his splendor was dressed like one of these.'" } },
          { number: 33, text: { it: "Cercate prima il [[regno di Dio|kingdom_first]] e la sua giustizia, e tutte queste cose vi saranno date in più.", en: "But seek first [[his kingdom|kingdom_first]] and his righteousness, and all these things will be given to you as well.'" } },
          { number: 34, text: { it: "Non siate dunque in ansia per il domani, perché il domani si preoccuperà di se stesso. Basta a ciascun giorno il suo affanno.»", en: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.'" } }
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
          { number: 1, isChapterStart: true, text: { it: "«Non giudicate, affinché non siate giudicati;", en: "'Do not judge, or you too will be judged.'" } },
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
          { number: 13, text: { it: "«Entrate per la porta stretta, poiché larga è la porta e spaziosa la via che conduce alla perdizione, e molti sono quelli che entrano per essa.", en: "'Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it.'" } },
          { number: 14, text: { it: "Stretta invece è la porta e angusta la via che conduce alla vita, e pochi sono quelli che la trovano.»", en: "But small is the gate and narrow the road that leads to life, and only a few find it.'" } }
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
          { number: 24, text: { it: "«Perciò chiunque ascolta queste mie parole e le mette in pratica sarà paragonato a un uomo avveduto che ha costruito la sua casa sopra la roccia.", en: "'Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock.'" } },
          { number: 25, text: { it: "La pioggia è caduta, sono venuti i torrenti, i venti hanno soffiato e hanno investito quella casa; ma essa non è caduta, perché era fondata sulla roccia.", en: "The rain came down, the streams rose, and the winds blew and beat against that house; yet it did not fall, because it had its foundation on the rock.'" } },
          { number: 26, text: { it: "E chiunque ascolta queste mie parole e non le mette in pratica sarà paragonato a un uomo stolto che ha costruito la sua casa sulla sabbia.", en: "But everyone who hears these words of mine and does not put them into practice is like a foolish man who built his house on sand.'" } },
          { number: 27, text: { it: "La pioggia è caduta, sono venuti i torrenti, i venti hanno soffiato e hanno fatto impeto contro quella casa, ed essa è caduta e la sua rovina è stata grande.»", en: "The rain came down, the streams rose, and the winds blew and beat against that house, and it fell with a great crash.'" } }
        ]
      }
    }
  },
  {
    id: 'healings',
    sectionTitle: { it: "Il Potere di Guarire e Perdonare", en: "Authority to Heal and Forgive" },
    description: { it: "Gesù guarisce in Galilea, rivelando autorità persino sul peccato.", en: "Jesus heals in Galilee, revealing authority even over sin." },
    coordinate: [32.881, 35.575],
    zoom: 12,
    location: { it: "Cafarnao", en: "Capernaum" },
    image: imgHealings,
    sources: {
      mark: {
        label: { it: "Marco", en: "Mark" },
        ref: "2:1-12",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "Dopo alcuni giorni, Gesù entrò di nuovo in Cafarnao. Si seppe che era in casa", en: "A few days later, when Jesus again entered Capernaum, the people heard that he had come home." } },
          { number: 2, text: { it: "e si radunò tanta gente, che non c'era più posto neppure davanti alla porta; ed egli annunciava loro la Parola.", en: "They gathered in such large numbers that there was no room left, not even outside the door, and he preached the word to them." } },
          { number: 3, text: { it: "Ed eccolo farsi incontro con un paralitico, portato da quattro uomini.", en: "Some men came, bringing to him a paralyzed man, carried by four of them." } },
          { number: 4, text: { it: "Non potendo presentarglielo a causa della folla, scoperchiarono il tetto dalla parte dov'era Gesù e, fattavi un'apertura, calarono il lettuccio sul quale giaceva il paralitico.", en: "Since they could not get him to Jesus because of the crowd, they made an opening in the roof above Jesus by digging through it and then lowered the mat the man was lying on." } },
          { number: 5, text: { it: "Gesù, veduta la loro fede, disse al paralitico: «Figliolo, i tuoi [[peccati ti sono perdonati|authority_forgive]]».", en: "When Jesus saw their faith, he said to the paralyzed man, 'Son, your [[sins are forgiven|authority_forgive]].'" } },
          { number: 6, text: { it: "Erano seduti là alcuni scribi e ragionavano così in cuor loro:", en: "Now some teachers of the law were sitting there, thinking to themselves," } },
          { number: 7, text: { it: "«Perché costui parla in questo modo? Egli bestemmia! Chi può perdonare i peccati, se non uno solo, cioè Dio?»", en: "'Why does this fellow talk like that? He's blaspheming! Who can forgive sins but God alone?'" } },
          { number: 8, text: { it: "Ma Gesù capì subito, con il suo spirito, che ragionavano così dentro di sé... e disse loro:", en: "Immediately Jesus knew in his spirit that this was what they were thinking in their hearts... and he said to them," } },
          { number: 10, text: { it: "«Ora, affinché sappiate che il Figlio dell'uomo ha sulla terra autorità di perdonare i peccati:", en: "'But I want you to know that the Son of Man has authority on earth to forgive sins.'" } },
          { number: 11, text: { it: "io ti dico - disse al paralitico - alzati, prendi il tuo lettuccio e vattene a casa tua».", en: "So he said to the man, 'I tell you, get up, take your mat and go home.'" } },
          { number: 12, text: { it: "Egli si alzò e, preso subito il lettuccio, se ne andò via in presenza di tutti.", en: "He got up, took his mat and walked out in full view of them all." } }
        ]
      }
    }
  },
  {
    id: 'storm',
    sectionTitle: { it: "Gesù Calma la Tempesta", en: "Calming the Storm" },
    description: { it: "La potenza del Creatore domina i venti e le onde.", en: "The power of the Creator commands the winds and the waves." },
    coordinate: [32.82, 35.58],
    zoom: 11,
    location: { it: "Mar di Galilea", en: "Sea of Galilee" },
    image: imgStorm,
    sources: {
      mark: {
        label: { it: "Marco", en: "Mark" },
        ref: "4:35-41",
        verses: [
          { number: 35, text: { it: "In quello stesso giorno, alla sera, Gesù disse loro: «Passiamo all'altra riva».", en: "That day when evening came, he said to his disciples, 'Let us go over to the other side.'" } },
          { number: 37, text: { it: "Ed ecco levarsi una gran bufera di vento che gettava le onde nella barca, tanto che questa già si riempiva.", en: "A furious squall came up, and the waves broke over the boat, so that it was nearly swamped." } },
          { number: 38, text: { it: "Egli stava dormendo a poppa, su un cuscino. Essi lo svegliarono e gli dissero: «Maestro, non t'importa che noi periamo?»", en: "Jesus was in the stern, sleeping on a cushion. The disciples woke him and said to him, 'Teacher, don't you care if we drown?'" } },
          { number: 39, text: { it: "Egli, destatosi, sgridò il vento e disse al mare: «Taci, calmati!» Ed il vento cessò e si fece gran bonaccia.", en: "He got up, rebuked the wind and said to the waves, 'Quiet! Be still!' Then the wind died down and it was completely calm." } },
          { number: 40, text: { it: "Poi disse loro: «Perché siete così paurosi? [[Non avete ancora fede?|faith_vs_fear]]»", en: "He said to his disciples, 'Why are you so afraid? [[Do you still have no faith?|faith_vs_fear]]'" } },
          { number: 41, text: { it: "Ed essi furono presi da gran timore e si dicevano gli uni gli altri: «Chi è dunque costui, al quale persino il vento e il mare ubbidiscono?»", en: "They were terrified and asked each other, 'Who is this? Even the wind and the waves obey him!'" } }
        ]
      }
    }
  }
];

export default galileeData;
