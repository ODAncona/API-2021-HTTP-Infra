echo "Importation"
mongoimport --db bs --collection menus --drop --file menus.json --jsonArray
mongoimport --db bs --collection dailymenus --drop --file dailymenus.json --jsonArray
mongoimport --db bs --collection promotions --drop --file promotions.json --jsonArray
mongoimport --db bs --collection reviews --drop --file reviews.json --jsonArray
mongoimport --db bs --collection users --drop --file users.json --jsonArray
echo "Importation terminée"
