<!-- Template for Navbar Component. Writting in Jade ( Pug ) and transpiled into HTML -->
<template lang='pug'>
  .hero
    nav.navbar
      .navbar-brand
        .navbar-item.brand-item
          router-link.navbar-item( :to="{name:'Home'}" @click="toggleBurger")
            p Trill Xoe
        .navbar-burger.burger(@click="toggleBurger" data-target='navbarExampleTransparentExample' v-bind:class="[burgerIsToggled & mobile? 'is-active' : '']" )
          span
          span
          span
      #navbarExampleTransparentExample.navbar-menu(v-bind:class="[burgerIsToggled ? 'is-active' : '']")
        .navbar-start
          router-link.navbar-item( :to="{name:'Home'}" @click="toggleBurger" v-if="!mobile")
            | Home
          .navbar-item.has-dropdown.is-hoverable
            p.navbar-link(href='/documentation/overview/start/' v-bind:class="[!isMobileBurger ? 'is-hidden' : '']" @click="toggleBurger")
              span(v-if="!mobile") More Information
            .navbar-dropdown.is-boxed(@click="toggleBurger")
              router-link.navbar-item( :to="{name:'Home'}" @click="toggleBurger" v-if="mobile")
                | Home
              router-link.navbar-item( :to="{name:'Home'}" @click="toggleBurger" v-if="mobile")
                | Home
              router-link.navbar-item(:to="{name:'NewsRoom'}"  )
                | Electronics Settlement Limited
              router-link.navbar-item(:to="{name:'Where'}"  )
                | Where is ESL
          // router-link.navbar-item( :to="{name:'Me'}" @click="toggleBurger" v-if="!mobile")
          //   | About Me
        .navbar-end
          .navbar-item
            .field.is-grouped
              p.control(v-if="socialMedia.Twitter.isActive")
                a.bd-tw-button.button.round-icon.blue-icon(data-social-network='Twitter', data-social-action='tweet', data-social-target='http://localhost:4000', target='_blank', href='https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://localhost:4000&via=jgthms')
                  span.icon
                    i.fab.fa-twitter
              p.control(v-if="socialMedia.Facebook.isActive")
                a.bd-tw-button.button.round-icon.orange-icon(data-social-network='Facebook', data-social-action='tweet', data-social-target='http://localhost:4000', target='_blank', href='https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://localhost:4000&via=jgthms')
                  span.icon
                    i.fab.fa-facebook
              p.control(v-if="socialMedia.Pinterest.isActive")
                a.bd-tw-button.button.round-icon.red-icon(data-social-network='Facebook', data-social-action='tweet', data-social-target='http://localhost:4000', target='_blank', href='https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://localhost:4000&via=jgthms')
                  span.icon
                    i.fab.fa-pinterest
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      // For Conditional Rendering
      mobile: false,
      // For Toggling DropDown
      burgerIsToggled: false,
      // In order to manage social media via conditional rendering
      socialMedia: {
        Facebook: {
          isActive: false,
          link: ''
        },
        Twitter: {
          isActive: false,
          link: ''
        },
        Pinterest: {
          isActive: false,
          link: ''
        }
      }
    }
  },
  created () {
    // Check if resolution is that of a tablet or smaller
    if (window.innerWidth <= 768) {
      this.mobile = true
    }
  },
  methods: {
    isMobileBurger: function () {
      if (this.mobile && this.burgerIsToggled) { return true }
      return false
    },
    toggleBurger: function () {
      this.burgerIsToggled = !this.burgerIsToggled
      console.log(`Burger toggled to ${this.burgerIsToggled}`)
    },
    linkToggleBurger: function () {
      this.burgerIsToggled = false
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

.is-hidden
  display: none

.navbar
  background: white

.navbar-item
  font-family: 'Lato',sans-serif
  font-weight: Bold
  transition: all 0.15s ease

.main-item:hover
  border-bottom: 3px solid $VertexOrange

.round-icon
  border-radius: 25px;
  color: white;
  font-weight: 300
  transition: all 0.45s ease

.navbar-item img
    max-height: 2.5rem !important;
</style>
