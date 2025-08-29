
import { Appbar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { FullBlogSkeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks"

export const Blogs=()=>{ 
    const {loading,blogs}=useBlogs();
    if(loading){
        return<div>
            <Appbar/>
            <div className="flex justify-center pt-5">
                <div className="pt-10 max-w-lg">
                    <FullBlogSkeleton/>
                    <FullBlogSkeleton/>
                    <FullBlogSkeleton/>
                    <FullBlogSkeleton/>
                    <FullBlogSkeleton/>
                    <FullBlogSkeleton/>
                    
                </div>
            </div>
        </div>
         
    }
    return<div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div>
            <Appbar></Appbar>
        </div>
        <div className="flex justify-center">
            <div className="max-w-xl  ">
                 {blogs.map(blog=>
                    <BlogCard 
                        authorname={blog.author?.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"2nd Feb 2025"}
                        id={blog.id}
                        ></BlogCard>
                        
                )}
            </div>
           
            
        </div>
    </div>
    
}