var url = (window.location != window.parent.location) ? document.referrer: document.location;
var subUrl = url.substring(0,url.lastIndexOf("./"));

function sethelp(x){
if (x==1){
document.getElementById("addhelp").innerHTML = "Add your site's address only, eg: 1ZeroeuDnL2jNS6t1epQa1SPvC91KG8ER<br>Do not add .bit domains in here.";
}
if (x==2){
document.getElementById("addhelp").innerHTML = "Add the name others should see when they find your site, eg: ZeroSearch.";
}
if (x==3){
document.getElementById("addhelp").innerHTML = "Add tags relevant to your site's content, separated by commas, eg: blog, videos, nsfw, images, social, etc. ";
}
}

randsearch = ["club","pop","rock","weed","torrent","show"];


function add(){
document.getElementById("addbox").style.display = "block";
document.getElementById("main").style.display = "none";
}
function addless(){
document.getElementById("addbox").style.display = "none";
document.getElementById("main").style.display = "block";
}

function addsend(){
//document.getElementById("addhelp").innerHTML = "Button not currently working, please post your site <a href='http://127.0.0.1:43110/1TaLkFrMwvbNsooF4ioKAY9EuxTBTjipT/?Topic:6_1PNyuY1iZqXBpft4ArouqcnE4pNRGYij5i/Add+sites+to+ZeroSearch+here'>here</a>";
//return false;
Page.setMsg();
Page.sendMessage();
}

/*
if(top!=window){
window.top.location.href = "http://127.0.0.1:43110/media/1ZeroeuDnL2jNS6t1epQa1SPvC91KG8ER/index.html"; 
}*/

<!-- Second Block -->

function shuffle(array) {
  /*var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }*/
  return array;
}


var first = 0;
var datau;
var data = [];
var xmlhttp;
if (window.XMLHttpRequest)
  {
  xmlhttp=new XMLHttpRequest();
  }
else
  {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    datau=xmlhttp.responseText.split("\n");
    }
  }
xmlhttp.open("GET","data-local.dat",false);
xmlhttp.send();

for (var i=0; i<datau.length; i++) {
var a=datau[i].split(":");
data.push(a[0]);
data.push(a[1]);
}

function desort(obj) {
    var keys = []; for(var key in obj) keys.push(key);
    return keys.sort(function(a,b){return obj[b]-obj[a]});
}

function search(){
    document.getElementById("topics").style.display = "none";
    //datau=shuffle(datau);

    data = []; 
    for (var i=0; i<datau.length; i++) {
        var a=datau[i].split(":");
        data.push(a[0]);
        data.push(a[1]);
    }
    document.getElementById("results").innerHTML="";

    points = {};
    document.getElementById("results").innerHTML="";
    document.getElementById("results").style.display="block";
    if(first == 0) { document.getElementById("start").id = "oldstart";document.getElementById("curindex").style.display="none"; first=1;}
    var sra = document.getElementById("sr").value.toLowerCase().split(" ");
    for (var f=0;f<sra.length;f++){
    var sr = sra[f];
    for (var i=0;i<data.length; i=i+2) {
    if(data[i].toLowerCase().indexOf(sr) > -1){
    if(data[i+1].toLowerCase() in points){
    points[data[i] + ":" + data[i+1]]+=1;}
    else{ 
    points[data[i] + ":" + data[i+1]]=1;
    }
    }
    }
}
for(var i=0;i<desort(points).length;i++){
var e = desort(points)[i].split(":");
var name = e[0].split("=")[0];//.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}).split("[")[0];
if (e[0].indexOf("nsfw")>-1) name = name + "<span style='color:red;'><b> (NSFW) </b> </span>"
var tags = e[0].split("#")[1];
var description = e[0].split("=")[1]
if(tags === undefined) tags = "No tags set";

<!-- Print out search results -->

 document.getElementById("results").innerHTML+="<div style='float: top; height: 50px;'><div style='float: top; height: 25px;><div style='float:left; width:200px'><div class='icon icon-topic-chat' style='opacity: 0.25'></div></div><div style='font-size: 19px; font-weight: bold; float:left; width:400px; margin-left: 200px;'><a href='" + subUrl + '?Topic:' + e[1] + "' target='_top'>" + name + '</a></div>' + description + "</div></div><p>&nbsp;</p>"; 
 if(i==150){break;} //It has to stop somewhere
 }
 
 
 
if(document.getElementById("results").innerHTML==""){document.getElementById("results").innerHTML="<center> No results found </center>";}
}

function randomsearch(){
document.getElementById("sr").value = randsearch[Math.floor(Math.random() * randsearch.length)];
search()
}