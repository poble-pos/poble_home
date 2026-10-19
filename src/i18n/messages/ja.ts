import type { Messages } from "./en";

/** Japanese (日本語). Brand, venue and person names, prices and contact details are unchanged. */
export const ja: Messages = {
  meta: {
    siteDescription: "オーストラリアのモダンな店舗のために作られた、高速で信頼性の高い iPad POS をご体験ください。",
    home: {
      title: "Poble — オーストラリアの飲食業のための軽快な POS",
      description:
        "オーストラリアのカフェとレストランのための iPad POS。カウンター、キッチン、バックオフィスをひとつの流れにまとめます。",
    },
    pricing: {
      title: "料金",
      description: "Poble Basic は月額 $60 です。オプション機能には別途月額料金がかかります。",
    },
    features: {
      title: "機能",
      description:
        "Poble POS、スタッフ POS、キッチンディスプレイ、デュアルスクリーン、セルフオーダーキオスク、テーブルオーダー、会員 CRM — 店舗全体をつなぐひとつのシステム。",
    },
    customers: {
      title: "導入事例",
      description: "Woojeong、Kidsday、Wind & Flour などオーストラリアの店舗が、Poble でよりスムーズで落ち着いた営業を実現しています。",
    },
    hardware: {
      title: "ハードウェア",
      description: "Poble POS での動作を確認済み、原価で販売しています。店舗向けのスタンド、プリンター、アクセサリー。",
    },
    enquiry: {
      title: "お問い合わせを送信",
      description: "お店と必要な機能を教えてください。Poble の担当者が構成とお見積もりをご案内します。",
    },
  },

  common: {
    skipToContent: "本文へスキップ",
    contactUs: "お問い合わせ",
    viewPricing: "料金を見る",
    talkToSales: "営業担当に相談",
    explore: "詳しく見る",
    done: "完了",
    sending: "送信中…",
    opensInNewTab: "{label} — 新しいタブで開きます",
    ticks: ["契約の縛りなし", "隠れた費用なし", "週 7 日サポート"],
  },

  nav: {
    homeLabel: "Poble ホーム",
    mainLabel: "メイン",
    moreLabel: "その他のメニュー",
    mobileLabel: "モバイルメニュー",
    products: "製品",
    pricing: "料金",
    customers: "導入事例",
    about: "会社概要",
    signIn: "ログイン",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
  },

  language: {
    label: "言語",
    button: "言語：{language}",
    menu: "言語を選択",
  },

  footer: {
    copyright: "© 2026 Poble. ECNESOFT による店舗管理ソリューション。",
    navLabel: "サポートと規約",
    manual: "マニュアル",
    terms: "利用規約",
    privacy: "プライバシー",
    cookies: "Cookie",
  },

  products: {
    pos: {
      name: "Poble POS",
      kicker: "POS レジ",
      title: "カウンターの中心に。",
      lede: "注文、決済、日次レポートをすっきりとしたひとつの画面で。",
      imageAlt: "Poble POS の画面",
      points: [
        { title: "ピーク時にも強い", body: "軽快なタッチ操作と、オフラインでも止まらない安定性。" },
        { title: "Tyro・Linkly に対応", body: "金額がそのまま決済端末に送られます。" },
        { title: "メニューをリアルタイムに管理", body: "価格を変えると、すべての端末に反映されます。" },
      ],
    },
    "staff-pos": {
      name: "スタッフ POS",
      kicker: "ハンディ",
      title: "カウンターをテーブルへ。",
      lede: "テーブルで注文を受けて、そのままキッチンへ送信。",
      imageAlt: "Poble スタッフ POS の画面",
      points: [
        { title: "覚え直す必要なし", body: "メイン POS と同じ操作です。" },
        { title: "キッチンへ直送", body: "カウンターに戻る必要はありません。" },
        { title: "ミスを減らす", body: "オプションはその場で入力。" },
      ],
    },
    kds: {
      name: "キッチンディスプレイ",
      kicker: "キッチン",
      title: "満席でも、落ち着いた厨房に。",
      lede: "すべての注文をひとつのキューに。待ち時間ごとに色分けします。",
      imageAlt: "キッチンディスプレイの画面",
      points: [
        { title: "伝票の見落としゼロ", body: "完了にするまで注文は画面に残ります。" },
        { title: "緊急度がひと目でわかる", body: "時間の経過とともにチケットの色が変わります。" },
        { title: "完了と呼び戻し", body: "ワンタップで注文を完了、または呼び戻せます。" },
      ],
    },
    "dual-screen": {
      name: "デュアルスクリーン",
      kicker: "お客様用ディスプレイ",
      title: "カウンターに透明性を。",
      lede: "登録された商品をお客様がその場で確認できます。",
      imageAlt: "デュアルスクリーンの画面",
      points: [
        { title: "注文をライブ表示", body: "価格はリアルタイムで更新されます。" },
        { title: "会計の合間もブランドを", body: "プロモーションやポイントのご案内。" },
        { title: "スムーズなお会計", body: "合計金額を常に表示。" },
      ],
    },
    kiosk: {
      name: "セルフオーダーキオスク",
      kicker: "セルフサービス",
      title: "行列は短く。客単価は高く。",
      lede: "お客様自身で注文し、おすすめの追加メニューも選べます。",
      imageAlt: "セルフオーダーキオスクの画面",
      points: [
        { title: "行列を解消", body: "お客様が自分で注文します。" },
        { title: "確実なアップセル", body: "キオスクはおすすめを忘れません。" },
        { title: "カウンターと同じキュー", body: "キオスクとカウンターの注文が同じキューに入ります。" },
      ],
    },
    "table-ordering": {
      name: "テーブルオーダー",
      kicker: "テーブルオーダー",
      title: "席に座ったまま注文。",
      lede: "お客様がテーブルでメニューを見て注文できます。",
      imageAlt: "テーブルオーダーの画面",
      points: [
        { title: "ひとつのアプリで全テーブル", body: "テーブルを選べばすぐに注文開始。" },
        { title: "いつも最新のメニュー", body: "売り切れ商品はすぐに非表示になります。" },
        { title: "追加注文を簡単に", body: "再注文はワンタップ。" },
      ],
    },
    crm: {
      name: "会員 CRM",
      kicker: "ロイヤルティ",
      title: "お客様を常連に。",
      lede: "ポイント、クーポン、オンライン注文、順番待ちをひとつのプロフィールで。",
      imageAlt: "会員 CRM の画面",
      points: [
        { title: "使いやすいポイント", body: "カウンターで貯めて、使えます。" },
        { title: "事前注文", body: "支払いと同時に残高が更新されます。" },
        { title: "スマートな順番待ち", body: "QR コードで登録し、準備ができたら通知が届きます。" },
      ],
    },
  },

  stories: {
    woojeong: {
      venue: "韓国料理店 · パース",
      imageAlt: "パースの韓国料理店 Woojeong",
      quote: "パースで忙しい韓国料理店を営むには、何より確かな安定性が必要です。Poble のおかげでテーブルサービスがすぐにシンプルになりました。",
      author: "Min-ji Park",
      body: "以前は注文を手書きし、カウンターで入力し直していました。今ではテーブルからキッチンへ直接届きます。",
      results: ["初日からテーブルサービスがシンプルに", "締め作業は数秒で完了"],
    },
    kidsday: {
      venue: "キッズカフェ · シドニー",
      imageAlt: "シドニーのキッズカフェ Kidsday",
      quote: "入場チケットとカフェの注文に 2 台の端末を使っています。同期は一瞬で、混雑時もしっかり対応してくれます。",
      author: "Sarah Lee",
      body: "ひとつのカウンターで入場チケットを、もうひとつでカフェを運営。端末 2 台、キッチンのキューはひとつ、日次レポートもひとつ。",
      results: ["2 台の端末が常に同期", "1 日の売上をひとつの画面で"],
    },
    "wind-and-flour": {
      venue: "ベーカリーカフェ · シドニー",
      imageAlt: "シドニーのベーカリーカフェ Wind & Flour",
      quote: "うちのメニューは 1 時間ごとに変わります。忙しい最中でもカウンターから更新できるようになって、朝の営業ががらりと変わりました。",
      author: "Wind & Flour のチーム",
      body: "ペストリーはお昼前に売り切れます。スタッフがカウンターで売り切れにすると、すべての画面に即座に反映されます。",
      results: ["売り切れをカウンターから更新", "新人スタッフも初日から注文対応"],
    },
  },

  home: {
    hero: {
      line1: "もっと落ち着いたカウンターに。",
      line2: "つながる店舗に。",
      description:
        "オーストラリアのカフェとレストランのための iPad POS。カウンター、キッチン、バックオフィスをひとつの流れにまとめます。",
      explore: "Poble を見る",
      filmLabel:
        "Poble POS、セルフオーダー、キッチンディスプレイが Poble のロゴを中心にひとつになります。Poble 製品の画面です。オプション機能は別途料金がかかります。",
      photoAlt: "カフェのカウンターに置かれた Poble",
      posAlt: "Poble POS の製品画面",
      orderAlt: "Poble セルフオーダーの画面",
      kitchenAlt: "Poble キッチンディスプレイの画面",
    },
    features: {
      line1: "ひとつのシステムで、",
      line2: "店舗のすべてを。",
      viewPricing: "料金とオプションを見る",
      tabsLabel: "Poble の製品",
      picker: "製品を見る",
      talkSetup: "構成について相談する",
    },
    payments: {
      heading: "決済も、つながる。",
      intro: "Poble の構成に合わせた決済オプションをご覧ください。",
      explorePartner: "{label} を見る",
      partnerHeading: "次のつながりを一緒に。",
      partnerBody: "決済やテクノロジーの提携をお考えですか？ぜひお聞かせください。",
    },
    uber: {
      line1: "あなたのカウンターを、",
      line2: "デリバリーへ。",
      body: "Uber Eats を Poble に連携しましょう。",
    },
    pricing: {
      line1: "あなたの店舗に。",
      line2: "あなたの構成で。",
      labelQuote: "お見積もり構成",
      labelEstimate: "月額の目安",
      labelBasic: "Poble Basic プラン",
      perMonth: "/月",
      meta: "1 店舗あたり AUD · 月単位",
      breakdownQuote: "選択したツールにはお見積もりが必要です。その他の選択内容は保存されています。",
      breakdown: "Poble Basic ${base} + 選択オプション ${addOns}",
      trial: "1 か月無料トライアル",
      mobileEstimate: "月額の目安",
      addHeading: "店舗に必要なツールを追加。",
      addIntro: "月額 ${base} の Poble Basic から始めましょう。オプションを選ぶと月額の目安が表示されます。価格はすべて AUD です。",
      legend: "月額オプションを選択",
      devices: "台数",
      decrease: "{name} の台数を減らす",
      increase: "{name} の台数を増やす",
      quantity: "{name} の台数",
      addNote: "追加 POS、テーブルオーダー、会員 & ポイント、キオスク、テーブル予約、順番待ちは店舗に合わせてお見積もりします。お問い合わせ中も、その他の選択内容はこのページに残ります。",
      faqHeading: "始める前に",
      groups: {
        devices: "デバイス",
        operations: "運営",
        enquiry: "お問い合わせ",
      },
      options: {
        staff: { name: "スタッフオーダー", note: "" },
        kds: { name: "キッチンディスプレイ (KDS)", note: "タブレットが必要" },
        "table-order": { name: "テーブルオーダー", note: "お見積もりはお問い合わせください" },
        extra: { name: "追加 POS 端末", note: "お見積もりはお問い合わせください" },
        crm: { name: "会員 & ポイント", note: "CRM / リワード · お見積もりはお問い合わせください" },
        online: { name: "オンライン注文 (QR)", note: "" },
        uber: { name: "Uber Eats 連携", note: "" },
        management: { name: "テーブル管理", note: "" },
        kiosk: { name: "セルフオーダーキオスク", note: "お見積もりはお問い合わせください" },
        booking: { name: "テーブル予約", note: "お見積もりはお問い合わせください" },
        waitlist: { name: "順番待ち", note: "お見積もりはお問い合わせください" },
      },
      faqs: [
        {
          q: "$60 ですべての機能が使えますか？",
          a: "$60 の Basic プランは開始価格です。スタッフオーダーとキッチンディスプレイは端末ごとに料金がかかります。その他のオプションを選ぶと月額の目安に反映されます。追加 POS、テーブルオーダー、会員 & ポイント、キオスク、テーブル予約、順番待ちはお見積もりが必要です。",
        },
        {
          q: "無料の 1 か月はどのような仕組みですか？",
          a: "トライアルでは Basic プランを 1 か月ご利用いただけます。開始前に店舗情報を確認します。セットアップや請求の詳細は当社チームにお問い合わせください。",
        },
        {
          q: "手持ちの iPad を使えますか？",
          a: "はい。Poble は第 8 世代以降の iPad に対応しています。プリンター、スタンド、決済端末についても当社チームがお手伝いします。",
        },
        {
          q: "契約期間の縛りはありますか？",
          a: "ソフトウェアプランは月単位です。いつでも解約できます。",
        },
      ],
    },
    customers: {
      heading: "オーストラリアの店舗に、なじんでいます。",
      seeSetup: "構成を見る",
      setupFor: "（{name}）",
    },
    about: {
      heading: "カウンターのそばで生まれました。",
      body1: "ECNESOFT はオーストラリアの飲食業のために、オーストラリアで Poble を開発しています。私たちのチームは 2002 年から POS に携わってきました。",
      body2: "Poble は実際の営業から形づくられました — 朝のラッシュ、割り勘、そして決してなくしてはいけない伝票。",
      signature1: "オーストラリアの飲食業のために。",
      signature2: "地元のサポートチーム。",
      byline: "Poble by ECNESOFT",
    },
    contact: {
      heading: "あなたの店舗について、お話ししましょう。",
      body: "デモの予約、構成のご相談、POS の乗り換えについてもお気軽に。",
      cta: "お問い合わせを送信",
    },
  },

  inquiry: {
    title: "お問い合わせ",
    close: "お問い合わせを閉じる",
    intro: "店舗について教えていただければ、営業担当よりご連絡します。お電話をご希望ですか？",
    name: "お名前",
    namePlaceholder: "お名前",
    phone: "電話番号",
    email: "メールアドレス",
    shop: "店舗名と住所",
    shopPlaceholder: "店舗名と住所",
    suburb: "地域 (Suburb)",
    suburbPlaceholder: "地域 (Suburb)",
    message: "お問い合わせ内容（任意）",
    messagePlaceholder: "ご要望をお聞かせください",
    error: "お問い合わせの送信を確認できませんでした。入力内容はそのまま残っています。もう一度お試しいただくか、次の宛先までメールでご連絡ください：",
    submit: "メッセージを送信",
    consent: "送信すると、お問い合わせについて当社から連絡することに同意したものとみなされます。",
    help: "メールでのお問い合わせも可能です：",
    successTitle: "お問い合わせありがとうございます。",
    successBody: "お問い合わせは Poble に送信されました。担当者よりご連絡いたします。",
  },

  enquiry: {
    back: "ホームに戻る",
    heading1: "あなたのお店に。",
    heading2: "ぴったりの Poble を。",
    intro: "POS・注文・会員管理。必要な機能をお知らせください。",
    footnote: "いくつかの質問でお店のニーズを確認します。",
    progressLabel: "入力の進み具合",
    step: "{total} ステップ中 {current}",
    reviewStep: "Poble お問い合わせの確認",
    percent: "{percent}% 完了",
    previous: "前の質問",
    next: "次の質問",
    continue: "次へ",
    review: "お問い合わせ内容を確認",
    edit: "回答を編集",
    reviewHeading: "選択した Poble の構成です。",
    reviewHint: "回答をご確認のうえ、お問い合わせを送信してください。送信前ならいつでも編集できます。",
    priceNote: "追加オプションには別途費用がかかります。お問い合わせ後、Poble の担当者とのご相談で全体のお見積もりをご案内します。",
    empty: "—",
    questions: {
      venue: "どのようなお店を運営していますか？",
      reason: "Poble を検討する理由は？",
      features: "どの Poble 機能が必要ですか？",
      venues: "何店舗で Poble を利用しますか？",
      timing: "いつから導入したいですか？",
      business: "お店の情報を教えてください。",
      contact: "Poble チームからの連絡先を教えてください。"
    },
    hints: {
      features: "POBLE POS は基本選択です。追加機能は複数選択できます。? で機能の説明を確認できます。",
      contact: "構成のご相談やデモの予約のため、連絡先をご記入ください。"
    },
    options: {
      venue: {
        cafe: "カフェ・ベーカリー",
        restaurant: "レストラン",
        takeaway: "テイクアウト・ファストフード",
        bar: "バー・パブ",
        "food-truck": "フードトラック",
        other: "その他の飲食店"
      },
      reason: {
        "new-venue": "新規開店",
        "replace-pos": "現在の POS を入れ替え",
        "add-tools": "現在のシステムに機能を追加",
        exploring: "導入を検討中"
      },
      venues: {
        one: "1 店舗",
        "two-three": "2〜3 店舗",
        "four-plus": "4 店舗以上",
        planning: "計画中"
      },
      timing: {
        asap: "できるだけ早く",
        "one-month": "1 か月以内",
        "one-three-months": "1〜3 か月以内",
        researching: "情報収集中"
      }
    },
    features: {
      "poble-pos": "POBLE POS",
      "staff-pos": "スタッフ用 POS",
      "table-ordering": "テーブルオーダー",
      kds: "KDS",
      membership: "会員・ポイント",
      "online-qr": "オンライン・QR 注文",
      kiosk: "セルフオーダー端末",
      "uber-eats": "Uber Eats 連携",
      booking: "予約管理",
      waitlist: "順番待ち管理",
      stock: "在庫管理",
      "staff-management": "スタッフ管理",
      other: "その他のご要望"
    },
    groups: {
      starting: "基本構成",
      popular: "この業種でよく使われる機能",
      more: "その他の機能",
      optional: "オプション機能"
    },
    defaultTag: "基本・常に選択",
    about: "機能の説明：{name}",
    closeDetails: "機能の説明を閉じる",
    otherLabel: "その他のご要望をお知らせください。",
    otherPlaceholder: "必要な機能やサポートをご記入ください。",
    details: {
      "poble-pos": {
        title: "テイクアウト向け POS。",
        body: "簡単で素早い決済と、正確で視覚的なレポート分析に対応します。",
        points: [
          {
            title: "素早く簡単な決済",
            body: "シンプルな決済の流れでカウンターを止めません。"
          },
          {
            title: "わかりやすいレポート",
            body: "正確で視覚的なレポートでお店の状況を把握できます。"
          }
        ]
      },
      "staff-pos": {
        title: "カウンターの機能をテーブルへ。",
        body: "メイン POS と同じ操作で注文やオプションを入力し、厨房へ直接送信。移動と注文ミスを減らします。",
        points: [
          {
            title: "新しく覚えることなし",
            body: "メイン POS と同じ操作です。"
          },
          {
            title: "厨房へ直接",
            body: "カウンターに戻る必要はありません。"
          },
          {
            title: "ミスを減らす",
            body: "オプションは注文を受けたその場で入力。"
          }
        ]
      },
      "table-ordering": {
        title: "席に座ったまま注文。",
        body: "テーブルで最新メニューを見て注文できます。売り切れは即時反映され、追加注文も簡単です。",
        points: [
          {
            title: "ひとつのアプリで全テーブル",
            body: "テーブルを選んで注文開始。"
          },
          {
            title: "いつも最新のメニュー",
            body: "売り切れはすぐに非表示に。"
          },
          {
            title: "追加注文も簡単",
            body: "ワンタップで再注文。"
          }
        ]
      },
      kds: {
        title: "忙しい時間帯も落ち着いた厨房へ。",
        body: "完了まで注文を表示し、待ち時間に応じて色が変わります。ワンタップで完了・呼び戻しができます。",
        points: [
          {
            title: "伝票を見逃さない",
            body: "完了にするまで注文は画面に残ります。"
          },
          {
            title: "急ぎがひと目でわかる",
            body: "時間が経つとチケットの色が変わります。"
          },
          {
            title: "完了と呼び戻し",
            body: "ワンタップで完了・呼び戻し。"
          }
        ]
      },
      membership: {
        title: "お客様を常連に。",
        body: "ポイント、クーポン、オンライン注文、順番待ちを一つのプロフィールに統合。店頭でのポイント利用、決済後の残高更新、QR 順番待ち通知に対応します。",
        points: [
          {
            title: "使いやすいポイント",
            body: "店頭で貯めて使えます。"
          },
          {
            title: "事前注文",
            body: "決済と同時に残高を更新。"
          },
          {
            title: "スマートな順番待ち",
            body: "QR コードで登録し、準備ができたら通知。"
          }
        ]
      },
      "online-qr": {
        title: "スキャンして簡単注文。",
        body: "QR コードでメニューを確認して正確に注文し、ホールと厨房間のミスを減らします。オンラインの持ち帰り・配達注文にも対応します。",
        points: [
          {
            title: "簡単 QR 注文",
            body: "コードを読み取ってメニューを見て注文。"
          },
          {
            title: "より正確な注文",
            body: "お客様の選択を正確に受け取り、手入力を減らします。"
          },
          {
            title: "オンラインも便利に",
            body: "持ち帰り・配達注文に対応。"
          }
        ]
      },
      kiosk: {
        title: "待ち時間を短く、注文を豊かに。",
        body: "お客様自身で注文し、おすすめの追加商品を確認できます。端末とカウンターの注文は同じキューに入ります。",
        points: [
          {
            title: "行列を解消",
            body: "お客様自身で注文できます。"
          },
          {
            title: "確実なおすすめ",
            body: "端末は追加のおすすめを忘れません。"
          },
          {
            title: "カウンターと同じキュー",
            body: "端末とカウンターの注文が同じキューに入ります。"
          }
        ]
      },
      "uber-eats": {
        title: "Uber Eats の注文を厨房へ。",
        body: "Uber Eats を Poble と連携し、ボタン一つで厨房へ注文を送信できます。",
        points: [
          {
            title: "つながる注文",
            body: "Uber Eats を Poble の業務フローに取り込みます。"
          },
          {
            title: "ボタンひとつで連携",
            body: "注文を厨房へそのまま送信。"
          }
        ]
      },
      booking: {
        title: "予約管理",
        body: "お客様の予約を管理し、営業に備えます。",
        points: []
      },
      waitlist: {
        title: "順番待ち管理",
        body: "順番待ちのお客様を管理し、席が空いたらお知らせします。",
        points: []
      },
      stock: {
        title: "在庫管理",
        body: "在庫数を確認し、お店の在庫を管理します。",
        points: []
      },
      "staff-management": {
        title: "スタッフ管理",
        body: "スタッフのアカウントとアクセス権限を一元管理します。",
        points: []
      },
      other: {
        title: "その他のご要望をお知らせください。",
        body: "この項目を選び、追加機能やご要望をご記入ください。",
        points: []
      }
    },
    fields: {
      company: {
        label: "店舗名・事業者名",
        placeholder: "例：Corner Street Cafe",
        required: "店舗名・事業者名を入力してください。"
      },
      postcode: {
        label: "オーストラリアの郵便番号",
        placeholder: "例：2000",
        required: "郵便番号を入力してください。"
      },
      name: {
        label: "氏名",
        placeholder: "お名前",
        required: "氏名を入力してください。"
      },
      email: {
        label: "メールアドレス",
        placeholder: "you@company.com",
        required: "メールアドレスを入力してください。"
      },
      phone: {
        label: "電話番号",
        placeholder: "例：0412 345 678",
        required: "電話番号を入力してください。"
      }
    },
    otherReviewLabel: "その他のご要望",
    errors: {
      selectOne: "選択肢を 1 つ選んでください。",
      selectAtLeastOne: "少なくとも 1 つ選んでください。",
      postcode: "4 桁の郵便番号を入力してください。",
      email: "有効なメールアドレスを入力してください。",
      phone: "有効な電話番号を入力してください。",
      other: "その他のご要望をご記入ください。"
    }
  },

  partnership: {
    open: "Poble と提携する",
    title: "Poble との提携",
    close: "提携のお問い合わせを閉じる",
    successTitle: "ご提案ありがとうございます。",
    successBody: "提携のお問い合わせを受け付けました。今後のご連絡は {email} までお願いします。",
    intro: "貴社について、またどのように協力できるかをお聞かせください。",
    name: "お名前",
    phone: "電話番号",
    email: "メールアドレス",
    company: "会社名",
    proposal: "提携のご提案",
    proposalPlaceholder: "お考えの提携内容をお聞かせください",
    error: "ご提案の送信を確認できませんでした。入力内容はそのまま残っています。もう一度お試しいただくか、{email} までメールでご連絡ください。",
    submit: "問い合わせを送信",
    consent: "ご提案への返信のため、入力内容は FormSubmit を通じて {email} に送信されます。",
    preferEmail: "メールをご希望ですか？",
  },

  pricingPage: {
    kicker: "料金",
    heading: "Poble Basic。必要な分だけ追加。",
    badge: "Poble Basic プラン",
    perMonth: "/月",
    perVenue: "1 店舗あたり、AUD。いつでも解約できます。",
    askFreeMonth: "無料の 1 か月について問い合わせる",
    addHeading: "追加機能は別途月額料金。",
    addBody:
      "月額 $60 は Poble Basic の料金です。オプション機能は Basic プランに加えて請求されます。追加機能と月額合計はお問い合わせいただければご確認いたします。",
    buildPlan: "プランを作成",
    builderNote: "プランビルダーでオプションを選び、月額の目安をご確認ください。",
    paymentsHeading: "決済 & デリバリー",
    paymentsBody: "Tyro と Linkly のカード決済に対応。Uber Eats 連携は月額 +$30 でご利用いただけます。",
    venuesHeading: "複数店舗をお持ちですか？",
    venuesBody: "すべての店舗をひとつのバックオフィスで。",
    contactSales: "営業に問い合わせる",
    faqHeading: "よくあるご質問。",
    faqs: [
      { q: "乗り換えは大変ですか？", a: "メニューの再構築、スタッフのトレーニングを行い、初日の営業にも寄り添います。" },
      {
        q: "どんなハードウェアが必要ですか？",
        a: "iPad（第 8 世代以降）が必要です。対応するプリンター、スタンド、決済端末はハードウェアページでご覧いただけます。",
      },
      { q: "契約期間の縛りはありますか？", a: "ありません。月単位でいつでも解約でき、データはいつでもエクスポートできます。" },
      {
        q: "無料の 1 か月が終わるとどうなりますか？",
        a: "トライアル終了前に解約しない限り、アカウントは自動的に有料プランへ移行します。プランと請求の詳細はお問い合わせください。",
      },
    ],
    ctaHeading: "無料の 1 か月を始めましょう。",
  },

  featuresPage: {
    kicker: "製品",
    heading: "ひとつのシステムで、店舗のすみずみまで。",
    lede: "ひとつのように動く、7 つの製品。",
    ctaHeading: "ひとつのシステム。ツールは自由に。",
  },

  productPage: {
    allProducts: "すべての製品",
    pagerLabel: "製品",
    ctaHeading: "あなたのカウンターでお試しください。",
  },

  customersPage: {
    kicker: "導入事例",
    heading: "実際の店舗。実際のサービス。",
    ctaHeading: "次はあなたの店舗です。",
  },

  hardwarePage: {
    kicker: "ハードウェア",
    heading: "営業の準備は万全。",
    lede: "Poble POS での動作を確認済み、原価で販売しています。",
    askUs: "お問い合わせ",
    ctaHeading: "店舗まるごとのセットアップが必要ですか？",
    askSetup: "セットアップについて問い合わせる",
    groups: {
      stands: "スタンド",
      printers: "プリンター",
      accessories: "アクセサリー",
    },
    items: {
      "gemini-dual": { name: "Gemini Dual Stand", description: "デュアルスクリーン用マウント、360° 回転。" },
      "elite-evo": { name: "Elite Evo Stand", description: "ロープロファイル、いたずら防止仕様。" },
      "touch-evo": { name: "Touch Evo Stand", description: "自立型、角度調整可能。" },
      "posbank-a11": { name: "POSBANK A11", description: "250mm/秒、イーサネット、オートカッター。" },
      "epson-m30iii": { name: "Epson TM-m30III", description: "コンパクト、Bluetooth と Wi-Fi に対応。" },
      "cash-drawer": { name: "キャッシュドロア", description: "スチール製、紙幣 5 / 硬貨 8、鍵付き。" },
      "thermal-paper": { name: "感熱紙", description: "80 × 80 mm ロール、BPA フリー。24 巻入り。" },
      "qr-stickers": { name: "QR テーブルステッカー", description: "防水仕様、テーブルオーダー用。" },
    },
  },
};
