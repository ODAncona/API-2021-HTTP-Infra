const Meal = require("../data-schematic/meal-schematic");
const Menu = require("../data-schematic/menu-schematic");

exports.createMenu = (req, res) => {
  let payload = {
    ...req.body,
    active: true,
  };

  // If req contains file
  if (req.file) {
    payload.pdf = req.protocol + "://" + req.get("host") + "/" + req.file.path;
  }

  // Save to database
  Menu.findOneAndUpdate(
    {
      active: true,
    },
    [
      {
        $set: {
          active: {
            $eq: [false, "$active"],
          },
        },
      },
    ]
  )
    .then(() => {
      let menu = new Menu({
        ...payload,
      })
        .save()
        .then(() => res.status(201).json("Success"))
        .catch((error) => res.status(500).json("Failure: " + error));
    })
    .catch((error) => res.status(500).json("Failure: " + error));
};

exports.getMenu = (req, res) => {
  Menu.find({
    active: 1,
  })
    .then((menus) => res.status(200).json(menus))
    .catch((error) => res.status(500).json("Failure: " + error));
};

exports.getAllMenus = (req, res) => {
  Menu.find()
    .then((menus) => res.status(200).json(menus))
    .catch((error) => res.status(500).json("Failure: " + error));
};

exports.updateMenu = (req, res) => {
  let payload = {
    ...req.body,
  };

  // If req contains files
  if (req.file) {
    payload.image =
      req.protocol + "://" + req.get("host") + "/" + req.file.path;
  }
  // Update database
  Menu.findByIdAndUpdate(payload._id, payload)
    .then(() => res.status(200).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error));
};

exports.deleteMenu = (req, res) => {
  Menu.findByIdAndRemove(req.params.menuId)
    .then(() => res.status(204).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error));
};

exports.createMeal = (req, res) => {
  let payload = {
    ...req.body,
  };

  // If req contains files
  if (req.file) {
    payload.image =
      req.protocol + "://" + req.get("host") + "/" + req.file.path;
  }

  // Save to database
  let meal = new Meal({
    ...payload,
  })
    .save()
    .then(() => res.status(201).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error));
};

exports.getAllMeals = (req, res) => {
  Meal.find()
    .then((meal) => res.status(200).json(meal))
    .catch((error) => res.status(500).json("Failure: " + error));
};

exports.updateMeal = (req, res) => {
  let payload = {
    ...req.body,
  };

  // If req contains files
  if (req.file) {
    payload.image =
      req.protocol + "://" + req.get("host") + "/" + req.file.path;
  }
  // Update database
  Meal.findByIdAndUpdate(payload._id, payload)
    .then(() => res.status(200).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error));
};

exports.deleteMeal = (req, res) => {
  Meal.findByIdAndRemove(req.params.mealId)
    .then(() => res.status(204).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error));
};
