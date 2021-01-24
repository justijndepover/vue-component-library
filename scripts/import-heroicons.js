const fs = require('fs');

var json = {};
const files = fs.readdirSync('./node_modules/heroicons/outline/');
files.forEach(file => {
    var name = file.split('.')[0];
    var value = fs.readFileSync('./node_modules/heroicons/outline/' + file, 'utf-8');
    value = value.replace('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">', '');
    value = value.replace('</svg>', '');
    value = value.replace('\n', '');
    json[name] = value;
});

fs.writeFileSync('./src/components/Icon/Iconpacks/heroicons.js', 'export default ' + JSON.stringify(json));