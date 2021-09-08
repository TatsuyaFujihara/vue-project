<template>
  <div id=’app’>
    <div class="card mt-5">
      <div class="card-header" >
        STEP3  ご相談内容をご記入ください
      </div>
      <div class="card-body">
        <h6 class="card-title text-primary">- ご相談内容 -</h6>
      </div>
      <textarea @input="updateQuestion"></textarea>
    </div>
  <button @click="Back">Step2へ戻る</button>
  <button class="ml-3" @click="Next">次へ</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedDate: ''
    }
  },
  methods: {
    updateQuestion(questionContent){
      this.$store.commit("updateQuestion", questionContent.target.value);
    },
    Back(){
        this.$router.push("/step2")
    },
    Next(){
      this.$router.push("/review")
    }
  }
}
</script>