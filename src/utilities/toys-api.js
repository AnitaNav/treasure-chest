import sendRequest from "./send-request";
const BASE_URL = '/api/toys';

export async function getAllToys() {
  return sendRequest(BASE_URL);
}
