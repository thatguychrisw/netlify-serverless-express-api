# Netlify Serverless Express API
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/thatguychrisw/netlify-serverless-express-api)

This boilerplate can be used to quickly spin up a serverless, express API leveraging Netlify Functions.   

## Included
- Express
- Jest w/ Supertest

## Routing
Netlify managed lambda functions are exposed normally at the route, `/.netlify/functions/{function name}`.  To improve the developer experience, requests are rewritten to improve routing.  

This allows clients to access endpoints via: 
- `{site name}.netlify.com/{endpoint}` instead of 
- `{site-name}.netlify.com/.netlify/functions/{function name}/{endpoint}`

## Commands
- Bring up a developer environment: `npm run dev`
- Run test suite: `npm t` or `npm test`

