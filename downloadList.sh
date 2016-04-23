#!/bin/bash

gsjson 1gnqB9fxyMwSby2Cd1x4JsLYnPWIRsKukTOd40b2e0Is www/data/fillets.json
echo "var fillets = " > www/data/fillets.js.tmp
cat www/data/fillets.json >> www/data/fillets.js.tmp
mv www/data/fillets.js.tmp www/data/fillets.js