import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function addPost(post) {
  return sendRequest(BASE_URL, 'POST', post);
}
