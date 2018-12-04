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
  photo: "https://avatars2.githubusercontent.com/u/11600254?s=400&u=c3502848e19443e0f8219b86e8c50759f20da6cb&v=4",
  name: "rafael",
  user: "raffaeldantass",
  email: "rafael@rafael",
  numberOfRepos: 22,
  following: 19,
  followers: 23,
  site: "www.rafael.com",

  repos: [
    {
      name: "repo 1",
      language: "js",
      stargazers_count: 10,
      forks_count: 15
    }
  ],
}
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;