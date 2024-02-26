const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkDown = require("./utils/generateMarkDown");

const questions = [ 
    {
        type:"input",
        message:"Enter Project Title",
        name:"title"
    },
    {
        type:"input",
        message:"Enter Project Description",
        name:"Description"
    },
    {
        type:"input",
        message:"Installation instructions",
        name:"Installation"
    },
    {
        type:"input",
        message:"Testing Requirements",
        name:"Testing"
    },
    {
        type:"input",
        message:"Get Github Username",
        name:"Username"
    },
    {
        type:"input",
        message:"Usage",
        name:"Usage"
    },
    {
        type:"input",
        message:"Contribution Guidelines",
        name:"Guidelines"
    },
    {
        type:"list",
        message:"License",
        name:"License",
        choices:["MIT","ISC","APACHE2.0","GPL","None"],
    },
    {
        type:"input",
        message:"Enter User Email",
        name:"Email"
    },
]

inquirer.prompt(questions).then(response =>{
    fs.writeFileSync("README.md",generateMarkDown(response),function(err){
        if(err) throw err;
    }   )
})