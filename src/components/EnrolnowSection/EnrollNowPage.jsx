import React from "react";
import styles from "./EnrollNowPage.module.scss";

const EnrollNowPage = () => {
  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
  ];

  return (
    <section className={styles.enrollNowSection}>
      {/* Infinite Scrolling Video Frame List */}
      <div className={styles.videoFrameList}>
        {videos.map((video, index) => (
          <div key={index} className={styles.videoFrame}>
            <video controls muted loop>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}

        {/* Duplicate videos for seamless infinite scrolling */}
        {videos.map((video, index) => (
          <div key={`duplicate-${index}`} className={styles.videoFrame}>
            <video controls muted loop>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnrollNowPage;
