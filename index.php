<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
function myErrorHandler($errno, $errstr, $errfile, $errline)
{
    echo ("<b style='color:red;'>ERROR</b> [$errno] (line $errline): $errfile.  $errstr");
}
// set to the user defined error handler
set_error_handler("myErrorHandler");

function printNice($a, string $b = '')
{
    if (is_array($a)) {
        $a = json_encode($a);
    }
    $output = '    ' . ' <span style="color:blue;">' . $b . '</span>  ' . $a . ' ' . "\n\r";
    echo $output;
}


///////////////////////

$html = htmlHeader();


//  user asked for a specific file?
if (empty($_REQUEST)) {
    // no - show list of files in src directory
    $files = scandir("./dist/src");
    foreach ($files as $file) {
        if ($file == '.' or $file == '..')  // don't want these
            continue;
        if (substr($file, -3, 3) !== '.js')    // only .js files
            continue;

        $html .= "<a href='?$file';'>$file</a><br>";
    }
} else {  // home
    $file = array_key_first($_REQUEST);
    if ($file == 'makehtml') {
        // check if we can write

        // create the html file and write as 'index.html'
        $keys = array_keys($_REQUEST);
        $file = $keys[1];   // the filename is in the second position
        $file = str_replace('_js', '.js', $file);
        $html .= htmlBody($file);
        $html .= htmlFooter();
        $html =  htmlentities($html);
        $html = str_replace("\n", '<br>', $html);
        echo $html;
        return; // all done
    } else {
        $html .= "\n<button href =button type='button' onclick='window.location.href = \"? \";'>Home</button>&nbsp;";
        $html .= "\n<button href =button type='button' onclick='window.location.href = \"?makehtml&$file \";'>Make HTML</button><br><br>";
        $file = str_replace('_js', '.js', $file);
        $html .= htmlBody($file);
    }
}
$html .=  htmlFooter();
echo $html;


function htmlHeader()
{
    $html =
        "<!doctype html>
<html lang='en'>
<head>
    <meta charset='utf-8' />

    <link rel='stylesheet' href='lib/katex.min.css' />
    <script type='text/javascript' src='lib/katex.min.js'></script>


    <link rel='stylesheet' type='text/css' href='lib/jsxgraph.css' />
    <script type='text/javascript' src='lib/jsxgraphcore.js'></script>

</head>
<body>

    <script>
        window.WebFontConfig = {
            custom: {
                families: ['KaTeX_AMS', 'KaTeX_Caligraphic:n4,n7', 'KaTeX_Fraktur:n4,n7',
                    'KaTeX_Main:n4,n7,i4,i7', 'KaTeX_Math:i4,i7', 'KaTeX_Script',
                    'KaTeX_SansSerif:n4,n7,i4', 'KaTeX_Size1', 'KaTeX_Size2', 'KaTeX_Size3',
                    'KaTeX_Size4', 'KaTeX_Typewriter'],
            },
        };
    </script>
    <script defer src='lib/webfontloader.min.js'></script>

";

    return $html;
}

function htmlBody($file)
{
    return "
        <div id='jxgbox' class='jxgbox' style='width:600px; height:600px'></div>
        <script src='dist/src/$file' type='module'>  </script>";
}
function htmlFooter()
{
    $html = "
  </body>
</html>";

    return $html;
}
