# location-api [NODE.JS]

# INSTALL
Run the following command to install the library. This command will download your files.
```
git clone https://github.com/alihan0/location-api .
```

Then run this command for libraries and dependencies. This command will create a `node_modules` folder in the directory.
```
npm install
```

Finally, you can start the node. Use this command for this action.
```
node app.js
```

Now the project will be published on your localhost on port `3000`. If you want to change the port, you can change the `PORT` value in `app.js`.

Note that you need a `database` for the system to work. You can edit your database information through `database.js` in the main directory. If you do not have any data, you can import the sql file in the `database` directory via `phpmyadmin`.

# USAGE
If you have used it without any problems, you should see the following response in your terminal:
```
The server is running on port 3000.
Database connected
```

If you've seen this, then there's no problem. Now all you have to do is go to your browser.
```
127.0.0.1:3000
```

Now you can use API service by running routes. This service uses the `GET Method` by default. So you can do the operations on the browser.

Now you can use country-state-city data more effectively in your project.

# ROUTES 

```
/country/all
```
 Returns all `Country` data. 
 
----------------------------

```
/country/id/:id
```
Returns the `Country` with the `ID` you submitted.

--------------------------------------------------

```
/country/code/:slug
```
Returns the `Country` with the `Country Code` you submitted.

------------------------------------------------------------

```
/state/all
```
 Returns all `State` data. 
 
----------------------------

```
/state/id/:id
```
Returns the `State` with the `ID` you submitted.

--------------------------------------------------

```
/state/country/:id
```
Returns the `State` values based on the `Country ID` you submitted.

-------------------------------------------------------------------

```
/city/all
```
 Returns all `City` data. 
 
----------------------------

```
/city/id/:id
```
Returns the `City` with the `ID` you submitted.

--------------------------------------------------

```
/city/state/:id
```
Returns the `City` values based on the `State ID` you submitted.

----------------------------------------------------------------

```
/city/country/:id
```
Returns the `City` values based on the `Country ID` you submitted.

-------------------------------------------------------------------

# Thanks

Thank you for your interest in my project and for reading this far. This is my first node.js project so sorry for my mistakes. I prepared this project to use it in the project I developed at my workplace and to relax it, while doing this, I saw it as an opportunity to learn node.js. Please do not hesitate to contribute.

Good Coding
