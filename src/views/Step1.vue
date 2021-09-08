<template>
  <div id=’app’>
    <div class="card mt-5">
    <div class="card-header" >
      STEP1  お客様の情報を入力して下さい
    </div>
    <div class="card-body">
      <h6 class="card-title text-primary">- 性別 -</h6>
      <div class="form-check-inline">
        <label class="mr-2"><input name="select" type="radio" value="男性" @click="updateGender">男性</label>
        <label class="mr-2"><input name="select" type="radio" value="女性" @click="updateGender">女性</label>
      </div>

      <h6 class="card-title text-primary mt-3">- 生年月日 -</h6>
      <select @change="updateYear">
        <option v-for="year in YearList" :key="year" :value="year" >{{ year }}年</option>
      </select>
   
      <select class="ml-3" @change="updateMonth">
        <option v-for="month in MonthList" :key="month" :value="month">{{ month }}月</option>
      </select>

      <select class="ml-3" @change="updateDay">
        <option v-for="day in DayList" :key="day" :value="day">{{ day }}日</option>
      </select>
    </div>
  </div>

  <button class="mx-auto" @click="Next">Step2へ</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      YearList: [],
      MonthList: [],
      DayList: [],
      numYear: 100,
      numMonth: 12,
      numDay: 31,
    }
  },
  created() {
    const year = new Date().getFullYear()
    const month = 1
    const day = 1
//現在より100年前までの年を表示
    for (let i = 0; i < this.numYear; i++) {
      this.YearList.unshift(year - i)
    }
    this.selectedYear = year;
//1月から12月までを表示
    for (let i = 0; i < this.numMonth; i++) {
      this.MonthList.unshift(month + i)
    }
    this.selectedMonth = month;
//1日から31日までを表示
    for (let i = 0; i < this.numDay; i++) {
      this.DayList.unshift(day + i)
    }
    this.selectedDay = day;
  },
  methods: {
    updateGender(selectedGender){
      this.$store.commit("updateGender", selectedGender.target.value);
    },
    updateYear(selectedYear){
      this.$store.commit("updateYear", selectedYear.target.value);
    },
    updateMonth(selectedMonth){
      this.$store.commit("updateMonth", selectedMonth.target.value);
    },
    updateDay(selectedDay){
      this.$store.commit("updateDay", selectedDay.target.value);
    },
    Next(){
        this.$router.push("/step2")
    }
  }
}
</script>