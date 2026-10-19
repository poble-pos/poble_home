/*
 * Poble: language support for the standalone support and policy pages.
 * Reads the same `poble-locale` cookie as the Next.js pages, translates the page
 * chrome (header, menus, footer, headings, contact form) and, on the manual, swaps
 * in the translated topics. Policy text stays in English, the governing version,
 * with a notice in the chosen language. Choosing a language saves the cookie and
 * reloads, so the manual search and contact form start in that language.
 * Without JavaScript the pages stay in English.
 */
(() => {
  const LOCALES = ['en', 'ko', 'zh-CN', 'ja'];
  const NAMES = { en: 'English', ko: '한국어', 'zh-CN': '中文', ja: '日本語' };
  const SHORT = { en: 'EN', ko: 'KO', 'zh-CN': '中文', ja: 'JA' };
  const COOKIE = 'poble-locale';
  const MAX_AGE = 60 * 60 * 24 * 365;

  const MESSAGES = {
    en: {
      'skip': 'Skip to content',
      'nav.home': 'Poble, home',
      'nav.main': 'Main',
      'nav.mobile': 'Mobile navigation',
      'nav.products': 'Products',
      'nav.pricing': 'Pricing',
      'nav.customers': 'Customers',
      'nav.hardware': 'Hardware',
      'nav.about': 'About',
      'nav.openMenu': 'Open menu',
      'nav.closeMenu': 'Close menu',
      'language.button': 'Language: {language}',
      'language.menu': 'Choose a language',
      'support.nav': 'Support and policies',
      'support.manual': 'Manual',
      'support.terms': 'Terms',
      'support.privacy': 'Privacy',
      'support.cookies': 'Cookies',
      'footer.copyright': '© 2026 Poble. Management solution by ECNESOFT.',
      'footer.nav': 'Support and legal',
      'legal.eyebrow': 'Legal',
      'legal.lastUpdated': 'Last updated:',
      'legal.onThisPage': 'On this page',
      'legal.englishOnly': '',
      'terms.title': 'Terms of Service',
      'terms.docTitle': 'Terms of Service — Poble',
      'terms.description': 'Terms of Service for Poble, provided by ECNESOFT PTY LTD.',
      'privacy.title': 'Privacy Policy',
      'privacy.docTitle': 'Privacy Policy — Poble',
      'privacy.description': 'Privacy Policy for Poble, provided by ECNESOFT PTY LTD.',
      'cookies.title': 'Cookie Policy',
      'cookies.docTitle': 'Cookie Policy — Poble',
      'cookies.description': 'Cookie Policy for Poble, provided by ECNESOFT PTY LTD.',
      'manual.eyebrow': 'Support',
      'manual.title': 'User manual.',
      'manual.docTitle': 'User Manual — Poble',
      'manual.description': 'Practical Poble guides for account setup, orders, payments, printers and integrations.',
      'manual.lede1': 'From your first login to a busy service.',
      'manual.lede2': 'Find practical guides to using Poble.',
      'manual.searchLabel': 'Search the manual',
      'manual.searchPlaceholder': 'Try printers, payments or orders',
      'manual.clear': 'Clear',
      'manual.browseStatus': 'Browse the topics below or search for help.',
      'manual.foundOne': '{count} topic found.',
      'manual.foundMany': '{count} topics found.',
      'manual.browseTopics': 'Browse topics',
      'manual.topicsNav': 'Manual topics',
      'manual.needHand': 'Need a hand?',
      'contact.open': 'Contact us',
      'inquiry.title': 'Contact us',
      'inquiry.close': 'Close enquiry',
      'inquiry.intro': 'Tell us about your venue and a sales specialist will get back to you. Prefer to call?',
      'inquiry.name': 'Your name',
      'inquiry.namePlaceholder': 'Your name',
      'inquiry.phone': 'Phone number',
      'inquiry.email': 'Email address',
      'inquiry.shop': 'Venue name & address',
      'inquiry.shopPlaceholder': "Your venue's name & address",
      'inquiry.suburb': 'Suburb',
      'inquiry.suburbPlaceholder': 'Suburb',
      'inquiry.message': 'Your enquiry (optional)',
      'inquiry.messagePlaceholder': 'Tell us what you need',
      'inquiry.error': 'We could not confirm your enquiry was sent. Your details are still here. Please try again, or email',
      'inquiry.submit': 'Send a message',
      'inquiry.sending': 'Sending…',
      'inquiry.consent': 'By submitting, you agree to be contacted about your enquiry.',
      'inquiry.help': 'You can also email',
      'inquiry.successTitle': 'Thanks for getting in touch.',
      'inquiry.successBody': 'Your enquiry has been submitted to Poble. Our team will be in touch.',
      'inquiry.done': 'Done',
    },
    ko: {
      'skip': '본문으로 건너뛰기',
      'nav.home': 'Poble 홈',
      'nav.main': '주 메뉴',
      'nav.mobile': '모바일 메뉴',
      'nav.products': '제품',
      'nav.pricing': '요금',
      'nav.customers': '고객 사례',
      'nav.hardware': '하드웨어',
      'nav.about': '회사 소개',
      'nav.openMenu': '메뉴 열기',
      'nav.closeMenu': '메뉴 닫기',
      'language.button': '언어: {language}',
      'language.menu': '언어 선택',
      'support.nav': '지원 및 정책',
      'support.manual': '매뉴얼',
      'support.terms': '이용약관',
      'support.privacy': '개인정보처리방침',
      'support.cookies': '쿠키 정책',
      'footer.copyright': '© 2026 Poble. ECNESOFT의 매장 관리 솔루션.',
      'footer.nav': '지원 및 약관',
      'legal.eyebrow': '법적 고지',
      'legal.lastUpdated': '최종 업데이트:',
      'legal.onThisPage': '이 페이지의 내용',
      'legal.englishOnly': '이 정책은 영어로만 제공되며, 영어 원문이 공식 버전입니다.',
      'terms.title': '이용약관',
      'terms.docTitle': '이용약관 — Poble',
      'terms.description': 'ECNESOFT PTY LTD가 제공하는 Poble 이용약관.',
      'privacy.title': '개인정보처리방침',
      'privacy.docTitle': '개인정보처리방침 — Poble',
      'privacy.description': 'ECNESOFT PTY LTD가 제공하는 Poble 개인정보처리방침.',
      'cookies.title': '쿠키 정책',
      'cookies.docTitle': '쿠키 정책 — Poble',
      'cookies.description': 'ECNESOFT PTY LTD가 제공하는 Poble 쿠키 정책.',
      'manual.eyebrow': '지원',
      'manual.title': '사용자 매뉴얼.',
      'manual.docTitle': '사용자 매뉴얼 — Poble',
      'manual.description': '계정 설정, 주문, 결제, 프린터, 연동에 관한 Poble 실용 가이드.',
      'manual.lede1': '첫 로그인부터 바쁜 영업 시간까지.',
      'manual.lede2': 'Poble 사용에 필요한 실용 가이드를 찾아보세요.',
      'manual.searchLabel': '매뉴얼 검색',
      'manual.searchPlaceholder': '프린터, 결제, 주문 등을 검색해 보세요',
      'manual.clear': '지우기',
      'manual.browseStatus': '아래 주제를 둘러보거나 검색해 보세요.',
      'manual.foundOne': '{count}개 주제를 찾았습니다.',
      'manual.foundMany': '{count}개 주제를 찾았습니다.',
      'manual.browseTopics': '주제 둘러보기',
      'manual.topicsNav': '매뉴얼 주제',
      'manual.needHand': '도움이 필요하신가요?',
      'contact.open': '문의하기',
      'inquiry.title': '문의하기',
      'inquiry.close': '문의 닫기',
      'inquiry.intro': '매장에 대해 알려 주시면 영업 담당자가 연락드립니다. 전화가 편하신가요?',
      'inquiry.name': '이름',
      'inquiry.namePlaceholder': '이름',
      'inquiry.phone': '전화번호',
      'inquiry.email': '이메일 주소',
      'inquiry.shop': '매장명 및 주소',
      'inquiry.shopPlaceholder': '매장 이름과 주소',
      'inquiry.suburb': '지역 (Suburb)',
      'inquiry.suburbPlaceholder': '지역 (Suburb)',
      'inquiry.message': '문의 내용 (선택)',
      'inquiry.messagePlaceholder': '필요하신 내용을 알려 주세요',
      'inquiry.error': '문의가 전송되었는지 확인하지 못했습니다. 입력하신 내용은 그대로 남아 있습니다. 다시 시도하시거나 다음 주소로 이메일을 보내 주세요:',
      'inquiry.submit': '메시지 보내기',
      'inquiry.sending': '보내는 중…',
      'inquiry.consent': '제출하시면 문의와 관련한 연락을 받는 데 동의하게 됩니다.',
      'inquiry.help': '이메일로도 문의하실 수 있습니다:',
      'inquiry.successTitle': '문의해 주셔서 감사합니다.',
      'inquiry.successBody': '문의가 Poble에 접수되었습니다. 곧 연락드리겠습니다.',
      'inquiry.done': '완료',
    },
    'zh-CN': {
      'skip': '跳到主要内容',
      'nav.home': 'Poble 首页',
      'nav.main': '主导航',
      'nav.mobile': '移动端导航',
      'nav.products': '产品',
      'nav.pricing': '价格',
      'nav.customers': '客户案例',
      'nav.hardware': '硬件',
      'nav.about': '关于我们',
      'nav.openMenu': '打开菜单',
      'nav.closeMenu': '关闭菜单',
      'language.button': '语言：{language}',
      'language.menu': '选择语言',
      'support.nav': '支持与政策',
      'support.manual': '使用手册',
      'support.terms': '服务条款',
      'support.privacy': '隐私政策',
      'support.cookies': 'Cookie 政策',
      'footer.copyright': '© 2026 Poble。ECNESOFT 门店管理解决方案。',
      'footer.nav': '支持与法律信息',
      'legal.eyebrow': '法律信息',
      'legal.lastUpdated': '最近更新：',
      'legal.onThisPage': '本页内容',
      'legal.englishOnly': '本政策仅提供英文版本，以英文原文为准。',
      'terms.title': '服务条款',
      'terms.docTitle': '服务条款 — Poble',
      'terms.description': 'Poble 服务条款，由 ECNESOFT PTY LTD 提供。',
      'privacy.title': '隐私政策',
      'privacy.docTitle': '隐私政策 — Poble',
      'privacy.description': 'Poble 隐私政策，由 ECNESOFT PTY LTD 提供。',
      'cookies.title': 'Cookie 政策',
      'cookies.docTitle': 'Cookie 政策 — Poble',
      'cookies.description': 'Poble Cookie 政策，由 ECNESOFT PTY LTD 提供。',
      'manual.eyebrow': '支持',
      'manual.title': '用户手册。',
      'manual.docTitle': '用户手册 — Poble',
      'manual.description': 'Poble 实用指南：账户设置、点单、支付、打印机和系统对接。',
      'manual.lede1': '从首次登录到繁忙营业。',
      'manual.lede2': '查找 Poble 的实用使用指南。',
      'manual.searchLabel': '搜索手册',
      'manual.searchPlaceholder': '试试搜索打印机、支付或订单',
      'manual.clear': '清除',
      'manual.browseStatus': '浏览以下主题，或搜索帮助内容。',
      'manual.foundOne': '找到 {count} 个主题。',
      'manual.foundMany': '找到 {count} 个主题。',
      'manual.browseTopics': '浏览主题',
      'manual.topicsNav': '手册主题',
      'manual.needHand': '需要帮助？',
      'contact.open': '联系我们',
      'inquiry.title': '联系我们',
      'inquiry.close': '关闭咨询',
      'inquiry.intro': '告诉我们您门店的情况，销售顾问会尽快与您联系。想直接打电话？',
      'inquiry.name': '您的姓名',
      'inquiry.namePlaceholder': '您的姓名',
      'inquiry.phone': '电话号码',
      'inquiry.email': '电子邮箱',
      'inquiry.shop': '门店名称和地址',
      'inquiry.shopPlaceholder': '门店名称和地址',
      'inquiry.suburb': '所在区域 (Suburb)',
      'inquiry.suburbPlaceholder': '所在区域 (Suburb)',
      'inquiry.message': '咨询内容（选填）',
      'inquiry.messagePlaceholder': '告诉我们您的需求',
      'inquiry.error': '我们无法确认您的咨询已发送。您填写的信息仍保留在此。请重试，或发送邮件至',
      'inquiry.submit': '发送消息',
      'inquiry.sending': '正在发送…',
      'inquiry.consent': '提交即表示您同意我们就此次咨询与您联系。',
      'inquiry.help': '您也可以发送邮件至',
      'inquiry.successTitle': '感谢您的联系。',
      'inquiry.successBody': '您的咨询已提交至 Poble。我们的团队会尽快与您联系。',
      'inquiry.done': '完成',
    },
    ja: {
      'skip': '本文へスキップ',
      'nav.home': 'Poble ホーム',
      'nav.main': 'メイン',
      'nav.mobile': 'モバイルメニュー',
      'nav.products': '製品',
      'nav.pricing': '料金',
      'nav.customers': '導入事例',
      'nav.hardware': 'ハードウェア',
      'nav.about': '会社概要',
      'nav.openMenu': 'メニューを開く',
      'nav.closeMenu': 'メニューを閉じる',
      'language.button': '言語：{language}',
      'language.menu': '言語を選択',
      'support.nav': 'サポートとポリシー',
      'support.manual': 'マニュアル',
      'support.terms': '利用規約',
      'support.privacy': 'プライバシー',
      'support.cookies': 'Cookie',
      'footer.copyright': '© 2026 Poble. ECNESOFT による店舗管理ソリューション。',
      'footer.nav': 'サポートと規約',
      'legal.eyebrow': '法的情報',
      'legal.lastUpdated': '最終更新：',
      'legal.onThisPage': 'このページの内容',
      'legal.englishOnly': 'このポリシーは英語でのみ提供しており、英語の原文が正式な版です。',
      'terms.title': '利用規約',
      'terms.docTitle': '利用規約 — Poble',
      'terms.description': 'ECNESOFT PTY LTD が提供する Poble の利用規約。',
      'privacy.title': 'プライバシーポリシー',
      'privacy.docTitle': 'プライバシーポリシー — Poble',
      'privacy.description': 'ECNESOFT PTY LTD が提供する Poble のプライバシーポリシー。',
      'cookies.title': 'Cookie ポリシー',
      'cookies.docTitle': 'Cookie ポリシー — Poble',
      'cookies.description': 'ECNESOFT PTY LTD が提供する Poble の Cookie ポリシー。',
      'manual.eyebrow': 'サポート',
      'manual.title': 'ユーザーマニュアル。',
      'manual.docTitle': 'ユーザーマニュアル — Poble',
      'manual.description': 'アカウント設定、注文、決済、プリンター、連携に関する Poble の実用ガイド。',
      'manual.lede1': '初めてのログインから、忙しい営業時間まで。',
      'manual.lede2': 'Poble を使うための実用ガイドをご覧ください。',
      'manual.searchLabel': 'マニュアルを検索',
      'manual.searchPlaceholder': 'プリンター、決済、注文などで検索',
      'manual.clear': 'クリア',
      'manual.browseStatus': '下のトピックを見るか、検索してください。',
      'manual.foundOne': '{count} 件のトピックが見つかりました。',
      'manual.foundMany': '{count} 件のトピックが見つかりました。',
      'manual.browseTopics': 'トピック一覧',
      'manual.topicsNav': 'マニュアルのトピック',
      'manual.needHand': 'お困りですか？',
      'contact.open': 'お問い合わせ',
      'inquiry.title': 'お問い合わせ',
      'inquiry.close': 'お問い合わせを閉じる',
      'inquiry.intro': '店舗について教えていただければ、営業担当よりご連絡します。お電話をご希望ですか？',
      'inquiry.name': 'お名前',
      'inquiry.namePlaceholder': 'お名前',
      'inquiry.phone': '電話番号',
      'inquiry.email': 'メールアドレス',
      'inquiry.shop': '店舗名と住所',
      'inquiry.shopPlaceholder': '店舗名と住所',
      'inquiry.suburb': '地域 (Suburb)',
      'inquiry.suburbPlaceholder': '地域 (Suburb)',
      'inquiry.message': 'お問い合わせ内容（任意）',
      'inquiry.messagePlaceholder': 'ご要望をお聞かせください',
      'inquiry.error': 'お問い合わせの送信を確認できませんでした。入力内容はそのまま残っています。もう一度お試しいただくか、次の宛先までメールでご連絡ください：',
      'inquiry.submit': 'メッセージを送信',
      'inquiry.sending': '送信中…',
      'inquiry.consent': '送信すると、お問い合わせについて当社から連絡することに同意したものとみなされます。',
      'inquiry.help': 'メールでのお問い合わせも可能です：',
      'inquiry.successTitle': 'お問い合わせありがとうございます。',
      'inquiry.successBody': 'お問い合わせは Poble に送信されました。担当者よりご連絡いたします。',
      'inquiry.done': '完了',
    },
  };

  function readLocale() {
    try {
      const match = document.cookie.match(/(?:^|;\s*)poble-locale=([^;]*)/);
      const value = match ? decodeURIComponent(match[1]) : '';
      return LOCALES.includes(value) ? value : 'en';
    } catch {
      return 'en';
    }
  }

  const locale = readLocale();
  const dictionary = MESSAGES[locale];

  /** Text for a key in the current language, falling back to English, never to the key. */
  function t(key, values) {
    let text = dictionary[key];
    if (typeof text !== 'string' || (text === '' && MESSAGES.en[key] !== '')) text = MESSAGES.en[key];
    if (typeof text !== 'string') text = '';
    return text.replace(/\{(\w+)\}/g, (_, name) => (values && name in values ? String(values[name]) : ''));
  }

  function applyTranslations() {
    document.documentElement.lang = locale;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(';').forEach(pair => {
        const [attr, key] = pair.split(':');
        if (attr && key) el.setAttribute(attr.trim(), t(key.trim()));
      });
    });

    const page = document.body.dataset.page;
    if (page && MESSAGES.en[`${page}.docTitle`]) {
      document.title = t(`${page}.docTitle`);
      document.querySelector('meta[name="description"]')?.setAttribute('content', t(`${page}.description`));
    }

    // Dates follow the language's own format; the machine-readable value is unchanged.
    document.querySelectorAll('time[datetime]').forEach(el => {
      const date = new Date(`${el.getAttribute('datetime')}T00:00:00`);
      if (!Number.isNaN(date.getTime())) {
        el.textContent = new Intl.DateTimeFormat(locale === 'en' ? 'en-AU' : locale, { dateStyle: 'long' }).format(date);
      }
    });

    // Policies are published in English only; say so in the visitor's language.
    const notice = t('legal.englishOnly');
    const hero = document.querySelector('[data-english-only]');
    if (notice && hero) {
      const p = document.createElement('p');
      p.className = 'support-meta english-only';
      p.textContent = notice;
      hero.append(p);
    }

    // Manual topics in the chosen language, from the page's own templates.
    const template = document.querySelector(`template[data-manual-locale="${locale}"]`);
    if (template) {
      const content = template.content;
      const topics = content.querySelector('[data-manual-topics]');
      const body = content.querySelector('.manual-content');
      if (topics) document.querySelector('[data-manual-topics]')?.replaceWith(topics.cloneNode(true));
      if (body) document.querySelector('.manual-content')?.replaceWith(body.cloneNode(true));
    }
  }

  function saveLocale(next) {
    try {
      document.cookie = `${COOKIE}=${encodeURIComponent(next)}; path=/; max-age=${MAX_AGE}; samesite=lax`;
    } catch {
      // Cookies blocked: the page still switches for this view.
    }
  }

  /** Header menu button: Arrow keys, Home/End, Escape, Tab and outside clicks as on the main site. */
  function setUpSelector(root) {
    const button = root.querySelector('.lang-button');
    const menu = root.querySelector('.lang-menu');
    const items = [...menu.querySelectorAll('[role="menuitemradio"]')];
    const current = Math.max(0, LOCALES.indexOf(locale));

    button.setAttribute('aria-label', t('language.button', { language: NAMES[locale] }));
    root.querySelector('.lang-name').textContent = NAMES[locale];
    root.querySelector('.lang-name').lang = locale;
    root.querySelector('.lang-short').textContent = SHORT[locale];
    root.querySelector('.lang-short').lang = locale;
    menu.setAttribute('aria-label', t('language.menu'));
    items.forEach(item => item.setAttribute('aria-checked', String(item.dataset.locale === locale)));

    const isOpen = () => !menu.hidden;
    // Move the menu sideways just enough to stay on screen, as on the main site.
    const keepInViewport = () => {
      menu.style.transform = '';
      const rect = menu.getBoundingClientRect();
      const width = document.documentElement.clientWidth;
      let shift = 0;
      if (rect.left < 8) shift = 8 - rect.left;
      else if (rect.right > width - 8) shift = width - 8 - rect.right;
      if (shift) menu.style.transform = `translateX(${Math.round(shift)}px)`;
    };
    const open = index => {
      menu.hidden = false;
      keepInViewport();
      button.setAttribute('aria-expanded', 'true');
      root.dataset.open = 'true';
      items[index]?.focus({ preventScroll: true });
    };
    const close = restoreFocus => {
      menu.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      root.dataset.open = 'false';
      if (restoreFocus) button.focus({ preventScroll: true });
    };

    button.addEventListener('click', () => (isOpen() ? close(false) : open(current)));
    button.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        open(event.key === 'ArrowDown' ? current : items.length - 1);
      }
    });
    menu.addEventListener('keydown', event => {
      const index = items.indexOf(document.activeElement);
      const last = items.length - 1;
      let next = null;
      if (event.key === 'ArrowDown') next = index === last ? 0 : index + 1;
      else if (event.key === 'ArrowUp') next = index <= 0 ? last : index - 1;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = last;
      else if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(true); return; }
      else if (event.key === 'Tab') { close(false); return; }
      if (next === null) return;
      event.preventDefault();
      items[next].focus();
    });
    items.forEach(item => item.addEventListener('click', () => {
      const next = item.dataset.locale;
      close(true);
      if (next === locale || !LOCALES.includes(next)) return;
      saveLocale(next);
      window.location.reload();
    }));
    document.addEventListener('pointerdown', event => {
      if (isOpen() && !root.contains(event.target)) close(false);
    });
  }

  window.PobleI18n = { locale, t, messages: MESSAGES };
  try {
    applyTranslations();
    document.querySelectorAll('.lang-select').forEach(setUpSelector);
  } finally {
    document.documentElement.classList.remove('i18n-pending');
  }
})();
