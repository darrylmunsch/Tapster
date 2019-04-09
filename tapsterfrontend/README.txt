Copy and paste these files inside of "tapsterfrontend" folder. 

Once you put the files into tapsterfrontend, cd into tapsterfrontend and run:
npm i

Then, cd to the main Tapster folder and run:
npm run dev


****************************************************
Notes:

Created a new frontend via react components in order to keep the code neat and to get the frontend to work concurrently with the db running.

When you run "npm run dev" in terminal, the mongoDB should connect and the frontend should run fine.

Frontend
   Navbar: "Tapster" link refreshes page
	   "API" link goes to "localhost:5000/Drinks/ to show off our api 

   Searches: Three independent search fiels with multi-select options as well as a type field to manually search

   Search Button: This will be our mock search button for the midterm presentation, later we can use it to actually run the algorithm on the backend


