/*globals COURSES:true */
import React from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'

class App extends React.Component {
  render() {
    return (
        <div>
          <GlobalNav />
            <div style={{ padding: 20 }}>
                {this.props.children}
            </div>
        </div>
    )
  }
}

module.exports = App


// /*globals COURSES:true */
// import React, { Component } from 'react'
// import GlobalNav from './GlobalNav'
//
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <GlobalNav />
//       </div>
//     )
//   }
// }
//
// module.exports = App