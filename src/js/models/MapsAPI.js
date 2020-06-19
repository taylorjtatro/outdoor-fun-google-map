/*



class GoogleMapsApi {
    constructor(gApiKey) {
        this.apiKey = gApiKey;
    }

    if (!window._GoogleMapsApi) {
        this.callbackName = '_GoogleMapsApi.mapLoaded';
        window._GoogleMapsApi = this;
        window._GoogleMapsApi.mapLoaded = this.mapLoaded.bind(this);
    }

    load() {
        if (!this.promise) {
          this.promise = new Promise(resolve => {
            this.resolve = resolve;
    
            if (typeof window.google === 'undefined') {
              const script = document.createElement('script');
              script.src = `//maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=${this.callbackName}`;
              script.async = true;
              document.body.append(script);
    
            } else {
              this.resolve();
            }
          });
        }
    
        return this.promise;
      }
    
      /**
       * mapLoaded
       * Global callback for loaded/resolved map instance.
       * @this {_GoogleMapsApi}
       */
      /*
      mapLoaded() {
    
        if (this.resolve) {
          this.resolve();
        }
      }
}

export default GoogleMapsApi
*/