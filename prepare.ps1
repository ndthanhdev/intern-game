# prepare web
echo 'Prepare web'
cd ./web
npm install
bower install
cd ..

#prepare js
echo 'Prepare js'
cd ./js
npm install
cd ..

#prepare db
echo 'Prepare db'
cd ./db
npm install
cd ..