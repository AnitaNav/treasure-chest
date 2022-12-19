import sendRequest from "./send-request";
const BASE_URL = '/api/toys';

export async function createDonation(newDonationData) {
  return sendRequest(BASE_URL, 'POST', newDonationData);
}
