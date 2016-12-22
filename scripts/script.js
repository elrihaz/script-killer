$(document).ready(function () {

  // Par défaut : affiche la page d'accueil ds le div "main"
  $("#main").load("html/accueil.html");

  // Clic sur le menu
  // Mise à jour du theme actif ds le menu
  $('ul li').click(function () {
    $('ul li').removeClass("active"); // - active à tous
    $(this).addClass("active"); // + active à celle cliquée
  });
  // chargement du contenu html dans main et de la banniere du thème choisi
  // accueil
  $('#SK').click(function () {
    $("#main").load("html/accueil.html"); // contenu
    // - toutes les ban
    $('#banniere').removeClass("ban-bienvenue");
    $('#banniere').removeClass("ban-croque");
    $('#banniere').removeClass("ban-collabo");
    $('#banniere').removeClass("ban-audio");
    $('#banniere').addClass("ban-accueil"); // + ban-accueil
  });
  // bienvenue la chance
  $('#bienvenue').click(function () {
    $("#main").load("html/bienvenuelachance.html");
    // - toutes les ban
    $('#banniere').removeClass("ban-accueil");
    $('#banniere').removeClass("ban-croque");
    $('#banniere').removeClass("ban-collabo");
    $('#banniere').removeClass("ban-audio");
    $('#banniere').addClass("ban-bienvenue"); // + ban-bienvenue
  });
  // croque-meurtre
  $('#croque').click(function () {
    $("#main").load("html/croque-meurtre.html");
    // - toutes les ban
    $('#banniere').removeClass("ban-accueil");
    $('#banniere').removeClass("ban-bienvenue");
    $('#banniere').removeClass("ban-collabo");
    $('#banniere').removeClass("ban-audio");
    $('#banniere').addClass("ban-croque"); // + ban-croque
  });
  // collaborations
  $('#collabo').click(function () {
    $("#main").load("html/collaborations.html");
    // - toutes les ban
    $('#banniere').removeClass("ban-accueil");
    $('#banniere').removeClass("ban-bienvenue");
    $('#banniere').removeClass("ban-croque");
    $('#banniere').removeClass("ban-audio");
    $('#banniere').addClass("ban-collabo"); // + ban-collabo
  });
  // audio-connaissances
  $('#audio').click(function () {
    $("#main").load("html/audioconnaissances.html");
    // - toutes les ban
    $('#banniere').removeClass("ban-accueil");
    $('#banniere').removeClass("ban-bienvenue");
    $('#banniere').removeClass("ban-croque");
    $('#banniere').removeClass("ban-collabo");
    $('#banniere').addClass("ban-audio"); // + ban-audio
  });
});
