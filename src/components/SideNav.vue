<template>
    <div id="nav">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/siredirectory">Sire Directory</router-link>
      <router-link to="/search">Advanced Search</router-link>
      <router-link to="/indexes">WWS Indexes</router-link>
      <router-link to="/cataloggenerator">Catalog Generator</router-link>
      <router-link to="/bullpagegenerator">Bull Page Generator</router-link>
      <router-link to="/lineargenerator">Linear Generator</router-link>
      <router-link to="/photogallery">Photo Gallery</router-link>
      <router-link to="/pedigreesearch">Pedigree Search</router-link>
      <router-link to="/dnasearch">DNA Search</router-link>
      <router-link to="/admin">Administration</router-link>
    </div>
</template>

<script>
export default {
    name: 'SideNav'
}
</script>

<style lang="scss" scoped>
    #nav {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: grey;
        justify-content: space-around;
        overflow: auto;
        a {
            background: lightgrey;
            height: 100%;
            text-decoration: none;
            padding: 10px;
            margin-bottom: 1px;
            font-weight: bold;
            color: #2c3e50;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 300ms ease-in, color 300ms ease-in;
            min-height: 40px;
            &.router-link-exact-active {
                color: #42b983;
            }
            &:hover {
                background: darken(grey, 1);
                color: lightgrey;
            }
        }
    }
</style>
