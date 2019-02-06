import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Todoitem extends Component {


  //giving custom style
  getStyle = () => {
    //   if(this.props.todo.completed){
    //       return {
    //           textDecoration: 'line-through'
    //       }
    //   }else{
    //       return {
    //           textDecoration: 'none'
    //       }
    //   }

    return {
        backgroundColor: '#f4f4f4',
        textDecoration: this.props.todo.completed ? 'line-through':'none',
        padding: '10px',
        borderBottom: '1px #ccc dotted'
    }
  }// end of getStyle
   
   markComplete = (e) =>{
       console.log(this.props)
   }

  render() {
      const {id,title}  = this.props.todo;
    return (

        <div style={this.getStyle()}>
            <p> 
                <input type="checkbox" onChange = {this.props.markComplete.bind(this,id) }/>{ ' '}
                {title}
                <button style={btnStyle} onClick = {this.props.delTodo.bind(this,id)}>x</button>
            </p>
        </div>
       
    )//end of return
    
  }// end of render


}//end of class


// prop types ----> good practice
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }

// css example
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default Todoitem
