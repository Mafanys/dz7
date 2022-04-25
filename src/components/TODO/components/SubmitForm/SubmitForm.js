import React from "react";
import { v4 } from "uuid";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

class SubmitForm extends React.Component{

    /* constructor(){
        super();
        this.handelChange = this.handelChange.bind(this);
    } */
    state = {
        value: ''
    }

  handelChange(e){
    this.setState({
        value: e.target.value,
    })
    
  }  
  handelClickAdd(e){
      e.preventDefault();

    if(this.state.value){
        this.props.handelAdd({
            id: v4(),
            value: this.state.value
        })

        this.setState({
            value: ''
        })
    }
    
  }
    render(){
        return(
            <form className="submit">
                <input className="submitInput" type="text" value={this.state.value} onChange={this.handelChange.bind(this)}></input>                
                <Button variant="contained" size="small" endIcon={<SendIcon />} onClick={this.handelClickAdd.bind(this)}>
                    Send
                </Button>
            </form>
        )
    }
}

export default SubmitForm;