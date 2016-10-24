# Sorting-Algorithm
1.冒泡排序及其优化(10月23)
  
  算法思想:遍历数组,每次将最大或最小的元素推至数组的前边,越往后,遍历查询的次数越少;和插入排序刚好相反
  优化思想:当一次遍历前后数组不发生变化时,说明该数组已经有序,结束排序.
  
  时间复杂度O(n^2), 空间复杂度O(1)， 稳定，因为存在两两比较，不存在跳跃。
  排序时间与输入无关，最好，最差，平均都是O(n^2)

2.快速排序(10月23)

  算法思想:在数组中选取一个元素作为基准,所有小于这个基准的数放在基准的左边,所有大于这个基准的数放在基准的右边;对于左右两个子集,不断重复前面的步骤,直到所有子集剩下一个元素为止
  时间复杂度 O(nlogn) 空间复杂度O（logn） 不稳定 
  快速排序的最差时间复杂度和冒泡排序是一样的都是 O(n^2)，它的平均时间复杂度为 O(nlogn)。其实快速排序是基于 “二分” 的思想。
  时间复杂度：
  最坏O（n^2） 当划分不均匀时候 逆序and排好序都是最坏情况
  最好O（n） 当划分均匀

3.插入排序(10月24)
 
  算法思想:最普通的排序算法,从数组下表为1的元素,每增加一项排序一次越往后排序次数越多

4.二分插入排序(10月24)

  算法思想:插入排序的一种优化,通过二分法进行排序减少时间
......


