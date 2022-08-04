<template>

  <main v-if="!loading" class="w-screen h-screen">
    <DataTitleVue :text="title" :date="date" />
    <DataCardsVue :stats="stats" />
    <CountrySelectVue :countries="countries" @country-selected="getCountry" @clear-country="clearCountryData" />
  </main>

  <main v-else class="flex flex-col align-center justify-center text-center">
    <div class="text-sky-400 text-3xl mt-10 mb-6"><img :src="loader" alt="loader" class="m-auto"></div>
  </main>

</template>

<script>
import DataTitleVue from '@/components/DataTitle.vue';
import DataCardsVue from '@/components/DataCards.vue';
import CountrySelectVue from '@/components/CountrySelect.vue';
import { onMounted, ref } from '@vue/composition-api';
import loadGif from '../assets/loader.gif';
import axios from 'axios';


export default {
  name: 'CovidData',
  components: {
    DataTitleVue,
    DataCardsVue,
    CountrySelectVue
  }, setup() {
    const loading = ref(true)
    const title = ref('Global')
    const date = ref('')
    const stats = ref({})
    const countries = ref([])
    const loader = ref(loadGif)
    onMounted(async () => {
      const data = await fetchData()
      date.value = data.data.Date
      stats.value = data.data.Global
      countries.value = data.data.Countries
      loading.value = false
    })
    const fetchData = async () => {
      const res = await axios.get('https://api.covid19api.com/summary');
      return res
    }

    const getCountry = (country) => {
      title.value = country.Country;
      stats.value = country;
    }

    const clearCountryData = async () => {
      loading.value = true
      const data = await fetchData()
      date.value = data.data.Date
      title.value = 'Global'
      stats.value = data.data.Global
      countries.value = data.data.Countries
      loading.value = false
    }
    return {
      loading,
      title,
      date,
      stats,
      countries,
      loader,
      fetchData,
      getCountry,
      clearCountryData
    }
  }
}
</script>
