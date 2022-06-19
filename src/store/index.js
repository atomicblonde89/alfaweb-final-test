import Vue from 'vue'
import Vuex from 'vuex'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc
} from "firebase/firestore";
import { db } from "@/plugins/firebase";

import { errorCodeToStringLabelFirebase } from "@/constants/utils";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLogin: null,
    userMsjError: null,
    cursos: [],
  },
  mutations: {
    SET_USER_LOGIN(state, payload) {
      state.userLogin = payload;
    },
    SET_COURSES(state, payload) {
      state.cursos = payload;
    },
    SET_USER_MSJ_ERROR(state, payload) {
      state.userMsjError = payload;
    },
  },
  actions: {
    setCourses({ commit }, coursesParams) {
      commit('SET_COURSES', coursesParams);
    },
    /** User */
    async registerUser({ commit }, userParam) {
      const { email, password } = userParam;
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          commit('SET_USER_MSJ_ERROR', null);
        })
        .catch((error) => {
          console.log(error);
          commit('SET_USER_MSJ_ERROR', errorCodeToStringLabelFirebase(error.code));
        });
    },
    async loginUser({ commit }, userParam) {
      const { email, password } = userParam;
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          commit('SET_USER_MSJ_ERROR', null);
        })
        .catch((error) => {
          console.log(error);
          commit('SET_USER_MSJ_ERROR', errorCodeToStringLabelFirebase(error.code));
        });;
    },
    getUserLogin({ commit }) {
      getAuth().onAuthStateChanged((user) => {
        if (user) {
          commit('SET_USER_LOGIN', user.email);
        }
      });
    },
    async logoutUser({ commit }) {
      await getAuth()
        .signOut()
        .then(() => {
          commit('SET_USER_LOGIN', null);
        });
    },
    cleanUserMsjError({ commit }) {
      commit('SET_USER_MSJ_ERROR', null);
    },
    async getCourses({ commit }) {
      const queryRequest = query(collection(db, "cursos"));
      onSnapshot(queryRequest, (querySnapshot) => {
        const cursos = [];
        querySnapshot.forEach((doc) => {
          const curso = {
            id: doc.id,
            ...doc.data()
          };
          cursos.push(curso);
        });
        commit("SET_COURSES", cursos);
      });
    },
    async addCourse(context, cursoObject) {
      console.log(cursoObject);
      const docRef = await addDoc(collection(db, "cursos"), cursoObject);
      console.log("Document written with ID: ", docRef.id);
    },
    async updateCourse(context, { id, userData }) {
      const userRefDoc = doc(db, "cursos", id);
      await updateDoc(userRefDoc, userData);
    },
    async deleteCourse({ commit }, idDocCourse) {
      await deleteDoc(doc(db, "cursos", idDocCourse));
    },
  },
  getters: {
    getAlumnosPermitidos({ cursos }) {
      const countAlumnosPermitidos = cursos.reduce(
        (previusValue, currentValue) => previusValue + parseInt(currentValue.cupos),
        0
      );
      return countAlumnosPermitidos;
    },
    getAlumnosInscritos({ cursos }) {
      const countAlumnosInscritos = cursos.reduce(
        (previusValue, currentValue) => previusValue + parseInt(currentValue.inscritos),
        0
      );
      return countAlumnosInscritos;
    },
    getAlumnosCuposRestantes({ cursos }, getters) {
      return getters.getAlumnosPermitidos - getters.getAlumnosInscritos;
    },
    getCursosTerminados({ cursos }) {
      const countCoursesFinished = cursos
        ?.filter((curso) => curso?.terminado)
        ?.length
      return countCoursesFinished;
    },
    getCursosActivos({ cursos }) {
      const countCoursesActive = cursos
        ?.filter((curso) => !curso?.terminado)
        ?.length
      return countCoursesActive;
    },
    getTotalCursos({ cursos }) {
      const countCourses = cursos?.length
      return countCourses;
    },
  },
  modules: {
  }
})