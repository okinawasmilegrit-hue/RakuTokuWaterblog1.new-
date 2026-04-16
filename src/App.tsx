import React from 'react';

export default function App() {
  return (
    <div className="font-sans bg-[#f9f7f4] text-[#2a2a2a] leading-relaxed">
      {/* Header */}
      <header className="bg-white border-b-2 border-[#1a6fa8] px-6 py-3 flex items-center justify-between">
        <div className="font-serif text-base font-bold text-[#0d4f7a]">
          株式会社SmileGrit
          <span className="text-[0.7rem] font-normal text-[#888] block tracking-widest">OKINAWA | WATER & WELLNESS</span>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&w=1400&q=85" 
          alt="沖縄の美しい青い海" 
          className="w-full h-full object-cover block"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#08203c]/70 via-[#0d4f7a]/55 to-[#1a6fa8]/35 flex flex-col items-center justify-center text-center px-6 py-10">
          <div className="inline-block bg-white/20 border border-white/40 text-white/90 text-xs tracking-widest px-4 py-1.5 rounded-full mb-5">
            🌊 沖縄のお水情報
          </div>
          <h1 className="font-serif text-2xl md:text-4xl font-bold text-white leading-snug mb-4">
            水道水が激変！？<br />沖縄専用フィルターで<br />「まろやかな軟水」を作る秘密
          </h1>
        </div>
      </div>

      {/* Article Wrap */}
      <div className="max-w-3xl mx-auto px-5 pb-20">
        
        {/* Lead */}
        <div className="text-[1.02rem] text-[#555] border-y border-[#e2ddd8] py-5 my-8 leading-loose">
          <p className="font-bold text-[#1a6fa8] mb-4">毎日重いお水を運んでお疲れ様です。</p>
          <p>
            毎日飲むお水、皆さんはどうしていますか？<br />
            「水道水をそのまま、あるいは一度沸かして飲んでいる」「ポット型浄水器を使っている」という方も多いのではないでしょうか。手軽で経済的ですよね。
          </p>
        </div>

        {/* Pain Section */}
        <section className="pt-10">
          <h2 className="font-serif text-xl font-bold text-[#0d4f7a] border-l-4 border-[#1a6fa8] pl-3 mb-5 leading-snug">
            水道水やポット型で感じる「ちょっとした不満」
          </h2>
          <p className="mb-5">でも、毎日の生活の中で、こんな「モヤモヤ」を感じることはありませんか？</p>

          <div className="bg-[#fff8f5] border border-[#f0d0c0] rounded-xl p-6 md:p-8 my-6">
            <div className="font-bold text-sm text-[#e05a2b] mb-5">💬 よくある3つのお悩み</div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-5 pb-5 border-b border-dashed border-[#f0d0c0]">
              <div className="text-2xl shrink-0 self-start bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm">😮‍💨</div>
              <div>
                <strong className="block text-[0.95rem] text-[#2a2a2a] mb-1">「どうしてもカルキ（塩素）のニオイが気になる…」</strong>
                <p className="text-sm text-[#555] leading-relaxed">日本の水道水は安全ですが、消毒のための塩素が独特のニオイの原因に。そのまま飲むのはもちろん、お茶やコーヒーの風味も損ねてしまいます。</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-5 pb-5 border-b border-dashed border-[#f0d0c0]">
              <div className="text-2xl shrink-0 self-start bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm">🐚</div>
              <div>
                <strong className="block text-[0.95rem] text-[#2a2a2a] mb-1">「沖縄の水って、なんだか味が違う気がする」</strong>
                <p className="text-sm text-[#555] leading-relaxed">沖縄はサンゴ礁の地層を通ってきた水が多いため、ミネラル分が多い「硬水、中軟水」の地域が多くなっています。実は硬水だと、お料理の出汁が出にくかったり、味が薄く感じたりすることがあるんです。</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="text-2xl shrink-0 self-start bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm">⏳</div>
              <div>
                <strong className="block text-[0.95rem] text-[#2a2a2a] mb-1">「ポット型は、ろ過の“待ち時間”が地味にストレス💦」</strong>
                <p className="text-sm text-[#555] leading-relaxed">料理でたくさん使いたい時や、喉が渇いて今すぐ飲みたい時、チョロチョロとろ過されるのを待つのは面倒ですよね。冷蔵庫の中で場所をとるのも悩みの種です。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="pt-10">
          <h2 className="font-serif text-xl font-bold text-[#0d4f7a] border-l-4 border-[#1a6fa8] pl-3 mb-5 leading-snug">
            水道水が「極上の軟水」に変わる！沖縄専用フィルターの秘密
          </h2>
          <p className="mb-4 font-bold text-[#1a6fa8]">「塩素のニオイを完全に消して、もっと手軽に美味しいお水が飲みたい！」</p>
          <p className="mb-4">そんな沖縄の皆さまのために作られたのが、水道直結型ウォーターサーバー「ラクトク（楽得）ウォーター」です。</p>
          
          <div className="bg-[#e8f4fb] border-l-4 border-[#1a6fa8] rounded-r-lg p-5 my-6 text-[0.95rem] leading-loose text-[#0d4f7a] font-bold">
            ご安心ください！ラクトクウォーターは、【沖縄の硬い水質に合わせて専用設計された5段階フィルター】を搭載しています。
          </div>

          <img 
            src="https://rakutokuwater.smilegrit.com/wp-content/uploads/2026/02/琉宮祭LP素材-2.png" 
            alt="沖縄専用設計5段階フィルター" 
            className="w-full rounded-xl my-6 shadow-md"
            referrerPolicy="no-referrer"
          />

          <p className="mb-4">サビやホコリはもちろん、気になる塩素（カルキ臭）や有機フッ素化合物（PFAS）までしっかりキャッチ！ さらに、ミネラルを残してお茶やお料理が劇的に美味しくなる「軟水」へと仕上げます。</p>
          <p className="mb-4">いつもの蛇口から、まるでカフェで出てくるような、まろやかで美味しいお水がいつでも飲めるようになります！</p>
        </section>

        {/* Feature Section */}
        <section className="pt-10">
          <h2 className="font-serif text-xl font-bold text-[#0d4f7a] border-l-4 border-[#1a6fa8] pl-3 mb-5 leading-snug">
            待ち時間ゼロ！冷水も温水も使い放題
          </h2>
          <p className="mb-6">ポット型浄水器のように、ろ過を待つ必要はもうありません。 水道管と直結しているため、レバーを押すだけで「冷たいお水」も「熱いお湯（約85℃）」も、待ち時間ゼロですぐに出てきます。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-[#e2ddd8] rounded-xl p-4 flex flex-col md:flex-row items-center md:items-start gap-3 shadow-sm">
              <span className="text-2xl shrink-0 self-start">☕️</span>
              <span className="text-sm font-medium mt-1">朝の忙しい時間のコーヒー作りに</span>
            </div>
            <div className="bg-white border border-[#e2ddd8] rounded-xl p-4 flex flex-col md:flex-row items-center md:items-start gap-3 shadow-sm">
              <span className="text-2xl shrink-0 self-start">🍼</span>
              <span className="text-sm font-medium mt-1">赤ちゃんのミルク作りに</span>
            </div>
            <div className="bg-white border border-[#e2ddd8] rounded-xl p-4 flex flex-col md:flex-row items-center md:items-start gap-3 shadow-sm">
              <span className="text-2xl shrink-0 self-start">🥘</span>
              <span className="text-sm font-medium mt-1">お鍋やお米とぎなど、お料理にたっぷり</span>
            </div>
            <div className="bg-white border border-[#e2ddd8] rounded-xl p-4 flex flex-col md:flex-row items-center md:items-start gap-3 shadow-sm">
              <span className="text-2xl shrink-0 self-start">💰</span>
              <span className="text-sm font-medium mt-1">定額制なので、どれだけ使ってもお水代は変わりません。</span>
            </div>
          </div>
        </section>

        {/* Offer Section */}
        <section className="pt-10">
          <h2 className="font-serif text-xl font-bold text-[#0d4f7a] border-l-4 border-[#1a6fa8] pl-3 mb-5 leading-snug">
            【マルシェご来場者様限定】まずは1ヶ月無料で試してみませんか？
          </h2>
          <p className="mb-4">「本当にゴミが出なくなってラクになるか試してみたい」「まずは味に納得してから決めたい」</p>
          <p className="mb-6">そんなあなたのために、マルシェでご縁があった皆様限定で、【1ヶ月完全無料お試しキャンペーン】を実施中です！</p>

          <div className="bg-gradient-to-br from-[#fff9ee] to-[#fff3e0] border-2 border-[#c8922a] rounded-2xl p-6 md:p-8 my-8 shadow-lg">
            <div className="inline-block bg-[#c8922a] text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded mb-4">
              🌺 マルシェご来場者様限定キャンペーン
            </div>
            <h3 className="font-serif text-xl text-[#7a4a00] font-bold mb-4">1ヶ月完全無料お試し実施中！</h3>
            <p className="text-sm text-[#6a4800] mb-6 leading-relaxed">
              初期の設置費用も、1ヶ月間どれだけ飲んでもお水代も、もし合わなかった場合の撤去費用も<strong>【すべて0円】</strong>。勝手に自動更新されて課金されることは絶対にありませんので、まずは気軽におうちで体験してみてください。
            </p>
            
            <ul className="flex flex-wrap gap-3 mb-8">
              <li className="bg-white border border-[#e8c878] rounded-md px-4 py-2 text-sm text-[#7a4a00] font-medium shadow-sm flex items-center gap-2">
                <span className="text-[#2e7d52] font-bold">✓</span> 設置費用 0円
              </li>
              <li className="bg-white border border-[#e8c878] rounded-md px-4 py-2 text-sm text-[#7a4a00] font-medium shadow-sm flex items-center gap-2">
                <span className="text-[#2e7d52] font-bold">✓</span> 1ヶ月のお水代 0円
              </li>
              <li className="bg-white border border-[#e8c878] rounded-md px-4 py-2 text-sm text-[#7a4a00] font-medium shadow-sm flex items-center gap-2">
                <span className="text-[#2e7d52] font-bold">✓</span> 撤去費用 0円
              </li>
              <li className="bg-white border border-[#e8c878] rounded-md px-4 py-2 text-sm text-[#7a4a00] font-medium shadow-sm flex items-center gap-2">
                <span className="text-[#2e7d52] font-bold">✓</span> 自動更新・課金なし
              </li>
            </ul>

            <img 
              src="https://rakutokuwater.smilegrit.com/wp-content/uploads/2026/04/ryugusai.png" 
              alt="キャンペーンモデル" 
              className="w-full max-w-sm mx-auto rounded-xl mb-8 shadow-md block"
              referrerPolicy="no-referrer"
            />

            <div className="text-center mb-4">
              <p className="text-sm font-bold text-[#7a4a00] mb-2">▼ 無料お試しのお申し込み・お問い合わせ ▼</p>
              <p className="text-xs text-[#6a4800] mb-4">「うちのキッチンにも置ける？」「まずは話だけ聞きたい」<br/>という方も、LINEからお気軽にご相談ください！</p>
            </div>

            <a 
              href="https://liff.line.me/1656783300-KLG90La1/landing?follow=%40248vmjzs&lp=Kkhob1&liff_id=1656783300-KLG90La1" 
              className="block text-center bg-gradient-to-br from-[#e05a2b] to-[#c0381a] text-white text-lg font-bold py-4 px-6 rounded-xl shadow-[0_4px_20px_rgba(200,60,30,0.32)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(200,60,30,0.4)] transition-all duration-200 tracking-wide"
              target="_blank"
              rel="noopener noreferrer"
            >
              ▼無料お試し・お問い合わせはこちら
            </a>
          </div>
        </section>

        {/* Author */}
        <div className="mt-12 p-6 bg-[#f5f8fb] border border-[#d8e8f3] rounded-xl flex flex-col md:flex-row gap-5 items-start">
          <div className="w-14 h-14 bg-gradient-to-br from-[#1a6fa8] to-[#4db8d4] rounded-full flex items-center justify-center text-2xl shrink-0 shadow-sm self-start">
            🌊
          </div>
          <div>
            <div className="font-bold text-[0.95rem] text-[#2a2a2a] mb-2">株式会社SmileGrit</div>
            <div className="text-sm text-[#555] leading-relaxed">
              沖縄県を拠点に、暮らしを豊かにするサービスを提供しています。「毎日の小さな幸せ」をテーマに、水・健康・デジタルの分野でお客様をサポートしています。
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white/40 text-center py-8 px-5 text-xs tracking-wider flex flex-col items-center">
        <img 
          src="https://rakutokuwater.smilegrit.com/wp-content/uploads/2026/04/ラクトク-バナーのコピー.png" 
          alt="ラクトクウォーター バナー" 
          className="w-full max-w-md mb-6 rounded-lg shadow-lg"
          referrerPolicy="no-referrer"
        />
        <p>© 株式会社SmileGrit | ラクトク（楽得）ウォーター | 沖縄県</p>
      </footer>
    </div>
  );
}
