import React from "react";

class Header extends React.Component{
    
    render(){
        return(
            <h2 className="header">You are have {this.props.count} todos</h2>
        )
    }
    
}

export default Header;