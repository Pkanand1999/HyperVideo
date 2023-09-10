export async function fetching(page) {
    try{
      let res=await fetch(`https://internship-service.onrender.com/videos?page=${page}`)
      let json=await res.json();
      return json.data;
  
    }catch(e){
      console.log(e)
    }
  }