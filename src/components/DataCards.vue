<template>
    <div class="grid md:grid-cols-2 gap-4 m-2">
        <div class="div shadow-md bg-blue-100 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">
                Cases
            </h3>
            <div class="div text-2xl mb-4">
                <span class="font-bold">New:</span>
                {{ addCommas(stats.NewConfirmed) }}
            </div>
            <div class="div text-2xl mb-4">
                <span class="font-bold">Total:</span>
                {{ addCommas(stats.TotalConfirmed) }}
            </div>
        </div>
        <div class="div shadow-md bg-blue-200 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">
                Deaths
            </h3>
            <div class="div text-2xl mb-4">
                <span class="font-bold">New:</span>
                {{ addCommas(stats.NewDeaths) }}
            </div>
            <div class="div text-2xl mb-4">
                <span class="font-bold">Total:</span>
                {{ addCommas(stats.TotalDeaths) }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataCards',
    props: {
        stats: {
            type: Object,
            required: true,
            default: () => ({})
        },
    },setup(){
      const addCommas = (x) =>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      return{
        addCommas
      }
  }
}
</script>