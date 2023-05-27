
function initGoogleSignIn() {
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: '656127705539-56v2mlo8fa7bgc6d5aumkm6bb6jciq94.apps.googleusercontent.com'
    });
  });
}
function onSignInChanged(isSignedIn) {
  if (isSignedIn) {
    var user = gapi.auth2.getAuthInstance().currentUser.get();
    var profile = user.getBasicProfile();
    var profileInfo = document.getElementById('profile-info');
    profileInfo.innerHTML = 'Logged in as: ' + profile.getName();
  } else {
    var profileInfo = document.getElementById('profile-info');
    profileInfo.innerHTML = '';
  }
}