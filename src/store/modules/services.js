import { servicesCollection } from '@/js/firebaseConfig.js';
import { SET_SERVICES } from '../mutations.js';

export default {
  state: {
    services: {
      manicure: [],
      pedicure: []
    }
  },

  mutations: {
    [SET_SERVICES]: (state, services) => {
      state.services = services;
    }
  },

  actions: {
    getServices({ commit }) {
      servicesCollection.get().then(querySnapshot => {
        const services = {};

        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        services.manicure = data.filter(
          service => service.category === 'manicure'
        );
        services.pedicure = data.filter(
          service => service.category === 'pedicure'
        );

        commit(SET_SERVICES, services);
      });
    },

    createService({ commit }, { title, category, coast, maxCoast }) {
      return new Promise((resolve, reject) => {
        servicesCollection
          .add({
            title,
            category,
            coast,
            maxCoast,
            currency: 'руб'
          })
          .then(doc => {
            resolve({ docId: doc.id });
          })
          .catch(error => {
            reject({ error });
          });
      });
    },

    setService({ commit }, docId) {
      servicesCollection
        .doc(docId)
        .get()
        .then(doc => {
          console.log(doc.data());
          resolve();
        });
    }
  }
};
