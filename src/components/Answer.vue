<template>
  <div class="answer">
    <header class="header">
      <img
        :src="require('@/assets/images/arrow-left.svg')"
        alt=""
        class="backarrow"
        @click="goBack"
      />
      <div class="text-header">
        <p>{{ $currentCat[$currentView.questions].title }}</p>
      </div>
    </header>
    <main class="main">
      <div
        class="item-question"
        v-html="$currentCat[$currentView.questions].content"
      ></div>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    $currentView() {
      return this.$store.getters.$currentView
    },
    $currentCat() {
      return this.$store.getters.$currentCat
    }
  },
  methods: {
    goBack() {
      const i = {...this.$currentView, screen: 'Questions', enter: false}
      this.$store.dispatch('newView', i)
    }
  }
}
</script>

<style scoped>
.answer {
  width: 300px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  justify-content: center;
  align-content: center;
}

.header {
  display: grid;
  grid-template-columns: 35px 1fr;
  align-items: center;
  padding: 1.5rem;
  border-bottom: solid 1px var(--color1);
  gap: 1rem;
}

.text-header {
  color: var(--color3);
  font: normal 16px Lato;
}
::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
.main {
  max-height: 350px;
  padding: 1rem;
  padding-inline: 1.5rem;
  display: grid;
  overflow-y: scroll;
  
}

.item-question {
  color: var(--color3);
  font: normal 13px Lato;
  line-height: 2;
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
