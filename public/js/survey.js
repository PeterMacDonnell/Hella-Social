//I DON'T KNOW WHY WE HAVE THE HTML AT THE BOTTOM HERE
//WHAT DEPENDENCIES DO WE NEED ON THIS PAGE?
/* <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"> */

// init the state from the input
console.log("this works");

$(".image-checkbox").each(function() {
  if (
    $(this)
      .find('input[type="checkbox"]')
      .first()
      .attr("checked")
  ) {
    $(this).addClass("image-checkbox-checked");
  } else {
    $(this).removeClass("image-checkbox-checked");
  }
});

// sync the state to the input
$(".image-checkbox").on("click", function(e) {
  $(this).toggleClass("image-checkbox-checked");
  var $checkbox = $(this).find('input[type="checkbox"]');
  $checkbox.prop("checked", !$checkbox.prop("checked"));

  e.preventDefault();
});
