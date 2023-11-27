# Project 1: Shared shopping list

#### Description 

This is the first project for the Web Software Development class of autumn 2023 in Aalto (Helsinki).

This project is a very basic todo list. It includes three pages
- the main page, including statistics on the number of lists and items created (including discarded ones)
- the lists page. It shows the active (i.e not discarded) lists, as well as an interface to create new lists or deactivate existing ones. From here, you can navigate to the page of a specific list
- list pages, specific for each list. It shows the items to do in this list, as well as an interface to create new items or discard existing ones. 

#### Online

This project is deployed online and can be accessed from here: `https://wsd-proj-1.onrender.com`

#### Local 

Assuming that you have docker-compose, you can follow the following steps to run the application locally: 
- get a local copy of the code (you can do this from the github repository at `https://github.com/AnselmeDonato/wsd-proj-1`)
- run the command `docker compose up --build` in the root directory 
- the app is available at `http://localhost:7777`

#### Tests 

This project comes with five small automated tests (in `e2e-playwright/tests/hello-world.spec.js`). Assuming that you have docker-compose, you can follow the following steps to run the application locally: 
- get a local copy of the code (you can do this from the github repository at `https://github.com/AnselmeDonato/wsd-proj-1`)
- run the command `docker compose run --entrypoint=npx e2e-playwright playwright test && docker compose rm -sf` in the root directory 