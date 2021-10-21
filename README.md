# platzi-master-retos-apalabrados
This repo is for solving the Apalabrados challenge.

You can see a live of this project in https://platzi-reto-apalabrados.web.app/

You will see a textbox for entering data and 3 tables showing information .

This app will evaluate the text entered and will classify it into 3 categories:
1. __Numbers__: It will store the entered value and a total of all previously entered values.
2. __Special characters__: It will take the special characters in the text and store them discarding the rest of the text.
3. __Texts__: If the text does not contain special characters then will be stored.

 

__Installation__


1. Clone this repository
2. Create a firebase project in firebase console --> https://firebase.google.com/
3. Modify the environment file placed in src/environments/ in order to add your firebase project config
4. Install dependencies running npm install 
5. Run ng serve --open

Thanks and enjoy it!
