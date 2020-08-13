import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Wppost extends Component {

    getStyle = () => {
        
        return{
            background:"gray",
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            // textDecoration:this.props.todo.completed ? 
            //  'line-through' : 'none' 
        }
    }


    componentDidMount() {
        return fetch(`http://localhost:88/Sgroup/wp-json/wp/v2/posts/`)
        .then((response) => response.json())
        .then((responseJson) => {
            const { title, date, content } =  responseJson;

            this.setState({ title, date, content });
         // Update state here         
        })
        .catch((error) => {
          console.error(error);
        });         
    }

    

    render() {
        return (
          <div>
           {/* {this.props.mypost} */}
           {this.props.mypost}
           <p> aaa </p>
          </div>
        );
      }
     

}


//PropTypes
// TodoItem.propTypes = {
//     todo: PropTypes.object.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     delTodo: PropTypes.func.isRequired
// }

const btnStyle = {
    background:'red',
    color:'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float:'right'
}

const itemStyle = {
    backgroundColor:'gray'
}

export default Wppost
