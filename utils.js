var UtilsDynamicValue = function() {

  this.evaluate = function(context) {
    var array = [];
    if (this.name == "slice") {
      if(this.input){
       if (this.slice){
          return this.input.slice(this.slice.split(',')[0], this.slice.split(',')[1]);
       }
       else {
        return this.input;
       }
      }
    }
    else {
    }
  };
  this.title = function() {
    return "Utils";
  };

};

UtilsDynamicValue.identifier = "com.seaify.utils";
UtilsDynamicValue.title = "utils";
UtilsDynamicValue.inputs = [
  DynamicValueInput("name", "Utils", "Select", {
    "choices": { "slice": "slice"}
  }),
  DynamicValueInput("input", "Input", "String"),
  DynamicValueInput("slice", "Slice(like 0,2)", "String"),
    ];

registerDynamicValueClass(UtilsDynamicValue);
