import { reactive } from 'vue'

const store = reactive({ 

    functionMenu: [
        {
            title: 'knowMyStack()',
            content: [
                {
                    category: 'frontend',
                    languages: '[ html-5, css-3, javascript, vue-3, vite, sass, bootstrap, tailwind ]\;'
                },
                {
                    category: 'backend',
                    languages: '[ php-8, mysql, laravel-10 ]\;'
                },
                {
                    category: 'people',
                    languages: '[ it-IT, en-EN, project-management, functional-analysis ]\;'
                },
            ]
        },
        {
            title: 'seeMyProjects()',
            content: [
                {
                    projName: 'personal_portfolio',
                    category: 'personal_project',
                    websiteLink: '#',
                    githubLink: 'https://github.com/rennavittorio/personal-portfolio.git'
                },
                {
                    projName: 'food_blog_homepage',
                    category: 'personal_project',
                    websiteLink: '#',
                    githubLink: 'https://github.com/rennavittorio/proj-html-vuejs.git'
                },
                {
                    projName: 'whatsapp_reproduction',
                    category: 'personal_project',
                    websiteLink: '#',
                    githubLink: 'https://github.com/rennavittorio/vue-boolzapp.git'
                },
                {
                    projName: 'netflix_reproduction',
                    category: 'personal_project',
                    websiteLink: '#',
                    githubLink: 'https://github.com/rennavittorio/vite-boolflix.git'
                },
            ]
        },
        {
            title: 'getInTouch()',
            content: [
                {
                    funcName: '@click="sendMail"',
                    link: 'mailto:renna.vittorio@gmail.com'
                },
                {
                    funcName: '@click="chatOnDiscord"',
                    link: 'https://discordapp.com/users/reindev#0832'
                },
                {
                    funcName: '@click="seeMyLinkedin"',
                    link: 'https://www.linkedin.com/in/rennavittorio/'
                },
                // {
                //     funcName: '@click="downloadMyCurriculum"',
                //     link: '/vittorio_renna_cv_v0.2.pdf'
                // },
            ]
        },
        {
            title: 'readAboutMe()',
            content: [
                {
                    fact: 'I\'ve studied Neuroscience and discovered that videogames make children study better',
                    isReal: '#',
                    href: '#'
                },
                {
                    fact: 'I love standup comedy',
                    isReal: '#',
                    href: '#'
                },
                {
                    fact: 'I really like to go trekking, especially the final part when I reward myself with a good beer',
                    isReal: '#',
                    href: '#'
                },
                {
                    fact: 'My favourite chips are the San Carlo; they were my favourite way before the time I worked for them and their beautiful team',
                    isReal: '#',
                    href: '#'
                },
                {
                    fact: 'I like to wear particular spectacles and glasses',
                    isReal: '#',
                    href: '#'
                },
            ]
        },
        
    ],

    mode: 1,

    textSize: 'lg',
    
})

export default store 