import CreatePost from "./CreatePost"
import Tweet from "./Tweet"
export default function Feed(){
    return(
        <div className="w-[52%] border border-gray-200 ml-3">
      <CreatePost/> 
      <Tweet/>
      <Tweet/>
        </div>
    )
}