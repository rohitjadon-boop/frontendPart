import React, { useEffect, useState } from "react";
import Course from "../courses/Course";
import axios from "axios";

function AllCourses() {
    
    let[courses, setCourses]=useState([]);
    
    useEffect(() => {
        document.title="All Courses || Pepcoding";
        fetchData();
    },[])

    function updateCourse(courseId) {
        console.log("Hello");
        setCourses((olddata)=> {
            return olddata.filter((ele, id) => {
                return id!==courseId;
            })
        })
    }

    let fetchData=async () => {
        try{
            let fetchedData= await axios.get("http://localhost:8080/view-courses");
            console.log(fetchedData);
            setCourses(fetchedData.data);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
     <div className="allcourses-wrp">
          
     {
     courses.length>0 && courses.map((item, id) => {
         return <Course course={item}
          updateCourse={updateCourse} 
          id={id}
          />
     })
     }
     </div>
    )
}

export default AllCourses;
