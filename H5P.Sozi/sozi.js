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
                //console.log(data);
                console.log(data.frames[0].cameraStates.layer1.cx);
                //const y= data.frames[0].cameraStates[0];

                //div.innerHTML = x;
            })



        $container.append(div);
    };



    return C;
})(H5P.jQuery);