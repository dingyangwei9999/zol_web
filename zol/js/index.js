require(['config'],function(){
	require(['jquery','rightside','xSlider'],function(){
		require(['lazyload'],function(){
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

		// 二级菜单的出现与隐藏
		$('.pro-type').on('mouseenter','li',function(){
			// console.log(43432434);
			$(this).find('.pro-content').show();
		})

		$('.pro-type').on('mouseleave','li',function(){
			// console.log(43432434);
			$(this).find('.pro-content').hide();
		})




		//中间1F的tab标签切换
		var $tab_list = $('.tab-list');
		var $content = $('.computer-content');
		// var $title = $tab.children('.title');

		// 显示第一张
		$content.first('li').show();
		// 高亮第一个tab
		$tab_list.first('li').addClass('cur');

		// 绑定事件
		$tab_list.on('mouseover','li',function(){
			// 获取索引值
			var idx = $(this).index();

			// tab高亮
			$(this).addClass('cur').siblings().removeClass('cur');


			// 图片切换
			// $content.children().hide().eq(idx).show();
			// $content.children().hide().eq(idx).fadeIn(600);
			$content.children().hide().eq(idx).show();
		});

        	
        //热卖商品的换一批
		var $hotsell_list = $('.hot-sell-list');
		var num=0;

		// $hotsell_list.first('div').show();
		$('.change-onther').click(function(){
			$hotsell_list.children().hide();
			num+=1;
			if (num>2) {
				num=0;
			}
			$hotsell_list.children().eq(num).show();


		})

		// 懒加载
		$('.computer-left').find('img').lazyload({effect: "fadeIn"});
		$('.hot-ul').find('img').lazyload({effect: "fadeIn"});
		$('.brand-bar').find('img').lazyload({effect: "fadeIn"});
		$('.hot-sell-listdiv').find('img').lazyload({effect: "fadeIn"});
		$('.com-lunbo').find('img').lazyload({effect: "fadeIn"});


	});
	});
	});
	
});


