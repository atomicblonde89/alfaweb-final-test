<template>
  <b-navbar toggleable type="dark" variant="dark" class="d-flex">
    <b-navbar-toggle class="m-2" target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="border-width"></b-icon>
      </template>
    </b-navbar-toggle>
    <b-collapse id="navbar-toggle-collapse" is-nav class="m-2">
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/admin">Admin</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-brand to="/">Cursos AlfaWeb</b-navbar-brand>
    <UserLogin />
  </b-navbar>
</template>

<script>
import UserLogin from "@/components/UserLogin";

export default {
  name: "Navbar",
  components: {
    UserLogin,
  },
};
</script>

<style></style>