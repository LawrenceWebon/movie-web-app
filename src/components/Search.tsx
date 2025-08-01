
interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Search = ({searchTerm, setSearchTerm}: SearchProps) => {

  return (
    <div className='search'>
      <div>
        <img src="searchIcon.svg" alt="search" />

        <input
          type="text"
          placeholder='Search for a movie...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
      </div>
    </div>
  )
}

export default Search