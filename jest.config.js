const fs = require('fs');
const path = require('path');

const packagesPath = path.join(__dirname, 'packages');

module.exports = {

  projects: fs
    .readdirSync(packagesPath, { withFileTypes: true })
    .map(dirent => {
      if (!dirent.isDirectory()) return null;

      const packageName = dirent.name;
      const packagePath = path.join(packagesPath, packageName);
      const configPath = path.join(packagePath, 'jest.config.js');

      if (!fs.existsSync(configPath)) return null;

      const config = require(configPath);

      config.displayName = packageName;
      config.rootDir = packagePath;

      return config;
    })
    .filter(Boolean),
};
