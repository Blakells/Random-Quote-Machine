import React, {Component} from 'react';
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
class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      quotes: [],
      selectedQuoteIndex: null
    }
    this.selectedQuoteIndex = this.makeNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(data => data.json())
    .then(quotes => this.setState({quotes}, this.assignNewQuoteIndex));
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  assignNewQuoteIndex() {
    this.setState({selectedQuoteIndex: this.makeNewQuoteIndex() })
  }
  // returns an ineger between 0 and the length of the array within state.quotes
  makeNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return _.random(0, this.state.quotes.length - 1)
  }

  render() {
    //console.log(this.state.selectedQuoteIndex);
  return (
    <Grid className= {this.props.classes.container} id='quote-box' justify='center' container>
      <Grid sx={11} lg={8}item>
      {
        this.selectedQuote ? 
        <QuoteMachine selectedQuote= {this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} /> : null
      }
      </Grid>
    </Grid>
    );
  }
}

export default withStyles(styles)(App);
