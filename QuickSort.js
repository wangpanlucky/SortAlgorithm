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
//快速排序
//1.在数据集中选择一个数作为基准(key);
//2.所有小于基准(key)的值,都放在基准左边(left);所有大于基准(key)的值,都放在基准右边(right);
//3.对基准两边的两个子集,不断重复的进行1,2两步,直到所有子集剩下一个元素为止
function QuickSort() {
  var result = getText();
  quickSort=function (result) {

    if (result.length <= 1) {
      return result;
    }
    var keyindex = Math.floor(result.length / 2);
    var key = result.splice(keyindex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < result.length; i++) {
      if (result[i] < key) {
        left.push(result[i]);
      }
      else {
        right.push(result[i]);
      }
    }
    return quickSort(left).concat([key],quickSort(right));
  };
  var endResult=quickSort(result);
  console.log(endResult);

}