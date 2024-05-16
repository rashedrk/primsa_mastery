import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const getAllDataFromDB = await prisma.post.findMany();

    const findFirst = await prisma.post.findFirst({
        where: {
            id: 2
        }
    })
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            id: 2
        }
    })
    console.log(findFirst);
    
};

main();