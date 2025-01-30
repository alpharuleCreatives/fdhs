import React from "react";
import styles from "./EnrollNowPage.module.scss";

const EnrollNowPage = () => {
  const videos = [
    "https://example.com/fdhs-video1.mp4",
    "https://example.com/fdhs-video2.mp4",
    "https://example.com/fdhs-video3.mp4",
    "https://example.com/fdhs-video4.mp4",
    "https://example.com/fdhs-video5.mp4",
    "https://example.com/fdhs-video6.mp4",
  ];

  return (
    <section className={styles.enrollNowSection}>
      <div className={styles.videoContainer}>
        <div className={styles.videoFrameList}>
          {videos.map((video, index) => (
            <div key={index} className={styles.videoFrame}>
              <video controls muted loop>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrollNowPage;
