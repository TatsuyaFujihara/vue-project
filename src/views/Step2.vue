<template>
   <div id=’app’>
    <div class="card mt-5">
      <div class="card-header" >
        STEP2  以下にお答え下さい
      </div>
      <div class="card-body">
        <div>
          <h6 class="card-title text-primary">- これは、1つ目の質問ですか -</h6>
              <input
              name="select"
              type="radio"
              id="yes"
              value="yes"
              v-model="QuestionDate.answer1"
            >
            <label class="mr-2" for="yes">はい</label>
            <input
              name="select"
              type="radio"
              id="no"
              value="no"
              v-model="QuestionDate.answer1"
            >
            <label class="mr-2" for="no">いいえ</label>
            <p>{{QuestionDate.answer1}}</p>
        </div>

        <div v-if="QuestionDate.answer1.length">
          <h6 class="card-title text-primary">- これは、2つ目の質問ですか -</h6>
              <input
              name="select-2"
              type="radio"
              id="yes-2"
              value="yes"
              v-model="QuestionDate.answer2"
            >
            <label class="mr-2" for="yes-2">はい</label>
            <input
              name="select-2"
              type="radio"
              id="no-2"
              value="no"
              v-model="QuestionDate.answer2"
            >
            <label class="mr-2" for="no-2">いいえ</label>
            <p>{{QuestionDate.answer2}}</p>
        </div>

        <div v-if="QuestionDate.answer2.length">
          <h6 class="card-title text-primary">- これは、3つ目の質問ですか -</h6>
              <input
              name="select-3"
              type="radio"
              id="yes-3"
              value="yes"
              v-model="QuestionDate.answer3"
            >
            <label class="mr-2" for="yes-3">はい</label>
            <input
              name="select-3"
              type="radio"
              id="no-3"
              value="no"
              v-model="QuestionDate.answer3"
            >
            <label class="mr-2" for="no-3">いいえ</label>
            <p>{{QuestionDate.answer3}}</p>
        </div>

      </div>
    </div>
      <button @click="Back">Step1へ戻る</button>
      <button class="ml-3" @click="Next">Step3へ</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      QuestionDate: {
        answer1: [],
        answer2: [],
        answer3: []
      }
    }
  },
  methods: {
    Back(){
          this.$router.push("/step1")
    },
    Next(){
        this.$router.push("/step3")
    }
  }
}
</script>