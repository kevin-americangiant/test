// clearWebhooks -> utiltiy function
/*

Given a Personal Access Token and a target string, composes getWebhooks and removeWebhooks to clear all previously create webhooks from this project.

*/

// IMPORTS

import { getWebhooks } from './getWebhooks';
import { removeWebhook } from './removeWebhook';

// FUNCTION

export const clearWebhooks = async (token, target) => {  
  try {
    // 1. Fetch an array of previously created webhooks using getWebhooks
    const oldWebhooks = await getWebhooks(token, target);

    // 2. Make parallel calls to the Asana API to remove each Webhook in the array that getWebhooks returns
    await Promise.all(
      await oldWebhooks.map(async v => await removeWebhook(token, v))
    );
  } catch (e) {
    console.error(e.message)
  }
};