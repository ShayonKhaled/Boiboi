<template>

<c-flex  align="center" justify="center" >

    <c-form-control isRequired>
         
<c-stack :spacing="5" text-align ="left" align="left" justify="center"  pt="10" pb="10" px ="300px" mb="10">
  <c-heading> Get in touch with me! </c-heading>
              <c-box> 
                <c-form-label for="name" >Name</c-form-label>
                <c-input 
              
                  id="name"
                  placeholder="You can use a fake name too, but please be creative."
                  v-model="name" 
                  variant="filled"
                />
              </c-box>
              <c-box>
                <c-form-label for="message">Message</c-form-label>
                <c-textarea id="message" v-model="message" />
              </c-box>
               <c-button @click ="handleSubmit" variant-color="pink">Send</c-button>
             <c-text color="gray.400">
                 *Replies aren't guaranteed...mostly because there's no email field. But don't worry, I do read every message I get.</c-text>
         
         
          </c-stack>

        </c-form-control>

       

</c-flex>

</template>



<script>
import { projectFirestore } from '@/Firebase/config'


import { CFormControl,
  CFormLabel, CInput, CTextarea, CBox, CStack, CButton, CHeading, CText
   
   } from '@chakra-ui/vue'

export default {
  components: {
 CFormControl,
  CFormLabel, CInput, CTextarea, CBox, CStack, CButton, CHeading, CText
  },
    data(){  return {
           name: ''
          
        } 

  },
   methods: {

  
    
  
        
     
        handleSubmit () {


    

        var IpAddress; 
         fetch('https://api.ipify.org?format=json')
        .then(x => x.json())
        .then(({ ip }) => {
        this.term = ip;
        IpAddress= ip;
        console.log(IpAddress)});

            let ContactMe = {
                name: this.name,
                message: this.message,
                date: Date()

            }
  
        
          console.log(ContactMe)
    projectFirestore.collection('ContactMe').add(ContactMe)
      this.$toast({
        title: 'Yaay!',
        description: "The message is on its way!",
        status: 'success',
        duration: 10000,
        position: 'bottom',
    
      })

      this.name= ''
      this.message= ''
     

        }
    },


}
</script>
