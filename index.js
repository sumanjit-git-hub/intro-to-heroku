Sfdc.canvas(function() {
  // Save the token
  Sfdc.canvas.oauth.token(window.signedRequestJson.oauthToken);
  Sfdc.canvas.byId('username').innerHTML = window.signedRequestJson.context.user.fullName;
});