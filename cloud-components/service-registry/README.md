# Overview

This is where the spring service registry server (Eureka) lives. It's goal is to relay information
about what api services are discoverable

# Development

__Build and Run__

`mvn clean spring-boot:run -Dspring.profiles.active=development`

# Deployment

To deploy to cloud foundry:

`cf push -f manifest.yml`
