function generateMarkDown(data){
    return `# Project: ${data.title}
    
    ![GitHub license](https://img.shields.io/badge/license-${data.License}-purple.svg)

    ## Table Of Contents
    -[Description](#description)
    -[Installation](#Installation)
    -[Testing](#Testing)
    -[ContactMe](#ContactMe)
    -[Usage](#Usage)
    -[Guidelines](#Guidelines)
    -[License](#License)
    
    ### Description
    ${data.Description}

    ### Installation
    ${data.Installation}

    ### Testing
    ${data.Testing}

    ### ContactMe
    Please check my other projects
    [Github Profile](https://github.com/${data.Username})
    If you have any questions, 
    please feel free to reach me at ${data.Email}

    ### Usage
    ${data.Usage}

    ### Guidelines
    ${data.Guidelines}

    ### License
    ${data.License}
    For more information regarding licensing, 
    please check [here](https://choosealicense.com/licenses/)

    
    `
}

module.exports = generateMarkDown;