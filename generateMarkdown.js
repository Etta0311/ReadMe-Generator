// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license=="Apache license 2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if(license=="MIT")
  { return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license=="Artistic license 2.0"){
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  } else if (license=="GNU General Public License v2.0"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license,user_add,repo_addr) {
  if(license){
   return "https://github.com/"+user_add+"/"+repo_addr+"/license"
  }else{
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license){
    return "\n\n# 📝 License\n\nThis project is ["+data.license+"]("+renderLicenseLink(data.license,data.username,data.reponame)+") licensed.";
  }else{
    return "";
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  let license_section = renderLicenseSection(data);
  content = renderLicenseBadge(data.license);
  content = content+"\n# Project: ";
  content = content + data.title;
  content = content + "\n\n" + "## Description\n    " + data.overview;
  content = content + "\n\n" + "## Table of Contents\n";
  content = content + "\n - [Installation Instructions](#installation-instructions)";
  content = content + "\n - [Getting Started](#getting-started-clone-the-repository-to-your-local-machine)";
  content = content + "\n - [Usage Instructions](#usage-instructions)";
  content = content + "\n - [Testing](#testing)";
  content = content + "\n - [Questions](#for-additional-question-reach-me-at)";
  content = content + "\n - [contributions](#contributions)";
  content = content + "\n - [Support](#show-your-support)";
  content = content + "\n - [Acknowledgements](#acknowledgements)";
  content = content + "\n - [Issues](#issues)";
        
  content = content + "\n\n## Installation instructions \n    " + data.installation;
  content = content + "\n\n## Getting started clone the repository to your local machine\n";
  content = content + "\n    $ git clone " + data.repo + "\n";
  content = content + "\n\n" + "## Usage instructions\n    " + data.usage;
  content = content + "\n\n" + "## Testing\n    " + data.test;
  content = content + "\n\n" + "## For additional question reach me at\n    email: " + "[@" + data.name +"](" + data.email + ")";
  content = content + "\n\n## Contribution \n\n    " + "👤 ** " + data.name + "  **";
  content = content + "\n\n    - Github: [@" + data.Github + "](https://github.com/" + data.Github + ")";
  content = content + "\n    - LinkedIn: [@" + data.LinkedIn + "](https://linkedin.com/in/" + data.LinkedIn + ")";
  content = content + license_section+ "\n\n## Issues\n    Please address any issues at [issues page](https://github.com/"+data.Github+"/"+data.reponame+"/issues)";
  
  return content;
}
module.exports = generateMarkdown;
