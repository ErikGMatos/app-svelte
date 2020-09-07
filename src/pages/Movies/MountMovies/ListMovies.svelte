<script>
  import { storeMovie } from '../../../store';
</script>

{#each $storeMovie as movie}
<p>{movie.title}</p>
{/each}