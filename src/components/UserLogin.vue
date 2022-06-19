<template>
  <div class="text-white m-2">
    <div v-if="userLogin === null" @click="ingresar">
      <label>Ingresar</label>
      <b-icon icon="arrow-right-circle-fill"></b-icon>
    </div>
    <div v-else @click="salir">
      {{ userLogin }}
      <b-icon icon="arrow-left-circle-fill"></b-icon>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["userLogin"]),
  },
  mounted() {
    this.getUserLogin();
  },
  methods: {
    ...mapActions(["getUserLogin", "logoutUser"]),
    async salir() {
      await this.logoutUser();
      this.$router.push("/ingresar");
    },
    ingresar() {
      this.$router.push("/ingresar");
    },
  },
};
</script>

<style></style>