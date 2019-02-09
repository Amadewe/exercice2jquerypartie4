$(function(){
  $('#button').click(function(){
    // La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.
    var firstNotes = parseInt($('#first').val());
    var secondNotes = parseInt($('#second').val());
    var thirdNotes = parseInt($('#third').val());
    var fourthNotes = parseInt($('#fourth').val());
    var fifthNotes = parseInt($('#fifth').val());

    // Calculer sa moyenne
    var additionNotes = firstNotes + secondNotes + thirdNotes + fourthNotes + fifthNotes;
    var result = Math.round(additionNotes / 5);
    console.log(firstNotes);
    console.log(secondNotes);
    console.log(thirdNotes);
    console.log(fourthNotes);
    console.log(fourthNotes);
    console.log(additionNotes);
    //  ma regex
    var regex = /^[0-9]$|^1[0-9]$|^2[0]$/;
    // regex avec nombre à virgule (qui ne sert à rien içi car il y a parseInt qui renvoie un entier) = /^[0-9][.][0-9]$|^1[0-9][.][0-9]?$|^2[0]$/;

    // déterminer son appréciation
    // <= inférieur ou égal
    // >= supérieur ou égal
  if ((regex.test(firstNotes) != true) || (regex.test(secondNotes) != true) || (regex.test(thirdNotes) != true) || (regex.test(fourthNotes) != true) || (regex.test(fifthNotes) != true)){
     alert ('Merci de bien vouloir rentrer des notes entre 0 et 20 !');
    // result est supérieure ou égale à 0 et inférieure à 10
  } else if(result >= 0 && result < 10){
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
    } else {
      alert('tu as ' +result + ' de moyenne, ton appréciation est : "Excellent"');
    }
  });
});
