# KB Access
Quick access to academic articles through universal access at University of Copenhagen (when not on campus).

## What it does
Inserts .ep.fjernadgang.kb.dk before the first slash (/), directly following the Top Level Domain (e.g. .com).
This allows you to write your KB login, without needing to navigate through the KB website.

### For example
    http://www.nature.com/ng/journal/v35/n1/full/ng0903-1.html
                         ^
    http://www.nature.com.ep.fjernadgang.kb.dk/ng/journal/v35/n1/full/ng0903-1.html

## As a bookmarklet
As an alternative, put this in a bookmark in your browser:

    javascript:var a=window.location+'';var o=a.indexOf('/',7);window.location=a.substring(0,o)+".ep.fjernadgang.kb.dk"+a.substring(o)

