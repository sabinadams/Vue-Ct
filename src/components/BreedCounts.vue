<template>
    <div class="countContainer">
        <div v-for="group in counts" :key="group.groupName" class="group">
            <div class="groupHead">
                {{group.groupName}} | {{group.count}}
            </div>
            <div class="subCat" :key="breed.breedName" v-for="breed in group.breeds">
                {{breed.breedName}} | {{breed.count}}
            </div>
        </div>
    </div>
</template>

<script>
    import http from '@/services/httpClient.js'
    export default {
        name: 'breed-counts',
        data () {
            return {
                counts: []
            }
        },
        created() {
            http.get('/bulls/count/').then( res => {
                this.counts = [
                    { groupName: 'active', count: res.active, breeds: res.breeds.active},
                    { groupName: 'proven', count: res.proven, breeds: res.breeds.proven},
                    { groupName: 'gforce', count: res.gforce, breeds: res.breeds.gforce}
                ]
            })
        }
    }
</script>

<style lang="scss">
    .countContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .group {
            max-width: 400px;
            display: flex;
            flex-direction: column;
            flex: 1;
            .groupHead, .subCat {
                margin: 5px;
                background: #42b983;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .groupHead {
                height: 80px;
            }
            .subCat {
                height: 35px;
            }
        }
    }
</style>