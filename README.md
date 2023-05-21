
# InStock - Client

Welcome to the front-end repository of the InStock project. This repository contains the code for the React-based front-end of the Inventory Management System. This project was developed as part of a web development bootcamp, where collaboration and Agile development methodologies were emphasized.


## Table of Contents
1) [Project Overview](#markdown-header-Project-Overview)
2) [Screenshots](#markdown-header-Screenshots)
3) [Features](#markdown-header-Features)
4) [Tech Stack](#markdown-header-Tech-Stack)
5) [Run Locally](#markdown-header-Run-Locally)
6) [Environment Variables](#markdown-header-Environment-Variables)

## Project Overview

The InStock project was developed during a web development bootcamp as a collaborative group project. The goal was to deliver a modern and scalable Inventory Management System for a client. The project required working as an Agile team, following Scrum methodologies and using tools like JIRA, Figma, and Git/GitHub for efficient collaboration and project management.

## Screenshots

![Warehouse Page](https://github.com/mannyv123/instock-client/assets/123426666/a4556f7e-401d-47b1-970e-de6f13506b64)
![Inventory Page](https://github.com/mannyv123/instock-client/assets/123426666/31453a13-87a0-4ea6-b035-4fcfa0a45e0d)
![Form Validation](https://github.com/mannyv123/instock-client/assets/123426666/b5b2f906-041d-4b54-b89a-9071d24faf8a)
![Dynamic Search](https://github.com/mannyv123/instock-client/assets/123426666/4c0d47b8-25c3-47df-9142-bb6bb91e5914)
![Delete Modal](https://github.com/mannyv123/instock-client/assets/123426666/ef3eeec1-ebd8-4772-9a0f-abb481af85b3)
![Warehouse Details with Inventory Listing](https://github.com/mannyv123/instock-client/assets/123426666/f3c4be0c-3795-46bb-b113-663420978004)

## Features

- Overview of warehouses and inventory levels per warehouses
- Overview of total inventory by inventory type
- Create / delete inventory or warehouses
- Edit inventory or warehouse details
- Search and filtering functionality to find specific warehouses or inventory
- Form validation when creating new or editing existing warehouses/inventory
- Responsive design so that the site responds to mobile, tablet, and desktop views

## Tech Stack

**Client:** React, React Router, BEM/SASS, Figma (design)

**Server:** Node, Express, MySQL, Knex, Postman (for testing APIs)

Note that the project also involves using Agile development methodologies, including JIRA for project management and the Scrum methodology for collaborative workflow.

## Run Locally

To set up the front-end locally, follow these steps:

Clone this repository to your local machine using the following command:

```
  git clone git@github.com:mannyv123/instock-client.git
```

Navigate to the project directory:

```
  cd instock-client
```

Install the required dependencies using npm:

```
  npm install
```

To start the development server and run the front-end locally, use the following command:

```
  npm run start
```

This will launch the application in your default browser and automatically reload it whenever you make code changes.

Make sure to also clone and run the back-end server as well:
https://github.com/mannyv123/instock-server

## Environment Variables

To run this project, you will need to add the following environment variable to your .env file (see also .env.sample file):

`REACT_APP_API_URL`
