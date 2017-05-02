function add(number1, number2){
  return number2 + number1;
}
function substract(number1, number2){
  return number2-number1;
}
function multiply(number1, number2){
  return number2*number1;
}
function divide(number1, number2){
  return number2/number1;
}
var array_number = [];
var display_result = 0;
$(document).ready(function(){
  // 
  $("td.number").click(function(){
    array_number.push($(this).text());
    number = array_number.join("");
    $("li.result").text(number);
  });
  $("td.operator").click(function(){
    if (this === $("td#plus")) {
      number = number1
      display_result = add(number1, number2);
    }
    ("td#equal").click(function(){
      $("li.result").text(display_result);
    });
  });

});
