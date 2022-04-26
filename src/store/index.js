import { createStore } from 'vuex'
import { api } from '@/api'

export default createStore({
  state: {
    pokemons: [],
    pokemon: null
  },
  getters: {
  },
  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons;
    },
    setPokemon(state, pokemon) {
      state.pokemon = pokemon;
    }
  },
  actions: {
    async consultarPokemons({ commit }) {
      const res = await api.get("/pokemon");
      commit('setPokemons', res.data.results);
    },
    consultarPokemon({}, id) {
      return api.get(`/pokemon-form/${id}`);
    },
    async selecionarPokemon({ state, dispatch, commit }, id) {
      const res = await dispatch('consultarPokemon', id);
      commit('setPokemon', res.data);
    }
  },
  modules: {
  }
})
