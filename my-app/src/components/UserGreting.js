import React, { Component } from 'react'

export class UserGreting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    
  render() {
    return this.state.isLoggedIn && <div>Welcome guest</div>
    // return this.state.isLoggedIn ?(
    //     <div>Welcome Guest</div>
    // ) : (
    //     <div>Hello Afreedh</div>
    // )

    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome guest</div>
    // }else{
    //     message=<div>Hello afreedh</div>
    // }
    // return <div>{message}</div>

    // if(this.state.isLoggedIn){
    //     return <div>Welcome Guest</div>
    // }else{
    //     return <div>Hello Afreedh</div>
    // }
    // return (
    //   <div>
    //     <div>Hello Afreedh</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreting
