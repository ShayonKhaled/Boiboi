<template>

<c-flex  align="center" justify="center" >

<c-stack :spacing="5"  align="center" text-align="left" justify="center"  pt="10" pb="100px">
  
  <c-box :p="5" shadow="md" border-width="1px" w=50%  rounded="lg">
    <c-heading>What?</c-heading>
    <c-text :mt="4">

    📚
    Boiboi is a web app for tracking my bookcrossing activities. <br /> <br />

    ❓
    If you're wondering what that is, bookcrossing is defined as "the practice of leaving a book in a 
    public place to be picked up and then read by others, who then do likewise." <br /> <br />

    👇
    Basically, I purchase some books time to time for bookcrossing, put a label on them that contains 
    the URL of this website along with some instructions and drop them at random places, hoping someone 
    will actually make the effort to come here and let me know. <br /> <br />

    ✨ Fully inspired by
    <c-link href="https://thebookfairies.org/" is-external>  The Book Fairies<c-icon name="info" mx="2px" /> </c-link> 
        and 
    <c-link href="https://www.bookcrossing.com/" is-external> BookCrossing.<c-icon name="external-link" mx="2px" /> </c-link> 



    </c-text>
  </c-box>
  <c-box :p="5" shadow="md" border-width="1px"  w=50%  rounded="lg">
    <c-heading>Why?</c-heading>
    <c-text :mt="4">

      😮 As weird as it sounds, I initially came up with the idea of Boiboi because I wanted to learn Vue.JS, 
      a JavaScript framework. I needed something fun to work on so I could pick the language up as I went along. 
      It wasn't long before I came across something called bookcrossing.  <br /> <br />

      😃 I was intrigued immediately. After doing some research, I found out there are some websites where I could actually 
      open an account to track my books . But nah, I wanted my very own bookcrossing tracker because, why not? 
      Besides, it'd make a good practice project too. <br /> <br />

      🌱 So, that's why I've started it. I loved learning the basics of Vue.JS and how to build a web app from the ground up.
         The fact that these books can actually be picked up and read by people I don't know is simply the cherry on top.
      
      </c-text>
  </c-box>

  <c-box :p="5" shadow="md" border-width="1px" w=50%  rounded="lg">
    <c-heading>Where?</c-heading>
    <c-text :mt="4">
      📍 I'll be dropping books at random cafes in Dhaka, Bangladesh for now. Around Dhanmondi, to be more exact. 
    </c-text>
  </c-box>
  <c-box :p="5" shadow="md" border-width="1px"  w=50%  rounded="lg">
    <c-heading>When?</c-heading>
    <c-text :mt="4">
      📅 Two times a month usually, timing varies.
      </c-text>
  </c-box>

  <c-box :p="5" shadow="md" border-width="1px" w=50%  rounded="lg">
    <c-heading>Who?</c-heading>
    <c-text :mt="4">
      
      👻 I'd rather not disclose my identity here, but if you've read my blog, I guess you already know who this is. 

    </c-text>
  </c-box>
  <c-box :p="5" shadow="md" border-width="1px"  w=50%  rounded="lg">
    <c-heading>How?</c-heading>
    <c-text :mt="4">
     ☕ Pretty simple. I just get some labels printed out (they come with necessary instructions, the address to this website 
     and unique identifier code) and attach them to the books using scotch tape. After that, I go to some café, enjoy my coffee 
     and pretend to leave the book(s) behind on my way out.  <br /> <br />

    🔨 As for the website, I've used Vue.JS and Chakra UI.
      
      </c-text>
  </c-box>

  
</c-stack>

</c-flex>


 





</template>

<script>
import { CBox, CText,CStack,CHeading, CLink, CIcon } from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CText,
    CStack,
    CHeading,
    CLink,
    CIcon
 
  } 
}
</script>
