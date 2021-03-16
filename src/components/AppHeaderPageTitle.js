import React from 'react';


class AppHeaderPageTitle extends React.Component{

    render(){
        return(
            <h1 className="app-header__page-title">
                {this.props.children}
            </h1>
        );
    }
}

export default AppHeaderPageTitle;