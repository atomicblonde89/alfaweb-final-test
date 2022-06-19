<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="4">
        <h1>Lista de Cursos</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4">
        <b-card
          title="JavaScript Avanzado"
          img-src="../assets/es6.jpeg"
          img-alt="Image"
          img-height="250"
          img-top
          tag="article"
          class="mb-2"
        >
          <p>Información</p>
          <ul>
            <li>
              <span></span>
              <p class="m-0">Costo:<strong> 30000</strong></p>
              <p class="m-0">Duracion: 2 meses</p>
            </li>
            <li>
              <span></span>
              <p class="m-0">Cupos:<strong> 20</strong></p>
              <p class="m-0">Completado: No</p>
            </li>
            <li>
              <p class="m-0">Fecha de Registro:</p>
              <p class="m-0">06-03-2021</p>
            </li>
            <li>
              <p class="m-0">Descripción:</p>
              <p class="m-0">Curso con las nuevas actualizaciones de JavaScript.</p>
            </li>
          </ul>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card
          title="CSS para principiantes"
          img-src="../assets/css3.png"
          img-alt="Image"
          img-height="250"
          img-top
          tag="article"
          class="mb-2"
        >
          <p>Información</p>
          <ul>
            <li>
              <span></span>
              <p class="m-0">Costo:<strong> 10000</strong></p>
              <p class="m-0">Duracion: 1 mes</p>
            </li>
            <li>
              <span></span>
              <p class="m-0">Cupos:<strong> 35</strong></p>
              <p class="m-0">Completado: No</p>
            </li>
            <li>
              <p class="m-0">Fecha de Registro:</p>
              <p class="m-0">05-03-2021</p>
            </li>
            <li>
              <p class="m-0">Descripción:</p>
              <p class="m-0">Aprendiendo estilos con CSS desde el nivel mas básico.</p>
            </li>
          </ul>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card
          title="JavaScript básico de 0 a 100"
          img-src="../assets/js.png"
          img-alt="Image"
          img-height="250"
          img-top
          tag="article"
          class="mb-2"
        >
          <p>Información</p>
          <ul>
            <li>
              <span></span>
              <p class="m-0">Costo:<strong> 20000</strong></p>
              <p class="m-0">Duracion: 2 meses</p>
            </li>
            <li>
              <span></span>
              <p class="m-0">Cupos:<strong> 25</strong></p>
              <p class="m-0">Completado: si</p>
            </li>
            <li>
              <p class="m-0">Fecha de Registro:</p>
              <p class="m-0">05-03-2021</p>
            </li>
            <li>
              <p class="m-0">Descripción:</p>
              <p class="m-0">Programando para la web con JavaScript.</p>
            </li>
          </ul>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  computed: {},
};
</script>

<style scoped>
li {
  padding: 0.5rem 0rem;
}
</style>