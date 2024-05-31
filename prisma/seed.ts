import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const backEndForum = await db.forum.create({
    data: { name: "BackEnd Questions"},

});
console.log(`Created forum with ID = ${backEndForum.forumId}`)

const frontEndForum = await db.forum.create({
    data: { name: "FrontEnd Questions"},

});
console.log(`Created forum with ID = ${frontEndForum.forumId}`)

const fullStackForum = await db.forum.create({
    data: { name: "FullStack Questions"},

});
console.log(`Created forum with ID = ${fullStackForum.forumId}`)


const user1 = await db.user.create({
    data: {
      nick: "user1",
      fullName: "user1",
      messages: {
        createMany: {
          data: [
            { forumId: backEndForum.forumId, text: "Hello, backend!" },
            { forumId: frontEndForum.forumId, text: "Hello, frontend!" },
            { forumId: fullStackForum.forumId, text: "Hello, fullstack!" },
          ],
        },
      },
    },
  });

  console.log(`Created user "${user1.nick}" (${user1.userId})`);