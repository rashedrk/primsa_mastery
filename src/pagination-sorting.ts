import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const offsetPagination = await prisma.post.findMany({
        skip: 5,
        take: 2
    });

    const cursorPagination = await prisma.post.findMany({
        skip: 3,
        take: 2,
        cursor: {
            id: 10
        }
    });

    const sorting = await prisma.post.findMany({
        orderBy: {
            title: 'asc'
        },
    });


    console.log(sorting);

};

main();