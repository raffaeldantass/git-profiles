import { createStore } from 'redux';

const reducer = (state, action) => {
  
  switch(action.type) {
    case 'FETCH_USER': 
      state = {
        ...state,
        photo: action.payload.avatar_url, 
        name: action.payload.name,
        user: action.payload.login,
        email: action.payload.email,
        numberOfRepos: action.payload.public_repos,
        following: action.payload.following,
        followers: action.payload.followers,
        site: action.payload.blog
      };
      break;

    case 'FETCH_REPOS':
      var checkRepos = action.payload;
      const newArray = checkRepos.map(repo => {
        return {
          name: repo.name,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
        }
      })

      state = {
        ...state,
        repos: newArray,
      }
      break;
  }

  return state;
}

const initialState = {
  photo: "http://via.placeholder.com/150",
  name: "nome",
  user: "username",
  email: "email",
  numberOfRepos: 0,
  following: 0,
  followers: 0,
  site: "website",

  repos: [
    {
      name: " ",
      language: " ",
      stargazers_count: 0,
      forks_count: 0,
    }
  ],
}
const store = createStore(
  reducer, 
  initialState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;