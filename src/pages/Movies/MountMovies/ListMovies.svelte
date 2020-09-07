<script>
  import { storeMovie } from '../../../store';
  import MovieItem from './MovieItem'
</script>

<div>
  {#each $storeMovie as movie}
  <MovieItem objMovie={movie}/>
  {/each}
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>