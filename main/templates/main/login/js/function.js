console.log(page_information.sign);
function tip(sign){
// 提示性信息
    if(sign=='error'){
        //账号信息错误
        //alert('账号密码错误，请核对后登录');
        console.log(sign);
    }
    else{
        //游客
        //alert('欢迎你新用户');
        console.log(sign);
    }

}

tip(page_information.sign);