// getWebhook.js
/* 

Utility function that takes in an Asana Personal Access Token and returns an array of all active webhook IDs associated with a specific target.
  
This lets us find all the webhooks we have created for a specific target and, in practice, allows us to clean up webhooks we've created with previous instances of our application.
  
Getting these IDs is slightly tricky. The Asana API only allows us to GET webhooks by workspace, so we have to:
- Get all the user's workspaces (returned by the API as an array)
- Get all the webhooks in each workspace (returned by the API as objects)
- Filter the webhooks by active and by the target resource
- Concatenate only the IDs into a flat array of numnbers
  
We take a functional, RxJS-esque approach using async/await here. We aren't actually using observables or any external libraries, but if you're familiar with functional or reactive programming patterns or if you've worked with observables before, this will hopefully feel simple.
  
If you aren't familiar with those patterns, this function might feel a little tough. Let's walk you through it step by step:
  
*/

// IMPORTS

import { asana, flatten } from './api';

// FUNCTION

export const getWebhooks = async (token, target) => {
  
  try {
    
  // 1. Create a workspaces variable and put the results of an API call to Asana that fetches an array of the user's workspaces in it
  const workspaces = await (await asana(
    'GET',
    '/users/me?opt_fields=workspaces',
    token
  )).data.workspaces;

  // 2. Return a flattened array a webhook IDs
  // 2.1 flatten the array of results we'll get back from fetching the webhook objects on each workspace in our workspaces array
  return await flatten(

    // 2.2 Use promise.all to fetch the webhook objects for each workspace in parallel
    await Promise.all(

      // 2.3 Map through our array of workspaces and for each one fetch their webhook objects and return the resulting data
      workspaces.map(
        async v =>
          await (await asana('GET', `webhooks?workspace=${v.id}`, token)).data
      )
    )
  )

    // 2.4 Filter our flattened array of webhook objects by their `target` (string) and `active` (boolean) keys
    .filter(
      v =>
        v.target === target &&
        v.active === true
    )

    // 2.5 Finally, return an array of just the value in each webhook object's `id` key
    .map(v => v.id);
  } catch(e) {
    console.error(e.message)
  }
};
