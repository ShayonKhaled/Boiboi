<template>
<c-flex  align="center" justify="center">

<c-stack :spacing="5" text-align ="left" align="left" justify="center"  pt="10" pb="10" px ="300px" mb="10">
 <C-heading pb="5"> Find my recent drops here! </c-heading>
    <vue-good-table
      :columns="columns"
      :rows="rows" mb="10"/>
</c-stack>

  </c-flex>
</template>

<script>

import {  CStack, CHeading   } from '@chakra-ui/vue'

export default {
components: {
  CStack, CHeading
 
  } ,

  name: 'my-component',
  data(){
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Where',
          field: 'LastLoc',
        },
        {
          label: 'Last Dropped On',
          field: 'LastDropped',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
          {
          label: 'Has anyone picked it up?',
          field: 'PickUp',
        }
      
      ],
      rows: [
        { id:1, name:"Animal Farm by George Orwell", LastLoc: "North End Coffee Roasters, Dhanmondi", LastDropped: "2021-10-15", PickUp: "Not yet"},
        { id:1, name:"Schoolgirl by Osamu Dazai", LastLoc: "North End Coffee Roasters, Dhanmondi", LastDropped: "2021-11-01", PickUp: "Not yet"},
        { id:1, name:"The Archer by Paulo Coelho", LastLoc: "North End Coffee Roasters, Dhanmondi", LastDropped: "2021-11-15", PickUp: "Not yet"},
        { id:1, name:"Zero to One by Peter Thielf", LastLoc: "North End Coffee Roasters, Dhanmondi", LastDropped: "2021-12-01", PickUp: "Not yet"},
      
    
      ],
    };
  },
};
</script>