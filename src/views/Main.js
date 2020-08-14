import React from 'react';
import Home from './Home';

class Main extends React.Component{
    state = {};

    // Used for data loading
    componentDidMount(){

    }

    // Use to handle conditional logic
    renderContent(){

    }

    render(){
        return(
            <div className="ui" style={{backgroundColor: "grey"}}>
                <div className="ui container">
                    <Home />
                </div>
            </div>
        );
    }
}

export default Main;