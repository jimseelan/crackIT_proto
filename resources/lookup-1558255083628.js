(function(window, undefined) {
  var dictionary = {
    "b83bd191-ad16-43da-926b-73bb49c5ce0c": "QuizTime",
    "ef8a244f-279d-40eb-978b-135b9b3ca974": "Analyse",
    "12f95033-51c0-4a0b-bb64-c80c715ca252": "Error screen",
    "fef5a022-8fac-4c83-ab6b-eeebb86b140b": "View_Qn",
    "f6efe305-a047-44b6-a8af-5c1bb1e434f0": "Create_New_Qn",
    "cadcdbd5-d639-4865-b840-0c142b724760": "Dash Board",
    "1432c19d-c891-4d09-9d9e-a0e9b91f9494": "login screen",
    "8a4897e9-b064-4cfa-b08e-6f61f2d8ba02": "Splash screen",
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