//this is where you define your functions

// this is the syntax for defining a function:
 function addUnderline ($element) {
  $element.addClass('underline');
}

function removeSiblingUnderline($element) {
  var $current = $element;
  var $parent = $element.parent();
  var $siblings = $parent.siblings();
  $siblings.children().removeClass('underline');

}

function toggleButton($element){
  $('#showHide').toggle();
  if($element.text() === "MEET THE TEAM" ) {
    $element.text("THIS IS OUR TEAM");
  } else {
    $element.text("MEET THE TEAM");
  }
}

//-------------Main-----------------------------------

$(document).ready(function() {
  // this is where you put your event listeners
  $('#showHide').hide();


  $('.nav-link').click(function() {
   removeSiblingUnderline($(this));
   addUnderline($(this));

  });

  $('.button').click(function() {
  toggleButton($(this));

});


});
