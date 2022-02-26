<template>
  <div class="app-container" >
    <div>
      <a-button @click="upload">上传</a-button>
    </div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.app-container {
  height: 100%;
}

</style>
<script lang="ts">
// import Uploader from '@/components/Uploader.vue'
import { onMounted, ref } from 'vue'

export default {
  // components: { Uploader },
  setup() {
    const uploadRef = ref(null)

    function upload(){
      throw new Error('报错')
    }
    return {
      upload,
      uploadRef
    }
  }
}
</script>
