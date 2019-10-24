// API helper functions
/*

Every API has its own predilections, here we create straightforward helper functions to make working with external APIs throughout the rest of the app abstract and easy.

We use axios to make these API calls so that we can work with them as promises.

*/

// IMPORTS

import axios from 'axios';

// FUNCTIONS

// asana
// given a method (string), url (string), Personal Access Token (string), and optionally a body ({}), asana returns a json parsed response from the Asana API

export const asana = async (method, url, token, data) => {
  try {
    // Use fetch to create a promise and call Asana
    const response = await axios({
      url,
      baseURL: 'https://app.asana.com/api/1.0/',
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Asana-Fast-Api': 'true'
      },
      data
    })
    
    return response.data;
  } catch (e) {
    if (e.response.status === 401) {
      console.error(
        'Asana responded with 401 (not authorized), this usually means you have not provided a valid Personal Access Token in your .env file or your Personal Access Token does not have permissions for the resource ID you provided. Read more about Personal Access Tokens here: https://asana.com/guide/help/api/api#gl-access-tokens'
      )
    } else if (e.response.status === 400) {
      console.error(
      'Asana responded with 400 (resource not found), this usually means you have not provided a valid resource ID in your .env file. A Resource can be a task ID or a project ID.'
      )
    } else {
    console.error(e.message)
    }
  }
}

// flatten
// given an two dimensional array, return a one dimensional array
export const flatten = arr => [].concat(...arr);