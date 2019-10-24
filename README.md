# Asana Webhooks Explorer

Hi friend!

This is a lightweight example/utility of how you can use the Asana webhooks API to react to events in Asana. 

## Getting started

Remix this project and add an Asana Personal Access Token and a resource ID to the private `.env` file.

## How this can help...

### As an example of using the Asana webhooks API
Just take look at the code itself. `backend/server.js` is a great place to start and we've left comments throughout explaining the whole deal.

- **Backend**: Express and Socket.io (for websockets).
- **Frontend**: React and inline styles (loaded through Webpack).

All the frontend goodness in this project can be found the `/frontend` folder and all the exciting backend code in the `/backend` folder. Webpack takes in `backend/server.js` and `frontend/render.js` as entry points and transpiles their respective dependency trees with Babel (env) into `private/server.js` (backend) and `public/client.js` (frontend).

If you have any questions, be sure to lets us know in the [Asana developer community](https://community.asana.com/c/integrations).

### As a remixable starting point if you're using Asana webhooks in node
It's as easy as hitting that remix button 🚀

### As providing several handy and generalized utility functions for Asana webhooks
Check out the following:
- `backend/api.js`
- `backend/createWebhook.js`
- `backend/removeWebhook.js`
- `backend/getWebhooks.js`
- `backend/clearWebhooks.js`

### an inspector for events emitted by a resource you're working with in another context
Simply put your Asana Personal Access Token and the ID for your resource in `.env`, let the app build and then click the "🕶 Show" button.


### Further reading
- [What is a Webhook? (SendGrid)](https://sendgrid.com/blog/whats-webhook/)
- [Asana webhooks API documentation](https://asana.com/developers/api-reference/webhooks)
- [Asana Personal Access Token documentation](https://asana.com/guide/help/api/api#gl-access-tokens)
- [Asana events API documentation](https://asana.com/developers/api-reference/events)

Thanks for checking this out! ✨