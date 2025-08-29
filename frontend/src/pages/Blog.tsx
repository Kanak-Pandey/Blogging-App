import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { BlogPageSkeleton } from "../components/Skeleton";
import { Appbar} from "../components/AppBar";
export const Blog=()=>{
    const {id}=useParams();
    const {loading ,blog}=useBlog({
        id:id || ""
    });
    if(loading){
            return<div>
                <Appbar/>
                <div className="flex justify-center pt-5">
                    <div className="pt-10 max-w-lg">
                        <BlogPageSkeleton/>
                    </div>
                </div>
            </div>
             
        }
    return <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        {blog ? <FullBlog blog={blog} /> : "Anonymous"}
    </div>
}