# RideSafeSG - Safe Riding VR Simulator

RideSafeSG aims to allow cyclists and PMD users to
practice safe riding on Singapore roads, walkways and shared paths. Alongside this, this
project also aims to help non-cyclists to emphasize with cyclists on the road.

The VR application will simulate various environments cyclists and PMDs will face on
Singapore roads such as walkways, Park Connector Networks and roads. Environmental
conditions may also be simulated including but not limited to night riding and light rain.

## Steps to Setup the Spring Boot Back-end Application (server)

1. **Clone the application**

   ```bash
   git clone https://github.com/thefiend/ict2103-finex.git
   cd server
   ```

2. **Create MySQL database**

   ```bash
   create database finex_app
   ```

3. **Change MySQL username and password as per your MySQL installation**

   - open `src/main/resources/application.properties` file.

   - change `spring.datasource.username` and `spring.datasource.password` properties as per your mysql installation

4. **Build the application server**

   You can build the spring boot application by typing the following command -

   ```bash
   mvn clean install
   ```
5. **Run the application server**

   You can run the spring boot app by typing the following command -

   ```bash
   mvn spring-boot:run
   ```

   The application server will start on port 8080.

   You can also package the application in the form of a `jar` file and then run it like so -

   ```bash
   mvn package
   java -jar target/finex-0.0.1-SNAPSHOT.jar
   ```
   
## Steps to Setup the React Front end app (client)

1. Go to the `client` directory -

```bash
cd client
```

2. You can build and start the front end application by typing the following command -

```bash
npm install && npm start
```

The front-end server will start on port `3000`.

## Changing backend to use MongoDB or MySQL (config.js)
1. Open up the config file located at 
```
client/src/config.js
```

2. Then change the apiUrl from 
```http://localhost:8080/mongo```
to 
```http://localhost:8080/mysql```
