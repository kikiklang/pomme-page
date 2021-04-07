#!/bin/bash

npm run build

cp dist/* /usr/local/apache2/htdocs/

if [ $IPRANGE ];then
	echo "Configured access for ${IPRANGE} in /usr/local/apache2/conf/restrict_access.conf";
	echo "<Directory /var/www/html/>" | tee /usr/local/apache2/conf/restrict_access.conf;
	echo "  Require ip ${IPRANGE}" | tee -a /usr/local/apache2/conf/restrict_access.conf;
	echo "</Directory>" | tee -a /usr/local/apache2/conf/restrict_access.conf;
fi

apachectl -D FOREGROUND
