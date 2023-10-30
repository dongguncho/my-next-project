import * as bcrypt from 'bcrypt'
import { myDataSource } from "@/server/connection";
import { Manager } from '@/app/entity/manager.entity';
import { signJwtAccessToken } from '@/app/lib/jwt';

interface RequestBody {
    managerId: string;
    password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()
    await myDataSource.initialize();
    const user = await myDataSource.getRepository(Manager).findOne({
        where:{
            managerId: body.managerId,
            // password: body.password
        }
    })

    if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user
    // 추가된 부분
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
        ...userWithoutPass,
        accessToken,
    };
    return new Response(JSON.stringify(result))
    } else return new Response(JSON.stringify(null))
}