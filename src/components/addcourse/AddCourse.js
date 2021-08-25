import "../../index.css";
import axios from "axios";
import Button from "../button/Button";
import Input from "../input/Input";
import React from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";

function AddCourse() {

    useEffect(() => {
        document.title = "Add Course || Pepcoding";
    }, [])

    let [courseDetail, setCourseDetail] = useState({
        name: "",
        description: ""
    });

    function onChange(e) {
        let value = e.target.value;
        let name = e.target.name;

        setCourseDetail((olddata) => {
             if (name === "name") {
                return {
                    ...olddata,
                    name: value
                }
            }
            else {
                return {
                    ...olddata,
                    description: value
                }
            }
        })
    }

    function onClick() {
        addCourse();
        let initialState= {name:"", description:""};
        setCourseDetail(initialState);
    }

    let addCourse = async () => {
        try {
            let postData = await axios.post("http://localhost:8080/course", {...courseDetail, id:null});
            console.log(postData);
            toast.success("Congratulations Course Added Successfully!!", {
                position: "bottom-center"
            });
        }
        catch (err) {
            console.log(err);
            toast.error("Something Went Wrong!!");
        }
    };

    return (
        <div className="addcourse-wrp">
            <h3>Enter the Course Details</h3>

            <Input type="text"
                placeHolder="Enter Course"
                onChange={onChange}
                name="name"
                value={courseDetail.name}
            />
            <br></br>

            <textarea placeHolder="Enter Description"
                className="text-area" onChange={onChange}
                name="description" value={courseDetail.description}></textarea>
            <br></br>

            <Button title="Add Course"
                onClick={onClick}
            />
        </div>
    )
}

export default AddCourse;