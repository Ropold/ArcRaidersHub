FROM --platform=linux/amd64 eclipse-temurin:21
LABEL authors="ropold"
EXPOSE 8080
COPY backend/target/arcraidershub.jar arcraidershub.jar
ENTRYPOINT ["java", "-jar", "arcraidershub.jar"]