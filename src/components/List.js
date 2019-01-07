import React, {Component} from 'react'
import SearchBar from './SearchBar'
import styles from '../styles/main.css'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

class List extends Component {

  constructor(props){
    super(props)
    this.state = {
      coins: [],
      store: []
    }
  }

  componentDidMount(){
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=100')
    .then(json => json.data.map(result => (
      {      
        name: `${result.name}`,
        symbol: `${result.symbol}`, 
        price: `${result.price_usd}`,
        rank: `${result.rank}`,
        id: `${result.rank}`,
        keyword: `${result.name} ${result.symbol}`
      })))
    .then(newData => this.setState({coins: newData, store: newData}))
    .catch(error => alert(error))
  }

  filterNames(e){
    this.setState({coins: this.state.store.filter((item) => item.keyword.toLowerCase().includes(e.target.value.toLowerCase()))})
  }

  render() {
    const {coins} = this.state
    return (
      <div className={styles['max-size']}>
        <SearchBar searchFunc={(e) => this.filterNames(e)}/>
        <div className={`${styles.items} ${styles.container}`}>
        <div className={styles['row']}>
          <div className={styles['main-content']}>
            <table id="myUL">         
            <tr className={styles['list-topbar']}>
              <th className={styles['center']}>Rank</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Action</th>
            </tr>           
            {coins.map(
              coin => 
                <tr className={`${styles.eachitem}`} id={coin.id}>
                  <td><div className={styles['center']}>{ coin.rank }</div></td>
                  <td>                   
                    <div>{ coin.symbol }</div>
                    <div className={styles['name']}>{coin.name}</div>
                  </td>
                  <td>
                    <CurrencyFormat value={coin.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
                  </td>
                  <td width="30px"><div className={`class-static`} data-id={coin.id}>Delete</div></td>
                </tr>
            )}
          </table>
          </div>
        </div>        
      </div>
    </div>
    );
  }
}

export default List;



      






          
