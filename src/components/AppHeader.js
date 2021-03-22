import React from 'react';

// komponent trzymający treść w headerze z obrazem
class AppHeader extends React.Component{

    render(){
        return(
        <header className="app-header">
            <div className="app-header__content">
                {this.props.children}
    
            </div>
    
        </header>
        );
    }
}

export default AppHeader;