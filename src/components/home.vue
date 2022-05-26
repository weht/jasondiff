<template>
  <div class="main">
    <div class="main-body">
      <div class="body-top">
        <div class="body-title">Json 입력 1</div>
        <div class="body-title">Json 입력 2</div>
      </div>
      <div class="body-bottom">
        <div class="main-json">
          <textarea
            v-model="jsonData1"
            name="json1"
            id="json1"
            cols="80"
            rows="40"
            placeholder='비교할 json을 넣어주세요( 형식) {"name":"jhon" , "age" : 20})'
          ></textarea>
        </div>
        <div class="main-json">
          <textarea
            v-model="jsonData2"
            name="json2"
            id="json2"
            cols="80"
            rows="40"
            placeholder='비교할 json을 넣어주세요( 형식) {"name":"jhon" , "age" : 20})'
          ></textarea>
        </div>
      </div>
    </div>
    <div class="bottom-button">
      <router-link :to="{ path: `/result/${randomId}` }">이동하기</router-link>
      <button class="compare" @click="compareJson(jsonData1, jsonData2)">compare now</button>
    </div>
  </div>
</template>

<script>
import 'firebase/firestore'
import 'firebase/storage'
import firebase from 'firebase/app'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data() {
    return {
      jsonData1: '',
      jsonData2: '',
      resultJsonData: '',
      randomId: '',
    }
  },
  methods: {
    compareJson(json1, json2) {
      const json1_result = JSON.parse(json1)
      const json2_result = JSON.parse(json2)

      const json1_sort = Object.entries(json1_result).sort()
      const json2_sort = Object.entries(json2_result).sort()
      //const result = JSON.stringify(json1_result) === JSON.stringify(json2_result)
      for (let i = 0; i < json1_sort.length; i++) {
        if (JSON.stringify(json1_sort[i]) !== JSON.stringify(json2_sort[i])) {
          json1_sort[i].pop()
          json1_sort[i].push(' ##틀림')
        } else {
          json1_sort[i].push(' ##맞음')
        }
      }
      console.log(json1_sort)
      const jsonResult = Object.fromEntries(json1_sort)
      console.log(jsonResult)
      this.resultJsonData = jsonResult

      const db = firebase.firestore()
      let randomId = new Date().getTime().toString(36)
      this.randomId = randomId
      db.collection('data').doc(randomId).set(this.resultJsonData)
      this.$router.push(`/result/${randomId}`)
    },
  },
}
</script>

<style>
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
