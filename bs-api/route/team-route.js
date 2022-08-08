const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer");
const teamController = require("../controller/team-controller");

const memberUpload = [
  {
    name: "image",
    maxCount: 1,
  },
];

//Routes
router.post(
  "/",
  auth,
  multer.fields(memberUpload),
  teamController.createMember
);
router.get("/", teamController.getAllMembers);
router.put("/", auth, multer.fields(memberUpload), teamController.updateMember);
router.delete("/:memberId", auth, teamController.deleteMember);

module.exports = router;
