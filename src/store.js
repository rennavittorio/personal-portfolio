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
                    category: 'human',
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
                    link: '#'
                },
                {
                    funcName: '@click="chatOnDiscord"',
                    link: '#'
                },
                {
                    funcName: '@click="seeMyLinkedin"',
                    link: '#'
                },
                {
                    funcName: '@click="downloadMyCurriculum"',
                    link: '#'
                },
            ]
        },
        
    ],

    mode: 0,

    textSize: 'lg',
    
})

export default store 