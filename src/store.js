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
                    projName: 'frontend',
                    category: 'contribution',
                    websiteLink: '#',
                    githubLink: '#'
                },
                {
                    projName: 'frontend',
                    category: 'contribution',
                    websiteLink: '#',
                    githubLink: '#'
                },
                {
                    projName: 'frontend',
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
                    funcName: '@click="sendMain"',
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
    
})

export default store 