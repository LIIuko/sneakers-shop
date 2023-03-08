import React from 'react';

const HeaderButton = ({img, imgStyle, ...props}) => {
    return (
        <button {...props}>
            <img className={imgStyle} src={img} alt=""/>
        </button>
    );
};

export default HeaderButton;