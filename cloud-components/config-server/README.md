# Overview

This module is your spring cloud config server and has a dependency on where the "app-config" module
is located. It's purpose is to serve as a central location for spring configurations made available
to your spring based applications.

# Development

__Setup__

make changes to your `application.yml`

but do not check/push this file into the repository.

this file will be used for own development purposes

```
## Development Profile Configurations

spring:
  profiles: development
  cloud:
    config:
      server:
        git:
          uri: file:<path-to-root-project-directory>
          searchPaths: app-config

---
## Production Profile Configurations

spring:
  profiles: production
  cloud:
    config:
      server:
        git:
          uri: https://github.com/keunlee/solstice-meetup-10-31-2017.git
          username: <your-git-hub-username>
          password: <your-git-hub-password>
          searchPaths: app-config
```

__Build and Run__

`mvn clean spring-boot:run -Dspring.profiles.active=development`

# Deployment

To deploy to cloud foundry:

`cf push -f manifest.yml`
