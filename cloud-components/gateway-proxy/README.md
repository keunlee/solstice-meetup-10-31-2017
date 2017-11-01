# Overview

This is an API Gateway Server (Zuul). It acts as a central gateway for your discoverable services identified
by the service registry and routes those services through this module as they become available.

# Development

__Build and Run__

`mvn clean spring-boot:run -Dspring.profiles.active=development`

# Deployment

To deploy to cloud foundry:

`cf push -f manifest.yml`
