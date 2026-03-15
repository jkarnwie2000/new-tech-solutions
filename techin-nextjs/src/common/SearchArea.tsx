

type SearchAreaProps = {
  setSearchOpen: (value: boolean) => void;
  searchOpen: boolean;
};


const SearchArea = ({setSearchOpen, searchOpen } : SearchAreaProps) => {
  return (
    <>
      <div className={`techin-header-search-section ${searchOpen ? 'open' : ''}`}>
        <div className="container">
          <div className="techin-header-search-box">
            <input type="search" placeholder="Search here..." />
            <button id="header-search" type="button"><i className="ri-search-line"></i></button>
            <p>Type above and press Enter to search. Press Close to cancel.</p>
          </div>
        </div>
        <div className="techin-header-search-close" onClick={() => setSearchOpen(false)}>
          <i className="ri-close-line"></i>
        </div>
      </div>
      <div className={`search-overlay ${searchOpen ? 'open' : ''}`} onClick={() => setSearchOpen(false)}></div>
    </>
  );
};

export default SearchArea;