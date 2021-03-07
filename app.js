const App = {
  data() {
    return {
      title: 'Task list:',
      placeholderStr: 'Task name',
      inputValue: '',
      notes: []
    }
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    toUpper(str) {
      return str.toUpperCase()
    },
    removeNote(idx, event) {
      this.notes.splice(idx, 1)
    },
    doubleCount() {
      console.log('doubleCount');
      return this.notes.length * 2
    }
  },
  computed: {
    doubleCountComp() {
      console.log('doubleCountComp');
      return this.notes.length * 2
    }
  },
  watch: {
    inputValue(value) {
      console.log(value);
    }
  }
}
Vue.createApp(App).mount('#app')