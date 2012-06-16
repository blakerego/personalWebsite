/* MacStyleDock.js - a function for creating a Mac-OSX-style 'dock'
 *
 * The author of this program, Safalra (Stephen Morley), irrevocably releases
 * all rights to this program, with the intention of it becoming part of the
 * public domain. Because this program is released into the public domain, it
 * comes with no warranty either expressed or implied, to the extent permitted
 * by law.
 *
 * For more public domain JavaScript code by the same author, visit:
 * http://www.safalra.com/programming/javascript/
 */


/* Creates a MacStyleDock. A MacStyleDock is a row of images that expand as the
 * mouse pointer moves over them. The images are created as children of the
 * specified node with the specified minimum and maximum sizes. Two other
 * parameters specify the images to be used and the 'range' of expansion. The
 * parameters are:
 *
 * node         - the node at which to create the Mac-style 'dock'
 * imageDetails - an array each of whose elements are object with three
 *                properties:
 *                - name      - the basename of the image
 *                - sizes     - an array of pizel sizes available
 *                - extension - the image extension
 *                - onclick   - the function to call when the image is clicked
 *                Requested file names consist of the concatenation of the name
 *                property, one of the values of the size property, and the
 *                extension property.
 * minimumSize  - the minimum size of icons in the 'dock'
 * maximumSize  - the maximum size of icons in the 'dock'
 * range        - the range of expansion, in icons. This need not be an integer.
 */
function MacStyleDock(node, imageDetails, minimumSize, maximumSize, range){

    // Preload images
    var images = new Array();
    for (var i = 0; i < imageDetails.length; i++){
	for (var j = 0; j < imageDetails[i].sizes.length; j++){
	    var image = new Image(imageDetails[i].sizes[j],imageDetails[i].sizes[j]);
      image.src = imageDetails[i].name
                + imageDetails[i].sizes[j]
	  + imageDetails[i].extension;
      images.push(image);
	}
    }

    // Create the toolbar
    var scale         = 0;
    var closeTimeout  = null;
    var closeInterval = null;
    var openInterval  = null;
    var imageNodes    = new Array(imageDetails.length);
    var imageSizes    = new Array(imageDetails.length);
    node.style.textAlign = 'center';
    node.style.height    = maximumSize + 'px';
    for (var i = 0; i < imageDetails.length; i++){
	imageNodes[i] = document.createElement('img');
	imageSizes[i] = minimumSize;
	imageNodes[i].style.position = 'relative';
	setImageProperties(i);
	node.appendChild(imageNodes[i]);
	if (imageNodes[i].addEventListener){
	    imageNodes[i].addEventListener('mousemove', processMouseMove, false); 
	    imageNodes[i].addEventListener('mouseout', processMouseOut, false);
	    imageNodes[i].addEventListener('click', imageDetails[i].onclick, false);
	}else if (imageNodes[i].attachEvent){
	    imageNodes[i].attachEvent('onmousemove', processMouseMove);
	    imageNodes[i].attachEvent('onmouseout', processMouseOut);
	    imageNodes[i].attachEvent('onclick', imageDetails[i].onclick);
	}
    }

    /* Sets a toolbar image to the specified size. The parameters are:
     *
     * index - the 0-based index of the image to be sized
     */
    function setImageProperties(index){
	var imageNode = imageNodes[index];
	var details   = imageDetails[index];
	var size = minimumSize + scale * (imageSizes[index] - minimumSize);
	var sizeIndex = -1;
	do{
	    sizeIndex++;
	}while (sizeIndex < details.sizes.length
		&&  details.sizes[sizeIndex] < size)
	    if (sizeIndex >= details.sizes.length) sizeIndex--;
	imageNode.setAttribute('src',
			       details.name + details.sizes[sizeIndex] + details.extension);
	imageNode.setAttribute('width',  size);
	imageNode.setAttribute('height', size);
	imageNode.style.marginTop = (maximumSize - size) + 'px';
    }

    /* Processes a mousemove event on an image in the 'dock'. The parameters are:
     *
     * index - the 0-based index of the image to be sized
     */
    function setImageProperties(index){
	var imageNode = imageNodes[index];
	var details   = imageDetails[index];
	var size = minimumSize + scale * (imageSizes[index] - minimumSize);
	var sizeIndex = -1;
	do{
	    sizeIndex++;
	}while (sizeIndex < details.sizes.length
		&&  details.sizes[sizeIndex] < size)
	    if (sizeIndex >= details.sizes.length) sizeIndex--;
	imageNode.setAttribute('src',
			       details.name + details.sizes[sizeIndex] + details.extension);
	imageNode.setAttribute('width',  size);
	imageNode.setAttribute('height', size);
	imageNode.style.marginTop = (maximumSize - size) + 'px';
    }

    /* Processes a mousemove event on an image in the 'dock'. The parameters are:
     *
     * e - the mousemove event. window.event will be used if this is undefined.
     */
    function processMouseMove(e){
	if (!e) e = window.event;
	var target = e.target || e.srcElement;
	var index = 0;
	window.clearTimeout(closeTimeout);
	closeTimeout = null;
	window.clearInterval(closeInterval);
	closeInterval = null;
	if (scale != 1 && !openInterval){
	    openInterval = window.setInterval(
					      function(){
						  if (scale < 1) scale += 0.125;
						  if (scale >= 1){
						      scale = 1;
						      window.clearInterval(openInterval);
						      openInterval = null;
						  }
						  for (var i = 0; i < imageNodes.length; i++){
						      setImageProperties(i);
						  }
					      },
					      20);
	}
	while (imageNodes[index] != target) index++;
	var across = (e.layerX || e.offsetX) / imageSizes[index];
	if (across){
	    for (var i = 0; i < imageSizes.length; i++){
		if ((i < index - range) || (i > index + range)){
		    imageSizes[i] = minimumSize;
		}else{
          imageSizes[i] = minimumSize
	      + Math.ceil((maximumSize - minimumSize)
			  * (Math.cos(i - index - across + 0.5) + 1) / 2);
		}
		setImageProperties(i);
	    }
	}
    }

    // Processes a mouseout event on an image in the 'dock'.
    function processMouseOut(){
	if (!closeTimeout && !closeInterval){
	    closeTimeout = window.setTimeout(
					     function(){
						 closeTimeout = null;
						 if (openInterval){
						     window.clearInterval(openInterval);
						     openInterval = null;
						 }
						 closeInterval = window.setInterval(
										    function(){
											if (scale > 0) scale -= 0.125;
											if (scale <= 0){
											    scale = 0;
											    window.clearInterval(closeInterval);
											    closeInterval = null;
											}
											for (var i = 0; i < imageNodes.length; i++){
											    setImageProperties(i);
											}
										    },
										    20);
					     },
					     100);
	}
    }

}




