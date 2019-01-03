import React from 'react'
import styles from '../styles/main.css';

const SearchBar = (props) => {

	let items = [
		{ name: "All", value: " "},
		{ name: "USD", value: "USD"},
		{ name: "BTC", value: "Bitcoin"},  
		{ name: "ETH", value: "ETH"},  
	];

  return(
    <div className={styles['main-content']}>
    	<div>
        <div className={styles['title-page']}>
          <h2>Track Cryptocurrency</h2>
        </div>
        <div className={styles['tool-bar']}>
         
          <div className={styles['search-box']}>
						<select id="myInput" onChange={props.searchFunc} className={styles['search-item']}>
						{items.map(item => (
							<option value={item.value}>{item.name}</option>	
						))}	
						</select>
          </div>
        </div>
    	</div>    
  	</div>
  )
}
export default SearchBar






					