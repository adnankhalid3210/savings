// import React from 'react';
// import axios from 'axios';

// export default class PersonList extends React.Component {
//   state = {
//     name: '',
//     id:'',
//   }

//   handleChange = event => {
//     this.setState({ 
//         name: event.target.value,
        
//      });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name,
//     //   id:this.state.id
//     };

//     axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then(res => {
//           this.setState({
//                id : res.data.id,
//                name: res.data.name
//           });
//         // console.log(res.data.id);
//       })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
          
//         </form>
//         <h1>{this.name}</h1>
//           <h2>{this.state.name}</h2>
//           <h2>{this.state.id}</h2>
//       </div>
//     )
//   }
// }

import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: [],
    username: [],
    items : []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ items : persons});
        
        console.log(items);
      })
      
  }

  render() {
    return (
      <ul>
       {<li>{this.state.items.length >0 ?this.state.items[0].username:null}</li>}
      </ul>
    )
  }
}