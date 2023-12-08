const express = require('express');
const userController = require("../controllers/users.controller")
const achievementsController = require("../controllers/achievements.controller")
// Single routing
const userRouter = express.Router();
 
userRouter.get('/',userController.listUsers)
userRouter.post('/saveUser',userController.saveUser)
userRouter.post('/addExperience', userController.addExp)
userRouter.get('/getUserExperienceInfo',userController.getUserExpInfo)

userRouter.post('/newAchievement', achievementsController.addAchievement)
userRouter.get('/listAllAchievements',achievementsController.listAchievements)
userRouter.get('/getAchievement', achievementsController.getAchievement)

userRouter.post('/userCompletesUnit', userController.userCompletesUnit)
userRouter.post('/userCompletesQuiz', userController.userCompletesQuiz)

userRouter.post('/giveAchievement')

module.exports = userRouter;