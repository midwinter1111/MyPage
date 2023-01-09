// JSONファイルをローカルで読み込むとCORSエラーとなるためJSファイルで読み込む
const CLIENT_ID = "530044901755-rgku6knr9bp4f012duv0g0i6492qr8o1.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const GRANT_TYPE = "refresh_token";
const REFRESH_TOKEN = "1//0eWJIpI5kAfTECgYIARAAGA4SNwF-L9Ir8DMztPSo8UQM1A7mFvZgBPVN7-1PPS4IFyzwz23iwVjyLiPPxqaBuAwjN0yWDJoOx0M"; // 90日で失効するため手動更新が必要