<template>
    <div class="flex flex-col items-center justify-center pb-4">
        <select v-model="selected" name="Countries" id=""
            class="mt-5 block w-6/12 border p-3 rounded  focus:border-sky-500" @change="getCountry">
            <option value="">Select Country</option>
            <option v-for="(country, index) in countries" :key="index" :value="country.ID">{{ country.Country }}
            </option>
        </select>
        <button v-if="selected" class="p-3 text-white rounded bg-sky-400 mt-3 focus:outline-none hover:bg-sky-500"
            @click="clearCountry">Reset</button>


    </div>
</template>


<script>
import {ref} from "@vue/composition-api";

export default {
    name: 'CountrySelect',
    props: {
        countries: {
            type: Array,
            required: true,
            default: () => ([])
        }
    },setup(props, context){
      const selected = ref('')
      const getCountry = () =>{
        const country = props.countries.find(country => country.ID === selected.value)
        context.emit('country-selected', country)
      }
      const clearCountry = () =>{
        selected.value = ''
        context.emit('clear-country')
      }
      return{
        selected, getCountry, clearCountry
      }
  }
}
</script>