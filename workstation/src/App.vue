<template>
  <div class="container py-5 px-5">
    <div class="pageloader" :class="{'is-active': !pageOnLoad}"></div>
    <div class="columns">
      <div class="column">
        <Location/>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <network/>
      </div>
      <div class="column">
        <div class="card px-5 py-5">
          <div class="media-content">
            <p class="title is-4">network details</p>
            <p class="subtitle is-6"></p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card px-5 py-5">
          <div class="media-content">
            <p class="title is-4">network details</p>
            <p class="subtitle is-6"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="card px-5 py-5">
          <div class="media-content">
            <p class="title is-4">Connected nodes</p>
            <table class="table is-striped is-hoverable is-fullwidth">
              <thead>
              <tr>
                <th>IP</th>
                <th>MAC</th>
                <th>MAC address</th>
              </tr>
              </thead>
              <tbody>
              <tr class="animate__animated animate__fadeIn is-clickable">
                <td>192.168.1.1</td>
                <td>4A:4A:4A:4A:4A:4A</td>
                <td>4A:4A:4A:4A:4A:4A</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Network from "@/components/network";
import Location from '@/components/location'
import Footer from '@/components/footer'

export default {
  name: 'App',
  components: {
    Network,
    Location,
    Footer
  },
  data: () => ({
    pageOnLoad: false,
  }),
  mounted() {
    setTimeout(() => {
      this.pageOnLoad = true
    }, 750)
  }
}
</script>

<style>
</style>
