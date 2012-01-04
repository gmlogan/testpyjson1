Ti.UI.backgroundColor = '#dddddd';
 

var win = Ti.UI.createWindow();
var table = Ti.UI.createTableView();
var tableData = [];
var json, boatdata, i, row, boatLabel, pyLabel;
 

 var fileName = 'py.json';
var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileName);
 
if (file.exists()) {
  var dataSrc = Ti.Platform.osname==='android'? ''+file.read():file.read();
  json = JSON.parse(dataSrc); 
}

 

    for (i = 0; i < json.pydata.length; i++) {
        boatdata= json.pydata[i];
        row = Ti.UI.createTableViewRow({
            height:'60dp'
        });
        boatLabel = Ti.UI.createLabel({
            text:boatdata.name,
            font:{
                fontSize:'16dp',
            fontWeight:'bold'
        },
        height:'auto',
        left:'10dp',
        //top:'5dp',
        color:'#000',
        touchEnabled:false
        });
        pyLabel = Ti.UI.createLabel({
        text:boatdata.py,
        font:{
            fontSize:'16dp'
        },
        height:'auto',
        right:'15dp',
        //bottom:'5dp',
        color:'#000',
        touchEnabled:false
        });
 
        row.add(boatLabel);
        row.add(pyLabel);
        tableData.push(row);
        }
 
    table.setData(tableData);
    //},

win.add(table);
win.open();
var tempRowHolder;
table.addEventListener('click',function(e){
	//tempRowHolder.children[?] ? depends on table design.
	//in this case
	// 1 = boatLabel; 2= pyLabel
	tempRowHolder = e.row;
	tempRowHolder.children[1].text = parseInt(tempRowHolder.children[1].text,10)+1;
})
// Get a reference to the current activity first.
var activity = Ti.Android.currentActivity;
 
activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
    var menuItem = menu.add({ title: "Race Time" });     
        menuItem.addEventListener("click", function(e) {
        // Code to be triggered by pressing the button goes here. 
        Titanium.UI.createAlertDialog({title:'Table View',message:"Got Here"}).show();
//} 
    });
    var menuItem = menu.add({ title: "Favs" });     
        menuItem.addEventListener("click", function(e) {
        // Code to be triggered by pressing the button goes here.
    });
   }
