// var search_contents = $('#search-box').value;
// console.log(search_contents);
// //give all the image links specific IDs
// //create a 2D array with all the image captions and the IDS of the images
// //for everything that the user types in check to see if it matches what is in the
// //array and then show the link with the ID associated with it
var description = "I love hay bales. Took this snap on a drive through the countryside past some straw fields";
var description_lower = description.toLowerCase();
//
// if (description_lower.indexOf(search_contents.toLowerCase)!==-1){
//   $('#image1').show();
// }

$('#search-box').keyup(function(){
  var content = $('#search-box').val();
  //alert(content);
  var content_string = content.toString();
  var num = description_lower.indexOf(content_string);
  if ( num !== -1){
      $('#image1').hide();
  }
});
