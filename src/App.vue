<template>
  <div class="container">
    <div class="aplication">
      <component :is="$currentView" />
    </div>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import Questions from '@/components/Questions.vue'
import Answer from '@/components/Answer.vue'

export default {
  components: { Home, Questions, Answer },
  computed: {
    $allFaq() {
      return this.$store.getters.$allFaq
    },
    $currentView() {
      return this.$store.getters.$currentView
    }
  },
  // created() {
  //   this.$store.dispatch('newView', 'Home')
  // }
}
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100vh;
}

.aplication {
  height: 457px;
  width: 305px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  background: transparent linear-gradient(180deg, #404451 0%, #26282c 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 10px 30px #3f445266;
  border-radius: 15px;
  justify-content: center;
}
</style>