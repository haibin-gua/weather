<template>
    <div class="details">
        <details-header></details-header>
        <details-hint></details-hint>
        <details-exponent></details-exponent>
        <details-data></details-data>
    </div>
</template>

<script>
import DetailsHeader from './components/DetailsHeader'
import DetailsHint from './components/DetailsHint'
import DetailsExponent from './components/DetailsExponent'
import DetailsData from './components/DetailsData'
export default {
    name:"Details",
    components:{
        DetailsHeader,
        DetailsHint,
        DetailsExponent,
        DetailsData
    }
}
</script>

<style scoped>

</style>