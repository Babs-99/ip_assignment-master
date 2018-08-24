<template lang='pug'>
    div(style="margin:auto;")
        .hero
            .parallax.parallax-hero
                p About&nbsp;
                    em Electronics Settlement Limited
        .hero(style="background: #ffffffde;padding:2em 0")
            .row
                .columns()
                    //- Left Column in NewsRoom
                    .column.is-6(style="margin:auto;overflow:auto;height:44em")
                        ul
                            .card(v-for="article, index in news" style="padding:0.5rem;margin-bottom:1rem")
                                .card-content
                                    .content
                                        li.news-item
                                            a.news-header(@click="getArticle(index)") {{article.title}}
                                            p.news-snippet {{article.snippet}}
                                            br
                                            p.news-date Acquirement / Creation Year: {{article.date}}
</template>

<script>
//  Import ScrollTo for easier forced movement
import scrollTo from 'vue-scrollto'

export default {
  name: 'NewsRoom',
  data () {
    return {
      // Current Article to be display object
      currentArticle: {
        title: '',
        date: '',
        article: '',
        index: null
      },
      isScrollable: false,
      // All articles to be displayed + content
      news: [
        {
          title: 'ESL creates a new payment service called Cash Envoy ',
          date: '   2009',
          snippet: 'CashEnvoy is a payment service that allows businesses receive payment online. CashEnvoy is owned by E-Settlement Ltd, an independent, private sector led, limited liability company located in Lagos, Nigeria focused on providing Innovative, Dependable, Easy-to-use, Affordable and Secure payment solutions. ',
          article: '<div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p></div>'
        },
        {
          title: 'I built my payments company because PayPal ignored my emails — Olaoluwa Awojoodu, Founder ESL',
          date: '2016',
          snippet: 'The above quote should be the mantra of every serious entrepreneur. If there’s anyone living that mantra to the fullest, it’s Olaoluwa Awojoodu. He is the founder and CEO of Electronic Settlement Limited (ESL), the company behind and array of noteable payment solutions in Nigeria including CashEnvoy and mobile POS solution, PayPad.',
          article: '<div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p></div>'
        },
        {
          title: 'ESL develops PayCenter ',
          date: '2017',
          snippet: 'We are setting up locations for financial access and services on every street in Africa by converting existing retail businesses like Pharmacies and grocery stores into locations for financial access and services. Using our mpos technology, we can offer services like cash out, deposits, fund transfer, bill payment, account opening, card issuance. loans etc to people in the neighborhood. Thereby eliminating the usual challenge of traveling long distances to access financial services in rural areas. The PayCentre solution, rolled out January 2017 has grown at a minimum of 400% month on month.',
          article: '<div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p></div>'
        }
      ]
    }
  },
  methods: {
    // Set the Chosen Article to be current article to be displayed
    // The article auto changes because vue-if
    getArticle (index) {
      // Set the Article and toggle multiple vars to toggle animations appropriately
      this.setArticle(this.news[index], index)
      this.isActive = true
      setTimeout(() => { this.ScrollToArticle() }, 1)
      setTimeout(() => { this.isScrollable = true }, 1000)
    },
    setArticle (selectedArticle, index) {
      // Duplicate selectedArticle into currentArticle
      this.currentArticle.title = selectedArticle.title
      this.currentArticle.article = selectedArticle.article
      this.currentArticle.date = selectedArticle.date
      this.currentArticle.index = index
    },
    ScrollToArticle () {
    // Directed Scrolling to selected article
      scrollTo.scrollTo('#article_header')
    },
    clearCurrentArticle () {
    // Clear current article and reset settings for new articles
      this.isScrollable = false
      this.isActive = false
      setTimeout(() => {
        this.currentArticle = {
          title: '',
          date: '',
          article: '',
          index: null
        }
      }, 1000)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass" >
@import "@/assets/vars.sass"

.card
    border-radius: 2px

.currentArticle
    padding: 1% 2%;
    overflow: hidden;
    height: 44em

.news-article > p
    color: green

.columns
    margin: 0 10px

.parallax-hero
    background-image: url("../assets/Compass.jpg");
    background-position: bottom

.news-item
    margin: 50px

.news-header
    font-family: Quattrocento;
    font-weight: bold;
    font-size: 1.5em;
    margin-bottom: 0.2em
    text-align: center
    color: #222;
    transition: all 0.15s ease
    @media (max-width:786px)
        font-size: 1.2em

a.news-header
    &:hover
        color: $VertexOrange

.news-date
    font-size: 0.9em
    font-family: 'Lato',sans-serif
    color: #3a3a3a
    margin-top: 0
    margin-bottom: 8px
    font-weight: bold
    float: left

.news-snippet
    font-family: Quattrocento;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.3em
    text-align: left
    color: #222;

.news-button.news-colors
    color: $VertexBlue
    border: 1px solid $VertexBlue
    background: #ffffff6b
    &:focus
        color: $VertexBlue
        background-color: white
    &:active
        background-color: white
    &:hover
        color: white
        border: 1px solid $VertexBlue
        background: $VertexBlue
.news-button
    font-family: 'Quattrocento'
    font-weight: bold
    transition: all .1s ease
    font-size: 18px
    float: right
    @media (max-width:1360px)
        font-size: 14px
    &:hover
        color: white
        > i
            margin-left: 20px
    > i
        transition: all 0.2s ease

p
    font-family: "Quattrocento",sans-serif
    font-size: 1em
    color: #222

hr.smaller
    width: 50%;
    background: #828282c2;
    margin: auto;
    height: 1px;

.columns
    max-height: 45em;
    padding: 2em 0
    @media (max-width:768px)
        max-height: max-content

.card-content
  @media (max-width:786px)
    padding: 1.2rem
    padding-bottom: 4rem

.isScrollable
    overflow: auto

.whiteWash
    background: #ffffffde
</style>

<style lang="sass">
p
    font-family: "Lato",sans-serif;
em
    font-family: "Quattrocento",serif;
b
    font-family: "Quattrocento",serif;
</style>
