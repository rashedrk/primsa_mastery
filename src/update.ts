import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const update = async () => {

    const updateOne = await prisma.post.update({
        where: {
            id: 6
        },
        data: {
            title: 'title 0'
        }
    });

    const updateMany = await prisma.post.updateMany({
        where: {
            title: 'This is title'
        },
        data: {
            published: true
        }
    })

    const upsertData = await prisma.post.upsert({
        where: {
            id: 7
        },
        update: {
            published: true
        },
        create: {
            title: 'title 2',
            content: 'content',
        }
    })
    
};

update();