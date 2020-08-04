import {React, Component} from 'react';



export default class ErrorBoundry extends Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(){
        this.setState({hasError: true})
    }

    render(){
        
        if(this.state.hasError){
            return <h1>Error !!!</h1>
        } else {
            return this.props.children;
        }
    }

}