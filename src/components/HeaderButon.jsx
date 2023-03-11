import React from 'react';
import classes from "./CustomButton.module.css";

const HeaderButton = ({img, ...props}) => {
    return (
        <button className={classes.button} {...props}>
            <img src={img} alt=""/>
        </button>
    );
};

export default HeaderButton;