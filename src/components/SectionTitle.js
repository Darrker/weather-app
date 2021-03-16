import React from 'react';

class SectionTitle extends React.Component{

    render(){
        return(
            <h3 className="section-title">{this.props.children}</h3>

        );
    }
}

export default SectionTitle;