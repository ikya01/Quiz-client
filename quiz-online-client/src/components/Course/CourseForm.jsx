import React, { useState } from 'react';
import { createCourse, updateCourse } from '../../../utils/CourseService';
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const CourseForm = ({ onCreateOrUpdate }) => {
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        youtubeVideoUrl: '',
        topics: []
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setCourseData({ ...courseData, [name]: value });
    };

    const handleAddTopic = () => {
        const topic = prompt("Enter a topic");
        if (topic) {
            setCourseData({ ...courseData, topics: [...courseData.topics, topic] });
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            if (courseData.id) {
                await updateCourse(courseData.id, courseData);
            } else {
                await createCourse(courseData);
            }
            setCourseData({
                title: '',
                description: '',
                youtubeVideoUrl: '',
                topics: []
            });
        } catch (error) {
            console.error('Error creating course:', error);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h2>Add Course</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Title"
                                        value={courseData.title}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="description"
                                        placeholder="Description"
                                        value={courseData.description}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="youtubeVideoUrl"
                                        placeholder="YouTube Video URL"
                                        value={courseData.youtubeVideoUrl}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                {/* Champ "topics" */}
                                <div className="mb-3">
                                    <h3>Topics</h3>
                                    <ul>
                                        {courseData.topics.map((topic, index) => (
                                            <li key={index}>{topic}</li>
                                        ))}
                                    </ul>
                                    <button type="button" onClick={handleAddTopic} className="btn btn-outline-primary">Add Topic</button>
                                </div>
                                <button type="submit" className="btn btn-success">Add Course</button>
                            </form>
                        </div>
                        
                    </div>
                    <div className="d-flex justify-content-end" >
    <Link to={"/admin"} className="btn btn-secondary" >
      <FaPlus /> Go back
    </Link>
  </div>
                </div>
  
            </div>
        </div>
    );
};

export default CourseForm;
