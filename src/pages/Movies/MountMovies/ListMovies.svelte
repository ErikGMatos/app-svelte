<script>
  import { storeMovie } from '../../../store';
  import MovieItem from './MovieItem'
</script>

<div>
  {#if $storeMovie.wasSearched && !$storeMovie.movies.length}
    <p>Nenhum filme encontrado :(</p>
  {/if}
  {#each $storeMovie.movies as movie}
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

  p {
    font-size: 2rem;
    color: #fff;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-top: 5rem;
  }
</style>