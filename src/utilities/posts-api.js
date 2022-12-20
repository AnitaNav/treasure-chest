import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function addPost(post) {
  return sendRequest(BASE_URL, 'POST', post);
}

export async function getAllPosts() {
  return sendRequest(BASE_URL);
}

export async function updatePost(id, postFormData) {
  return sendRequest(`${BASE_URL}/update/${id}`, "PUT", postFormData);
}

export async function deletePosts(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
