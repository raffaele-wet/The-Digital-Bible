// Nativity section scene images
import imgGenealogy from '../../assets/images/nativity/genealogy.png';
import imgMaria from '../../assets/images/nativity/annunciation.png';
import imgNascita from '../../assets/images/nativity/birth.png';
import imgPastori from '../../assets/images/nativity/shepherds.png';
import imgTempio from '../../assets/images/nativity/presentation_temple.png';
import imgFlightEgypt from '../../assets/images/nativity/flight_egypt.png';
import imgGesuTempio from '../../assets/images/nativity/young_jesus_temple.png';

const nativityScenes = [
  // ─── 1. GENEALOGIA ──────────────────────────────────────────────────────────
  {
    id: 'genealogy',
    sectionTitle: { it: "La Genealogia di Gesù", en: "The Genealogy of Jesus" },
    description: {
      it: "Matteo e Luca tracciano la linea ancestrale di Gesù in modo complementare: Matteo da Abraamo a Giuseppe, Luca dal Padre eterno ad Adamo.",
      en: "Matthew and Luke trace Jesus' ancestral line in complementary ways: Matthew from Abraham to Joseph, Luke from the Eternal Father back to Adam."
    },
    coordinate: [31.777, 35.235],
    zoom: 13,
    location: { it: "Gerusalemme", en: "Jerusalem" },
    image: imgGenealogy,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "1:1-17",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "Genealogia di <span className='glossary-item'>Gesù Cristo</span>, figlio di Davide, figlio di Abraamo.", en: "This is a record of the ancestors of <span className='glossary-item'>Jesus the Messiah</span>, a descendant of David and of Abraham." } },
          { number: 2, text: { it: "Abraamo generò Isacco; Isacco generò Giacobbe; Giacobbe generò Giuda e i suoi fratelli;", en: "Abraham was the father of Isaac. Isaac was the father of Jacob. Jacob was the father of Judah and his brothers." } },
          { number: 3, text: { it: "Giuda generò Perez e Zerah da Tamar; Perez generò Esrom; Esrom generò Aram;", en: "Judah was the father of Perez and Zerah (whose mother was Tamar). Perez was the father of Hezron. Hezron was the father of Ram." } },
          { number: 4, text: { it: "Aram generò Amminadab; Amminadab generò Nahasson; Nahasson generò Salmon;", en: "Ram was the father of Amminadab. Amminadab was the father of Nahshon. Nahshon was the father of Salmon." } },
          { number: 5, text: { it: "Salmon generò Boaz da Rahab; Boaz generò Obed da Rut; Obed generò Iesse;", en: "Salmon was the father of Boaz (whose mother was Rahab). Boaz was the father of Obed (whose mother was Ruth). Obed was the father of Jesse." } },
          { number: 6, text: { it: "Iesse generò il re Davide; il re Davide generò Salomone da quella che era stata la moglie di Uria;", en: "Jesse was the father of King David. David was the father of Solomon (whose mother was Bathsheba, the widow of Uriah)." } },
          { number: 7, text: { it: "Salomone generò Roboamo; Roboamo generò Abia; Abia generò Asa;", en: "Solomon was the father of Rehoboam. Rehoboam was the father of Abijah. Abijah was the father of Asa." } },
          { number: 8, text: { it: "Asa generò Giosafat; Giosafat generò Ioram; Ioram generò Uzzia;", en: "Asa was the father of Jehoshaphat. Jehoshaphat was the father of Jehoram. Jehoram was the father of Uzziah." } },
          { number: 9, text: { it: "Uzzia generò Iotam; Iotam generò Acaz; Acaz generò Ezechia;", en: "Uzziah was the father of Jotham. Jotham was the father of Ahaz. Ahaz was the father of Hezekiah." } },
          { number: 10, text: { it: "Ezechia generò Manasse; Manasse generò Amon; Amon generò Giosia;", en: "Hezekiah was the father of Manasseh. Manasseh was the father of Amon. Amon was the father of Josiah." } },
          { number: 11, text: { it: "Giosia generò Ieconia e i suoi fratelli, al tempo della deportazione in <span className='glossary-item'>Babilonia</span>.", en: "Josiah was the father of Jehoiachin and his brothers (born at the time of the exile to Babylon)." } },
          { number: 12, text: { it: "Dopo la deportazione in Babilonia, Ieconia generò Salatiel; Salatiel generò Zorobabele;", en: "After the Babylonian exile: Jehoiachin was the father of Shealtiel. Shealtiel was the father of Zerubbabel." } },
          { number: 13, text: { it: "Zorobabele generò Abiud; Abiud generò Eliakim; Eliakim generò Azor;", en: "Zerubbabel was the father of Abiud. Abiud was the father of Eliakim. Eliakim was the father of Azor." } },
          { number: 14, text: { it: "Azor generò Sadoc; Sadoc generò Achim; Achim generò Eliud;", en: "Azor was the father of Zadok. Zadok was the father of Akim. Akim was the father of Eliud." } },
          { number: 15, text: { it: "Eliud generò Eleazar; Eleazar generò Mattan; Mattan generò Giacobbe;", en: "Eliud was the father of Eleazar. Eleazar was the father of Matthan. Matthan was the father of Jacob." } },
          { number: 16, text: { it: "Giacobbe generò Giuseppe, il marito di Maria, dalla quale nacque <InsightLink insightId='genealogy_grace'>Gesù, che è chiamato Cristo</InsightLink>.", en: "Jacob was the father of Joseph, the husband of Mary. Mary gave birth to <InsightLink insightId='genealogy_grace'>Jesus, who is called the Messiah</InsightLink>." } },
          { number: 17, text: { it: "Dunque, in tutto, le generazioni da Abraamo fino a Davide sono quattordici; da Davide fino alla deportazione in Babilonia, quattordici; e dalla deportazione in Babilonia fino a Cristo, quattordici.", en: "All those listed above include fourteen generations from Abraham to David, fourteen from David to the Babylonian exile, and fourteen from the Babylonian exile to the Messiah." } }
        ]
      },
      luke: {
        label: { it: "Luca", en: "Luke" },
        ref: "3:23-38",
        verses: [
          { number: 23, isChapterStart: true, text: { it: "Gesù, quando cominciò il suo ministero, aveva circa trent'anni. Era il figlio, come si supponeva, di Giuseppe, figlio di Eli,", en: "Jesus was about thirty years old when he began his public ministry. Jesus was known as the son of Joseph. Joseph was the son of Heli." } },
          { number: 24, text: { it: "figlio di Mattat, figlio di Levi, figlio di Melchi, figlio di Ianai, figlio di Giuseppe,", en: "Heli was the son of Matthat. Matthat was the son of Levi. Levi was the son of Melki. Melki was the son of Jannai. Jannai was the son of Joseph." } },
          { number: 25, text: { it: "figlio di Mattazia, figlio di Amos, figlio di Naum, figlio di Esli, figlio di Naggai,", en: "Joseph was the son of Mattathias. Mattathias was the son of Amos. Amos was the son of Nahum. Nahum was the son of Esli. Esli was the son of Naggai." } },
          { number: 26, text: { it: "figlio di Maat, figlio di Mattazia, figlio di Semei, figlio di Iosec, figlio di Ioda,", en: "Naggai was the son of Maath. Maath was the son of Mattathias. Mattathias was the son of Semein. Semein was the son of Josech. Josech was the son of Joda." } },
          { number: 27, text: { it: "figlio di Ioanan, figlio di Resa, figlio di Zorobabele, figlio di Salatiel, figlio di Neri,", en: "Joda was the son of Joanan. Joanan was the son of Rhesa. Rhesa was the son of Zerubbabel. Zerubbabel was the son of Shealtiel. Shealtiel was the son of Neri." } },
          { number: 28, text: { it: "figlio di Melchi, figlio di Addi, figlio di Cosam, figlio di Elmadan, figlio di Er,", en: "Neri was the son of Melki. Melki was the son of Addi. Addi was the son of Cosam. Cosam was the son of Elmadam. Elmadam was the son of Er." } },
          { number: 29, text: { it: "figlio di Giosuè, figlio di Eliezer, figlio di Iorim, figlio di Mattat, figlio di Levi,", en: "Er was the son of Joshua. Joshua was the son of Eliezer. Eliezer was the son of Jorim. Jorim was the son of Matthat. Matthat was the son of Levi." } },
          { number: 30, text: { it: "figlio di Simeone, figlio di Giuda, figlio di Giuseppe, figlio di Ionam, figlio di Eliakim,", en: "Levi was the son of Simeon. Simeon was the son of Judah. Judah was the son of Joseph. Joseph was the son of Jonam. Jonam was the son of Eliakim." } },
          { number: 31, text: { it: "figlio di Melea, figlio di Menna, figlio di Mattata, figlio di Natan, figlio di Davide,", en: "Eliakim was the son of Melea. Melea was the son of Menna. Menna was the son of Mattatha. Mattatha was the son of Nathan. Nathan was the son of David." } },
          { number: 32, text: { it: "figlio di Iesse, figlio di Obed, figlio di Boaz, figlio di Salmon, figlio di Nahasson,", en: "David was the son of Jesse. Jesse was the son of Obed. Obed was the son of Boaz. Boaz was the son of Salmon. Salmon was the son of Nahshon." } },
          { number: 33, text: { it: "figlio di Amminadab, figlio di Admin, figlio di Arni, figlio di Esrom, figlio di Perez, figlio di Giuda,", en: "Nahshon was the son of Amminadab. Amminadab was the son of Admin. Admin was the son of Arni. Arni was the son of Hezron. Hezron was the son of Perez. Perez was the son of Judah." } },
          { number: 34, text: { it: "figlio di Giacobbe, figlio di Isacco, figlio di Abraamo, figlio di Tera, figlio di Nakor,", en: "Judah was the son of Jacob. Jacob was the son of Isaac. Isaac was the son of Abraham. Abraham was the son of Terah. Terah was the son of Nahor." } },
          { number: 35, text: { it: "figlio di Serug, figlio di Ragau, figlio di Peleg, figlio di Eber, figlio di Selah,", en: "Nahor was the son of Serug. Serug was the son of Reu. Reu was the son of Peleg. Peleg was the son of Eber. Eber was the son of Shelah." } },
          { number: 36, text: { it: "figlio di Cainan, figlio di Arfaxad, figlio di Sem, figlio di Noè, figlio di Lamec,", en: "Shelah was the son of Cainan. Cainan was the son of Arphaxad. Arphaxad was the son of Shem. Shem was the son of Noah. Noah was the son of Lamech." } },
          { number: 37, text: { it: "figlio di Matusalem, figlio di Enoc, figlio di Iaret, figlio di Malaleele, figlio di Cainan,", en: "Lamech was the son of Methuselah. Methuselah was the son of Enoch. Enoch was the son of Jared. Jared was the son of Mahalalel. Mahalalel was the son of Kenan." } },
          { number: 38, text: { it: "<InsightLink insightId='genealogy_grace'>figlio di Enosh, figlio di Set, figlio di Adamo, figlio di Dio</InsightLink>.", en: "<InsightLink insightId='genealogy_fulfillment'>Kenan was the son of Enosh. Enosh was the son of Seth. Seth was the son of Adam. Adam was the son of God</InsightLink>." } }
        ]
      }
    }
  },

  // ─── 2. ANNUNCIAZIONE ───────────────────────────────────────────────────────
  {
    id: 'annunciation',
    sectionTitle: { it: "L'Annunciazione a Maria", en: "The Annunciation to Mary" },
    description: {
      it: "L'arcangelo Gabriele appare a Maria a Nazaret, annunciandole che avrebbe concepito il Figlio di Dio per opera dello Spirito Santo.",
      en: "The archangel Gabriel appears to Mary in Nazareth, announcing that she would conceive the Son of God by the power of the Holy Spirit."
    },
    coordinate: [32.701, 35.298],
    zoom: 14,
    location: { it: "Nazaret", en: "Nazareth" },
    image: imgMaria,
    sources: {
      luke: {
        label: { it: "Luca", en: "Luke" },
        ref: "1:26-38",
        verses: [
          { number: 26, isChapterStart: true, text: { it: "Al sesto mese, l'angelo <span className='glossary-item'>Gabriele</span> fu mandato da Dio in una città della Galilea, chiamata <span className='glossary-item'>Nazaret</span>,", en: "In the sixth month of Elizabeth's pregnancy, God sent the angel <span className='glossary-item'>Gabriel</span> to <span className='glossary-item'>Nazareth</span>, a village in Galilee," } },
          { number: 27, text: { it: "a una vergine fidanzata a un uomo chiamato Giuseppe, della casa di Davide; e il nome della vergine era Maria.", en: "to a virgin named Mary. She was engaged to be married to a man named Joseph, a descendant of King David." } },
          { number: 28, text: { it: "L'angelo, entrato da lei, disse: «Ti saluto, o <InsightLink insightId='annunciation_favor'>favorita dalla grazia</InsightLink>; il Signore è con te».", en: "Gabriel appeared to her and said, 'Greetings, <InsightLink insightId='annunciation_favor'>favored woman</InsightLink>! The Lord is with you!'" } },
          { number: 29, text: { it: "Ella fu turbata a queste parole, e si domandava che cosa volesse dire un tale saluto.", en: "Confused and disturbed, Mary tried to think what the angel could mean." } },
          { number: 30, text: { it: "L'angelo le disse: «Non temere, Maria, perché hai trovato grazia presso Dio.", en: "'Don't be afraid, Mary,' the angel told her, 'for you have found favor with God!'" } },
          { number: 31, text: { it: "Ecco, tu concepirai e partorirai un figlio, e gli porrai nome Gesù.", en: "'You will conceive and give birth to a son, and you will name him Jesus.'" } },
          { number: 32, text: { it: "Questi sarà grande e sarà chiamato Figlio dell'Altissimo, e il Signore Dio gli darà il trono di Davide, suo padre.", en: "'He will be very great and will be called the Son of the Most High. The Lord God will give him the throne of his ancestor David.'" } },
          { number: 33, text: { it: "Egli regnerà sulla casa di Giacobbe in eterno, e il suo regno non avrà mai fine».", en: "'And he will reign over Israel forever; his Kingdom will never end!'" } },
          { number: 34, text: { it: "Maria disse all'angelo: «Come avverrà questo, dal momento che non conosco uomo?»", en: "Mary asked the angel, 'But how can this happen? I am a virgin.'" } },
          { number: 35, text: { it: "L'angelo le rispose: «Lo <span className='glossary-item'>Spirito Santo</span> verrà su di te e la potenza dell'Altissimo ti coprirà dell'ombra sua; perciò, anche colui che nascerà sarà chiamato Santo, Figlio di Dio.", en: "The angel replied, 'The <span className='glossary-item'>Holy Spirit</span> will come upon you, and the power of the Most High will overshadow you. So the baby to be born will be holy, and he will be called the Son of God.'" } },
          { number: 36, text: { it: "Ecco, Elisabetta, tua parente, ha concepito anche lei un figlio nella sua vecchiaia; e questo è il sesto mese per lei, che era chiamata sterile;", en: "'What's more, your relative Elizabeth has become pregnant in her old age! People used to say she was barren, but she has conceived a son and is now in her sixth month.'" } },
          { number: 37, text: { it: "poiché nessuna parola di Dio rimarrà inefficace».", en: "'For the word of God will never fail.'" } },
          { number: 38, text: { it: "Maria disse: «Ecco, io sono la serva del Signore; mi sia fatto secondo la tua parola». E l'angelo la lasciò.", en: "Mary responded, 'I am the Lord's servant. May everything you have said about me come true.' And then the angel left her." } }
        ]
      }
    }
  },

  // ─── 3. LA NASCITA ──────────────────────────────────────────────────────────
  {
    id: 'the_birth',
    sectionTitle: { it: "La Nascita di Gesù", en: "The Birth of Jesus" },
    description: {
      it: "Matteo racconta la nascita dal punto di vista di Giuseppe, con l'adempimento profetico. Luca la descrive con il censimento e la mangiatoia.",
      en: "Matthew tells the birth from Joseph's perspective, highlighting prophetic fulfillment. Luke describes the census and the manger."
    },
    coordinate: [31.704, 35.203],
    zoom: 14,
    location: { it: "Betlemme", en: "Bethlehem" },
    image: imgNascita,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "1:18-25",
        verses: [
          { number: 18, isChapterStart: true, text: { it: "Ora, la nascita di <span className='glossary-item'>Gesù Cristo</span> avvenne così: Maria, sua madre, era promessa sposa di Giuseppe; ma prima che andassero a stare insieme, si trovò incinta per opera dello <span className='glossary-item'>Spirito Santo</span>.", en: "This is how Jesus the Messiah was born. His mother, Mary, was engaged to be married to Joseph. But before the marriage took place, while she was still a virgin, she became pregnant through the power of the <span className='glossary-item'>Holy Spirit</span>." } },
          { number: 19, text: { it: "Giuseppe, suo marito, che era un uomo giusto e non voleva esporla al pubblico disonore, si propose di lasciarla in segreto.", en: "Joseph, to whom she was engaged, was a righteous man and did not want to disgrace her publicly, so he decided to break the engagement quietly." } },
          { number: 20, text: { it: "Ma mentre pensava a queste cose, un angelo del Signore gli apparve in sogno e gli disse: «Giuseppe, figlio di Davide, non temere di prendere con te Maria, tua moglie; perché ciò che in lei è stato concepito è dello Spirito Santo.", en: "As he considered this, an angel of the Lord appeared to him in a dream. 'Joseph, son of David,' the angel said, 'do not be afraid to take Mary as your wife. For the child within her was conceived by the Holy Spirit.'" } },
          { number: 21, text: { it: "Ella partorirà un figlio, e tu lo chiamerai Gesù, perché <InsightLink insightId='immanuel_prophecy'>egli salverà il suo popolo dai loro peccati</InsightLink>».", en: "'And she will have a son, and you are to name him Jesus, for <InsightLink insightId='immanuel_prophecy'>he will save his people from their sins</InsightLink>.'" } },
          { number: 22, text: { it: "Tutto questo avvenne perché si adempisse ciò che era stato detto dal Signore per mezzo del profeta:", en: "All of this occurred to fulfill the Lord's message through his prophet:" } },
          { number: 23, text: { it: "«Ecco, la vergine sarà incinta e partorirà un figlio, e lo chiameranno <InsightLink insightId='immanuel_prophecy'>Emmanuele</InsightLink>», che tradotto significa: «Dio con noi».", en: "'Look! The virgin will conceive a child! She will give birth to a son, and they will call him <InsightLink insightId='immanuel_prophecy'>Immanuel</InsightLink>, which means God is with us.'" } },
          { number: 24, text: { it: "Giuseppe, destatosi dal sonno, fece come l'angelo del Signore gli aveva comandato, e prese con sé sua moglie;", en: "When Joseph woke up, he did as the angel of the Lord commanded and took Mary as his wife." } },
          { number: 25, text: { it: "ma non la conobbe finché ella non ebbe partorito un figlio; e gli pose nome Gesù.", en: "But he did not have sexual relations with her until her son was born. And Joseph named him Jesus." } }
        ]
      },
      luke: {
        label: { it: "Luca", en: "Luke" },
        ref: "2:1-7",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "In quei giorni un decreto di <span className='glossary-item'>Cesare Augusto</span> ordinò che si facesse il censimento di tutto l'impero.", en: "At that time the Roman emperor, <span className='glossary-item'>Augustus</span>, decreed that a census should be taken throughout the Roman Empire." } },
          { number: 2, text: { it: "Questo primo censimento fu fatto quando Quirinio era governatore della Siria.", en: "(This was the first census taken when Quirinius was governor of Syria.)" } },
          { number: 3, text: { it: "E tutti andavano a farsi registrare, ciascuno nella sua città.", en: "All returned to their own ancestral towns to register for this census." } },
          { number: 4, text: { it: "Anche Giuseppe, che era della casa e della famiglia di Davide, dalla città di <span className='glossary-item'>Nazaret</span> e dalla Galilea salì in Giudea alla città di Davide, chiamata <span className='glossary-item'>Betlemme</span>,", en: "And because Joseph was a descendant of King David, he had to go to <span className='glossary-item'>Bethlehem</span> in Judea, David's ancient home. He traveled there from the village of <span className='glossary-item'>Nazareth</span> in Galilee." } },
          { number: 5, text: { it: "per farsi registrare con Maria, sua sposa, che era incinta.", en: "He took with him Mary, to whom he was engaged, who was now expecting a child." } },
          { number: 6, text: { it: "Mentre erano là, si compì per lei il tempo del parto;", en: "And while they were there, the time came for her baby to be born." } },
          { number: 7, text: { it: "ed ella diede alla luce il suo figlio primogenito, lo fasciò e lo coricò <InsightLink insightId='incarnation_mystery'>in una mangiatoia</InsightLink>, perché non c'era posto per loro nell'albergo.", en: "She gave birth to her firstborn son. She wrapped him snugly in strips of cloth and laid him <InsightLink insightId='incarnation_mystery'>in a manger</InsightLink>, because there was no lodging available for them." } }
        ]
      }
    }
  },

  // ─── 4. L'ADORAZIONE ────────────────────────────────────────────────────────
  {
    id: 'the_adoration',
    sectionTitle: { it: "L'Adorazione: I Magi e i Pastori", en: "The Adoration: Magi and Shepherds" },
    description: {
      it: "Due gruppi, opposti per estrazione sociale, vengono guidati verso Gesù: i Magi dall'Orient per mezzo di una stella, i pastori per mezzo di una schiera di angeli.",
      en: "Two contrasting groups are guided to Jesus: the Magi from the East by a star, and the shepherds by a heavenly host of angels."
    },
    coordinate: [31.704, 35.203],
    zoom: 14,
    location: { it: "Betlemme", en: "Bethlehem" },
    image: imgPastori,
    sources: {
      matthew: {
        label: { it: "Matteo (I Magi)", en: "Matthew (The Magi)" },
        ref: "2:1-12",
        verses: [
          { number: 1, isChapterStart: true, text: { it: "Gesù essendo nato a <span className='glossary-item'>Betlemme</span> di Giudea, al tempo del re <span className='glossary-item'>Erode</span>, ecco dei <span className='glossary-item'>Magi</span> d'oriente arrivarono a Gerusalemme,", en: "Jesus was born in <span className='glossary-item'>Bethlehem</span> in Judea, during the reign of King <span className='glossary-item'>Herod</span>. About that time some <span className='glossary-item'>wise men</span> from eastern lands arrived in Jerusalem," } },
          { number: 2, text: { it: "dicendo: «Dov'è il re dei Giudei che è nato? Perché abbiamo visto la sua stella in oriente e siamo venuti ad adorarlo».", en: "asking, 'Where is the newborn king of the Jews? We saw his star as it rose, and we have come to worship him.'" } },
          { number: 3, text: { it: "Il re Erode, udito questo, fu turbato, e con lui tutta Gerusalemme.", en: "King Herod was deeply disturbed when he heard this, as was everyone in Jerusalem." } },
          { number: 4, text: { it: "E, radunati tutti i capi dei sacerdoti e gli <span className='glossary-item'>scribi</span> del popolo, domandava loro dove il Cristo dovesse nascere.", en: "He called a meeting of the leading priests and teachers of religious law and asked, 'Where is the Messiah supposed to be born?'" } },
          { number: 5, text: { it: "Essi gli dissero: «A Betlemme di Giudea; perché così è scritto per mezzo del profeta:", en: "'In Bethlehem in Judea,' they said, 'for this is what the prophet wrote:'" } },
          { number: 6, text: { it: "E tu, Betlemme, terra di Giuda, non sei affatto la minima fra le principali città di Giuda; poiché da te uscirà un condottiero che pascerà Israele, il mio popolo».", en: "'And you, O Bethlehem in the land of Judah, are not least among the ruling cities of Judah, for a ruler will come from you who will be the shepherd for my people Israel.'" } },
          { number: 7, text: { it: "Allora Erode, chiamati i Magi in segreto, si informò esattamente da loro del tempo in cui la stella era apparsa;", en: "Then Herod called for a private meeting with the wise men, and he learned from them the time when the star first appeared." } },
          { number: 8, text: { it: "e, mandandoli a Betlemme, disse: «Andate e informatevi esattamente del bambino; e quando l'avrete trovato, fatemelo sapere, perché anch'io venga ad adorarlo».", en: "Then he told them, 'Go to Bethlehem and search carefully for the child. And when you find him, come back and tell me so that I can go and worship him, too!'" } },
          { number: 9, text: { it: "Essi, udito il re, si partirono; e la stella che avevano visto in oriente li precedeva, finché giunse e si fermò sopra il luogo dov'era il bambino.", en: "After this interview the wise men went their way. And the star they had seen in the east guided them to Bethlehem. It went ahead of them and stopped over the place where the child was." } },
          { number: 10, text: { it: "Quando videro la stella, si rallegrarono di grandissima gioia.", en: "When they saw the star, they were filled with joy!" } },
          { number: 11, text: { it: "Ed entrati nella casa, videro il bambino con Maria, sua madre; e prostratisi lo adorarono; poi, aperte le loro bisacce, gli offrirono <InsightLink insightId='magi_shepherds'>doni: oro, incenso e mirra</InsightLink>.", en: "They entered the house and saw the child with his mother, Mary, and they bowed down and worshiped him. Then they opened their treasure chests and gave him gifts of <InsightLink insightId='magi_shepherds'>gold, frankincense, and myrrh</InsightLink>." } },
          { number: 12, text: { it: "E, avvertiti in sogno di non tornare da Erode, per un'altra strada se ne tornarono al loro paese.", en: "When it was time to leave, they returned to their own country by another route, for God had warned them in a dream not to return to Herod." } }
        ]
      },
      luke: {
        label: { it: "Luca (I Pastori)", en: "Luke (The Shepherds)" },
        ref: "2:8-20",
        verses: [
          { number: 8, isChapterStart: true, text: { it: "In quella stessa regione c'erano dei pastori che stavano nei campi e di notte facevano la guardia al loro gregge.", en: "That night there were shepherds staying in the fields nearby, guarding their flocks of sheep." } },
          { number: 9, text: { it: "E un angelo del Signore si presentò a loro e la gloria del Signore risplendé intorno a loro, e furono presi da gran timore.", en: "Suddenly, an angel of the Lord appeared among them, and the radiance of the Lord's glory surrounded them. They were terrified." } },
          { number: 10, text: { it: "L'angelo disse loro: «Non temete, perché io vi porto la buona notizia di una grande gioia che tutto il popolo avrà:", en: "But the angel reassured them. 'Don't be afraid!' he said. 'I bring you good news that will bring great joy to all people.'" } },
          { number: 11, text: { it: "Oggi, nella città di Davide, è nato per voi un <InsightLink insightId='magi_shepherds'>Salvatore, che è Cristo, il Signore</InsightLink>.", en: "'The <InsightLink insightId='magi_shepherds'>Savior—yes, the Messiah, the Lord</InsightLink>—has been born today in Bethlehem, the city of David!'" } },
          { number: 12, text: { it: "E questo vi servirà di segno: troverete un bambino avvolto in fasce e coricato in una mangiatoia».", en: "'And you will recognize him by this sign: You will find a baby wrapped snugly in strips of cloth, lying in a manger.'" } },
          { number: 13, text: { it: "E a un tratto vi fu con l'angelo una moltitudine dell'esercito celeste, che lodava Dio e diceva:", en: "Suddenly, the angel was joined by a vast host of others—the armies of heaven—praising God and saying," } },
          { number: 14, text: { it: "«Gloria a Dio nei luoghi altissimi, e pace in terra agli uomini ch'egli gradisce!»", en: "'Glory to God in highest heaven, and peace on earth to those with whom God is pleased.'" } },
          { number: 15, text: { it: "Quando gli angeli se ne furono andati verso il cielo, i pastori dicevano tra di loro: «Andiamo fino a Betlemme e vediamo ciò che è avvenuto e che il Signore ci ha fatto sapere».", en: "When the angels had returned to heaven, the shepherds said to each other, 'Let's go to Bethlehem! Let's see this thing that has happened, which the Lord has told us about.'" } },
          { number: 16, text: { it: "Andarono in fretta e trovarono Maria e Giuseppe, e il bambino che giaceva nella mangiatoia.", en: "They hurried to the village and found Mary and Joseph. And there was the baby, lying in the manger." } },
          { number: 17, text: { it: "E, vedutolo, divulgarono quello che era stato loro detto di questo bambino.", en: "After seeing him, the shepherds told everyone what had happened and what the angel had said to them about this child." } },
          { number: 18, text: { it: "E tutti quelli che li udirono si meravigliarono delle cose dette loro dai pastori.", en: "All who heard the shepherds' story were astonished." } },
          { number: 19, text: { it: "Maria serbava in sé tutte queste cose, meditandole in cuor suo.", en: "But Mary kept all these things in her heart and thought about them often." } },
          { number: 20, text: { it: "E i pastori tornarono indietro, glorificando e lodando Dio per tutto quello che avevano udito e visto, com'era stato loro annunziato.", en: "The shepherds went back to their flocks, glorifying and praising God for all they had heard and seen. It was just as the angel had told them." } }
        ]
      }
    }
  },

  // ─── 5. PRESENTAZIONE AL TEMPIO ─────────────────────────────────────────────
  {
    id: 'presentation_temple',
    sectionTitle: { it: "Presentazione al Tempio", en: "Presentation at the Temple" },
    description: {
      it: "Quaranta giorni dopo la nascita, la Sacra Famiglia porta Gesù al Tempio. Simeone e Anna riconoscono in lui il Messia atteso da Israele.",
      en: "Forty days after his birth, the Holy Family brings Jesus to the Temple. Simeon and Anna recognize him as the long-awaited Messiah of Israel."
    },
    coordinate: [31.777, 35.235],
    zoom: 15,
    location: { it: "Gerusalemme - Tempio", en: "Jerusalem - Temple" },
    image: imgTempio,
    sources: {
      luke: {
        label: { it: "Luca", en: "Luke" },
        ref: "2:21-38",
        verses: [
          { number: 21, isChapterStart: true, text: { it: "Quando furono compiuti gli otto giorni per circonciderlo, gli fu messo il nome Gesù, che gli era stato dato dall'angelo prima che egli fosse concepito.", en: "Eight days later, when the baby was circumcised, he was named Jesus, the name given him by the angel even before he was conceived." } },
          { number: 22, text: { it: "Quando furono compiuti i giorni della loro purificazione secondo la <span className='glossary-item'>legge di Mosè</span>, portarono il bambino a Gerusalemme per presentarlo al Signore,", en: "Then it was time for their purification offering, as required by the <span className='glossary-item'>law of Moses</span> after the birth of a child; so his parents took him to Jerusalem to present him to the Lord." } },
          { number: 23, text: { it: "come è scritto nella legge del Signore: «Ogni maschio primogenito sarà consacrato al Signore»;", en: "The law of the Lord says, 'If a woman's first child is a boy, he must be dedicated to the Lord.'" } },
          { number: 24, text: { it: "e per fare il sacrificio conforme a quel che è detto nella legge del Signore: «Un paio di tortore o due giovani colombi».", en: "So they offered the sacrifice required in the law of the Lord—either a pair of turtledoves or two young pigeons." } },
          { number: 25, text: { it: "Vi era in Gerusalemme un uomo di nome <span className='glossary-item'>Simeone</span>; quest'uomo era giusto e pio, e aspettava la consolazione d'Israele; lo <span className='glossary-item'>Spirito Santo</span> era sopra di lui;", en: "At that time there was a man in Jerusalem named <span className='glossary-item'>Simeon</span>. He was righteous and devout and was eagerly waiting for the Messiah to come and rescue Israel. The <span className='glossary-item'>Holy Spirit</span> was upon him" } },
          { number: 26, text: { it: "e gli era stato rivelato dallo Spirito Santo che non sarebbe morto prima di aver visto il Cristo del Signore.", en: "and had revealed to him that he would not die until he had seen the Lord's Messiah." } },
          { number: 27, text: { it: "Egli, mosso dallo Spirito, andò nel tempio; e, come i genitori vi portavano il bambino Gesù per adempiere a suo riguardo le prescrizioni della legge,", en: "That day the Spirit led him to the Temple. So when Mary and Joseph came to present the baby Jesus to the Lord as the law required," } },
          { number: 28, text: { it: "lo prese in braccio, benedisse Dio e disse:", en: "Simeon was there. He took the child in his arms and praised God, saying," } },
          { number: 29, text: { it: "«Ora, o mio Signore, tu lasci andare in pace il tuo servo, secondo la tua parola;", en: "'Sovereign Lord, now let your servant die in peace, as you have promised.'" } },
          { number: 30, text: { it: "perché i miei occhi hanno visto la tua salvezza,", en: "'I have seen your salvation,'" } },
          { number: 31, text: { it: "che hai preparata dinanzi a tutti i popoli;", en: "'which you have prepared for all people.'" } },
          { number: 32, text: { it: "<InsightLink insightId='presentation_temple'>luce per illuminare le genti e gloria del tuo popolo Israele</InsightLink>».", en: "<InsightLink insightId='presentation_temple'>He is a light to reveal God to the nations, and he is the glory of your people Israel!</InsightLink>" } },
          { number: 33, text: { it: "Il padre e la madre di Gesù restavano meravigliati delle cose che si dicevano di lui.", en: "Jesus' parents were amazed at what was being said about him." } },
          { number: 34, text: { it: "Simeone li benedisse e disse a Maria, madre di lui: «Ecco, costui è destinato a essere occasione di caduta e di rialzamento per molti in Israele, e segno di contraddizione;", en: "Then Simeon blessed them, and he said to Mary, the baby's mother, 'This child is destined to cause many in Israel to fall, and many others to rise. He has been sent as a sign from God, but many will oppose him.'" } },
          { number: 35, text: { it: "(e a te stessa una spada trafiggerà l'anima), affinché i pensieri di molti cuori siano svelati».", en: "'As a result, the deepest thoughts of many hearts will be revealed. And a sword will pierce your very soul.'" } },
          { number: 36, text: { it: "Vi era anche <span className='glossary-item'>Anna</span>, profetessa, figlia di Fanuel, della tribù di Aser. Era molto avanzata in età: dopo essere vissuta con il marito sette anni dalla sua fanciullezza,", en: "<span className='glossary-item'>Anna</span>, a prophet, was also there in the Temple. She was the daughter of Phanuel from the tribe of Asher, and she was very old. Her husband died when they had been married only seven years." } },
          { number: 37, text: { it: "era rimasta vedova e aveva raggiunto gli ottantaquattro anni. Non si allontanava mai dal tempio e serviva Dio notte e giorno con digiuni e preghiere.", en: "Then she lived as a widow to the age of eighty-four. She never left the Temple but stayed there day and night, worshiping God with fasting and prayer." } },
          { number: 38, text: { it: "Sopraggiunta in quella stessa ora, anche lei lodava Dio e parlava del bambino a tutti quelli che aspettavano la redenzione di Gerusalemme.", en: "She came along just as Simeon was talking with Mary and Joseph, and she began praising God. She talked about the child to everyone who had been waiting expectantly for God to rescue Jerusalem." } }
        ]
      }
    }
  },

  // ─── 6. FUGA IN EGITTO ───────────────────────────────────────────────────────
  {
    id: 'flight_egypt',
    sectionTitle: { it: "La Fuga in Egitto", en: "The Flight to Egypt" },
    description: {
      it: "Un angelo avverte Giuseppe in sogno: Erode vuole uccidere Gesù. La Sacra Famiglia fugge in Egitto, adempiendo la profezia di Osea.",
      en: "An angel warns Joseph in a dream: Herod wants to kill Jesus. The Holy Family flees to Egypt, fulfilling the prophecy of Hosea."
    },
    coordinate: [30.044, 31.235],
    zoom: 7,
    location: { it: "Egitto / Cairo", en: "Egypt / Cairo" },
    image: imgFlightEgypt,
    sources: {
      matthew: {
        label: { it: "Matteo", en: "Matthew" },
        ref: "2:13-23",
        verses: [
          { number: 13, isChapterStart: true, text: { it: "Dopo che i Magi se ne furono andati, ecco che un angelo del Signore apparve in sogno a Giuseppe e gli disse: «Àlzati, prendi il bambino e sua madre, fuggi in <span className='glossary-item'>Egitto</span>, e resta lì finché non ti avrò detto io, perché <span className='glossary-item'>Erode</span> sta per cercare il bambino per farlo morire».", en: "After the wise men were gone, an angel of the Lord appeared to Joseph in a dream. 'Get up! Flee to <span className='glossary-item'>Egypt</span> with the child and his mother,' the angel said. 'Stay there until I tell you to return, because <span className='glossary-item'>Herod</span> is going to search for the child to kill him.'" } },
          { number: 14, text: { it: "Giuseppe si alzò, prese il bambino e sua madre di notte, e partì per l'Egitto;", en: "That night Joseph left for Egypt with the child and Mary, his mother." } },
          { number: 15, text: { it: "e vi rimase fino alla morte di Erode, affinché si adempisse quello che era stato detto dal Signore per mezzo del profeta: <InsightLink insightId='flight_exodus'>«Ho chiamato mio figlio fuori dall'Egitto»</InsightLink>.", en: "and they stayed there until Herod's death. This fulfilled what the Lord had spoken through the prophet: <InsightLink insightId='flight_exodus'>'I called my Son out of Egypt.'</InsightLink>" } },
          { number: 16, text: { it: "Allora Erode, vedendo che i Magi si erano presi gioco di lui, si adirò molto, e mandò ad uccidere tutti i bambini maschi che erano in <span className='glossary-item'>Betlemme</span> e in tutto il suo territorio, di età fino a due anni, secondo il tempo che aveva esattamente stabilito dai Magi.", en: "Herod was furious when he realized that the wise men had outwitted him. He sent soldiers to kill all the boys in and around <span className='glossary-item'>Bethlehem</span> who were two years old and under, based on the wise men's report of the star's first appearance." } },
          { number: 17, text: { it: "Allora si adempì quello che era stato detto per mezzo del profeta Geremia:", en: "Herod's brutal action fulfilled what God had spoken through the prophet Jeremiah:" } },
          { number: 18, text: { it: "«Un grido è stato udito in Rama, un pianto e un lamento grande: Rachele piange i suoi figli e non vuol essere consolata, perché non esistono più».", en: "'A cry was heard in Ramah—weeping and great mourning. Rachel weeps for her children, refusing to be comforted, for they are dead.'" } },
          { number: 19, text: { it: "Quando Erode fu morto, ecco che un angelo del Signore apparve in sogno a Giuseppe in Egitto,", en: "When Herod died, an angel of the Lord appeared in a dream to Joseph in Egypt." } },
          { number: 20, text: { it: "e gli disse: «Àlzati, prendi il bambino e sua madre, e va' nel paese d'Israele; perché coloro che cercavano la vita del bambino sono morti».", en: "'Get up!' the angel said. 'Take the child and his mother back to the land of Israel, because those who were trying to kill the child are dead.'" } },
          { number: 21, text: { it: "Giuseppe si alzò, prese il bambino e sua madre, e andò nel paese d'Israele.", en: "So Joseph got up and returned to the land of Israel with Jesus and his mother." } },
          { number: 22, text: { it: "Ma quando seppe che Archelao regnava in Giudea al posto di Erode, suo padre, ebbe paura di andarvi; e, avvertito in sogno, si ritirò nelle parti della Galilea;", en: "But when he learned that the new ruler of Judea was Herod's son Archelaus, he was afraid to go there. Then, after being warned in a dream, he left for the region of Galilee." } },
          { number: 23, text: { it: "e andò ad abitare in una città chiamata <span className='glossary-item'>Nazaret</span>, perché si adempisse quello che era stato detto per mezzo dei profeti: «<InsightLink insightId='flight_exodus'>Sarà chiamato Nazareno</InsightLink>».", en: "So the family went and lived in a town called <span className='glossary-item'>Nazareth</span>. This fulfilled what the prophets had said: '<InsightLink insightId='flight_exodus'>He will be called a Nazarene.</InsightLink>'" } }
        ]
      }
    }
  },

  // ─── 7. GESÙ DODICENNE AL TEMPIO ────────────────────────────────────────────
  {
    id: 'young_jesus_temple',
    sectionTitle: { it: "Gesù Dodicenne al Tempio", en: "Young Jesus at the Temple" },
    description: {
      it: "A dodici anni, Gesù rimane al Tempio di Gerusalemme per la Pasqua. I suoi genitori lo trovano tre giorni dopo tra i dottori della Legge, che restano stupiti dalla sua sapienza.",
      en: "At twelve, Jesus stays behind at the Jerusalem Temple during Passover. His parents find him three days later among the teachers, who are amazed at his wisdom."
    },
    coordinate: [31.777, 35.235],
    zoom: 15,
    location: { it: "Gerusalemme - Tempio", en: "Jerusalem - Temple" },
    image: imgGesuTempio,
    sources: {
      luke: {
        label: { it: "Luca", en: "Luke" },
        ref: "2:41-52",
        verses: [
          { number: 41, isChapterStart: true, text: { it: "I suoi genitori andavano ogni anno a Gerusalemme, per la festa della <span className='glossary-item'>Pasqua</span>.", en: "Every year Jesus' parents went to Jerusalem for the <span className='glossary-item'>Passover</span> festival." } },
          { number: 42, text: { it: "Quando egli giunse ai dodici anni, salirono a Gerusalemme, secondo l'usanza della festa;", en: "When Jesus was twelve years old, they attended the festival as usual." } },
          { number: 43, text: { it: "passati i giorni della festa, mentre tornavano, il bambino Gesù rimase in Gerusalemme all'insaputa dei genitori;", en: "After the celebration was over, they started home to Nazareth, but Jesus stayed behind in Jerusalem. His parents didn't miss him at first," } },
          { number: 44, text: { it: "i quali, pensando che egli fosse nella comitiva, camminarono una giornata, poi si misero a cercarlo tra i parenti e i conoscenti;", en: "because they assumed he was among the other travelers. But when he didn't show up that evening, they started looking for him among their relatives and friends." } },
          { number: 45, text: { it: "e, non avendolo trovato, tornarono a Gerusalemme cercandolo.", en: "When they couldn't find him, they went back to Jerusalem to search for him there." } },
          { number: 46, text: { it: "Tre giorni dopo lo trovarono nel tempio, seduto in mezzo ai <span className='glossary-item'>dottori della legge</span>, mentre li ascoltava e faceva loro delle domande;", en: "Three days later they finally discovered him in the Temple, sitting among the religious teachers, listening to them and asking questions." } },
          { number: 47, text: { it: "e tutti quelli che l'udivano si stupivano della sua intelligenza e delle sue risposte.", en: "All who heard him were amazed at his understanding and his answers." } },
          { number: 48, text: { it: "Quando i suoi genitori lo videro, rimasero stupiti; e sua madre gli disse: «Figlio, perché ci hai fatto così? Ecco, tuo padre e io ti cercavamo e stavamo in grande ansia».", en: "His parents didn't know what to think. 'Son,' his mother said to him, 'why have you done this to us? Your father and I have been frantic, searching for you everywhere.'" } },
          { number: 49, text: { it: "Ed egli disse loro: «Perché mi cercavate? Non sapevate che io <InsightLink insightId='jesus_temple_12'>dovevo trovarmi nella casa del Padre mio</InsightLink>?»", en: "'But why did you need to search?' he asked. 'Didn't you know that <InsightLink insightId='jesus_temple_12'>I must be in my Father's house</InsightLink>?'" } },
          { number: 50, text: { it: "Ma essi non capirono le parole che aveva detto loro.", en: "But they didn't understand what he meant." } },
          { number: 51, text: { it: "Poi discese con loro, tornò a Nazaret e stava loro sottomesso. Sua madre serbava tutte queste cose nel suo cuore.", en: "Then he returned to Nazareth with them and was obedient to them. And his mother stored all these things in her heart." } },
          { number: 52, text: { it: "E <InsightLink insightId='jesus_temple_12'>Gesù cresceva in sapienza, in statura e in grazia davanti a Dio e agli uomini</InsightLink>.", en: "<InsightLink insightId='jesus_temple_12'>Jesus grew in wisdom and in stature and in favor with God and all the people</InsightLink>." } }
        ]
      }
    }
  }
];

export default nativityScenes;
