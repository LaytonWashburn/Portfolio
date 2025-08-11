import React from 'react';
import './VideoDemo.css';

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

export const VideoDemo: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close video">&times;</button>
        <video controls autoPlay className="modal-video" src={videoUrl} />
      </div>
    </div>
  );
};
