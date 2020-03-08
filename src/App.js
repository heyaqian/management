import React, { Component } from 'react';
import {routes} from './components/router'
import {BrowserRouter as Router,Route,Switch,Redirect,withRouter} from 'react-router-dom'
@withRouter
class App extends Component {  
 

  render() { 
    console.log(this.props)
    return (   
      <div className="App">
          <Router>
              <Switch>
                  {
                    routes.map((item)=>{
                      return <Route key={item.path} path={item.path} component={item.component}/>
                    })
                  }
                  <Redirect from="/" to="/home" exact />
                  <Redirect to="/404" />
           </Switch> 
         </Router>
      </div> 
    )    
  }
}
export default App;