import { SET_USER_ID, SET_USER_INFO } from '../mutations.js';
import { employeesCollection } from '@/js/firebaseConfig.js';

export default {
  state: {
    info: {}
  },

  mutations: {
    [SET_USER_ID]: (state, uid) => {
      state.info.id = uid;
    },

    [SET_USER_INFO]: (state, info) => {
      state.info = { ...state.info, ...info };
    }
  },

  actions: {
    getUserInfo({ rootState, commit }) {
      employeesCollection
        .doc(rootState.user.info.id)
        .get()
        .then(doc => {
          const info = doc.data();
          commit(SET_USER_INFO, info);
        });
    },

    updateUserInfo({ commit }, { id, ...info }) {
      return new Promise((resolve, reject) => {
        employeesCollection
          .doc(id)
          .update(info)
          .then(() => {
            commit(SET_USER_INFO, info);
            resolve();
          })
          .catch(error => reject(error));
      });
    }
  }
};
