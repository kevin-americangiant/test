// removeWebhooks -> utiltiy function
/*

Given a Personal Access Token and a webhook ID, sends a DELETE to Asana to remove the webhook.

*/

// IMPORTS

import { asana } from './api';

// FUNCTION

export const removeWebhook = async (token, webhookId) => {

  try {
  // Send DELETE to Asana
  await asana(
    'delete',
    `/webhooks/${webhookId}`,
    process.env.PERSONAL_ACCESS_TOKEN
  );
  } catch (e) {
    console.error(e.message);
  }
}