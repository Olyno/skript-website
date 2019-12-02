import fs from 'fs';
import path from 'path';
import showdown from 'showdown';

export async function get(req, res, next) {
    const tutorialsPath = path.resolve(__dirname, '..', '..', '..', 'src', 'skript-website-public', 'tutorials');
    fs.readdir(tutorialsPath, async (err, files) => {
        if (err) throw err;
        const back = {};
        showdown.setFlavor('github');
        const converter = new showdown.Converter({
            noHeaderId: true,
            simpleLineBreaks: true
        });
        for (const file of files) {
            const filePath = path.resolve(tutorialsPath, file);
            const content = fs.readFileSync( filePath ).toString();
            back[file.replace(/\.md/g, '')] = converter.makeHtml(content);
        }
        res.end(JSON.stringify(back));
    })
}