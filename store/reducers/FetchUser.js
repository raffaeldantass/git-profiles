const initialState = {
  photo: "http://via.placeholder.com/150",
  name: "nome",
  user: "username",
  email: "email",
  numberOfRepos: 0,
  following: 0,
  followers: 0,
  site: "website",
}

const fetchUserReducer = (state = initialState, action) => {

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

    case 'CLEAR_FETCH': 
      return state = Object.assign(state, initialState);
    break;
  }

  return state;

}

export default fetchUserReducer;