/*
Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const { createApp } = Vue;

  createApp({
    data() {
      return {
        title: 'HELLO WORLD',
        immagine: 'img/unsplash-map.jpg',
        miaClasse: 'content'
      }
    }
  }).mount('#myapp')