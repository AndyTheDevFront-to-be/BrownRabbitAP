//Highlight plugin
var elems = document.querySelectorAll('.container');// I use the method querySelectorAll in #container. "Elems" will contain a Nodelist
$('.search').textHighlight(elems, false);

//Button plugin
$(".button_read_more").on("click", function() {
      var $this = $(this);
        $this.toggleClass("open");

        if ($this.hasClass("open")) {
            $this.html("Less");
        } else {
            $this.html("Read more");
        }
});

// Pagination 
var numberOfitems = $('.articles .article-group').length;
var limitPerPage = 3;
$('.articles .article-group:gt(' + (limitPerPage - 1) + ')').hide(); //gt permet de cibler les éléments dont l'index est supérieur à la valeur du paramètre indiqué. dans notre exemple (limitPerPage - 1)
var totalPages = Math.round(numberOfitems/limitPerPage);
$('.pages').append("<p class='no-margin p-xs'>Page 1 of " + totalPages + "</p>") 

// I display the first page button, which will automatically have the active class 
$('.pagination').append("<li class='page-item current-page active'><a class='page-link' href='javascript:void(0)'>" + 1  + "</a></li>") // append() permet d'insérer du contenu à la fin d'un élément ciblé. 

// I loop to display all the buttons needed to display my pages 
for (var i=2; i<=totalPages; i++){
    $('.pagination').append("<li class='page-item current-page'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>");
}
// I display the "next" button 
$('.pagination').append("<li id='next' class='page-item'> <a class='page-link' href='javascript:void(0)' aria-label='Next'> <span aria-hidden='true'>&raquo;</span> <span class='sr-only'>Next</span> </a> </li>");

$(".pagination li.current-page").on("click", function () {
    // I want to avoid to add the active class a list element who already has it
    if ($(this).hasClass('active')){
        return false;
    } else {
          var currentPage = $(this).index();
          $(".pagination li.current-page").removeClass("active");
          $(this).addClass("active");
          $(".articles .article-group").hide();

          var grandTotal = limitPerPage * currentPage;
          for (var i = grandTotal - limitPerPage; i<grandTotal; i++) {
             $(".articles .article-group:eq(" + i + ")").show();
          }
    }
});

$("#next").on("click", function() {

    var currentPage = $(".pagination li.active").index();
    if(currentPage === totalPages) {
        return false;
    } else {
            currentPage++;
            $(".pagination li").removeClass("active");
            $(".articles .article-group").hide();

              var grandTotal = limitPerPage * currentPage;
              for (var i = grandTotal - limitPerPage; i<grandTotal; i++) {
                    $(".articles .article-group:eq(" + i + ")").show();    
              } 
              $(".pagination li.current-page:eq("+ (currentPage - 1) + ")").addClass("active");  
            }
})

$("#previous").on("click", function() {

    var currentPage = $(".pagination li.active").index();
    if(currentPage === 1) {
        return false;
    } else {
            currentPage--;
            $(".pagination li").removeClass("active");
            $(".articles .article-group").hide();

              var grandTotal = limitPerPage * currentPage;
              for (var i = grandTotal - limitPerPage; i<grandTotal; i++) {
                    $(".articles .article-group:eq(" + i + ")").show();    
              } 
              $(".pagination li.current-page:eq("+ (currentPage - 1) + ")").addClass("active");  
            }
})