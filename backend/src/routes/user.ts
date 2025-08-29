import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { signinInput, signupInput, SignupInput } from '@kanakpandey30/medium-common'
import { sign, verify} from 'hono/jwt'

export const userRouter=new Hono<{
    Bindings: {
        DATABASE_URL: string
    JWT_SECRET: string
    }
}>(); 


userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  	const body = await c.req.json();
    const {success}=signupInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message:"Innputs are incorrect"
        })
    }
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password,
        name:body.name
			}
		});
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
	}catch (err: any) { 
    console.error("Signup Error:", JSON.stringify(err, Object.getOwnPropertyNames(err))); 
    return c.json({ error: "Internal Server Error" }, 500); 
  }
})

userRouter.post('/signin', async (c) => {
  const prisma =new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const body=await c.req.json();
  const {success}=signinInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message:"Inputs are incorrect"
        })
    }
  const user=await prisma.user.findUnique({
    where:{
      email: body.email,
      password:body.password
    }
  })
  if(!user){
    c.status(403);
    return c.json({
      error: "user not found"
    })
  }
  const jwt=await sign({id:user.id},c.env.JWT_SECRET);
  return c.json({jwt,msg:"signed in"});
})
