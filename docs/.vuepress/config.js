module.exports = {
    base:'/docs/',
    title: '蜜桃成熟时',
    description: '青春是干净的纯白,像一遍绿地的窗外',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/img/logo.png',
        nav:[
            // 首页
            {text:'Home',link:'/'},


            {
                text:'前端相关',
                items:[
                   {
                       text:'快速上手',
                       items:[
                           {text:'Git',link:'/Front-end/Git/'},
                           {text:'axios',link:'/Front-end/axios/'}
                       ]
                   },
                   {
                       text:'知识笔记',
                       items:[
                           {text:'JavaScript',link:'/Front-end/JavaScript/'},
                           {text:'Node',link:'/Front-end/Node/'},
                           {text:'微信小程序',link:'/Front-end/wechat/'},
                       ]    

                   },
                   {
                       text:'框架',
                       items:[
                           {text:'占个位',link:'https://www.baidu.com/'}
                       ]
                   }

                ]
            },

            {   text:"工具",
                items:[
                    {text:'B站',link:'https://www.bilibili.com/'},
                    {text:'有道翻译',link:'https://fanyi.youdao.com/'},
                    {text:'网易云音乐',link:'https://music.163.com/'},

                ]
            },

        ],
        // sidebar: require("./sidebar.js"),
        sidebar:{
            // 前端相关

            '/Front-end/Git/': [
               ['','Git'], // 该目录下的 README.md 文件 并给他起个标题 叫Git
            //    'one', // 该目录下的 
            //    'two'
            ],
            '/Front-end/axios/': [
                ['','axios'],
            ],
            '/Front-end/JavaScript/': [
                {
                	title:'基础',
                	collapsaible:false,
                	children:[
                		['','方法'],
                		['function','函数'],
                	]
                },
                {
                  title:'ES6',
                  collapsaible:true,
                  children:[
                    ['ES6','前言']
                  ]
                },
                {
                	title:'正则表达式',
                	collapsaible:true,
                	children:[
                		['正则表达式','导读'],
                	]
                }
            ],
            '/Front-end/Node/': [
              {
                title:'基础',
                collapsaible:false,
                children:[
                  ['','介绍'],
                  ['02模块化','模块化'],
                  ['03包与npm','包与npm']
                ]
              }
            ],
            '/Front-end/wechat/': [
            	{
            		title:'基础',
            		collapsaible:false,
            		children:[
            			'',
            		]
            	}
            ]


            // // 侧边栏分组
            // '/Front-end/Git/': [
            //     {
            //         title:'Group 1', // 组名
            //         collapsaible: false,
            //         children:['','Git'], // 该分组下要显示的文件的目录
            //     },
            //     {
            //         title:'Group 2',
            //         collapsaible: false,
            //         children: [
            //             ['one','A'],
            //             ['two','B']
            //         ],
            //     }
            // ],
            // '/Front-end/axios/': [
            //     ''
            // ]




        },
        activeHeaderLinks: false,
        displayAllHeaders: true,
        sidebarDepth: 2, // 嵌套的标题链接 默认为 1
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
