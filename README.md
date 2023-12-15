# Setup Business Node(VN) with docker-compose

## System prerequisites

###  hardware spec
```
Minimum configuration
cpu : 4 core
mem : 16 G
disk: 40 G

Recommended configuration
cpu : 8 core
mem : 32 G
disk: 40 G
```
### OS and tools

| Tools | version number(tested) |
| ------------------------- | ------------------------------------- |
| Ubuntu | v20.04.06 +|
| docker | v20.10.18 +|
| docker-compose | v1.27.3 +|

### Deployment prerequisite
``````
1、deployment docker
sudo curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
2、deployment docker-compose
sudo curl -L "https://get.daocloud.io/docker/compose/releases/download/1.27.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose
3、deployment besu private node (Please contact the affiliate)
4、domain example (vngateway.xxx.com, vnweb.xxx.com, vnsolutioncenter.xxx.com)
5、https certificate for domain
``````


### Steps 1: clone
```
git clone https://github.com/UDPN/VN-Sandbox-selfservice-public.git
git checkout "NEW-TAG"
```

### Steps 2: start base service

```
# You can modify the data storage directory yourself .env VN_DATA_VOLUMES
cd VN-Sandbox-selfservice-public/docker-compose
docker-compose -f docker-compose-base.yaml up -d

docker exec rabbitmq bash /script/init.sh

```

### Steps 3: load nacos config file
```
# please check nacos status , you can open IP:8848/nacos default user nacos passwd nacos

# get token

curl -X POST '127.0.0.1:8848/nacos/v1/auth/login' -d 'username=nacos&password=nacos'

{"accessToken":"eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJuYWNvcyIsImV4cCI6MTY5NzU1MjE2OX0.ODl0HnAuStEdALf1Tu5_kFcQ6S3PhKVb1p8xQMb3qOE8kGh47zY9rk1Yh744H1PZ","tokenTtl":18000,"globalAdmin":true,"username":"nacos"}

# create nacos namespace vn

curl -X POST 'http://127.0.0.1:8848/nacos/v1/console/namespaces?accessToken=eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJuYWNvcyIsImV4cCI6MTY5NzU1MjE2OX0.ODl0HnAuStEdALf1Tu5_kFcQ6S3PhKVb1p8xQMb3qOE8kGh47zY9rk1Yh744H1PZ&' -d "customNamespaceId=vn&namespaceName=vn&'namespaceDesc=vn"
```

### Step 4: load config for vn namespace
```
# Open the nacos administration page(http://127.0.0.1:8848/nacos) and import the files under nacos/config/xx.zip into the vn namespace
 
Configurations-->import-->Same preparation(Overwrite)-->Upload File-->choice x.zip

```
### Step 5: create besu address and privatekey
```
docker pull udpnnetwork/udpn-besu-sdk:1.0.0

docker run --rm -it --workdir /root -v $PWD/wallet1:/root udpnnetwork/udpn-besu-sdk:1.0.0

# Loop 5 times wallet1-wallet5

```

### Step 6: modifying a configuration file on nacos
```
1、edit vn-common.yaml (Fill it in after entering the network)
vn-code: < your vncode >
```
```
2、edit vn-init.properties
besu.address=0x<your wallet1/address.txt>
besu.privatekey=<your wallet1/private_key.txt>
```
```
3、edit vn-event.properties
besu.address=0x<your wallet2/address.txt>
besu.privatekey=<your wallet2/private_key.txt>
```

```
4、edit vn-member.properties
besu.address=0x<your wallet3/address.txt>
besu.privatekey=<your wallet3/private_key.txt>
```

```
5、edit vn-transaction.properties
besu.address=0x<your wallet4/address.txt>
besu.privatekey=<your wallet4/private_key.txt>
```

```
6、edit vn-control.properties
besu.address=0x<your wallet5/address.txt>
besu.privatekey=<your wallet5/private_key.txt>
```

```
7、edit vn-baseserver.properties
change your email message
```

```
8、edit vn-rabbit.yaml
mq-public-host: <your public_ip>
```
### Step 7: modifying a configuration file on local
```
edit VN-Sandbox-selfservice-public/docker-compose/vnsever/init/init_besu.yml
      host: <besu_ip>
      port: <besu_rpc_port>
      websocketPort: <besu_websocket_port>
```
### Step 8: attach execute permissions to files
```
chmod 777 ./vnserver/solc/solc-static-linux-0.8.19
```

### Step 8: modifying proxy 
```
1、Place the cert certificate in VN-Sandbox-selfservice-public/docker-compose/nginx/ssl
2、Change your certificate name server.crt server.key
3、Change configuration in VN-Sandbox-selfservice-public/docker-compose/nginx/stream server_name
```

### Step 9: start vn service
 
 ```
cd VN-Sandbox-selfservice-public/docker-compose
docker-compose -f docker-compose-vn.yaml up -d
 ```

### Step 10：Reset admin Password to 123456
```
sh reset-pw.sh
```

### Web addresses used in VN service
```
Rabbitmq http://localhost:15672

Nacos-web http://localhost:8848/nacos
  
Vn-web  https://localhost
```
### upgrade (optional)
```
TODO
```

#### vn-contracts

See vn-contracts contract generation for details: https://github.com/UDPN/vn-contracts


## contact us
Email: xxxx@xxxx.com
