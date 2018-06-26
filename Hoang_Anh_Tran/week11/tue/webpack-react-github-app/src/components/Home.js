import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {

  render(){
    return(
      <div>
        <h1>Github Search</h1>
        <Link to="/search">
          <button>Search for a user</button>
        </Link>

          <button>Random user profile</button>

      </div>
    );
  }
}


export default Home;
