const Member = require("../data-schematic/member-schematic");

exports.createMember = (req, res) => {
  let payload = {
    ...req.body,
    active: true,
  };

  // If req contains file
  if (req.files) {
    if (req.files["image"]) {
      payload.image =
        req.protocol +
        "://" +
        req.get("host") +
        "/" +
        req.files["image"][0].path;
    }
  }

  // Save to database
  Member.findOneAndUpdate(
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
      let member = new Member({
        ...payload,
      })
        .save()
        .then(() => res.status(201).json("Success"))
        .catch((error) => res.status(500).json("Failure: " + error));
    })
    .catch((error) => res.status(500).json("Failure: " + error));
};

exports.getAllActiveMembers = (req, res) => {
  Member.find({
    active: 1,
  })
    .then((members) => res.status(200).json(members))
    .catch((error) => res.status(500).json("Failure: " + error));
};

exports.getAllMembers = (req, res) => {
  Member.find()
    .then((members) => res.status(200).json(members))
    .catch((error) => res.status(500).json("Failure: " + error));
};

exports.updateMember = (req, res) => {
  let payload = {
    ...req.body,
  };

  // If req contains files
  if (req.files) {
    if (req.files["image"]) {
      //payload.image = req.protocol + "://" + req.get("host") + "/" + req.files["image"][0].path;
      payload.image = "https://" + req.get("host") + "/" + req.files["image"][0].path;
    }
  }

  // Update database
  Member.findByIdAndUpdate(payload._id, payload)
    .then(() => res.status(200).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error));
};

exports.deleteMember = (req, res) => {
  Member.findByIdAndRemove(req.params.memberId)
    .then(() => res.status(204).json("Success"))
    .catch((error) => res.status(500).json("Failure: " + error));
};
