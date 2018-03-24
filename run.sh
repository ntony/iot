DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
echo "Pulling Latest Code"
git pull
echo "Building Jar"
mvn clean install -DskipTests=true
echo "Running IOT"
java -Xmx700m -Xms256m -jar -Djava.security.egd=file:/dev/./urandom  target/iot-0.0.1-SNAPSHOT.jar &


