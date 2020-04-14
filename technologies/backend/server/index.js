const express = require("express");
const server = express();
const cors = require("cors");
let technologies = [
    {
        id: 1,
        name: "Node.js",
        description:
            "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        tags: ["node", "javascript", "backend"],
        logo: "http://127.0.0.1:3000/img/node.svg"
    },
    {
        id: 2,
        name: "Angular",
        description:
            "Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces with Angular",
        tags: ["node", "javascript", "angular"],
        logo: "http://127.0.0.1:3000/img/angular.svg"
    },
    {
        id: 3,
        name: "Docker",
        description:
            "Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.",
        tags: ["docker", "devops", "cli"],
        logo: "http://127.0.0.1:3000/img/docker.svg"
    },
    {
        id: 4,
        name: "Dotnet",
        description:
            ".NET is a free, cross-platform, open source developer platform for building many different types of applications. With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, gaming, and IoT.",
        tags: ["dotnet", "microsoft", "csharp"],
        logo: "http://127.0.0.1:3000/img/dotnet.svg"
    },
    {
        id: 5,
        name: "firebase",
        description:
            "Firebase allows app teams for mobile and web devices to achieve success",
        tags: ["google", "firebase", "baas", "faas", "cloud"],
        logo: "http://127.0.0.1:3000/img/firebase.svg"
    },
    {
        id: 6,
        name: "Java",
        description:
            "Java is a programming language and computing platform first released by Sun Microsystems in 1995. There are lots of applications and websites that will not work unless you have Java installed, and more are created every day. Java is fast, secure, and reliable. From laptops to datacenters, game consoles to scientific supercomputers, cell phones to the Internet, Java is everywhere!",
        tags: ["oracle", "java", "vm", "oop"],
        logo: "http://127.0.0.1:3000/img/java.svg"
    },
    {
        id: 7,
        name: "Kubernetes",
        description:
            "is an open-source container-orchestration system for automating application deployment, scaling, and management.[4], It was originally designed by Google, and is now maintained by the Cloud Native Computing Foundation. It aims to provide a platform for automating deployment, scaling, and operations of application containers across clusters of hosts",
        tags: ["google", "k8", "kubernetes", "devops"],
        logo: "http://127.0.0.1:3000/img/kubernetes.svg"
    },
    {
        id: 8,
        name: "React",
        description:
            "React is a JavaScript library for building user interfaces. It is the view layer for web applications.",
        tags: ["facebook", "javascript", "framework", "frontend"],
        logo: "http://127.0.0.1:3000/img/react.svg"
    },
    {
        id: 9,
        name: "Python",
        description:
            "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.",
        tags: ["backend", "python", "oop", "ml"],
        logo: "http://127.0.0.1:3000/img/python.svg"
    },
    {
        id: 10,
        name: "Ruby",
        description:
            "Ruby is... A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.",
        tags: ["ruby", "code", "oop"],
        logo: "http://127.0.0.1:3000/img/ruby.svg"
    },
    {
        id: 11,
        name: "Vue",
        description:
            "Vue.js is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.",
        tags: ["javascript", "vue", "frontend"],
        logo: "http://127.0.0.1:3000/img/vue.svg"
    }
]// to avoid using a cloud server

server.use(express.json());
server.use(express.static(__dirname + "/../public"));
server.use(cors());

server.get("/api/technologies", (req, res) => {
    technologies.map(technology => {
        //technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
        return technology;
    });
    return res.send({ error: false, data: technologies });
});

server.get("/api/technology/:id", (req, res) => {
    let technology = technologies.filter(temp => temp.id == req.params.id);

    //technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;

    return res.send({ error: false, data: technology });

});



server.get("/api/technology/search/:name", (req, res) => {
    let technology = technologies.filter(temp => temp.name.toLowerCase().match(req.params.name.toLowerCase()) );

    return res.send({ error: false, data: technology });

});

module.exports = server;