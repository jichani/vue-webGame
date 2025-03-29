<template>
  <tr>
    <td-component
      v-for="(cellData, index) in rowData"
      :cell-data="cellData"
      :cell-index="index"
      :row-index="rowIndex"
    />
  </tr>
</template>

<script>
import TdComponent from "./TdComponent.vue";

export default {
  components: {
    TdComponent,
  },
};
</script>
