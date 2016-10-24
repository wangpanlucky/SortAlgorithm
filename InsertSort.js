/**
 * Created by lucky on 16-10-24.
 */
function getText() {
  var t1 = document.getElementById('txt1').value;
  var sort = t1.split(',');
  return sort.map(function (elem) {
    return parseInt(elem);
  });
}

//插入排序操作次数为n-1次
function InsertSort() {
  var result = getText();
  var temp;
  for (var i = 0; i < result.length; i++) {
    temp = result[i];
    j = i - 1;
    while (j >= 0 && temp < result[j]) {
      result[j+1] = result[j];
      j--;
    }
    result[j+1] = temp;
  }
  console.log(result);

}