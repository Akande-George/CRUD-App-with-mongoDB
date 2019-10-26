const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CourseModel = mongoose.model('Course');

router.get('/add', (req, res)=> {
    res.render('add-course')
})

router.post('/add', (req, res)=> {


    console.log(req.body);

    var course = new CourseModel();
    course.courseName = req.body.courseName;
    course.courseId = req.body.courseDuration;
    course.courseFees = req.body.courseFees;
    course.courseId = Math.ceil(Math.random() * 100000);
    course.save((err, doc) => {
        if(!err) {
            res.redirect('/course/list');
        } else {
            res.send('Error Occured');
        }
    })
    
})

router.get('/list', (req, res) => {

    //setting

    // var course = new CourseModel();
    // course.courseName = 'NodeJS';
    // course.courseId = '2';
    // course.save();


    CourseModel.find((err, docs) => {
        if(!err) {
            console.log(docs);
            res.render('list', { data : docs })
        } else {
            res.send('Error');
        }
    });
    
});

module.exports = router;