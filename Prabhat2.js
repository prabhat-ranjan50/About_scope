var message = "This message is in global";
console.log("Global : message =  "+ message);

var a = function ()
{
    var message = "This message is in Function a ";
    console.log(" Message in Function a =" + message);
    b();


}
var b  = function()
{
    console.log("Message in Function b = " + message );

}
a();