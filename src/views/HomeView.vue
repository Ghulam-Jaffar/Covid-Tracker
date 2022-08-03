<template>
    <div class="text-center flex flex-col  items-center bg-sky-200 w-fit">

        <div class="p-10 top-0">
            <h2 class="text-3xl font-bold">
                this is covid home
            </h2>
            <p class="mt-4">stay safe :D</p>

        </div>
        <div class="text-center fixed bottom-24 justify-center bg-slate-200 p-3">
            <p>
                wanna see covid data?
            </p>
            <router-link to="/data" class="text-sky-500"> Get Covid Data</router-link>
        </div>


    </div>


</template>

<scipt>
export default{
    name:'HomeView.vue',
}
</scipt>