const express = require('express');
const fs = require('fs');
const port = 3000;

const buttons = ()=> {
    let ret = ''
    ret += `<button type='button' onclick="window.location.href = 'http://localhost:${port.toString()}';">Home</button><br><br>`;
    return ret;
}

try {
    const app = express();


    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });

    // empty page, HOME button
    app.get('/', (req, res) => {
        res.setHeader('content-type', 'text/html');
        res.send(fileList());
    });

    // if we are specifically asked for tsxgraph, pull it from lib
    app.get('/lib/tsxgraph.js', (req, res) => {
        const tsxgraph = fs.readFileSync('./dist/lib/tsxgraph.js', 'utf8');
        res.setHeader('content-type', 'text/javascript');
        res.send(tsxgraph);
    });

    app.all('*', function (req, res) {

        // if we are asked for something from node_modules, find the right mime type
        let nmText = '/node_modules/'
        let nmLen = nmText.length

        if (req.url.slice(0, nmLen) == nmText && req.url.slice(-3) == '.js' && fs.existsSync(req.url.slice(1))) {
            const fileText = fs.readFileSync(req.url.slice(1), 'utf8');
            res.setHeader('content-type', 'text/javascript');
            res.send(fileText)
        } else if (req.url.slice(0, nmLen) == nmText && req.url.slice(-4) == '.css') {
            const fileText = fs.readFileSync(req.url.slice(1), 'utf8');
            res.setHeader('content-type', 'text/css');
            res.send(fileText)
        } else if (req.url.slice(0, nmLen) == nmText && req.url.slice(-6) == '.woff2') {
            const fileText = fs.readFileSync(req.url.slice(1));
            res.setHeader('content-type', 'text/woff2');
            res.send(fileText)
        } else if (req.url.slice(0, nmLen) == nmText && req.url.slice(-5) == '.woff') {
            const fileText = fs.readFileSync(req.url.slice(1));
            res.setHeader('content-type', 'text/woff');
            res.send(fileText)

            // default js comes from dist file, default png from images.
        } else if (req.url.slice(-3) == '.js') {
            const fileText = fs.readFileSync(`./dist/src/${req.url}`, 'utf8');
            res.setHeader('content-type', 'text/javascript');
            res.send(fileText)
        } else if (req.url.slice(-4) == '.png') {
            const fileText = fs.readFileSync(req.url.slice(1));
            res.setHeader('content-type', 'image/png');
            res.send(fileText)

            // otherwise thing is assumed html.  could replicate & extend above code if mime is important.

        } else {
            res.setHeader('content-type', 'text/html');
            res.send(makeHTML(req.url + '.js'));
        }

    });

} catch (e) {
    console.error(e);
}

/**  create list of files in src directory */
function fileList() {
    let ret = ''
    ret += '<html><body>'
    ret += buttons();
    ret += "<table>";
    fs.readdirSync('./dist/src').forEach(file => {
        if (file.slice(-3) == '.js')
            ret += `<tr><td><a href='${file.slice(0, -3)}'>${file.slice(0, -3)}</a></td></tr>`;
    });
    ret += "</table>";
    ret += '</body></html>'
    return ret;
}

function makeHTML(file) {

    let ret = '';

    ret += `<!DOCTYPE html>
<html>

<head>
<link rel="icon" href="data:;base64,iVBORw0KGgo=">
    <meta charset="utf-8">
    <meta name="viewport" initial-scale=1.0, maximum-scale=1.0">
    <meta title='demo KaTeX'>
`;



    ret += `
    <script src="node_modules/katex/dist/katex.min.js"></script>
    <link href="node_modules/katex/dist/katex.min.css" rel="stylesheet">

    <script src="node_modules/jsxgraph/distrib/jsxgraphcore.js"></script>
    <link href="node_modules/jsxgraph/distrib/jsxgraph.css" rel="stylesheet">

    <script src="node_modules/webfontloader/webfontloader.js"></script>`;

    ret += `</head>
    <body>

    <script>
    window.WebFontConfig = {
        custom: {
            families: ["KaTeX_AMS", "KaTeX_Caligraphic:n4,n7", "KaTeX_Fraktur:n4,n7",
            "KaTeX_Main:n4,n7,i4,i7", "KaTeX_Math:i4,i7", "KaTeX_Script",
            "KaTeX_SansSerif:n4,n7,i4", "KaTeX_Size1", "KaTeX_Size2", "KaTeX_Size3",
            "KaTeX_Size4", "KaTeX_Typewriter"],
        },
    };
    </script>`;


    ret += `\n` + buttons();
    ret += '\n<div id="jxgbox" class="jxgbox" style="width:600px; height:600px;"></div>';   // create the jxgbox div
    ret += `\n<script src = 'http://localhost:${port.toString()}/${file}' type = 'module'>  </script> `;


    // standard footer
    ret += `\n</body></html>`;

    return ret
}