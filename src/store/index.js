import { createStore } from 'vuex'
import { faqCategories } from '@/utils/db.json'

export default createStore({
  state: {
    faqQuestion: [],
    currentView: { screen: 'Home', categories: 1, questions: {}, enter: true }
  },
  mutations: {
    SET_FAQ(state, faqQuestion) {
      state.faqQuestion = faqQuestion
    },
    SET_VIEW(state, view) {
      state.currentView = view
    }
  },
  actions: {
    fetchFaq(context) {
      const faqQuestion = faqCategories
      context.commit('SET_FAQ', faqQuestion)
    },
    newView(context, newview) {
      const view = newview
      context.commit('SET_VIEW', view)
    }
  },
  getters: {
    $allFaq(state) {
      return state.faqQuestion
    },
    $currentView(state) {
      return state.currentView
    },
    $currentCat(state) {
      return state.faqQuestion[state.currentView.categories].questions
    }
  }
})
