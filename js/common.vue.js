var loginPage = new Vue({
    el: "#loginContainer",
    data: {
        loginphoneNo: '',
        otpClicked: false
    },
    methods: {
        sendOTPFunc: function(){
            this.otpClicked = true;
            if(this.loginphoneNo){

            }else{
                this.$refs.phoneNumber.focus();
            }
        }
    }
});