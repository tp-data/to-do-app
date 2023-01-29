$(function(){
    $(document).delegate('.checkbox, .close', 'click', function() {
  
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
  })});
  
  $(function(){
    $('.task-form').submit(function() {
  
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
  })});
  
    $(function(){
      $('.checkbox, .close').on('click', function() {
    
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
    })});
  
  
    $(function(){
      $( document ).ready(function() {
    
      if (($('.checkbox:checked').length == $('.checkbox').length) && $('.checkbox:checked').length !== 0){
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
    })});    