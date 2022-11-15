to generate  
npx prisma generate --schema=./schema_internal.prisma  
npx prisma generate --schema=./schema_legacy.prisma  

when using in code  
from https://github.com/prisma/prisma/issues/2443#issuecomment-630679118
import { PrismaClient as PrismaClient1 } from '../prisma/generated/client1'  
import { PrismaClient as PrismaClient2 } from '../prisma/generated/client2'  

const client1 = new PrismaClient1()  
const client2 = new PrismaClient2()