import React, {Component} from "react"; 

class Layout extends Component{
  render(){
    return(
      <div>
        <main>       asfeafa
           {this.props.children}
           {console.log(this.props.children)}
         </main>
      </div>
    )
  }
}
export default Layout