import type { Messages } from "./en";

/** Korean (한국어). Brand, venue and person names, prices and contact details are unchanged. */
export const ko: Messages = {
  meta: {
    siteDescription: "호주의 모던 매장을 위해 만든 가장 빠르고 안정적인 iPad POS를 경험해 보세요.",
    home: {
      title: "Poble — 호주 외식업을 위한 가벼운 POS",
      description: "호주 카페와 레스토랑을 위한 iPad POS. 카운터, 주방, 백오피스를 하나의 흐름으로 연결하세요.",
    },
    pricing: {
      title: "요금",
      description: "Poble Basic은 월 $60입니다. 선택 기능은 월 요금이 별도로 부과됩니다.",
    },
    features: {
      title: "기능",
      description:
        "Poble POS, 직원용 POS, 주방 디스플레이, 듀얼 스크린, 셀프 주문 키오스크, 테이블 오더, 멤버십 CRM — 매장 전체를 하나로 연결하는 시스템.",
    },
    customers: {
      title: "고객 사례",
      description: "Woojeong, Kidsday, Wind & Flour 같은 호주 매장이 Poble로 더 빠르고 여유롭게 운영하는 방법.",
    },
    hardware: {
      title: "하드웨어",
      description: "Poble POS 호환성을 검증하고 원가로 판매합니다. 매장용 스탠드, 프린터, 액세서리.",
    },
    enquiry: {
      title: "문의 보내기",
      description: "매장과 필요한 기능을 알려주세요. Poble 전문가가 매장 구성과 견적을 안내해 드립니다.",
    },
  },

  common: {
    skipToContent: "본문으로 건너뛰기",
    contactUs: "문의하기",
    viewPricing: "요금 보기",
    talkToSales: "영업팀과 상담",
    explore: "자세히 보기",
    done: "완료",
    sending: "보내는 중…",
    opensInNewTab: "{label} — 새 탭에서 열림",
    ticks: ["약정 없음", "숨은 비용 없음", "주 7일 지원"],
  },

  nav: {
    homeLabel: "Poble 홈",
    mainLabel: "주 메뉴",
    moreLabel: "추가 메뉴",
    mobileLabel: "모바일 메뉴",
    products: "제품",
    pricing: "요금",
    customers: "고객 사례",
    about: "회사 소개",
    signIn: "로그인",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
  },

  language: {
    label: "언어",
    button: "언어: {language}",
    menu: "언어 선택",
  },

  footer: {
    copyright: "© 2026 Poble. ECNESOFT의 매장 관리 솔루션.",
    navLabel: "지원 및 약관",
    manual: "매뉴얼",
    terms: "이용약관",
    privacy: "개인정보처리방침",
    cookies: "쿠키 정책",
  },

  products: {
    pos: {
      name: "Poble POS",
      kicker: "POS",
      title: "카운터의 중심.",
      lede: "주문, 결제, 마감 리포트를 깔끔한 한 화면에서.",
      imageAlt: "화면에 표시된 Poble POS",
      points: [
        { title: "바쁜 시간에 강하게", body: "빠른 터치 반응과 오프라인에서도 안정적인 운영." },
        { title: "Tyro·Linkly 연동", body: "결제 금액이 단말기로 바로 전송됩니다." },
        { title: "실시간 메뉴 관리", body: "가격을 바꾸면 모든 단말기에 즉시 반영됩니다." },
      ],
    },
    "staff-pos": {
      name: "직원용 POS",
      kicker: "핸드헬드",
      title: "카운터를 테이블로.",
      lede: "테이블에서 주문을 받아 주방으로 바로 보내세요.",
      imageAlt: "화면에 표시된 Poble 직원용 POS",
      points: [
        { title: "새로 배울 것이 없습니다", body: "메인 POS와 똑같이 작동합니다." },
        { title: "주방으로 바로", body: "카운터까지 오갈 필요가 없습니다." },
        { title: "실수는 줄이고", body: "옵션을 주문 받는 자리에서 바로 입력합니다." },
      ],
    },
    kds: {
      name: "주방 디스플레이",
      kicker: "주방",
      title: "만석에도 여유로운 주방.",
      lede: "모든 주문을 하나의 대기열에, 대기 시간별 색상으로 구분합니다.",
      imageAlt: "화면에 표시된 주방 디스플레이",
      points: [
        { title: "주문서 누락 없이", body: "완료 처리 전까지 주문이 화면에 남아 있습니다." },
        { title: "긴급도를 한눈에", body: "시간이 지날수록 티켓 색상이 바뀝니다." },
        { title: "완료와 되돌리기", body: "탭 한 번으로 주문을 완료하거나 다시 불러옵니다." },
      ],
    },
    "dual-screen": {
      name: "듀얼 스크린",
      kicker: "고객용 디스플레이",
      title: "카운터의 투명성.",
      lede: "주문하는 모든 품목을 고객이 직접 확인합니다.",
      imageAlt: "화면에 표시된 듀얼 스크린",
      points: [
        { title: "실시간 주문 확인", body: "가격이 실시간으로 업데이트됩니다." },
        { title: "결제 사이에도 브랜드 노출", body: "프로모션과 적립 안내." },
        { title: "매끄러운 결제", body: "합계 금액이 항상 표시됩니다." },
      ],
    },
    kiosk: {
      name: "셀프 주문 키오스크",
      kicker: "셀프 서비스",
      title: "줄은 짧게. 객단가는 높게.",
      lede: "손님이 직접 주문하고 추천 메뉴를 둘러보게 하세요.",
      imageAlt: "화면에 표시된 셀프 주문 키오스크",
      points: [
        { title: "대기 줄 해소", body: "손님이 직접 주문합니다." },
        { title: "빠짐없는 추가 판매", body: "키오스크는 추천을 잊지 않습니다." },
        { title: "카운터와 같은 대기열", body: "키오스크 주문과 카운터 주문이 같은 대기열로 들어갑니다." },
      ],
    },
    "table-ordering": {
      name: "테이블 오더",
      kicker: "테이블 오더",
      title: "자리에서 바로 주문.",
      lede: "손님이 테이블에서 메뉴를 보고 주문합니다.",
      imageAlt: "화면에 표시된 테이블 오더",
      points: [
        { title: "앱 하나로 모든 테이블", body: "테이블을 고르고 바로 주문을 시작하세요." },
        { title: "언제나 최신 메뉴", body: "품절 메뉴는 즉시 사라집니다." },
        { title: "추가 주문은 더 쉽게", body: "탭 한 번이면 재주문이 끝납니다." },
      ],
    },
    crm: {
      name: "멤버십 CRM",
      kicker: "고객 적립",
      title: "손님을 단골로.",
      lede: "포인트, 바우처, 온라인 주문, 웨이팅을 하나의 프로필에서.",
      imageAlt: "화면에 표시된 멤버십 CRM",
      points: [
        { title: "간편한 포인트", body: "카운터에서 적립하고 사용합니다." },
        { title: "미리 주문", body: "결제하는 순간 잔액이 업데이트됩니다." },
        { title: "스마트 웨이팅", body: "QR 코드로 등록하고 준비되면 알림을 받습니다." },
      ],
    },
  },

  stories: {
    woojeong: {
      venue: "한식당 · 퍼스",
      imageAlt: "퍼스의 한식당 Woojeong",
      quote: "퍼스에서 바쁜 한식당을 운영하려면 무엇보다 안정성이 중요합니다. Poble 덕분에 테이블 서비스가 바로 간편해졌어요.",
      author: "Min-ji Park",
      body: "예전에는 주문을 손으로 적고 카운터에서 다시 입력했습니다. 이제는 테이블에서 주방으로 바로 전달됩니다.",
      results: ["첫 근무부터 간편해진 테이블 서비스", "몇 초 만에 끝나는 마감 정산"],
    },
    kidsday: {
      venue: "키즈 카페 · 시드니",
      imageAlt: "시드니의 키즈 카페 Kidsday",
      quote: "입장권 판매와 카페 주문에 단말기 두 대를 씁니다. 동기화가 즉시 이뤄지고, 주문이 몰려도 거뜬합니다.",
      author: "Sarah Lee",
      body: "한 카운터에서는 입장권을, 다른 카운터에서는 카페를 운영합니다. 단말기 두 대, 주방 대기열 하나, 마감 리포트 하나.",
      results: ["항상 동기화되는 단말기 두 대", "하루 매출을 한눈에"],
    },
    "wind-and-flour": {
      venue: "베이커리 카페 · 시드니",
      imageAlt: "시드니의 베이커리 카페 Wind & Flour",
      quote: "저희 메뉴는 시간마다 바뀝니다. 바쁜 와중에도 카운터에서 바로 메뉴를 수정할 수 있게 되면서 아침 영업이 완전히 달라졌어요.",
      author: "Wind & Flour 팀",
      body: "페이스트리는 점심 전에 품절됩니다. 직원이 카운터에서 품절 처리하면 모든 화면에 즉시 반영됩니다.",
      results: ["카운터에서 바로 품절 처리", "신입 직원도 첫 근무부터 주문 접수"],
    },
  },

  home: {
    hero: {
      line1: "더 여유로운 카운터.",
      line2: "하나로 연결된 매장.",
      description: "호주 카페와 레스토랑을 위한 iPad POS. 카운터, 주방, 백오피스를 하나의 흐름으로 연결하세요.",
      explore: "Poble 둘러보기",
      filmLabel:
        "Poble POS, 셀프 주문, 주방 디스플레이가 Poble 로고를 중심으로 하나로 모입니다. Poble 제품 화면이며, 선택 기능은 별도 요금이 부과됩니다.",
      photoAlt: "카페 카운터의 Poble",
      posAlt: "Poble POS 제품 화면",
      orderAlt: "Poble 셀프 주문 화면",
      kitchenAlt: "Poble 주방 디스플레이 화면",
    },
    features: {
      line1: "하나의 시스템.",
      line2: "매장의 모든 곳에.",
      viewPricing: "요금 및 추가 기능 보기",
      tabsLabel: "Poble 제품",
      picker: "제품 살펴보기",
      talkSetup: "매장 구성 상담하기",
    },
    payments: {
      heading: "결제까지 연결.",
      intro: "Poble 구성에 맞는 결제 옵션을 살펴보세요.",
      explorePartner: "{label} 살펴보기",
      partnerHeading: "다음 연결을 함께 만들어요.",
      partnerBody: "결제 또는 기술 파트너십을 구상하고 계신가요? 이야기를 듣고 싶습니다.",
    },
    uber: {
      line1: "카운터에서",
      line2: "배달까지 연결.",
      body: "Uber Eats를 Poble에 연동하세요.",
    },
    pricing: {
      line1: "우리 매장에 맞게.",
      line2: "필요한 구성으로.",
      labelQuote: "맞춤 구성",
      labelEstimate: "예상 월 요금",
      labelBasic: "Poble Basic 플랜",
      perMonth: "/월",
      meta: "매장당 AUD · 월 단위 계약",
      breakdownQuote: "선택하신 도구는 견적이 필요합니다. 다른 선택 사항은 그대로 저장됩니다.",
      breakdown: "Poble Basic ${base} + 선택 옵션 ${addOns}",
      trial: "1개월 무료 체험",
      mobileEstimate: "예상 월 요금",
      addHeading: "매장에 필요한 도구를 추가하세요.",
      addIntro: "월 ${base}의 Poble Basic으로 시작하세요. 옵션을 선택하면 예상 월 요금을 확인할 수 있습니다. 모든 가격은 AUD 기준입니다.",
      legend: "월 옵션 선택",
      devices: "기기 수",
      decrease: "{name} 기기 수 줄이기",
      increase: "{name} 기기 수 늘리기",
      quantity: "{name} 기기 수량",
      addNote: "추가 POS, 테이블 오더, 멤버십 & 적립, 키오스크, 테이블 예약, 웨이팅은 매장에 맞춰 견적을 드립니다. 문의하는 동안 다른 선택 사항은 이 페이지에 그대로 유지됩니다.",
      faqHeading: "시작하기 전에",
      groups: {
        devices: "기기",
        operations: "운영",
        enquiry: "문의 필요",
      },
      options: {
        staff: { name: "직원용 오더", note: "" },
        kds: { name: "주방 디스플레이 (KDS)", note: "태블릿 필요" },
        "table-order": { name: "테이블 오더", note: "견적 문의" },
        extra: { name: "추가 POS 기기", note: "견적 문의" },
        crm: { name: "멤버십 & 적립", note: "CRM / 리워드 · 견적 문의" },
        online: { name: "온라인 주문 (QR)", note: "" },
        uber: { name: "Uber Eats 연동", note: "" },
        management: { name: "테이블 관리", note: "" },
        kiosk: { name: "셀프 주문 키오스크", note: "견적 문의" },
        booking: { name: "테이블 예약", note: "견적 문의" },
        waitlist: { name: "웨이팅", note: "견적 문의" },
      },
      faqs: [
        {
          q: "$60에 모든 기능이 포함되나요?",
          a: "$60 Basic 플랜은 시작 가격입니다. 직원용 오더와 주방 디스플레이는 기기당 요금이 부과됩니다. 그 밖의 옵션을 선택하면 예상 월 요금에 반영되며, 추가 POS·테이블 오더·멤버십 & 적립·키오스크·테이블 예약·웨이팅은 견적이 필요합니다.",
        },
        {
          q: "무료 1개월은 어떻게 진행되나요?",
          a: "체험 기간 동안 Basic 플랜을 한 달간 이용하실 수 있습니다. 시작 전에 매장 정보를 확인합니다. 설치와 결제 관련 내용은 저희 팀에 문의해 주세요.",
        },
        {
          q: "가지고 있는 iPad를 써도 되나요?",
          a: "네. Poble은 iPad 8세대 이상을 지원합니다. 프린터, 스탠드, 결제 단말기도 저희 팀이 도와드립니다.",
        },
        {
          q: "약정 계약이 있나요?",
          a: "소프트웨어 플랜은 월 단위로 운영됩니다. 언제든지 해지할 수 있습니다.",
        },
      ],
    },
    customers: {
      heading: "호주 매장 곳곳에서 함께합니다.",
      seeSetup: "매장 구성 보기",
      setupFor: " ({name})",
    },
    about: {
      heading: "카운터 곁에서 만들었습니다.",
      body1: "ECNESOFT는 호주 외식업을 위해 호주에서 Poble을 만듭니다. 저희 팀은 2002년부터 POS 분야에서 일해 왔습니다.",
      body2: "Poble은 실제 영업 현장에서 다듬어졌습니다 — 아침의 러시, 더치페이, 절대 놓쳐서는 안 되는 주문서까지.",
      signature1: "호주 외식업을 위해.",
      signature2: "현지에서 직접 지원합니다.",
      byline: "Poble by ECNESOFT",
    },
    contact: {
      heading: "매장에 대해 이야기해 주세요.",
      body: "데모 예약, 매장 구성 계획, POS 전환 상담까지 도와드립니다.",
      cta: "문의 보내기",
    },
  },

  inquiry: {
    title: "문의하기",
    close: "문의 닫기",
    intro: "매장에 대해 알려 주시면 영업 담당자가 연락드립니다. 전화가 편하신가요?",
    name: "이름",
    namePlaceholder: "이름",
    phone: "전화번호",
    email: "이메일 주소",
    shop: "매장명 및 주소",
    shopPlaceholder: "매장 이름과 주소",
    suburb: "지역 (Suburb)",
    suburbPlaceholder: "지역 (Suburb)",
    message: "문의 내용 (선택)",
    messagePlaceholder: "필요하신 내용을 알려 주세요",
    error: "문의가 전송되었는지 확인하지 못했습니다. 입력하신 내용은 그대로 남아 있습니다. 다시 시도하시거나 다음 주소로 이메일을 보내 주세요:",
    submit: "메시지 보내기",
    consent: "제출하시면 문의와 관련한 연락을 받는 데 동의하게 됩니다.",
    help: "이메일로도 문의하실 수 있습니다:",
    successTitle: "문의해 주셔서 감사합니다.",
    successBody: "문의가 Poble에 접수되었습니다. 곧 연락드리겠습니다.",
  },

  enquiry: {
    back: "홈으로 돌아가기",
    heading1: "우리 매장에 맞는",
    heading2: "Poble 구성.",
    intro: "POS, 주문, 멤버십. 필요한 기능을 알려주세요.",
    footnote: "몇 가지 질문으로 매장에 필요한 구성을 확인합니다.",
    progressLabel: "문의 진행 상황",
    step: "{current} / {total} 단계",
    reviewStep: "Poble 문의 내용 확인",
    percent: "{percent}% 완료",
    previous: "이전 질문",
    next: "다음 질문",
    continue: "다음",
    review: "문의 내용 확인",
    edit: "답변 수정",
    reviewHeading: "선택하신 Poble 구성입니다.",
    reviewHint: "답변을 확인한 뒤 문의를 보내주세요. 보내기 전까지 언제든 수정할 수 있습니다.",
    priceNote: "추가 옵션에는 별도 비용이 발생합니다. 문의 작성 완료 후 Poble 전문가와 상담하여 전체 견적을 받으실 수 있습니다.",
    empty: "—",
    questions: {
      venue: "어떤 매장을 운영하시나요?",
      reason: "Poble 도입 목적은 무엇인가요?",
      features: "어떤 Poble 기능이 필요하신가요?",
      venues: "몇 개 매장에 Poble이 필요한가요?",
      timing: "언제 도입할 예정인가요?",
      business: "매장 정보를 알려주세요.",
      contact: "연락처를 알려주세요."
    },
    hints: {
      features: "POBLE POS는 기본 선택입니다. 추가 기능은 복수 선택할 수 있습니다. ?를 누르면 기능 설명을 볼 수 있습니다.",
      contact: "맞춤 구성 상담이나 데모 예약을 위해 연락처를 남겨주세요."
    },
    options: {
      venue: {
        cafe: "카페 / 베이커리",
        restaurant: "레스토랑",
        takeaway: "테이크어웨이 / 패스트푸드",
        bar: "바 / 펍",
        "food-truck": "푸드트럭",
        other: "기타 외식업 매장"
      },
      reason: {
        "new-venue": "신규 매장 오픈",
        "replace-pos": "기존 POS 교체",
        "add-tools": "기존 시스템에 기능 추가",
        exploring: "도입 검토 중"
      },
      venues: {
        one: "1개 매장",
        "two-three": "2~3개 매장",
        "four-plus": "4개 이상 매장",
        planning: "계획 중"
      },
      timing: {
        asap: "가능한 빨리",
        "one-month": "1개월 이내",
        "one-three-months": "1~3개월 이내",
        researching: "정보 수집 중"
      }
    },
    features: {
      "poble-pos": "POBLE POS",
      "staff-pos": "직원용 POS",
      "table-ordering": "테이블 주문",
      kds: "KDS",
      membership: "멤버십 & 리워드",
      "online-qr": "온라인 & QR 주문",
      kiosk: "셀프 주문 키오스크",
      "uber-eats": "Uber Eats 연동",
      booking: "예약 관리",
      waitlist: "대기 고객 관리",
      stock: "재고 관리",
      "staff-management": "직원 관리",
      other: "기타 요청사항"
    },
    groups: {
      starting: "기본 구성",
      popular: "이 업종에서 자주 사용하는 기능",
      more: "추가 기능",
      optional: "선택 기능"
    },
    defaultTag: "기본 · 항상 선택됨",
    about: "기능 설명: {name}",
    closeDetails: "기능 설명 닫기",
    otherLabel: "추가로 필요한 사항을 알려주세요.",
    otherPlaceholder: "필요한 기능이나 지원 내용을 적어주세요.",
    details: {
      "poble-pos": {
        title: "테이크어웨이를 위한 POS.",
        body: "간편하고 빠른 결제와 정확하고 시각적인 리포트 분석을 지원합니다.",
        points: [
          {
            title: "빠르고 간편한 결제",
            body: "쉬운 결제 흐름으로 카운터를 멈춤 없이 운영하세요."
          },
          {
            title: "한눈에 보는 리포트",
            body: "정확하고 시각적인 리포트로 매장 현황을 파악하세요."
          }
        ]
      },
      "staff-pos": {
        title: "카운터를 테이블로.",
        body: "메인 POS와 같은 방식으로 테이블에서 주문과 옵션을 입력하고 주방으로 바로 전송하여 이동과 주문 실수를 줄입니다.",
        points: [
          {
            title: "새로 배울 필요 없음",
            body: "메인 POS와 똑같이 작동합니다."
          },
          {
            title: "주방으로 바로",
            body: "카운터로 돌아갈 필요가 없습니다."
          },
          {
            title: "실수는 줄이고",
            body: "옵션을 주문 받는 자리에서 바로 입력합니다."
          }
        ]
      },
      "table-ordering": {
        title: "자리에서 바로 주문.",
        body: "고객이 테이블에서 실시간 메뉴를 보고 주문합니다. 품절 메뉴는 즉시 사라지고 추가 주문도 간편합니다.",
        points: [
          {
            title: "하나의 앱, 모든 테이블",
            body: "테이블을 고르고 바로 주문을 시작하세요."
          },
          {
            title: "언제나 최신 메뉴",
            body: "품절 메뉴는 즉시 사라집니다."
          },
          {
            title: "추가 주문도 쉽게",
            body: "터치 한 번으로 다시 주문합니다."
          }
        ]
      },
      kds: {
        title: "바쁜 시간에도 차분한 주방.",
        body: "주문을 완료할 때까지 화면에 표시하며 대기 시간에 따라 색상이 바뀝니다. 터치 한 번으로 완료하거나 다시 불러올 수 있습니다.",
        points: [
          {
            title: "주문서를 놓치지 않게",
            body: "완료 처리할 때까지 주문이 화면에 남습니다."
          },
          {
            title: "급한 주문이 한눈에",
            body: "시간이 지날수록 티켓 색상이 바뀝니다."
          },
          {
            title: "완료와 다시 불러오기",
            body: "터치 한 번으로 완료하거나 다시 불러옵니다."
          }
        ]
      },
      membership: {
        title: "방문 고객을 단골로.",
        body: "포인트, 바우처, 온라인 주문, 대기 관리를 한 프로필로 연결합니다. 카운터 적립·사용, 결제 후 잔액 갱신, QR 대기 등록과 알림을 지원합니다.",
        points: [
          {
            title: "간편한 포인트",
            body: "카운터에서 바로 적립하고 사용합니다."
          },
          {
            title: "미리 주문",
            body: "결제 즉시 잔액이 갱신됩니다."
          },
          {
            title: "스마트 웨이팅",
            body: "QR코드로 등록하고 준비되면 알림을 받습니다."
          }
        ]
      },
      "online-qr": {
        title: "스캔하고 간편하게 주문.",
        body: "고객이 QR코드로 메뉴를 보고 정확하게 주문하여 홀과 주방 사이의 주문 실수를 줄입니다. 온라인 픽업·배달 주문도 지원합니다.",
        points: [
          {
            title: "쉬운 QR 주문",
            body: "고객이 코드를 스캔해 메뉴를 보고 주문합니다."
          },
          {
            title: "더 정확한 주문",
            body: "고객의 선택을 정확히 받아 수기 입력을 줄입니다."
          },
          {
            title: "온라인 주문도 편리하게",
            body: "픽업과 배달 주문을 지원합니다."
          }
        ]
      },
      kiosk: {
        title: "대기는 짧게, 주문은 풍성하게.",
        body: "고객이 직접 주문하고 추천 추가 메뉴를 확인합니다. 키오스크와 카운터 주문은 같은 대기열로 모입니다.",
        points: [
          {
            title: "줄 서지 않고",
            body: "고객이 직접 주문합니다."
          },
          {
            title: "빠짐없는 추천",
            body: "키오스크는 추가 메뉴 제안을 잊지 않습니다."
          },
          {
            title: "카운터와 같은 대기열",
            body: "키오스크 주문과 카운터 주문이 같은 대기열로 모입니다."
          }
        ]
      },
      "uber-eats": {
        title: "Uber Eats 주문을 주방으로.",
        body: "Uber Eats를 Poble에 연동하여 버튼 한 번으로 주방에 주문을 전송하세요.",
        points: [
          {
            title: "연결된 주문",
            body: "Uber Eats를 Poble 업무 흐름에 연결합니다."
          },
          {
            title: "버튼 하나로 전달",
            body: "주문을 주방으로 바로 보냅니다."
          }
        ]
      },
      booking: {
        title: "예약 관리",
        body: "고객 예약을 관리하고 매장 운영을 준비하세요.",
        points: []
      },
      waitlist: {
        title: "대기 고객 관리",
        body: "대기 고객을 관리하고 테이블 준비 시 알려주세요.",
        points: []
      },
      stock: {
        title: "재고 관리",
        body: "매장의 재고 수량을 확인하고 관리하세요.",
        points: []
      },
      "staff-management": {
        title: "직원 관리",
        body: "직원 계정과 접근 권한을 한곳에서 관리하세요.",
        points: []
      },
      other: {
        title: "추가로 필요한 사항을 알려주세요.",
        body: "이 옵션을 선택하고 매장에 필요한 추가 기능이나 요청사항을 적어주세요.",
        points: []
      }
    },
    fields: {
      company: {
        label: "매장명 / 사업체명",
        placeholder: "예: Corner Street Cafe",
        required: "매장명 또는 사업체명을 입력해주세요."
      },
      postcode: {
        label: "호주 우편번호",
        placeholder: "예: 2000",
        required: "호주 우편번호를 입력해주세요."
      },
      name: {
        label: "성함",
        placeholder: "성함 입력",
        required: "성함을 입력해주세요."
      },
      email: {
        label: "이메일",
        placeholder: "you@company.com",
        required: "이메일을 입력해주세요."
      },
      phone: {
        label: "전화번호",
        placeholder: "예: 0412 345 678",
        required: "전화번호를 입력해주세요."
      }
    },
    otherReviewLabel: "기타 요청사항",
    errors: {
      selectOne: "옵션을 하나 선택해주세요.",
      selectAtLeastOne: "옵션을 하나 이상 선택해주세요.",
      postcode: "4자리 우편번호를 입력해주세요.",
      email: "올바른 이메일 주소를 입력해주세요.",
      phone: "올바른 전화번호를 입력해주세요.",
      other: "기타 요청사항을 입력해주세요."
    }
  },

  partnership: {
    open: "Poble 파트너 되기",
    title: "Poble 파트너십",
    close: "파트너십 문의 닫기",
    successTitle: "제안해 주셔서 감사합니다.",
    successBody: "파트너십 문의가 접수되었습니다. 후속 문의는 {email}로 연락해 주세요.",
    intro: "회사 소개와 함께 어떻게 협력할 수 있을지 알려 주세요.",
    name: "이름",
    phone: "전화번호",
    email: "이메일 주소",
    company: "회사명",
    proposal: "파트너십 제안 내용",
    proposalPlaceholder: "구상하고 계신 파트너십을 알려 주세요",
    error: "제안이 전송되었는지 확인하지 못했습니다. 입력하신 내용은 그대로 남아 있습니다. 다시 시도하시거나 {email}로 이메일을 보내 주세요.",
    submit: "문의 보내기",
    consent: "제안에 회신하기 위해 입력하신 정보가 FormSubmit을 통해 {email}로 전송됩니다.",
    preferEmail: "이메일이 편하신가요?",
  },

  pricingPage: {
    kicker: "요금",
    heading: "Poble Basic. 필요한 만큼 추가하세요.",
    badge: "Poble Basic 플랜",
    perMonth: "/월",
    perVenue: "매장당, AUD 기준. 언제든 해지 가능.",
    askFreeMonth: "무료 1개월 문의하기",
    addHeading: "추가 기능은 월 요금이 별도입니다.",
    addBody:
      "월 $60은 Poble Basic 요금입니다. 선택 기능은 Basic 플랜에 추가로 청구됩니다. 추가 기능과 총 월 요금은 문의해 주시면 확인해 드립니다.",
    buildPlan: "플랜 구성하기",
    builderNote: "플랜 빌더에서 옵션을 선택하고 예상 월 요금을 확인하세요.",
    paymentsHeading: "결제 & 배달",
    paymentsBody: "Tyro 및 Linkly 카드 결제 연동. Uber Eats 연동은 월 +$30에 이용할 수 있습니다.",
    venuesHeading: "매장이 여러 곳인가요?",
    venuesBody: "모든 지점을 하나의 백오피스로 관리합니다.",
    contactSales: "영업팀 문의",
    faqHeading: "자주 묻는 질문.",
    faqs: [
      { q: "POS 전환이 복잡한가요?", a: "메뉴를 새로 구성해 드리고, 직원 교육을 진행하며, 첫 영업일에도 곁에서 함께합니다." },
      {
        q: "어떤 하드웨어가 필요한가요?",
        a: "iPad(8세대 이상)가 필요합니다. 호환되는 프린터, 스탠드, 결제 단말기는 하드웨어 페이지에서 확인하세요.",
      },
      { q: "약정 계약이 있나요?", a: "없습니다. 월 단위 계약이며 언제든 해지할 수 있고, 데이터는 언제든 내보낼 수 있습니다." },
      {
        q: "무료 1개월이 끝나면 어떻게 되나요?",
        a: "체험 기간이 끝나기 전에 해지하지 않으면 계정이 자동으로 유료 구독으로 전환됩니다. 플랜과 결제 관련 내용은 문의해 주세요.",
      },
    ],
    ctaHeading: "무료 1개월을 시작하세요.",
  },

  featuresPage: {
    kicker: "제품",
    heading: "하나의 시스템. 매장 구석구석까지.",
    lede: "하나처럼 움직이는 일곱 가지 제품.",
    ctaHeading: "하나의 시스템. 필요한 도구만 골라서.",
  },

  productPage: {
    allProducts: "전체 제품",
    pagerLabel: "제품",
    ctaHeading: "우리 매장 카운터에서 직접 써 보세요.",
  },

  customersPage: {
    kicker: "고객 사례",
    heading: "실제 매장. 실제 서비스.",
    ctaHeading: "다음은 여러분의 매장입니다.",
  },

  hardwarePage: {
    kicker: "하드웨어",
    heading: "영업 준비 완료.",
    lede: "Poble POS 호환성을 검증하고 원가로 판매합니다.",
    askUs: "문의",
    ctaHeading: "매장 전체 구성이 필요하신가요?",
    askSetup: "구성 문의하기",
    groups: {
      stands: "스탠드",
      printers: "프린터",
      accessories: "액세서리",
    },
    items: {
      "gemini-dual": { name: "Gemini Dual Stand", description: "듀얼 스크린 거치대, 360° 회전." },
      "elite-evo": { name: "Elite Evo Stand", description: "낮은 높이, 도난 방지 설계." },
      "touch-evo": { name: "Touch Evo Stand", description: "독립형, 기울기 조절 가능." },
      "posbank-a11": { name: "POSBANK A11", description: "250mm/s, 이더넷, 자동 커터." },
      "epson-m30iii": { name: "Epson TM-m30III", description: "컴팩트, 블루투스 및 Wi-Fi 지원." },
      "cash-drawer": { name: "금전함", description: "스틸, 지폐 5칸 / 동전 8칸, 잠금 장치." },
      "thermal-paper": { name: "감열지", description: "80 × 80 mm 롤, BPA 무첨가. 24롤 1박스." },
      "qr-stickers": { name: "QR 테이블 스티커", description: "방수, 테이블 오더용." },
    },
  },
};
