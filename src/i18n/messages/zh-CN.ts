import type { Messages } from "./en";

/** Simplified Chinese (中文). Brand, venue and person names, prices and contact details are unchanged. */
export const zhCN: Messages = {
  meta: {
    siteDescription: "体验专为澳大利亚现代餐饮门店打造的快速、可靠的 iPad 收银系统。",
    home: {
      title: "Poble — 专为澳大利亚餐饮业打造的轻量级 POS",
      description: "为澳大利亚咖啡馆和餐厅打造的 iPad 收银系统。将前台、厨房和后台管理连成一体。",
    },
    pricing: {
      title: "价格",
      description: "Poble Basic 每月 $60。可选功能另按月收费。",
    },
    features: {
      title: "功能",
      description: "Poble POS、员工 POS、厨房显示屏、双屏显示、自助点餐机、扫码点餐和会员 CRM — 一套系统连接整个门店。",
    },
    customers: {
      title: "客户案例",
      description: "看看 Woojeong、Kidsday、Wind & Flour 等澳大利亚门店如何借助 Poble 让服务更快、更从容。",
    },
    hardware: {
      title: "硬件",
      description: "已验证兼容 Poble POS，并以成本价销售。为您的门店提供支架、打印机和配件。",
    },
    enquiry: {
      title: "发送咨询",
      description: "告诉我们您的门店和所需功能，Poble 专家将为您提供配置方案和报价。",
    },
  },

  common: {
    skipToContent: "跳到主要内容",
    contactUs: "联系我们",
    viewPricing: "查看价格",
    talkToSales: "联系销售",
    explore: "了解更多",
    done: "完成",
    sending: "正在发送…",
    opensInNewTab: "{label} — 在新标签页中打开",
    ticks: ["无合约绑定", "无隐藏费用", "每周 7 天支持"],
  },

  nav: {
    homeLabel: "Poble 首页",
    mainLabel: "主导航",
    moreLabel: "更多导航",
    mobileLabel: "移动端导航",
    products: "产品",
    pricing: "价格",
    customers: "客户案例",
    about: "关于我们",
    signIn: "登录",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
  },

  language: {
    label: "语言",
    button: "语言：{language}",
    menu: "选择语言",
  },

  footer: {
    copyright: "© 2026 Poble。ECNESOFT 门店管理解决方案。",
    navLabel: "支持与法律信息",
    manual: "使用手册",
    terms: "服务条款",
    privacy: "隐私政策",
    cookies: "Cookie 政策",
  },

  products: {
    pos: {
      name: "Poble POS",
      kicker: "收银系统",
      title: "前台的核心。",
      lede: "点单、收款和日结报表，尽在一个简洁的界面。",
      imageAlt: "Poble POS 界面",
      points: [
        { title: "从容应对高峰", body: "触控灵敏，离线也能稳定运行。" },
        { title: "支持 Tyro 和 Linkly", body: "金额直接发送到刷卡终端。" },
        { title: "实时菜单管理", body: "修改价格后，所有终端同步更新。" },
      ],
    },
    "staff-pos": {
      name: "员工 POS",
      kicker: "手持设备",
      title: "把前台带到餐桌旁。",
      lede: "在桌边点单，直接发送到厨房。",
      imageAlt: "Poble 员工 POS 界面",
      points: [
        { title: "无需重新学习", body: "与主 POS 操作完全一致。" },
        { title: "直达出餐口", body: "无需再跑回前台。" },
        { title: "减少差错", body: "口味和加料当场录入。" },
      ],
    },
    kds: {
      name: "厨房显示屏",
      kicker: "厨房",
      title: "满座时，出餐依然从容。",
      lede: "所有订单集中在一个队列，按等待时间以颜色区分。",
      imageAlt: "厨房显示屏界面",
      points: [
        { title: "不漏任何一单", body: "订单在标记完成前始终显示在屏幕上。" },
        { title: "紧急程度一目了然", body: "订单等待越久，颜色随之变化。" },
        { title: "完成与撤回", body: "轻点一下即可完成或撤回订单。" },
      ],
    },
    "dual-screen": {
      name: "双屏显示",
      kicker: "顾客显示屏",
      title: "收银台前，清清楚楚。",
      lede: "顾客可以看到录入的每一件商品。",
      imageAlt: "双屏显示界面",
      points: [
        { title: "实时查看订单", body: "价格实时更新。" },
        { title: "交易间隙展示品牌", body: "推广活动与会员提示。" },
        { title: "结账更顺畅", body: "总金额始终可见。" },
      ],
    },
    kiosk: {
      name: "自助点餐机",
      kicker: "自助服务",
      title: "队伍更短，客单价更高。",
      lede: "让顾客自助点餐，并浏览推荐加购。",
      imageAlt: "自助点餐机界面",
      points: [
        { title: "告别排队", body: "顾客自行下单。" },
        { title: "稳定的加购推荐", body: "点餐机从不忘记推荐。" },
        { title: "与前台同一队列", body: "点餐机订单和前台订单进入同一个队列。" },
      ],
    },
    "table-ordering": {
      name: "扫码点餐",
      kicker: "桌边点餐",
      title: "坐在座位上即可点餐。",
      lede: "顾客在餐桌上浏览菜单并下单。",
      imageAlt: "扫码点餐界面",
      points: [
        { title: "一个应用，覆盖每张桌", body: "选好餐桌，即可开始点餐。" },
        { title: "始终是最新菜单", body: "售罄菜品即时下架。" },
        { title: "加点更方便", body: "轻点一下即可再次下单。" },
      ],
    },
    crm: {
      name: "会员 CRM",
      kicker: "会员忠诚度",
      title: "让新客变成常客。",
      lede: "积分、优惠券、线上订单和排队候位，集中在一个会员档案。",
      imageAlt: "会员 CRM 界面",
      points: [
        { title: "积分轻松好用", body: "在前台即可累积和兑换。" },
        { title: "提前下单", body: "付款后余额即时更新。" },
        { title: "智能排队", body: "扫描二维码排队，轮到时收到通知。" },
      ],
    },
  },

  stories: {
    woojeong: {
      venue: "韩国餐厅 · 珀斯",
      imageAlt: "珀斯的韩国餐厅 Woojeong",
      quote: "在珀斯经营一家繁忙的韩国餐厅，稳定可靠是第一位的。Poble 让我们的桌边服务立刻变得简单。",
      author: "Min-ji Park",
      body: "以前点单要手写，再到前台重新录入。现在订单从餐桌直接送到厨房。",
      results: ["从第一个班次起就简化了桌边服务", "几秒钟完成日结对账"],
    },
    kidsday: {
      venue: "亲子乐园咖啡馆 · 悉尼",
      imageAlt: "悉尼的亲子乐园咖啡馆 Kidsday",
      quote: "我们用两台终端分别处理门票和咖啡订单。数据即时同步，客流再大系统也应付自如。",
      author: "Sarah Lee",
      body: "一个柜台卖门票，另一个柜台经营咖啡馆。两台终端，一个厨房队列，一份日结报表。",
      results: ["两台终端，始终同步", "一眼掌握全天营业情况"],
    },
    "wind-and-flour": {
      venue: "烘焙咖啡馆 · 悉尼",
      imageAlt: "悉尼的烘焙咖啡馆 Wind & Flour",
      quote: "我们的菜单每小时都在变。能在前台随时更新菜单——哪怕正值高峰——彻底改变了我们的早晨。",
      author: "Wind & Flour 团队",
      body: "糕点午饭前就会售罄。员工在前台标记售罄，所有屏幕即时同步。",
      results: ["在前台即可更新售罄商品", "新员工第一个班次就能接单"],
    },
  },

  home: {
    hero: {
      line1: "更从容的前台。",
      line2: "互联互通的门店。",
      description: "为澳大利亚咖啡馆和餐厅打造的 iPad 收银系统。将前台、厨房和后台管理连成一体。",
      explore: "了解 Poble",
      filmLabel: "Poble POS、自助点餐和厨房显示屏围绕 Poble 标志汇聚在一起。画面来自 Poble 产品系列；可选功能另行收费。",
      photoAlt: "咖啡馆前台的 Poble",
      posAlt: "Poble POS 产品界面",
      orderAlt: "Poble 自助点餐界面",
      kitchenAlt: "Poble 厨房显示屏界面",
    },
    features: {
      line1: "一套系统。",
      line2: "覆盖门店的每个角落。",
      viewPricing: "查看价格与附加功能",
      tabsLabel: "Poble 产品",
      picker: "浏览产品",
      talkSetup: "咨询门店配置",
    },
    payments: {
      heading: "支付，无缝连接。",
      intro: "为您的 Poble 配置选择合适的支付方式。",
      explorePartner: "了解 {label}",
      partnerHeading: "一起打造下一个连接。",
      partnerBody: "有支付或技术合作的想法？我们很期待听到您的声音。",
    },
    uber: {
      line1: "您的前台，",
      line2: "直连外卖。",
      body: "将 Uber Eats 接入您的 Poble 系统。",
    },
    pricing: {
      line1: "您的门店，",
      line2: "您的配置。",
      labelQuote: "您的定制方案",
      labelEstimate: "您的月费估算",
      labelBasic: "Poble Basic 套餐",
      perMonth: "/月",
      meta: "每家门店 · 澳元 · 按月付费",
      breakdownQuote: "您选择的工具需要报价。其他选项已为您保留。",
      breakdown: "Poble Basic ${base} + 所选功能 ${addOns}",
      trial: "1 个月免费试用",
      mobileEstimate: "月费估算",
      addHeading: "添加门店所需的工具。",
      addIntro: "从每月 ${base} 的 Poble Basic 开始。选择功能即可查看月费估算。所有价格均以澳元计。",
      legend: "选择每月功能",
      devices: "设备数量",
      decrease: "减少 {name} 设备",
      increase: "增加 {name} 设备",
      quantity: "{name} 设备数量",
      addNote: "额外 POS、扫码点餐、会员与积分、自助点餐机、餐桌预订和排队候位将根据您的门店报价。咨询期间，您的其他选项会保留在此页面。",
      faqHeading: "开始之前",
      groups: {
        devices: "设备",
        operations: "运营",
        enquiry: "需咨询",
      },
      options: {
        staff: { name: "员工点单", note: "" },
        kds: { name: "厨房显示屏 (KDS)", note: "需配备平板电脑" },
        "table-order": { name: "扫码点餐", note: "请联系我们获取报价" },
        extra: { name: "额外 POS 设备", note: "请联系我们获取报价" },
        crm: { name: "会员与积分", note: "CRM / 奖励 · 请联系我们获取报价" },
        online: { name: "线上点餐 (二维码)", note: "" },
        uber: { name: "Uber Eats 对接", note: "" },
        management: { name: "餐桌管理", note: "" },
        kiosk: { name: "自助点餐机", note: "请联系我们获取报价" },
        booking: { name: "餐桌预订", note: "请联系我们获取报价" },
        waitlist: { name: "排队候位", note: "请联系我们获取报价" },
      },
      faqs: [
        {
          q: "$60 包含所有功能吗？",
          a: "$60 的 Basic 套餐是起步价。员工点单和厨房显示屏按设备收费。选择其他功能会更新您的月费估算；额外 POS、扫码点餐、会员与积分、自助点餐机、餐桌预订和排队候位需要报价。",
        },
        {
          q: "免费试用月如何进行？",
          a: "试用期内您可以使用一个月的 Basic 套餐。开始前我们会核实您的门店信息。安装和账单详情请联系我们的团队。",
        },
        {
          q: "可以使用自己的 iPad 吗？",
          a: "可以。Poble 支持第 8 代及更新的 iPad。我们的团队还可以协助您配置打印机、支架和刷卡终端。",
        },
        {
          q: "有合约期限制吗？",
          a: "软件套餐按月付费，您可以随时取消。",
        },
      ],
    },
    customers: {
      heading: "深受澳大利亚门店信赖。",
      seeSetup: "查看门店配置",
      setupFor: "（{name}）",
    },
    about: {
      heading: "在前台旁边打磨而成。",
      body1: "ECNESOFT 在澳大利亚为澳大利亚餐饮业打造 Poble。我们的团队自 2002 年起深耕 POS 领域。",
      body2: "Poble 在真实的营业场景中成形——早高峰、分开结账，还有绝不能弄丢的点单小票。",
      signature1: "服务澳大利亚餐饮业。",
      signature2: "本地团队，就近支持。",
      byline: "Poble by ECNESOFT",
    },
    contact: {
      heading: "聊聊您的门店吧。",
      body: "预约演示、规划配置，或咨询如何更换系统。",
      cta: "发送咨询",
    },
  },

  inquiry: {
    title: "联系我们",
    close: "关闭咨询",
    intro: "告诉我们您门店的情况，销售顾问会尽快与您联系。想直接打电话？",
    name: "您的姓名",
    namePlaceholder: "您的姓名",
    phone: "电话号码",
    email: "电子邮箱",
    shop: "门店名称和地址",
    shopPlaceholder: "门店名称和地址",
    suburb: "所在区域 (Suburb)",
    suburbPlaceholder: "所在区域 (Suburb)",
    message: "咨询内容（选填）",
    messagePlaceholder: "告诉我们您的需求",
    error: "我们无法确认您的咨询已发送。您填写的信息仍保留在此。请重试，或发送邮件至",
    submit: "发送消息",
    consent: "提交即表示您同意我们就此次咨询与您联系。",
    help: "您也可以发送邮件至",
    successTitle: "感谢您的联系。",
    successBody: "您的咨询已提交至 Poble。我们的团队会尽快与您联系。",
  },

  enquiry: {
    back: "返回首页",
    heading1: "为您的门店",
    heading2: "打造 Poble 方案。",
    intro: "POS、点单与会员管理。告诉我们您的需求。",
    footnote: "通过几个简短问题了解您的业务。",
    progressLabel: "表单进度",
    step: "第 {current} 步，共 {total} 步",
    reviewStep: "查看 Poble 咨询",
    percent: "{percent}% 完成",
    previous: "上一题",
    next: "下一题",
    continue: "继续",
    review: "查看咨询内容",
    edit: "修改答案",
    reviewHeading: "您的 Poble 配置一览。",
    reviewHint: "请确认您的答案后发送咨询。发送前您仍可修改任何内容。",
    priceNote: "附加功能需另行收费。完成咨询后，您可与 Poble 专家沟通，获取完整报价。",
    empty: "—",
    questions: {
      venue: "您经营什么类型的门店？",
      reason: "您为什么考虑 Poble？",
      features: "您需要哪些 Poble 功能？",
      venues: "有多少家门店需要 Poble？",
      timing: "您希望何时开始使用？",
      business: "请介绍您的门店。",
      contact: "Poble 团队如何联系您？"
    },
    hints: {
      features: "POBLE POS 为默认选项。附加功能可多选。点击 ? 查看功能介绍。",
      contact: "请留下联系方式，以便讨论合适的配置或预约演示。"
    },
    options: {
      venue: {
        cafe: "咖啡店 / 烘焙店",
        restaurant: "餐厅",
        takeaway: "外卖 / 快餐店",
        bar: "酒吧",
        "food-truck": "餐车",
        other: "其他餐饮门店"
      },
      reason: {
        "new-venue": "开设新店",
        "replace-pos": "更换现有 POS",
        "add-tools": "为现有系统增加功能",
        exploring: "了解可选方案"
      },
      venues: {
        one: "1 家门店",
        "two-three": "2–3 家门店",
        "four-plus": "4 家及以上",
        planning: "仍在规划"
      },
      timing: {
        asap: "尽快",
        "one-month": "1 个月内",
        "one-three-months": "1–3 个月内",
        researching: "仅作了解"
      }
    },
    features: {
      "poble-pos": "POBLE POS",
      "staff-pos": "员工 POS",
      "table-ordering": "桌边点单",
      kds: "KDS",
      membership: "会员与积分",
      "online-qr": "在线与二维码点单",
      kiosk: "自助点餐机",
      "uber-eats": "Uber Eats 集成",
      booking: "预订管理",
      waitlist: "候位管理",
      stock: "库存管理",
      "staff-management": "员工管理",
      other: "其他需求"
    },
    groups: {
      starting: "基础配置",
      popular: "此类门店常用功能",
      more: "更多功能",
      optional: "可选功能"
    },
    defaultTag: "默认 · 始终选中",
    about: "功能介绍：{name}",
    closeDetails: "关闭功能介绍",
    otherLabel: "请告诉我们您的其他需求。",
    otherPlaceholder: "请描述您需要的功能或支持。",
    details: {
      "poble-pos": {
        title: "专为外卖业务打造的 POS。",
        body: "支持便捷快速的支付，以及准确、直观的报表分析。",
        points: [
          {
            title: "快速简便的支付",
            body: "流畅的支付流程让收银台持续运转。"
          },
          {
            title: "清晰的报表",
            body: "通过准确、直观的报表了解您的业务。"
          }
        ]
      },
      "staff-pos": {
        title: "将收银台带到餐桌。",
        body: "操作与主 POS 一致。在桌边记录订单和选项并直接发送至厨房，减少往返和错误。",
        points: [
          {
            title: "无需重新学习",
            body: "与主 POS 操作一致。"
          },
          {
            title: "直达厨房",
            body: "无需返回收银台。"
          },
          {
            title: "减少错误",
            body: "在点单时直接记录选项。"
          }
        ]
      },
      "table-ordering": {
        title: "在座位上轻松点单。",
        body: "客人在桌边浏览实时菜单并下单。售罄商品即时隐藏，追加点单更方便。",
        points: [
          {
            title: "一个应用，覆盖每张餐桌",
            body: "选择餐桌即可开始点单。"
          },
          {
            title: "始终是实时菜单",
            body: "售罄商品即时隐藏。"
          },
          {
            title: "轻松追加",
            body: "一键再次下单。"
          }
        ]
      },
      kds: {
        title: "高峰时段也能有序出餐。",
        body: "订单在完成前一直显示，并随等待时间变色。一键完成或召回订单。",
        points: [
          {
            title: "不漏任何一单",
            body: "订单在标记完成前一直显示。"
          },
          {
            title: "紧急程度一目了然",
            body: "订单随等待时间变色。"
          },
          {
            title: "完成与召回",
            body: "一键完成或召回订单。"
          }
        ]
      },
      membership: {
        title: "让顾客成为常客。",
        body: "在一个档案中整合积分、优惠券、在线订单和候位。支持柜台积分使用、付款后余额更新及二维码候位通知。",
        points: [
          {
            title: "积分轻松使用",
            body: "在柜台即可累积和使用。"
          },
          {
            title: "提前点单",
            body: "付款后余额即时更新。"
          },
          {
            title: "智能候位",
            body: "扫码加入，就绪时收到通知。"
          }
        ]
      },
      "online-qr": {
        title: "扫码即可轻松点单。",
        body: "顾客通过二维码浏览菜单并准确下单，减少前厅与厨房之间的错误。也支持在线自取与配送订单。",
        points: [
          {
            title: "轻松扫码点单",
            body: "顾客扫码浏览菜单并下单。"
          },
          {
            title: "订单更清晰",
            body: "准确记录顾客选择，减少手动录单。"
          },
          {
            title: "在线更便捷",
            body: "支持自取和配送订单。"
          }
        ]
      },
      kiosk: {
        title: "缩短排队，丰富订单。",
        body: "顾客自行点单并查看推荐加购项。自助机与柜台订单进入同一队列。",
        points: [
          {
            title: "告别排队",
            body: "顾客自行下单。"
          },
          {
            title: "稳定的加购推荐",
            body: "自助机从不忘记推荐。"
          },
          {
            title: "与柜台同一队列",
            body: "自助机与柜台订单进入同一队列。"
          }
        ]
      },
      "uber-eats": {
        title: "将 Uber Eats 订单发送到厨房。",
        body: "连接 Uber Eats 与 Poble，一键将订单发送至厨房。",
        points: [
          {
            title: "订单互联",
            body: "将 Uber Eats 接入您的 Poble 工作流程。"
          },
          {
            title: "一键转单",
            body: "将订单直接发送至厨房。"
          }
        ]
      },
      booking: {
        title: "预订管理",
        body: "管理客人预订，为营业做好准备。",
        points: []
      },
      waitlist: {
        title: "候位管理",
        body: "管理候位客人，并在座位准备好时通知他们。",
        points: []
      },
      stock: {
        title: "库存管理",
        body: "跟踪库存数量，管理门店库存。",
        points: []
      },
      "staff-management": {
        title: "员工管理",
        body: "集中管理员工账户和访问权限。",
        points: []
      },
      other: {
        title: "请告诉我们您的其他需求。",
        body: "选择此选项，填写门店所需的其他功能或要求。",
        points: []
      }
    },
    fields: {
      company: {
        label: "门店或公司名称",
        placeholder: "例如：Corner Street Cafe",
        required: "请填写门店或公司名称。"
      },
      postcode: {
        label: "澳大利亚邮政编码",
        placeholder: "例如：2000",
        required: "请填写澳大利亚邮政编码。"
      },
      name: {
        label: "姓名",
        placeholder: "您的姓名",
        required: "请填写您的姓名。"
      },
      email: {
        label: "电子邮箱",
        placeholder: "you@company.com",
        required: "请填写电子邮箱。"
      },
      phone: {
        label: "电话号码",
        placeholder: "例如：0412 345 678",
        required: "请填写电话号码。"
      }
    },
    otherReviewLabel: "其他需求",
    errors: {
      selectOne: "请选择一个选项。",
      selectAtLeastOne: "请至少选择一个选项。",
      postcode: "请输入 4 位邮政编码。",
      email: "请输入有效的电子邮箱。",
      phone: "请输入有效的电话号码。",
      other: "请填写其他需求。"
    }
  },

  partnership: {
    open: "成为 Poble 合作伙伴",
    title: "与 Poble 合作",
    close: "关闭合作咨询",
    successTitle: "感谢您的合作提案。",
    successBody: "您的合作咨询已提交。如需跟进，请联系 {email}。",
    intro: "请介绍贵公司，以及我们可以如何合作。",
    name: "您的姓名",
    phone: "电话号码",
    email: "电子邮箱",
    company: "公司名称",
    proposal: "合作提案",
    proposalPlaceholder: "请介绍您设想的合作方式",
    error: "我们无法确认您的提案已发送。您填写的信息仍保留在此。请重试，或发送邮件至 {email}。",
    submit: "发送咨询",
    consent: "您的信息将通过 FormSubmit 发送至 {email}，以便我们回复您的提案。",
    preferEmail: "更习惯用邮件？",
  },

  pricingPage: {
    kicker: "价格",
    heading: "Poble Basic，按需添加。",
    badge: "Poble Basic 套餐",
    perMonth: "/月",
    perVenue: "每家门店，以澳元计。可随时取消。",
    askFreeMonth: "咨询免费试用月",
    addHeading: "附加功能，另按月收费。",
    addBody: "每月 $60 为 Poble Basic 的费用。可选功能在 Basic 套餐之外另行收费。请联系我们确认附加功能和每月总费用。",
    buildPlan: "定制您的套餐",
    builderNote: "在套餐配置器中选择功能，查看您的月费估算。",
    paymentsHeading: "支付与外卖",
    paymentsBody: "支持 Tyro 和 Linkly 刷卡对接。Uber Eats 对接每月 +$30。",
    venuesHeading: "拥有多家门店？",
    venuesBody: "一个后台管理所有门店。",
    contactSales: "联系销售",
    faqHeading: "常见问题。",
    faqs: [
      { q: "更换系统麻烦吗？", a: "我们会为您重建菜单、培训员工，并在第一次营业时全程陪同。" },
      {
        q: "需要哪些硬件？",
        a: "一台 iPad（第 8 代或更新）。兼容的打印机、支架和刷卡终端请查看我们的硬件页面。",
      },
      { q: "有合约期限制吗？", a: "没有。按月付费，随时可以取消，您的数据也可以随时导出。" },
      {
        q: "免费试用月结束后会怎样？",
        a: "除非您在试用期结束前取消，否则账户将自动转为付费订阅。套餐和账单详情请联系我们。",
      },
    ],
    ctaHeading: "开启您的免费试用月。",
  },

  featuresPage: {
    kicker: "产品",
    heading: "一套系统，覆盖门店的每个角落。",
    lede: "七款产品，协同如一。",
    ctaHeading: "一套系统，工具由您选择。",
  },

  productPage: {
    allProducts: "全部产品",
    pagerLabel: "产品",
    ctaHeading: "在您的前台试试看。",
  },

  customersPage: {
    kicker: "客户案例",
    heading: "真实门店，真实服务。",
    ctaHeading: "下一个就是您的门店。",
  },

  hardwarePage: {
    kicker: "硬件",
    heading: "随时准备营业。",
    lede: "已验证兼容 Poble POS，并以成本价销售。",
    askUs: "请咨询",
    ctaHeading: "需要整套门店配置？",
    askSetup: "咨询配置方案",
    groups: {
      stands: "支架",
      printers: "打印机",
      accessories: "配件",
    },
    items: {
      "gemini-dual": { name: "Gemini Dual Stand", description: "双屏支架，360° 旋转。" },
      "elite-evo": { name: "Elite Evo Stand", description: "低矮造型，防拆设计。" },
      "touch-evo": { name: "Touch Evo Stand", description: "独立放置，可调节倾角。" },
      "posbank-a11": { name: "POSBANK A11", description: "250mm/s，以太网，自动切纸。" },
      "epson-m30iii": { name: "Epson TM-m30III", description: "小巧机身，支持蓝牙和 Wi-Fi。" },
      "cash-drawer": { name: "钱箱", description: "钢制，5 格纸币 / 8 格硬币，带锁。" },
      "thermal-paper": { name: "热敏纸", description: "80 × 80 mm 卷纸，不含 BPA。每箱 24 卷。" },
      "qr-stickers": { name: "二维码桌贴", description: "防水，用于扫码点餐。" },
    },
  },
};
