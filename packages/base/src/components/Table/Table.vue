<template>
  <StyledTable :is-striped="isStriped">
    <thead>
      <tr>
        <StyledTh
          v-for="(title, index) in columnTitle"
          :key="index"
          :size="size"
          :is-active="sortKey === title"
          @click="sortBy(title)"
        >
          {{ capitalize(title) }}
          <StyledArrow :is-arrow-asc="sortOrders[title] > 0" />
        </StyledTh>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in filteredData"
        :key="index"
      >
        <StyledTd
          v-for="(title, indexItem) in columnTitle"
          :key="indexItem"
          :size="size"
        >
          {{ item[title] }}
        </StyledTd>
      </tr>
    </tbody>
  </StyledTable>
</template>

<script>
  import { StyledTable, StyledTh, StyledTd, StyledArrow } from './Table.styled'
  import { SIZE } from '../TextField/type'

  export default {
    name: 'Table',
    components: {
      StyledTable,
      StyledTh,
      StyledTd,
      StyledArrow
    },
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


