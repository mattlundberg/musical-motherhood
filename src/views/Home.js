import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Jumbo =() =>{
    return(
        <Jumbotron>
            <h1>Hello, Emilie!</h1>
            <p>
                This is me just playing around and building this for you. It is good practice for me and lits of fun.
            </p>
            <p>
                <Button href="#" variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    );
}

export default Jumbo;