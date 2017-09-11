//fetchData.js

/***
*               *
* NOT WORKING ! *
*               *
***/

import axios from 'axios';

class FetchData {

  constructor(props) {
    this.state = {
      posts: []
    };
    this.props.getwhat = "users";
  }


  function getIt() {
    alert("hep");
    axios.get(`http://localhost:4200/api/${this.props.getwhat}`)
      .then(res => {
        {alert(JSON.stringify(res.data))}
        const posts = Array.from(res.data);
        //const posts = res.data.map(obj => obj.data);
        this.setState({
          posts
        });
      })
      .catch(function(error) {
        console.log(error);
      })
  }


}

export default FetchData;

// import React from 'react'
// import axios from 'axios';

// let getwhat = "users";
// let posts = [];
//
// module.exports = {
//   getSomeData: function(getwhat = "users") {
//
//     axios.get('http://localhost:4200/api/' + getwhat)
//       .then(res => {
//         posts = Array.from(res.data);
//       })
//       .catch(function(error) {
//         console.log(error);
//       })
//
//     return (posts);
//   }
//
//
// }


// let getwhat = "users";
//
// module.exports = {
//   sayHelloInEnglish: function() {
//     return "HELLO" + getwhat;
//   }
// };

// sayHelloInSpanish: function(getwhat="Hola") { return getwhat; } };

// // module.exports = router
