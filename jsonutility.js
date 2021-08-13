
var jsonData = "";
var escapedJson = "";

function EscapeJsonData() {    

    var value = "\\\""

    if (ValidateJson()) {
        escapedJson = jsonData.replace(/"/g, value).replace(/(\r\n|\n|\r)/gm, "");

        document.getElementById("escapedJson").innerText = escapedJson;

    } else {
        console.error("Invalid Json");
    }

    UpdateTooltip("Copy to clipboard",false)
}


function ValidateJson() {
    jsonData = document.getElementById("jsonInput").value;
    try {
        JSON.parse(jsonData);
        return true;
    } catch (error) {
        return false;
    }
}

function CopyEscapedJson() {

    var r = document.createRange();
    r.selectNode(document.getElementById("escapedJson"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    UpdateTooltip("Copied!",true)

}

function UpdateTooltip(_tooltip,show) {
    var element = document.getElementById("copybutton");
    var tooltip = bootstrap.Tooltip.getInstance(element)
    tooltip.dispose()
    element.setAttribute("title", _tooltip)
    var newTooltip = new bootstrap.Tooltip(element, {
        boundary: document.body // or document.querySelector('#boundary')
    })

    tooltip = bootstrap.Tooltip.getInstance(element)
    if(show){
        tooltip.show();
    }    
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


