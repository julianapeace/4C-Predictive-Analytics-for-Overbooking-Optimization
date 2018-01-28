$( document ).ready(function() {
    console.log( "ready!" );
    $("#apps_list").hide();
    $("#profile").hide();
    $("#graph").hide();
});

$("#appsList").click(function(){
  $("#apps_list").toggle("slow", function(){

  });
})

$("#profile_button").click(function(){
  $("#profile").toggle("slow", function(){

  });
})

const mainURI = "http://localhost:8000/";
const graphURI = "http://localhost:8000/graph"

// viewDidLoad();

window.onload = function() {

  var code = getParameterByName('code');

  if (code) {
    console.log("This is CODE", code);
    //display graph
    var tokenURLStr = "https://europewest-sso-sandbox.snapshot.technology/oauth/token";
    var paramsDict = { "grant_type": "authorization_code", "client_id": "9654fdd7-e52e-4a8d-adcf-554d3f628b5c", "client_secret": "e29f5a9c-0f5d-4447-9595-b35bb0df202e", "code": code, "redirect_uri": mainURI };

    httpPost(tokenURLStr, paramsDict);
  }
  else {
    console.log('You got nothing')
    return;
  }

}

// function viewDidLoad() {
//   var code = getParameterByName('code');
//   if (code) {
//     console.log("This is CODE", code);
//     //display graph
//     var tokenURLStr = "https://europewest-sso-sandbox.snapshot.technology/oauth/token";
//     var paramsDict = { "grant_type": "authorization_code", "client_id": "9654fdd7-e52e-4a8d-adcf-554d3f628b5c", "client_secret": "e29f5a9c-0f5d-4447-9595-b35bb0df202e", "code": code, "redirect_uri": mainURI };
//
//     console.log(paramsDict)
//     var printThis = httpPost(tokenURLStr, paramsDict);
//
//   }
//   else {
//     console.log('You got nothing')
//     return;
//   }
// }

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function logginButtonClicked() {
  // main url
  var mainUrlStr = "https://europewest-sso-sandbox.snapshot.technology/oauth/auth?";

  // client id
  var clientIdStr = "client_id=9654fdd7-e52e-4a8d-adcf-554d3f628b5c";

  // URI
  var redirectUrl = graphURI;
  var redirectUri = redirectUrl; //encodeURIComponent(redirectUrl);
  var redirectUriStr = "&redirect_uri=".concat(redirectUri);

  var httpGetUrl = mainUrlStr.concat(clientIdStr, redirectUriStr, "&response_type=code");

  // var obtainedAuthorizationCode = httpGet(httpGetUrl);
  window.location.href = httpGetUrl;
  console.log('banana!!!')
  // console.log(obtainedAuthorizationCode)
}

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

function httpPost(path, params) {

  $.ajax({
    type: "POST",
    url: path,
    data: params,
    success:function(response){
        $("#graph").show();

      var ACCESS_TOKEN = response['access_token'];

      // var appsListEl = document.querySelector('#appsList');
      // var appsList = new Snapshot.NavbarAppsList(appsListEl);
      // appsList.accessToken = ACCESS_TOKEN;
      // console.log(appsList)

      var titleEl = document.querySelector('#title');
      var title = new Snapshot.NavbarTitle(titleEl);
      title.styles.backgroundColor = '#616161';
      title.title = "4C";

      var profileMenuEl = document.querySelector('#profileMenu');
      var profileMenu = new Snapshot.NavbarProfileMenu(profileMenuEl);
      profileMenu.accessToken = ACCESS_TOKEN;
      console.log(profileMenu)

      profileMenu.on(Snapshot.Events.LINK, function(link){ alert(link); });
      profileMenu.on(Snapshot.Events.LOGOUT, function(){ alert('logout'); });
      profileMenu.on(Snapshot.Events.PROFILE, function(){ alert('profile'); });

      profileMenu.customLinks = [{
         displayName: 'internal',
         url: '/internal1',
         preventRedirect: true,
         iconUrl: 'static/img/background.jpg'
       },
       {
         displayName: 'internal',
         url: 'http://www.snapshot.travel/link1',
         preventRedirect: true
       },
       {
         displayName: 'external',
         url: 'http://www.snapshot.travel/link2'
       },
       {
         displayName: 'calculator',
         url: 'http://localhost:8000/calculator'
       }
     ]

    },
    dataType: 'json',
  });

}

function sendMessageToFabric() {
   var sendStr = "Hey Guys! Checkout OBC!  📈 https://tinyurl.com/ybk6y6qh"
   // var sendStr = "Hey Guys! Checkout OBC!  📈 \n \n https://prd-p-jcm43kk47qq8.cloud.splunk.com/en-US/embed?s=%2FservicesNS%2Frarsan%2Fsearch%2Fsaved%2Fsearches%2FOccupancy%2520%2526%2520Bookings%2520Report&oid=wSS%5Eh4jtIgH2mGwH7dPDIIkwgqwDuDCGcRVEm1nDwKMw%5EXlQjYmhLkByA9CtRsdoOxAAgbglGIAZz5Rh9KBhRh4bj0r0krYHD2aYRmwZx4w8dHJ87PvwAskc9tQJdvlSFQYK0HcJwv37NBx%5EeVMB1Uwpd2R";

   var path = "https://europewest-api-sandbox.snapshot.technology/oauth/token";

   var params = {
   "grant_type" : "password",
   "username" : "paulgreen@creativechef.com",
   "password" : "KmcTkn9j",
   "client_id" : "9654fdd7-e52e-4a8d-adcf-554d3f628b5c",
   "client_secret" : "e29f5a9c-0f5d-4447-9595-b35bb0df202e"
   };

   $.ajax({
       type: "POST",
       url: path,
       data: params,
       success:function(response){

         var ACCESS_TOKEN = response['access_token'];

           console.log("acc token: ", ACCESS_TOKEN);

           $.ajax({
               type: "POST",
               url: 'https://fabric-sandbox.snapshot.travel/api/messages',
               data: '{"text":"' + sendStr + '","recipient_id":"5a6d03ff97ac8e128019a809","recipient_type":2}',
               headers: {
                  'Authorization': 'Bearer ' + ACCESS_TOKEN,
                  'Content-Type': 'application/json'
               },
               success: success,
               dataType: 'json'
           });
       },
       dataType: 'json',
   });

}

function success() {
 console.log("success");
}
