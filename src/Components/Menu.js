import React, {Component} from 'react'

//import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from "@react-navigation/drawer"

//import de los  screens a los que yo quiiero navegar

import Login from "../Screens/Login";
import Register from "../Screens/Register";
import Home from "../Screens/Home"
import Search from "../Screens/Search"
import Profile from "../Screens/Profile"



const Drawer = createDrawerNavigator()



class Menu extends Component {

constructor(){

super();
this.setState = {
    loggedIn: false,
}

}

render() {

    return(

 <Drawer.Navigator>
<Drawer.Screen  name= "Home" component= {() => <Home/>}/>
<Drawer.Screen  name= "login" component= {() => <Login/>}/>
<Drawer.Screen  name= "register" component= {() => <Register register={(emai,pass)=> this.register(email,pass)} />}/>
<Drawer.Screen  name= "profile" component= {() => <Profile/>}/>
<Drawer.Screen  name= "search" component= {() => <Search/>}/>
 </Drawer.Navigator>



    )
}


}




export default Menu;