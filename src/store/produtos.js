import { createStore } from "vuex";


export const useProdutosStore = () => createStore({
    state: {
        produtos: [
            {
                id: 1,
                nome: 'Produto 1'
            },
            {
                id: 2,
                nome: 'Produto 2'
            }
        ]
    }
});