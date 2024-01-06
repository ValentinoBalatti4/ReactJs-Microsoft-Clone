import React, {useState} from 'react'
import "./Announcement.css"

function Announcement() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  }

  return isVisible ? (
    <div className='announcement-container'>
        <a>Summer sale, 15% disccount! Buy now</a>
        <span onClick={handleClose} class="material-symbols-outlined">close</span>
        
    </div>
  ) : null;
}

export default Announcement