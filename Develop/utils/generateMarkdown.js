// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return ""
  }
  return `![Badge](https://img.shields.io/badge/License-${license}-lightblue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return ""
  }
  return `[![License](https://img.shields.io/badge/License-${license}-lightblue.svg)](https://opensource.org/${license}/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return ""
  }
  return `Licensed under the ${renderLicenseBadge(license)} license.
          ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contibuting}

  ## Tests
  ${data.tests}

  ##License
  Copyright (c) . All rights reserved.

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
