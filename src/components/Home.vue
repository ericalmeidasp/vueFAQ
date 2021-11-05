<template>
  <div class="home">
    <header class="header">
      <div class="logo">
        <img :src="astronaut" alt="" />
      </div>
      <div class="text-header">
        <h3>Perguntas Frequentes</h3>
        <p>Escolha a categoria desejada</p>
      </div>
    </header>
    <main class="main">
      <div class="items" @click="goTo('Questions')">
        <img :src="rocket" alt="" />
        <p>Basecamp</p>
      </div>
      <div class="items">
        <img :src="astronautHelmet" alt="" />
        <p>Bootcamp</p>
      </div>
      <div class="items">
        <img :src="studantHat" alt="" />
        <p>Cataline</p>
      </div>
      <div class="items">
        <img :src="partnership" alt="" />
        <p>Parcerias</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      astronaut: require('@/assets/images/astronaut.svg'),
      rocket: require('@/assets/images/rocket.svg'),
      astronautHelmet: require('@/assets/images/astronaut-helmet.svg'),
      studantHat: require('@/assets/images/student-hat.svg'),
      partnership: require('@/assets/images/partnership.svg')
    }
  },
  methods: {
    goTo(view) {
      this.$store.dispatch('newView',view)
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
</style>