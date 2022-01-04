echo "Importation"
mongoimport --db bs --collection menus --drop --file menus --jsonArray
mongoimport --db bs --collection dailymenus --drop --file dailymenus --jsonArray
mongoimport --db bs --collection promotions --drop --file promotions --jsonArray
mongoimport --db bs --collection reviews --drop --file reviews --jsonArray
mongoimport --db bs --collection users --drop --file users --jsonArray
echo "Importation terminée"
