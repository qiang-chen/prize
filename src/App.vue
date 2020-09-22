<!--
 * @description 
 * @author cq
 * @Date 2020-09-22 11:15:28
 * @LastEditTime 2020-09-22 16:30:25
 * @LastEditors cq
-->
<template>
  <div id="app">
    <h1>抽奖吃饭，童叟无欺</h1>
    <!-- 大转盘抽奖 -->
    <LuckyWheel
      style="width: 370px; height: 370px;margin:15px auto ;"
      :blocks="[
    { padding: '10px', background: 'red' },
  ]"
      :prizes="[
    { fonts: [{ text: '1请客',top: '20px'  }], background: '#f8d384' },
    { fonts: [{ text: '2请客',top: '20px' }] },
    { fonts: [{ text: '3请客' ,top: '20px'}], background: '#f8d384' },
    { fonts: [{ text: '4请客',top: '20px' }] },
    { fonts: [{ text: '5请客' ,top: '20px'}], background: '#f8d384' },
    { fonts: [{ text: '6请客' ,top: '20px'}] },
    { fonts: [{ text: '7请客' ,top: '20px'}], background: '#f8d384' },
    { fonts: [{ text: '8请客' ,top: '20px'}] },
  ]"
      :buttons="[
    { radius: '40px', background: '#d64737' },
    { radius: '35px', background: '#f6c66f', pointer: true },
    {
      radius: '30px',
      background: '#667EFF',
      fonts: [{ text: '开始', top: '-13px' }]
    }
  ]"
      ref="LuckDraw"
      @start="startCallBack"
      @end="endCallBack"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    // ...
    startCallBack() {
      // 开始旋转
      this.$refs.LuckDraw.play();
      // 模拟请求接口2s后返回数据
      setTimeout(() => {
        const index = (Math.random() * 7) >> 0;
        // 得到中奖索引, 开始缓慢停止
        this.$refs.LuckDraw.stop(index);
      }, 3500);
    },
    endCallBack(prize) {
      // 此时完全停止
      alert(`恭喜${prize.fonts[0].text}吃饭`);
    },
    // ...
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
