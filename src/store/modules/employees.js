import { auth, employeesCollection } from '@/js/firebaseConfig.js';
import { SET_EMPLOYEE } from '../mutations.js';

export default {
  state: {
    employees: []
  },

  mutations: {
    [SET_EMPLOYEE]: (state, info) => {
      state.employees.push(info);
    }
  },

  actions: {
    getEmployees({ commit }) {},

    createEmployee({ commit }, { email, password, permissions }) {
      return new Promise((resolve, reject) => {
        // Create account
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredential => {
            const {
              user: { uid }
            } = userCredential;
            const info = {
              email,
              ...permissions
            };

            // Set employee info
            employeesCollection
              .doc(uid)
              .set(info)
              .then(() => {
                commit(SET_EMPLOYEE, info);
                resolve();
              });
          })
          .catch(error => reject(error));
      });
    }
  }
};
