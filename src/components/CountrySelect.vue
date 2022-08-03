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
export default {
    name: 'CountrySelect',
    props: {
        countries: {
            type: Array,
            required: true,
            default: () => ([])
        }
    }, data() {
        return {
            selected: ''
        }
    }, methods: {
        getCountry() {
            const country = this.countries.find(country => country.ID === this.selected)
            this.$emit('country-selected', country)
        },
        clearCountry() {
            this.selected = ''
            this.$emit('clear-country')
        }
    }
}
</script>