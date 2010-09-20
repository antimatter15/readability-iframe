if(location.hash.indexOf('read') != -1){
  var searchmap = {};
  location.hash.substr(1).split('&').forEach(function(item){
    searchmap[item.split('=')[0]] = item.split('=')[1].replace(/[^A-Za-z0-9\-%\.]/g, '');
  });
  
  if(searchmap.readStyle && searchmap.readSize && searchmap.readMargin){
    location.hash = '#'
    var baseHref = "http://antimatter15.github.com/readability-iframe/";
    var linkStringStart = "(function(){";
    var linkStringEnd   = "';_readability_script=document.createElement('SCRIPT');_readability_script.type='text/javascript';_readability_script.src='" + baseHref + "readability.js?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(_readability_script);_readability_css=document.createElement('LINK');_readability_css.rel='stylesheet';_readability_css.href='" + baseHref + "readability.css';_readability_css.type='text/css';_readability_css.media='screen';document.getElementsByTagName('head')[0].appendChild(_readability_css);_readability_print_css=document.createElement('LINK');_readability_print_css.rel='stylesheet';_readability_print_css.href='" + baseHref + "css/readability-print.css';_readability_print_css.media='print';_readability_print_css.type='text/css';document.getElementsByTagName('head')[0].appendChild(_readability_print_css);})();";


    if(!searchmap.readTools) searchmap.readTools = '';

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.innerText = linkStringStart + "readStyle='" + searchmap.readStyle + "';readTools=unescape('"+searchmap.readTools+"');readSize='" + searchmap.readSize + "';readMargin='" + searchmap.readMargin + linkStringEnd;
    document.documentElement.insertBefore(script);
  }
}
