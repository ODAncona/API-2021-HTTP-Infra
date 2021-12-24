echo "Importation"
mongoimport --db bs --collection users --drop --file data/users --jsonArray
mongoimport --db bs --collection menus --drop --file data/menus --jsonArray
echo "Importation terminée"
