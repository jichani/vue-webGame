<template>
  <table>
    <tr-component
      v-for="(rowData, index) in tableData"
      :key="index"
      :row-data="rowData"
      :row-index="index"
    />
  </table>
</template>

<script>
import TrComponent from "./TrComponent.vue";

export default {
  props: {
    tableData: Array,
  },
  components: {
    TrComponent,
  },
};
</script>
