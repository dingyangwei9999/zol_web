require(['config'],function(){
	require(['jquery'],function(){
	$(function(){
		$('#login_btn').on('mouseover',function(){
			$('#login_btn').css("background-color",'#c00');


			// 
		})
		$('#login_btn').on('mouseout',function(){
			$('#login_btn').css("background-color",'#DC2E2E');

		})


		$('#login_btn').click(function(){
	        $.post('login.php',{
	          email: $('#email').val(),
	          password: $('#password').val()
	        }, function(response){
	          var $obj = eval('(' + response + ')');
	          if($obj.state){
	            // window.location.href = 'index.php';
	            // $.alert
	            alert('登录成功');
	            
	          } else {
	            // $.alert
	            alert('登录失败');
	          }
	        })        
     	})








	});
	});
	
});


