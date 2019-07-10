# github-ui
To develop UI similar to https://ibb.co/dkqWPP6


You need to get the left side panel data - profile data from this api - https://api.github.com/users/supreetsingh247. Obviously the edit bio button will not be functional for the assignment.

For the Right part, the tabs - Overview, Repositories, Stars - Will all be dummy data and clicking on them should not trigger any actions. The List of repositories should come from this api - https://api.github.com/users/supreetsingh247/repos. The search function, filter by type and language should be working. The 'New' button will be dummy. No need to make the graphs on the right hand side(green light ones).

Header - You can skip it.

Responsiveness - It should move the left section to top in mobile. The right section to the bottom. The widths and other data should be adjusted accordingly.


## Approach
1. On load of application, land the app on / route and load the container. 
2. On mounting of the container, call apis for the required data
3. Append the data fetched from apis to store and pass them down as props
4. Create 2 sections like userDetails and reposDetails and render the required information
5. Use media queries to make it responsive under 700px

### To run please download the project and cd into that folder and run ```yarn install``` and ```yarn start```
