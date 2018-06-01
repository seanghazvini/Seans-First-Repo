$(document).ready(function() {
 
 $('.setData').on('click', function() {
    let textFieldValue = $('.textField').val();
    //$('.debug').text(textFieldValue);

    let textAreaValue = $('.textArea').val();
    //$('.debug').text(textAreaValue);

    localStorage.setItem('myFormTextData', textFieldValue);
   $('.textField').val('');

   localStorage.setItem('myFormTextArea', textAreaValue);
   $('.textArea').val('');

});

 $('.getData').on('click', function() {
   let retrievedData = localStorage.getItem('myFormTextData');
  // $('.debug').text(retrievedData);

   let retrievedTextAreaData = localStorage.getItem('myFormTextArea');
   //$('.debug').text(retrievedTextAreaData);

   $('.textArea').text(retrievedTextAreaData);
 });

 // $('.textField').on('keyup', function() {
 //    let textField = $('.textField').val();
 //    $('.debug').text(textFieldValue);
 //  });

});

