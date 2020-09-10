<script>
  export let objMovie;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 33%;
    margin-bottom: 16px;
    padding: 10px;
    font-size: 1.6rem;
  }

  img {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .overview {
    overflow: hidden;
    min-height: 60px;
    max-height: 60px;
  }

  .content p:first-child {
    color: #8c0808;
    font-size: 2rem;
  }

  @media only screen and (max-width: 900px) {
    .container {
      width: 50%;
    }
  }

  @media only screen and (max-width: 600px) {
    .container {
      width: 100%;
    }
  }
</style>

<div class="container">
  <div class="card">
    <img
      src={`https://image.tmdb.org/t/p/original/${objMovie.backdrop_path}`}
      alt="" />
  </div>
  <div class="content">
    <p><strong>{objMovie.title}</strong></p>
    <p><strong>estrelas:</strong> {objMovie.vote_average}</p>
    <p><strong>votos:</strong> {objMovie.vote_count}</p>
    <p>
      <strong>data:</strong>
      {new Date(objMovie.release_date).toLocaleDateString()}
    </p>
    <p class="overview"><strong>overview:</strong> {objMovie.overview}</p>
  </div>
</div>
