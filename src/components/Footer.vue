<!-- Template for Footer Component. Writting in Jade ( Pug ) and transpiled into HTML -->
<template lang='pug'>
  footer.footer
    .hero
    .columns
      .column
        p
          b(style="font-family:'Quattrocento'") &copy; 2018 - Electronics Settlement Limited
          | &nbsp;|&nbsp;All rights reserved
      .column
        .columns
          .column.times
            h1 Contact Us:
            p
              b Address:&nbsp;
              span  13 Hugh Aves road, Alagomeji Yaba, Lagos, Nigeria
            p
              b Phone:&nbsp;
              span  +234 813 8072 711

</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass" >
@import "../assets/vars.sass"
h1, h2
  font-weight: normal;

ul
  list-style-type: none;
  padding: 0;

li
  display: inline-block;
  margin: 0 10px;

hr
  background: #e7e7e7
  width: 85%
  margin-left: auto
  margin-right: auto

h1
  font-weight: Bold
  font-family: 'Quattrocento', sans-serif

.times > p
  text-align: center

p
  font-family: 'Lato', sans-serif
  text-align: left
  color: #ffffff7a
  font-size: 14px
  @media (max-width: 768px)
    font-size: 12px
  b
    letter-spacing: 1px
    color: #e2e2e2

footer
  background: #343a40
  color: white
  padding-top: 2rem
  padding-bottom: 3rem
  width: 100%
</style>
