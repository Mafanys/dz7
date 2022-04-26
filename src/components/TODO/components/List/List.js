import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import React from "react";
import styles from './style.module.css';
import clsx from "clsx";



class List extends React.Component{
     constructor(){
        super();
        this.chek = this.chek.bind(this);
    }
     state = {
        check: false
    }
    
     chek(){        
        /* if(this.state.check === false){
            this.setState({
                check: true
                
            })
            
            console.log("true");
        }else{
            this.setState({
                check: false
            })
            console.log("false");
        } */
        this.setState({ check: !this.state.check })
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
                                <input type="checkbox" checked={this.state.check} onChange={this.chek}/>
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