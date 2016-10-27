/**
 * Created by lucky on 16-10-27.
 */
function getText() {
  var t1 = document.getElementById('txt1').value;
  var sort = t1.split(',');
  return sort.map(function (elem) {
    return parseInt(elem);
  });
}


//选择排序
//在无序区中选择出最小的元素,然后把它和无序区中的第一个元素交换,原理的冒泡排序相似
function ChooseSort() {
  var result = getText();
  var i, j, k, temp;
  for (i = 0; i < result.length; i++) {
    k = i;//标记i
    for (j = i + 1; j < result.length; j++) {
      if (result[j] < result[k]) {
        k = j;//后边的数比前边的大,标记下标
      }
    }
    if(k!=i){//根据标记的下标和自身下标比较,不相等则交换
      temp = result[i];
      result[i]=result[k];
      result[k]=temp;
    }
  }
  console.log(result);
}
