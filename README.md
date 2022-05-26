# jasondiff 

### App.vue
```
<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
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
</style>

```

### result.vue
```
<template>
  <div class="main">
    <div class="main-body">
      <div class="json-result">
        <div class="result">
          <div class="result-top">JSON 비교결과</div>
          <div class="result-bottom">{{ this.fireData }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'firebase/firestore'
import 'firebase/storage'
import firebase from 'firebase/app'

export default {
  data() {
    return {
      fireData: [],
    }
  },
  methods: {
    checkData() {
      const db = firebase.firestore()
      db.collection('data')
        .doc(this.$route.params.id)
        .get()
        .then((res) => this.fireData.push(res.data()))
    },
  },
  mounted() {
    this.checkData()
  },
}
</script>

<style>
.json-result {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
}
.result {
  width: 80%;
  height: 70vh;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.result-top {
  font-size: 30px;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
  height: 5vh;
}
.result-bottom {
  text-align: center;
  height: 64vh;
}
</style>

```

### home.vue
```
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
          console.log('')
        }
      }
      
      const jsonResult = Object.fromEntries(json1_sort)
      
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

```

### 마치면서
```
깃허브 이슈도 처음 써보고 실력도 부족하다보니 미흡한 부분이 많이 보인 것 같습니다.
패기롭게 5시간이라고 써놓고는 8시간쯤 걸려서 철면피처럼 마무리했습니다.
결과적으로 요구사항3번은 손도 못댔고 1번도 뭔가 애매하게 구현되어있는 느낌이라 만족스럽게 마무리하진 못한 것 같습니다.
항상 실력쌓는 일에 정진해야함을 다시금 느꼈습니다. 감사합니다
```
