  //getnumber
  function number(num){
var result = document.getElementById("input");
result.value += num;

  }

  //getresult

  function result(){
    var result = document.getElementById("input");
    result.value = eval(result.value)

  }

  //clear result

  function clearResult(){
    var result = document.getElementById("input");
    result.value = "";

  }
function deleteChar(){
    var number = document.getElementById("input");
    var remove = number.value;
    remove = remove.slice(0,-1); //remove last character from a string
    number.value = remove ;
}