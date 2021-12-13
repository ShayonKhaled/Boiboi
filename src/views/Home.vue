<template>
  <c-box>
    <div v-if="$isMobile()">
       <c-text fontSize="xl" textAlign="center" p="10"> <br /> <br /> <b> 😞 I see you're using a mobile. Could you please switch to PC? My apologies, this is still a work in progress and not quite mobile-friendly yet. </b>
       </c-text>
    </div>
<div v-else>
    <c-text fontSize="5xl" textAlign="center" fontWeight="bold">Hi, did you find my book?</c-text>
    <c-text fontSize="xl" textAlign="center">I dropped it, deliberately. :)</c-text>
  
    

    
 




    <c-flex justify="center">
      
      <c-box w="sm">

        <c-image src="https://i.ibb.co/Sr6sXhH/undraw-Reading-book-re-kqpk-1.png" alt="Cute book reading character" />
      </c-box>

      <!--
      <c-flex flexDirection="column" bg="indigo.200" mx="4" p="10" w="sm" rounded="lg" align="center">
        <img src="../assets/circle.png" alt="circle icon" width="100">
        <c-text mt="6" textAlign="center" color="white" fontSize="xl">Beginner</c-text>
      </c-flex>
      <c-flex flexDirection="column" borderWidth="1px" mx="4" p="10" w="sm" rounded="lg" align="center">
        <img src="../assets/circle.png" alt="circle icon" width="100">
        <c-text mt="6" textAlign="center" fontSize="xl">Experienced</c-text>
      </c-flex>
      <c-flex flexDirection="column" borderWidth="1px" mx="4" p="10" w="sm" rounded="lg" align="center">
        <img src="../assets/circle.png" alt="circle icon" width="100">
        <c-text mt="6" textAlign="center" fontSize="xl">Professional</c-text>
      </c-flex>
    -->
    </c-flex> 
    
    <c-flex justify="center">
      <c-button  ref="btnRef" @click="isOpen =true"  variant-color="pink" w="250px" mb="10">Yes and I want to tell you!</c-button>
    </c-flex>
    <c-box mx="auto" my="10" w="lg" >
  

     <div>
     <c-drawer
      :isOpen="isOpen"
      placement="right"
      :on-close="close"
      :initialFocusRef="() => $refs.firstField"
      :finalFocusRef="$refs.btnRef"
       size="xl"
    >
      <c-drawer-overlay />
      <c-drawer-content>
      <c-drawer-close-button />
      
      <c-drawer-header my=5>
        Mind telling me more about that?
      </c-drawer-header>

      <c-drawer-body>
        <c-form-control isRequired>
      <c-stack>

              <c-box  my=5>
                <c-form-label for="ReaderName">Your name</c-form-label>
                <c-input
                  ref="ReaderName"
                  id="ReaderName"
                  v-model="ReaderName" 
                  placeholder="You may use a fake name too!"
                />
              </c-box>

                   <c-box  my=5>
                <c-form-label for="BookList">Select book</c-form-label>
                <c-select id="BookList" ref="BookList" v-model="BookList">
                  <option value="Animal Farm by George Orwell">Animal Farm by George Orwell</option>
                  <option value="Schoolgirl by Osamu Dazai">Schoolgirl by Osamu Dazai</option>
                  <option value="The Archer by Paulo Coelho">The Archer by Paulo Coelho</option>
                  <option value="Zero to One by Peter Thielf">Zero to One by Peter Thielf</option>
                  <option value="Inferno by Dan Brown">Inferno by Dan Brown</option>


                </c-select>
              </c-box>
           
              <c-box  my=5>
                <c-form-label for="BookId">Book ID</c-form-label>
                <c-input
                  ref="BookId"
                  id="BookId"
                  placeholder="Please write the book ID here, which can be found in the label."
                   v-model="BookId" 
                />
              </c-box> 
            <c-box  my=5>
                <c-form-label for="FoundWhere">When and where did you find it?</c-form-label>
                <c-input
                  ref="FoundWhere"
                  id="FoundWhere"
                  placeholder="E.g. - September 10, East End Coffee Roasters."
                   v-model="FoundWhere" 
                />
              </c-box> 

             <c-box  my=5>
                <c-form-label for="DroppedWhere">And where did you drop it?</c-form-label>
                <c-input
                  ref="DroppedWhere"
                  id="DroppedWhere"
                  placeholder="E.g. - February 30, North End Coffee Roasters."
                   v-model="DroppedWhere" 
                />
              </c-box> 


              <c-box>
                <c-form-label for="AddInfo">Is there anything else you want me to know?</c-form-label>
                <c-textarea id="AddInfo"
                ref="AddInfo"
                placeholder="Write anything you want, a review of the book you've found for example!"
                v-model="AddInfo" 
                />
              </c-box>
          </c-stack>
        </c-form-control>
      </c-drawer-body>

      <c-drawer-footer>
        <c-button mr="3" @click="isOpen = false">Cancel</c-button>
        <c-button variant-color="pink"  @click ="handleSubmit">Submit</c-button>
      </c-drawer-footer>
      </c-drawer-content>
    </c-drawer>
  </div>



      <!-- 
        <c-progress 
      :value="60" 
      height="40px" 
      rounded="40px"
      hasStripe 
      isAnimated
      v-chakra="{
        'div': {
          bg: 'indigo.200'
        }
      }"
      />

      <c-flex justify="space-between" my="3" mx="4">
        <c-text color="gray.700" fontSize="sm">Step 2 Out of 5</c-text>
        <c-text color="gray.700" fontSize="sm">60%</c-text>
      </c-flex>

        -->


        
    </c-box>
     </div>
  
  </c-box> 

 





</template>

<script>
import { projectFirestore } from '@/Firebase/config'

import { CBox, CText, CFlex, CButton, CImage,  CDrawer,
  CDrawerBody,
  CDrawerFooter,
  CDrawerHeader,
  CDrawerOverlay,
  CDrawerContent,
  CDrawerCloseButton,  CFormControl,
  CFormLabel, CInput, CSelect, CTextarea
  } from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CText,
    CFlex,  
    CButton,
    CImage,  CDrawer,
  CDrawerBody,
  CDrawerFooter,
  CDrawerHeader,
  CDrawerOverlay,
  CDrawerContent,
  CDrawerCloseButton,  CFormControl,
  CFormLabel, CInput, CSelect, CTextarea
  }, 

 data () {
    return {
      isOpen: false,
      BookList: '',
      
    

    }
  },
  methods: {
    close () {
      this.isOpen = false
    },
    
        handleSubmit () {

            let BookFound = {
                ReaderName: this.ReaderName,
                BookList: this.BookList,
                BookId: this.BookId,
                FoundWhere: this.FoundWhere,
                DroppedWhere: this.DroppedWhere,
                AddInfo: this.AddInfo,
                date: Date()

            }
  
        
          console.log(BookFound)
    projectFirestore.collection('BookFound').add(BookFound)
      this.$toast({
        title: 'Yaay!',
        description: "The message is on its way!",
        status: 'success',
        duration: 10000,
        position: 'top',
    
      })

     
     
    this.ReaderName= ''
    this.BookList= ''
    this.BookId = ''
    this.FoundWhere = ''
    this.DroppedWhere = ''
    this.AddInfo = ''
        }
    },

     
}
</script>
  




