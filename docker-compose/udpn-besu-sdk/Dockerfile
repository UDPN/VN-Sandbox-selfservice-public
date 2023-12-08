FROM openjdk:19-jdk-alpine3.16

# https://github.com/UDPN/UDPN-utility/tree/sandbox/1.0/network_udpn_besu_generate_addr
COPY  udpn-besu-sdk-1.0.0.jar /app/

CMD ["java","-jar","/app/udpn-besu-sdk-1.0.0.jar"]