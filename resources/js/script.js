$(document).ready(function() {

  //Sticky Navigation
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
    },{
      offset: '60px'
  });

  /* var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window')
  }, {
    offset: '25%'
  }) */
});
