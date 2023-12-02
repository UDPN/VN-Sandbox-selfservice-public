#! /bin/bash
rabbitmqadmin -u admin -p 123456 declare exchange --vhost=my_vhost name=exchange.cloudgateay type=fanout
rabbitmqadmin -u admin -p 123456 declare exchange --vhost=my_vhost name=bsn.fisco.event type=direct
rabbitmqadmin -u admin -p 123456 declare queue    --vhost=my_vhost name=queue.user.packages durable=true
rabbitmqadmin -u admin -p 123456 declare binding  --vhost=my_vhost source=exchange.cloudgateay destination=queue.user.packages
