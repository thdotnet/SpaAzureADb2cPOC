const accounts = myMSALObj.getAllAccounts();

if (accounts.length < 0) {
  myMSALObj.loginRedirect(loginRequest);
}
