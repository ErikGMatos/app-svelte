<script>
  export let objMovie;
</script>

<div class="container">
  <div class="card">
    <img src={`https://image.tmdb.org/t/p/original/${objMovie.backdrop_path}`} alt="">
  </div>
  <div class="content">
    <p>{objMovie.title}</p>
    <p>estrelas: {objMovie.vote_average}</p>
    <p>votos: {objMovie.vote_count}</p>
    <p>data: {new Date(objMovie.release_date).toLocaleDateString()}</p>
    <p class="overview">overview: {objMovie.overview}</p>
  </div>
</div>


<style>
  .container {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 33%;
    padding: 10px;
    margin-bottom: 16px;
  }

  img {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .overview {
    max-height: 60px;
    overflow: hidden;
    min-height: 60px;
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