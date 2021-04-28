//Code from https://retifrav.github.io/blog/2020/01/05/hugo-search/

var sidebars = document.getElementById("sidebars");
var searchResults = document.getElementById("search-results");
var searchInput = document.getElementById("search-query");

// the length of the excerpts
var contextDive = 50;

var timerUserInput = false;
searchInput.addEventListener("keyup", function()
{
    // don't start searching every time a key is pressed,
    // wait a bit till users stops typing
    if (timerUserInput) { clearTimeout(timerUserInput); }
    timerUserInput = setTimeout(
        function()
        {
            search(searchInput.value.trim());
        },
        500
    );
});

function search(searchQuery)
{
    // clear previous search results
    while (searchResults.firstChild)
    {
        searchResults.removeChild(searchResults.firstChild);
    }

    // ignore empty and short search queries
    if (searchQuery.length === 0 || searchQuery.length < 3)
    {
        searchResults.style.display = "none";
        sidebars.style.display = "block";
        return;
    }

    sidebars.style.display = "none";
    searchResults.style.display = "block";

    // load your index file
    getJSON("/index.json", function (contents)
    {
        var results = [];
        let regex = new RegExp(searchQuery, "i");
        // iterate through posts and collect the ones with matches
        contents.forEach(function(post)
        {
            // here you can also search in tags, categories
            // or whatever you put into the index.json layout
            if (post.title.match(regex) || post.content.match(regex))
            {
                results.push(post);
            }
        });

        if (results.length > 0)
        {
            if (results.length > 1) {
                searchResults.appendChild(
                    htmlToElement("<div><b>I found: ".concat(results.length, " things for you!</b></div>"))
                );
            }
            else {
                searchResults.appendChild(
                    htmlToElement("<div><b>I found: ".concat(results.length, " thing for you!</b></div>"))
                );
            }

            // populate search results block with excerpts around the matched search query
            results.forEach(function (value, key)
            {
                let firstIndexOf = value.content.toLowerCase().indexOf(searchQuery.toLowerCase());
                let lastIndexOf = firstIndexOf + searchQuery.length;
                let spaceIndex = firstIndexOf - contextDive;
                if (spaceIndex > 0)
                {
                    spaceIndex = value.content.indexOf(" ", spaceIndex) + 1;
                    if (spaceIndex < firstIndexOf) { firstIndexOf = spaceIndex; }
                    else { firstIndexOf = firstIndexOf - contextDive / 2; }
                }
                else
                {
                    firstIndexOf = 0;
                }
                let lastSpaceIndex = lastIndexOf + contextDive;
                if (lastSpaceIndex < value.content.length)
                {
                    lastSpaceIndex = value.content.indexOf(" ", lastSpaceIndex);
                    if (lastSpaceIndex !== -1) { lastIndexOf = lastSpaceIndex; }
                    else { lastIndexOf = lastIndexOf + contextDive / 2; }
                }
                else
                {
                    lastIndexOf = value.content.length - 1;
                }

                let summary = value.content.substring(firstIndexOf, lastIndexOf);
                if (firstIndexOf !== 0) { summary = "...".concat(summary); }
                if (lastIndexOf !== value.content.length - 1) { summary = summary.concat("..."); }

                let div = "".concat("<div id=\"search-summary-", key, "\">")
                    .concat("<h4 class=\"post-title\"><a href=\"", value.permalink, "\">", value.title, "</a></h4>")
                    .concat("<p>", summary, "</p>")
                    .concat("</div>");
                searchResults.appendChild(htmlToElement(div));

                // optionaly highlight the search query in excerpts using mark.js
                new Mark(document.getElementById("search-summary-" + key))
                    .mark(searchQuery, { "separateWordSearch": false });
            });
        }
        else
        {
            let div = "".concat("<div><b>I couldn't find anything...</b></div><br>" + show_image('https://i.pinimg.com/originals/2d/27/14/2d27147bb039161f40b3353776e59910.gif', 'Bob the cat'))
            searchResults.appendChild(
                htmlToElement((div))
            );
        }
    });
}

function getJSON(url, fn)
{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function ()
    {
        if (xhr.status === 200)
        {
            fn(JSON.parse(xhr.responseText));
        }
        else
        {
            console.error(
                "Some error processing ".concat(url, ": ", xhr.status)
                );
        }
    };
    xhr.onerror = function ()
    {
        console.error("Connection error: ".concat(xhr.status));
    };
    xhr.send();
}

// it is faster (more convenient)
// to generate an element from the raw HTML code
function htmlToElement(html)
{
    let template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function show_image(src, alt) {
    let img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.id = "searchfailpic";
    document.getElementById('search-results').appendChild(img);
}