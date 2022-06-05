# Run4Fun - Result Service
## Django Web Application for marathon or half marathon events

For site business idea and user interface, read more here https://github.com/JABE22/jabe22.github.io

**Project demo Published in https://jabe22.github.io/ResultService/home.html**

### Django framework integration

In this repository, front-end project files from the repository above are integrated to django framework. Also, this project extends demo site by inserting database solution and other django built-in functionalities

**Django built-in functionality used**
- Database management for admin
- CSV file upload to add data into the database via admin panel
- Models and views to insert data via web site forms (contact and event notification)
- User authentication (login, logout) to get access to hidden content of the site

The following Model-View-Controller structure is implemented

![alt text](https://bmu-verlag.de/wp-content/uploads/image1-6.png)

### Python virtual environment

This project does not contain Python environment files. In order to run program in your local machine you probably need to install the following packages
* django 3.2.5
* django-admin-tools 0.9.2
* django-extensions 3.1.5

Web application is developed using Python conda (4.13.0)

### Project pages

![alt home](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Home.JPG)
