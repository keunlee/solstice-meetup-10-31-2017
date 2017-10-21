# Overview

This module is where your spring cloud config files will live

## __`application.yml`__

This file has three main configuration sections
* __Global Configurations__ - configurations for all applications will receive regardless of the spring
specified spring profile.

* __Development Configuration__ - configurations for all applications who have a spring active profile
set to `development`.

* __Production Configuration__ - configurations for all applications who have a spring active profile
set to `production`.

# Development

__If you are setting up for the first, the short of it is, you really don't need to do anything here
and can move along to setup the next module.__

Otherwise,

Should there be a need add/remove/modify configurations, this is where it is done.

Do be mindful, that we are using spring profiles for various configuration values based on
the profile we need. 

For local development, during build time, you will need to specify the `development` profile.

This can be done via maven and/or through your IDE.

Most of the java based modules in this project are Spring Boot apps. Hence, when you run them via
maven, you will want to specify the active spring profile. For example:

`mvn clean spring-boot:run -Dspring.profiles.active=development`

# Deployment

Deployment of this module simply requires you to push any changes you have intended make to the
git repository.
