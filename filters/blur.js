var BLUR_FILTER =
{
	Apply: function( inCanvas, inParameters )
	{
		boxBlurCanvasRGB( inCanvas.id, 0, 0, inCanvas.width, inCanvas.height, Math.round(inParameters.filterparam), 2 );
	}
};