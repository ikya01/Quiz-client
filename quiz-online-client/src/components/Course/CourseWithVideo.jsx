import React, { useState, useEffect } from 'react';
import { getAllCourses, updateCourse, deleteCourse } from '../../../utils/CourseService';
import YouTube from 'react-youtube';
import { Link, useNavigate } from "react-router-dom";

import { FaPlus } from "react-icons/fa";

const CoursePage = () => {
    const [courses, setCourses] = useState([]);
    const [editedCourse, setEditedCourse] = useState(null);
  
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const coursesData = await getAllCourses();
          setCourses(coursesData);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
  
      fetchCourses();
    }, []);
  
    const handleEdit = (course) => {
      setEditedCourse(course);
    };
  
    const handleUpdate = async (updatedCourse) => {
      try {
        await updateCourse(updatedCourse.id, updatedCourse);
        // Mise à jour de la liste des cours après modification
        const updatedCourses = courses.map(course =>
          course.id === updatedCourse.id ? updatedCourse : course
        );
        setCourses(updatedCourses);
        setEditedCourse(null);
      } catch (error) {
        console.error('Error updating course:', error);
      }
    };
  
    const handleDelete = async (id) => {
      try {
        await deleteCourse(id);
        // Mise à jour de la liste des cours après suppression
        const updatedCourses = courses.filter(course => course.id !== id);
        setCourses(updatedCourses);
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    };

   
  
    return (
      <div className="container">
      <h1>Liste des Cours</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Description</th>
            <th scope="col">Vidéo</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>
                {editedCourse && editedCourse.id === course.id ? (
                  <input
                    type="text"
                    value={editedCourse.title}
                    onChange={(e) => setEditedCourse({ ...editedCourse, title: e.target.value })}
                  />
                ) : (
                  <div>{course.title}</div>
                )}
              </td>
              <td>
                {editedCourse && editedCourse.id === course.id ? (
                  <input
                    type="text"
                    value={editedCourse.description}
                    onChange={(e) => setEditedCourse({ ...editedCourse, description: e.target.value })}
                  />
                ) : (
                  <div>{course.description}</div>
                )}
              </td>
              <td>
                {editedCourse && editedCourse.id === course.id ? (
                  <input
                    type="text"
                    value={editedCourse.youtubeVideoUrl}
                    onChange={(e) => setEditedCourse({ ...editedCourse, youtubeVideoUrl: e.target.value })}
                  />
                ) : (
                  <YouTube videoId={getYouTubeVideoId(course.youtubeVideoUrl)}  opts={{ width: '100%', height: '100%' }} />
                )}
              </td>
              <td>
              {editedCourse && editedCourse.id === course.id ? (
                  <div>
                    <button onClick={() => handleUpdate(editedCourse)} className="btn btn-success mr-2">Sauvegarder</button>
                    <button onClick={() => setEditedCourse(null)} className="btn btn-danger">Annuler</button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleEdit(course)} className="btn btn-primary mr-2"style={{ marginBottom: '20px' }}>Modifier</button>
                    <button onClick={() => handleDelete(course.id)} className="btn btn-danger">Supprimer</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
      <div className="d-flex justify-content-end">
    <Link to={"/admin"} className="btn btn-secondary">
      <FaPlus /> Go back
    </Link>
  </div>
      
    </div>
    );
  };
  
  // Fonction utilitaire pour extraire l'identifiant de la vidéo YouTube à partir de l'URL
  const getYouTubeVideoId = (url) => {
    // L'URL YouTube peut être sous divers formats
    // Nous essayons de trouver l'identifiant de la vidéo dans l'URL
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : '';
  };
  
  export default CoursePage;
