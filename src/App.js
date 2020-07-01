import React, { Component } from 'react';
import './App.css';
import QuoteMachine from './components/QuoteMachine';
import { random } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import { render } from '@testing-library/react';
 

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
      bgColor: ''
  }
  this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
  this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  this.getBgColor = this.getBgColor.bind(this);
  this.setBgColor = this.setBgColor.bind(this);
}

//initial quote
get selectedQuote(){
  if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
    return undefined;
  }
  return this.state.quotes[this.state.selectedQuoteIndex];
}

//fetch data from json and set it to state upon mounting
componentDidMount() {
  fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
  .then(data => data.json())
  .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
}

assignNewQuoteIndex() {
  this.setState({ selectedQuoteIndex: this.selectQuoteIndex() });
  this.setBgColor();
}

//get quote index
selectQuoteIndex(){
  if (!this.state.quotes.length) {
    return undefined;
  }
  return random(0, this.state.quotes.length - 1);
}


//random background color, delete these if problems
getBgColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}
setBgColor(){
  this.setState({ bgColor: this.getBgColor() });
}

  render() {
    return (
      <Grid justify="center" container className={this.props.classes.container}  id="quote-box" style={{ backgroundColor: this.state.bgColor }}>  
        <Grid xs={11} lg={8} item>
          {
            this.selectedQuote ?
            <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} buttonColor={this.state.bgColor} />
            : null
          }  
        </Grid>
      </Grid>
    )  
  }  
}  


export default withStyles(styles) (App);
