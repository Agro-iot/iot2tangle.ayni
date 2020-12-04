Ayni2Tangle API takes the calculated average production data and sends a message to the tangle. Then, the tangle process the transaction returning a HASH wich is used to create a unique URL that can be verified by anybody. From this moment, the production data is immutable and verifiable by third parties.

In order to install the Ayni2Tangle API follow these steps:

First export the SSL Hornet certificate with the followin comand:
```
openssl pkcs12 -export -in fullchain.pem -inkey privkey.pem -out keystore.p12 -name ayni -CAfile chain.pem -caname root
```
Initiate the backend. Replace MY_DOMAIN.COM, MY_PASSWORD, MY_KEEPY_DB_PASSWORD with your parameters.
```
java -jar -Dserver.ssl.key-store=/etc/letsencrypt/live/MY_DOMAIN.COM/keystore.p12 -Dserver.ssl.enabled=true 
-Dserver.ssl.key-store-type=PKCS12 -Dserver.ssl.key-store-password=MY_PASSWORD -Dserver.ssl.key-alias=ayni -Dserver.port=4444
-Dspring.datasource.url=jdbc:mysql://localhost:3306/keepy -Dspring.datasource.username=keepy -Dspring.datasource.password=MY_KEEPY_DB_PASSWORD
-Durl.fronted=http://MY_DOMAIN:9000/ ayni-api-0.0.1-SNAPSHOT.jar
```
Verify that the installation was sucessfull by visiting https://MY_DOMAIN.COM:4444/
