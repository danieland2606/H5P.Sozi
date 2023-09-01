var H5P = H5P || {};

H5P.Sozi = (function ($) {
    /**
     * Constructor function.
     */
    function C(options, id) {
        // Extend defaults with provided options
        this.options = $.extend(true, {}, {
            json: null
        }, options);
        // Keep provided id.
        this.id = id;
    };



    /**
    let svg_path = H5P.getLibraryPath("H5P.Sozi-1.0") + "/projektarbeiten.svg";


    window.onload = async function () {
        const div = document.getElementById("content");
        let file = await fetch(svg_path);
        const text = await file.text();
        div.innerHTML = text;
    }

    /**
     * Attach function called by H5P framework to insert H5P content into
     * page
     *
     * @param {jQuery} $container
     */
    C.prototype.attach = function ($container) {
        let div = document.createElement("div");
        div.id = "content";


        const json_path = H5P.getPath(this.options.json.path, this.id);

        fetch(json_path)
            .then(res => res.json())
            .then(data => {
                data.frames.forEach((frame) => {
                    Object.keys(frame.cameraStates).forEach((layer) => {
                        if (layer !== "__sozi_auto__") {
                            const name = layer;
                            const cx = frame.cameraStates[layer].cx;
                            const cy = frame.cameraStates[layer].cy;
                            const opacity = frame.cameraStates[layer].opacity;
                            const width = frame.cameraStates[layer].width;
                            const height = frame.cameraStates[layer].height;
                            console.log(name)
                            console.log(cx);
                            console.log(cy);
                            console.log(opacity);
                            console.log(width);
                            console.log(height);
                        }
                    });
                });



                /**
                for (let i=0; i < data.frames.length; i++) {
                    for(const layer of data.frames[i].cameraStates) {
                        console.log(layer.cx)
                        console.log(layer.cy)
                        console.log(layer.opacity)
                    }

                    //data.frames[i].cameraStates.layer1.cx;
                    //data.frames[i].cameraStates.layer1.cy;
                    //data.frames[i].cameraStates.layer1.opacity;
                }

            */
            })



        $container.append(div);
    };



    return C;
})(H5P.jQuery);