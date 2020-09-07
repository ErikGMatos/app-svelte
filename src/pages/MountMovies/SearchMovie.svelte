<script>
import { each } from 'svelte/internal';
import { storeMovie } from '../../store';

  import api from '../../services/api';
  let term = '';

  async function handleSubmit() {
    const response = await api.get(`/search/movie?query=${term}`);
    storeMovie.set(response.data.results)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input bind:value={term} placeholder="Busque por um vídeo">
  <button type="submit">Buscar</button>
</form>

<style>
  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    border: 1px solid #333;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    border-radius: 5px;
    padding: 0 5px;
  }

  input::placeholder{
    font-size: 1rem;
    color:rgba(0,0,0,.3)
  }

  button {
    border: none;
    background-color: #333;
    color: #fff;
    height: 32px;
    border-radius: 5px;
    padding: 5px 15px;
    margin-left: 16px;
  }
</style>