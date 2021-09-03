<template>
  <div id=’app’>
    <div class="card mt-5">
      <div class="card-header" >
        STEP3  ご相談内容をご記入ください
      </div>
      <div class="card-body">
        <h6 class="card-title text-primary">- ご相談内容 -</h6>
      </div>
      <textarea></textarea>
    </div>
  <button @click="Back">Step2へ戻る</button>
  <button class="ml-3">次へ</button>
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
     Back(){
        this.$router.push("/step2")
    }
  }
}
</script>