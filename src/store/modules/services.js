import { servicesCollection } from '@/js/firebaseConfig.js';
import {
  SET_SERVICE,
  SET_SERVICES,
  UPDATE_SERVICES,
  DELETE_SERVICE
} from '../mutations.js';

export default {
  state: {
    services: {
      manicure: [],
      pedicure: []
    }
  },

  mutations: {
    [SET_SERVICE]: (state, service) => {
      state.services[service.category].push(service);
    },

    [SET_SERVICES]: (state, services) => {
      state.services = services;
    },

    [UPDATE_SERVICES]: (state, { ...service }) => {
      state.services[service.category] = [
        ...state.services[service.category].filter(
          service => service.id !== service.id
        ),
        service
      ];
    },

    [DELETE_SERVICE]: (state, { docId, category }) => {
      state.services[category] = state.services[category].filter(
        service => service.id !== docId
      );
    }
  },

  actions: {
    getServices({ commit }) {
      return new Promise((resolve, reject) => {
        servicesCollection
          .get()
          .then(querySnapshot => {
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
            resolve();
          })
          .catch(error => reject(error));
      });
    },

    createService(
      { dispatch },
      { title, category, coast, maxCoast, currency }
    ) {
      return new Promise((resolve, reject) => {
        servicesCollection
          .add({
            title,
            category,
            coast,
            maxCoast,
            currency
          })
          .then(doc => {
            dispatch('setService', doc.id);
            resolve();
          })
          .catch(error => reject(error));
      });
    },

    updateService(
      { commit },
      { docId, title, category, coast, maxCoast, currency }
    ) {
      return new Promise((resolve, reject) => {
        servicesCollection
          .doc(docId)
          .set({
            title,
            category,
            coast,
            maxCoast,
            currency
          })
          .then(() => {
            commit(UPDATE_SERVICES, {
              docId,
              title,
              category,
              coast,
              maxCoast,
              currency
            });
            resolve();
          })
          .catch(error => reject(error));
      });
    },

    deleteService({ commit }, { docId, category }) {
      return new Promise((resolve, reject) => {
        servicesCollection
          .doc(docId)
          .delete()
          .then(() => {
            commit(DELETE_SERVICE, { docId, category });
            resolve();
          })
          .catch(error => reject(error));
      });
    },

    setService({ commit }, docId) {
      servicesCollection
        .doc(docId)
        .get()
        .then(doc => {
          if (doc.exists) {
            commit(SET_SERVICE, { id: doc.id, ...doc.data() });
          }
        });
    }
  }
};
