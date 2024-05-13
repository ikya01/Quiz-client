import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css'





const Admin = () => {
 

  
    return (
      
     
<div class="task-manager">
  <div class="left-bar">
    <div class="upper-part">
      <div class="actions">
        <div class="circle"></div>
        <div class="circle-2"></div>
      </div>
    </div>
    <div class="left-content">
      <ul class="action-list">
        <li class="item">
        <Link to="/create-quiz" className="nav-link" style={{ color: 'black',fontSize: '16px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-inbox"
                                viewBox="0 0 24 24">
                                <path d="M22 12h-6l-2 3h-4l-2-3H2" />
                                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                            </svg>
                            <span>Create a quiz</span>
                        </Link>
        </li>
        <li class="item">
        <Link to="/all-quizzes" className="nav-link" style={{ color: 'black', fontSize: '16px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="feather feather-star" style={{ fontSize: '24px' }}>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span>All Quizzes</span>
            </Link>
        </li>
        <li class="item">
        <Link to="/course-video" className="nav-link" style={{ color: 'black', fontSize: '16px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-calendar"
                                viewBox="0 0 24 24" style={{ fontSize: '24px' }}>
                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                <path d="M16 2v4M8 2v4m-5 4h18" />
                            </svg>
                            <span>All Courses</span>
        </Link>
        </li>
        <li class="item">
          <Link to="/course-form" className="nav-link" style={{ color: 'black', fontSize: '16px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-hash">
            <line x1="4" y1="9" x2="20" y2="9" />
            <line x1="4" y1="15" x2="20" y2="15" />
            <line x1="10" y1="3" x2="8" y2="21" />
            <line x1="16" y1="3" x2="14" y2="21" /></svg>
          <span>Add Course</span></Link>
        </li>
        <li class="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-users">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          <span>Meetings</span>
        </li>
      
      </ul>
 
    </div>
  </div>
  <div class="page-content">
  <div class="header">Admin Dashboard</div>
    <div class="tasks-wrapper">
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-1" checked/>
        <label for="item-1">
          <span class="label-text">Add a new Question</span>
        </label>
        <span class="tag approved">Approved</span>
      </div>
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-2" checked/>
        <label for="item-2">
          <span class="label-text">Update Courses</span>
        </label>
        <span class="tag progress">In Progress</span>
      </div>
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-3"/>
        <label for="item-3">
          <span class="label-text">Check Results</span>
        </label>
        <span class="tag review">In Review</span>
      </div>
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-4"/>
        <label for="item-4">
          <span class="label-text">Update Quizzes</span>
        </label>
        <span class="tag progress">In Progress</span>
      </div>

      <div class="header upcoming">Upcoming Tasks</div>
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-7"/>
        <label for="item-7">
          <span class="label-text">Add Results on Admin Dashboard</span>
        </label>
        <span class="tag waiting">Waiting</span>
      </div>
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-8"/>
        <label for="item-8">
          <span class="label-text">Add Notifications</span>
        </label>
        <span class="tag waiting">Waiting</span>
      </div>
     

    </div>
  </div>
  <div class="right-bar">
    <div class="top-part">
  
   
    </div>
    <div class="header">Schedule</div>
    <div class="right-content">
      <div class="task-box yellow">
        <div class="description-task">
          <div class="time">08:00 - 09:00 AM</div>
          <div class="task-name">Quiz Review</div>
        </div>
        <div class="more-button"></div>
        <div class="members">
         
        </div>
      </div>
      <div class="task-box blue">
        <div class="description-task">
          <div class="time">10:00 - 11:00 AM</div>
          <div class="task-name">Course Review</div>
        </div>
        <div class="more-button"></div>
        <div class="members">
        
        </div>
      </div>
      <div class="task-box red">
        <div class="description-task">
          <div class="time">01:00 - 02:00 PM</div>
          <div class="task-name">Users Review</div>
        </div>
        <div class="more-button"></div>
        <div class="members">
      
        </div>
      </div>
      <div class="task-box green">
        <div class="description-task">
          <div class="time">03:00 - 04:00 PM</div>
          <div class="task-name">Release Event</div>
        </div>
        <div class="more-button"></div>
        <div class="members">
       
        </div>
      </div>
      <div class="task-box blue">
        <div class="description-task">
          <div class="time">08:00 - 09:00 PM</div>
          <div class="task-name">Release Event</div>
        </div>
        <div class="more-button"></div>
        <div class="members">
 
        </div>
      </div>
      <div class="task-box yellow">
        <div class="description-task">
          <div class="time">11:00 - 12:00 PM</div>
          <div class="task-name">Add</div>
        </div>
        <div class="more-button"></div>
        <div class="members">
     
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default Admin;
