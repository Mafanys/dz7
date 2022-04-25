import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Checkbox} from "@mui/material";
import styles from './style.module.css';
import clsx from "clsx";



class List extends React.Component{
    constructor(){
        super();
        this.Chek = this.Chek.bind(this);
    }
    state = {
        check: false
    }
    
    Chek(){
       
        if(this.state.check === false){
            this.setState({
                check: true
            })
            
            console.log("true");
        }else{
            this.setState({
                check: false
            })
            console.log("false");
        }
    }
    render(){
        return(
            <ul className="list">
                {this.props.list.map(item =>{
                    const {id,value} = item;
                    return(
                        <li key={id} className={clsx(`${styles.noCheck}`, this.state.check && `${styles.check}`)}>   
                            {value}
                            <div>
                                <Checkbox  color="success" onChange={this.Chek} /> 
                                <button onClick={() => this.props.onDelete(id)}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </button>
                                
                            </div>                         
                                                   
                        </li>
                    )
                })}
            </ul>
        )
    }
}
export default List;