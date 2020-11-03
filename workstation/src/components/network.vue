<template>
  <div class="card px-5 py-5">
    <div class="media-content">
      <div class="is-flex is-justify-content-space-between">
        <p class="title is-4">Servers status</p>
        <i class="fa fa-rotate-right is-clickable" @click="checkSequence" style="font-size:24px; opacity: 0.25"></i>
      </div>
      <div class="field is-flex is-justify-content-space-between is-align-items-center my-0">
        <input class="is-checkradio has-no-border" :class="{'is-success' : express, 'is-danger' : !express}" type="radio" checked="checked">
        <label class="my-0">Express</label>
        <p>127.0.0.1:3000</p>
      </div>
      <div class="field is-flex is-justify-content-space-between is-align-items-center my-0">
        <input class="is-checkradio has-no-border" :class="{'is-success' : express, 'is-danger' : !express}" type="radio" checked="checked">
        <label class="my-0">Express</label>
        <p>127.0.0.1:3000</p>
      </div>
      <div class="field is-flex is-justify-content-space-between is-align-items-center my-0">
        <input class="is-checkradio has-no-border" :class="{'is-success' : express, 'is-danger' : !express}" type="radio" checked="checked">
        <label class="my-0">Express</label>
        <p>127.0.0.1:3000</p>
      </div>
      <div class="field is-flex is-justify-content-space-between is-align-items-center my-0">
        <input class="is-checkradio has-no-border" :class="{'is-success' : express, 'is-danger' : !express}" type="radio" checked="checked">
        <label class="my-0">Express</label>
        <p>127.0.0.1:3000</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'network',
  data: () => ({
    express: false,
    redis: false,
    mqtt: false,
    mongodb: false,
  }),
  methods: {
    checkSequence(){
      this.checkExpress()
      this.checkRedis()
      this.checkMQTT()
    },
    checkExpress() {
      axios.get("http://127.0.0.1:3000/status")
          .then((response) => {
            console.log(response)
            this.express = response.status === 200;
          }).catch((err) => {
        console.log(err)

      })
    },
    checkMQTT() {
      axios.get("http://127.0.0.1:1883")
          .then((response) => {
            console.log(response)
            this.mqtt = response.status === 200;
          }).catch((err) => {
        console.log(err)
        this.mqtt = false
      })
    },
    checkRedis() {
      axios.get("http://127.0.0.1:6379")
          .then((response) => {
            console.log(response)
            this.redis = response.status === 200;
          }).catch((err) => {
        console.log(err)
        this.mqtt = false
      })
    }
  },
  mounted() {
    this.checkSequence()
  }
}
</script>
