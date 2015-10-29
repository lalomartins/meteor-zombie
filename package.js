Package.describe({
  summary: "make zombie (fast headless browser) available on the server",
  name: "lalomartins:zombie",
  version: "0.1.0",
  git: "https://github.com/lalomartins/meteor-zombie.git"
});

Npm.depends({
  'zombie': '3.1.1'
});

Package.onUse(function(api) {
  api.addFiles('wrap.js', 'server');
  api.export('Zombie', 'server');
});
