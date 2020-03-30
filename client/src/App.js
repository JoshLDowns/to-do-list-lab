import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = ({
      list: undefined,
      itemValue: ''
    })
  }

  //this handles the form entry, and allows users to type in the form while updating state
  changeItem = (event) => {
    this.setState({
      itemValue: event.target.value
    })
  }

  //this will handle the submission of the form
  submitHandler = (event) => {
    event.preventDefault()

    // Fill out this method!!!!

  }

  //this will fetch the to do list form our database on mount
  componentDidMount() {

    //Fill out this method!!!!

  }
  
  render(){

    return (
      <div id='body'>
        <h1>What to Do??</h1>
        <div id='to-do-list'>
          <div id='list-scroll'>
            
          </div>
        </div>
        <div id='form'>
          <form id='to-do-form' onSubmit={this.submitHandler}>
            <label for='list-item'>
              New Item:
              <input name='list-item' type='text' id='to-do-list-item' onChange={this.changeItem} value={this.state.itemValue} />
              <input type='submit' name='submit' value='Submit' />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
