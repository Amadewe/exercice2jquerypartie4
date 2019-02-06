$(function(){
  $('#button').click(function(){
    // La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.
var firstNotes = parseInt($('#first').val());
var secondNotes = parseInt($('#second').val());
var thirdNotes = parseInt($('#third').val());
var fourthNotes = parseInt($('#fourth').val());
var fifthNotes = parseInt($('#fifth').val());

var regex = /^[0-9]{1,2}$/;
// Calculer sa moyenne
var additionNotes = firstNotes + secondNotes + thirdNotes + fourthNotes + fifthNotes;
var result = (additionNotes) / 5;
console.log(regex);

// déterminer son appréciation
// <= inférieur ou égal
// >= supérieur ou égal

// result est supérieure ou égale à 0 et inférieure à 10
if(result >= 0 && result < 10){
  alert('tu as ' +result + ' de moyenne, ton appréciation est : "En dessous de la moyenne"');
// result supérieure ou égale à 10 et inférieure à 13
} else if (result >= 10 && result  < 13){
  alert('tu as ' +result + ' de moyenne, ton appréciation est : "Moyen"');
  // supérieure ou égale à 13 et inférieure à 16
} else if (result >= 13 && result < 16) {
  alert('tu as ' +result + ' de moyenne, ton appréciation est : "Bien"');
  // supérieure ou égale à 16 et inférieure à 20
} else if (result >= 16 && result < 20) {
  alert('tu as ' +result + ' de moyenne, ton appréciation est : "Très bien"');
} else if (result == 20) {
  alert('tu as ' +result + ' de moyenne, ton appréciation est : "Excellent"');
} else {
  alert('merci de rentrer que des chiffres entre 0 et 20');
}
  });
});
