import sendRequest from "./send-request";
const BASE_URL = '/api/comments';

export async function addComment(comment) {
  return sendRequest(BASE_URL, 'POST', comment);
}
