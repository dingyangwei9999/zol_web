require(['config'],function(){
	require(['jquery','common'],function(){

	$('.top').load('../html/topbar.html');
	$('.footer_guide').load('../html/footer_guide.html');
	$('.footer_nav').load('../html/footer_nav.html');
	$('header').load('../html/header.html');
	
	$(function(){

			/*
				1）获取cookie
				2）把cookie中的商品信息写入#carList
				3）计算总价
				4）清空购物车
					清除cookie
			 */
			var carList = $('#carList');
			var btnClear = $('#btnClear');
			var subPrice =$('.subPrice_price')

			// 1）获取cookie
			var goodslist = getCookie('carlist');

			// 把json字符串转换成js对象
			goodslist = goodslist ? JSON.parse(goodslist) : [];

			// 2）把cookie中的商品信息写入#carList
			var ul = document.createElement('ul');

			// 总价
			var totalPrice = 0;

			ul.innerHTML = goodslist.map(function(item){
				totalPrice += item.price * item.qty;

				return '<li data-guid="'+item.guid+'"><span class="btn-close">&times;</span><img src="'+item.imgurl+'"><h4>'+item.name+'</h4><p class="price">'+item.price+'</p><p class="quantity">'+item.pro_qty+'</p></li>';
			}).join('');



			// 把ul写入#carList
			carList.append(ul);
			var totalprice = (Number($('.price').text())) *( Number($('.quantity').text()));
			$('em').text('¥'+totalprice);
			// console.log(totalprice)
			// // 写入总价
			// subPrice.innerHTML = totalPrice.toFixed(2);

			$('#btnClear').click(function(){
				removeCookie('carlist');
				location.reload();
			})

			// 清空购物车


			// 删除单个商品
			// 移除DOM节点
			// 清除cookie中对应的商品信息
			// carList.onclick = function(e){
			// 	e = e || window.event;
			// 	var target = e.target || e.srcElement;

			// 	if(target.className === 'btn-close'){
			// 		var currentLi = target.parentNode;
			// 		var currentGUID = currentLi.getAttribute('data-guid');

			// 		// 移除DOM节点
			// 		currentLi.parentNode.removeChild(currentLi);

			// 		// 清除cookie中对应的商品信息
			// 		for(var i=0;i<goodslist.length;i++){
			// 			if(goodslist[i].guid === currentGUID){
			// 				goodslist.splice(i,1);
			// 				break;
			// 			}
			// 		}

			// 		// 删除后重写cookie
			// 		setCookie('carlist',JSON.stringify(goodslist));
			// 	}
			// }





	});

});
	
});


