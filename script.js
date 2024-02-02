// 現在のスライドのインデックスを追跡する変数。初期値を1に設定
let slideIndex = 1;

// setIntervalで作成されるインターバルIDを格納する変数
let intervalId;

//画像を自動で切り替える間隔（1000ミリ秒＝1秒）
const intervalTime = 5000;

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

  //画像の数だけループを回す
  for (let i = 0; i < slides.length; i++) {
    // すべてのスライドを非表示にする
    slides[i].style.display = "none";
  }

  // 選択したスライドを表示する（配列のインデックス番号は0からなので-1する）
  slides[slideIndex -1].style.display = "block";
}

//prev,nextボタンの入力でshowSlidesのインデックス番号を変更する関数
function changeSlides(n) {
  // JSの組み込み関数。新しいインターバルを開始する前に古いインターバルをクリアする
  clearInterval(intervalId);

  //HTMLで書いている引数によってprevボタンならnは-1,nextボタンならnは+1される
  showSlides(slideIndex += n);

  //手動でスライドを変更した後に新しいインターバルを開始
  startInterval();
}

//スライドショーを自動的に進行させるためのインターバルを開始する関数
function startInterval() {
  //changeSlides(1)をintervalTimeの間隔で呼び出す
  intervalId = setInterval(function () {
    //引数を1にして次のスライドに進む
    changeSlides(1);
  }, intervalTime);
}

//初期スライドを表示するためにshowSlidesを呼び出す
showSlides(slideIndex);

//初期のインターバルを開始
startInterval();



//組み込み関数setInterval()で自動で画像を切り替える処理を定期的に実行する
setInterval(function() {
  //changeSlidesの引数で1を設定するとslideIndex += nが実行される＝function changeSlides(n)のインデックス番号が+1更新されるので次のスライドが表示される
  changeSlides(1);
}, intervalTime);