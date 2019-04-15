/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var time =12560

var hours=(time - (time % 3600))/3600;

var secRem = time - hours * 3600;

var min = (secRem - (secRem % 60)) / 60;

var sec = secRem - min * 60;

console.log(time + ' secondi sono ' + hours + ' ore, ' + min + ' minuti e ' + sec + ' secondi.');

console.log(`${time} secondi sono ${hours} ore, ${min} minuti e ${sec} secondi.`);
