# KB Access
Quick access to academic articles through universal access at University of Copenhagen (when not on campus).

## What it does
Inserts .ep.fjernadgang.kb.dk before the first slash (/), directly following the Top Level Domain (e.g. .com) on your current page.
This allows you to write your KB login, without needing to navigate through the KB website.

### For example
    http://www.jstor.org/stable/24055478?seq=1#page_scan_tab_contents
                        ^
    http://www.jstor.org.ep.fjernadgang.kb.dk/stable/24055478?seq=1#fndtn-page_scan_tab_contents
                        ^^^^^^^^^^^^^^^^^^^^^
## As a bookmarklet
As an alternative, put this in a bookmark in your browser:

    javascript:var a=window.location+'';var o=a.indexOf('/',7);window.location=a.substring(0,o)+".ep.fjernadgang.kb.dk"+a.substring(o)

