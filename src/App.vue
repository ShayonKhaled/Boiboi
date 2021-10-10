

 <template>
  <c-theme-provider>
    <c-reset />
   <Nav />
 <div id="app">
    <div id="nav">

    </div>
    <router-view/>

  
      
      <c-box min-height="50px" position="fixed" bottom="0" display="flex" flex-direction="column" w = "100%" text-align="center" px="10" bg="#000A21" color="white" py ="5">


          <p text-align="center">Made with ❤️ by me. </p>
     
       </c-box>
    


  </div>   
  


  </c-theme-provider>
</template>


<script>
import { CThemeProvider, CReset,CBox} from "@chakra-ui/vue";
import Nav from './components/Nav';
//import { CLink } from "@chakra-ui/vue";


//import Main from './components/Main'


export default {
  name: "App",
  components: {
    CThemeProvider,
    CReset,
    Nav,
    CBox
  }
};

</script>
