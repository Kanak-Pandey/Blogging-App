import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createBlogInput, CreateBlogInput, updateBlogInput } from '@kanakpandey30/medium-common' 
import { sign, verify} from 'hono/jwt'

export const blogRouter=new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
    Variables:{
        userId:string
    }
}>();

blogRouter.use('/*' ,async (c,next)=>{
    //extract the user id and pass it down to the author id

  const header =c.req.header("Authorization");
  if(!header) {
    c.status(401);
    return c.json({error:"unauthorized"});
  }
  const token=header.split(' ')[1];
  const response=await verify (token,c.env.JWT_SECRET)
  if(response.id){
    c.set("userId",(response as any).id)
    await next();
  }else{
    c.status(403);
    return c.json({error:"unauthorized"})
  }
  
} )

blogRouter.post('/', async (c) => {
    const body=await c.req.json()
    const {success}=createBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message:"Inputs are wrong"
        })
    }
    const userId=c.get("userId")
    const prisma =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:userId
        }
    })
  return c.json({
    id:blog.id
  })
})

blogRouter.put('/', async (c) => {
  const body=await c.req.json()
    const {success}=updateBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message:"Inputs are wrong"
        })
    }
    const prisma =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog=await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content,
        }
    })
  return c.json({
    id:blog.id
  })                  
})

blogRouter.get('/bulk',async (c)=>{
    const prisma =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try{
        const blog=await prisma.post.findMany({
            select:{
                content:true,
                title:true,
                id:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        });
        return c.json({blog})
    }catch(e){
       console.error('Error creating blog:', e);
       return c.json({ error: 'Internal Server Error' });
    }
    
}) 

blogRouter.get('/:id', async (c) => {
  const id= c.req.param("id")
    const prisma =new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try{
        const blog=await prisma.post.findFirst({
        where:{
            id:id
        },
        select:{
            id:true,
            title:true,
            content:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })
        return c.json({
            blog
        })       
    }catch(e){
        c.status(411);
        return c.json({
            msg:"error which feching blog post"
        })
    }
    
})

