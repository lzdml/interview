<template>
  <div class="js-test-container">
    <div class='count'></div>
  </div>
</template>

<script setup>
// function githubOauth(data) {
//   const query = new URLSearchParams({
//     ...data,
//     client_id: 'bea3ef88933c577575f0',
//     scope: ''
//   })
//   console.log('query', query.toString());
//   console.log('data', data);
//   const url = `https://github.com/login/oauth/authorize?${query.toString()}`
//   window.location.href=url
// }

// const random = function(n) { // 生成6位长度的字符串
//     return (~~(Math.random() * (1 << 30))).toString(36);
//     // "<<"操作相当于乘上2的n次方，"~~"相当于parseInt
// }

var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?57edc39f7230d22fa8a105a904201503";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();


console.log('-------')

// let arr = [85, 24, 63, 17, 31, 96, 5]

// var quickSort = function(arr) {
//   if (arr.length <= 1) {
//     return arr
//   }
//   var pivotIndex = Math.floor(arr.length / 2);
//   var pivot = arr.splice(pivotIndex, 1)[0];
//   var left = [], right = [];
//   for(var i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }

//   return quickSort(left).concat([pivot], quickSort(right))
// };


</script>

<style scoped>

</style>
