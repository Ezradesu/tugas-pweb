

export default function Postdetail({params} : {params : {postId : string}}) {
  
  return (
    <div>Post {params.postId[0]}</div>
  )
} 
