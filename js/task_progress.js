// count checked and total checkboxes on page load.
function taskProgress() {
  $('#count-completed-tasks').text($(".checkbox:checked").length);
  $('#count-total-tasks').text($(".checkbox").length);
  const progressBar = document.getElementById('progress-bar-full');
  const task_empty_space = document.querySelector('.task-empty-space');

  let questionCounter = $(".checkbox:checked").length;
  const MAX_QUESTIONS = $(".checkbox").length;

  if (MAX_QUESTIONS!== 0) {
    progressBar.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    task_empty_space.style.visibility = 'hidden';
  }
  else {
    progressBar.style.width = '0%';
    task_empty_space.style.visibility = 'visible';
  }  
}


$(function () {
    $('.checkbox, .close').on('click', function() {

      taskProgress(); 

    }).triggerHandler("click"); 
  });
  
  // Update count of checked and total checkboxes on checkbox click
  $(function () {
    $(document).delegate('.checkbox, .close', 'click', function() {
      taskProgress(); 

    }).triggerHandler("click"); 
  });
  
  // Update count of checked and total checkboxes on input submission 
  $(function () {
    $('.task-form').submit(function() {
      taskProgress(); 
    }).triggerHandler("click"); 
  });  