<template>
    Hello, {{ user.name }} Table comming soon!
</template>

<script setup>
const props = defineProps({
    user: Object
});
</script>