<template>
  <div
    class="videoplayer-vuejs-container"
    :class="`${fullscreen ? 'fullscreen' : ''} ${paused ? 'paused' : ''}`"
  >
    <div class="wrapper">
      <div
        class="video-timeline"
        @click="changeVideoTimeline"
        @mousedown="startDragProgressBar"
        @mousemove="draggableProgressBar"
      >
        <div class="progress-area">
          <span>{{ formatTime(currentTime) }}</span>
          <div class="progress-bar"></div>
        </div>
      </div>
      <ul class="video-controls">
        <li class="options left">
          <button class="volume" @click="toggleVolumeMute">
            <img
              :src="Number(volume) > 0 ? volumeHighIcon : volumeMuteIcon"
              alt="volume"
            />
          </button>
          <input
            type="range"
            :value="volume"
            min="0"
            max="1"
            step="0.01"
            @input="changeVolume"
          />
          <div class="video-timer">
            <p class="current-time">{{ formatTime(currentTime) }}</p>
            <p class="separator">/</p>
            <p class="video-duration">{{ formatTime(duration) }}</p>
          </div>
        </li>

        <li class="options center" v-if="smallScreen">
          <button class="skip-backward" @click="skip('backward')">
            <img src="../assets/icons/skip-backward.svg" alt="skip-backward" />
          </button>
          <button class="play-pause" @click="togglePlayPause">
            <img :src="paused ? playIcon : pauseIcon" alt="play-pause" />
          </button>
          <button class="skip-fowward" @click="skip('fowward')">
            <img src="../assets/icons/skip-forward.svg" alt="skip-forward" />
          </button>
        </li>

        <li class="options right">
          <div
            class="options-content resolution-content"
            @click="resolutionOptionsOpend = !resolutionOptionsOpend"
            v-if="sources.length > 1"
          >
            <button class="resolution">
              <img src="../assets/icons/settings.svg" alt="resolution" />
            </button>
            <ul
              class="options-item"
              :class="resolutionOptionsOpend ? 'opened' : ''"
            >
              <li
                v-for="option in sources"
                :key="option.resolution"
                :class="
                  option.resolution == currentSrc.resolution ? 'active' : ''
                "
                @click="changeResolutionOptions(option)"
              >
                {{ option.resolution }}
              </li>
            </ul>
          </div>
          <div
            class="options-content playback-content"
            @click="speedOptionsOpend = !speedOptionsOpend"
          >
            <button class="playback-speed">
              <img src="../assets/icons/video-speed.svg" alt="video-speed" />
            </button>
            <ul class="options-item" :class="speedOptionsOpend ? 'opened' : ''">
              <li
                v-for="option in speedOptions"
                :key="option.value"
                :class="option.active ? 'active' : ''"
                @click="changeSpeedOptions(option.value)"
              >
                {{ option.title }}
              </li>
            </ul>
          </div>
          <button class="pic-in-pic" @click="togglePicInPic">
            <img src="../assets/icons/pic-in-pic.svg" alt="pic-in-pic" />
          </button>
          <button class="fullscreen" @click="toggleFullscreen">
            <img src="../assets/icons/full-screen.svg" alt="full-screen" />
          </button>
        </li>
      </ul>
    </div>
    <video
      @click.self="togglePlayPause"
      @dblclick.self="toggleFullscreen"
      @timeupdate="timeupdate"
      @loadeddata="loadeddata"
      @play="paused = false"
      @pause="paused = true"
      ref="myVideo"
      autopictureinpicture="true"
      :controls="controls"
      preload="auto"
      :poster="poster"
      data-setup="{}"
    >
      <source :src="src" :type="type" />
      <!-- <source
        v-for="(source, index) in sources"
        :key="index"
        :src="source.src"
        :type="source.type"
      /> -->
    </video>
  </div>
</template>

<script>
import defaultPoster from '../assets/preview-video.svg'
import volumeHighIcon from '../assets/icons/volume-high.svg'
import volumeMuteIcon from '../assets/icons/volume-mute.svg'
import playIcon from '../assets/icons/play.svg'
import pauseIcon from '../assets/icons/pause.svg'

export default {
  name: 'VueVideoplayer',
  props: {
    sources: { type: Array, default: () => [] },
    poster: { type: String, default: defaultPoster },
  },
  data() {
    return {
      defaultPoster,
      volumeHighIcon,
      volumeMuteIcon,
      playIcon,
      pauseIcon,
      controls: false,
      smallScreen: false,
      draggingProgressBar: false,
      currentSrc: this.sources[0],

      video: null,
      paused: true,
      fullscreen: false,
      currentTime: '0',
      duration: '0',
      volume: '0.5',
      volumeBeforeMute: '0.5',
      speedOptionsOpend: false,
      speedOptions: [
        { title: '2x', value: 2, active: false },
        // { title: '1.75x', value: 1.75, active: false },
        { title: '1.5x', value: 1.5, active: false },
        // { title: '1.25x', value: 1.25, active: false },
        { title: 'normal', value: 1, active: true },
        // { title: '0.75x', value: 0.75, active: false },
        { title: '0.5x', value: 0.5, active: false },
        { title: '0.25x', value: 0.25, active: false },
      ],

      resolutionOptionsOpend: false,
      resolutionOptions: [
        { title: '240', value: 2, active: true },
        { title: '360', value: 1.5, active: false },
        { title: '480p', value: 1, active: false },
        { title: '720p', value: 0.5, active: false },
        { title: '1080p', value: 0.25, active: false },
      ],
    }
  },
  computed: {
    src() {
      const elementIndex = this.sources.findIndex(
        (element) =>
          this.currentSrc && this.currentSrc.resolution == element.resolution
      )
      return elementIndex > -1
        ? this.sources[elementIndex].src
        : this.sources[0].src
    },
    type() {
      const elementIndex = this.sources.findIndex(
        (element) =>
          this.currentSrc && this.currentSrc.resolution == element.resolution
      )
      return elementIndex > -1
        ? this.sources[elementIndex].type
        : this.sources[0].type
    },
  },
  methods: {
    formatTime(time) {
      let seconds = Math.floor(Number(time) % 60)
      let minutes = Math.floor(Number(time) / 60) % 60
      let hours = Math.floor(Number(time) / 3600)

      seconds = seconds < 10 ? `0${seconds}` : `${seconds}`
      minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
      hours = hours < 10 ? `0${hours}` : `${hours}`

      return Number(hours) == 0
        ? `${minutes}:${seconds}`
        : `${hours}:${minutes}:${seconds}`
    },

    loadeddata(e) {
      const { duration } = e.target
      this.duration = Math.round(duration) || '0'
    },
    timeupdate(e) {
      const { currentTime, duration } = e.target
      this.currentTime = Math.round(currentTime) || '0'
      const percent = (currentTime / duration) * 100
      this.video.parentElement
        .querySelector('.progress-area')
        .style.setProperty('--progress-width', `${percent}%`)
    },
    changeVideoTimeline(e) {
      const timelineWidth =
        this.video.parentElement.querySelector('.progress-area').clientWidth
      this.video.currentTime = (e.offsetX / timelineWidth) * this.video.duration
    },
    draggableProgressBar(e) {
      if (this.draggingProgressBar) {
        this.video.parentElement
          .querySelector('.progress-area')
          .style.setProperty('--progress-width', `${e.offsetX}px`)
        const timelineWidth =
          this.video.parentElement.querySelector('.progress-area').clientWidth
        this.video.currentTime =
          (e.offsetX / timelineWidth) * this.video.duration
      }
    },
    startDragProgressBar() {
      this.draggingProgressBar = true
    },
    stopDragProgressBar() {
      this.draggingProgressBar = false
    },

    toggleVolumeMute() {
      if (Number(this.video.volume)) {
        this.video.volume = '0.0'
        this.volume = '0.0'
      } else {
        this.video.volume = this.volumeBeforeMute
        this.volume = this.volumeBeforeMute
      }
    },
    changeVolume(e) {
      this.video.volume = e.target.value
      this.volume = e.target.value
      this.volumeBeforeMute =
        Number(e.target.value) == 0 ? '0.1' : e.target.value
    },

    togglePlayPause() {
      this.video.paused ? this.video.play() : this.video.pause()
    },
    skip(direction) {
      switch (direction) {
        case 'fowward':
          this.video.currentTime += 5
          break
        case 'backward':
          this.video.currentTime -= 5
          break
        default:
          break
      }
    },

    changeSpeedOptions(value) {
      const elementIndex = this.speedOptions.findIndex(
        (element) => element.value == value
      )
      if (elementIndex > -1) {
        this.video.playbackRate = value
        this.speedOptions = this.speedOptions.map((element) => ({
          ...element,
          active: false,
        }))
        this.speedOptions[elementIndex].active = true
      }
    },
    togglePicInPic() {
      if (!document.pictureInPictureElement)
        this.video.requestPictureInPicture()
      else document.exitPictureInPicture()
    },
    toggleFullscreen() {
      if (!document.fullscreenElement) {
        this.fullscreen = true
        this.video.parentElement.requestFullscreen()
      } else {
        this.fullscreen = false
        return document.exitFullscreen()
      }
    },

    changeResolutionOptions(selectedObject) {
      this.currentSrc = selectedObject
      const currentTime = this.video.currentTime
      const paused = this.video.paused
      this.video.load()
      this.video.currentTime = currentTime
      if (!paused) this.video.play()
    },

    checkMobility() {
      if (window.innerWidth < 768) {
        this.smallScreen = false
      } else {
        this.smallScreen = true
      }
    },
  },
  mounted() {
    this.video = this.$refs.myVideo
    window.addEventListener('mouseup', this.stopDragProgressBar)
    window.addEventListener('click', (e) => {
      if (
        !e.target.closest('.playback-content') &&
        !e.target.classList.contains('playback-content')
      ) {
        this.speedOptionsOpend = false
      }
      if (
        !e.target.closest('.resolution-content') &&
        !e.target.classList.contains('resolution-content')
      ) {
        this.resolutionOptionsOpend = false
      }
    })
    this.checkMobility()
    window.addEventListener('resize', this.checkMobility)
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/video-player.scss';
</style>
