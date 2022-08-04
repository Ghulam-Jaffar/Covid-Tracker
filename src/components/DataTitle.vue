<template>
    <div class="text-center">
        <h2 class="text-3xl font-bold">
            {{text}}
        </h2>
        <div class="text-2xl mt-4 mb-10">{{timeStamp}}</div>
    </div>
</template>

<script>
import moment from 'moment';
import {computed} from '@vue/composition-api';

export default{
    name: 'DataTitle',
    props: {
        text: {
            type: String,
            required: true,
            default: 'Title'
        },
        date: {
            type: String,
            required: true,
            default: ''
        }
    },setup(props){
      const timeStamp = computed(()=>{
      return moment(props.date).format('MMMM Do YYYY, h:mm a');
      })
      return{
        timeStamp
      }
  }
}

</script>