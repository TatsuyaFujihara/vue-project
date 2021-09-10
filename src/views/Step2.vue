<template>
   <div id="app">
    <div class="card mt-5">
      <div class="card-header" >
        STEP2  以下にお答え下さい
      </div>
      <div class="card-body">
        <div>
          <h6 class="card-title text-primary">- これは、1つ目の質問ですか -</h6>
              <input
              @click="Q_Date.isShow1 = true"
              name="select"
              type="radio"
              id="yes"
              value="はい"
              v-model="answer1"
            >
            <label class="mr-2" for="yes">はい</label>
            <input
              @click="Q_Date.isShow1 = true"
              name="select"
              type="radio"
              id="no"
              value="いいえ"
              v-model="answer1"
            >
            <label class="mr-2" for="no">いいえ</label>
        </div>

        <div v-if="Q_Date.isShow1">
          <h6 class="card-title text-primary">- これは、2つ目の質問ですか -</h6>
              <input
              @click="Q_Date.isShow2 = true"
              name="select-2"
              type="radio"
              id="yes-2"
              value="はい"
              v-model="answer2"
            >
            <label class="mr-2" for="yes-2">はい</label>
            <input
              @click="Q_Date.isShow2 = true"
              name="select-2"
              type="radio"
              id="no-2"
              value="いいえ"
              v-model="answer2"
            >
            <label class="mr-2" for="no-2">いいえ</label>
        </div>

        <div v-if="Q_Date.isShow2">
          <h6 class="card-title text-primary">- これは、3つ目の質問ですか -</h6>
              <input
              name="select-3"
              type="radio"
              id="yes-3"
              value="はい"
              v-model="answer3"
            >
            <label class="mr-2" for="yes-3">はい</label>
            <input
              name="select-3"
              type="radio"
              id="no-3"
              value="いいえ"
              v-model="answer3"
            >
            <label class="mr-2" for="no-3">いいえ</label>
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
      Q_Date: {
        isShow1: false,
        isShow2: false
      }
    }
  },

computed: {
    answer1: {
      get() {
        return this.$store.state.answer1;
      },
      set(answer1) {
        this.$store.dispatch("updateAnswer1", answer1);
      }
    },
    answer2: {
      get() {
        return this.$store.state.answer2;
      },
      set(answer2) {
        this.$store.dispatch("updateAnswer2", answer2);
      }
    },
    answer3: {
      get() {
        return this.$store.state.answer3;
      },
      set(answer3) {
        this.$store.dispatch("updateAnswer3", answer3);
      }
    },
    gender() {
      return this.$store.state.gender;
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