import fetch from 'isomorphic-fetch';

export default function fetchBlogs() {
    return fetch(`https://my-json-server.typicode.com/typicode/demo/comments`)
        .then((data) => data.json())
        .catch((err) => {
            return null;
        })
}