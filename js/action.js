$(window).load(function() {


    enquire.register("(max-width: 767px)", function() {
    }).register("(min-width: 768px)", {
        match: function(){

            TweenMax.to($("#loading"), 1, {opacity:0,ease: Power2.easeInOut});
            TweenMax.to($(".loader"), 1, {top:"-100%",ease: Power2.easeInOut,delay: 1});
            TweenMax.staggerFrom($("#w9 line"), 2.5, {attr:{y1:"+=400", y2:"+=400"},css: {strokeDashoffset: -920},ease: Power2.easeInOut, delay: 2}, .6);
            TweenMax.staggerFrom($("#w5 line"), 5, {attr:{y1:"+=300", y2:"+=300"},css: {strokeDashoffset: -960},ease: Power2.easeInOut, delay: 2}, .1);
            TweenMax.staggerFrom($("#d-l circle"), 1, {attr:{cy:"+=50", r:0},ease: Back.easeOut, delay: 2}, .1);
            TweenMax.staggerFrom($("#d-d circle"), 1, {attr:{cy:"+=70", r:0},ease: Back.easeOut, delay: 2.2}, .1);
            TweenMax.to($("#gd-1"), 5, {attr: {y2: 1},ease: Power4.easeOut, delay: 6});
            TweenMax.from($("#svgMotionLineBold path"), .5, {css: {opacity: 0}, ease: Power4.easeOut, delay: 6.1});
            TweenMax.from($("#nav"), 1, {css: {top: -50}, ease: Power4.easeOut, delay: 6});
            TweenMax.from($("#motionBg"), 1, {css: {backgroundSize: "0% 200%"}, ease: Power4.easeOut, delay: 6});
            TweenMax.from($("#svgMotionTitle"), 2, {rotationY:-90, transformOrigin:"100% 50%", ease: Back.easeOut, delay: 7});
        }
    }).register("(min-width: 768px) and (max-width: 991px)", function() {
    }).register("(min-width: 992px) and (max-width: 1199px)", function() {
    }).register("(min-width: 1200px)", function() {
    });
});

var controller
$(document).ready(function($) {


       // init scrollspy
    $("body").scrollspy({ target: "#navnavnav"})

    // init controller
    controller = new ScrollMagic();

    enquire.register("(max-width: 767px)", function() {
        $("#nav").css("top",0);
        $(".fuckup").remove();
    }).register("(min-width: 768px)", {
        match: function(){

            //loading
            TweenMax.to($("#qq"), 1.2, {rotation:360,ease: Power2.easeInOut,repeat:-1});

            // build logotypeMini tween
            var logotypeMini = new TimelineMax();
            logotypeMini.from($(".logotypeMini"), .3, {css: {width:0}, ease: Sine.easeOut})
            .staggerFrom($("#logotypeMini path"), .8, {css: {strokeDashoffset: -180, fill: "rgba(19,173,103,0)"},ease: Linear.easeNone}, .1);

            // build logotypeMini scene
            var logotypeMiniScene = new ScrollScene({triggerElement: "#motionBg",reverse: true})
            .offset(50)
            .triggerHook("onLeave")
            .setTween(logotypeMini)
            .addTo(controller);

            // build intro tween
            var intro = new TimelineMax();
            intro.to($("#bg"), .5, {css:{width:"100%"}, ease: Power3.easeOut})
            .to($("#svgMotionTitle"), .5, {css:{width:"12%"}, ease: Power3.easeOut})
            .from($(".vs"), .01, {opacity:0});

            // build intro scene
            var introScene = new ScrollScene({triggerElement: "#intro", reverse: true})
            .offset(100)
            .setTween(intro)
            .addTo(controller);

            // build type tween
            var type = new TimelineMax();
            type.from($(".f1"), 1, {text:"■ ⅍ ₦ ₭ ₦ ⱨﬨҚ ⱱ ﻨﻜ¶ Æã%)«", delay:.5})
            .from($(".f2"), 1.3, {text:"Ô ą´ƈǵ ȃʬɨϩ ᴥ₩⅜ №╣⌂▓  ♣☻Ⱬ"})
            .from($(".f3"), .6, {text:"◘™ ♣◙◊₳  ‰Ὢﺺ» »‡…"})
            .from($(".f4"), 1, {text:"　"})
            .from($(".f5"), .8, {text:"＞) 〒.＜§】”€→"})
            .from($(".f6"), .4, {text:"@¥　ĦţƩƵ　ǲǷΎ"})
            .from($(".f7"), .5, {text:"ΞΞΞΞΞ"})
            .from($(".f8"), 1, {text:"ֳ　٭۝　▒♯♪ףּ　Ωʥ̿ʛĘ"})
            .from($(".f9"), .9, {text:"　"});

            // build type scene
            var typeScene = new ScrollScene({triggerElement: "#intro",reverse: true})
            .offset(400)
            .setTween(type)
            .addTo(controller);

            // build timelineBg tween
            var timelineBg = new TimelineMax();
            timelineBg.to($("#svgMotionTitle"), .3, {opacity:0, ease: Power2.easeOut})
            .to($("#svgMotionTitle"), .01, {css:{display:"none"}})
            .to($("#bg"), .5, {height:0, ease: Sine.easeOut});

            // build timelineBg scene
            var timelineBgScene = new ScrollScene({triggerElement: "#timeline", reverse: true})
            .offset(100)
            .setTween(timelineBg)
            .addTo(controller);

            // build timeline tween
            var timeline = new TimelineMax();
            timeline.staggerFrom($("tr"), .3, {rotationX: -270,opacity: .0,ease: Power2.easeInOut, delay:.5}, .1);

            // build timeline scene
            var timelineScene = new ScrollScene({triggerElement: "#timeline", reverse: true})
            .offset(100)
            .setTween(timeline)
            .addTo(controller);

            // build timelineHeader tween
            var timelineHeader = new TimelineMax();
            timelineHeader.from($("#timeline h1"), .3, {rotationX: -270,opacity: .0,ease: Power2.easeInOut, delay:.8});

            // build timelineHeader scene
            var timelineHeaderScene = new ScrollScene({triggerElement: "#timeline", reverse: true})
            .offset(100)
            .setTween(timelineHeader)
            .addTo(controller);

            // build expo tween
            var expo = new TimelineMax();
            expo.staggerFrom($("#expo div"), .4, {bottom:-100,scale:.5, opacity:0,ease: Back.easeOut}, .05);

            // build expo scene
            var expoScene = new ScrollScene({triggerElement: "#expo", reverse: true})
            .offset(0)
            .setTween(expo)
            .addTo(controller);

            // build talkPeng tween
            var talkPengTween = new TimelineMax();
            talkPengTween.staggerFrom($("#talk-peng div"), .3, {left:-100,rotationX: -180,opacity: .0,ease: Power2.easeInOut}, .2);

            // build talkPeng scene
            var talkPengScene = new ScrollScene({triggerElement: "#talk-peng",reverse: true})
            .offset(0)
            .setTween(talkPengTween)
            .addTo(controller);

            // build talkLiu tween
            var talkLiuTween = new TimelineMax();
            talkLiuTween.staggerFrom($("#talk-liu div"), .3, {left:-100,rotationX: -180,opacity: .0,ease: Power2.easeInOut}, .25);

            // build talkLiu scene
            var talkLiuScene = new ScrollScene({triggerElement: "#talk-liu",reverse: true})
            .offset(0)
            .setTween(talkLiuTween)
            .addTo(controller);

            // build filmOdyssey tween
            var filmOdysseyTween = new TimelineMax();
            filmOdysseyTween.staggerFrom($("#film-odyssey div"), .3, {right:-100,rotationX: -180,opacity: .0,ease: Power2.easeInOut}, .2)
            .from($("#vbg-odyssey"), .01, {css:{display:"none"}})
            .from($("#vbg-odyssey"), .5, {opacity:0});

            // build filmOdyssey scene
            var filmOdysseyScene = new ScrollScene({triggerElement: "#film-odyssey",reverse: true})
            .offset(100)
            .setTween(filmOdysseyTween)
            .addTo(controller);

            // build filmTron tween
            var filmTronTween = new TimelineMax();
            filmTronTween.staggerFrom($("#film-tron div"), .3, {right:-100,rotationX: -180,opacity: .0,ease: Power2.easeInOut}, .25)
            .to($("#vbg-odyssey"), .01, {css:{display:"none"}})
            .from($("#vbg-tron"), .01, {css:{display:"none"}})
            .from($("#vbg-tron"), .5, {opacity:0});

            // build filmTron scene
            var filmTronScene = new ScrollScene({triggerElement: "#film-tron",reverse: true})
            .offset(100)
            .setTween(filmTronTween)
            .addTo(controller);

            // build filmStop tween
            var filmStopTween = new TimelineMax();
            filmStopTween.to([$("#vbg-odyssey"),$("#vbg-tron")], 1, {opacity:0})
            .to([$("#vbg-odyssey"),$("#vbg-tron")], .01, {css:{display:"none"}});

            // build filmStop scene
            var filmStopScene = new ScrollScene({triggerElement: "#workshop",reverse: true})
            .offset(0)
            .setTween(filmStopTween)
            .addTo(controller);

            // build workshop tween
            var workshopTween = new TimelineMax();
            workshopTween.from($("#workshop"), 1, {opacity:0, ease:Power4.easeOut});

            // build workshop scene
            var workshopScene = new ScrollScene({triggerElement: "#workshop",reverse: true})
            .offset(10)
            .setTween(workshopTween)
            .addTo(controller);

            // build location tween
            var locationTween = new TimelineMax();
            locationTween.from($("#location"), 1, {opacity:0});

            // build location scene
            var locationScene = new ScrollScene({triggerElement: "#location",reverse: true})
            .offset(10)
            .setTween(locationTween)
            .addTo(controller);

            // build footerBg tween
            var footerBg = new TimelineMax();
            footerBg.to($("#bg-f"), .5, {top:0, ease: Sine.easeOut})

            // build footerBg scene
            var footerBgScene = new ScrollScene({triggerElement: "#footer", reverse: true})
            .triggerHook("onEnter")
            .offset(-10)
            .setTween(footerBg)
            .addTo(controller);

            // build footer tween
            var footer = new TimelineMax();
            footer.from($(".footer"), 1, {opacity:0});

            // build footer scene
            var footerScene = new ScrollScene({triggerElement: "#footer", reverse: true})
            .triggerHook("onEnter")
            .offset(-10)
            .setTween(footer)
            .addTo(controller);

            // build like tween
            var like = new TimelineMax();
            like.from($("#like"), 1, {top:-100,opacity:0,delay:.5});

            // build like scene
            var likeScene = new ScrollScene({triggerElement: "#footer", reverse: true})
            .triggerHook("onEnter")
            .offset(-10)
            .setTween(like)
            .addTo(controller);
    	}
    });
});