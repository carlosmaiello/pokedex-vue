<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import ListaItem from './ListaItem.vue';

const store = useStore();
const pokemons = computed(() => store.state.pokemons);
const pokemonSelecionado = computed(() => store.state.pokemon);

onMounted(() => {
    store.dispatch('consultarPokemons');
});
</script>
<template>
    <div class="lista">
        <h2>Pokedex</h2>
        <ul class="list-group">
            <li :class="{
                'list-group-item': true,
                'list-group-item-action': true,
                'active': pokemonSelecionado && pokemon.name == pokemonSelecionado.name
            }" @click="store.dispatch('selecionarPokemon', pokemon.name)" v-for="pokemon in pokemons" :key="pokemon.name">
                <ListaItem :id="pokemon.name" />
            </li>
        </ul>
        <div class="d-flex justify-content-between my-3">
            <button class="btn btn-primary">Anterior</button>
            <button class="btn btn-primary">Próximo</button>
        </div>
    </div>
</template>
<style scoped>
.lista .list-group { height: calc(100vh - 48px - 70px); overflow: auto;}
</style>