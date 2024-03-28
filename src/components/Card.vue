<template>
    <div>
        {{ task.task }}
    </div>    
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
import {type Task} from "../types/types"

defineProps<{
    task: Task
}>()
</script>