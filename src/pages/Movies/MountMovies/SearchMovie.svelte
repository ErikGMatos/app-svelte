<script>
  import { each } from 'svelte/internal';
  import { storeMovie, INITIAL_STATE } from '../../../store';

  import api from '../../../services/api';
  let term = '';

  $: if (!term) {
    storeMovie.set({ ...INITIAL_STATE });
  }

  async function handleSubmit() {
    const response = await api.get(`/search/movie?query=${term}`);

    storeMovie.set({
      ...INITIAL_STATE,
      movies: response.data.results.filter((m) => m.backdrop_path !== null),
      wasSearched: true,
    });
  }
</script>

<style src="./styles.scss" lang="scss">
</style>

<form on:submit|preventDefault={handleSubmit}>
  <input bind:value={term} placeholder="Busque por um vídeo" />
  <button type="submit">Buscar</button>
</form>
