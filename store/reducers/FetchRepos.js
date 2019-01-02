import { List, fromJS } from 'immutable'

const initialState = fromJS({
  repos: [
    {
      name: "ola",
      language: " ",
      stargazers_count: 0,
      forks_count: 0,
    }
  ],
});

const fetchRepositoriesReducer = (state = initialState, action) => {

  switch(action.type) {
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
      // console.log(newArray);
      
      state = fromJS({
        repos: newArray,
      })
    break;

    case 'CLEAR_FETCH': 
      return state = fromJS({
        repos: [
          {
            name: " ",
            language: " ",
            stargazers_count: 0,
            forks_count: 0,
          }
        ],
      });
    break;
  }

  return state;
}

export default fetchRepositoriesReducer;