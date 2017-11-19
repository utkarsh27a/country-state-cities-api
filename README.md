# Country State Cities API
 A repo contains basic api to list Country > State > Cities


# Technologies
	- Node JS with express framework

| API | URL | METHOD | PARAMS |
| ------ | ------ | ------ | ------ |
| version | /api/version | GET |  |
| Country | /api/countries | GET |  |
| State | /api/states | GET | country=CountryName |
| City | /api/cities | GET | country=CountryName&state=StateName |


# Folder Structure
	- views - Cotains Templates
	- routes - Routes Goruping
		- api -- api routes
		-  web -- web routes

	- public - this directory contains static elements

	-  db -- Contains data of countries, states and cities files
		-  countries -- array of all countries
		-  states -- key(country_name)  : values ( states array) pairs
		-  cities -- key( country_name_state_name )  :  values ( cities array) pairs
