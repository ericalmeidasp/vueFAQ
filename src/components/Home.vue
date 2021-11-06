<template>
  <div class="home">
    <header class="header">
      <div class="logo">
        <img :src="require('@/assets/images/astronaut.svg')" alt="" />
      </div>
      <div class="text-header">
        <h3>Perguntas Frequentes</h3>
        <p>Escolha a categoria desejada</p>
      </div>
    </header>
    <main class="main">
      <div
        class="items"
        v-for="(cat, index) in $allFaq"
        :key="cat.id"
        @click="goTo(index)"
      >
        <img :src="require(`@/assets/images/${cat.icon}`)" alt="" />
        <p>{{ cat.title }}</p>
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
    }
  },
  methods: {
    goTo(index) {
      const i = { ...this.$currentView, screen: 'Questions', categories: index, enter: true }
      this.$store.dispatch('newView', i)
    }
  }
}
</script>

<style scoped>
.home {
  width: 300px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  padding: 1rem;
  padding-inline: 2rem;
}

.header {
  display: grid;
  align-items: center;
}

.text-header {
  color: var(--color3);
  font: bold 20px Lato;
  line-height: 2;
}

.text-header p {
  font: normal 13px Lato;
}

.main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
}

.items {
  display: grid;
  grid-template-columns: 25px 1fr;
  gap: 2rem;
  color: var(--color3);
  justify-content: center;
  align-content: center;
  align-items: center;
  font: normal 16px Lato;
}

.items:hover {
  background-color: var(--color1);
  border-radius: 5px;
}
</style>
