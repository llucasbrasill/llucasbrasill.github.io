
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 5) {
    $("#cabeçalho").addClass("f-header");
  }
  else {
    $("#cabeçalho").removeClass("f-header");
  }
});

minhasHabilidades = document.getElementById("minhas-habilidades").offsetTop;

minhasHabilidades = minhasHabilidades - 150;

$(window).on("scroll", function () {

  if ($(this).scrollTop() > minhasHabilidades ) {

    $("#de1").addClass("de1");
    $("#de2").addClass("de2");
    $("#de3").addClass("de3");

    $("#dw1").addClass("dw1");
    $("#dw2").addClass("dw2");
    $("#dw3").addClass("dw3");

    $("#dg1").addClass("dg1");
    $("#dg2").addClass("dg2");
    $("#dg3").addClass("dg3");

  }
  else {
    $("#de1").removeClass("de1");
    $("#de2").removeClass("de2");
    $("#de3").removeClass("de3");

    $("#dw1").removeClass("dw1");
    $("#dw2").removeClass("dw2");
    $("#dw3").removeClass("dw3");

    $("#dg1").removeClass("dg1");
    $("#dg2").removeClass("dg2");
    $("#dg3").removeClass("dg3");
  }
});

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 1) || 1;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="texto-digitando">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }

};

$(document)
.on('click', 'a[href*="#"]', function() {
  if ( this.hash && this.pathname === location.pathname ) {
    $.bbq.pushState( '#/' + this.hash.slice(1) );
    return false;
  }
})
.ready(function() {
  $(window).bind('hashchange', function(event) {
    var tgt = location.hash.replace(/^#\/?/,'');
    if ( document.getElementById(tgt) ) {
      $.smoothScroll({scrollTarget: '#' + tgt});
    }
  });

  $(window).trigger('hashchange');
});
