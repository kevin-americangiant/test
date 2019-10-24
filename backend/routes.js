export const routes = router => {
  
  // Serve up our index.html file on the main route
  router.get('/', (request, response) => {
    response.sendFile(`/app/public/index.html`);
  });
  
  // Pass errors along to our frontend
  router.get('/errors', (request, response) => {
    response.sendFile(`/app/public/index.html`);
  });

  // '/events' route
  /*
  This is our primary route for webhooks. On this route, we'll have to handle when Asana's API POSTs the initial webhook handshake and when it further POSTs events from our resource 
  */

  router.post('/events', (request, response) => {
    // 1. Set our response header to use the same x-hook-secret key that Asana provides us in the handshake and set our status code to 200
    response
      .header('x-hook-secret', request.headers['x-hook-secret'])
      .status(200);

    // 2. Respond with a '200 OK' message before we do anything else so that Asana knows we recieved its POST
    response.send('200 OK');

    if (request.body.events) {
      
      // 3. For diagonstic purposes, log the events Asana sends us (you can see these by clicking the "Logs" button in the upper left)
      console.log(request.body.events);
      
      // 4. Emit our events array on our websocket
      /* 
      The only thing we do here is emit on our websocket so our client can consume these new events. In a real world application, this is where you might make calls to other APIs (if you're looking to connect Asana events to actions in another service) or make further Asana API calls (if you'd like to explore what triggered these events in more detail). 
      */

      request.io.emit('newEvents', request.body.events);
    }
  });

  // return our newly adorned router

  return router;
};