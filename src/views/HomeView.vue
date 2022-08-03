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

export default {
  name: 'HomeView',
  components: {
    DataTitleVue,
    DataCardsVue,
    CountrySelectVue
  }, data() {
    return {
      loading: true,
      title: 'Global',
      date: '',
      stats: {},
      countries: [],
      loader: require('../assets/loader.gif'),
    }
  }, methods: {
    async fetchData() {
      const res = await this.$axios.get('https://api.covid19api.com/summary');
      return res
    },
    getCountry(country) {
      this.title = country.Country;
      this.stats = country;
      console.log(this.stats.Country)
    },
    async clearCountryData() {
      this.loading = true
      const data = await this.fetchData()
      this.date = data.data.Date
      this.title = 'Global'
      this.stats = data.data.Global
      this.countries = data.data.Countries
      this.loading = false
    }
  },
  async created() {
    const data = await this.fetchData()
    this.date = data.data.Date
    this.stats = data.data.Global
    this.countries = data.data.Countries
    this.loading = false
  }
}
</script>
