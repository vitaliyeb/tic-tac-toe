import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component{

  componentDidCatch() {
    console.log('err');
  }

  render(){

    return null

    return(
      <p>    </p>
    )
  }
};











ReactDOM.render(
  <App />,
  document.getElementById('root')
);