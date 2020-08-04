import React from 'react';
import './style.css';


class Loader extends React.Component {

    render(){
        return (
            <div className='loader-wrapper'>
                <div className="lds-ring">
                    <div></div><div></div><div></div><div></div>
                </div>
            </div>
        )
    }
}

export default Loader;