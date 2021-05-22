#!/bin/bash

npm run build

cp dist/* /usr/local/apache2/htdocs/

IPRANGE=${IPRANGE:-0.0.0.0}

apachectl -D FOREGROUND
