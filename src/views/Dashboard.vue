<template>
  <div class="dashboard">
    <h2>World Wide Sires</h2>
    <h2><i>"Customer Tools"</i></h2>
    <h3>Industry leading tools for industry leading customers</h3>
    <div class="nav-buttons">
        <button class="nav-button">Check out our Sire Directory</button>
        <button class="nav-button">Go to World Wide Sires, Ltd.</button>
    </div>
    <BreedsCount/>
  </div>
</template>

<script>
// @ is an alias to /src
import BreedsCount from '@/components/BreedCounts.vue'

export default {
  components: {
    BreedsCount
  }
}
</script>

<style lang="scss" scoped>
  .dashboard {
    width: 100%;
    text-align: center;
  }
  .nav-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .nav-button {
      margin: 15px;
      background: grey;
      border: none;
      height: 50px;
      width: 300px;
      &:hover {
        background: darken( grey, 10)
      }
    }
  }
</style>

