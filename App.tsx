import React, { Component } from "react";
import LoginView from "./src/LoginView";
import { Actions, Scene, Router } from "react-native-router-flux";

const scenes: void = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar />
  </Scene>
)

export default class App extends Component<Scene>{
  render(){
    return <Router scenes={scenes}/>
  }
}