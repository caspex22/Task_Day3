const express = require('express');

const app = express();
const port = 3000;

let Course = [
    {id:1 ,publication:2011 ,name: "Introduction to Data Science", author: "John D. Kelleher", pages: 10 },
    {id:2 ,publication:2013 ,name: "Machine Learning", author: "Andrew Ng", pages: 7 },
    {id:3 ,publication:2010 ,name: "Data Analysis and Visualization with Python", author: "Jose Portilla", pages: 15 },
    {id:4 ,publication:2011 ,name: "Deep Learning Specialization", author: "Andrew Ng", pages: 23 },
    {id:5 ,publication:2010 ,name: "SQL for Data Science", author: "DataCamp", pages: 55 },
    {id:6 ,publication:2011 ,name: "Applied Data Science with Python", author: "University of Michigan (Coursera)", pages: 10 },
    {id:7 ,publication:2007 ,name: "Data Science and Machine Learning Bootcamp with R", author: "Udemy", pages: 32 },
    {id:8 ,publication:2014 ,name: "Big Data Fundamentals", author: "UC San Diego (edX)", pages: 22 },
    {id:9 ,publication:2004 ,name: "Data Engineering on Google Cloud Platform", author: "Google Cloud Training", pages: 45 },
    {id:10 ,publication:2009 ,name: "Data Science for Business", author: "Foster Provost and Tom Fawcett", pages: 51 }
]

//param URL
app.get('/search-course/:publication-:author', (req, res) => {
    const publication = req.params.publication;
    const author = req.params.author;
    res.json(Course), {
        publication : publication,
        author : author
    };
});

//param Query
app.get('/search-course/', (req, res) => {
    const id = req.query.id;
    const publication = req.query.publication;
    const name = req.query.name;
    const author = req.query.author;
    const pages = req.query.pages;
    res.json(Course.filter(CheckCourse));

    function CheckCourse(course) {
        let match = true;
        
        if (id && course.id !== id) {
            match = false;
        }
        if (publication && course.publication !== publication) {
            match = false;
        }        
        if (name && !course.name.includes(name)) {
            match = false;
        }        
        if (author && course.author !== author) {
            match = false;
        }        
        if (pages && course.pages < pages) {
            match = false;
        }
        return match;
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    });