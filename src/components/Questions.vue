<template>
  <div class="questions">
    <header class="header">
      <img :src="arrowleft" alt="" class="backarrow" />
      <div class="text-header">
        <h3>Basecamp</h3>
        <p>Selecione uma pergunta</p>
      </div>
      <img :src="rocket" alt="" />
    </header>
    <main class="main">
      <div class="item-question">Basecamp é gratuito?</div>
      <div class="item-question">Pergunta</div>
      <div class="item-question">Pergunta</div>
     
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rocket: require('@/assets/images/rocket.svg'),
      arrowleft: require('@/assets/images/arrow-left.svg')
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
}
</style>