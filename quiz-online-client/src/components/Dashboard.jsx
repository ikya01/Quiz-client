import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css'





const Dashboard = () => {
 

  
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
        <Link to="/quiz-stepper" className="nav-link" style={{ color: 'black',fontSize: '16px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-inbox"
                                viewBox="0 0 24 24">
                                <path d="M22 12h-6l-2 3h-4l-2-3H2" />
                                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                            </svg>
                            <span>Take a Quiz</span>
                        </Link>
        </li>
        <li class="item">
        <Link to="/course-video" className="nav-link" style={{ color: 'black', fontSize: '16px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="feather feather-star" style={{ fontSize: '24px' }}>
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span>Courses</span>
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
                            <span>Certificates</span>
        </Link>
        </li>
     
    
      
      </ul>
 
    </div>
  </div>
  <div class="page-content">
  <div class="header">My Dashboard</div>
    <div class="tasks-wrapper">
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-1" checked/>
        <label for="item-1">
          <span class="label-text">Watch Course</span>
        </label>
        <span class="tag approved">Approved</span>
      </div>
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-2" checked/>
        <label for="item-2">
          <span class="label-text">Take a quiz </span>
        </label>
        <span class="tag progress">In Progress</span>
      </div>
      
    

      <div class="header upcoming">Upcoming Tasks</div>
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-7"/>
        <label for="item-7">
          <span class="label-text">Improve My skills</span>
        </label>
        <span class="tag waiting">Waiting</span>
      </div>
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-8"/>
        <label for="item-8">
          <span class="label-text">Have a better Score</span>
        </label>
        <span class="tag waiting">Waiting</span>
      </div>
     

    </div>
  </div>
  <div class="right-bar">
    <div class="top-part">
  
   
    </div>
    
    
 
  </div>
</div>
    );
}

export default Dashboard;
