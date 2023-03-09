(()=>{ // 即時関数、グローバル関数の汚染回避

const $doc = document;
const $tab = $doc.getElementById('js-tab');
const $nav = $tab.querySelectorAll('[data-nav]');
const $content = $tab.querySelectorAll('[data-content]');
const ACTIVE_CLASS = 'is-active';

// 初期化の意、jsで最初に実行させたいという時によく使う関数名
const init = () => {
    $content[0].style.display = 'block';
};
init();

// クリックイベント
const handleClick = (e) => {

    // aタグをクリックするので遷移イベントを回避
    e.preventDefault();

    // クリックされたnavを取得
    const $this = e.target;

    // dataset.属性名でその属性の値を取得
    const targetVal = $this.dataset.nav;

    // 対象外のav, contentすべて一旦リセット
    let index = 0;
    while( index < $nav.length) {
        $content[index].style.display = 'none';
        $nav[index].classList.remove(ACTIVE_CLASS);
        index++;
    };

    // 対象のコンテンツをアクティブ化する
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS);
};

// 全nav要素に対して関数を適用・発火
let index = 0;
while(index < $nav.length) {
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
}

})();