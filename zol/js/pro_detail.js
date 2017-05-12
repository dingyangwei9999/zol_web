require(['config'],function(){
	require(['jquery','rightside'],function(){
		require(['gdszoom','lazyload','common'],function(){

	$('.top').load('../html/topbar.html');
	$('.footer_guide').load('../html/footer_guide.html');
	$('.footer_nav').load('../html/footer_nav.html');
	$('header').load('../html/header.html');
	$('.rightside-box').load('../html/rightside.html', function(){

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
	$(function(){

		// 一级菜单的出现与隐藏
		$('.fenlei').on('mouseover',function(){
			// console.log(43432434);
			$('.category-nav').show();
		})

		$('.category-nav').on('mouseleave',function(){
			// console.log(43432434);
			$('.category-nav').hide();
		})

		// 二级菜单的出现与隐藏
		$('.pro-type').on('mouseenter','li',function(){
			// console.log(43432434);
			$(this).find('.pro-content').show();
		})

		$('.pro-type').on('mouseleave','li',function(){
			// console.log(43432434);
			$(this).find('.pro-content').hide();
		})





		// 放大镜插件

		$('.zoom').gdszoom({
				position:'right',
			});

		$('.small-list').on('click','img',function(){
			$('.zoom img').attr({
				src:this.src,
				'data-big':this.src
			});
		})

		// 选择商品列表图片边框变红
		$('.propic-list').on('click','li',function(){
			// 获取索引值
			var idx = $(this).index();
			// tab高亮
			$(this).addClass('redline').siblings().removeClass('redline');
		});

		// 选择商品详情title边框变红
		$('.detail-title').on('mouseenter','li',function(){
			// 获取索引值
			var idx = $(this).index();
			// tab高亮
			$(this).addClass('pick-title').siblings().removeClass('pick-title');
		});

		// 懒加载
		// 
		$('.pro-introduce').find('img').lazyload({effect: "fadeIn"});


		//商品数量 按键 增 减
		
		// num-decrease
		$('.num-increase').click(function(){
			// console.log(43432434);
			$('#goods-number').val(function(n,c){
				return Number(c)+1;
			});
		})
		$('.num-decrease').click(function(){
			// console.log(43432434);
			$('#goods-number').val(function(n,c){
				if (Number(c)>1) {
				return Number(c)-1;
				}
				else{
					return 1;
				}
			});
		})
		$('.add-car').click(function(){
			$('.buytip-window').show();
			$('#goods_qua').text($('#goods-number').val());
			var pro_price = (Number($('#pricetag').text())) *( Number($('#goods-number').val()));
			$('#total_price').text(pro_price);

		})
		$('#btn_close').click(function(){
			$('.buytip-window').hide();
			// console.log(43432434)
		})


		// 获取页面元素
		var proinfo = document.getElementsByClassName('proinfo')[0];

		// 保存购物车所有商品信息
		// 获取原cookie中的值
		

		



		$('.add-car').click(function(){
			$('.buytip-window').show();
			$('#goods_qua').text($('#goods-number').val());

			var carlist = getCookie('carlist');

			carlist = carlist ? JSON.parse(carlist) : [];

			var pricetag =  Number($('#pricetag').text());
			var qty = Number($('#goods-number').val());
			// var pro_price = (Number($('#pricetag').text())) *( Number($('#goods-number').val()));
			var pro_price = pricetag * qty;
			$('#total_price').text(pro_price);


			// 点击按钮添加

				// 线获取当前li
				var currentpro =document.getElementsByClassName('proinfo')[0];
				var pricetag =document.getElementById('pricetag');

				// 点击添加按钮时，是添加还是修改数量
				var currentGUID = currentpro.getAttribute('data-guid');

				// cookie中是否存在当前商品
				var hasGoods = false;
				// if(currentpro.guid === currentGUID){
				// // 		hasGoods = true;

				// 		// 如果当前商品已经存在cookie中，则商品数量+1
				// 		carlist[i].qty++;
				// 		break;
				// }
				if (carlist.length>0) {
					hasGoods = true;
					carlist[0].pro_qty+=qty;
				}

				// else if(carlist.length ==0){
					// if (carlist.length ==0) {
				if(!hasGoods){
					var goods = {
						guid:currentGUID,
						name:currentpro.children[0].innerText,
						price:pricetag.innerText,
						imgurl:currentpro.children[1].src,
						pro_qty:qty
					};

					// 把当前商品信息写入carlist
					carlist.push(goods);
					// console.log(carlist);
				}
				

				setCookie('carlist',JSON.stringify(carlist));


			})






	});
	});

});
	
});


