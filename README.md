# Simple Activity Tracker Project

***

## Description:

> ### Activity Tracker is an React + Redux sample application, which fetches list of users and displays them. On click of any user a modal pops up which displays user related information and additionally it display activity time period of current date which is randomly generated. 
> ### User can also choose different dates using Calendar, so activity time periods will be randomly generated and displayed for the selected date.

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

### Making requests to the backend API
Project fetches JSON data from a mock api server https://designer.mocky.io/ and its url is kept in src/redux/baseUrl.js file. 

## Sample JSON Objects returned by API:

Make sure the rig   
ht content type like `Content-Type: application/json; charset=utf-8` is correctly returned.

### Users 

```JSON
{
	"ok": true,
	"members": [{
			"id": "W012A3CDE",
			"real_name": "Egon Spengler",
			"tz": "America/Los_Angeles",
			"activity_periods": [{
					"start_time": "Feb 1 2020  1:33PM",
					"end_time": "Feb 1 2020 1:54PM"
				},
				{
					"start_time": "Mar 1 2020  11:11AM",
					"end_time": "Mar 1 2020 2:00PM"
				},
				{
					"start_time": "Mar 16 2020  5:33PM",
					"end_time": "Mar 16 2020 8:02PM"
				}
			]
		},
	]
}
```
