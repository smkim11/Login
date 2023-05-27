function handleCredentialResponse(response) {
  var responsePayload = response.credential;

  console.log(responsePayload);
}

function handleError(error) {
  console.error(error);
}

window.onload = function() {
  google.accounts.id.initialize({
    client_id: '656127705539-56v2mlo8fa7bgc6d5aumkm6bb6jciq94.apps.googleusercontent.com',
    callback: handleCredentialResponse,
    cancel_on_tap_outside: false,
    prompt_parent_id: 'g_id_onload',
    prompt_id: 'g_id_signin',
    auto_select: false,
    ux_mode: 'popup'
  });

  google.accounts.id.prompt(notification => {
    if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
      console.log('로그인 프롬프트를 건너뛰었습니다.');
    }
  });
};