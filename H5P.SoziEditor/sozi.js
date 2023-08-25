var H5P = H5P || {};

H5P.SoziEditor = (function ($) {
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


    window.onload = async function () {
        const div = document.getElementById("content");
        let file = await fetch("../H5P.SoziEditor/projektarbeiten.svg");
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

        let img_data = document.createElement("img");
        img_data.className="img-data";

        //let svg_data = document.createElement("object");
        //svg_data.className="svg-data";
        //svg_data.type= "image/svg+xml";

        div.append(img_data);
        //div.append(svg_data);
        $container.append(div);








            //let svg_data1 = document.createElement("iframe");
            //svg_data1.className="svg-data";

            // container.  Allows for styling later.

            //$container.append('<object type="image/svg+xml" data="projektarbeiten.svg" > </object>');
            //$container.append('<img class="greeting-image" src="earth.jpg">');

    };



    return C;
})(H5P.jQuery);