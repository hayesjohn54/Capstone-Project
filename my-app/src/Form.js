import React, { Component } from 'react'
import firday from './firday.jpg'


export default class Form extends Component {
  handleSubmit(event){
    event.preventDefault();

    if (event.target.name === 'Friday'){
      return {firday}
     } else {
      return <p>Okay</p>
     }
   
  }


  

  render() {
    return (
      <div className='Form'>
        <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type='text' name='name'/>
            
            <label>Favorite Day of the Week:</label>
            <input type='day' name='day'/>

            <button type="submit">Submit</button>
        </form>
        <div>
         
        </div>
      </div>
    )
  }
}
