<template>
  <div class="table-container">
    <table
      class="custom-table"
      :class="{ bordered, striped }"
      :style="{
        '--header-bg-color': headerBgColor,
        '--header-text-color': headerTextColor,
        '--row-color-odd': rowColors.odd,
        '--row-color-even': rowColors.even,
        '--row-hover-color': rowHoverColor,
        '--font-size': fontSize,
        '--text-align': textAlign,
        '--border-color': borderColor,
        '--font-family': fontFamily,
      }"
    >
      <thead>
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            :style="{ width: columnWidths[index] || 'auto' }"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            :style="{ textAlign: cellAlignment[cellIndex] || textAlign }"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
    required: true,
    default: () => [],
  },
  rows: {
    type: Array,
    required: true,
    default: () => [],
  },
  striped: {
    type: Boolean,
    default: false, // Enable striped rows
  },
  bordered: {
    type: Boolean,
    default: false, // Enable table borders
  },
  headerBgColor: {
    type: String,
    default: '#f4f4f4', // Background color for table headers
  },
  headerTextColor: {
    type: String,
    default: '#000', // Text color for table headers
  },
  rowColors: {
    type: Object,
    default: () => ({
      odd: '#fff',
      even: '#f9f9f9',
    }), // Colors for odd and even rows
  },
  rowHoverColor: {
    type: String,
    default: '#f0f0f0', // Background color for row hover
  },
  fontSize: {
    type: String,
    default: '1rem', // Font size for table text
  },
  textAlign: {
    type: String,
    default: 'left', // Default text alignment for table cells
  },
  columnWidths: {
    type: Array,
    default: () => [], // Custom column widths
  },
  cellAlignment: {
    type: Array,
    default: () => [], // Custom text alignment for specific columns
  },
  borderColor: {
    type: String,
    default: '#ddd', // Border color for the table
  },
  fontFamily: {
    type: String,
    default: 'Arial, sans-serif', // Font family for the table
  },
})
</script>

<style scoped>
.table-container {
  overflow-x: auto;
  margin: 1rem 0;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size, 1rem); /* Customizable font size */
  text-align: var(--text-align, left); /* Customizable text alignment */
  font-family: var(--font-family, Arial, sans-serif); /* Customizable font family */
}

.custom-table th,
.custom-table td {
  padding: 0.8rem;
  border: 1px solid var(--border-color, #ddd); /* Customizable border color */
}

.custom-table th {
  background-color: var(--header-bg-color, #f4f4f4); /* Customizable header background color */
  color: var(--header-text-color, #000); /* Customizable header text color */
  font-weight: bold;
}

.custom-table tr:nth-child(odd) {
  background-color: var(--row-color-odd, #fff); /* Customizable odd row color */
}

.custom-table tr:nth-child(even) {
  background-color: var(--row-color-even, #f9f9f9); /* Customizable even row color */
}

.custom-table tr:hover {
  background-color: var(--row-hover-color, #f0f0f0); /* Customizable row hover color */
}

.custom-table.bordered th,
.custom-table.bordered td {
  border: 2px solid var(--border-color, #333); /* Customizable border color for bordered tables */
}
</style>