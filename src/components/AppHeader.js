import React from 'react';


class AppHeader extends React.Component{

    render(){
        return(
        <header className="app-header">
            <div class="app-header__content">
                {this.props.children}
    
            </div>
    
        </header>
        );
    }
}

export default AppHeader;