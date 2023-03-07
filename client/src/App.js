import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDkNDS6Q-FsuWoX10nxqdsfpErQlsasmzI",
  authDomain: "webmporium-e91b8.firebaseapp.com",
  projectId: "webmporium-e91b8",
  storageBucket: "webmporium-e91b8.appspot.com",
  messagingSenderId: "826617809488",
  appId: "1:826617809488:web:88099201063f29c668df55",
  measurementId: "G-D4RHBQ0GSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

class App extends Component {
  constructor(props){
    super(props);
}

  render(){
    return (
      <div className="App">
        <p>Welcome to Webmporium!</p>
      </div>
    );
  }
  
  }

export default App;
