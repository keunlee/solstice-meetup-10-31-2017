# Overview

Sample API module which serves a few REST endpoints

# Development

__Build and Run__

`mvn clean spring-boot:run -Dspring.profiles.active=development`

# Deployment 

To deploy to cloud foundry: 

`cf push -f manifest.yml`

note: make sure you have write permissions to the cf workspace: `klee-cnt`