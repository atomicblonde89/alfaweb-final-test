<template>
  <b-container>
    <b-row>
      <b-col class="my-4" cols="12">
        <h1>Registro de Usuario</h1>
      </b-col>
      <b-col class="my-4" cols="12">
        <b-form @submit.stop.prevent>
          <label for="text-password">Correo</label>
          <b-form-input
            type="text"
            id="text-password"
            v-model="user.email"
          ></b-form-input>

          <label for="text-password">Contraseña</label>
          <b-form-input
            type="password"
            id="text-password"
            v-model="user.password"
          ></b-form-input>
          <b-alert class="mt-2" v-if="showAlert" v-model="showAlert">
            {{ userMsjError }}
          </b-alert>
        </b-form>
      </b-col>
      <b-col class="my-4" cols="12">
        <b-row align-h="center">
          <b-col cols="2">
            <b-button class="w-100" variant="success" @click="registrar"
              >Registrar</b-button
            >
          </b-col>
          <b-col cols="2">
            <b-button class="w-100" variant="danger" @click="cleanForm"
              >Limpiar Formulario</b-button
            >
          </b-col>
          <b-col cols="2">
            <b-button class="w-100" variant="warning" @click="cleanUserMsjError"
              >Limpiar Validacion</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      user: { email: "", password: "" },
    };
  },
  methods: {
    ...mapActions(["registerUser", "cleanUserMsjError"]),
    async registrar() {
      const { email, password } = this.user;
      await this.registerUser({ email, password });
      if (this.userMsjError === null) {
        this.$router.push("/");
      }
    },
    cleanForm() {
      this.user = {
        email: "",
        password: "",
      };
    },
  },
  computed: {
    ...mapState(["userMsjError"]),
    showAlert() {
      return this.userMsjError !== null;
    },
  },
};
</script>

<style></style>