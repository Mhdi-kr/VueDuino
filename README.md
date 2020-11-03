<img src="assests/img/github-header.png" alt="VueDuino"/>
# Vueduino

## What it is

use as many IoT boards as you want just subscribe to any topic vueduino will plot it for you

use famous hardware modules and use vueduino web interface for them in specific topics

## How it works

your IoT devices will connect to a server via MQTT protocol, subscribe to a specific topic and start sending data. in case of arduino this data is being sent in ```void loop()``` 

this MQTT server is attached to an express web server which servers various APIs for us to use in the front end, which we use vueJs for. 

in the backend we use redis for better performance and quality of service and finally store any data we want in the mongodb database

in the front end we use Restful APIs and web socket, and many UI tools to express, plot and print data for the end user.



## setup and requirements



## using arduino/NodeMCU with Vueduino
