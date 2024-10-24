const express = require('express');
const fs = require('fs');

const app = express();


const port = 3000;
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
    // if thing.js then return thing.js, otherwise thing.html
    if (req.url.slice(-3) == '.js') {
        const fileText = fs.readFileSync(`./dist/src/${req.url}`, 'utf8');
        res.setHeader('content-type', 'text/javascript');
        res.send(fileText)
    } else {
        res.setHeader('content-type', 'text/html');
        res.send(makeHTML(req.url + '.js'));
    }
});

function buttons() {
    let ret = ''
    ret += `<button type='button' onclick="window.location.href = 'http://localhost:3000';">Home</button><br><br>`;
    return ret;
}

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
<html lang="en">
<link rel="icon" href="data:;base64,iVBORw0KGgo=">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" rel="stylesheet">

    <script src="https://cdn.jsdelivr.net/npm/jsxgraph@1.10.0/distrib/jsxgraphcore.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/jsxgraph@1.10.0/distrib/jsxgraph.min.css" rel="stylesheet">
</head>

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
    </script>
    <script src="https://cdn.jsdelivr.net/npm/webfontloader@1.6.28/webfontloader.min.js"></script>
`;


    // // look at URL.  run parameter if it exists, otherwise show files in /src
    // parse_str($_SERVER['QUERY_STRING'], $output);

    // echo "<button type='button' onclick=\"window.location.href = '{$_SERVER['PHP_SELF']}';\">Home</button><br><br>";

    // if (isset($output['f'])) {
    ret += buttons();
    ret += '<div id="jxgbox" class="jxgbox" style="width:600px; height:600px;"></div>';   // create the jxgbox div
    ret += `<script src='http://localhost:3000${file}' type='module' defer>  </script>`;
    // } else {
    //     $files = scandir('./dist/src');
    //     $jsFiles = [];
    //     foreach ($files as $file) {
    //         if (substr($file, -3) === '.js') {
    //             $jsFiles[] = $file;
    //         }
    //     }

    //     $table = "<table>";
    //     foreach ($jsFiles as $file) {
    //         $table .= "<tr><td><a href='{$_SERVER['PHP_SELF']}?f=$file'>$file</a></td></tr>";
    //     }
    //     $table .= "</table>";
    //     echo $table;
    //}

    // standard footer
    ret += '</body></html>';

    return ret
}