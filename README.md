# videoplayer-vuejs

This package is a video player for vue js.

⚠️ Now when you are using ([vue 3.x](https://vuejs.org/)).

---

## install

the `videoplayer-vuejs` component can use in your Vue.js app.

```bash
npm install videoplayer-vuejs
```

---

## Usage

main.js

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import VideoplayerVuejs from 'videoplayer-vuejs'
import 'videoplayer-vuejs/dist/style.css'

const app = createApp(App)
app.use(VideoplayerVuejs)
app.mount('#app')
```

your-component.vue for example `App.vue` (`Options API`)

```javascript
<template>
  <VideoplayerVuejs :sources="videoSource" :poster="poster" />
</template>

<script>
export default {
  data() {
    return {
      videoSource: [
        { resolution: '240', src: 'https://example.com/videos/video-240.mp4', type: 'video/mp4' },
        { resolution: '360', src: 'https://example.com/videos/video-360.mp4', type: 'video/mp4' },
        { resolution: '480p', src: 'https://example.com/videos/video-480p.mp4', type: 'video/mp4' },
        { resolution: '720p', src: 'https://example.com/videos/video-720p.mp4', type: 'video/mp4' },
        { resolution: '1080p', src: 'https://example.com/videos/video-1080p.mp4', type: 'video/mp4' },
      ],
      poster: "https://example.com/images/poster.png",
    }
  },
}
</script>
```

your-component.vue for example `App.vue` (`script setup`)

```javascript
<template>
  <VideoplayerVuejs :sources="videoSource" :poster="poster" />
</template>

<script setup>
const videoSource = [
  { resolution: '240', src: 'https://example.com/videos/video-240.mp4', type: 'video/mp4' },
  { resolution: '360', src: 'https://example.com/videos/video-360.mp4', type: 'video/mp4' },
  { resolution: '480p', src: 'https://example.com/videos/video-480p.mp4', type: 'video/mp4' },
  { resolution: '720p', src: 'https://example.com/videos/video-720p.mp4', type: 'video/mp4' },
  { resolution: '1080p', src: 'https://example.com/videos/video-1080p.mp4', type: 'video/mp4' },
]
const poster = "https://example.com/images/poster.png"
</script>
```

---

## Props

prop | description | type| default
:-------: | -------  |  :-------:  |  :-------:
poster | The poster specifies an image to be shown until the user play the video  | String | ''
sources | Array of objects of video sources, each object is for quality | Array | []

## Obeject of `'sources'` prop

key | description | type| default
:-------: | -------  |  :-------:  |  :-------:
resolution | string that shown for user to select resolution  | String | ''
src | video url  | String | ''
type | Media Type for example `video/mp4` - `video/webm` - `video/ogg` | String | 'video/mp4'

---
---

### Developd by [Mohamed ElSohagy](https://github.com/moelsohagy)
