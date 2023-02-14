import { createStore } from 'vuex'
import journal from '../modulos/daybook/store/journal'

const store = createStore ({
    Modules:{
        journal,
}
})

export default store