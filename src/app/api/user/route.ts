import { Manager } from "@/app/entity/manager.entity";
import { myDataSource } from "@/server/connection";
import * as bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
    managerId: string;
    name: string;
    email: string;
    password: string;
}
  

  export async function POST(req: NextRequest) {
    try {
        await myDataSource.initialize();
        
        const body: RequestBody = await req.json()
        const manager = new Manager
            manager.managerId = body.managerId,
            manager.password = await bcrypt.hash(body.password, 10),
            manager.typeCd = '10'
            manager.statusCd = '10'
            manager.useTf = true
            manager.clcoId = 1
            manager.clcoDeptCd = 1
            manager.name =  body.name,
            manager.email = body.email,
            manager.mobile = '01000001111'
    
        const user = await myDataSource.getRepository(Manager).save(manager);

        const { password, ...result } = user
        return new NextResponse(JSON.stringify(result))
    } catch (error) {
        console.log(error)
    }
  }

  