$(document).ready(function () {

  // Par défaut : affiche la page d'accueil ds le div "main"
  $("#main").load("html/accueil.html");

  // Clic sur le menu

  // Mise à jour du theme actif ds le menu et - ban et fonds
  $('ul li').click(function () {
    $('ul li').removeClass("active"); // - active à tous
    $(this).addClass("active"); // + active à celle cliquée
    // - toutes les ban
    $('#banniere').removeClass("ban-accueil");
    $('#banniere').removeClass("ban-bienvenue");
    $('#banniere').removeClass("ban-croque");
    $('#banniere').removeClass("ban-collabo");
    $('#banniere').removeClass("ban-audio");
    // - tous les fonds
    $('#contenu').removeClass("fond-noir");
    $('#contenu').removeClass("fond-blanc");
    $('#contenu').removeClass("fond-gris");
  });


  // chargement du contenu html dans main et de la banniere du thème choisi

  // accueil
  $("#SK").click(function () {
    // contenu
    $("#main").load("html/accueil.html");
    // + ban-accueil
    $('#banniere').addClass("ban-accueil");
    // + fond blanc
    $('#contenu').addClass("fond-blanc");

  });

  // bienvenue la chance
  $('#bienvenue').click(function () {
    // contenu
    $("#main").load("html/bienvenuelachance.html");
    // + ban-bienvenue
    $('#banniere').addClass("ban-bienvenue");
    // + fond noir
    $('#contenu').addClass("fond-noir");
  });

  // croque-meurtre
  $('#croque').click(function () {
    // contenu
    $("#main").load("html/croque-meurtre.html");
    // + ban-croque
    $('#banniere').addClass("ban-croque");
    // + fond gris
    $('#contenu').addClass("fond-gris");
  });

  // collaborations
  $('#collabo').click(function () {
    // contenu
    $("#main").load("html/collaborations.html");
    // + ban-collabo
    $('#banniere').addClass("ban-collabo");
    // + fond blanc
    $('#contenu').addClass("fond-blanc");
  });

  // audio-connaissances
  $('#audio').click(function () {
    // contenu
    $("#main").load("html/audioconnaissances.html");
    // + ban-audio
    $('#banniere').addClass("ban-audio");
    // + fond blanc
    $('#contenu').addClass("fond-blanc");
  });
});
