$(document).ready(function () {

  // Par défaut : affiche la présentation ds le div "main"
  $("#main").load("html/EmmanuelLautréamont.html");

  // Clic sur le menu
  $('ul li').click(function(){
    // Affiche le thème cliqué ds le div "page"
    var lien=$(this).text(); // recup val de li
    lien = "html/" + lien.replace(/\s+/g, '') + ".html"; // suppr des espaces et ajout de .html et repertoire
    $("#main").load(lien);
    // Mise à jour du theme actif ds le menu
    $('ul li').removeClass("active");
    $(this).addClass("active");
  });
});
