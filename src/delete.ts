import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteF = async () => {
    const deleteOne = await prisma.post.delete({
        where: {
            id: 7
        }
    });

    const deleteMany = await prisma.post.deleteMany({
        where: {
            authorName: null
        }
    })
    const deleteAll = await prisma.post.deleteMany({})

    console.log(deleteMany);



};

deleteF();