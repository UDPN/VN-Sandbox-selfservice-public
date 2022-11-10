# Setup Business Node(VN) with docker-compose

## System prerequisites

### Minimum hardware spec

cpu : 16core
mem : 32G
disk: 40G

### OS and tools

| Tools | version number(tested) |
| ------------------------- | ------------------------------------- |
| Ubuntu | v20.04.04 |
| docker | v20.10.18 |
| docker-compose | v1.27.3 |

### tips to install docker 
```
sudo curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

### tips to install docker-compose
```
sudo curl -L "https://get.daocloud.io/docker/compose/releases/download/1.27.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose
```

## Steps to install VN instance

- repo download and clone
```
sudo apt-get install git-lfs
git lfs clone https://github.com/UDPN/VN-Sandbox-selfservice-public.git
```
- Enter the VN docker-compose directory
  
  `cd VN-Sandbox-selfservice-public/docker-compose`
- start VN
  
  `sudo docker-compose up -d`  
- stop VN
  
  `sudo docker-compose down`  
- Register to Validator Node

  By now, your VN instance has been started successfully.  Now, you need to follow the user guide and start to register to VN via url-to-manual

### Web addresses used in VN service

Note: The system needs to use port 80,8080-8085,8761,3306,6379. If there is any conflict, please modify the .env file.

- EUREKA
    http://localhost:8761/
- VN-web
    http://localhost/

### upgrade (optional)

1. Stop VN docker-compose
2. Fetch the latest jar file by "cd VN-Sandbox-selfservice-public; git fetch"
3. Start VN again

## .env configure (advanced)

| VN-server item | Description |
| ------------------------- | ------------------------------------- |
| LOG_SAVE_DIR | Log directory storage address |
| VN_DATA_VOLUMES | VN-server jar package directory storage address |
| JAR_VERSION | JAR package Version No |
| BESU_INIT_PROPERTIES | init_besu.yml storage path |
| DID_PROPERTIES_FILE | application-besu.properties storage path |
| EUREKA_CONTAINER_NAME | EUREKA name |
| EUREKA_PORT | EUREKA accessible port |
| EUREKA_USER | EUREKA user |
| EUREKA_PWD | EUREKA password |
| VN_GATEWAY_CONTAINER_NAME | VN Gateway name |
| VN_GATEWAY_PORT | VN Gateway accessible port |
| VN_INIT_CONTAINER_NAME | VN Init name |
| VN_INIT_PORT | VN Init accessible port |
| VN_BASE_CONTAINER_NAME | VN Base name |
| VN_BASE_PORT | VN Base accessible port |
| VN_BASE_EMAIL_HOST | VN Base accessiblee email host |
| VN_BASE_EMAIL_PORT | VN Base accessible email port |
| VN_BASE_EMAIL_USER | VN Base email user |
| VN_BASE_EMAIL_PASSWORD | VN Base email password|
| VN_BASE_EMAIL_FROM | VN Base accessible email FROM |
| VN_CONTROL_CONTAINER_NAME | VN Control name |
| VN_CONTROL_PORT | VN Control accessible port |
| VN_VNDID_CONTAINER_NAME | VN DID name |
| VN_VNDIDL_PORT | VN DID accessible port |
| VN_EVENT_CONTAINER_NAME | VN Event name |
| VN_EVENT_PORT | VN Event accessible port |
| VN_EVENT_LISTENER_START | VN  accessible port |
| VN_MEMEBER_CONTAINER_NAME | VN Memeber name |
| VN_MEMEBER_PORT | VN Memeber accessible port |
| VN_PERMISSION_CONTAINER_NAME | VN Permission name |
| VN_PERMISSION_PORT | VN Permission accessible port |
| VN_TRANSACTION_CONTAINER_NAME | VN Transaction name |
| VN_TRANSACTION_PORT | VN Transaction accessible port  |


init_besu.yml and application-besu.properties, The file is the configuration file for connecting to the VN. 
To change the VN environment, you need to replace the corresponding configuration file.

### mysql (advanced)

```
        - mysql.master.url=jdbc:mysql://${MYSQL_MASTER_HOST}:${MYSQL_MASTER_PORT}/${MYSQL_DATABASE}?characterEncoding=UTF-8&useSSL=false&serverTimezone=Asia/Shanghai
        - mysql.master.username=${MYSQL_USER}
        - mysql.master.password=${MYSQL_PWD}
        - mysql.slave.url=jdbc:mysql://${MYSQL_SLAVE_HOST}:${MYSQL_SLAVE_PORT}/${MYSQL_DATABASE}?characterEncoding=UTF-8&useSSL=false&serverTimezone=Asia/Shanghai
        - mysql.slave.username=${MYSQL_USER}
        - mysql.slave.password=${MYSQL_PWD}
```

| Configuration item | Description |
| ------------------------- | ------------------------------------- |
| MYSQL_MASTER_HOST | Your primary MYSQL accessible IP |
| MYSQL_SLAVE_HOST | Your IP slave from MYSQL |
| MYSQL_DATABASE | your MYSQL database name |
| MYSQL_USER | your MYSQL user |
| MYSQL_PWD |  The corresponding password of your MYSQL user |

If you do not have master-slave MYSQL, you can configure the content from the master to the master.

### redis (advanced)

```
        - spring.redis.host=${REDIS_HOST}
        - spring.redis.port=${REDIS_PORT}
        - spring.redis.password=${REDIS_PASSWORD}
        - spring.redis.database=${REDIS_DATABASE}
```

| Configuration item | Description |
| ------------------------- | ------------------------------------- |
| REDIS_HOST | Your REDIS accessible IP |
| REDIS_PORT | Your REDIS accessible port |
| REDIS_DATABASE | REDIS databases number |
| REDIS_PASSWORD |  The corresponding password of your MYSQL user |

### rabbitmq (advanced)

```
       - rabbitmq.host=${MQ_HOST}
       - rabbitmq.port=${MQ_PORT}
       - rabbitmq.mgrport=${MQ_PORT_MANAGEMENT}
       - rabbitmq.username=${MQ_USER}
       - rabbitmq.password=${MQ_PWD}
       - rabbitmq.vhost=${MQ_VHOST}
       - spring.mq-protocol=${MQ_PROTOCOL}
       - spring.mq-public-host=${MQ_PUBLIC_HOST}
```

| Configuration item | Description |
| ------------------------- | ------------------------------------- |
| MQ_HOST | Your MQ accessible IP |
| MQ_PORT | Your MQ accessible port |
| MQ_PORT_MANAGEMENT |  Your MQ accessible management port |
| MQ_VHOST | MQ VHOST |
| MQ_USER | your MQ user |
| MQ_PWD |  The corresponding password of your MQ user |
| MQ_PROTOCOL |  MQ remote port |
| MQ_PUBLIC_HOST | MQ remote IP address |

### contract

If you want to connect to our testnet, please use our contract. If you want to test independently, please regenerate the contract.

#### did

did contract generation see details: https://github.com/UDPN/DIDSDK

'''
        - did.proxy.mode=${DID_PROXY_MODE}
        - did.proxy.url=${DID_PROXY_URL}
        - did.besu.node.url=${DID_BESU_NODE_URL}
        - did.besu.node.private.key=${DID_BESU_NODE_PRIVATEKEY}
        - did.besu.did.cont.address=${DID_BESU_DID_CONTADDRESS}
        - did.besu.cpt.cont.address=${DID_BESU_CPT_CONTADDRESS}
        - did.besu.auth.issuer.address=${DID_BESU_AUTHISSUERADDRESS}
'''

| Configuration item | Description |
| ------------------------- | ------------------------------------- |
| DID_PROXY_MODE | DID Proxy Mode |
| DID_PROXY_URL | DID Proxy URL address |
| DID_BESU_NODE_URL | DID Proxy node address |
| DID_BESU_NODE_PRIVATEKEY | Generate private key is |
| DID_BESU_DID_CONTADDRESS | The Did Contract deploy Contract Address is |
| DID_BESU_CPT_CONTADDRESS | The Cpt Contract deploy Contract Address is |
| DID_BESU_AUTHISSUERADDRESS |  The Auth Issuer Contract deploy Contract Address is |

#### vn-contracts

See vn-contracts contract generation for details: https://github.com/UDPN/vn-contracts

# Besu Contract Address

'''
        - besu.nodePrivateKey=${BESU_NODE_PRIVATEKEY}
        - besu.ws.url=ws://${VN_GATEWAY_CONTAINER_NAME}:8081/besuws
        - besu.node.url=http://${VN_GATEWAY_CONTAINER_NAME}:8081/besu
        - besu.contract.attempts=${BESU_CONTRACT_ATTEMPS} 
        - besu.contract.sleepDuration=${BESU_CONTRACT_SLEEP_DURATION} 
        - besu.UDPN_BASIC_MEMBER_NODE_LOGIC=${BESU_UDPN_BASIC_MEMBER_NODE_LOGIC} 
        - besu.UDPN_BIZ_MEMBER_NODE_LOGIC=${BESU_UDPN_BIZ_MEMBER_NODE_LOGIC}
        - besu.UDPN_PAYMENT_TRANS_LOGIC=${BESU_UDPN_PAYMENT_TRANS_LOGIC} 
        - besu.EXCHANGE_RATE_STRATEGY=${BESU_EXCHANGE_RATE_STRATEGY} 
        - besu.UDPN_SERVICE_FEE_LOGIC=${BESU_UDPN_SERVICE_FEE_LOGIC}
        - besu.UDPN_DID_CURRENCY_ACCOUNT_MAPPING_LOGIC=${BESU_UDPN_DID_CURRENCY_ACCOUNT_MAPPING_LOGIC}
        - besu.UDPN_VOTING_STRATEGY_LOGIC=${BESU_UDPN_VOTING_STRATEGY_LOGIC}
        - besu.UDPN_VOTING_LOGIC=${BESU_UDPN_VOTING_LOGIC}
        - besu.UDPN_BIZ_ACCOUNT_BINDING_LOGIC=${BESU_UDPN_BIZ_ACCOUNT_BINDING_LOGIC}


'''

| Configuration item | Description |
| ------------------------- | ------------------------------------- |
| BESU_UDPN_BASIC_MEMBER_NODE_LOGIC | UdpnBasicMemberNodeInstance |
| BESU_UDPN_BIZ_MEMBER_NODE_LOGIC | UdpnBizMemberNodeInstance |
| BESU_UDPN_PAYMENT_TRANS_LOGIC | UdpnPaymentTransInstance |
| BESU_EXCHANGE_RATE_STRATEGY |  UdpnExchangeRateInstance |
| BESU_UDPN_SERVICE_FEE_LOGIC | UdpnServiceFeeInstance |
| BESU_UDPN_VOTING_STRATEGY_LOGIC | UdpnVotingStrategyInstance |
| BESU_UDPN_VOTING_LOGIC | UdpnVotingInstance |
| BESU_UDPN_DID_CURRENCY_ACCOUNT_MAPPING_LOGIC | UdpnDIDCurrencyAccountMappingInstance |
| BESU_UDPN_BIZ_ACCOUNT_BINDING_LOGIC | besu.UDPN_BIZ_ACCOUNT_BINDING_LOGIC |

## vn_code and tn-code

'''
        - spring.vn-code=${VN_CODE}
        - spring.tn-code=${TN_CODE}
        - besu.address=${BESU_ADDRESS_C}
        - besu.privatekey=${BESU_PRIVATEKEY_C}
        - besu.address=${BESU_ADDRESS_M}
        - besu.privatekey=${BESU_PRIVATEKEY_M}
        - besu.address=${BESU_ADDRESS_T}
        - besu.privatekey=${BESU_PRIVATEKEY_T}
'''

vn_code: Preset in the contract or obtained through other vn applications
tn-code: It is simpleTN-Code, but there is no need to set it if you use real TN interaction
BESU_ADDRESS_?: Preset in the contract or obtained through other vn applications
BESU_PRIVATEKEY_?: Preset in the contract or obtained through other vn applications

## contact us
Email: xxxx@xxxx.com
