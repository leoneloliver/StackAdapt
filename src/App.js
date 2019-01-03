import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'
import styles from './styles/main.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  handleClick = () => {
    function clickable(){
      var classname = document.getElementsByClassName("class-static");
      var myFunction = function() {
        var cover = this.getAttribute("data-id"); 
        var element = document.getElementById(cover);
        element.classList.add("hidden");
      };
      Array.from(classname).forEach(function(element) {
        element.addEventListener("click", myFunction);
      });
    }
    setTimeout(function(){ clickable();  }, 900);
  }

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    this.handleClick();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <main className={styles['main']} >
            <div className={styles['main-content']}>
              <Route exact path="/" component={List} />
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;