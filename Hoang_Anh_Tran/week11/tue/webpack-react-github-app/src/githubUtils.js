import axios from 'axios';

const CREDENTIALS = 'API KEY';

const GitHub = {
  getUserInfo(username){
    return axios.get(`https://api.github.com/users/${ username }?${ CREDENTIALS }`);
  },
  getUserRepos(username){
    return axios.get(`https://api.github.com/users/${ username }/repos`);
  }
  // getUserInfo: function es5
  // getUserRepos - different API request
};




export default GitHub;
