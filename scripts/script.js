//////////////////// Jquery document ready/////////////////

$(document).ready(function () {

  // Par défaut : affiche la page d'accueil ds le div "main"
  $("#main").load("html/accueil.html");


  // Clic sur le menu

  // Mise à jour du theme actif ds le menu et - ban et fonds
  $('ul li').click(function () {
    // - active à tous les elements du menu
    $('ul li').removeClass("active");
    // + active à celle cliquée
    $(this).addClass("active");
    // retour haut de page
    $('html, body').animate({
      scrollTop: 0
    }, 0);
    // - toutes les ban
    $('#banniere').removeClass("ban-accueil");
    $('#banniere').removeClass("ban-bienvenue");
    $('#banniere').removeClass("ban-croque");
    $('#banniere').removeClass("ban-collabo");
    $('#banniere').removeClass("ban-audio");
    // - tous les fonds
    $('#contenu').removeClass("fond-SK");
    $('#contenu').removeClass("fond-bienvenue");
    $('#contenu').removeClass("fond-croque");
    $('#contenu').removeClass("fond-collabo");
    $('#contenu').removeClass("fond-audio");
    // + invisible aux jimbotrons de l'accueil et aux remerciements du footer
    $('#SK-jimbos').addClass("invisible");
    $('#merci').addClass("invisible");
    // + smallFooter au footer
    $('footer').addClass("smallFooter");
  });


  // chargement du contenu html dans main et de la banniere du thème choisi

  // accueil
  $("#SK").click(function () {
    // contenu
    $("#main").load("html/accueil.html");
    // + ban-accueil
    $('#banniere').addClass("ban-accueil");
    // + fond blanc
    $('#contenu').addClass("fond-SK");
    // - invisible aux jimbotrons de l'accueil et aux remerciements du footer
    $('#SK-jimbos').removeClass("invisible");
    $('#merci').removeClass("invisible");
    // - smallFooter au footer
    $('footer').removeClass("smallFooter");
  });

  // bienvenue la chance
  $('#bienvenue').click(function () {
    // contenu
    $("#main").load("html/bienvenuelachance.html");
    // + ban-bienvenue
    $('#banniere').addClass("ban-bienvenue");
    // + fond noir
    $('#contenu').addClass("fond-bienvenue");
  });

  // croque-meurtre
  $('#croque').click(function () {
    // contenu
    $("#main").load("html/croque-meurtre.html");
    // + ban-croque
    $('#banniere').addClass("ban-croque");
    // + fond gris
    $('#contenu').addClass("fond-croque");
  });

   // autour des films
  $('#audio').click(function () {
    // contenu
    $("#main").load("html/audioconnaissances.html");
    // + ban-audio
    $('#banniere').addClass("ban-audio");
    // + fond blanc
    $('#contenu').addClass("fond-audio");
  });

  // collaborations
  $('#collabo').click(function () {
    // contenu
    $("#main").load("html/collaborations.html");
    // + ban-collabo
    $('#banniere').addClass("ban-collabo");
    // + fond blanc
    $('#contenu').addClass("fond-collabo");
  });


 // Clic sur les jimbotrons de l'accueil

  // Mise à jour du theme actif ds le menu et - ban et fonds
  $('#jimbo-bienvenue, #jimbo-croque, #jimbo-collabo').click(function () {
    // - active à tous les elements du menu
    $('ul li').removeClass("active");
    // retour haut de page
    $('html, body').animate({
      scrollTop: 0
    }, 0);
    // - toutes les ban
    $('#banniere').removeClass("ban-accueil");
    $('#banniere').removeClass("ban-bienvenue");
    $('#banniere').removeClass("ban-croque");
    $('#banniere').removeClass("ban-collabo");
    $('#banniere').removeClass("ban-audio");
    // - tous les fonds
    $('#contenu').removeClass("fond-SK");
    $('#contenu').removeClass("fond-bienvenue");
    $('#contenu').removeClass("fond-croque");
    $('#contenu').removeClass("fond-collabo");
    $('#contenu').removeClass("fond-audio");
    // + invisible aux jimbotrons de l'accueil et aux remerciements du footer
    $('#SK-jimbos').addClass("invisible");
    $('#merci').addClass("invisible");
    // + smallFooter au footer
    $('footer').addClass("smallFooter");
  });


  // chargement du contenu html dans main et de la banniere du thème choisi

  // bienvenue la chance
  $('#jimbo-bienvenue').click(function () {
    // contenu
    $("#main").load("html/bienvenuelachance.html");
    // + ban-bienvenue
    $('#banniere').addClass("ban-bienvenue");
    // + active au menu
    $("#bienvenue").addClass("active");
    // + fond noir
    $('#contenu').addClass("fond-bienvenue");
  });

  // croque-meurtre
  $('#jimbo-croque').click(function () {
    // contenu
    $("#main").load("html/croque-meurtre.html");
    // + ban-croque
    $('#banniere').addClass("ban-croque");
     // + active au menu
    $("#croque").addClass("active");
    // + fond gris
    $('#contenu').addClass("fond-croque");
  });

  // collaborations
  $('#jimbo-collabo').click(function () {
    // contenu
    $("#main").load("html/collaborations.html");
    // + ban-collabo
    $('#banniere').addClass("ban-collabo");
     // + active au menu
    $("#collabo").addClass("active");
    // + fond blanc
    $('#contenu').addClass("fond-collabo");
  });


  /////// Bouton mail //////////////////////////

  $("#Mail").click(function () {
    window.open('mailto:emmanuellautreamont@gmail.com', 'emailWindow');
  });


  /////// Bouton retour haut //////////////////////////

  var duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      // Si un défillement de 100 pixels ou plus.
      // Ajoute le bouton
      $('.cRetour').fadeIn(duration);
    } else {
      // Sinon enlève le bouton
      $('.cRetour').fadeOut(duration);
    }
  });

  $('.cRetour').click(function (event) {
    // Un clic provoque le retour en haut animé.
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });


});


//////////////////// fonction gallerie //////////////////////

var galerie = function () {

  var initPhotoSwipeFromDOM = function (gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function (el) {
      var thumbElements = el.childNodes,
        numNodes = thumbElements.length,
        items = [],
        figureEl,
        linkEl,
        size,
        item;

      for (var i = 0; i < numNodes; i++) {

        figureEl = thumbElements[i]; // <figure> element

        // include only element nodes
        if (figureEl.nodeType !== 1) {
          continue;
        }

        linkEl = figureEl.children[0]; // <a> element

        size = linkEl.getAttribute('data-size').split('x');

        // create slide object
        item = {
          src: linkEl.getAttribute('href'),
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10)
        };



        if (figureEl.children.length > 1) {
          // <figcaption> content
          item.title = figureEl.children[1].innerHTML;
        }

        if (linkEl.children.length > 0) {
          // <img> thumbnail element, retrieving thumbnail url
          item.msrc = linkEl.children[0].getAttribute('src');
        }

        item.el = figureEl; // save link to element for getThumbBoundsFn
        items.push(item);
      }

      return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
      return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function (e) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : e.returnValue = false;

      var eTarget = e.target || e.srcElement;

      // find root element of slide
      var clickedListItem = closest(eTarget, function (el) {
        return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
      });

      if (!clickedListItem) {
        return;
      }

      // find index of clicked item by looping through all child nodes
      // alternatively, you may define index via data- attribute
      var clickedGallery = clickedListItem.parentNode,
        childNodes = clickedListItem.parentNode.childNodes,
        numChildNodes = childNodes.length,
        nodeIndex = 0,
        index;

      for (var i = 0; i < numChildNodes; i++) {
        if (childNodes[i].nodeType !== 1) {
          continue;
        }

        if (childNodes[i] === clickedListItem) {
          index = nodeIndex;
          break;
        }
        nodeIndex++;
      }



      if (index >= 0) {
        // open PhotoSwipe if valid index found
        openPhotoSwipe(index, clickedGallery);
      }
      return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function () {
      var hash = window.location.hash.substring(1),
        params = {};

      if (hash.length < 5) {
        return params;
      }

      var vars = hash.split('&');
      for (var i = 0; i < vars.length; i++) {
        if (!vars[i]) {
          continue;
        }
        var pair = vars[i].split('=');
        if (pair.length < 2) {
          continue;
        }
        params[pair[0]] = pair[1];
      }

      if (params.gid) {
        params.gid = parseInt(params.gid, 10);
      }

      return params;
    };

    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
      var pswpElement = document.querySelectorAll('.pswp')[0],
        gallery,
        options,
        items;

      items = parseThumbnailElements(galleryElement);

      // define options (if needed)
      options = {

        // define gallery index (for URL)
        galleryUID: galleryElement.getAttribute('data-pswp-uid'),

        getThumbBoundsFn: function (index) {
          // See Options -> getThumbBoundsFn section of documentation for more info
          var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
            rect = thumbnail.getBoundingClientRect();

          return {
            x: rect.left,
            y: rect.top + pageYScroll,
            w: rect.width
          };
        }

      };

      // PhotoSwipe opened from URL
      if (fromURL) {
        if (options.galleryPIDs) {
          // parse real index when custom PIDs are used
          // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
          for (var j = 0; j < items.length; j++) {
            if (items[j].pid == index) {
              options.index = j;
              break;
            }
          }
        } else {
          // in URL indexes start from 1
          options.index = parseInt(index, 10) - 1;
        }
      } else {
        options.index = parseInt(index, 10);
      }

      // exit if index not found
      if (isNaN(options.index)) {
        return;
      }

      if (disableAnimation) {
        options.showAnimationDuration = 0;
      }

      // Pass data to PhotoSwipe and initialize it
      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
      galleryElements[i].setAttribute('data-pswp-uid', i + 1);
      galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
      openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
  };

  // execute above function
  initPhotoSwipeFromDOM('.my-gallery');

}
