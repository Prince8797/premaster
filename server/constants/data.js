import bcrypt from 'bcryptjs';

export const data = {
    users: [
        {
            firstname: 'Prince',
            lastname: 'Mathur',
            username: 'princemathur@gmail.com',
            password: bcrypt.hashSync('12345'),
            isAdmin: true,
        },
        {
            firstname: 'Akash',
            lastname: 'Mathur',
            username: 'akashmathur@gmail.com',
            password: bcrypt.hashSync('12345'),
            isAdmin: false,
        },
    ],
    studyMaterials: [
        {
            id: 1,
            subjectName: "HTML",
            subjectDiscription: "Get Started with the Language of building web Pages",
            bgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwF6PooP7RIkdCz7SlviMtoLrL0M4DY17GqA&usqp=CAU",
            chapter1: {
                heading: "HTML Introduction",
                name: "What is HTML?",
                content1: "HTML stands for Hyper Text Markup Language",
                content2: "HTML is the standard markup language focreating Web pages",
                content3: "HTML elements tell the browser how to displathe    content",
                content4: "HTML consists of a series of elements"
            },
            chapter2: {
                heading: "Anchor Tag",
                name: "Anchor Tag?",
                content1: "HTML stands for Hyper Text Markup Language",
                content2: "HTML is the standard markup language focreating Web pages",
                content3: "HTML elements tell the browser how to displathe    content",
                content4: "HTML consists of a series of elements"
            }
        },
        {
            id: 2,
            subjectName: "HTML",
            subjectDiscription: "Get Started with the Language of building web Pages",
            bgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwF6PooP7RIkdCz7SlviMtoLrL0M4DY17GqA&usqp=CAU",
            chapter1: {
                heading: "HTML Introduction",
                name: "What is HTML?",
                content1: "HTML stands for Hyper Text Markup Language",
                content2: "HTML is the standard markup language focreating Web pages",
                content3: "HTML elements tell the browser how to displathe    content",
                content4: "HTML consists of a series of elements"
            },
            chapter2: {
                heading: "Anchor Tag",
                name: "Anchor Tag?",
                content1: "HTML stands for Hyper Text Markup Language",
                content2: "HTML is the standard markup language focreating Web pages",
                content3: "HTML elements tell the browser how to displathe    content",
                content4: "HTML consists of a series of elements"
            }
        }
    ]
}

export default data;