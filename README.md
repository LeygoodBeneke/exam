# Install guide

## Run with docker

```bash
 mvn clean package -Dmaven.test.skip
 docker build --build-arg JAR_FILE=target/*.jar -t myorg/myapp .
 docker run -p 8090:8070 myorg/myapp
```

## Run with docker-compose

```bash
 mvn clean package -Dmaven.test.skip
 sudo docker-compose build
 sudo docker-compose up
```

## Run local

```bash
 mvn package 
 java -jar target/*.jar
```

## Requirements

* java 21
* mvn 3.8.7
* docker

---

## To do
- [x] Connect Database (Postgres)
- [ ] Login 
- [ ] Html forms
- [ ] CSS
- [ ] Add Logic to Database
- [x] Docker