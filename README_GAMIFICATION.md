# 🎮 Corso Antincendio Livello 3 - Versione Gamificata

## 📦 Cosa Hai Ricevuto

**File Principali:**
- `index_gamification.html` → Homepage gamificata con mappa percorso e badge
- `gamification.js` → Logica badge, progresso, localStorage
- `quiz_stazione1.html` → Quiz esempio Stazione 1 (Triangolo Fuoco)
- `docente.html` → Pannello controllo per il docente
- `index.html` → Versione classica (senza gamification)

**File Contenuti (già presenti nel progetto):**
- triangolo_fuoco.html
- tre_temperature_ennesg.html
- classificazione_fuochi_ennesg.html
- ... (tutti gli altri moduli)

---

## 🚀 Come Usare

### 1. **Per il Docente:**

Apri `index_gamification.html` - questa è la nuova homepage gamificata.

**Caratteristiche:**
- ✅ Mappa visuale del percorso con 10 stazioni
- ✅ Barra progresso che si aggiorna automaticamente
- ✅ Sistema badge: 🥇 Oro (90%+), 🥈 Argento (70-89%), 🥉 Bronzo (50-69%)
- ✅ Statistiche: quiz completati, punteggio medio, livello raggiunto
- ✅ Quiz OPZIONALI per ogni stazione

### 2. **Per gli Studenti:**

Gli studenti aprono `index_gamification.html` e vedono:
1. La loro barra di progresso (0% all'inizio)
2. Le 10 stazioni del corso
3. Per ogni stazione 2 pulsanti:
   - 📖 "Vai alla Stazione" → Materiale teorico
   - ✏️ "Fai il Quiz" → Quiz opzionale

---

## 🎯 Come Funziona la Gamification

### Sistema NON Bloccante:
- ✅ **Tutte le stazioni sono sempre accessibili**
- ✅ I quiz sono **completamente opzionali**
- ✅ Il corso procede al **ritmo del docente**
- ✅ Non si perdono ore sulle 16 obbligatorie

### Come Usare i Quiz:

**Opzione A - Durante le Pause:**
```
09:00-10:30 → Lezione Stazioni 1-2
10:30-10:45 → PAUSA (chi vuole fa quiz S1-2)
10:45-13:00 → Continui con la lezione
```

**Opzione B - Fine Giornata:**
```
16:30-17:00 → Tempo libero per quiz del giorno
```

**Opzione C - Quiz Collettivo:**
```
Proietti un quiz e lo fate insieme come Kahoot
```

---

## 📊 Pannello Docente

Apri `docente.html` per vedere:
- 💡 Suggerimenti didattici per ogni stazione
- 📅 Piano lezioni suggerito (16 ore)
- ⚙️ Pulsante reset progresso
- 💬 FAQ docente

---

## 🛠️ File Mancanti da Creare

**Ho creato solo il Quiz Stazione 1 come esempio.**

Per completare, devi creare (o ti aiuto a creare):
- `quiz_stazione2.html` → Quiz Tre Temperature
- `quiz_stazione3.html` → Quiz Classificazione Fuochi
- `quiz_stazione4.html` → Quiz REI
- `quiz_stazione5.html` → Quiz Vie di Fuga
- `quiz_stazione6.html` → Quiz Estintori
- `quiz_stazione7.html` → Quiz Idranti
- `quiz_stazione8.html` → Quiz Sistemi Innovativi
- `quiz_stazione9.html` → Quiz EVAC
- `quiz_stazione10.html` → Quiz Gestione Emergenze

**Sono tutti identici nella struttura a `quiz_stazione1.html`, cambiano solo le domande!**

---

## ✅ Test Giovedì Prossimo

### Setup Rapido:

1. Carica tutti i file su GitHub (o server)
2. Condividi il link di `index_gamification.html` con gli studenti
3. Osserva come reagiscono alla gamification

### Cosa Osservare:

- ❓ Gli studenti sono più motivati?
- ❓ I quiz li aiutano a capire meglio?
- ❓ Rallenta il corso o lo rende più fluido?
- ❓ Serve complicare con più interazioni?

### Se Funziona Bene:
→ Prossima volta creiamo i 9 quiz mancanti
→ Possiamo aggiungere più interazioni (drag&drop, simulazioni, etc.)

### Se è Troppo Complesso:
→ Torni a `index.html` (versione classica)
→ Mantieni solo la mappa visuale senza quiz

---

## 💾 Come Funziona il Salvataggio

I dati sono salvati nel **localStorage del browser** dello studente:
- ✅ Gratis, nessun server necessario
- ✅ Funziona offline
- ❌ Si perde se cambi browser/device
- ❌ Non traccia centralmente

Se in futuro serve tracciamento centrale → possiamo aggiungere Firebase/Supabase

---

## 🔧 Personalizzazione Rapida

### Cambiare Colori:
Apri `index_gamification.html` e modifica:
```css
background: #1E4BA0  → Cambia colore blu
background: #FFA500  → Cambia colore arancione
```

### Modificare Quiz:
Apri `quiz_stazione1.html` e cambia:
- Le domande (tag `<p>`)
- Le risposte (tag `<label>`)
- Le risposte corrette (oggetto `risposteCorrette`)

---

## 📞 Supporto

Dopo il test di giovedì:
- ✅ Dimmi cosa funziona
- ✅ Dimmi cosa migliorare
- ✅ Decidiamo se completare o semplificare

**Buon test! 🚀**

---

*EnneSG - Il Partner per la Tua Crescita*
