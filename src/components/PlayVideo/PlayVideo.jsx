import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import megan from '../../assets/megan.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const PlayVideo = ({videoId}) => {

 const [apiData,setApiData] = useState(null);

 const fetchVideoData = async () =>{
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]));
 }

 useEffect(()=>{
    fetchVideoData();
 },[])

  return (
    <div className='play-video'>
       {/*<video src={video1} controls autoPlay muted></video>*/}
       <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
       <div className='play-video-info'>
         <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} views &bull; {moment(apiData.snippet.publishedAt).fromNow()}</p>
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
