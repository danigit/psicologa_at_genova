
//adds the content in the main page when the button Chi Sono is pressed
var aboutMe = '<div class="container">'
    + '<div class="row">'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center display-4 page-title philosopher-font blue-text">'
    + 'Profilo professionale'
    + '</div></div>'
    + '<div class="row">'
    + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font font-large">'
    + '<p><b><i>&lt;&lt;Perché hai deciso di fare la psicologa?&gt;&gt;    &lt;&lt;Per capire come funziona la mente e aiutare le persone!&gt;&gt; </i></b></p><br>'
    + "<h2 class='d-inline' style='font-family: Philosopher'>H</h2>"
    + "<p class='d-inline'>o sempre avuto una grande curiosità verso tutto ciò che riguarda la psiche: "
    + "trovare le risposte alle domande su come funziona la mente, perché facciamo quello che facciamo e come "
    + "possiamo smettere di ripetere quello che non ci fa stare bene,"
    + " comprendere le dinamiche che regolano (e dis-regolano) le emozioni, i pensieri, "
    + "la comunicazione, le disfunzioni e le psicopatologie.</p><br>"

    + "<p>La mia preparazione inizia con la collaborazione alla cattedra di Psicologia Dinamica dell\'Università di Genova: "
    + "partecipando a ricerche sulla <b>genitorialità adottiva</b>, sulla <b>psicologia di coppia</b> "
    + "(argomento della mia tesi di laurea dal titolo: “Attaccamento e Adattamento Diadico: una ricerca empirica”), "
    + "sulla <b>psiconcologia</b>, sono entrata a contatto con realtà psicologiche complesse, a volte dolorose, a volte conflittuali, "
    + "sempre intense e arricchenti.</p><br>"

    + "<p>Ho svolto i tirocini formativi presso l\'ASL 3 Genovese: al Centro Diurno \"Le Peschiere\" per l\'accoglienza di <b>pazienti psichiatrici</b>; "
    + "al Laboratorio dei Conflitti, per la mediazione nelle <b>coppie in fase di separazione o divorzio</b> in presenza di figli minori; "
    + "attualmente collaboro con il Centro Adozioni e Affidi, in qualità di psicologa specializzanda in psicoterapia, per la valutazione "
    + "dell\'idoneità delle famiglie all\'accoglienza di un minore, sostegno alla <b>genitorialità adottiva e affidataria</b>, sostegno psicologico "
    + "a minori e adolescenti adottati e loro famiglie, situazioni di trauma, abuso e maltrattamento. Contemporaneamente, ho seguito "
    + "corsi avanzati sull\'adozione nazionale e internazionale, sul <b>maltrattamento e l\'abuso nell\'infanzia</b>, sull\'utilizzo dei <b>test grafici proiettivi</b>, "
    + "sulle tecniche di <b>rilassamento psico-corporeo</b>, <b>training autogeno</b>, <b>visualizzazione guidata</b>, <b>tecniche induttive e immaginative</b>.</p><br>"

    + "<p>La mia formazione è proseguita con la frequenza della Scuola di <b>Specializzazione in Psicoterapia</b> (ITAT – Torino) ad orientamento <b>Analitico-Transazionale</b>, "
    + "grazie alla quale ho imparato <b>tecniche cognitive, comportamentali, psicodinamiche, relazionali e gestaltiche</b> per affrontare le sfide"
    + "e gli eventi ai quali la vita ci espone: nel mio studio presso il <a href='https://www.genovapsicologia.it/' target='_blank' style='color: #0099FF'>Centro di Psicoterapia 2.0</a> seguo adolescenti e adulti nell\'accompagnamento "
    + "in <b>periodi difficili della vita</b> (lutti, separazioni, malattia propria o di una persona cara, ecc.), nell\'approfondimento della propria storia, "
    + "nel disvelamento del proprio <b>\"copione\" psicologico</b>, e nell\'affrontare percorsi riabilitativi rispetto a disturbi psicologici complessi come <b>ansia</b>, "
    + "<b>depressione, attacchi di panico, fobie, disturbi alimentari, disturbi relazionali</b>, ecc.; mi sono specializzata sul trattamento del <b>trauma</b> "
    + "acquisendo la certificazione <b>EMDR di I e II livello</b> e frequentando regolarmente corsi di aggiornamento.</p><br>"

    + "<p>Quello che ho osservato è che le menti di tutte le persone funzionano complessivamente in modo simile, ma <b>sono le differenze che ci rendono unici</b>: "
    + "l\’insieme delle esperienze personali, il modo in cui sono state elaborate, gli eventi di vita, le nostre risorse innate o apprese e le nostre fragilità, "
    + "rendono ogni persona unica e irripetibile. Di conseguenza, \“capire come funziona la mente\” è riduttivo, e insufficiente a comprendere e aiutare una persona. "
    + "I suoi <b>sintomi</b> raccontano una storia che sarà differente dagli stessi sintomi presentati da un\’altra persona, e andranno capiti e trattati in modo diverso. "
    + "Per questo ogni terapia verrà \"cucita\" su quella particolare persona: la base sarà sempre l\'accettazione e <b>l\’assenza di giudizio</b>, "
    + "le tecniche terapeutiche verranno scelte e combinate in base alle caratteristiche e peculiarità dell\’individuo e del problema che porta.</p><br>"

    + "<b><i>Oggi, alla domanda &lt;&lt;Perché fai la psicologa?&gt;&gt; rispondo: &lt;&lt;Per l'esperienza unica, emozionante, di accompagnare le persone nella scoperta di se stesse&gt;&gt;</i></b><br><br>"
    + "<hr class='horizontal-line open-font'><br><p class='bold-text'>Ricevo su appuntamento a Genova presso il mio studio nel Centro di Psicoterapia 2.0 situato in Via XXV Aprile 8/6.</p><br>"
    + '</div> </div>'
    + '</div>';

//adds the content in the main page when the button Servizi is pressed
function addServices(){
    var services = '<div id="services">'
        + '<div class="container">'
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="left-column">'
        + '<div class="row services">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center display-4 page-title center-block">'
        + 'Attività professionale<br>'
        + '</div> </div>'
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font">'
        + "<h2 class='d-inline' style='font-family: Philosopher'>N</h2>ella mia pratica clinica mi occupo di adolescenti, adulti e coppie."
        + "<br><br>In particolare mi dedico ai seguenti ambiti:"
        + "<ul class='activity-list open-font'>"
        + "<li><b>diagnosi</b></li>"
        + "<li>orientamento e sostegno per chi presenta un <b>malessere</b> noto o al quale non riesce a dare un nome</li>"
        + "<li>percorsi di riabilitazione per <b>pazienti psichiatrici</b> o loro <b>familiari</b></li>"
        + "<li>problematiche <b>adolescenziali</b></li>"
        + "<li>relazione di <b>coppia</b></li>"
        + "<li>sostegno alla <b>genitorialità</b> naturale, adottiva, affidataria</li>"
        + "<li>sostegno nell’elaborazione del <b>lutto</b></li>"
        + "<li>elaborazione <b>traumi</b> passati o recenti</li>"
        + "<li>percorsi per la <b>egolazione delle emozioni</b> (Es. gestione della rabbia, di stati ansiosi, ecc.)</li>"
        + "<li>percorsi per l’aumento e il mantenimento di una buona <b>autostima</b></li>"
        + "</ul>"
        + "Considerando che la scelta di intraprendere un percorso psicologico può cambiare la vita,"
        + " <b>il primo colloquio è gratuito</b>, per conoscerci reciprocamente e valutare, in totale serenità,"
        + " se c’è la sintonia giusta e necessaria per cominciare a lavorare insieme.<br><br>Ogni seduta successiva avrà un costo di <b>60€</b> per i colloqui individuali e <b>80€</b> per i colloqui rivolti alle coppie.<br><br><br>"
        + "<hr class='horizontal-line open-font'><br><b>N.B.</b> Le fatture relative alle prestazioni psicologiche sono fatture sanitarie a tutti gli effetti e, come tali, sono detraibili al momento della dichiarazione dei redditi nella misura del 19%.<br><br>"
        + '</div> </div>';
    $('#carousel-column').append(services).hide().fadeIn(200);
}

//adds the content in the main page when the button Contactis pressed
function addContact(){
    var contact = '<div id="contact">'
        + '<div class="container">'
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="left-column">'
        + '<div class="card-block" style="padding-top: 0px">'
        + '<div class="row services">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center display-4 page-title center-block" style="color: #0099FF;">'
        + 'Come e dove trovarmi<br>'
        + '</div> </div>'
        + '<div class="text-center open-font">'
        + '<h4>Per ogni dubbio, richiesta informazioni, o per fissare un primo colloquio gratuito, compila il form qui sotto, ti risponderò al più presto:</h4>'
        + '<hr class="mt-2 mb-2">'
        + '</div>'
        + '<p class="open-font" id="forced-fields">I campi contrassegnati con l\'asterisco (*) sono obbligatori.</p><br>'
        + '<form id="myForm" action="#" method="post" name="contact">'
        + '<div class="md-form">'
        + '<i class="fa fa-user prefix"></i>'
        + '<input type="text" id="form1" class="form-control" name="nome">'
        + '<label for="form1">Nome*</label>'
        + '</div>'
        + '<div class="md-form">'
        + '<i class="fa fa-envelope prefix"></i>'
        + '<input type="text" id="form2" class="form-control" name="email">'
        + '<label for="form2">E-mail*</label>'
        + '</div>'
        + '<div class="md-form">'
        + '<i class="fa fa-tag prefix"></i>'
        + '<input type="text" id="form3" class="form-control" name="oggetto">'
        + '<label for="form3">Oggetto</label>'
        + '</div>'
        + '<div class="md-form">'
        + '<i class="fa fa-pencil prefix"></i>'
        + '<textarea type="text" id="form4" class="md-textarea" name="contenuto"></textarea>'
        + '<label for="form4">Contenuto*</label>'
        + '</div>'
        + '</form>'
        + '<div class="text-center">'
        + '<button class="btn btn-default contact-button" id="send-mail">Invia</button>'
        + '<div class="call"><br>'
        + '<h4><p class="open-font">Oppure invia un SMS e ti richiamerò non appena mi sarà possibile:<br>'
        + '<span><i class="fa fa-phone"> </i></span> 333 87 37 231</p></h4>'
        + '</div> </div> </div>'
        + '<div class="row">'
        + '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 map-ontainer">'
        + '<div id="map" class="mapClass">'
        + '</div> </div> </div>'
        + '</div> </div> </div> </div>';
    $('#carousel-column').append(contact).hide().fadeIn(200);
}

function addStudioImage() {
    return '<div id="studio"'
        + '<img src="../img/download/simo_small.jpg">'
        + '<img src="../img/download/simo_small.jpg"><br>'
        + '<img src="../img/download/simo_small.jpg">'
        + '<img src="../img/download/simo_small.jpg"><hr><b>Il mio studio si trova qui</b>'
        + '</div>';
}

function addAnalisiTransazionale() {
    var analisiTransazionale = '<div class="top-margin-articles" id="analisi-transazionale">'
        + '<div class="container">'
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center analisi-transazionale-title display-4 page-title">'
        + '<p><h1>Analisi Transazionale</h1></p>'
        + '</div></div> '
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="analisi-image">'
        + '<img src="../img/download/psicoterapia_analitico_transazionale.jpg" style="border: 3px solid #0099FF;">'
        + '</div></div> '
        + '<div class="row" style="margin-top: 75px"> '
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font"> '
        + "<h2 class='d-inline' style='font-family: Philosopher'>L</h2>\’approccio Analitico Transazionale viene utilizzato nel trattamento di disturbi psicologici di ogni tipo, "
        + "essendo un metodo di psicoterapia <b>individuale</b>, di <b>coppia</b>, di <b>gruppo</b> e <b>familiare</b> di comprovata efficacia.<br><br>"
        + "Si tratta di una psicoterapia integrata, che attraverso l’utilizzo di tecniche <b>cognitive</b>, <b>comportamentali</b>, <b>gestaltiche</b> e <b>del profondo</b>, "
        + "può avere una durata <b>breve</b> (<b>risolvere un sintomo</b> o problema specifico, con l\’obiettivo di un cambiamento comportamentale e del suo "
        + "mantenimento nel tempo) o relativamente <b>più lunga</b> (in questo caso la terapia non è rivolta solo ad un sollievo dai sintomi, bensì alla "
        + "<b>ristrutturazione della personalità</b>). In ogni caso, paziente e psicologo valuteranno insieme e stabiliranno in accordo il piano terapeutico.<br><br>"
        + "Come funziona? Attraverso un linguaggio comprensibile e concreto, la persona diviene cosciente dei propri <b>schemi psicologici</b>, <b>emotivi</b>, "
        + "<b>di pensiero e di comportamento</b> (i propri <b>giochi</b> preferiti, il sistema di <b>copione</b>, l\’economia di <b>carezze</b> ecc.) e può decidere "
        + "consapevolmente di modificarli per raggiungere gli obiettivi di guarigione, di sviluppo o di miglioramento desiderati.<br><br>"
        + '</div></div>'
        + "<hr class='horizontal-line'>"
        + '<p>LINK</p>'
        + '<p><a href="http://www.aiat.it/" target="-_blank" style="color: #0099FF;">A.I.A.T</a></p>'
        + '<p><a href="http://www.eatanews.org/" target="_blank" style="color: #0099FF;">EATA</a></p>'
        + '</div> </div>'
        + '</div></div>';
    $('#carousel-column').append(analisiTransazionale);
}

function addEmdr() {
    var emdr = '<div class="top-margin-articles" id="emdr">'
        + '<div class="container">'
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center edmr-title display-4 page-title">'
        + '<p><h1>EMDR</h1></p>'
        + '</div></div> '
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="analisi-image">'
        + '<img src="../img/download/EMDR.jpg" style="border: 3px solid #0099FF;">'
        + '</div></div> '
        + '<div class="row" style="margin-top: 75px"> '
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font"> '
        + "<h2 class='d-inline' style='font-family: Philosopher'>L</h2>\’EMDR (Eye Movement Desensitization and Reprocessing, in italiano: Desensibilizzazione e Rielaborazione attraverso i Movimenti Oculari) è un metodo psicoterapico "
        + "strutturato che facilita il trattamento di diverse psicopatologie e problemi legati sia ad <b>eventi traumatici</b>, che a esperienze più comuni ma <b>emotivamente stressanti</b>.<br><br>"
        + "È un approccio psicoterapico interattivo e standardizzato, scientificamente comprovato da più di 20 studi randomizzati controllati condotti su pazienti traumatizzati e documentato in"
        + " centinaia di pubblicazioni che ne riportano l\’efficacia nel trattamento di numerose psicopatologie inclusi la depressione, l\’ansia, le fobie, il lutto acuto, i sintomi somatici e le dipendenze.<br><br>"
        + "L\’Organizzazione Mondiale della Sanità nel 2013 ha riconosciuto l\’EMDR come trattamento d\’elezione (<i>evidence-based</i>) per i disturbi legati allo stress e a esperienze traumatiche.<br><br>"
        + "La terapia EMDR ha come base teorica il modello AIP (Adaptive Information Processing) che affronta i <b>ricordi non elaborati</b> che possono dare origine a molte disfunzioni. Numerosi"
        + " studi neurofisiologici hanno documentato i <b>rapidi effetti post-trattamento</b> EMDR.<br><br>"
        + '</div></div>'
        + "<hr class='horizontal-line'>"
        + '<p>LINK</p>'
        + '<p><a href="http://emdr.it/" target="_blank" style="color: #0099FF;">EMDR</a></p>'
        + '</div> </div>'
        + '</div></div>';
    $('#carousel-column').append(emdr);
}

function addTrainingAutogeno() {
    var trainingAutogeno = '<div class="top-margin-articles" id="training-autogeno">'
        + '<div class="container">'
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center training-autogeno-title display-4 page-title">'
        + '<p><h1>Training Autogeno</h1></p>'
        + '</div></div> '
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="analisi-image">'
        + '<img src="../img/download/training_autogeno.jpg" style="border: 3px solid #0099FF;">'
        + '</div></div> '
        + '<div class="row" style="margin-top: 75px"> '
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font"> '
        + "<h2 class='d-inline' style='font-family: Philosopher'>I</h2>l Training Autogeno è una tecnica di auto-distensione psicofisiologica, mirata alla gestione dello stress e delle emozioni, utile nel miglioramento del benessere, di performance "
        + "sportive, ma anche nel trattamento dei disturbi d\’ansia e psicosomatici. Si basa sull\’apprendimento (training) di una serie di esercizi di concentrazione psichica, e sul concetto di"
        + " \“autogenicità\”, cioè la capacità di indurre determinate modificazioni di funzioni involontarie a livello dell\’apparato respiratorio, dell\’apparato muscolare, del sistema cardiovascolare e del sistema neurovegetativo.<br><br>"
        + "Una volta sperimentata e appresa, tale tecnica può essere utilizzata autonomamente in qualsiasi momento di bisogno, al fine di alleviare stati di ansia e stress e recuperare energie e concentrazione.<br><br>"
        + '</div></div>'
        + "<hr class='horizontal-line'>"
        + '</div> </div>'
        + '</div></div>';
    $('#carousel-column').append(trainingAutogeno);
}

function addRilassamentoPsicoCorporeo() {
    var rilassamentoPsicoCorporeo = '<div id="rilassamento-psico-corporeo" style="margin-top: 60px;">'
        + '<div class="container">'
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center display-4 page-title">'
        + '<p><h1>Tecniche di rilassamento psico-corporeo</h1></p>'
        + '</div></div> '
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="analisi-image">'
        + '<img src="../img/download/psi_benessere.jpg" style="border: 3px solid #0099FF;">'
        + '</div></div> '
        + '<div class="row" style="margin-top: 75px"> '
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font"> '
        + "<h2 class='d-inline' style='font-family: Philosopher'>S</h2>pesso, sono proprio le persone che avrebbero maggior bisogno di lavorare con tecniche di rilassamento psico-corporeo (perché stressate o vittime di ansia e panico) che non si sentono a "
        + "loro agio nell\’usare queste tecniche, poiché credono che sia importante essere sempre vigili e in allerta per guardarsi da eventuali pericoli. Hanno paura di perdere il controllo e di lasciarsi andare.<br><br>"
        + "Ogni individuo, inoltre, attribuisce al termine rilassamento un significato assolutamente personale: un trattamento può essere ottimo per una persona ma risultare di difficile accettazione per un\’altra.<br><br>"
        + "Per questi motivi le tecniche di rilassamento che propongo sono molteplici, scelte accuratamente in base alle necessità, caratteristiche e desideri della persona:<br><br>"
        + '<ul class="activity-list">'
        + '<li><b>mindfulness</b> (tecnica meditativa che infonde un senso di rilassamento, pienezza e benessere, riduce l\’ansia, regola le emozioni)</li>'
        + '<li><b>osservazione guidata del respiro e tecniche di respirazione</b> (respirazione quadrata, diaframmatica, toracica, frenata, controllata “4-7-8” ecc.; le tecniche di respirazione risultano fondamentali nella gestione di disturbi d\’ansia e attacchi di panico)</li>'
        + '<li><b>rilassamento progressivo di Jacobson</b> (contrazione/decontrazione volontaria di fasci muscolari)</li>'
        + '<li><b>rilassamento frazionato di Vogt</b> (interessa l’apparato muscolare, vascolare e respiratorio, e favorisce la visualizzazione di immagini)</li>'
        + '<li><b>body scanner</b> (rilassamento progressivo mirato a facilitare un processo di consapevolezza delle percezioni che derivano da tutto il corpo)</li>'
        + '</ul>'
        + '<br><br><p class="open-font"><b style="color: #0099FF;">Obiettivo</b>: ristabilire un contatto sano di comunicazione mente-corpo per migliorare il benessere in generale o attivando un lavoro su problemi specifici.</b><br><br>'
        + '</div></div>'
        + "<hr class='horizontal-line'>"
        + '</div> </div>'
        + '</div></div>';
    $('#carousel-column').append(rilassamentoPsicoCorporeo);
}

function addTecnicheInduttive() {
    var tecnicheInduttive = '<div class="top-margin-articles" id="tecniche-induttive"">'
        + '<div class="container">'
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center display-4 page-title">'
        + '<p><h1>Tecnniche Induttive e Immaginative</h1></p>'
        + '</div></div> '
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="analisi-image">'
        + '<img src="../img/download/immagination.jpg" style="border: 3px solid #0099FF;">'
        + '</div></div> '
        + '<div class="row" style="margin-top: 75px"> '
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font"> '
        + "<h2 class='d-inline' style='font-family: Philosopher'>T</h2>ali tecniche mirano a riattivare la percezione e le risorse interiori orientando la mente al corpo e alle immagini interiori, stimolando la <b>creatività</b> e la <b>consapevolezza di sé</b>, delle proprie emozioni e delle proprie risorse.<br><br>"
        + "Nel creare un\’immagine, mnemonica o irreale, il cervello causa cambiamenti corporei concreti e cambiamenti comportamentali: in funzione del cambiamento desiderato sarà possibile costruire immagini e suggestioni ad hoc.<br><br>"
        + "Queste tecniche risultano essere utili per indurre dei cambiamenti:<br><br>"
        + '<ul class="activity-list" ">'
        + '<li>sull\'umore</li>'
        + '<li>sulla salute</li>'
        + '<li>per il successo professionale</li>'
        + '<li>per rafforzare la sicurezza di sé e l\'autostima</li>'
        + '<li>per rafforzare la memoria e la capacità di concentrazione</li>'
        + '<li>per visualizzare e risolvere problemi</li>'
        + '<li>per pensarsi in contesti e modi diversi</li>'
        + '<li>per accedere a risorse interne di cui non si è consapevoli</li>'
        + '</ul><br>'
        + 'Il <b>Sogno guidato</b> è uno stato mentale semi-ipnoide, a metà fra la veglia ed il sonno,  caratterizzato da rilassamento globale. <br>'
        + 'La guida del terapeuta è direttiva, e accompagna il paziente in modo preciso per costruire immagini e suggestioni in funzione dell\’obiettivo desiderato.<br><br> '
        + 'La <b>Visualizzazione Guidata</b> lascia più spazio al paziente nella produzione di immagini proprie, facendo emergere contenuti personali grazie ad un accompagnamento che lascia spazio alla fantasia e creatività spontanea della persona.<br><br>'
        + '</div></div>'
        + "<hr class='horizontal-line'>"
        + '</div> </div>'
        + '</div></div>';
    $('#carousel-column').append(tecnicheInduttive);
}

function addEventi() {
    var eventi = '<div id="analisi-transazionale">'
        + '<div class="container">'
        + '<div class="row" style="margin-bottom: 50px">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center display-4 page-title center-block">'
        + 'Eventi in programma'
        + '</div></div> '
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="analisi-image">'
        + '<img src="../img/download/prossimi_eventi.jpg" style="border: 3px solid #0099FF;">'
        + '</div></div> '
        + '<div class="row" style="margin-top: 75px"> '
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font"> '
        + "<h2 class='d-inline' style='font-family: Philosopher'>C</h2>onsiderate le numerose richieste pervenute, in autunno verranno riproposti gli incontri su <b>ansia</b> e <b>depressione</b>, arricchiti dalle osservazioni e dagli spunti forniti dai partecipanti all’edizione primaverile.<br><br>"
        + "Verranno proposti inoltre incontri su altri argomenti di interesse psicologico.<br>"
        + "A breve tutte le informazioni!<br><br>"
        + '</div></div>'
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center analisi-transazionale-title display-4 page-title">'
        + '<p><h1>Eventi passati</h1></p>'
        + '</div></div> '
        + '<div class="row" style="margin-top: 25px"> '
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12 open-font"> '
        + "<h2 class='d-inline' style='font-family: Philosopher'>Praticando la psicologia</h2><br><b>Incontri gratuiti</b> teorico-pratici sui temi dell\'ansia e della depressione<br><br>"
        + 'SABATO 3 MARZO 2018 - H 15:00<br>SABATO7 APRILE 2018 - H 15:00<br><br>'
        + '<div class="row">'
        + '<div class="col-12 col-lg-12 col-md-12 col-sm-12" id="analisi-image">'
        + '<img src="../img/download/praticando.jpg" style="border: 3px solid #0099FF;">'
        + '</div></div> <br><br>'
        + "Presso il <a href='http://www.genovapsicologia.it' target='_blank' style='color: #0099FF'><b>Centro di Psicoterapia 2.0</b></a> (Via XXV Aprile 8/6 – Genova), in collaborazione con la <a href='http://www.facebook.com/milviaspinettapsicologa/' target='_blank' style='color: #0099FF'><b>dott.ssa Milvia Spinetta</b></a>, vengono proposti al pubblico due incontri per conoscere, sfatare qualche mito, e cominciare ad affrontare i due disturbi più diffusi della nostra epoca: l\’<b>ansia</b> e la <b>depressione</b>.<br><br>"
        + "\“<b>La vita mi stressa!</b>\” – Conoscere e affrontare l\’ansia<br><br>"
        + 'SABATO 3 MARZO vi parlerò di cosa è l\’ansia dal punto di vista della psicologia clinica, vedremo che ruolo ha rispetto agli altri stati emotivi, conosceremo i vari disturbi d’ansia e l\’approccio alla cura attraverso l\’Analisi Transazionale.<br><br>'
        + 'Durante l\’incontro, per chi ne avrà piacere, verranno distribuiti test di autovalutazione relativi agli argomenti trattati e verrà proposta una breve esercitazione di mindfulness guidata per l\’osservazione delle proprie emozioni.<br><br>'
        + "\“<b>Uff... Che fatica la vita...</b>\” – Conoscere e affrontare la depressione<br><br>"
        + 'SABATO 7 APRILE la collega dott.ssa Spinetta affronterà il tema della depressione. Attraverso l’esemplificazione di un caso clinico verranno illustrati i processi psicologici che sottendono questo disturbo, e il modo in cui viene trattato attraverso la CBT.<br><br>'
        + 'Chi avrà piacere potrà presentare riflessioni personali su argomenti specifici introdotti dalla dottoressa per discutere e chiarirne alcuni aspetti, e compilare i test psicologici che verranno proposti.<br><br>'
        + '<p style="color: #0099FF">Considerato lo spazio limitato, è richista l\’iscrizione per mail (simona.bettoli@gmail.com) o sms (333 873.72.31), specificando la/le data/e cui si intende partecipare. Vi aspettiamo!</p>'
        + '</div></div>'
        + "<hr class='horizontal-line'>"
        + '</div> </div>'
        + '</div></div>';
    $('#carousel-column').append(eventi).hide().fadeIn(200);
}