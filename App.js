$(document).ready(function() {
 var storedData = {};

 $('.setData').on('click', function() {
    let textFieldValue = $('.textField').val();
    //$('.debug').text(textFieldValue);

    let textAreaValue = $('.textArea').val();

    storedData[textFieldValue] = textAreaValue;

    $('.debug').text(textAreaValue);

    localStorage.setItem('myFormTextData', JSON.stringify(storedData));
   $('.textField').val('');

   localStorage.setItem('myFormTextAreaData', JSON.stringify(storedData));
   $('.textArea').val('');

});

 $('.getData').on('click', function() {
   let retrievedData = localStorage.getItem('myFormTextData');
  // $('.debug').text(retrievedData);

   let retrievedTextAreaData = localStorage.getItem('myFormTextArea');
   //$('.debug').text(retrievedTextAreaData);

   $('.debug').text(retrievedTextAreaData);
 });

 // $('.textField').on('keyup', function() {
 //    let textField = $('.textField').val();
 //    $('.debug').text(textFieldValue);
 //  });

});

