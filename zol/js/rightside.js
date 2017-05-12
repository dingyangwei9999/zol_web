// require(['config'],function(){
	require(['common'],function(){

	$(function(){

			/*
				1）获取cookie
				2）把cookie中的商品信息写入#carList
				3）计算总价
				4）清空购物车
					清除cookie
			 */
			// var carList = $('#carList');
			// var btnClear = $('#btnClear');
			// var subPrice =$('.subPrice_price')

			// 1）获取cookie
			var goodslist = getCookie('carlist');

			// 把json字符串转换成js对象
			goodslist = goodslist ? JSON.parse(goodslist) : [];
			console.log('我是侧边栏的JS');
			// 2）把cookie中的商品信息写入#carList
			// var ul = document.createElement('ul');

			// 总价
			// var totalPrice = 0;

			// ul.innerHTML = goodslist.map(function(item){
			// 	totalPrice += item.price * item.qty;

			// 	return '<li data-guid="'+item.guid+'"><span class="btn-close">&times;</span><img src="'+item.imgurl+'"><h4>'+item.name+'</h4><p class="price">'+item.price+'</p><p class="quantity">'+item.pro_qty+'</p></li>';
			// }).join('');
			
			if (!$(goodslist).attr('guid')) {
				$('.product_content').hide();
			}


			$('.rs_pro_name').text($(goodslist).attr('name'));
			$('.rs_pro_pic').find('img').attr('src',$(goodslist).attr('imgurl'));
			$('.rs_pro_num').text('x'+$(goodslist).attr('pro_qty'));
			
			$('.rs_pro_price').text($(goodslist).attr('price'));
			$('.rs_totalprice').text('¥'+Number($(goodslist).attr('price'))*Number($(goodslist).attr('pro_qty')));

			$('.gouwuche').click(function(){

				$('.rightside_main').show();
			})

			$('.rightside_close').click(function(){
				$('.rightside_main').hide();
			})




	});

});
	
// });


