import React, {useState, useEffect} from 'react';
import 'typeface-roboto';
import _ from 'lodash';
import QuoteMachine from './QuoteMachine.js';
import {Grid, withStyles} from '@material-ui/core';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  } 
}
function App({ classes }) {
  // constructor(props) {
  //   super(props);
  //   this.state= {
  //     quotes: [],
  //     selectedQuoteIndex: null
  //   }
  //   this.selectedQuoteIndex = this.makeNewQuoteIndex.bind(this);
  //   this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  // }
  const [quotes, setQuotes] = useState([]);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);

  useEffect(async () => {
    const data = await fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json');
    const quotes = await data.json();
    setQuotes(quotes);
    setSelectedQuoteIndex(_.random(0, quotes.length - 1));
  }, []);

  function getSelectedQuote() {
    if (!quotes.length || !Number.isInteger(selectedQuoteIndex)) {
      return undefined;
    }
    return quotes[selectedQuoteIndex];
  }

  function assignNewQuoteIndex() {
    setSelectedQuoteIndex(makeNewQuoteIndex())
  }
  // returns an ineger between 0 and the length of the array within state.quotes
  function makeNewQuoteIndex() {
    if (!quotes.length) {
      return undefined;
    }
    return _.random(0, quotes.length - 1)
  }

    //console.log(this.state.selectedQuoteIndex);
  return (
    <Grid className= {classes.container} id='quote-box' justify='center' container>
      <Grid sx={11} lg={8}item>
      {
        getSelectedQuote() ? 
        <QuoteMachine selectedQuote= {getSelectedQuote()} assignNewQuoteIndex={assignNewQuoteIndex} /> : null
      }
      </Grid>
    </Grid>
    );
}

export default withStyles(styles)(App);
