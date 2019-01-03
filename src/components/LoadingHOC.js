import React, {Component} from 'react'
import spinner from '../spinner.gif'
import styles from '../styles/main.css';

const LoadingHOC = (WrappedState) =>{
  return(
    class LoadingHOC extends Component{
      render(){
        return this.props.usernames.length === 0 ? <img className={styles['isLoading']} src={spinner}/> : <WrappedState {...this.props}/>
      }
    }
  )
}

export default LoadingHOC