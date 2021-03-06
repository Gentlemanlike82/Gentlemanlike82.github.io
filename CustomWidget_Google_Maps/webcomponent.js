(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <div id="map"></div>
      <style>
            #map {
            height: 100%;
          }

      </style>
         <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAoc8k0iCPQ6YRu-GiEEVj00I5_RBZzzyw&callback=initMap"
        async defer></script>
    `;
/*    <!DOCTYPE html>
    <html>
      <head>
        <title>Simple Map</title>
        <meta name="viewport" content="initial-scale=1.0">
        <meta charset="utf-8">
        <style>
           Always set the map height explicitly to define the size of the div
           * element that contains the map. 
          #map {
            height: 100%;
          }
           Optional: Makes the sample page fill the window. 
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var map;
          function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: -34.397, lng: 150.644},
              zoom: 8
            });
          }
        </script>
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
        async defer></script>
      </body>
    </html>*/
    customElements.define('com-sap-sample-googlemaps1', class GoogleMaps1 extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
            this._tagContainer;
            this._tagType = "h1";
            this._tagTypeTitle ="title";
            this._tagText = "Hello World";
        	this._props = {};
        	this._long = this.long;
        	this._lat = this.lat;
		}


        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.redraw();
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(changedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
			this._props = { ...this._props, ...changedProperties };
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default.  If it is enabled, SAP Analytics Cloud will track DOM size changes and call this callback as needed
        //  If you don't need to react to resizes, you can save CPU by leaving it uncommented.
        /*
        onCustomWidgetResize(width, height){
        
        }
        */

        redraw(){
        	
        // Delete tagContainer which holds the DOM Tree, 
        
/*        	        if (this._tagContainer){
        	            this._tagContainer.parentNode.removeChild(this._tagContainer);
        	        }
        	        
        	        var shadow = window.getSelection(this._shadowRoot);
        	        // Create HTML Tag with tagType
        	        this._tagContainer = document.createElement(this._tagType);
        	        // Create HTML Text 
        	        var theText = document.createTextNode(this._tagText);    
        	        // add the Text to the HTML tag
        	        this._tagContainer.appendChild(theText); 
        	        // add the Tag with the Text to the document
        	        this._shadowRoot.appendChild(this._tagContainer);*/
        	        
        	          var map;
        	          function initMap() {
        	            map = new google.maps.Map(document.getElementById('map'), {
        	              center: {lat: this.lat, lng: this.long},
        	              zoom: 8
        	            });
        	          }
        	
        	
        }
    
    
    });
        
})();