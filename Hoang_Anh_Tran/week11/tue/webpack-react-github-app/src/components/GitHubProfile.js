import React, {Component} from 'react';


import GitHub from '../githubUtils';

class GitHubProfile extends Component {

  constructor( props ){
    super( props );

    this.state = {
      userinfo: {},
      public_repos: '',
      following: '',
      followers: '',
      blog: '',
      repos_url: ''
    }

  }



  componentWillMount(){

    GitHub.getUserInfo(this.props.match.params.username)
    .then( response => {
      console.log(response);
      this.setState({ userinfo: response });
      this.setState({ public_repos: response.data.public_repos });
      this.setState({ following: response.data.following });
      this.setState({ followers: response.data.followers });
      this.setState({ blog: response.data.blog });
      this.setState({ repos_url: response.data.repos_url });



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
        <h1>Github & Octocatttttttttt; Search<sup>*</sup></h1>
        <h2>Hello {this.props.match.params.username}</h2>
        public_repos: {this.state.public_repos} <br/>
        following: {this.state.following} <br/>
        followers: {this.state.followers} <br/>
        blog: {this.state.blog} <br/>
        repos link:
      </div>
    );
  }
}


export default GitHubProfile;
