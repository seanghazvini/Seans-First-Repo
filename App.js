$(document).ready(function() {
 
 $('.setData').on('click', function() {
    let textFieldValue = $('.textField').val();
    $('.debug').text(textFieldValue);
  
   localStorage.setItem('myFormTextData', textFieldValue);

});

 $('.getData').on('click', function() {
   let retrievedData = localStorage.getItem('myFormTextData');
   $('.debug').text(retrievedData);
 });

 // $('.textField').on('keyup', function() {
 //    let textField = $('.textField').val();
 //    $('.debug').text(textFieldValue);
 //  });

});

