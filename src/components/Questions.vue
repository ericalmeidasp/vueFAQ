<template>
  <div class="questions">
    <header class="header">
      <img
        :src="require('@/assets/images/arrow-left.svg')"
        alt=""
        class="backarrow"
        @click="goBack"
      />
      <div class="text-header">
        <h3>{{ $allFaq[$currentView.categories].title }}</h3>
        <p>Selecione uma pergunta</p>
      </div>
      <img
        :src="
          require(`@/assets/images/${$allFaq[$currentView.categories].icon}`)
        "
        alt=""
      />
    </header>
    <main class="main">
      <div
        v-for="(question, index) in $currentCat"
        :key="question.id"
        class="item-question"
        @click="goTo(index)"
      >
        {{ question.title }}
      </div>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    $allFaq() {
      return this.$store.getters.$allFaq
    },
    $currentView() {
      return this.$store.getters.$currentView
    },
    $currentCat() {
      return this.$store.getters.$currentCat
    }
  },
  methods: {
    goBack() {
      const i = {...this.$currentView, screen: 'Home', enter: false}
      this.$store.dispatch('newView', i)
    },
    goTo(index) {
      const i = {...this.$currentView, screen: 'Answer', questions: index, enter: true}
      this.$store.dispatch('newView', i)
    }
  }
}
</script>

<style scoped>
.questions {
  width: 300px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-content: center;
}

.header {
  display: grid;
  grid-template-columns: 35px 1fr 35px;
  align-items: center;
  padding: 1.5rem;
  border-bottom: solid 1px var(--color1);
  gap: 1rem;
}

.text-header {
  color: var(--color3);
  font: bold 20px Lato;
}

.text-header p {
  font: normal 13px Lato;
  line-height: 2;
}

.main {
  padding: 1rem;
  padding-inline: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 53px;
  align-items: center;
}

.item-question {
  color: var(--color3);
  font: normal 16px Lato;
  height: 100%;
  display: grid;
  align-items: center;
}

.item-question:hover {
  background-color: var(--color1);
  border-radius: 5px;
}

.backarrow {
  padding: 1rem;
  justify-content: center;
}
.backarrow:hover {
  background-color: var(--color0);
  border-radius: 5px;
}
</style>
