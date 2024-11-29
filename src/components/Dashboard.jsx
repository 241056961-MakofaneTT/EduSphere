import React, { useState } from 'react';
import {
  FaHome,
  FaServicestack,
  FaUniversity,
  FaComments,
  FaBook,
  FaSignOutAlt,
  FaBell,
  FaSearch
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/dashboard.module.css';
import Services from './Services';
// Import static images
import event1 from '../assets/events/event1.jpg';
import event2 from '../assets/events/event2.jpg';
import event3 from '../assets/events/event3.jpg';
import event4 from '../assets/events/event4.jpg';

const Sidebar = ({ isCollapsed, toggleSidebar, onLogout, onMenuClick }) => {
  const menuItems = [
    { icon: FaHome, label: 'Dashboard' },
    { icon: FaServicestack, label: 'Services' },
    { icon: FaUniversity, label: 'Faculties' },
    { icon: FaComments, label: 'Forum' },
    { icon: FaBook, label: 'Resources' }
  ];

  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.sidebarGlow}></div>
      <nav>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={styles.menuItem}
            onClick={() => onMenuClick(item.label)}  // This updates main content based on the menu item clicked
          >
            <item.icon color="#423a8e" size={20} />
            {!isCollapsed && <span className={styles.menuText}>{item.label}</span>}
          </div>
        ))}
      </nav>
      <div className={`${styles.logoutSection} ${styles.bottom}`} onClick={onLogout}>
        <FaSignOutAlt color="#ab2e3c" size={20} />
        {!isCollapsed && <span className={styles.menuText}>Logout</span>}
      </div>
    </div>
  );
};

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.searchContainer}>
        <FaSearch color="#423a8e" />
        <input
          type="text"
          placeholder="Search content..."
          className={styles.searchInput}
        />
      </div>
      <div className={styles.userInfo}>
        <div className={styles.notificationBadge}>
          <FaBell color="#0dcaf0" />
          <span className={styles.badge}>3</span>
        </div>
        <img
          src="/api/placeholder/40/40"
          alt=""
          className={styles.profilePicture}
        />
        <span className={styles.username}>Zain Khan</span>
      </div>
    </div>
  );
};

// Dynamically require images from a local folder
const eventImages = require.context('../assets/events', true);

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Dashboard'); // Track selected menu item
  const navigate = useNavigate();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const handleLogout = () => {
    // Perform any additional logout tasks (like clearing session, etc.)
    navigate('/'); // Redirect to login page
  };

  const handleMenuClick = (label) => {
    setSelectedMenu(label);  // Update selected menu to show the corresponding content
  };

  const renderMainContent = () => {
    switch (selectedMenu) {
      case 'Services':
        return <Services />;
      case 'Dashboard':
        return (
          <div className={styles.contentGrid}>
            {/* First Row: Left and Right Segments */}
            <div className={styles.row}>
              <div className={styles.leftSegment}>
                <h2 className={styles.segmentTitle}>EduSphere Members</h2>
                <div className={styles.analyticsContent}>
                  <div className={styles.dataPoint}>
                    <span className={styles.dataLabel}>Total Users:</span>
                    <span className={styles.dataValue}>1,234,567</span>
                  </div>
                </div>
              </div>
              <div className={styles.rightSegment}>
                <h2 className={styles.segmentTitle}>User Feedback</h2>
                <div className={styles.quickAccessGrid}>
                  <div className={styles.commentsSection}>
                    <div className={styles.commentCard}>
                      <p>"The resources provided have been a lifesaver for my family!"</p>
                      <span>- Alex J.</span>
                    </div>
                    <div className={styles.commentCard}>
                      <p>"Finally found tools that truly make education accessible."</p>
                      <span>- Sam K.</span>
                    </div>
                    <div className={styles.commentCard}>
                      <p>"Exceptional support and guidance for parents of children with disabilities."</p>
                      <span>- Maria P.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row: Upcoming Events and Image Boxes */}
            <div className={styles.row}>
              <div className={styles.upcomingEvents}>
                <h3 className={styles.eventsTitle}>Upcoming Events</h3>
                <div className={styles.eventList}>
                  <div className={styles.eventItem}>
                    <span className={styles.eventDate}>12 Dec: </span>
                    <span className={styles.eventName}>Fundraiser</span>
                  </div>
                  <div className={styles.eventItem}>
                    <span className={styles.eventDate}>15 Dec: </span>
                    <span className={styles.eventName}>Adaptive Sports</span>
                  </div>
                </div>
              </div>
              <div className={styles.imageBoxes}>
                {[event1, event2, event3, event4].map((img, index) => (
                  <div key={index} className={styles.imageBox}>
                    <img src={img} alt={`Event ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <div className={styles.contentGrid}>
              <div className={styles.leftSegment}>
                <h2 className={styles.segmentTitle}>EduSphere Members</h2>
                <div className={styles.analyticsContent}>
                  <div className={styles.dataPoint}>
                    <span className={styles.dataLabel}>Total Users: </span>
                    <span className={styles.dataValue}>1,234,567</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar
        isCollapsed={isCollapsed}
        toggleSidebar={toggleSidebar}
        onLogout={handleLogout}
        onMenuClick={handleMenuClick} // Pass the function to Sidebar
      />
      <div className={`${styles.mainContent} ${isCollapsed ? styles.expanded : ''}`}>
        <TopBar />
        {renderMainContent()} {/* Dynamically render the content based on selected menu */}
      </div>
    </div>
  );
};

export default Dashboard;
