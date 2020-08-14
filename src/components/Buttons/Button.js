import React from 'react';
import Button from 'react-bootstrap/Button';

const LinkButton = (props) => {
    return(
    <Button href={props.btnLink}>{props.btnText}</Button>
    )
}

export default LinkButton;