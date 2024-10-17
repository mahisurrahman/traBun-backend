const {express} = require ("../../app");
const userControllers = require("../../controllers/userControllers/userControllers");
const router = express.Router();


router.post("/signup", userControllers.createUserController);
router.post("/login", userControllers.loginUserController);

module.exports = router;