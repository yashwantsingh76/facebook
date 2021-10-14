import React from 'react'


import {Route,Link,BrowserRouter,Switch} from 'react-router-dom';
import NavigationBarContainer from '../../Components/NavigationBar/NavigationBarContainer';
import HomeContainer from '../../Screens/HomeScreen/HomeContainer'
export default function NavigationComponent() {
    return (
        <div style={{backgroundColor:'#F0F2F5'}}>
        <BrowserRouter>
        <NavigationBarContainer/>
        <Switch>
          <Route exact path={'/'} component={HomeContainer}/>
        </Switch>
     
        </BrowserRouter>
    </div>
    )
}
