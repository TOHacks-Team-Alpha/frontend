import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBCUe8NVYGatU0aLShNajXx_glw8xi1TXk",
    libraries: "places" // This is required if you use the Autocomplete plugin
  }
});
