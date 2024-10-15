t();const o=setInterval(t,1e3);function t(){try{chrome.devtools.inspectedWindow.eval(`
      !!(window.Konva && window.Konva.stages.length)
    `,(e,n)=>{n?(console.log(n),clearInterval(o)):e&&(clearInterval(o),chrome.devtools.panels.create("Konva","/icon38.png","/src/pages/panel/index.html"))})}catch(e){clearInterval(o),console.error(e)}}
