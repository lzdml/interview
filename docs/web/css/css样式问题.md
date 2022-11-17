<end-time time="新增时间: 2022-11-17 20:39" />

----------------------

<slot-content title="css一像素问题">
  <template #body>
    <div class="border">
      <div class="content">伪类设置的边框</div>
    </div>
  </template>
</slot-content>

<style scoped>
  .border {
    position: relative;
    padding: 10px 0;
  }
  .border:before{
    position: absolute;
    bottom: 0;
    z-index: -1;
    width: 200%;
    height: 200%;
    content: "";
    display: block;
    border-bottom: 1px solid #DBDBDB;
    transform: scale(0.5);
    transform-origin: left bottom;
  }
</style>


::: details css一像素问题
```css
.border {
  position: relative;
  padding: 10px 0;
}
.border:before{
  position: absolute;
  bottom: 0;
  z-index: -1;
  width: 200%;
  height: 200%;
  content: "";
  display: block;
  border-bottom: 1px solid #DBDBDB;
  transform: scale(0.5);
  transform-origin: left bottom;
}
```
:::


----------------------