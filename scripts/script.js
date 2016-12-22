$(document).ready(function () {

  // Par défaut : affiche la page d'accueil ds le div "main"
  $("#main").load("html/accueil.html");

  // Clic sur le menu
  // Mise à jour du theme actif ds le menu
  $('ul li').click(function () {
    $('ul li').removeClass("active"); // - active à tous
    $(this).addClass("active"); // + active à celle cliquée
  });
  // chargement du contenu html du thème dans main
  // accueil
  $('#SK').click(function () {
    $("#main").load("html/accueil.html");
  });
  // bienvenue la chance
  $('#bienvenue').click(function () {
    $("#main").load("html/bienvenuelachance.html");
  });
  // croque-meurtre
  $('#croque').click(function () {
    $("#main").load("html/croque-meurtre.html");
  });
  // collaborations
  $('#collabo').click(function () {
    $("#main").load("html/collaborations.html");
  });
  // audio-connaissances
  $('#audio').click(function () {
    $("#main").load("html/audioconnaissances.html");
  });
});
