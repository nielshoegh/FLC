import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import Vuelidate from 'vuelidate';

Vue.use(Vuetify);
Vue.use(Vuelidate);

export default new Vuetify({
    icons: {
        iconfont: 'md',
    },
});
