# user-tracker

## Installation

*NOTE:[Node.js](http://nodejs.org/).*

* Fork this repository.
* `$ git clone git@github.com:<your username>/users-tracker.git`
* `$ cd users-tracker/`
* `$ pip install -r requirements.txt`
* `$ npm install -g bower`
* `$ npm install`
* `$ bower install`
* `$ python manage.py makemigrations`
* `$ python manage.py migrate`
* `$ python manage.py runserver`


## Populate data

* `$ python manage.py createsuperuser`
* `$ python manage.py loaddata ./labs/fixtures/Labs.json`

## Run test

* `$ python manage.py test`

## Demo

Click here for see the [demo](https://damp-peak-80993.herokuapp.com/login) of this application

username: yazdan@demo.com

password: abcd12345