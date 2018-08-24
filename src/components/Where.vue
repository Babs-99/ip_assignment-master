<template lang='pug'>
    div(style="margin:auto;background: #e5e3df;")
        .hero()
        iframe(src="https://maps.google.com/maps?q=13%20hugh%20ave%20alagomeji%20yaba&t=&z=13&ie=UTF8&iwloc=&output=embed", width='1920', height='1080')
</template>

<script>
export default {

  name: 'Where',
  data () {
    return {

    }
  },
  created () {
    if (window.innerWidth <= 768) {
      this.mobile = true
    }
    console.log(this.mobile)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass" >
@import "@/assets/vars.sass"

#map
    height: auto
    min-height: 800px
    width: 100%
    display: block
</style>
