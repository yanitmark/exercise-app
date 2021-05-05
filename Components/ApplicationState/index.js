let initialState = {
    loggedIn: false
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { loggedIn: true };
    case "logout":
      return { loggedIn: false};
    default:
      throw new Error();
  }
}

export { initialState, reducer };
