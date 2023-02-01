function myFunction() {
  if (($('.checkbox:checked').length == $('.checkbox').length) && $('.checkbox:checked').length !== 0) {
    const progressBar = document.getElementById('complete-container-pulse');
    const message = document.getElementById('complete-container-message');
    progressBar.style.visibility = `visible`;
    message.style.visibility = `visible`;

  }
  else{
    const progressBar = document.getElementById('complete-container-pulse');
    const message = document.getElementById('complete-container-message');
    progressBar.style.visibility = `hidden`;
    message.style.visibility = `hidden`;

  }
}

$(function(){
    $(document).delegate('.checkbox, .close', 'click', function() {
  
      myFunction();
  })});
  
  $(function(){
    $('.task-form').submit(function() {
  
      myFunction();
  })});
  
    $(function(){
      $('.checkbox, .close').on('click', function() {
        myFunction();
    })});
  
  
    $(function(){
      $( document ).ready(function() {
        myFunction();
    })});    