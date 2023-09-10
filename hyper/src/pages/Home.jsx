import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar';
import { fetching } from '../middleware';
import { useNavigate } from 'react-router';

function Home() {

    const [page,setPage]=useState(0);
    const [post,setPost] = useState([]);
    const [loding,setLoding] = useState(false);
    const navigate=useNavigate()

    useEffect(()=>{
        setLoding(true)
      let data=fetching(page)
      .then((res)=> {
        console.log(res.posts)
        setLoding(false)
        setPost([...res.posts])
      }).catch((err)=>{
        console.log(err)
      })
    },[page])

    function playVideo(e){
        navigate('/playback')
        localStorage.setItem('video',JSON.stringify(e))
    }
    
    


  return (
    <div className='w-full min-h-screen bg-gray-700 flex flex-col items-center'>
    <Navbar/>
    <div className='mt-20 flex gap-6 justify-center items-center'>
        <button className='bg-blue-600 text-white p-2' onClick={()=>setPage(page-1)}><i className="fa-solid fa-arrow-left-long"></i> <span className='tracking-wide font-bold '>Prev</span> </button> 
        <span className='tracking-wide font-bold text-white text-2xl'> {page} </span> 
        <button className='bg-blue-600 text-white p-2' onClick={()=>setPage(page+1)}> <span className='tracking-wide font-bold '>Next</span> <i className=" fa-solid fa-arrow-right-long"></i></button>
        </div>
    <div className=' sm:w-[90%] w-full md:w-[80%] grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 m-12'>
        {loding?<div className='text-4xl text-white flex items-center justify-center font-bold'>Loding.......</div>:
            post.map((e,i)=>{
                return (<div className='flex bg-black justify-center items-center rounded-md' key={i} onClick={()=>playVideo(e)}>
                    <div className='flex flex-col'>
                        <h1 className='flex items-center gap-4 p-2 text-white mb-8'><i className="fa-solid fa-user"></i><span>{e.creator.handle}</span></h1>
                    <img className='flex w-[100%] h-[90%] border border-gray-400' src={e.submission.thumbnail} alt="" />
                        <div className='flex text-white justify-between items-center p-4'>
                        <div><i className="fa-solid fa-pen"></i> <span>{e.submission.title}</span></div>
                        <div className='flex justify-between items-center gap-2'>
                        <span><i className="fa-solid fa-comment"></i> {e.comment.count}</span>
                        <span><i className="fa-solid fa-heart"></i> {e.reaction.count}</span>
                        </div>
                        </div>
                    </div>
                </div>)
            })
        }
    </div>
    {/* pagination */}
    <div className='mb-16 flex gap-6 justify-center items-center'>
        <button className='bg-blue-600 text-white p-2' onClick={()=>setPage(page-1)}><i className="fa-solid fa-arrow-left-long"></i> <span className='tracking-wide font-bold '>Prev</span> </button> 
        <span className='tracking-wide font-bold text-white text-2xl'> {page} </span> 
        <button className='bg-blue-600 text-white p-2' onClick={()=>setPage(page+1)}> <span className='tracking-wide font-bold '>Next</span> <i className=" fa-solid fa-arrow-right-long"></i></button>
        </div>
    </div>
  )
}

export default Home