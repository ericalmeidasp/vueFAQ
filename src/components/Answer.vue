<template>
  <div class="answer">
    <header class="header">
      <img :src="arrowleft" alt="" class="backarrow" />
      <div class="text-header">
        <p>Pergunta</p>
      </div>
    </header>
    <main class="main">
      <div class="item-question">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate dolorem aliquid molestias dolores ex error. Iste aperiam animi quaerat! Minima illo doloremque modi voluptates natus facilis odit, esse quisquam.</div>
     
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrowleft: require('@/assets/images/arrow-left.svg')
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
}

.text-header {
  color: var(--color3);
  font: normal 16px Lato;
}

.main {
  padding: 1rem;
  padding-inline: 1.5rem;
  display: grid;
}

.item-question {
  color: var(--color3);
  font: normal 13px Lato;
  
  line-height: 2;
}
</style>