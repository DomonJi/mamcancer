$(function(){
    var $audio=$('.audio');
    var $video=$('.video');
    var screenManager;
    var nextAction;
    var $stage = $('.stage');
    var $videoPlayer = $('.video_player');

    var videoInfos={

    };

    var handler ={
        onPlayerInited: function(){

        },
        onVideoEnd:function(){

        },
        onMakeChoice:function(e,target){

        },
        onOrientationChange: function() {
            var ori = window.orientation || 0;

            if (ori == 180 || ori === 0) {
                $stage.height(window.innerWidth).width(window.innerHeight);
            } else if (ori == 90 || ori == -90) {
                $stage.height(window.innerHeight).width(window.innerWidth);
            }
        },
        onTap:function(e){

        }
    };

    (function(){
        $(document.body).on('tap',handler.onTap);
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize",
        handler.onOrientationChange, false);
        handler.onorientationchange();
        var ori = window.orientation || 0;
        if (ori == 180 || ori === 0) {
            $video.width = $stage.height();
            $video.height = $stage.width();
        }
        $('.video').on('ended',handler.onVideoEnd);
    }());
});
