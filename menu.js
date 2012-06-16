/* My Menu*/

startList = function() {
if (document.all&&document.getElementById) {
navRoot = document.getElementById("nav");
for (i=0; i<navRoot.childNodes.length; i++) {
node = navRoot.childNodes[i];
if (node.nodeName=="LI") {
node.onmouseover=function() {
this.className+=" over";
  }
  node.onmouseout=function() {
  this.className=this.className.replace(" over", "");
   }
   }
  }
 }
}
window.onload=startList;



/* Menu */
var n = new Array();

n[0] = new Array("Home");
n[1] = new Array("PHOTOS",	"Miami", "New York", "Philadelphia", "Croatia");
n[2] = new Array("RESEARCH", "Columbia University", "University of Pennsylvania");
n[3] = new Array("Other Interests",	"Hockey", "Music");



/* HTML WRITEUP */
document.write(" ");
document.write("<!-- NAVIGATION -->");
document.write(" ");
document.write("<div style='margin-left: auto; margin-right: auto; width: 600px;'>");

for (var i = 0; i < n.length; i++) {
	document.write("<ul><li><a href='" + n[i][0].toLowerCase() + ".html'>" + n[i][0] + "</a><ul>");

	for (var j = 1; j < n[i].length; j++) {

		document.write("<li><a href='" + n[i][0].toLowerCase() + ".html#" + n[i][j].toLowerCase() + "'>" + n[i][j] + "</a></li>");
	}

	document.write("</ul></li></ul>");
}

document.write("</div>");
document.write(" ");
document.write("<!-- /NAVIGATION -->");
document.write(" ");