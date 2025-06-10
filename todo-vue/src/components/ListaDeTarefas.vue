<script setup>
const props = defineProps(["tarefas"]);
</script>

<template>
    <ul class="list-group mt-4">
        <li class="list-group-item" v-for="tarefa in props.tarefas">
            <input
                :checked="tarefa.finalizada"
                :id="tarefa.titulo"
                @change="
                    (evento) => (tarefa.finalizada = evento.target.checked)
                "
                type="checkbox"
            />
            <label
                :class="{ done: tarefa.finalizada }"
                class="ms-3"
                :for="tarefa.titulo"
                >{{ tarefa.titulo }}</label
            >
        </li>
    </ul>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>
