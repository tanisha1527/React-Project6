import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import megan from '../../assets/megan.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
       <video src={video1} controls autoPlay muted></video>
       <h3>Best youtube channel to learn coding</h3>
       <div className='play-video-info'>
         <p>1432 views &bull; 3 days ago</p>
         <div>
           <span><img src={like} alt="" />215</span>
           <span><img src={dislike} alt="" />0</span>
           <span><img src={share} alt="" />215</span>
           <span><img src={save} alt="" />215</span>
         </div>
       </div>
       <hr/>
       <div className="publisher">
         <img src={megan} alt="" />
         <div>
           <p>BroCode</p>
           <span>1M Subscribers</span>
         </div>
         <button>Subscribe</button>
       </div>
       <div className="video-desc">
         <p>Channel that makes learning Easy</p>
         <p>Subscribe BroCode to watch more tutorials on coding</p>
         <hr />
         <h4>150 comments</h4>
         <div className='comment'>
           <img src={user_profile} alt="" />
           <div>
             <h3>Jack Methew <span>1 day ago</span></h3>
             <p>I have learnt so much from your tutorials.It's amazing, Keep going! </p>
             <div className='comment-action'>
               <img src={like} alt="" />
               <span>443</span>
               <img src={dislike} alt="" />
             </div>
           </div>
         </div>
         <div className='comment'>
           <img src={user_profile} alt="" />
           <div>
             <h3>Jack Methew <span>1 day ago</span></h3>
             <p>I have learnt so much from your tutorials.It's amazing, Keep going! </p>
             <div className='comment-action'>
               <img src={like} alt="" />
               <span>443</span>
               <img src={dislike} alt="" />
             </div>
           </div>
         </div>
         <div className='comment'>
           <img src={user_profile} alt="" />
           <div>
             <h3>Jack Methew <span>1 day ago</span></h3>
             <p>I have learnt so much from your tutorials.It's amazing, Keep going! </p>
             <div className='comment-action'>
               <img src={like} alt="" />
               <span>443</span>
               <img src={dislike} alt="" />
             </div>
           </div>
         </div>
         <div className='comment'>
           <img src={user_profile} alt="" />
           <div>
             <h3>Jack Methew <span>1 day ago</span></h3>
             <p>I have learnt so much from your tutorials.It's amazing, Keep going! </p>
             <div className='comment-action'>
               <img src={like} alt="" />
               <span>443</span>
               <img src={dislike} alt="" />
             </div>
           </div>
         </div>
         <div className='comment'>
           <img src={user_profile} alt="" />
           <div>
             <h3>Jack Methew <span>1 day ago</span></h3>
             <p>I have learnt so much from your tutorials.It's amazing, Keep going! </p>
             <div className='comment-action'>
               <img src={like} alt="" />
               <span>443</span>
               <img src={dislike} alt="" />
             </div>
           </div>
         </div>
         <div className='comment'>
           <img src={user_profile} alt="" />
           <div>
             <h3>Jack Methew <span>1 day ago</span></h3>
             <p>I have learnt so much from your tutorials.It's amazing, Keep going! </p>
             <div className='comment-action'>
               <img src={like} alt="" />
               <span>443</span>
               <img src={dislike} alt="" />
             </div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default PlayVideo
