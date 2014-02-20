*This repository is a mirror of the [component](http://component.io) module [shaunxcode/marquee](http://github.com/shaunxcode/marquee). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/shaunxcode-marquee`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
marquee
=======

marquee selection component. 

##Arity
```
marquee(
	surface [selector for element where selection takes palce], 
	selectable [selector for selectable items], 
	selectedClass [class to apply to items as they are selected])
```

##Using
```
var marquee = require("marquee");
marquee("body", "> .widget", "lit")
    .on("itemsSelected", function(items) {
        console.log(items);
});
```

emits "itemsSelected" event with jquery object containing selected items. 
