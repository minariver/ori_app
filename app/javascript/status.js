function onClick(){
  //1つ目の入力ボックスの値を取得する
  var value1 = document.getElementById("num1").value;
  //2つ目の入力ボックスの値を取得する
  var value2 = document.getElementById("num2").value;
  //足算する
  var result = parseInt(value1)  + parseInt(value2) ;
  //値を設定する
  document.querySelector('.result').innerHTML = result ;
}