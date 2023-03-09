import VideoplayerVuejs from './components/VideoplayerVuejs.vue'

export default {
  install: (app, options) => {
    app.component('VideoplayerVuejs', VideoplayerVuejs)
  }
}