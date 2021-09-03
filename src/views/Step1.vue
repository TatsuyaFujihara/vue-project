<template>
  <div id=’app’>
    <div class="card mt-5">
    <div class="card-header" >
      STEP1  お客様の情報を入力して下さい
    </div>
    <div class="card-body">
      <h6 class="card-title text-primary">- 性別 -</h6>
      <div class="form-check-inline">
        <label class="mr-2"><input name="select" type="radio">男性</label>
        <label class="mr-2"><input name="select" type="radio">女性</label>
      </div>
      <h6 class="card-title text-primary mt-3">- 生年月日 -</h6>
      
      <date-dropdown default="2000-01-01" min="1960" max="2020" v-model="selectedDate" months-names="1月, 2月, 3月, 4月, 5月, 6月, 7月, 8月, 9月, 10月, 11月, 12月"/>
      <p>選択された日付<strong>{{ selectedDate }}</strong></p>
    </div>
  </div>

  <button class="mx-auto" @click="Next">Step2へ</button>
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
     Next(){
        this.$router.push("/step2")
    }
  }
}
</script>