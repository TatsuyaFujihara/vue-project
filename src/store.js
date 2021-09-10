import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        gender: "",
        birthY: "",
        birthM: "",
        birthD: "",
        answer1: "",
        answer2: "",
        answer3: "",
        Q_content: "",
    },
    getters: {
//ステップ１ 回答内容
        gender: state => state.gender,
        birthY: state => state.birthY,
        birthM: state => state.birthM,
        birthD: state => state.birthD,
// ステップ２ 回答内容
        answer1: state => state.answer1,
        answer2: state => state.answer2,
        answer3: state => state.answer3,
// ステップ3 回答内容
        Q_content: state => state.Q_content,
    },

    mutations: {
// ステップ１ 回答内容
        updateGender(state, gender) {
            state.gender = gender;
        },
        updateYear(state, birthY) {
            state.birthY = birthY;
        },
        updateMonth(state, birthM) {
            state.birthM = birthM;
        },
        updateDay(state, birthD) {
            state.birthD = birthD;
        },
// ステップ２ 回答内容
        updateAnswer1(state, answer1) {
            state.answer1 = answer1;
        },
        updateAnswer2(state, answer2) {
            state.answer2 = answer2;
        },
        updateAnswer3(state, answer3) {
            state.answer3 = answer3;
        },
// ステップ3 回答内容
        updateQuestion(state, Q_content) {
            state.Q_content = Q_content;
        }
    },
    
    actions: {
// ステップ１ 回答内容
        updateGender({commit}, gender) {
            commit("updateGender", gender);
        },
        updateYear({commit}, birthY) {
            commit("updateYear", birthY);
        },
        updateMonth({commit}, birthM) {
            commit("updateMonth", birthM);
        },
        updateDay({commit}, birthD) {
            commit("updateDay", birthD);
        },
// ステップ２ 回答内容
        updateAnswer1({commit}, answer1) {
            commit("updateAnswer1", answer1);
        },
        updateAnswer2({commit}, answer2) {
            commit("updateAnswer2", answer2);
        },
        updateAnswer3({commit}, answer3) {
            commit("updateAnswer3", answer3);
        },
// ステップ3 回答内容
        updateQuestion({commit}, Q_content) {
            commit("updateQuestion", Q_content);
        }
    }
});