import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // const result = await prisma.post.create({
    //     data: {
    //         title: 'This is title',
    //         content: 'this is content',
    //         authorName: 'author name',
    //     }
    // })

    const getAllDataFromDB = await prisma.post.findMany();
    console.log(getAllDataFromDB);
    
};

main();