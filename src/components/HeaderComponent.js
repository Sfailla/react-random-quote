import React from 'react';


const Header = (props) => {
    return (
        <div className="header">
            <div className="flex-container">                
                <svg className="person__icon">
                    <use xlinkHref="img/sprite.svg#icon-user2"></use>
                </svg>
                <h3>{props.developer}</h3>
            </div>
        </div>
    );
}

Header.defaultProps = {
    developer: 'Steve Failla'
}

export default Header;