<template lang='pug'>
    div
        .parallax.parallax-screen.me-hero(style="background-position:initial" )
            div.li-header
                h1.li-header-text(style="font-family: Quattrocento;text-shadow: 1px 1px 3px #222222;") HOLA AMIGO!&#9;
                    img(src="../assets/nyan.gif" style="width:10%")
                hr.smaller
                h3.column-text.light(style="width:60%") Hi and welcome to my IP Assignment website!!. I am Babalola Awe also known as "Trill Xoe" in my gaming and music circles.
                br
                br
                h3.column-text.light(style="width:60%") I'm an up and coming music producer, but also I spend my time learning (struggling lol) on how to code
        .parallax.parallax-screen.handshake-hero(style="background-position:initial" )
            div.li-header
                h1.li-header-text(style="font-family: Quattrocento;text-shadow: 1px 1px 3px #222222;") How I got my internship.
                hr.smaller
                h3.column-text.light Well...It was a really TOUGH process
                br
                br
                h3.column-text.light So Electronics Settlement Limited is one of the top rising Fintech companies in the country (Nigeria). I sent them an email stating my interest in interning for their company.
                br
                br
                h3.column-text.light I went through LOOONGGG and tiring interviews but eventually, I secured the bag :)
        .parallax.parallax-screen.parallax-hero(style="background-position:initial" )
            div.li-header
                h1.li-header-text(style="font-family: Quattrocento;text-shadow: 1px 1px 3px #222222;") My&nbsp;
                    span(style="font-family: Almendra Display;font-weight:bold") Internship Adventure
                hr.smaller
                h3.column-text.light
                    span I interned with a FinTech company called&nbsp;
                        b Electronics Settlement Limited (ESL).
                br
                br
                h3.column-text.light
                    span ESL was looking at developing effective chatbots for various companies such as Investment One, and also Nigerian banks such as GTBank and Access Bank. I was brought into the company as a web devloper.
                br
                br
                h3.column-text.light I chose ESL because of the learnng experience I could gain from this company. The potential it has to offer to the Fintech industry in Africa and overseas.
                br
                br
                h3.column-text.light Before joining ESL, I had plans to join a company with young staff. THis is for easy communication and easy bonding. Thankfully ESL had that and I am happy to say that this was one of the smoothest and most enjoyable internship becasue of the family-like bonding.
        .parallax.parallax-screen.meditation-hero(style="background-position:initial" )
            div.li-header
                h1.li-header-text(style="font-family: Quattrocento;text-shadow: 1px 1px 3px #222222;") Internship Reflection
                hr.smaller
                h3.column-text.light
                    span On further reflection on my internship, I believe it has been really good i both work experience and social experience. I have been able to learn certain tools which can be helpful for me in the work world, i.e development of an effective bot. Also I've been able to build a friendship with ESL, such that they are offering to have me again next year.l/
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass" >
@import "@/assets/vars.sass"

.avatar
    height: 250px
    width: 250px
    border-radius: 250px

.card
    width: 50%;
    margin: 1rem auto
    border-radius: 20px
    box-shadow: inset 1px 2px 20px 0px #d5d5d5c4;

.card-content
    padding: 0.3rem

.column
    padding: 0.5rem 0.5rem

p
    font-family: "Lato", sans-serif;

hr
    margin: 0.5em auto
    margin-bottom: 1em
    width: 60%

.parallax
    /* Set a specific height */
    overflow: hidden
    max-height: 350px
    width: 100%
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    p
      text-shadow: 0px 2px 10px #525252
      padding: 5%
      color: white
      font-family: "Montserrat", sans-serif;
      font-size: 60px;
      text-align: left
      line-height: 1em
      letter-spacing: 0.0121951em;
      font-weight: bold
      max-width: 100%
      display: inline-block
      position: relative
      @media (max-width: 330px)
          font-size: 35px
      @media (max-width: 768px) and (min-width:331px)
          font-size: 45px

.parallax-screen
    max-height: 1000px
    height: 100vh

.parallax-screen.auto
    @media (max-width: 768px)
        background-position: right
        height: auto
        max-height: max-content

.parallax-hero
    background-image: url("../assets/Compass.jpg");

.handshake-hero
    background-image: url("../assets/handshake.jpg");

.me-hero
    background-image: url("../assets/me.jpg");

.meditation-hero
    background-image: url("../assets/meditation.jpg");

.li-header
    text-align: left;
    margin-left: 2em
    margin-top: 5vh
    hr.smaller
        width: 50%
        margin: 0
        margin-bottom: 0.3em
    @media (max-width: 768px)
        margin-top: 5vh
        margin-left: 0.5em

.li-header-text
    font-family: 'Raleway',serif
    font-size: 4rem
    margin-left: 0px
    font-weight: normal
    color: white
    @media (max-width: 768px)
        font-size: 35px
    text-shadow: 0 1px 6px #222;
    width: 75%

h3.column-text
    color: white
    font-family: "Lato", sans-serif;
    color: #1b2631
    font-size: 1.5rem;
    width: 75%
    text-align: left
    margin: left
    line-height: 1.5em
    letter-spacing: 0.0121951em;
    font-weight: normal
    max-width: 100%
    display: inline-block
    position: relative
    > b
        font-family: "Raleway", sans-serif

    @media (max-width: 1280px)
        font-size: 1.5rem

    @media (max-width: 768px)
        font-size: 1.1rem
        color: white !important
        width: 80%

    &.light
        text-shadow: 1px 1px 1px black
        color: white
</style>
