<script>
  import { storeMovie } from '../../../store';
  import MovieItem from './MovieItem';
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  p {
    width: 100%;
    margin: 0 auto;
    margin-top: 5rem;
    color: #fff;
    font-size: 2rem;
    text-align: center;
  }
</style>

<div>
  {#if $storeMovie.wasSearched && !$storeMovie.movies.length}
    <p>Nenhum filme encontrado :(</p>
  {/if}
  {#each $storeMovie.movies as movie}
    <MovieItem objMovie={movie} />
  {/each}
</div>
