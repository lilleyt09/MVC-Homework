# MVC-Homework
To be honest, I was a bit overwhelmed at the amount of code needed for this assignment.  I had some help with it (mostly similar stuff I found online to use as a guide), and even still it was a lot.  The sign up and create post features work, though they don't append to the dashboard like I want, and logging back in doesn't work either.  The new user data is storing in the database, but the posts are not. I went back through the files several times to try and find what happened, but there's just so much there.  In theory:

The server.js handles the function of the server.

The handlebars files in the views folder dictate the visual components of each page and function.

The utils simply help with authorization.

The seeds populate user data, posts, and comments to the database.

The public folder houses the JavaScript files for the various pages, as well as the CSS.  I did manage to get the page to roughly resemble the example.

The models folder houses the functions for the comments, posts, and user data.

The db folder is simply the database.

The controllers folder commands the routing for everything.  I suspect this is where my app-breaking mistake is hiding.

And lastly the config allows the server to connect to the database.