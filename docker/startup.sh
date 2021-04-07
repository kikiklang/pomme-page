#!/bin/bash

npm run build

cp dist/* /var/www/html/

if [ $IPRANGE ];then
	echo "Configured access for ${IPRANGE} in /etc/apache2/conf-enabled/restrict_access.conf:";
	echo "<Directory /var/www/html/>" | tee /etc/apache2/conf-enabled/restrict_access.conf;
	echo "  Require ip ${IPRANGE}" | tee -a /etc/apache2/conf-enabled/restrict_access.conf;
	echo "</Directory>" | tee -a /etc/apache2/conf-enabled/restrict_access.conf;
fi

apachectl -D FOREGROUND
