const { User } = require('../models');

const userData = [
    {
        username: "noman_gilany",
        twitter: "nomani",
        github: "nomanigil",
        email: "nomani_g@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "mike-t",
        twitter: "mikethomas",
        github: "mikedev",
        email: "mike_t@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "prima_c",
        twitter: "prima",
        github: "prima",
        email: "prima-tg@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "wuo_chen",
        twitter: "wuaonchen",
        github: "wuaonchen",
        email: "wuo_chen@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "monika",
        twitter: "monika321t",
        github: "monika321t",
        email: "monika321t@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "rkkhan",
        twitter: "rkkhan",
        github: "rkkhan",
        email: "rk@gmkhanail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;