const router = require('express').Router();
const {
  getThoughts,
  createThought
} = require('../../controllers/thoughtController.js');
"localhost:3001/api/thoughts"
// /api/courses
router.route('/').get(getThoughts).post(createThought);

// // /api/courses/:thoughtId
// router
//   .route('/:thoughtId')
//   .get(getSingleCourse)
//   .put(updateCourse)
//   .delete(deleteCourse);

module.exports = router;
