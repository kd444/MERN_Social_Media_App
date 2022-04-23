
export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action;
    case LIKE:
      return posts;
    case CREATE:
      return posts;
    case UPDATE:
      return posts;
    case DELETE:
      return posts;
    default:
      return posts;
  }
};

