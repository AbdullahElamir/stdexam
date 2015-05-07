$(document).ready(function(){
  // var selector, elems, makeActive;
  //   selector = '.nav li';
  //   elems = document.querySelectorAll(selector);
  //   makeActive = function () {
  //     for (var i = 0; i < elems.length; i++)
  //       elems[i].classList.remove('active');
  //     this.classList.add('active');
  //   };
  //   for (var i = 0; i < elems.length; i++)
  //     elems[i].addEventListener('mousedown', makeActive);
  // When we click on the LI
  $("li").click(function(){
    // If this isn't already active
    if (!$(this).hasClass("active")) {
      // Remove the class from anything that is active
      $("li.active").removeClass("active");
      // And make this active
      $(this).addClass("active");
    }
  });
});