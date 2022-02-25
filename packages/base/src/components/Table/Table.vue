<template>
  <table
    class="table"
    :class="{ 'is-striped': isStriped }"
  >
    <thead>
      <tr>
        <th
          v-for="(title, index) in columnTitle"
          :key="index"
          :class="{ 'is-active': sortKey === title }"
          @click="sortBy(title)"
        >
          {{ capitalize(title) }}
          <span
            class="arrow"
            :class="sortOrders[title] > 0 ? 'asc' : 'dsc'"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in filteredData"
        :key="index"
      >
        <td
          v-for="(title, indexItem) in columnTitle"
          :key="indexItem"
        >
          {{ item[title] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import { SIZE } from '../TextField/type'

  export default {
    name: 'Table',
    version: '1.0.0',
    inheritAttrs: false,
    props: {
      /**
       * List data in table
       */
      data: {
        type: Array,
        default: () => []
      },
      /**
       * Use title in table
       */
      columnTitle: {
        type: Array,
        default: () => []
      },
      /**
       * Size of table
       * @values medium, small
       */
      size: {
        type: String,
        default: 'medium',
        validator: value => SIZE.includes(value)
      },
      /**
       * Whether table use striped style or not
       */
      isStriped: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        sortKey: '',
        sortOrders: this.columnTitle.reduce((o, key) => ((o[key] = 1), o), {})
      }
    },
    computed: {
      theme() {
        let height, padding

        if(this.size === 'small') {
          height = '36px'
          padding = '0px 12px'
        } else {
          height = '44px'
          padding = '0px 20px'
        }

        return {
          height,
          padding,
        }
      },
      filteredData() {
        const sortKey = this.sortKey
        const order = this.sortOrders[sortKey] || 1
        let data = this.data

        if (sortKey) {
          data = data.slice().sort((a, b) => {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }

        return data
      },
    },
    methods: {
      sortBy(key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      },
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    }
  }
</script>

<style scoped>
  .table {
    width: 100%;
    color: #3d3d3d;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 20px;
    border-spacing: 0;
    border-collapse: collapse;
    background-color: #fff;
  }

  th {
    color: #d6d6d6;
    background-color: #2572b7;
    border-bottom: 2px solid #2572b7;
    cursor: pointer;
    user-select: none;
  }

  td {
    border-bottom: 2px solid #d6d6d6;
  }

  th,
  td {
    min-width: 200px;
    height: v-bind('theme.height');
    padding: v-bind('theme.padding');
  }

  th.is-active {
    color: #ffffff;
  }

  th.is-active .arrow {
    opacity: 1;
  }

  .is-striped tr:nth-child(even) {
    background-color: #d6d6d6;
  }

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }
</style>

