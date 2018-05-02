<template>
    <el-table
        :data='data'
        :height='styles.height'>
        <el-table-column v-for='column in columns' :key='column.index'
            :prop='column.prop'
            :label='column.label'
            :width='column.width'
            :fixed='column.fixed'
        />
    </el-table>
</template>

<script>

    export default {
        name: 'bulllisting',
        props: ['data', 'columnDefs', 'filters', 'styles'],
        cached: true,
        computed: {
            columns: function() {
                let i = 0
                return this.columnDefs.map( col => Object.assign(col, {index: i++}))
            }
        }
    }

</script>
