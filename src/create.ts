import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const result = await prisma.post.create({
        data: {
            title: 'This is title',
            content: 'this is content',
            authorName: 'author name',
        }
    })

    const createMany = await prisma.post.createMany({
        data: [
            {
                title: 'This is title 1',
                content: 'this is content 1',
                authorName: 'author name 1',
            },
            {
                title: 'This is title 2',
                content: 'this is content 2',
                authorName: 'author name 2',
            }
        ]
    })



};

main();