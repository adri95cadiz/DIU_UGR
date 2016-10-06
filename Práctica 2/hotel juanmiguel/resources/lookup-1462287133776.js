(function(window, undefined) {
  var dictionary = {
    "ca24cbf7-792f-4203-97ef-0c0599f458ce": "Habitaciones",
    "f6107f3a-972d-4be2-83da-1c4d46cc4a6e": "Opiniones",
    "49f9019b-bee3-4c7c-97b9-80d3a1b6c1cd": "Promociones",
    "482a7ef9-f4be-4ec9-9d1c-d126f065eb6e": "Habitación concreta",
    "377f8d5b-2f4c-46a1-b027-bcc18e51fa35": "Contacto y Mapa",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Index",
    "e3c4ac66-38d9-42c2-9c2e-1ce50be8876b": "Fotos",
    "6aaeb1d1-04e3-440f-b8a8-021ba60085b7": "Servicios",
    "21006c34-8b65-403a-a7ff-60f61d5074f8": "Comidas",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);