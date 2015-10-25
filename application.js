
$( document ).ready(function() {
  make_grid(16);
  activate_etch();

  // Reset button prompts, then makes new grid
  $("#reset_button").click(function(){
    var new_grid_size = prompt("What size grid would you like?", 16);
    if (new_grid_size != null){
      $('.grid_container').empty();
      make_grid(new_grid_size);
      activate_etch();
    }
  })
})

function activate_etch(){
  $(".grid_box").hover(function(){
    $(this).addClass('color_grid');
  })
}

function make_grid(grid_size){
  var container_size = 700;
  var box_size = ((container_size - 5*grid_size) / (grid_size));
  for(var i = 0; i < grid_size; i++){
    for(var j = 0; j < grid_size; j++){
      $('.grid_container').append('<div class="grid_box"></div>');
    }
    $('.grid_container').append('<br />');
  }
  $('.grid_box').css({"height":box_size, "width":box_size});
}