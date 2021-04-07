# Adapters
Adapters are the connectors of your application with the outside world. \
Any form of API call or websocket interaction which needs to happen, to share data with an external service or client, should happen within the adapter itself.

There are cases where some data is always shared between all the adapters – for example, sharing of cookies, base URL and headers across your AJAX (XHR) adapters. \
These can be initialized in the xhr folder, and then imported inside of your other adapters to be used further.