<template>
  <div id=’app’>
    <div class="card mt-5">
    <div class="card-header" >
      STEP4   以下の内容をご確認ください
    </div>
    <div class="card-body">
      <h6 class="card-title text-primary">- 性別 -</h6>
      <p>{{ gender }}</p>
      <h6 class="card-title text-primary mt-3">- 生年月日 -</h6>
      <p>{{ birthYear + "年" }}  {{ birthMonth + "月" }}  {{ birthDay + "日" }}</p>

      <h6 class="card-title text-primary mt-3">- これは1つ目の質問ですか -</h6>
      <p>{{answer1}}</p>
      <h6 class="card-title text-primary mt-3">- これは２つ目の質問ですか -</h6>
      <p>{{answer2}}</p>
      <h6 class="card-title text-primary mt-3">- これは3つ目の質問ですか -</h6>
      <p>{{answer3}}</p>

      <h6 class="card-title text-primary mt-3">- ご相談内容 -</h6>
      <p>{{content}}</p>

      
    </div>
  </div>
  <button class="mx-auto" @click="Back">Step3へ</button>
  <button class="ml-4" @click="Send">送信する</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    gender() {
      return this.$store.getters.gender;
    },
    birthYear() {
      return this.$store.getters.birthY;
    },
    birthMonth() {
      return this.$store.getters.birthM;
    },
    birthDay() {
      return this.$store.getters.birthD;
    },
    answer1() {
      return this.$store.getters.answer1;
    },
    answer2() {
      return this.$store.getters.answer2;
    },
    answer3() {
      return this.$store.getters.answer3;
    },
    content() {
      return this.$store.getters.Q_content;
    },
  },
  methods: {
    Back(){
        this.$router.push("/step2")
    }
  }
}
</script>