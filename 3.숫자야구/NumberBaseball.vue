<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" minlength="4" maxlength="4" v-model="value" />
      <button type="submit">입력</button>
    </form>
    <div>시도 : {{ tries.length }}</div>
    <ul>
      <li v-for="(t, index) in tries" v-bind:key="index">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * 1부터 9까지의 숫자 중에서 중복 없이 무작위로 4개의 숫자를 선택하여 배열로 반환하는 함수
 */
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

export default {
  data() {
    return {
      answer: getNumbers(), // ex, [1, 3, 5, 7]
      tries: [], // 시도 수
      value: "", // 입력
      result: "", // 결과과
    };
  },
  methods: {
    onSubmitForm() {
      // 정답 맞췄으면,
      if (this.value === this.answer.join("")) {
        this.tries.push({
          try: this.value,
          result: "홈런",
        });
        this.result = "홈런";
        alert("게임을 다시 실행합니다.");
        this.value = "";
        this.answer = getNumbers();
        this.$refs.answer.focus();
        this.tries = [];
      }
      // 틀렸다면,
      else {
        // 10번째 시도
        if (this.tries.length >= 9) {
          this.result = `10번 넘게 틀려서 실패. 답은 ${this.answer.join(",")}였습니다.`;
          alert("게임을 다시 실행합니다.");
          this.value = "";
          this.answer = getNumbers();
          this.$refs.answer.focus();
          this.tries = [];
        }

        let strike = 0;
        let ball = 0;
        const answerArray = this.value.split("").map(v => parseInt(v));

        for (let i = 0; i < 4; i++) {
          // 숫자 자릿 수 일치
          if (answerArray[i] === this.answer[i]) {
            strike++;
          }
          // 숫자만 일치
          else if (this.answer.includes(answerArray[i])) {
            ball++;
          }
        }
        this.tries.push({
          try: this.value,
          result: `${strike} 스트라이크, ${ball} 볼 입니다.`,
        });
        this.value = "";
        this.$refs.answer.focus();
      }
    },
  },
};
</script>

<style></style>
