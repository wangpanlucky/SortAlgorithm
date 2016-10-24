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

function MidInsertSort() {
  var result = getText();
  var i, j;
  var temp, low, high, mid;
  for (i = 1; i < result.length; i++) {
    temp = result[i];
    low = 0;
    high = i - 1;
    while (low <= high) {
      mid = parseInt((low + high) / 2, 10);//不增加parseInt(),会导致函数运行次数减少,提前结束遍历
      if (temp < result[mid]) {
        high = mid - 1;
      }
      else {
        low = mid + 1;
      }
    }
    for (j = i - 1; j >= high + 1; j--) {
      result[j + 1] = result[j];
    }
    result[j + 1] = temp;
  }
  console.log(result);
}
