# Run4Fun - Result Service
## Django Web Application for marathon or half marathon events

*This project is a university master's degree course work in Development of Web Applications at Ural Federal University, spring 2022*

Date of completion for evaluation: 10.6.2022

- For site business idea and user interface, read more here https://github.com/JABE22/jabe22.github.io
- Project demo Published in https://jabe22.github.io/ResultService/home.html

**Notes:** 
* Style design (site responsiveness etc.) are not considered here. Please, visit links above.
* This project is not optimized for security issues

### Django framework integration

![alt django_logo](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/django.JPG)

In this repository, front-end project files from the repository above are integrated to django framework. Also, this project extends demo site by inserting database solution and other django built-in functionalities

**Django built-in functionalities used**
- Database management for admin
- CSV file upload to add data into the database via admin panel
- Models and views to insert data via web site forms (contact and event notification)
- User authentication (login, logout) to get access to hidden content of the site

The following Model-View-Controller structure is implemented

![alt chart](https://bmu-verlag.de/wp-content/uploads/image1-6.png)

### Python virtual environment

This project does not contain Python environment files. In order to run program in your local machine you probably need to install the following packages
* django 3.2.5
* django-admin-tools 0.9.2
* django-extensions 3.1.5

Web application is developed using Python conda (4.13.0)

### Data flow diagram

Following diagram describes how the project data structure is implemented.

![alt data_flow_diagram](ProjectImages/data_flow_chart.JPG)

Front-end technologies are HTML, CSS and JavaScript. JavaScript is used for reading data from static text and JSON files asyncronously and to build web page content by creating HTML DOM Elements (Nodes). Web page user interface functionality is powered by JavaScript.

Back-end works within Python Django framework to read and write into the database. Django API controls navigation between site pages, database functionality such as handling form data, login, admin and other built-in functionalities which will use dynamic database. However, form data validation passes through scripts written by JavaScript and after successful validation submit events are directed to python views and handled there.

### Website visitor and customer pages

**Home**

Home page consist of motivation picture gallery with changing images using fading (opacity) effect, and stylized phrase text. It's only informative page without clickable components.

![alt home](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Home.JPG)

**Upcoming events**

Recently passed events are visible, but their opacity value is reduced and orange box shadow effect inserted. Event boxes are clikable and urls set to original event page.

![alt upcome](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Upcome.JPG)

**Past events**

Past events page consist of single race accordion elements. Launch version is planned to have only two level accordions, but later when amount of data increases, will be moved to a three level accordions where first level consists of events, instead of a single competitions (single event can have several races).

![alt past](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Past.JPG)

**Past events (opened event result list)**

![alt past_open](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Past2.JPG)

**Search events**

Event and race search page have simple text input box with search tools (hidden by default).
Search function does not have "intelligence" which means that given key word will be compared directly to each data field in the model. However, upper and lower case letters are considered ("ger" is the same as "GER").
* Date filter works as expected filtering both, past and upcoming events similarly. 
* Athlete filter is reserved for planned additional functionality in the future and is therefore disabled (not implemented)

![alt search](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Search.JPG)

**About**

Informative page without functionality.

![alt about](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/About.JPG)

**Contact form**

Contact form has a moderate form validation and after success writes data into the database. Database has models (tables) reserved only for the data sent from the contact form.
* After succesful data submission user is redirected to the "/contact" (delay 3 seconds)
* Form fields will be cleared
* Submitting form from the same IP address is not limited (could be limited)

![alt contact](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Contact.JPG)

**Events on drill down map**

Map page is launched as a demo version. JavaScript to modify map pins (adding events to the map) is not implemented.

![alt map](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Map.JPG)

**Event notification form**

This page is accessible only for registered users. Registration is possible only via contact request which will be handled manually. It is possible that user tries to navigate to the "/enote" page and in this case he will be redirected to a login page. After successful login, event notification item appears into the navigation bar and user has access to the page.
Event notification page is planned only for site customers which are marathon event organizers (basically sport clubs)
Page form works similarly as contact form. Some properties of the form:
* Moderate form field validation (Only a few countries are supported)
* Clears data fields after succesfull submit and redirect to /enote (delay set to three seconds)
* Submitting form from the same IP address is not limited (could be limited)

![alt enote_upper](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Enote.JPG)
![alt enote_lower](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Enote2.JPG)

**Login to page**

Simple login form with django built-in backend solution. Successful login enables certain additional page content for customers (event notification). At first, registration to the page is for customers only, requests will be sent via contact form.

![alt login](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Login.JPG)

### Project admin pages

Admin portal is basically default django user interface. Following images demonstrates how to insert data from csv file to the database. Database management, which consists of inserting marathons event details, is manual human made work since it does not require remarkable effort. However, single races may contain thousands of items and that data must be transformed programmatically. For that purpose csv file upload option is inserted to the default model page.

**Admin home (django built-in)**

![alt admin_home](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Admin_home.JPG)

**Admin "Results" model (table)**

![alt admin_results](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Admin_results.JPG)

**Admin "Results" -> csv file upload**

![alt admin_upload-csv](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/Admin_upload-csv.JPG)


### Database design

Models to handle event details and race results

![alt db_chart_events](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/db_events.JPG)

Models to handle form data of the site

![alt db_chart_forms](https://raw.githubusercontent.com/JABE22/Run4Fun/master/run4fun/ProjectImages/db_forms.JPG)
