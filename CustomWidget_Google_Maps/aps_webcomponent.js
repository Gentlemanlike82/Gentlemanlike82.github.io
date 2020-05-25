(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Location</legend>
				<table>
					<tr>
						<td>Longitude/td>
						<td><input id="long" type="text" size="30" maxlength="30"></td>
					</tr>
					<tr>
						<td>Latitude/td>
						<td><input id="Lat" type="text" size="30" maxlength="30"></td>
					</tr>
				</table>
				<input type="submit" style="display:none;">
			</fieldset>
		</form>
		<style>
		:host {
			display: block;
			padding: 1em 1em 1em 1em;
		}
		</style>
	`;

	class GoogleMapsAps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
		}

		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							long: this.long
							lat: this.lat
						}
					}
			}));
		}
		
		set coordinates(newLong,newLat) {
			this._shadowRoot.getElementById("long").value = newLong;
			this._shadowRoot.getElementById("lat").value = newLat;
		}

		get long() {
			return this._shadowRoot.getElementById("long").value;
		}
		get lat() {
			return this._shadowRoot.getElementById("lat").value;
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this.redraw();
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {

        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        
        }

        redraw() {
        	
        };

	}

customElements.define("com-sap-sample-googlemaps1'-aps", GoogleMapsAps);
})();
