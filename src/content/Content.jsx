export const text = {
    en: {
        navbar: {
            title: 'ESL Webdev Course',
            home: 'HOME',
            syllabus: 'SYLLABUS',
            resources: 'RESOURCES',
            about: 'ABOUT',
            contact: 'CONTACT',
        },
        home: {
            mission:
                'Empowering english as a second language individuals and communities through web development education.',
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
                link: {
                    description: 'For the FULL COURSE SYLLABUS click this',
                    linkText: 'link',
                },
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
                resume: 'Resume',
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
                        text: 'The most important thig for searching for how to fix an error in your code is to understand the error (and your code) well enough to know the correct key words to enter in the search.',
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
            full: 'Full Lesson',
            link: 'Video Link',
            indext: 'Index',
            overview: {
                title: 'Overview',
                p: [
                    {
                        text: 'This web development course is designed to provide a comprehensive introduction to HTML, CSS, and JavaScript: the foundational building blocks of the modern web. Over the duration of the course, participants will gain a solid understanding of each language and how they work together to create static and dynamic websites.',
                        key: 1,
                    },
                    {
                        text: 'The course begins with HTML, the backbone of web development. This section will teach students how to structure content, create semantic markup, and incorporate multimedia elements. Through hands-on exercises and projects, learners will develop proficiency in crafting well-organized and accessible web pages.',
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
            instruction: {
                video: 'View the video here and follow the instructions regarding activities and exercises.',
                slidesLink: 'Link to presentation',
                videoLink: 'Link to video',
                video2: 'To view the video on youtube click the link below.',
            },
            classes: [
                {
                    title: 'Lesson #1',
                    url: 'lesson1',
                    description: 'Introduction to course',
                    estimate: '10mins',
                    selfGuided: false,
                    extended:
                        'This first lesson will introduce the central method of the course and will go over the way to consume it in order for it to yeild maximum benefit. Additionally there will be a brief review of the student resources.',

                    text: 'In Prog.',
                    video: 'https://www.youtube.com/embed/qkf2mcauyvs?si=_qWd64b8qUNOznnX',
                    exercises: [],
                    key: 1,
                },
                {
                    title: 'Lesson #1.5',
                    url: 'lesson1-5',
                    description: 'Setting up for web development',
                    estimate: '30-45 mins',
                    selfGuided: true,
                    instructions: 'View the video here and follow the instructions regarding activities and exercises.',

                    selfText:
                        'This unit can be self guided. For those who prefer the video version see link below. Otherwise the slides with instructions are embeded on this page.',
                    slidesLink: 'https://slides.com/mats2/leccion-1-es-introduccion-al-curso/embed',
                    extended:
                        'This second lesson will go over the reccomended set up for the course. Basically the applications and programms I belive will serve students of this course best. And how to set them up for the course.',
                    text: 'In Prog.',
                    video: 'PLACEHOLDER',
                    exercises: [],
                    key: 2,
                },
                {
                    title: 'Lesson #2',
                    url: 'lesson2',
                    description: 'Introduction to HTML',
                    estimate: '30-45 mins',
                    selfGuided: false,
                    instructions: 'View the video here and follow the instructions regarding activities and exercises.',

                    slidesLink: 'https://slides.com/mats2/lesson-2-en-introduction-to-html/embed',
                    extended:
                        'This third lesson will go over the essentials of HTML. History, basic document structure, tags and important resources',
                    text: 'In Prog.',
                    video: 'https://www.youtube.com/embed/IKBnfKWc8Ww?si=6X3UdJOXqjYpSwzY',
                    key: 3,
                    exercises: [
                        {
                            key: 2.1,
                            title: 'Lesson #2.1',
                            url: 'lesson2-1',
                            description: 'The HTML Skeleton',
                            instructions:
                                'View the video here and follow the instructions regarding activities and exercises.',
                            estimate: '30-45 mins',
                            selfGuided: false,
                            slidesLink: 'https://slides.com/mats2/2-1-lesson-en-learning-the-html-skeleton/embed',
                            extended:
                                'This lesson will talk about the HTML skeleton, some tips for quickly programming it, and includes some short exercises to practice it.',
                            text: 'In Prog.',
                            video: 'https://www.youtube.com/embed/9Tv_u6QgBeQ?si=TG2nFkCO0Vp05Mlr',
                        },
                        {
                            key: 2.2,
                            title: 'Lesson #2.2',
                            url: 'lesson2-2',
                            description: 'Essential Tags',
                            instructions:
                                'View the video here and follow the instructions regarding activities and exercises.',
                            estimate: '30-45 mins',
                            selfGuided: false,
                            slidesLink: 'https://slides.com/mats2/lesson-2-en-introduction-to-html/embed',
                            extended:
                                'This lesson will be on the basic tags and will contain some exercises on how to use them.',
                            text: 'In Prog.',
                            video: 'Placeholder',
                        },
                        {
                            key: 2.3,
                            title: 'Lesson #2.3',
                            url: 'lesson2-3',
                            description: 'Essential Tags Cont.',
                            instructions:
                                'View the video here and follow the instructions regarding activities and exercises.',
                            estimate: '30-45 mins',
                            selfGuided: false,
                            slidesLink: 'https://slides.com/mats2/lesson-2-en-introduction-to-html/embed',
                            extended:
                                'This lesson is a continuation of the previous. It will be on the basic tags and will contain some exercises on how to use them.',
                            text: 'In Prog.',
                            video: 'Placeholder',
                        },
                    ],
                },
            ],
        },
    },
    es: {
        navbar: {
            title: 'Curso de ESL Webdev',
            home: 'CASA',
            syllabus: 'CURRICULO',
            resources: 'RECURSOS',
            about: 'SOBRE ME',
            contact: 'CONTACTO',
        },
        home: {
            mission:
                'Empoderando a individuos y comunidades de inglés como segundo idioma a través de la educación en desarrollo web.',
            syllabus: {
                title: 'Resumen general del currículo',
                p: [
                    {
                        text: 'Este curso cubre HTML, CSS y JavaScript, los lenguajes esenciales para el desarrollo web. Los participantes aprenderán cómo estructurar el contenido web, dar estilo a las páginas y agregar interactividad. A través de proyectos prácticos, adquirirán habilidades prácticas en la creación de sitios web bien diseñados, responsivos y dinámicos.',
                        key: 1,
                    },
                    {
                        text: 'Este curso también presentará diferentes técnicas de publicación y alojamiento. Al final del curso, los estudiantes podran dar vida a sus ideas en la web.',
                        key: 2,
                    },
                ],
                link: {
                    description: 'Para el CURRICULO COMPLETO de click en este ',
                    linkText: 'enlace!',
                },
            },
            about: {
                title: 'Sobre mi',
                p: [
                    {
                        text: 'Mi nombre es Mateo Sánchez, soy un estudiante de último año de secundaria. Siempre he querido compartir me passion por el desarrollo web, y por esto he decidido crear esta pagina.',
                        key: 1,
                    },
                    {
                        text: 'Desarrolle este curso recopilando la información presentada en el internet que consideré más util en mi trabajo programmando, y lo que aprendí de mis múltiples mentores en mis pasantías y empleos.',
                        key: 2,
                    },
                    {
                        text: 'A continuación, encontrarás el enlace al CV que detalla mis numerosas experiencias en desarrollo de software de las cuales obtengo mis conocimientos. Estaré encantado de responder cualquier pregunta adicional si me contactais utilizando la información en la sección de contacto.',
                        key: 3,
                    },
                ],
                resume: 'CV',
            },
            footer: { contact: { title: 'Contactame', phone: 'Telefono: +1 (832)-888-0327' }, follow: 'Sigueme' },
        },
        resources: {
            title: 'Recursos',
            overview: {
                title: 'Resumen',
                p: [
                    {
                        text: 'Esta pagina contiene los recursos digitales que yo considero mas utiles e importantantes.',
                    },
                    {
                        text: 'Los recursos digitales tienen un papel central en el mundo del desarrollo web. Las páginas web y los tutoriales digitales son herramientas esenciales para programadores de todos los niveles. En el internet uno se puede encontrar todo tipo de información útil. Con tutoriales, documentación y ejemplos de código, los recursos digitales ofrece soluciones a cualquier tipo de problema con el que un programador pudiera encontrarse.',
                        key: 1,
                        strong: false,
                    },
                    {
                        text: 'Ademas de recursos formales como estos foros y communidades digitales son una gran ayuda para cualquier programmador. Estos foros son grandes bases de datos que contienen millones de problemas accompanados con sus soluciones que como programadores podemos aprobechar. Estos foros tambien son un gran sitio para pedir ayuda.',
                        key: 2,
                        strong: false,
                    },
                    {
                        text: 'Aprender qué recursos son confiables y fáciles de comprender y como buscarlos es la habilidad más importante que un desarrollador de software puede tener. Nadie puede o realmente necesita almacenar todos los matices semánticos de la programación en su mente, y esto es gracias a los recursos digitales.',
                        key: 3,
                        strong: false,
                    },
                    {
                        text: 'En esta página documentare los recursos a los que suelo recurrir. Siéntase libre de explorar y acudir a ellos en busca de ayuda con futuros proyectos.',
                        key: 4,
                        strong: false,
                    },
                    { text: 'Nota Importante:', key: 5, strong: true },
                    {
                        text: 'Es muy importante recordar que poder utilizar estos recursos depende por completo de tu habilidad para buscar en Google o en Stack Overflow lo que estás buscando. Saber buscar en Internet es una habilidad que debes desarrollar mucho para ser un programador exitoso.',
                        key: 6,
                        strong: false,
                    },
                    {
                        text: 'Lo más importante al buscar cómo solucionar un error en tu código es entender el error (y tu código) lo suficientemente bien como para conocer las palabras clave correctas que debes ingresar en la búsqueda de google.',
                        key: 7,
                        strong: false,
                    },
                    {
                        text: 'Lo último es que cuando te encuentres atascado depurando JavaScript, simplemente copiar y pegar los códigos de error en Google generalmente dará resultados decentes.',
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
                        description: 'Enlace:',
                        link: 'https://es.stackoverflow.com/',
                        linkText: 'es.stackoverflow.com',
                    },
                    p: [
                        {
                            text: 'Stack Overflow es una plataforma fundamental para los desarrolladores. Proporciona un amplio repositorio de preguntas y respuestas contribuidas por la comunidad, ofreciendo información valiosa, soluciones y explicaciones. La naturaleza colaborativa de la plataforma promueve el intercambio de conocimientos y la participación de la comunidad.',
                            key: 1,
                        },
                        {
                            text: 'Yo visito con frecuencia a Stack Overflow y reviso preguntas viejas para depurar. Esta pagina probablemente es uno de los mejores recursos en la web. Por ejemplo, durante el proceso de programación de esta página web, he visitado Stack Overflow varias veces para solucionar problemas y obtener ejemplos de código. (Si tienes un error en tu código, casi puedo garantizar que alguien más ha tenido el mismo problema y ha consultado la communidad de Stack).',
                            key: 2,
                        },
                        {
                            text: 'El enlace de arriba es para la versión en español de Stack Overflow, pero si no encuentras la respuesta en esta versión, también recomendaría intentar una búsqueda en la versión en inglés, que es un poco más extensa.',
                            key: 3,
                        },
                    ],
                },
                {
                    key: 2,
                    title: 'MDN Web Docs',
                    subHeader: {
                        description: 'Enlace:',
                        link: 'https://developer.mozilla.org/es/docs/Web',
                        linkText: 'developer.mozilla.org/es/docs/Web',
                    },
                    p: [
                        {
                            text: 'MDN (Mozilla Developer Network) es una pagina creada por programmadores que ofrece recursos y documentación exhaustiva sobre tecnologías web. Los desarrolladores suelen depender frecuentemente de MDN como referencia para la sintaxis, ejemplos de uso y detalles de compatibilidad con navegadores.',
                            key: 1,
                        },
                        {
                            text: 'Frecuentemente consulto MDN para obtener instrucciones sobre cómo utilizar ciertas etiquetas o escribir piezas de código, ya que es uno de los recursos digitales más fiables. Sin embargo, siendo honesto, está más orientado a desarrolladores principiantes, y ya que uno comienza a programar cosas más elaboradas, la página deja de ser tan útil.',
                            key: 2,
                        },
                        {
                            text: 'Otra cosa muy buena de MDN es que sus páginas de contenido, instrucciones y tutoriales son todas traducidas por un grupo de desarrolladores en lugar de usar simplemente el traductor de Google. Y aunque estas traducciones no siempre sean perfectas, son suficientemente buenas.',
                            key: 3,
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
                            text: 'W3Schools se adapta a desarrolladores de todos los niveles al ofrecer tutoriales completos, una amplia biblioteca de fragmentos de código, y ejercicios interactivos de codificación. Sirve como un recurso invaluable para aprender, practicar y compartir conocimientos, empoderando a los desarrolladores para crecer y destacar en su camino de desarrollo web.',
                            key: 1,
                        },
                        {
                            text: 'Personalmente, pienso que W3 es de gran ayuda cuando hay que aprender cosas nuevas. Definitivamente está orientado hacia desarrolladores principiantes y es simple y útil, además cuenta con algunos IDE de código con los que puedes experimentar con lo que estás aprendiendo.',
                            key: 2,
                        },
                        {
                            text: 'Solo debes tener un poco de precaución, ya que ocasionalmente W3 puede estar equivocado en algunos aspectos, por lo que si sigues sus instrucciones y no funcionan, no te decepciones demasiado.',
                            key: 3,
                        },
                        {
                            text: 'Lo unico es que W3 es una de esas paginas que estan traducidas con el traductor de google entonces yo usaria esta pagina como ultimo recurso si not entiendes mas o menos bien el ingles.',
                            key: 3,
                        },
                    ],
                },
            ],
            other: {
                title: 'Recursos alternativos',
                p: [
                    {
                        text: 'Todos estos son recursos alternativos son fantásticos, todos gratuitos excepto Udemy.',
                        key: 1,
                    },
                    {
                        text: 'Free Code Camp y Coursera son ambos excelentes recursos de aprendizaje. No los incluí anteriormente porque no son tanto una herramienta para el desarrollo como cursos completos para un aprendizaje en profundidad. Estas paginas son una excelente manera de empezar programando. Si tienes tiempo registrate con uno de ellos y encuentra algun curso que te guste y intentalo, no pierdes nada.',
                        key: 2,
                    },
                    {
                        text: 'Los cursos de freeCodeCamp en especial son muy buenos, y ofrecen cursos en varios lenguajes de programación. Simplemente crea una cuenta si estás interesado en su contenido y elige algo que te parezca interesante. Y todo su contenido esta traducido al espanol bastante bien.',
                        key: 4,
                    },
                    {
                        text: 'Hay tantos cursos gratuitos disponibles que resulta difícil justificar la inclusión de uno de pago. Sin embargo, quería compartir el curso que tomé, el cual fue fantástico. Lo apliqué en diferentes entornos profesionales y funcionó de manera excepcional. Inluire el enlace abajo.',
                        key: 5,
                    },
                    {
                        text: 'PD: Si vas a comprarlo, espera a que esté en oferta. Ocurre con bastante frecuencia y el precio se reduce de los $200 a algo más asequible, como ahora que está a $34.',
                        key: 6,
                    },
                ],
            },
        },
        syllabus: {
            title: 'Course Syllabus',
            full: 'Leccion Completa',
            link: 'Enlace',
            indext: 'Indice',
            instruction: {
                video: 'Vea el video aquí y siga las instrucciones relacionadas con las actividades y ejercicios.',
                slidesLink: 'Enlace a la presentancion',
                videoLink: 'Enlace al video',
                video2: 'Para ver el video en youtube visite este enlace:',
            },
            overview: {
                title: 'Resumen',
                p: [
                    {
                        text: 'Este curso de desarrollo web está diseñado para proporcionar una introducción completa a HTML, CSS y JavaScript: los bloques de construcción fundamentales de la web moderna. A lo largo del curso, los participantes adquirirán un sólido entendimiento de cada lenguaje y cómo trabajan juntos para crear paginas web estáticas y dinámicas.',
                        key: 1,
                    },
                    {
                        text: 'El curso comienza con HTML, el pilar del desarrollo web. Esta sección enseñará a los estudiantes cómo estructurar contenido, crear marcas semánticas e incorporar elementos multimedia. A través de ejercicios y proyectos prácticos, los estudiantes desarrollarán habilidades en la creación de páginas web bien organizadas y accesibles.',
                        key: 2,
                    },
                    {
                        text: 'Pasando a CSS, los participantes explorarán el poder de las hojas de estilo en cascada para controlar la presentación y el diseño de las páginas web. Aprenderán a manipular colores, fuentes, fondos y bordes, así como a crear diseños responsivos que se adaptan a diferentes tamaños de pantalla y dispositivos.',
                        key: 3,
                    },
                    {
                        text: 'JavaScript, el lenguaje de la interactividad, se introducirá a continuación. Los estudiantes descubrirán cómo agregar funcionalidad a las páginas web, crear contenido dinámico, manejar eventos y validar las entradas de los usuarios. Obtendrán experiencia práctica en la escritura de scripts, el trabajo con variables, matrices y funciones, y la utilización de bibliotecas y marcos de trabajo para mejorar sus capacidades de codificación.',
                        key: 4,
                    },
                ],
            },
            classes: [
                {
                    title: 'Leccion #1',
                    url: 'leccion1',
                    description: 'Introduccion al curso',
                    estimate: '10mins',
                    selfGuided: false,
                    slidesLink: 'https://slides.com/mats2/lesson-1-en-introduction-to-course/embed',
                    extended:
                        'Esta primera lección introducirá el método central del curso y explicará la forma de consumirlo para obtener el máximo beneficio. Además, habrá una breve revisión de los recursos disponibles para los estudiantes.',
                    text: 'In Prog.',
                    video: 'https://www.youtube.com/embed/C2Q1oNDRBNg?si=7XuA60niSYwwDlEG',
                    exercises: [],
                    key: 1,
                },
                {
                    title: 'Leccion #1.5',
                    url: 'leccion1-5',
                    description: 'Perparando para programmar',
                    estimate: '30-45 mins',
                    selfGuided: true,
                    selfText:
                        'Esta unidad puede ser autoguiada. Para aquellos que prefieran la versión en video, vean el enlace a continuación. Si no, la presentacion con instrucciones esta en esta página.',
                    slidesLink: 'https://slides.com/mats2/1-5-lesson-en-setting-up-to-program/embed',
                    extended:
                        'Esta segunda lección abordará la configuración recomendada para el curso. Básicamente, las aplicaciones y programas que creo que serán más útiles para los estudiantes de este curso y cómo configurarlos para el curso.',
                    text: 'In Prog.',
                    video: 'PLACEHOLDER',
                    exercises: [],
                    key: 2,
                },
                {
                    title: 'Leccion #2',
                    url: 'leccion2',
                    description: 'Introducion a HTML',
                    instructions:
                        'Vea el video aquí y siga las instrucciones relacionadas con las actividades y ejercicios.',
                    estimate: '30-45 mins',
                    selfGuided: false,
                    slidesLink: 'https://slides.com/mats2/lesson-2-en-introduction-to-html/embed',
                    extended:
                        'Esta tercera lección abordará los conceptos esenciales de HTML. Historia, estructura básica de documentos, etiquetas y recursos importantes.',
                    text: 'In Prog.',
                    video: 'https://www.youtube.com/embed/8YLyGjsyv3g?si=C1Djug9m5l9OA4Jd',
                    key: 2,
                    exercises: [
                        {
                            key: 2.1,
                            title: 'Leccion #2.1',
                            url: 'leccion2-1',
                            description: 'El Esqueleto HTML',
                            instructions:
                                'Vea el video aquí y siga las instrucciones relacionadas con las actividades y ejercicios.',
                            estimate: '30-45 mins',
                            selfGuided: false,
                            slidesLink: 'https://slides.com/mats2/2-1-lesson-en-learning-the-html-skeleton/embed',
                            extended:
                                'Esta leccion hablara acerca del esqueleto HTML, unos tips para programarlo rapidamente, y contiene unos ejercicios breves para practicarlo.',
                            text: 'In Prog.',
                            video: 'https://www.youtube.com/embed/ZGTkML8VbjI?si=KIEnSFkJimi9bkS-',
                        },
                        {
                            key: 2.2,
                            title: 'Leccion #2.2',
                            url: 'leccion2-2',
                            description: 'Tags Fundamentales',
                            instructions:
                                'Vea el video aquí y siga las instrucciones relacionadas con las actividades y ejercicios.',
                            estimate: '30-45 mins',
                            selfGuided: false,
                            slidesLink: 'https://slides.com/mats2/lesson-2-en-introduction-to-html/embed',
                            extended:
                                'Esta leccion hablara acerca del los tags basicos, unos tips para programarlo rapidamente, y contiene unos ejercicios breves para aprender a usarlos.',
                            text: 'In Prog.',
                            video: 'Placeholder',
                        },
                        {
                            key: 2.3,
                            title: 'Leccion #2.3',
                            url: 'leccion2-3',
                            description: 'Tags Fundamentals Cont.',
                            instructions:
                                'Vea el video aquí y siga las instrucciones relacionadas con las actividades y ejercicios.',
                            estimate: '30-45 mins',
                            selfGuided: false,
                            slidesLink: 'https://slides.com/mats2/lesson-2-en-introduction-to-html/embed',
                            extended:
                                'Esta leccion continuara hablando acerca del los tags basicos, unos tips para programarlo rapidamente, y contiene unos ejercicios breves para aprender a usarlos.',
                            text: 'In Prog.',
                            video: 'Placeholder',
                        },
                    ],
                },
            ],
        },
    },
};
