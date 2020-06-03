function generateMarkdown(data, badge) {
  return `

# Title
${badge}
\n${data.title}


# Description
\n${data.description}

# Table of Contents

\n* [Installation](#installation)
\n* [Usage](#usage)
\n* [License](#license)
\n* [Contributing](#contributing)
\n* [Tests](#tests)
\n* [Questions](#questions)

# Installation
\n${data.installation}

# Usage
\n${data.usage}

# License
\n${data.license}

# Contributing
\n${data.contributing}

# Tests
\n${data.tests}

# Questions
\n${data.username}
\n[GitHub URL](${data.html_url})
\nEmail me at ${data.email} if you have any addtional questions!

# Author
\n[Profile Image](${data.avatar_url}) 
\nLocation: ${data.location}


`;
}

module.exports = generateMarkdown;