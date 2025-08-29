import { Appbar } from "./AppBar"
import type { Blog } from "../hooks"
import { Avatar } from "./BlogCard"
export const FullBlog=({blog}:{blog:Blog})=>{
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 max-w-screen-xl w-full pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 2nd dec 2023
                    </div>
                    <div className="pt-4 text-slate-900">
                        {blog.content}
                    </div>
                </div>
                <div  className="col-span-4 shadow-2xl self-start bg-slate-200">
                    <div className="text-slate-600 text-lg pl-1">
                        Author
                    </div>
            
                    <div className="flex w-full">
                        <div className="pr-4 flex  flex-col justify-center pl-1">
                            <Avatar name={blog.author.name} size={10}></Avatar>
                        </div>
                        <div>
                            <div className="font-bold text-xl ">
                                {blog.author.name}
                            </div> 
                            <div className="text-slate-500 pt-1 pb-2 text-sm">
                                Random catch phrase about the author's ability to grab the user attentions
                            </div>
                            </div>
                        
                    </div>
                    
                </div> 
                
            </div>
        </div>
    </div>
    
} 