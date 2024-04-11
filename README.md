# Install guide

## Run with docker

### Backend
```bash
 mvn clean package -Dmaven.test.skip
 docker build --build-arg JAR_FILE=target/*.jar -t myorg/myapp .
 docker run -p 8090:8070 myorg/myapp
```

### Frontend
to be continued ...

### Database
to be continued ...

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

## Endpoints API

| REQUEST | Endpoint                  | Description                                    |
|---------|---------------------------|------------------------------------------------|
| GET     | `/`                       | Main page                                      |
| GET     | `/items`                  | List of Market items                           |
| GET     | `/items/{item_id}`        | Item with `id` information                     |
| POST    | `/items/{item_id}/delete` | Delete item with `id` (Admin account required) |
| POST    | `/items/{item_id}/create` | Create item with `id` (Admin account required) |
|         | `/register`               | User registration                              |
|         | `/login`                  | User authorization                             |
| GET     | `/account/{username}`     | Account information                            |


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