document.addEventListener('DOMContentLoaded',function(){
	var reg_btn = document.getElementById('reg_btn');
	reg_btn.onmouseenter=function(){
		reg_btn.style.backgroundColor = '#c00';
		// #DC2E2E;
	}
	reg_btn.onmouseleave=function(){
		reg_btn.style.backgroundColor = '#DC2E2E';


	}

	var check_pho = document.getElementById('check-phonenum');
	var righttip = document.getElementsByClassName('right-tip')[0];
	var uselessnum = document.getElementsByClassName('uselessnum')[0];
	var hadnum = document.getElementsByClassName('hadnum')[0];
	var wrongtip = document.getElementsByClassName('wrong-tip')[0];
	

	check_pho.onblur=function(){
		console.log(777);
		wrongtip.style.display = 'none';
		var phonenum= check_pho.value;
		if(!/^1[34578]\d{9}$/.test(phonenum)){
			console.log('手机号不合法');
			uselessnum.style.display = 'block';
			return false;
		}
		else{
		// 建立ajax请求
			// 把用户名发送到服务器进行验证
			var xhr = new XMLHttpRequest();

			//处理数据
			xhr.onreadystatechange = ()=>{

				if(xhr.readyState === 4 && xhr.status === 200){
					var res = xhr.responseText;
					// console.log(res)
					if(res === 'no'){
						console.log('已存在，不通过');
						uselessnum.style.display = 'none';
						hadnum.style.display = 'block';
						righttip.style.display = 'none';
						

					}else if(res === 'yes'){
						console.log('通过');
						uselessnum.style.display = 'none';
						hadnum.style.display = 'none';

						righttip.style.display = 'block';
					}
				}
			}

			// get请求如何传递参数
			// 在api地址后添加
			xhr.open('get','http://localhost/project/api/checkphonum.php?regname='+phonenum,true);

			xhr.send();
			}
	}

	var check_picyanzhengma = document.getElementById('check-picyanzhengma');
	check_picyanzhengma.onblur=function(){
		// console.log(777);
		var picyanzhengma= check_picyanzhengma.value;
		if(!(picyanzhengma==='12345')){
			console.log('图片验证码输入错误');
			return false;
		}
	}

	var check_phoneyanzhengma = document.getElementById('check-phoneyanzhengma');
	check_phoneyanzhengma.onblur=function(){
		// console.log(777);
		var phoneyanzhengma= check_phoneyanzhengma.value;
		if(!(phoneyanzhengma==='12345')){
			console.log('手机验证码输入错误');
			return false;
		}
	}

	var check_password = document.getElementById('check-password');
	var _psw= '';
	var psw_righttip = document.getElementsByClassName('psw_righttip')[0];
	var psw_wrongtip = document.getElementsByClassName('psw_wrongtip')[0];
	check_password.onblur=function(){
		// console.log(777);
		_psw= check_password.value;
		
		if(!/^\w{6,16}$/.test(_psw)){
			console.log('你输入的密码不合法');
			psw_wrongtip.style.display = 'block';
			return false;
		}
		else{
			psw_wrongtip.style.display = 'none';
			psw_righttip.style.display = 'block';


		}
	}

	var confirm_password = document.getElementById('confirm-password');
	var conpsw_righttip = document.getElementsByClassName('conpsw_righttip')[0];
	var conpsw_wrongtip = document.getElementsByClassName('conpsw_wrongtip')[0];
	
	confirm_password.onblur=function(){
		// console.log(777);
		var confirm_psw= confirm_password.value;
		if(!(confirm_psw===_psw)){
			console.log('两次密码输入不一致');
			conpsw_wrongtip.style.display = 'block';

			return false;
		}
		else{
			conpsw_wrongtip.style.display = 'none';
			conpsw_righttip.style.display = 'block';


		}
	}

	reg_btn.onclick=function(){
		alert('注册成功')
	}


})