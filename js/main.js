$(function(){
    // モバイル用メニュー  -----------------------------------------
    // ハンバーガーメニューをクリックすると
    $('.mobile-menu').on('click',function(){
      console.log('ハンバーガークリック')
      $('header nav').addClass('mobile-menu-open');
    });

    // クローズボタンをクリックすると
    $('.mobile-close').on('click',function(){
      console.log('クローズクリック');
      $('header nav').removeClass('mobile-menu-open');
    });

    //ムービー全画面スクリプト（PC用）
    //(1)動画の画角比率を設定します。4:3の場合はここを「4/3」に変更
    var movieRatio = 16/9;
    //(2)画像のリサイズ関数「movieAdjust()」を作成
    function movieAdjust(){
      var adjustWidth = $(window).width();
      var adjustHeight = $(window).height();
      if (adjustHeight > adjustWidth / movieRatio) {
              adjustWidth = adjustHeight * movieRatio;
      }
      $('iframe').css({width:(adjustWidth),height:(adjustWidth/movieRatio)});
    }
    //(3)画面リサイズ時と画面ロード時に関数movieAdjust()を実行
      $(window).on('load resize', function(){
        movieAdjust();
      });

});
