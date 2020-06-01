function generateMarkdown(data) {
  return `


# Title
${data.badge}
\n${data.response.title}


# Description
\n${data.response.description}

# Table of Contents

\n* [Installation](#installations)
\n* [Usage](#usage)
\n* [License](#license)
\n* [Contributors](#contributing)
\n* [Tests](#tests)
\n* [Question](#questions)

# Installations
\n${data.response.installations}

# Usage
\n${data.response.usage}

# License
\n${data.response.license}

# Contributing
\n${data.response.contributing}

# Tests
\n${data.response.tests}

# Questions
\n${data.response.username}
\n[GitHub URL](${data.response.html_url})
\nEmail me at (${data.response.email}) if you have any addtional questions!

# Author
\n[Profile Image](${data.response.avatar_url}) 
\nLocation:
\n(${data.response.location})


`;
}

module.exports = generateMarkdown;