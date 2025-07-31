interface Movie {
  $id: string;
  poster_url: string;
  title: string;
}

interface TrendMovieListProps {
  trendingMovies: Movie[];
}

const TrendMovieList: React.FC<TrendMovieListProps> = ({ trendingMovies }) => {
  return (
      <>
        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie:any, index:any) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </>
  )
}

export default TrendMovieList