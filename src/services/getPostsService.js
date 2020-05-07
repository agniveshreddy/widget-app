export const getPostsService = (request) => {
    const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
    return fetch(POSTS_ENDPOINT)
        .then(response => {
          return response.json();
        })  
        .then(json => {
          let anArray = [];
          for(let item in json){
            anArray.push(json[item]);
          }
          return anArray;
        })
  };