// Google Sign-In 클라이언트 ID
const CLIENT_ID = '517457724079-f78ii2ijbg654105i1a3k45g62jd4k29.apps.googleusercontent.com';

// 사용자가 로그인 버튼을 클릭했을 때 호출되는 함수
function onSignIn(googleUser) {
  // GoogleUser 객체에서 인증 정보를 가져옴
  const idToken = googleUser.getAuthResponse().id_token;
  
  // 서버로 idToken을 전송하여 검증 및 사용자 정보 가져오기
  // 이 부분은 서버 측에서 처리해야 합니다.
  // 서버에서는 idToken을 검증하고, 필요한 사용자 정보를 가져와 세션 등의 처리를 수행합니다.
  // 필요한 정보를 가져온 후, 로그인 상태를 유지하기 위해 쿠키나 세션 등에 저장할 수 있습니다.
  
  // 예시: 콘솔에 사용자 정보 출력
  const profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}

// 구글 로그인 API 초기화
function initGoogleSignIn() {
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: CLIENT_ID
    }).then(function() {
      // 초기화가 완료되면 로그인 버튼을 활성화
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.attachClickHandler('google-signin-button', {}, onSignIn, function(error) {
        console.error('구글 로그인 실패: ' + error);
      });
    });
  });
}/**
 * 
 */