export const text = {
    en: {
        home: {
            mission: 'Empowering individuals and communities through web development education.',
            syllabus: {
                title: 'Syllabus Overview',
                p: [
                    {
                        text: 'This web development course covers HTML, CSS, and JavaScript, the essential languages for web development. Participants will learn how to structure web content, style pages, and add interactivity. Through hands-on projects, they will gain practical skills in creating well-designed, responsive, and dynamic websites.',
                        key: 1,
                    },
                    {
                        text: 'This course will also introduce different publishing and hosting techniques. By the end of the course, students will be equipped to bring their ideas to life on the web.',
                        key: 2,
                    },
                ],
            },
            about: {
                title: 'About',
                p: [
                    {
                        text: 'My name is Mateo Sanchez, I am a rising high school senior. I have been deeply passionate about sharing my programming knowledge with an interested audience for years now.',
                        key: 1,
                    },
                    {
                        text: 'I developed this course by compiling the information presented in the online resources that I found most useful throughout my programming journey as well as what I learned from my many mentors at my internships and jobs.',
                        key: 2,
                    },
                    {
                        text: 'The resume linked below details my numerous experiences in both paid and unpaid software development that I draw my knowledge from. I would be happy to answer any further questions at the information listed in the contact section.',
                        key: 3,
                    },
                ],
            },
            footer: { contact: { title: 'Contact Us', phone: 'Phone: +1 (832)-888-0327' }, follow: 'Follow Us' },
        },
        resources: {
            title: 'Student Resources',
            overview: {
                title: 'Overview',
                p: [
                    {
                        text: 'Online resources play a crucial role in the world of web development, serving as invaluable assets to developers at all skill levels. They offer a vast repository of knowledge, tutorials, documentation, and code samples that can be accessed anytime, anywhere. They offer solutions to common coding challenges, facilitate troubleshooting, and provide guidance on implementation.',
                        key: 1,
                        strong: false,
                    },
                    {
                        text: 'Online communities and forums also foster collaboration and enable developers to connect with peers, seek advice, and share their expertise. Overall, online resources empower web developers to enhance their skills, stay current, overcome obstacles, and continually expand their horizons.',
                        key: 2,
                        strong: false,
                    },
                    {
                        text: 'Knowing which resources are reliable and easily digestible is the most important skill a software developer can have. No one can or really needs to store all the nuanced semantics of programming in their heads and this is thanks to online resources.',
                        key: 3,
                        strong: false,
                    },
                    {
                        text: 'On this page I will highlight my personal go-to resources. Feel free to explore and come to these for help with upcoming projects',
                        key: 4,
                        strong: false,
                    },
                    { text: 'Important Note:', key: 5, strong: true },
                    {
                        text: 'It is super important to remember that being able to use these resources hinges entirely on your ability to ask google or the stack overflow search what you are looking for. Googling is a skill that you majorly have to develop to be a successful programmer.',
                        key: 6,
                        strong: false,
                    },
                    {
                        text: 'The most important this for searching for how to fix an error in your code is to understand the error (and your code) well enough to know the correct key words to enter in the search.',
                        key: 7,
                        strong: false,
                    },
                    {
                        text: 'Lastly, pro tip is when stuck with debugging javascript, just copy pasting error codes into google will usually yield decent result.',
                        key: 8,
                        strong: false,
                    },
                ],
            },
            index: {
                title: 'Index',
                links: [
                    { key: 1, name: 'Stack Overflow', link: '#stack-overflow' },
                    { key: 2, name: 'MDN Web Docs', link: '#mdn' },
                    { key: 3, name: 'W3Schools', link: '#w3' },
                    { key: 4, name: 'Other', link: '#other' },
                ],
            },
            sections: [
                {
                    key: 1,
                    title: 'Stack Overflow',
                    subHeader: {
                        description: 'Website Link:',
                        link: 'https://stackoverflow.com/',
                        linkText: 'stackoverflow.com',
                    },
                    p: [
                        {
                            text: 'Stack Overflow is an essential platform for developers. It offers a vast repository of questions and answers contributed by the community, providing valuable insights, solutions, and explanations. The collaborative nature of the platform encourages knowledge sharing and community engagement.',
                            key: 1,
                        },
                        {
                            text: 'I frequently visit stack overflow and look at previously asked questions for debugging and it is probably one of the best resources on the web. For example, in the process of programming this webpage I have visited stack overflow for troubleshooting and code samples multiple times. (If you have an error in your code I can almost guarantee someone else has had the same issue and asked about it on stack)',
                            key: 2,
                        },
                    ],
                },
                {
                    key: 2,
                    title: 'MDN Web Docs',
                    subHeader: {
                        description: 'Website Link:',
                        link: 'https://developer.mozilla.org/en-US/',
                        linkText: 'developer.mozilla.org',
                    },
                    p: [
                        {
                            text: 'MDN (Mozilla Developer Network) is an very powerful resource for developers, providing a wide range of use cases. Developers frequently rely on MDN as a reference for syntax, usage examples, and browser compatibility details.',
                            key: 1,
                        },
                        {
                            text: 'I will frequently go to MDN for instructions on how to use certain tags or write certain pieces of code pretty frequently. But to be honest it best suited for new developers looking to learn the language.',
                            key: 2,
                        },
                    ],
                },
                {
                    key: 3,
                    title: 'W3Schools',
                    subHeader: {
                        description: 'Website Link:',
                        link: 'https://www.w3schools.com/',
                        linkText: 'w3schools.com/',
                    },
                    p: [
                        {
                            text: 'W3Schools caters to developers of all levels by offering comprehensive tutorials, a vast code snippet library, interactive coding exercises, and a collaborative community. It serves as an invaluable resource for learning, practicing, and sharing knowledge, empowering developers to grow and excel in their web development journey.',
                            key: 1,
                        },
                        {
                            text: "I personally find the W3 is super helpful when learning new code. It is definitely catering towards newer developers and it is simple and helpful and has some code IDE's that let you experiment with the stuff your are learning.",
                            key: 2,
                        },
                        {
                            text: "I would just be a bit wary because occasionally W3 is just incorrect about some things so if you try their instructions and it doesn't work don't be too disappointed.",
                            key: 3,
                        },
                    ],
                },
            ],
            other: {
                title: 'Other',
                p: [
                    {
                        text: 'All these are fantastic resources, all free other than Udemy.',
                        key: 1,
                    },
                    {
                        text: 'Free Code Camp and Coursera are both great leaning resources, I did not include them above because they are not so much a tool for development as a full courses for in depth learning. Just searching within them and looking for courses that you like is a great way to start.',
                        key: 2,
                    },
                    {
                        text: 'I have personally heard great things about just the basic IBM Full Stack Software Developer Course at coursera. This one will go well beyond what we cover in this course and allow for the integration of a back end with the front end we will learn to program here.',
                        key: 3,
                    },
                    {
                        text: 'The freeCodeCamp ones are also very good and they have numerous courses in various programming languages. Just create an account if you are interested in their content and chose something you find interesting.',
                        key: 4,
                    },
                    {
                        text: 'Lastly, there are so many free courses it is hard to justify the inclusion of a paid one but nonetheless, this is the course that I took and it was fantastic. I took it into various professional environments and it worked fantastically. I will link it below for those who are interested.',
                        key: 5,
                    },
                    {
                        text: 'PS: if you are going to buy it, wait for it to go on sale. It happens pretty often and it gets cut from that $200 price to something more affordable like right now it is at $34.',
                        key: 6,
                    },
                ],
            },
        },
        syllabus: {
            title: 'Course Syllabus',
            overview: {
                title: 'Overview',
                p: [
                    {
                        text: 'This web development course is designed to provide a comprehensive introduction to HTML, CSS, and JavaScript: the foundational building blocks of the modern web. Over the duration of the course, participants will gain a solid understanding of each language and how they work together to create static and dynamic websites.',
                        key: 1,
                    },
                    {
                        text: 'The course begins with HTML, the backbone of web development, teaching students how to structure content, create semantic markup, and incorporate multimedia elements. Through hands-on exercises and projects, learners will develop proficiency in crafting well-organized and accessible web pages.',
                        key: 2,
                    },
                    {
                        text: 'Moving on to CSS, participants will explore the power of cascading style sheets to control the presentation and layout of web pages. They will learn how to manipulate colors, fonts, backgrounds, and borders, as well as how to create responsive designs that adapt to different screen sizes and devices.',
                        key: 3,
                    },
                    {
                        text: 'JavaScript, the language of interactivity, will be introduced next. Students will discover how to add functionality to web pages, create dynamic content, handle events, and validate user inputs. They will gain practical experience in writing scripts, working with variables, arrays, and functions, and utilizing libraries and frameworks to enhance their coding capabilities.',
                        key: 4,
                    },
                ],
            },
            classes: [
                {
                    title: 'Class 1',
                    key: 1,
                    text: 'In Prog.',
                },
            ],
        },
    },
    es: {
        home: {
            mission: 'Pooopoooo mpowering individuals and communities through web development education.',
            syllabus: {
                title: 'Syllabus Overview',
                p: [
                    {
                        text: 'This web development course covers HTML, CSS, and JavaScript, the essential languages for web development. Participants will learn how to structure web content, style pages, and add interactivity. Through hands-on projects, they will gain practical skills in creating well-designed, responsive, and dynamic websites.',
                        key: 1,
                    },
                    {
                        text: 'This course will also introduce different publishing and hosting techniques. By the end of the course, students will be equipped to bring their ideas to life on the web.',
                        key: 2,
                    },
                ],
            },
            about: {
                title: 'About',
                p: [
                    {
                        text: 'My name is Mateo Sanchez, I am a rising high school senior. I have been deeply passionate about sharing my programming knowledge with an interested audience for years now.',
                        key: 1,
                    },
                    {
                        text: 'I developed this course by compiling the information presented in the online resources that I found most useful throughout my programming journey as well as what I learned from my many mentors at my internships and jobs.',
                        key: 2,
                    },
                    {
                        text: 'The resume linked below details my numerous experiences in both paid and unpaid software development that I draw my knowledge from. I would be happy to answer any further questions at the information listed in the contact section.',
                        key: 3,
                    },
                ],
            },
            footer: { contact: { title: 'Contact Us', phone: 'Phone: +1 (832)-888-0327' }, follow: 'Follow Us' },
        },
        resources: {
            title: 'Student Resources',
            overview: {
                title: 'Overview',
                p: [
                    {
                        text: 'Online resources play a crucial role in the world of web development, serving as invaluable assets to developers at all skill levels. They offer a vast repository of knowledge, tutorials, documentation, and code samples that can be accessed anytime, anywhere. They offer solutions to common coding challenges, facilitate troubleshooting, and provide guidance on implementation.',
                        key: 1,
                        strong: false,
                    },
                    {
                        text: 'Online communities and forums also foster collaboration and enable developers to connect with peers, seek advice, and share their expertise. Overall, online resources empower web developers to enhance their skills, stay current, overcome obstacles, and continually expand their horizons.',
                        key: 2,
                        strong: false,
                    },
                    {
                        text: 'Knowing which resources are reliable and easily digestible is the most important skill a software developer can have. No one can or really needs to store all the nuanced semantics of programming in their heads and this is thanks to online resources.',
                        key: 3,
                        strong: false,
                    },
                    {
                        text: 'On this page I will highlight my personal go-to resources. Feel free to explore and come to these for help with upcoming projects',
                        key: 4,
                        strong: false,
                    },
                    { text: 'Important Note:', key: 5, strong: true },
                    {
                        text: 'It is super important to remember that being able to use these resources hinges entirely on your ability to ask google or the stack overflow search what you are looking for. Googling is a skill that you majorly have to develop to be a successful programmer.',
                        key: 6,
                        strong: false,
                    },
                    {
                        text: 'The most important this for searching for how to fix an error in your code is to understand the error (and your code) well enough to know the correct key words to enter in the search.',
                        key: 7,
                        strong: false,
                    },
                    {
                        text: 'Lastly, pro tip is when stuck with debugging javascript, just copy pasting error codes into google will usually yield decent result.',
                        key: 8,
                        strong: false,
                    },
                ],
            },
            index: {
                title: 'Index',
                links: [
                    { key: 1, name: 'Stack Overflow', link: '#stack-overflow' },
                    { key: 2, name: 'MDN Web Docs', link: '#mdn' },
                    { key: 3, name: 'W3Schools', link: '#w3' },
                    { key: 4, name: 'Other', link: '#other' },
                ],
            },
            sections: [
                {
                    key: 1,
                    title: 'Stack Overflow',
                    subHeader: {
                        description: 'Website Link:',
                        link: 'https://stackoverflow.com/',
                        linkText: 'stackoverflow.com',
                    },
                    p: [
                        {
                            text: 'Stack Overflow is an essential platform for developers. It offers a vast repository of questions and answers contributed by the community, providing valuable insights, solutions, and explanations. The collaborative nature of the platform encourages knowledge sharing and community engagement.',
                            key: 1,
                        },
                        {
                            text: 'I frequently visit stack overflow and look at previously asked questions for debugging and it is probably one of the best resources on the web. For example, in the process of programming this webpage I have visited stack overflow for troubleshooting and code samples multiple times. (If you have an error in your code I can almost guarantee someone else has had the same issue and asked about it on stack)',
                            key: 2,
                        },
                    ],
                },
                {
                    key: 2,
                    title: 'MDN Web Docs',
                    subHeader: {
                        description: 'Website Link:',
                        link: 'https://developer.mozilla.org/en-US/',
                        linkText: 'developer.mozilla.org',
                    },
                    p: [
                        {
                            text: 'MDN (Mozilla Developer Network) is an very powerful resource for developers, providing a wide range of use cases. Developers frequently rely on MDN as a reference for syntax, usage examples, and browser compatibility details.',
                            key: 1,
                        },
                        {
                            text: 'I will frequently go to MDN for instructions on how to use certain tags or write certain pieces of code pretty frequently. But to be honest it best suited for new developers looking to learn the language.',
                            key: 2,
                        },
                    ],
                },
                {
                    key: 3,
                    title: 'W3Schools',
                    subHeader: {
                        description: 'Website Link:',
                        link: 'https://www.w3schools.com/',
                        linkText: 'w3schools.com/',
                    },
                    p: [
                        {
                            text: 'W3Schools caters to developers of all levels by offering comprehensive tutorials, a vast code snippet library, interactive coding exercises, and a collaborative community. It serves as an invaluable resource for learning, practicing, and sharing knowledge, empowering developers to grow and excel in their web development journey.',
                            key: 1,
                        },
                        {
                            text: "I personally find the W3 is super helpful when learning new code. It is definitely catering towards newer developers and it is simple and helpful and has some code IDE's that let you experiment with the stuff your are learning.",
                            key: 2,
                        },
                        {
                            text: "I would just be a bit wary because occasionally W3 is just incorrect about some things so if you try their instructions and it doesn't work don't be too disappointed.",
                            key: 3,
                        },
                    ],
                },
            ],
            other: {
                title: 'Other',
                p: [
                    {
                        text: 'All these are fantastic resources, all free other than Udemy.',
                        key: 1,
                    },
                    {
                        text: 'Free Code Camp and Coursera are both great leaning resources, I did not include them above because they are not so much a tool for development as a full courses for in depth learning. Just searching within them and looking for courses that you like is a great way to start.',
                        key: 2,
                    },
                    {
                        text: 'I have personally heard great things about just the basic IBM Full Stack Software Developer Course at coursera. This one will go well beyond what we cover in this course and allow for the integration of a back end with the front end we will learn to program here.',
                        key: 3,
                    },
                    {
                        text: 'The freeCodeCamp ones are also very good and they have numerous courses in various programming languages. Just create an account if you are interested in their content and chose something you find interesting.',
                        key: 4,
                    },
                    {
                        text: 'Lastly, there are so many free courses it is hard to justify the inclusion of a paid one but nonetheless, this is the course that I took and it was fantastic. I took it into various professional environments and it worked fantastically. I will link it below for those who are interested.',
                        key: 5,
                    },
                    {
                        text: 'PS: if you are going to buy it, wait for it to go on sale. It happens pretty often and it gets cut from that $200 price to something more affordable like right now it is at $34.',
                        key: 6,
                    },
                ],
            },
        },
        syllabus: {
            title: 'Course Syllabus',
            overview: {
                title: 'Overview',
                p: [
                    {
                        text: 'This web development course is designed to provide a comprehensive introduction to HTML, CSS, and JavaScript: the foundational building blocks of the modern web. Over the duration of the course, participants will gain a solid understanding of each language and how they work together to create static and dynamic websites.',
                        key: 1,
                    },
                    {
                        text: 'The course begins with HTML, the backbone of web development, teaching students how to structure content, create semantic markup, and incorporate multimedia elements. Through hands-on exercises and projects, learners will develop proficiency in crafting well-organized and accessible web pages.',
                        key: 2,
                    },
                    {
                        text: 'Moving on to CSS, participants will explore the power of cascading style sheets to control the presentation and layout of web pages. They will learn how to manipulate colors, fonts, backgrounds, and borders, as well as how to create responsive designs that adapt to different screen sizes and devices.',
                        key: 3,
                    },
                    {
                        text: 'JavaScript, the language of interactivity, will be introduced next. Students will discover how to add functionality to web pages, create dynamic content, handle events, and validate user inputs. They will gain practical experience in writing scripts, working with variables, arrays, and functions, and utilizing libraries and frameworks to enhance their coding capabilities.',
                        key: 4,
                    },
                ],
            },
            classes: [
                {
                    title: 'Class 1',
                    key: 1,
                    text: 'In Prog.',
                },
            ],
        },
    },
};
