<template>
    <div>
        <HeaderC />
        <router-view class="container" />
    </div>
</template>

<script>
import HeaderC from "./components/Header.vue";

export default {
    components: {
        HeaderC,
    }
}
</script>

