const buttons = document.querySelectorAll(".toggle"); /*dichiariamo una costante che prende tutti i bottoni (SCOPRI DI PIU) con la classe toggle*/


if (buttons.length > 0) { /*SE CI SONO EFFETTIVAMENTE ELEMENTI NEL SITO TOGGLE*/
    buttons.forEach(button => { /*fai un foreach per ogni elemento di tipo button*/
        button.addEventListener("click", mostraTabella); /*all'interno del for aggiungiamo un evento al click, e invochiamo la funzione mostraTabella*/
    });
}


function mostraTabella(event) { /*il parametro è il click del bottone*/
  const btn = event.currentTarget;    //assegnamo alla costante btn l'elemento che ha generato l'evento, il currentTarget sta ad indicare l'elemento che ha generato l'evento (in questo caso il bottone cliccato)
  const divtabella = btn.nextElementSibling;   //assegnamo alla costante l'elemento subito dopo il bottone 

    divtabella.classList.toggle("show"); //aggiunge e toglie (copri e scopri menu a tendina) una classe all'array di classi del nostro div, gli viene aggiunta la classe show, che nel css va a sovrascrivere la regola max hight (inizializzata inizialmente a 0)

    if (divtabella.classList.contains("show")) {//se nella lista delle classi abbiamo una calsse show
    btn.innerText = "Scopri di più ▲"; //il testo del bottone è cosi, texcontent modifica il testo
    } else {
    btn.innerText = "Scopri di più ▼";//altrimenti è cosi
    }
}



// codice per il form di donazione
const formDonazione = document.getElementById("formDonazione"); //dichiariamo una costante dove assegnamo il form della donazione

if (formDonazione) { //controlliamo che siamo nel form della donazione
    formDonazione.addEventListener("submit", gestisciInvioDonazione);//aggiungiamo un evento 'invia' con la funzione gestisciInvioDonazione
}


function gestisciInvioDonazione(event) {/* parametro: l'evento generato al click del bottone*/

    event.preventDefault(); // impedisce che si aggiorni la pagina al click

    const importo = document.getElementById("donazione").value;

    const conferma = confirm("Confermi l'invio del modulo?"); //assegnamo ad una costante la scelta dell'utente quando viene chiesto se vuole inviare il modulo (ok o annulla)
    //confirm è una funzione predefinita che genera un alert, e assume un valore true o false a seconda da se hai scelto ok oppure annulla

    if (conferma) {

        document.getElementById("div_messaggio_donazione").innerText = "Grazie per aver donato " + importo + " euro!";

    } else {
        alert("Invio annullato.");//genera un altro alert
    }
}


// codice per il form di adozione
const formAdozione = document.getElementById("formAdozione");
if (formAdozione) {
    formAdozione.addEventListener("submit", gestisciInvioAdozione);
}

function gestisciInvioAdozione(event) {
    event.preventDefault(); // blocca l'invio automatico

    const conferma = confirm("Confermi l'invio del modulo di adozione?");

    if (conferma) {
        const divMessaggio = document.getElementById("div_messaggio_adozione").innerText="Grazie mille per aver scelto di adottare uno dei nostri amici a 4 zampe, la contatteremo a breve per farle sapere il risultato sull'indagine sull'idoneità";

    } else {
        alert("Invio annullato.");
    }
}


// codice per il form di iscrizione
const formIscrizione = document.getElementById("formIscrizione");

if (formIscrizione) {
    formIscrizione.addEventListener("submit", gestisciInvioIscrizione);
}

function gestisciInvioIscrizione(event) {
    event.preventDefault();

    const conferma = confirm("Confermi l'invio del modulo di iscrizione al volontariato?");

    if (conferma) {
        const nome = document.getElementById("nome").value;
        const cognome = document.getElementById("cognome").value;

        const divMessaggio = document.getElementById("div_messaggio_iscrizione").innerText="Grazie mille " + nome + " "+cognome + " per esserti iscritto al nostro programma di volontariato, ti invieremo una mail con tutti gli orari e le modalità dei corsi di formazione che dovrai seguire prima di unirti alla nostra fantastica squadra";

    } else {
        alert("Invio annullato.");
    }
}

//funzione reset per tutti i form
const btnReset = document.getElementById("btnReset");

if (btnReset) {
    btnReset.addEventListener("click", gestisciReset);
}

function gestisciReset(event) {
    
    const conferma = confirm("Sei sicuro di voler resettare il modulo?");

    if (!conferma) {
        event.preventDefault(); // blocca il reset
        alert("Reset annullato.");
    }
}

// --- AUTO-COMPILAZIONE CODICE IDENTIFICATIVO ---
const campoCodice = document.getElementById("codiceIdentificativo"); //assegna ad una costante la casella input dove verrà messo il codice identificativo

    if(campoCodice){//controlliamo che la casella di imput con id codiceidentificativo esista

    // prendo i parametri dell'URL
    const params = new URLSearchParams(window.location.search);//uso il costruttore predefinito per cercare all'interno della finestra i parametri url

    // leggo il parametro "id"
    const codice = params.get("id");//assegnamo alla costante codice il valore del parametro id contenuto nell'url (?id=....)

    // se l'id esiste, lo inserisco nella casella di imput
    if (codice) {
        campoCodice.value = codice;
    }

}