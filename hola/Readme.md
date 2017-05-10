# hola
hola microservice using NodeJS

The detailed instructions to run *Red Hat Helloworld MSA* demo, can be found at the following repository: <https://github.com/redhat-helloworld-msa/helloworld-msa>


Execute hola locally
-----------------------

1. Open a command prompt and navigate to the root directory of this microservice.
2. Type this command to install the dependencies

        npm install

3. Type this command to execute the application:

        npm start

4. This will execute `hola.js` .
5. The application will be running at the following URL: <http://localhost:8080/api/hola>


Execute hola locally with Docker
-----------------------------------

1. Build the Docker image:

        docker build -t hola .

2. Run the Docker image:

        docker run -p 8080:8080 hola

3. The application will be running at: <http://localhost:8080/api/hola>



