# Spring Boot Websocket Chat

Simple Spring Boot chat built with Java and JS jQuery. 
App build to test the websocket protocol.

## Built With

* 	[Maven](https://maven.apache.org/)
* 	[JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* 	[Spring Boot](https://spring.io/projects/spring-boot)
* 	[git](https://git-scm.com/)
* 	[Lombok](https://projectlombok.org/)
* 	[jQuery](https://jquery.com/)
* 	[Stomp](https://stomp.github.io/)
* 	[SockJS](http://sockjs.org/)

## Running the application locally

Execute `main` method in the `pl.lickerish.websocketchat.WebsocketChatApplication` class from your IDE.

- Download the zip or clone the Git repository.
- Unzip the zip file (if you downloaded one)
- Open Command Prompt and Change directory (cd) to folder containing pom.xml
- Open IDE and import the project
- Choose the Spring Boot Application file (search for @SpringBootApplication)
- Right Click on the file and Run as Java Application

Alternatively you can use the [Spring Boot Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) like so:

```shell
mvn spring-boot:run
```

### URLs

|  URL |  Method |
|----------|--------------|
|`http://localhost:8080/chat`                       | GET |


## packages

- `models` — to hold our entities;
- `config` — to provide configuration  ;
- `controllers` — to listen to the client;

- `resources/` - Contains all the static resources and property files.
- `resources/static` - contains static resources such as css, js and images.
- `resources/application.properties` - It contains application-wide properties. Empty so far

- `test/` - contains unit and integration tests - Empty so far

- `pom.xml` - contains all the project dependencies
 

