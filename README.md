# THOUGHTBOOK
###(23-hour coding challenge)

## Purpose of the App:

Welcome to the web app created by Polina and Akash. This is a one-page website which will allow for users to publish their own thoughts with the Title, Pseudonym and Thought (main body of content). Users will be able to view their published thoughts underneath the submit form and are limited to 300 characters. Enjoy!

## Technologies:

- Docker
- Express
- Node
- http-server
- HTML, CSS and JS
- PostgreSQL
- Nodemon

## Installation and Usage:

### Installation-

- First clone down this repo.
- Secondly navigate the to the folder in which this repo has been cloned down into and cd into it.
- Open the folder with the text editor of choice (VS Code etc...)

### Usage-

- To be able to use the website created, we must get the container running using docker.
- After opening up this repo into the text editor of your choice, make sure no prior containers are running in docker operating on port 3000.
- `docker ps` will show you the status of all docker containers if they are any running, double check the port it is operating on.
- Now to get the container up and running please type into the command line `docker-compose up`.
- Please wait this may take some time depending on your Machine.
- Now you can in a separate terminal, navigate to the client/static folder and then run `http-server` while the container is running in the other terminal.
- This will allow for you to now access the front end index.html website, where you can add your thought, with a title, pseudonym and story(limited to 300 characters).
- Please refresh the page after clicking the publish button.

## Challenges:

- Some of the challenges faced were when trying to run `docker-compose up` there was already a container from a previous project running on the port we designated to the server API.
- The post route was not working becasuse the type in the publish button was set to `type = 'button'` instead of `type='submit'`.
- Indenting issues on the docker compose yaml file was causing problems when running the `docker-compose up`.
- `docker-compose down--remove-orphans` was not closing all the containers and removing them, so we had to do it manually with `docker stop <insert_id_of_container>`

## Wins:

- Having the functions working for create thought posts.
- Implementing features which order the the posts in order of most recent.
- Styling, we created div elements which contained the posts.
- Created functions will create the html elements that we can put the posts from users in.
- Separating the code into different files to help with organisation and tidiness.
- Adding nth-child to css which allowed for us to change the colors of the alternating posts.
- Setting up `docker-compose.yaml` correctly.
- Linking the database with the server so the data gets shown on the client side code.
- GET and POST routes functioning in the way we intended.

## Future features:

- Would like to add more media queries to make the website more responsive.
- Add a dynamic carrousel of posts such that you can see random ones in another section of the page.
- Add a like/dislike and comment feature.
- Add animations, to make the website more user friendly.
