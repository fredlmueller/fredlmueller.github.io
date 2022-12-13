window.$ = function(selector) {
  return document.querySelectorAll(selector)
};

function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop - 40
  });
}

document.addEventListener("DOMContentLoaded", function() {

  // Navbar burger
  $(".navbar-burger").item(0).addEventListener("click", function() {
    $(".navbar-burger").item(0).classList.toggle("is-active");
    $(".navbar-menu").item(0).classList.toggle("is-active");
  });

  // Smooth scrolling to anchor links
  $('a[href="#about"], a[href="#booking"], a[href="#contact"]').forEach(element => {
    element.addEventListener("click", e => {
      e.preventDefault();
      scrollTo(document.getElementById(element.hash.substr(1)));
    });
  });

  // Highlighting of currently active section
  window.addEventListener("scroll", () => {
    $(".section").forEach(el => {
      if(window.pageYOffset >= el.offsetTop - 40) {
        $(".navbar-menu a").forEach(el => el.classList.remove("is-active"));
        $(".navbar-menu a[href='#" + el.id + "']").forEach(el => el.classList.add("is-active"));
      }
    });
  });

  // Rotate images
  var even = true;
  $("figure img").forEach(el => {
    if (even) {
      el.classList.add("even");
      even = false;
    } else {
      el.classList.add("odd");
      even = true;
    }
  });

});
