import React from 'react';
// Wyświetlenie komunikatu
class Alert extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
            isVisible: typeof this.props.isVisible !== 'undefined'
                            ? this.props.isVisible : true,
        };

        this.alertType = typeof this.props.type !== 'undefined'
                            ? this.props.type : 'success';
        
    }

    removeAlert = () =>{
        
        this.setState({isVisible: false});
    }

    renderContent(){
        if(this.state.isVisible){
            return(
          
                <div className={`alert alert--${this.alertType}`}>
                    <span className="alert__title">{this.props.title}</span>
                    <span className="alert__content">{this.props.content}</span>
                    <button className="alert__exit" onClick={this.removeAlert}>X</button>
                </div>
        
            );
        }else{
            return '';
        }
       
    }
    render(){
        
        return this.renderContent();
    }

}

export default Alert;