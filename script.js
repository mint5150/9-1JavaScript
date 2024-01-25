// 変数スライドインデックスを用意して、1で初期化
let slideIndex = 1;

//スライドショーを表示するための関数
//引数のnにはshowSlides(slideIndex += n);の値が渡される=カレントのインデックス番号
function showSlides(n) {
  //.slide_img クラスを持つすべての要素を取得して、定数 slidesに格納する
  const slides = document.getElementsByClassName("slide_img");

  //カレントのインデックス番号nとslides.length（最後の画像のインデックス番号）を比較する
  if (n > slides.length) {
    // インデックス番号が5になる場合は1にする（4枚目のnextをクリックしたら1枚目に移動する）
    slideIndex = 1;
  }

  //カレントのインデックス番号nと1（最初の画像のインデックス番号）を比較する
  if (n < 1) {
    // インデックス番号が0になる場合は4にする（1枚目のprevをクリックしたら4枚目に移動する）
    slideIndex = slides.length;
  }

  //for文のための変数iを用意する
  let i;

  //画像の数だけループを回す
  for (i = 0; i < slides.length; i++) {
    // すべてのスライドを非表示にする
    slides[i].style.display = "none";
  }

  // 選択したスライドを表示する（配列のインデックス番号は0からなので-1する）
  slides[slideIndex -1].style.display = "block";
}

//prev,nextボタンの入力でshowSlidesのインデックス番号を変更する関数
function changeSlides(n) {
  //HTMLで書いている引数によってprevボタンならnは-1,nextボタンならnは+1される
  showSlides(slideIndex += n);
}

// 初期スライドを表示するためにshowSlidesを呼び出す
showSlides(slideIndex);

//画像を自動で切り替える機能を実装する
//切り替える間隔（1000ミリ秒＝1秒）
const intervalTime = 8000;

//組み込み関数setInterval()で自動で画像を切り替える処理を定期的に実行する
setInterval(function() {
  //changeSlidesの引数で1を設定するとslideIndex += nが実行される＝changeSlidesのインデックス番号が+1されるので次のスライドが表示される
  changeSlides(1);
}, intervalTime);