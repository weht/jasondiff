<template>
  <div class="main">
    <div class="main-body">
      <div class="body-top">
        <div class="body-title">Json 입력 1</div>
        <div class="body-title">Json 입력 2</div>
      </div>
      <div class="body-bottom">
        <div class="main-json">
          <textarea v-model="jsonData1" name="json1" id="json1" cols="80" rows="40" placeholder="비교할 json을 넣어주세요"></textarea>
        </div>
        <div class="main-json">
          <textarea v-model="jsonData2" name="json2" id="json2" cols="80" rows="40" placeholder="비교할 json을 넣어주세요"></textarea>
        </div>
      </div>
    </div>
    <div class="bottom-button"><button class="compare">compare now</button></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      jsonData1: '',
      jsonDate2: '',
    }
  },
  methods: {},
}
</script>

<style>
#app {
  margin: 50px 50px;
  padding-top: 50px;
  width: 95%;
  min-height: 85vh;
  background: #edf0f7;
  overflow-y: auto;
}
*::-webkit-scrollbar {
  display: none;
}

.body-top {
  width: 95%;
  display: flex;
  justify-content: space-around;
  font-size: 30px;
  font-weight: 600;
}

.body-bottom {
  width: 95%;
  height: 70vh;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}
#json1,
#json2 {
  margin-top: 20px;
  padding: 5px;
  border-radius: 10px;
}
.bottom-button {
  width: 95%;
  display: flex;
  justify-content: center;
}
.compare {
  font-size: 20px;
  cursor: pointer;
}
</style>
