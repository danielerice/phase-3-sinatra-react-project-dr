Welcome to the Wine.0 website!!

This is a site made for the wine enthusiast on the go. It was made with react-create-app, react-router-dom, ruby, and sinatra.

To run it on your machine you will need to fork and clone it from the GitHub repository, install dependancies, and run rpm start, start the server with rake server in the backend directory.

Once started, you will find six react components, App, Home, Wine, NewWine, Food, NewFood, and EditWine.

The app uses controlled forms in the components to log user imputs and stores them in state. Once the user submits the form it is sent to the server as either a GET/PATCH/POST/DELETE request. The backend recieves the request and depending on the URL, the application_controllers file will do neccesary work and return the requested object(s).

By doing this, the users wine data is persisted in the database and each time they log in it will be accesed.

Once a user has wine data to display they will be displayed in cards on the home page and can be deleted from there. The user can also click the links, NewWine, NewFood, and EditWine. The NewFood component allows a user to select a wine they has already posted to the database and assosiate a food pairing with that wine. It will then be displayed alongside the wine on it's card.