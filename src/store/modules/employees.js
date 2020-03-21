import { auth, employeesCollection } from '@/js/firebaseConfig.js';
import { SET_EMPLOYEE, SET_EMPLOYEES } from '../mutations.js';

export default {
  state: {
    employees: []
  },

  mutations: {
    [SET_EMPLOYEE]: (state, info) => {
      state.employees.push(info);
    },

    [SET_EMPLOYEES]: (state, employees) => {
      state.employees = employees;
    }
  },

  actions: {
    getEmployees({ commit }) {
      return new Promise((resolve, reject) => {
        employeesCollection
          .get()
          .then(snapshot => {
            const employees = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));

            commit(SET_EMPLOYEES, employees);
            resolve();
          })
          .catch(error => reject(error));
      });
    },

    createEmployee({ commit }, { email, password, ...data }) {
      return new Promise((resolve, reject) => {
        // Create account
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredential => {
            const {
              user: { uid }
            } = userCredential;

            // Set employee info
            const info = { email, ...data };

            employeesCollection
              .doc(uid)
              .set(info)
              .then(() => {
                commit(SET_EMPLOYEE, { id: uid, ...info });
                resolve();
              });
          })
          .catch(error => reject(error));
      });
    },

    updateEmployee({ commi }, { id, ...info }) {
      return new Promise((resolve, reject) => {
        employeesCollection
          .doc(id)
          .update(info)
          .then(() => resolve())
          .catch(error => reject(error));
      });
    }

    // TODO
    // deleteEmployee({ commit }, docId) {}
  }
};
