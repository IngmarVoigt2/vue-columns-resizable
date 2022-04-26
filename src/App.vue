<template>
  <div id="app">
    <div class="container">
      <div>Default</div>
      <table border="1" class="table" v-columns-resizable>
        <thead>
          <tr>
            <th width="50%">name</th>
            <th width="25%">age</th>
            <th width="25%">gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>20</td>
            <td>male</td>
          </tr>
          <tr>
            <td>Emma</td>
            <td>18</td>
            <td>female</td>
          </tr>
          <tr>
            <td>Peter</td>
            <td>21</td>
            <td>male</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container">
      <div>Resize on thead</div>
      <table border="1" class="table">
        <thead v-columns-resizable>
          <tr>
            <th width="50%">name</th>
            <th width="25%">age</th>
            <th width="25%">gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>20</td>
            <td>male</td>
          </tr>
          <tr>
            <td>Emma</td>
            <td>18</td>
            <td>female</td>
          </tr>
          <tr>
            <td>Peter</td>
            <td>21</td>
            <td>male</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="container">
      <div>Resize on Vuetify v-data-table</div>
        <v-data-table :headers="headers" :items="desserts" v-columns-resizable />      
    </div>
  </div>


</template>

<script>
export default {
  name: 'app',
  // from  https://vuetifyjs.com/en/components/data-tables/#usage
  data () {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        }
      ]
    }
  },
}
</script>

<style>
.container {
  width: 800px;
  margin-bottom: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.columns-resize-bar {
  background-color: #050505;
  /* width: 5px !important; */
  /* height: 48px !important; */
}
</style>
