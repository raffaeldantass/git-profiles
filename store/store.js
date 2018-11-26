import { createStore } from 'redux';

const reducer = (state, action) => {
  
  switch(action.type) {
    case 'FETCH_USER': 
    console.log(action.payload);
      state = {...state, user: action.payload};
      console.log(state);
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

  repos: {
    repoName: "repo 1",
    language: "js",
    stars: 10,
    forks: 15
  },
}
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;