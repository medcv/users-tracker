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
* `$ python manage.py shell`
```sh
>>> Labs.objects.create(lab_name="Burke")
>>> Labs.objects.create(lab_name="FairFax")
>>> Labs.objects.create(lab_name="Austin")
>>> Labs.objects.create(lab_name="Houston")
```
