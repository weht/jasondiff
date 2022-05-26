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
