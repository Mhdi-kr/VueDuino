<template>
  <div class="container">
    <model-obj class="model-container" src="static/nodeMCU.obj" @click="log"></model-obj>
  </div>
</template>
<style scoped>
.model-container {
  max-height: 350px;
  max-width: 500px;
}
</style>
<script>
import { ModelObj } from 'vue-3d-model'
export default {
  name: 'node',
  components: {
    ModelObj
  },
  data: ()=>({

  }),
  methods: {
    log(){
      console.log('asdasd')
    }
  }
}
</script>
