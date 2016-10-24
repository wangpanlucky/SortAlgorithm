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
//冒泡排序
/*遍历数组,每次将最小的元素换到最前面,越往后查询遍历的次数越少*/
/*冒泡排序还可以优化,--------当一次遍历后数组未发生变化,说明该数组已有序,结束排序*/
function BubbleSort() {
  var result = getText();
  var temp, flag;
  for (var i = 0; i < result.length; i++) {
    flag = 0;
    for (var j = result.length - 1; j > i; j--) {
      if (result[j] < result[j - 1]) {
        temp = result[j - 1];
        result[j - 1] = result[j];
        result[j] = temp;
        flag = 1;
      }
    }
    if (!flag) {
      break;
    }
  }
  console.log(result);
}
