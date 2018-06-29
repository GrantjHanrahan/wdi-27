import React, {Component} from 'react';

import GitHub from '../githubUtils';

class GitHubRepos extends Component {

  constructor( props ){
    super( props );

    this.state = {
      userinfo: {}
    }

  }

  componentWillMount(){

    GitHub.getUserRepos(this.props.match.params.username)
    .then( response => {
      console.log(response);
      console.log("I set the state");
      // console.log("Test", this.state.userinfo.data.public_repos);

      // save response in state
    })
    .catch(console.warn);

    // Get Repos here, new method in ../githubUtils.js different API
    // save response into state
  }

  render(){
    return(
      <div>
        <h1>Github & Octocatttttttttt<sup>*</sup></h1>
        <h2>Hello {this.props.match.params.username}</h2>
        TESTING REPOS
      </div>
    );
  }
}


export default GitHubRepos;
