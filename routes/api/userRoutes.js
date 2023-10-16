const router = require('express').Router();
const {
 getUser,
 createUser
} = require('../../controllers/userController');
"localhost:3001/api/users"
// /api/students
router.route('/').get(getUser).post(createUser);

// // /api/students/:studentId
// router.route('/:studentId').get(getSingleStudent).delete(deleteStudent);

// // /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// // /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
