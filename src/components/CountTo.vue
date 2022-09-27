<template>
    <!-- {{d.num.toFixed(0)}} -->
    <!--  判断是否是小数 -->
    <!-- {{Number(d.num) === Math.round(d.num)? d.num: d.num.toFixed(2)}} -->
    {{value}}
</template>

<script setup>
import { computed, reactive, watch } from "vue"

import gsap from "gsap"

const props = defineProps({
    value: {
        type: Number,
        default: 0
    }
})

const d = reactive({
    num : 0
})

function animateToValue(){
    gsap.to(d,{
        duration:0.5,
        num:props.value
    })
}

animateToValue()

watch(()=>props.value,()=>animateToValue())

const value = computed(()=>{
    return Number(d.num) === Math.round(d.num)? d.num: d.num.toFixed(2)
})

</script>