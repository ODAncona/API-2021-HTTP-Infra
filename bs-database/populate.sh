echo "Importation"
mongoimport --db bs --collection menus --drop --file data/menus --jsonArray
mongoimport --db bs --collection dailymenus --drop --file data/dailymenus --jsonArray
mongoimport --db bs --collection promotions --drop --file data/promotions --jsonArray
mongoimport --db bs --collection reviews --drop --file data/reviews --jsonArray
mongoimport --db bs --collection users --drop --file data/users --jsonArray
echo "Importation terminée"
