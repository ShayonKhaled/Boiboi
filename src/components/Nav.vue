<template>
  <c-flex mx="20" my="10" justify="space-between" verticalAlign="center">
    <c-flex>
      <c-text fontSize="3xl" fontWeight="bold">boiboi</c-text>
    </c-flex>
    <c-flex>
      <c-box>
   
</c-box>

    <c-button variant="outline" color="gray.700" size="sm"  @click = "home" 
    paddingRight="5" paddingLeft="5" paddingTop = "2" paddingBottom = "2" rounded="20px" m="3">
    Home</c-button>
  
      <c-button variant="outline" color="gray.700" size="sm"  @click = "about" 
    paddingRight="5" paddingLeft="5" paddingTop = "2" paddingBottom = "2" rounded="20px" m="3">
    About</c-button>
      
  <c-button variant="outline" color="gray.700" size="sm"  @click = "drops" 
    paddingRight="5" paddingLeft="5" paddingTop = "2" paddingBottom = "2" rounded="20px" m="3">
    Drops</c-button>

  <c-button variant="outline" color="gray.700" size="sm"  @click = "contact" 
    paddingRight="5" paddingLeft="5" paddingTop = "2" paddingBottom = "2" rounded="20px" m="3">
    Contact</c-button>

    </c-flex>

    
    <c-flex>
    </c-flex>
  </c-flex>
</template>

<script>
import { CFlex, CText, CButton} from "@chakra-ui/vue";

export default {

  methods: {
    home () { 
   
      this.$router.push({name:'Home'})
      },
    about () { 
   
      this.$router.push({name:'About'})
      },

    drops () { 
   
      this.$router.push({name:'Drops'})
      },
    contact () { 
   
      this.$router.push({name:'Contact'})
      }      

  },

  components: {
    CFlex,
    CText,
    CButton
  }


};

</script>

