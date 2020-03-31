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

    fetch(('/newitem'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: this.state.itemValue})
    }).then(res=>res.json()).then((jsonObj)=>{
      this.setState({
        list: jsonObj,
        itemValue: ''
      })
    })

  }

  deleteHandler = (event) => {
    fetch(('/deleteitem'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: event.target.id})
    }).then(res => res.json()).then((jsonObj) => {
      this.setState({
        list: jsonObj
      })
    })
  }

  //this will fetch the to do list form our database on mount
  componentDidMount() {

    fetch('/getitems').then(res=>res.json()).then((jsonObj)=>{
      this.setState({
        list: jsonObj
      })
    })

  }
  
  render(){

    return (
      <div id='body'>
        <h1>What to Do??</h1>
        <div id='to-do-list'>
          <div id='list-scroll'>

            {this.state.list ? this.state.list.map((item) => (
              <div key={item._id} id={item._id} onClick={this.deleteHandler}>
                <p className='list-item'>{item.content}</p>
              </div> 
            )) : <p>Loading ...</p>}

          </div>
        </div>
        <div id='form'>
          <form id='to-do-form' onSubmit={this.submitHandler}>
            <label htmlFor='list-item'>
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
