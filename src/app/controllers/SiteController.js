const Course = require('../models/Course');



class SiteController {
    //[Get] /news
    index(req, res) {
        Course.find({})
            .then(course=>{
                res.json(course);
            })
            .catch(error=>{
                res.status(400).json({ error: 'message' });
            })
        // res.render('home');
    }
    //[Get] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
