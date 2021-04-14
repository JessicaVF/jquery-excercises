"use strict";

// -----Cibler des éléments avec JQuery-----

// Récupérer tous les noeuds <a> de la page (et les afficher avec un console.log())

let noueudsA = $('a');
console.log(noueudsA);

// Récupérer le noeud ayant l'id footer (et l'afficher avec un console.log())

let noeudFooter = $('#footer');
console.log(noeudFooter);

// Récupérer tous les noeuds ayant la classe article (et les afficher avec un console.log())

let noueudsArticle = $('.article');
console.log(noueudsArticle);

// Récupérer le second paragraphe de chaque article (et les afficher avec un console.log())

let secondParagraphe = $('article p:nth-child(2)');
console.log(secondParagraphe);

// ----- Gestion d'événements ----- //

// Sur tous les liens, ajouter un event listener pour éviter que la page soit rechargée au clic (avec preventDefault())

noueudsA.on("click", function(event){
    event.preventDefault();
})
// Sur le second paragraphe de chaque article, au survol de la souris (avec la méthode hover de JQuery (opens new window)), afficher :
    // un message Vous entrez dans un article dans la console quand la souris entre dans le paragraphe
    // un message Vous sortez de l'article dans la console quand la souris sort de le paragraphe

    secondParagraphe.hover(function (){
        console.log("Tu as entré dans le paragraphe");
        console.log(secondParagraphe);
    }, function() {
        console.log("Tu as sorti de le paragraphe");
        console.log(secondParagraphe);
    });
// ----- Modifier les classes----

// Sur le second paragraphe de chaque article, au survol de la souris (avec la méthode hover de JQuery (opens new window)) :
    // Ajouter la classe paragraph--hovered quand la souris entre dans le paragraphe (pour le voir, ouvrez l'inspecteur)
    // Enlever la classe paragraph--hovered quand la souris sort de le paragraphe (pour le voir, ouvrez l'inspecteur)
    secondParagraphe.hover(function () {
        $(this).addClass('paragraph--hovered');
        
    }, function(){
        $(this).removeClass('paragraph--hovered');
    });

  // Faire la même chose à l'aide de toggleClass()
    
    secondParagraphe.hover(function () {
        $(this).toggleClass('paragraph--hovered');   
    });

/// ----- Modifier / ajouter du contenu -----

// Au clic sur un lien du footer, remplacer le texte par Ce lien a été cliqué (utiliser $(this) pour récupérer l'élément cliqué)
let lienFooter = $('footer a');
lienFooter.on("click", function() {
    $(this).text("Ce lien a été cliqué");
    
    
});
// Au chargement de la page, compter le nombre de balises article et ajouter ce HTML au début de la balise main (en remplaçant X par le nombre d'articles) :

let articleBalises = $("article").length;
let msg = `Il y a ${articleBalises} articles dans cette page. Bonne lecture !`;

$("main").prepend("<p></p>");
$("p:first").text(msg);

//-----Récupérer / modifier les attributs-----

// Au survol d'un article (méthode ou événement hover) :
// récupérer son attribut data-id,
// mettre à jour l'attribut id de cet article id="article-X" (remplacer X par l'id récupéré dans data-id)
let articles = $("article");
articles.hover(function (){
    let id = $(this).data("id");
    let articleNombre = `article- ${id}`;
    $(this).attr("id", articleNombre);    
});