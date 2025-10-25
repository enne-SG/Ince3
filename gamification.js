// ============================================
// GAMIFICATION.JS - Sistema Badge e Progresso
// Corso Addetti Antincendio Livello 3
// EnneSG - 2025
// ============================================

// Configurazione stazioni del corso
const STAZIONI = [
    { id: 1, nome: "Triangolo del Fuoco", file: "triangolo_fuoco.html", quiz: "quiz_stazione1.html" },
    { id: 2, nome: "Le Tre Temperature", file: "tre_temperature_ennesg.html", quiz: "quiz_stazione2.html" },
    { id: 3, nome: "Classificazione Fuochi", file: "classificazione_fuochi_ennesg.html", quiz: "quiz_stazione3.html" },
    { id: 4, nome: "Resistenza e Reazione al Fuoco", file: "resistenza_reazione_fuoco_ennesg.html", quiz: "quiz_stazione4.html" },
    { id: 5, nome: "Vie di Fuga e Illuminazione", file: "vie_fuga_illuminazione_ennesg.html", quiz: "quiz_stazione5.html" },
    { id: 6, nome: "Tipologie di Estintori", file: "tipi_estintori_completo_ennesg.html", quiz: "quiz_stazione6.html" },
    { id: 7, nome: "Idranti e Naspi", file: "idranti_antincendio_ennesg.html", quiz: "quiz_stazione7.html" },
    { id: 8, nome: "Sistemi Spegnimento Innovativi", file: "sistemi_spegnimento_innovativi_ennesg.html", quiz: "quiz_stazione8.html" },
    { id: 9, nome: "Rivelazione Incendi e EVAC", file: "rivelazione_incendi_evac_ennesg.html", quiz: "quiz_stazione9.html" },
    { id: 10, nome: "Gestione Emergenze", file: "gestione_emergenze_evac_livello3_ennesg.html", quiz: "quiz_stazione10.html" }
];

// Inizializza localStorage se non esiste
function inizializzaProgresso() {
    if (!localStorage.getItem('progressoCorso')) {
        const progressoIniziale = {
            stazioniVisitate: [],
            quizCompletati: {},
            badge: [],
            punteggioTotale: 0,
            dataInizio: new Date().toISOString()
        };
        localStorage.setItem('progressoCorso', JSON.stringify(progressoIniziale));
    }
}

// Ottieni progresso corrente
function getProgresso() {
    inizializzaProgresso();
    return JSON.parse(localStorage.getItem('progressoCorso'));
}

// Salva progresso
function salvaProgresso(progresso) {
    localStorage.setItem('progressoCorso', JSON.stringify(progresso));
}

// Segna stazione come visitata
function visitaStazione(stazioneId) {
    const progresso = getProgresso();
    if (!progresso.stazioniVisitate.includes(stazioneId)) {
        progresso.stazioniVisitate.push(stazioneId);
        salvaProgresso(progresso);
    }
}

// Registra completamento quiz
function completaQuiz(stazioneId, punteggio) {
    const progresso = getProgresso();
    
    progresso.quizCompletati[stazioneId] = {
        punteggio: punteggio,
        data: new Date().toISOString()
    };
    
    let badge = null;
    if (punteggio >= 90) {
        badge = { tipo: 'oro', stazione: stazioneId, nome: STAZIONI[stazioneId-1].nome };
    } else if (punteggio >= 70) {
        badge = { tipo: 'argento', stazione: stazioneId, nome: STAZIONI[stazioneId-1].nome };
    } else if (punteggio >= 50) {
        badge = { tipo: 'bronzo', stazione: stazioneId, nome: STAZIONI[stazioneId-1].nome };
    }
    
    if (badge) {
        progresso.badge = progresso.badge.filter(b => b.stazione !== stazioneId);
        progresso.badge.push(badge);
    }
    
    progresso.punteggioTotale = calcolaPunteggioTotale(progresso);
    salvaProgresso(progresso);
    return badge;
}

// Calcola punteggio totale
function calcolaPunteggioTotale(progresso) {
    let totale = 0;
    Object.values(progresso.quizCompletati).forEach(quiz => {
        totale += quiz.punteggio;
    });
    return Math.round(totale / STAZIONI.length);
}

// Ottieni statistiche
function getStatistiche() {
    const progresso = getProgresso();
    const numQuizCompletati = Object.keys(progresso.quizCompletati).length;
    const percentualeCompletamento = Math.round((numQuizCompletati / STAZIONI.length) * 100);
    
    const badgeOro = progresso.badge.filter(b => b.tipo === 'oro').length;
    const badgeArgento = progresso.badge.filter(b => b.tipo === 'argento').length;
    const badgeBronzo = progresso.badge.filter(b => b.tipo === 'bronzo').length;
    
    let livello = "Principiante";
    if (percentualeCompletamento === 100 && badgeOro >= 8) {
        livello = "Esperto Master";
    } else if (percentualeCompletamento === 100 && badgeOro >= 5) {
        livello = "Addetto Esperto";
    } else if (percentualeCompletamento >= 80) {
        livello = "Addetto Qualificato";
    } else if (percentualeCompletamento >= 50) {
        livello = "Addetto in Formazione";
    }
    
    return {
        stazioniVisitate: progresso.stazioniVisitate.length,
        totalStazioni: STAZIONI.length,
        quizCompletati: numQuizCompletati,
        percentualeCompletamento: percentualeCompletamento,
        punteggioMedio: progresso.punteggioTotale,
        badgeOro: badgeOro,
        badgeArgento: badgeArgento,
        badgeBronzo: badgeBronzo,
        totaleBadge: progresso.badge.length,
        livello: livello
    };
}

// Reset progresso
function resetProgresso() {
    if (confirm('⚠️ ATTENZIONE: Vuoi davvero cancellare tutto il progresso?')) {
        localStorage.removeItem('progressoCorso');
        inizializzaProgresso();
        alert('✅ Progresso resettato!');
        location.reload();
    }
}

// Esporta dati
function esportaProgresso() {
    const progresso = getProgresso();
    const stats = getStatistiche();
    
    const report = {
        dataExport: new Date().toISOString(),
        statistiche: stats,
        dettaglio: progresso
    };
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "report_corso.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// Badge emoji
function getBadgeEmoji(tipo) {
    switch(tipo) {
        case 'oro': return '🥇';
        case 'argento': return '🥈';
        case 'bronzo': return '🥉';
        default: return '⭐';
    }
}

// Aggiorna UI homepage
function aggiornaUIHomepage() {
    const stats = getStatistiche();
    const progresso = getProgresso();
    
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = stats.percentualeCompletamento + '%';
        progressBar.textContent = stats.percentualeCompletamento + '%';
    }
    
    if (document.getElementById('stazioni-completate'))
        document.getElementById('stazioni-completate').textContent = `${stats.quizCompletati}/${stats.totalStazioni}`;
    if (document.getElementById('punteggio-medio'))
        document.getElementById('punteggio-medio').textContent = stats.punteggioMedio;
    if (document.getElementById('livello-utente'))
        document.getElementById('livello-utente').textContent = stats.livello;
    
    const badgeDisplay = document.getElementById('badge-display');
    if (badgeDisplay) {
        let badgeHTML = '';
        if (progresso.badge.length === 0) {
            badgeHTML = '<p style="color: #999; font-size: 0.9em;">Completa i quiz per guadagnare badge!</p>';
        } else {
            progresso.badge.forEach(badge => {
                badgeHTML += `<span class="badge-item" title="${badge.nome}">${getBadgeEmoji(badge.tipo)}</span> `;
            });
        }
        badgeDisplay.innerHTML = badgeHTML;
    }
    
    STAZIONI.forEach(stazione => {
        const card = document.getElementById(`stazione-${stazione.id}`);
        if (card) {
            const quizCompletato = progresso.quizCompletati[stazione.id];
            const badge = progresso.badge.find(b => b.stazione === stazione.id);
            
            if (quizCompletato) {
                card.classList.add('completata');
                const badgeIcon = card.querySelector('.badge-icon');
                if (badgeIcon && badge) {
                    badgeIcon.textContent = getBadgeEmoji(badge.tipo);
                    badgeIcon.style.display = 'inline';
                }
            }
        }
    });
}

// Init
document.addEventListener('DOMContentLoaded', function() {
    inizializzaProgresso();
    if (document.getElementById('progress-bar')) {
        aggiornaUIHomepage();
    }
});

// Funzione per quiz
function inviaQuiz(stazioneId, risposteCorrette, risposteTotali) {
    const punteggio = Math.round((risposteCorrette / risposteTotali) * 100);
    const badge = completaQuiz(stazioneId, punteggio);
    
    let messaggio = `✅ Quiz completato!\n\n`;
    messaggio += `📊 Punteggio: ${punteggio}%\n`;
    messaggio += `✓ Risposte corrette: ${risposteCorrette}/${risposteTotali}\n\n`;
    
    if (badge) {
        messaggio += `🎉 Hai guadagnato il badge ${getBadgeEmoji(badge.tipo)}!\n`;
    } else if (punteggio < 50) {
        messaggio += `⚠️ Punteggio insufficiente. Ripassa il materiale!`;
    }
    
    alert(messaggio);
    window.location.href = 'index_gamification.html';
}
