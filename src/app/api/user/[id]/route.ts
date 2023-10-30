import { Manager } from "@/app/entity/manager.entity";
import { verifyJwt } from "@/app/lib/jwt";
import { myDataSource } from "@/server/connection";

export async function GET(
    request: Request,
    { params }: { params: { id: string } },
  ) {
    const accessToken = request.headers.get('authorization')
    if (!accessToken || !verifyJwt(accessToken)) {
      return new Response(JSON.stringify({ error: 'No Authorization' }), {
        status: 401,
      })
    }
    
    console.log(params)
    await myDataSource.initialize();
    const id = Number(params.id)
  
    const userPosts = await myDataSource.getRepository(Manager).find({
        where: {id}
    })
    return new Response(JSON.stringify(userPosts))
  }