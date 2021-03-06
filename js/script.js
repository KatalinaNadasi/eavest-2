// @author KatalinaNadasi
// @since 1 avr. 2017

$(function() {

               // navbar
               $(document).on('scroll', function() {
                              var scrollPos = $(window).scrollTop();
                              if (scrollPos <= 0) {
                                            $('.slider').hide();
                              } else {
                                            $('.slider').show();
                              }
               });

               // footer-arrow hide /show on scroll
               $(document).on('scroll', function() {
                              var scrollPos = $(window).scrollTop();
                              if (scrollPos <= 0) {
                                            $('.footer-arrow').hide();
                              } else {
                                            $('.footer-arrow').fadeIn(1000);
                              }
               });

               // Stop the arrow before footer
               $(window).scroll(function() {
                              var elementOffset = $('#footer').offset().top;
                              var footerTop = (elementOffset - $(window).scrollTop());
                              if (footerTop > ($(window).height() - 20)) {
                                            $('.footer-arrow').css({
                                                           position : 'fixed',
                                                           bottom : 20
                                            });
                              }

                              if (footerTop < ($(window).height() - 20)) {
                                            $('.footer-arrow').addClass('fixed');
                                            $('.footer-arrow').css({
                                                           position : 'fixed',
                                                           bottom : ($(window).height() - footerTop),
                                            });
                              }
               })

               // scroll up on click arrow big
               $('.footer-arrow').click(function() {
                              $('html, body').animate({
                                            scrollTop : 0
                              }, 'speed');
               });
               // scroll up on click arrow small
               $('#scroll-back-to-top').click(function() {
                              $('html, body').animate({
                                            scrollTop : 0
                              }, 'speed');
               });

               // end window load
});

// ACCORDION redirection selon nombre de produits
var refundProducts = []
var tocallProducts = []

$(function() {

               if (refundProducts <= 5) {
                              $('#more-product-1, .more-product-1').hide();
               } else {
                              $('#more-product-1, .more-product-1').show();
                              $('#headingSix, #headingSeven, #headingEight').hide();
               }
               ;

               if (tocallProducts <= 5) {
                              $('#more-product-2, .more-product-2').hide();
               } else {
                              $('#more-product-1, .more-product-1').show();
                              $('#heading2Six, #heading2Seven, #heading2Eight').hide();
               }
               ;

               // redirection accordion au hover
               // afficher l'accordion total au click qui est en display none avant
               $('a #more-product-1').click(function() {
                              $('#headingSix, #headingSeven, #headingEight').show();
                              $('#more-product-1, .more-product-1').hide();
                              $('.activestate').css({
                                            'font-weight' : 'bold',
                                            'color' : 'black'
                              });
               });

               $('a #more-product-2').click(function() {

                              $('#heading2Six, #heading2Seven, #heading2Eight').show();
                              $('#more-product-2, .more-product-2').hide();
                              $('.activestate').css({
                                            'font-weight' : 'bold',
                                            'color' : 'black'
                              });
               });

});

// Tableau collapse perf review

$(function() {
               $('#more-perfReview').click(function() {
                              $('.display-on-click, #close').show();
                              $('#more-perfReview').hide();
               });
               $('#close').click(function() {
                              $('.display-on-click, #close').hide();
                              $('#more-perfReview').show();
               })
});

// Set a fontSize relative to a number of words (dynamic content for figure of
// the month)
$(function() {

               var $quote = $(".figure-month");

               var $numWords = $quote.text().length;

               if (($numWords >= 1) && ($numWords <= 2)) {
                              $quote.css("font-size", "72px");
               } else if (($numWords > 2) && ($numWords <= 4)) {
                              $quote.css("font-size", "60px");
               } else if (($numWords > 4) && ($numWords <= 5)) {
                              $quote.css("font-size", "50px");
               } else {
                              $quote.css("font-size", "40px");
               }
});

// PRODUCTS MODAL OPEN ON LOAD

$(window).load(function() {
               // Show the Modal on load
               $("#productsModal").modal("show");

               // Hide the Modal
               $("#agreedBtn").click(function() {
                              $("#productsModal").modal("hide");
               });
});

// autocomplete customization

var wordlist = [ 'toto', 'tata', 'coucou', 'comment', 'ca', 'va' ];

wordlist.sort();

function monkeyPatchAutocomplete() {

               $.ui.autocomplete.prototype._renderItem = function(ul, item) {
                              var re = new RegExp("()" + this.term, "gi");
                              var t = item.label.replace(re, function myFunction(x) {
                                            return "<span style='font-weight:bold;color:Blue;'>" + x
                                                                          + "</span>";
                              });
                              return $("<li></li>").data("item.autocomplete", item).append(
                                                           "<a>" + t + "</a>").appendTo(ul);
               };
}

$(document).ready(function() {
               monkeyPatchAutocomplete();
});

// Section search open filter-row-container on click
$(function() {
  $('#refine').click(function(){
    $('#filter-row-container').toggleClass('filter-row-container-h filter-row-container');
    $('#cross').toggleClass('cross-h cross');
    $('#margin-search').toggleClass('margin-search');
  });
  $('#cross').click(function(){
    $('#filter-row-container').toggleClass('filter-row-container-h filter-row-container');
    $('#cross').toggleClass('cross-h cross');
  });

});

$(document).on('focus', 'input', function () {
   $('.contact').addClass('no-shadow');
});

// hide open close icons on menu hamburger on small size
$(function() {
  $('#icons').click(function(){
    $('.icon-bar').toggleClass('icon-hide');
    $('.icon-close').toggleClass('icon-show');
  })


})
