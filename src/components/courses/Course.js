import axios from "axios";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

function Course({ course, updateCourse, id }) {

    function deleteCourse() {
        deleteContent(course.id);
    }

    const deleteContent = async (courseId) => {
        const url = `http://localhost:8080/delete/${courseId}`;
        console.log(url);
        try {
            await axios.delete(url);
            updateCourse(id);
            toast.error("Course Removed...")
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="course-wrp">
            <h3 >{course.title}</h3>
            <h5 >{course.description}</h5>
            <Button variant="outline-danger" onClick={deleteCourse}>Delete</Button>
        </div>
    )
}

export default Course;