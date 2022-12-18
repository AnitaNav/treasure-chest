import sendRequest from "./send-request";
const BASE_URL = '/api/donations';

export async function addDonation(donations) {
  return sendRequest(BASE_URL, 'POST', donations);
}
