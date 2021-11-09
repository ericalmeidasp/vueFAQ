<template>
  <div class="container">
    <div class="aplication">
      <transition
        mode="out-in"
        :enter-active-class="
          $currentView.enter
            ? 'animate__animated animate__slideInRight animate__faster'
            : 'animate__animated animate__slideInLeft animate__faster'
        "
      >
        <component :is="$currentView.screen" />
      </transition>
    </div>
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
import Questions from '@/components/Questions.vue'
import Answer from '@/components/Answer.vue'
import 'animate.css'

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
  created() {
    this.$store.dispatch('fetchFaq')
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 305px;
  grid-template-rows: 29.839rem;
  justify-content: center;
  align-content: center;
  height: 100vh;
  background: #f5f6f8;
  overflow: hidden;
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
  overflow: hidden;
}
</style>
