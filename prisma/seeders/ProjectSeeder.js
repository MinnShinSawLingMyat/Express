const prisma = require('../../utils/prismaClient');
const util   = require('../../utils/index');

function ProjectSeeder() {
    const projects = [
        {
            id: 1,
            name: "LingMyat Filament Starter Kit",
            slogan: "Starter Kit for Filament admin, multi-tenancy management with Filament Shield.",
            description: "LingMyat Filament Starter Kit includes features such as multi-tenancy management with Filament Shield and custom login page customization, providing enhanced functionality for Filament users.Feel free to customize it according to your preferences!",
            skills: {
                create: [
                    {
                        skill: {
                            connect: {
                                id: 1
                            }
                        }
                    },
                    {
                        skill: {
                            connect: {
                                id: 8
                            }
                        }
                    },
                ]
            }
        },
        {
            id:2,
            name: "MSS JS Validation",
            slogan: "MSS JS Validation provides a powerful and efficient way to perform client-side validations in Laravel.",
            description: "MSS JS Validation provides a powerful and efficient way to perform client-side validations in Laravel without the need for page reloads. With our lightweight and fast client-side validation library, you can easily validate your form inputs and ensure the quality of user data before submitting it to your server. When you're building a admin panel or client side form using laravel blade, MSS Js Validation is the perfect solution to enhance your user experience and ensure data integrity.",
            skills: {
                create: [
                    {
                        skill: {
                            connect: {
                                id: 1
                            }
                        }
                    },
                    {
                        skill: {
                            connect: {
                                id: 2
                            }
                        }
                    },
                ]
            }
        },
        {
            id:3,
            name: "EXAM Plus",
            slogan: "Boost Your Academic Success with Exam Plus: Your Key to Excelling in Education.",
            description: "EXAM Plus, the comprehensive online exam service that revolutionizes the way educational assessments are conducted. With our platform, administrators have the power to effortlessly add exam questions, assign marks, and schedule exams with ease. Meanwhile, examiners can take exams within specified time limits, receive immediate feedback on incorrect and correct answers, and view detailed explanations for each response. Our system also provides examiners with the ability to check answers, determine pass or fail status, and gain valuable insights into student performance. With its intuitive interface and robust features, EXAM Plus is the ultimate solution for seamless and efficient online assessments. And we also provide for third party API integration.",
            skills: {
                create: [
                    {
                        skill: {
                            connect: {
                                id: 1
                            }
                        }
                    },
                    {
                        skill: {
                            connect: {
                                id: 8
                            }
                        }
                    },
                    {
                        skill: {
                            connect: {
                                id: 6
                            }
                        }
                    },
                    {
                        skill: {
                            connect: {
                                id: 3
                            }
                        }
                    },
                ]
            }
        },
        {
            id:4,
            name: "EDUplus",
            slogan: "EDUplus provide (School Management System), (Flexible Payroll System) and (Secure Reports Management System).",
            description: "<p><b>EDUplus, Educational Platform</b> communicates School, Guardians, Students. The students will get the insight of their own performances and requirements. The guardians will get the real time information of their children. The school can manage about the staffs, student and their payroll effectively.</p><p><b>Effective School Management System</b></p><ul><li>The Admin User efficiently manages school information, data creation, retrieval, modification, and deletion.</li><li>school address easily accessible digitally for convenience.</li></ul><p><b>Efficient Registration & Enrollment System</b></p><ul><li>Eliminate data loss and save time by upgrading from cumbersome paperwork registration to operations a secure system-based registration and enrollment process.</li></ul><p><b>Flexible Payroll System</b></p><ul><li>Facilitate adaptable student fee payments, catering to current trends and providing a convenient, comfortable transaction experience for both payers and the institution.</li></ul><p><b>Secure Reports Management System</b></p><ul><li>System facilitates efficient report tracking, empowering administrators, educators, and students with streamlined communication and data management capabilities.</li></ul>",
            skills: {
                create: [
                    {
                        skill: {
                            connect: {
                                id: 1
                            }
                        }
                    },
                    {
                        skill: {
                            connect: {
                                id: 2
                            }
                        }
                    },
                    {
                        skill: {
                            connect: {
                                id: 7
                            }
                        }
                    },
                ]
            }
        },
        {
            id:5,
            name: "KMTS Dubai",
            slogan: "KMTS LLC is dedicated to providing comprehensive and integrated solutions for commercial, residential, and institutional properties.",
            description: "Developed an interactive and dynamic CMS for KMTS Dubai using Laravel and Alpine.js. The website focuses on showcasing KMTS Dubai’s comprehensive facilities management services, providing a seamless user experience with real-time interactivity and innovative features.",
            skills: {
                create: [
                    {
                        skill: {
                            connect: {
                                id: 1
                            }
                        }
                    },
                    {
                        skill: {
                            connect: {
                                id: 8
                            }
                        }
                    },
                    {
                        skill: {
                            connect: {
                                id: 5
                            }
                        }
                    }
                ]
            }
        },
        {
            id:6,
            name: "Analytic Dashboard",
            slogan: "Analytic One Page Dashboard using Laravel, Alpine.js, and Chart.js for real-time data visualization.",
            description: "The Analytic One Page Dashboard with Reactive Charts, a cutting-edge solution for real-time data visualization. This dashboard offers a comprehensive overview of key metrics and insights on a single page, empowering users to monitor performance and make informed decisions effortlessly. With interactive and responsive charts, users can dynamically explore data, delve into details, and uncover trends seamlessly. Whether tracking sales, monitoring website traffic, or analyzing user engagement, this dashboard provides a visually appealing and user-friendly interface to drive data-driven decisions. Transform your data into actionable insights with the Analytic One Page Dashboard and stay ahead of the curve.",
            skills: {
                create: [
                    {
                        skill: {
                            connect: {
                                id: 1
                            }
                        }
                    },
                    {
                        skill: {
                            connect: {
                                id: 5
                            }
                        }
                    },
                    {
                        skill: {
                            connect: {
                                id: 9
                            }
                        }
                    },
                ]
            }
        }
    ];

    projects.forEach(async (project) => {
        await prisma.project.create({
            data: {
                ...project, slug: util.slugify(project.name)
            }
        });
    }) 
    

    console.log('Project seeding done.');
}

module.exports = { ProjectSeeder };