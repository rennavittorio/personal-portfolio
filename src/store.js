import { reactive } from 'vue'

const store = reactive({ 

    functionMenu: [
        {
            title: 'knowMyStack()',
            content: [
                {
                    category: 'frontend',
                    languages: '[ html, css, javascript, vue3, vite, sass, bootstrap, tailwind ]\;'
                },
                {
                    category: 'backend',
                    languages: '[ php, mysql, laravel ]\;'
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
                    projName: 'proj_name_1',
                    category: 'contribution',
                    websiteLink: '#',
                    githubLink: '#'
                },
                {
                    projName: 'proj_name_2',
                    category: 'contribution',
                    websiteLink: '#',
                    githubLink: '#'
                },
                {
                    projName: 'proj_name_3',
                    category: 'contribution',
                    websiteLink: '#',
                    githubLink: '#'
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
                {
                    funcName: '@click="downloadMyCurriculum"',
                    link: '/vittorio_renna_cv_v0.2.pdf'
                },
            ]
        },
        {
            title: 'readRndFactsAboutMe()',
            content: [
                {
                    fact: 'I love trekking and mountains',
                    isReal: '#',
                    href: '#'
                },
                {
                    fact: 'I discovered that videogames can improve children\'s attention',
                    isReal: '#',
                    href: '#'
                },
                {
                    fact: 'Sometimes I could say a bad joke, a very bad one and still laught at myself loudly',
                    isReal: '#',
                    href: '#'
                },
                {
                    fact: 'Beer is better than wine, change my mind',
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