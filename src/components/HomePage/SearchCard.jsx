import React from 'react'

const SearchCard = () => {
  return (
    <div className="trending-suggestions-container">
    <div className="trending-explore">
        <p className="explore-heading">

            <span className="trending-explore-taj-text">EXPLORE</span>
        </p>
        <div className="explore-taj-categories">
            <a className="individual-category-explore" href="/">Hotels</a>
        
            <a className="individual-category-explore" href="/">Dining</a>
        
            <a className="individual-category-explore" href="/">Resorts</a>
        </div>
    </div>
    <div className="trending-search">
         
        <p className="explore-heading">
           
            <span className="trending-explore-taj-text trending-search-text">Trending Searches</span>
        </p>
        <div className="trending-searches-in-taj">
            <a className="individual-trends" href="/">,Hyderabad</a>
        
            <a className="individual-trends" href="/">Bangalore</a>
        
            <a className="individual-trends" href="/">Chennai</a>
        
            <a className="individual-trends" href="/">Vijayawada</a>
        </div>
    </div>
</div>
  )
}

export default SearchCard