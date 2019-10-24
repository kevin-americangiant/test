  // createWebhook -> utility function
/*

Takes a Personal Access Token, a resource ID, and POSTs a new webhook 

*/

// IMPORTS

import { asana } from './api';


// FUNCTION

export const createWebhook = async (token, resource, target) => {
  try {
  
    // 1. structure the dat we'll post
    const payload = {
      data: {
        resource,
        target
      }
    };

    // 2. POST using our Asana API helper function
    return await asana(
      'POST',
      '/webhooks',
      process.env.PERSONAL_ACCESS_TOKEN,
      payload
    );
  } catch (e) {
    console.error(e.message)
  }
};