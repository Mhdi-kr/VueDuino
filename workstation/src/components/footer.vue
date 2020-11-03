<template>
  <footer class="is-flex is-justify-content-center" style="opacity: 0.2">
    {{ date }} | <i class="fa fa-github mx-1" style="font-size: 24px"></i>
  </footer>
</template>
<script>
  export default {
    name: 'footer',
    data: ()=>({
      date: new Date().getFullYear()
    }),
  }
</script>
<style>

</style>
