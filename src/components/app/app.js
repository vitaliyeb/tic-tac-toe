import React from 'react';

import Authentication from '../authentication/authentication';
import Loader from '../loader/loader';
import ListRoom from '../listRoom/listRoom';

import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
    

    render(){
        
        return (
            <div>
                app
                {/* <Loader />
                <Router>
                    <Route path='/' exact component={Authentication} />
                    <Route path='/list-room/' exact component={ListRoom} />
                </Router> */}

            </div>
        )
    }
}

export default App;



