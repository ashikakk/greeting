(function($) {
	$.fn.extend({
		eCard: function(options) {
			var defaults = {
				fullscreenButton: true,
				soundButton: true,
				soundAutoPlay: true,
				soundLoop: true,
				soundVolume: .8,
				treeBottom: 200,
				snow_count: 80,
				b_rotate: true,
				m_rotate: true,
				b_speed_rotate: 3,
				m_speed_rotate: 2,
				particle_b_type: 3,
				particle_m_type: 'all',
				b_color: '#1076e8',
				m_color: '#1076e8',
				treeColor: 'fullcolor',
				b_randomeColor: true,
				m_randomeColor: true,
				scaleBigStar: 6,
				scaleStar: 1.4,
				messageShow: 1000,
				treeShow: 4500	
			};
			options = $.extend(defaults, options);
			return this.each(function() {
				var o = options;
				var i = 0;
				var canvas = document.getElementById('canvas');
				paper.setup(canvas);
				
				var star_1 = new paper.Path([
				[[19, 0], [0, 0], [0, 0]],
				[[26.7, 9.5], [0, 0], [0, 0]],
				[[38, 13.8], [0, 0], [0, 0]],
				[[31.4, 24], [0, 0], [0, 0]],
				[[30.8, 36.2], [0, 0], [0, 0]],
				[[19, 33], [0, 0], [0, 0]],
				[[7.3, 36.2], [0, 0], [0, 0]],
				[[6.7, 24], [0, 0], [0, 0]],
				[[0, 13.8], [0, 0], [0, 0]],
				[[11.4, 9.5], [0, 0], [0, 0]]]);
				star_1.closed = true;
				star_1.fillColor = o.b_color;
				star_1.scale(.3);

				var star_2 = new paper.Path([
				[[72, 58], [0, 0], [0, 0]],
				[[57.3, 58], [0, 0], [0, 0]],
				[[64.7, 45.3], [0, 0], [0, 0]],
				[[60.3, 42.8], [0, 0], [0, 0]],
				[[53, 55.5], [0, 0], [0, 0]],
				[[45.7, 42.8], [0, 0], [0, 0]],
				[[41.3, 45.3], [0, 0], [0, 0]],
				[[48.7, 58], [0, 0], [0, 0]],
				[[34, 58], [0, 0], [0, 0]],
				[[34, 63], [0, 0], [0, 0]],
				[[48.7, 63], [0, 0], [0, 0]],
				[[41.3, 75.7], [0, 0], [0, 0]],
				[[45.7, 78.2], [0, 0], [0, 0]],
				[[53, 65.5], [0, 0], [0, 0]],
				[[60.3, 78.2], [0, 0], [0, 0]],
				[[64.7, 75.7], [0, 0], [0, 0]],
				[[57.3, 63], [0, 0], [0, 0]],
				[[72, 63], [0, 0], [0, 0]]]);
				star_2.closed = true;
				star_2.fillColor = o.b_color;
				star_2.scale(.3);

				var star_3 = new paper.Path([
				[[53.8, 42.8], [0, 0], [0, 0]],
				[[58.5, 56.2], [0, 0], [0, 0]],
				[[72.7, 56.5], [0, 0], [0, 0]],
				[[61.3, 65.1], [0, 0], [0, 0]],
				[[65.5, 78.7], [0, 0], [0, 0]],
				[[53.8, 70.6], [0, 0], [0, 0]],
				[[42.1, 78.7], [0, 0], [0, 0]],
				[[46.2, 65.1], [0, 0], [0, 0]],
				[[34.9, 56.5], [0, 0], [0, 0]],
				[[49.1, 56.2], [0, 0], [0, 0]]]);
				star_3.closed = true;
				star_3.fillColor = o.b_color;
				star_3.scale(.3);

				var star_4 = new paper.Path([
				[[88.3, 42.8], [0, 0], [0, 0]],
				[[92.1, 55.1], [0, 0], [0, 0]],
				[[104.6, 52.2], [0, 0], [0, 0]],
				[[95.9, 61.6], [0, 0], [0, 0]],
				[[104.6, 71.1], [0, 0], [0, 0]],
				[[92.1, 68.2], [0, 0], [0, 0]],
				[[88.3, 80.5], [0, 0], [0, 0]],
				[[84.6, 68.2], [0, 0], [0, 0]],
				[[72, 71.1], [0, 0], [0, 0]],
				[[80.8, 61.6], [0, 0], [0, 0]],
				[[72, 52.2], [0, 0], [0, 0]],
				[[84.6, 55.1], [0, 0], [0, 0]]]);
				star_4.closed = true;
				star_4.fillColor = o.b_color;
				star_4.scale(.3);

				var star_5 = new paper.Path([
				[[154.5, 11.7], [5.7, 7.2], [-3.5, -4.4]],
				[[140.5, 5], [5.3, 0], [-4.1, 0]],
				[[128.9, 9], [3.4, -2.7], [-8.3, 6.6]],
				[[126, 36.2], [-6.6, -8.2], [0, 0]],
				[[128, 34.6], [0, 0], [-5.7, -7.1]],
				[[130.4, 11], [-7.2, 5.7], [6.6, -5.3]],
				[[152.5, 13.3], [-5.3, -6.7], [4.9, 6.1]],
				[[150.3, 33.6], [6.2, -4.9], [-5.7, 4.4]],
				[[131.6, 31.6], [4.5, 5.7], [-4, -5.2]],
				[[133.5, 14.5], [-5.3, 4], [4.7, -3.6]],
				[[148.9, 16.3], [-3.6, -4.8], [3.2, 4.2]],
				[[147.2, 30.1], [4.3, -3.2], [-3.7, 2.8]],
				[[135.1, 28.5], [2.8, 3.8], [-0.7, -1]],
				[[133.8, 25.3], [0.2, 1.1], [1, 1.9]],
				[[138.7, 28.9], [-2.2, -0.4], [2.1, 1.2]],
				[[145.6, 28.6], [-2.1, 1.4], [3.6, -2.4]],
				[[147.4, 17.9], [2.3, 3.4], [0, 0]],
				[[147.4, 17.9], [0, 0], [-2.8, -4]],
				[[135.1, 16.1], [3.8, -2.8], [-4.5, 3.2]],
				[[133.1, 30], [-3.2, -4.3], [3.7, 5]],
				[[148.7, 32.1], [-4.8, 3.6], [5.4, -4.1]],
				[[150.9, 14.8], [4, 5.3], [-4.5, -5.9]],
				[[132, 12.5], [5.8, -4.5], [-6.4, 4.9]],
				[[129.6, 33.1], [-4.9, -6.3], [5.4, 6.9]],
				[[151.9, 35.6], [-6.8, 5.3], [7.4, -5.8]]]);
				star_5.closed = true;
				star_5.fillColor = o.b_color;
				star_5.scale(.3);

				var star_6 = new paper.Path([
				[[42.4, 77.1], [0, 0], [0, 0]],
				[[32.5, 60], [0, 0], [0, 0]],
				[[42.4, 42.8], [0, 0], [0, 0]],
				[[62.2, 42.8], [0, 0], [0, 0]],
				[[72.1, 60], [0, 0], [0, 0]],
				[[62.2, 77.1], [0, 0], [0, 0]]]);
				star_6.closed = true;
				star_6.fillColor = o.b_color;
				star_6.scale(.3);

				var star_7 = new paper.Path.Circle(new paper.Point(0, 0), 5);
				star_7.closed = true;
				star_7.fillColor = o.b_color;

				var particle,
					particles;

				if(o.particle_b_type==2){
					particle = star_2;	
				}else if(o.particle_b_type==3){
					particle = star_3;	
				}else if(o.particle_b_type==4){
					particle = star_4;	
				}else if(o.particle_b_type==5){
					particle = star_5;	
				}else if(o.particle_b_type==6){
					particle = star_6;	
				}else if(o.particle_b_type==7){
					particle = star_7;	
				}else{
					particle = star_1;	
				}
				particle.opacity = 1;

				if(o.particle_m_type==2){
					particles = star_2;
				}else if(o.particle_m_type==3){
					particles = star_3;
				}else if(o.particle_m_type==4){
					particles = star_4;
				}else if(o.particle_m_type==5){
					particles = star_5;
				}else if(o.particle_m_type==6){
					particles = star_6;
				}else if(o.particle_m_type==7){
					particles = star_7;
				}else{
					particles = star_1;
				}

				var snowflake = [],
					path_tree = [],
					group_path = new paper.Group(),
					num=0;

				var m_box = new paper.Path.Rectangle([0,0], [1900,800]);
				group_path.addChild(m_box);
				group_path.addChild(particle);

				Center();
				for (i = 0; i < 20; i++) {
					var path_ = new paper.Path.Line(particle.position, new paper.Point(particle.position.x-o.treeBottom+(i+.5)*o.treeBottom/10, 100));
					path_tree[i] = new paper.Path();
					group_path.addChild(path_tree[i]);
					var ii_n = 15+Math.random()*5;
					var ii_n2 = 400/ii_n;
					var ii_d = -particle.position.x + path_.segments[1].point.x;

					path_.remove();

					for (var ii = 0; ii < ii_n; ii++) {
						path_tree[i].add(new paper.Point((-15+Math.random()*30)*ii/ii_n+(ii_d*ii/ii_n)+particle.position.x, ii_n2*ii+particle.position.y));	
					}
					path_tree[i].smooth();

					if(o.treeColor.toUpperCase() != 'NONE' && o.treeColor.toUpperCase() == 'FULLCOLOR'){
						path_tree[i].strokeColor = o.m_color;
					}else if(o.treeColor.toUpperCase() != 'NONE' && o.treeColor.toUpperCase() != 'FULLCOLOR'){
						path_tree[i].strokeColor = o.treeColor;
					}
				}

				var star_all = [star_1, star_2, star_3, star_4, star_5, star_6, star_7];

				for (i = 0; i < o.snow_count; i++) {
					if(o.particle_m_type == 'all'){
						var n_con = Math.round(Math.random()*6);
						star_all[n_con].fillColor = o.m_color;
						snowflake[i] = star_all[n_con].clone();
					}else{
						snowflake[i] = particles.clone();
					}

					snowflake[i].scale(o.scaleStar);

					if(o.m_randomeColor){
						snowflake[i].fillColor.hue = i*15;
					}
					if(o.treeColor.toUpperCase() == 'FULLCOLOR'){
						if(i<path_tree.length){
							path_tree[i].strokeColor.hue = i*15;
						}
					}

					snowflake[i].x = Math.random()*500;
					snowflake[i].s = .8+Math.random()*.4;
					snowflake[i].position.x = snowflake[i].x;
					
					snowflake[i].scale(snowflake[i].s);
					snowflake[i].opacity = 1;

					snowflake[i].ev = Math.random()*400;


					if(i>=20){
						num = i%20;
					}else{
						num = i;
					}
					snowflake[i].position = path_tree[num].getPointAt( (snowflake[i].ev)%path_tree[num].length );
				}
				for (i = 0; i < star_all.length; i++) {
					star_all[i].remove();
				}

				particle.scale(o.scaleBigStar);
				particle.fillColor = o.b_color;

				var children = paper.project.activeLayer.children;
				paper.project.activeLayer.insertChild(children.length, particle);
				
				paper.view.onFrame = function(event) { 
					for (var i = 0; i < o.snow_count; i++) {
						if(i>=20){
							num = i%20;
						}else{
							num = i;
						}
						snowflake[i].position = path_tree[num].getPointAt( (snowflake[i].ev+event.count)%path_tree[num].length );
						if(o.m_rotate){
							snowflake[i].rotate(o.m_speed_rotate);
						}

						if((200-snowflake[i].position.y+group_path.position.y)/100 <0){
							snowflake[i].opacity = 0;
						}else{
							snowflake[i].opacity = (200-snowflake[i].position.y+group_path.position.y)/100;
						}
					}
					
					if(o.b_rotate)
						particle.rotate(o.b_speed_rotate);

					if(o.b_randomeColor)
						particle.fillColor.hue+=2;
				};

				// Reposition the heart path whenever the window is resized:
				paper.view.onResize = function() {
					Center();
				};
				function Center () {
					group_path.position = paper.view.center;
					particle.position = new paper.Point(paper.view.center.x+250, paper.view.center.y-180);
				}

				var v = document.getElementsByTagName("audio")[0];

				v.volume = ( o.soundVolume <=1 && o.soundVolume >=0 ) ? o.soundVolume : 1;
				v.loop = o.soundLoop;

				var play=o.soundAutoPlay;

				if(o.soundButton){
					$('#bt_sound').css('display', 'block');
				}
				if(o.fullscreenButton){
					$('#bt_fullscreen').css('display', 'block');
					$('#bt_fullscreen').css({'background-position': '-22px -18px'});
				}

				if(o.soundAutoPlay){
					v.play();
				}else{
					$('#bt_sound').css({'background-position': '0 -18px'});
				}

				$("#bt_sound").click(function () {
					if(play){
						v.pause();
						$('#bt_sound').css({'background-position': '0 -18px'});
					}else{
						v.play();
						$('#bt_sound').css({'background-position': '0 0'});
					}
					play=!play;
				});

				$('#bt_fullscreen').click(function(e){
					e.preventDefault();
					$('html').fullscreentoggle();
				});
				$('html').keydown(function (event) {
					if (event.keyCode == 70) {
						$('html').fullscreentoggle();
					}
				});

				$(window).on('fullscreenchange',function(e,fullscreen){
					if(fullscreen){
						$('#bt_fullscreen').css({'background-position': '-22px 0'});
					}else{
						$('#bt_fullscreen').css({'background-position': '-22px -18px'});
					}               
				});
				
				$('canvas').delay(o.messageShow).fadeIn(2000);
				$('#greeting_text').delay(o.treeShow).animate({
					opacity:1
				}, 2000);
			});
		}
	});
})(jQuery);