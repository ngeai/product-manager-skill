const modules = [
  {
    id: "discovery",
    label: "发现",
    title: "持续产品发现",
    teaser: "先判断问题值不值得做，再讨论方案。",
    summary:
      "最适合新手入门。核心不是先想功能，而是先确认问题是不是存在、值不值得解。",
    bestFor: "刚开始学 PM",
    deliverable: "访谈提纲、机会树",
    problems: [
      "判断用户痛点是不是真的",
      "判断需求是不是伪需求",
      "先验证问题，再讨论方案",
    ],
    actions: [
      "先画机会树，别急着列功能",
      "准备 5 到 8 个开放问题",
      "把假设拆开，逐个验证",
    ],
    tools: [
      "`opportunity-solution-tree`",
      "`/interview`",
      "`identify-assumptions`",
    ],
  },
  {
    id: "strategy",
    label: "战略",
    title: "产品战略与愿景",
    teaser: "回答产品为什么做、为谁做、靠什么赢。",
    summary:
      "当方向不清、目标不稳时，先做战略判断。方向清楚了，后面的需求和路线图才不会摇摆。",
    bestFor: "方向不清时",
    deliverable: "战略画布、价值主张",
    problems: [
      "用户是谁",
      "我们凭什么赢",
      "这个市场值不值得做",
    ],
    actions: [
      "先画战略画布",
      "再写价值主张",
      "最后补一轮市场扫描",
    ],
    tools: ["`/strategy`", "`value-proposition`", "`market-scan`"],
  },
  {
    id: "execution",
    label: "执行",
    title: "卓越执行",
    teaser: "把模糊想法整理成团队能执行的内容。",
    summary:
      "执行不是写更多文档，而是把目标、范围和风险讲清楚，让团队真的能落地。",
    bestFor: "最常用能力",
    deliverable: "PRD、OKR、风险清单",
    problems: [
      "PRD 写不清",
      "目标不会拆",
      "上线前风险没暴露",
    ],
    actions: [
      "先写背景、目标、范围",
      "再拆关键结果",
      "上线前做一次风险预演",
    ],
    tools: ["`/write-prd`", "`/plan-okrs`", "`/pre-mortem`"],
  },
  {
    id: "research",
    label: "分析",
    title: "市场研究与数据分析",
    teaser: "用用户洞察和数据结果支撑决策。",
    summary:
      "这个模块帮你把用户洞察和数据分析连起来，不再只靠感觉做判断。",
    bestFor: "需要证据时",
    deliverable: "画像、SQL、实验分析",
    problems: [
      "不会做用户画像",
      "不会把问题翻成 SQL",
      "不会解释实验结果",
    ],
    actions: [
      "先写清研究问题",
      "再写指标口径",
      "最后解释结果是否有意义",
    ],
    tools: ["`/research-users`", "`/write-query`", "`/analyze-test`"],
  },
  {
    id: "growth",
    label: "增长",
    title: "GTM 与增长",
    teaser: "不只把产品做出来，还要让它真正被用起来。",
    summary:
      "这个模块关注发布、传播和增长，帮助你从“做功能”转到“让产品真的跑起来”。",
    bestFor: "准备发布时",
    deliverable: "上线计划、增长飞轮",
    problems: [
      "功能上线后没人知道",
      "不知道哪条增长链路最关键",
      "团队对外口径不一致",
    ],
    actions: [
      "先选第一批目标用户",
      "再画增长飞轮",
      "最后统一对外说法",
    ],
    tools: ["`/plan-launch`", "`growth-loops`", "`competitive-battlecard`"],
  },
  {
    id: "creator",
    label: "创作",
    title: "短视频创作方法论",
    teaser: "把内容增长拆成定位、选题、钩子、脚本、发布、复盘。",
    summary:
      "短视频不是只靠灵感，而是靠一套能重复使用的内容系统。先明确拍给谁看，再持续做选题、开头、脚本和数据复盘。",
    bestFor: "做账号或内容时",
    deliverable: "定位说明、选题库、脚本、复盘表",
    problems: [
      "不知道账号该拍给谁看",
      "不知道每天拍什么",
      "开头抓不住人，发完也不会复盘",
    ],
    actions: [
      "先写清账号定位、目标人群和内容主线",
      "每周积累选题，再筛出最值得拍的内容",
      "按 3 秒钩子、核心观点、结尾动作写脚本并复盘数据",
    ],
    tools: ["`账号定位`", "`选题库`", "`脚本模板`", "`数据复盘`"],
  },
  {
    id: "toolkit",
    label: "职业",
    title: "PM Toolkit 与职业素养",
    teaser: "让你的表达和职业材料更专业。",
    summary:
      "除了做产品，你还会写简历、改文档、起草基础材料。这个模块能帮你把日常输出做得更稳。",
    bestFor: "日常提效",
    deliverable: "简历修改、文档校对",
    problems: [
      "简历没有结果感",
      "文档逻辑不顺",
      "需要基础草案",
    ],
    actions: [
      "用结果导向重写经历",
      "交付前做一轮校对",
      "基础草案先起出来",
    ],
    tools: ["`/review-resume`", "`/proofread`", "`draft-nda` / `privacy-policy`"],
  },
];

const scenarios = [
  {
    tag: "发现",
    level: "入门友好",
    title: "用户访谈提纲",
    description: "不知道该怎么问用户时，先用它起一版提纲。",
    when: "做需求验证时",
    output: "访谈问题清单",
    command: "/interview",
    prompt:
      "你现在是我的产品研究搭档。请围绕【项目/功能名称】生成一份用户访谈提纲。\n目标用户是：【填写用户】\n我最想验证的问题是：【填写核心疑问】\n请输出：\n1. 访谈目标\n2. 破冰问题\n3. 使用场景问题\n4. 痛点追问问题\n5. 对现有替代方案的探索问题\n6. 结束总结问题\n要求：问题尽量开放，避免诱导式提问。",
  },
  {
    tag: "发现",
    level: "入门友好",
    title: "机会解决方案树起步版",
    description: "不知道该先做哪个功能时，用它先理清目标和机会。",
    when: "方向还没收敛时",
    output: "机会树、假设清单",
    command: "opportunity-solution-tree",
    prompt:
      "请帮我基于机会解决方案树，整理【业务目标】的分析框架。\n背景信息：\n- 当前业务目标：【填写】\n- 目标用户：【填写】\n- 已知问题/信号：【填写】\n请输出：\n1. 顶层目标\n2. 可能的用户机会列表\n3. 每个机会下可尝试的解决方向\n4. 需要验证的关键假设\n5. 下一步建议收集的信息。",
  },
  {
    tag: "战略",
    level: "适合实战",
    title: "产品战略画布",
    description: "需要讲清方向、定位和差异化时，用它先出底稿。",
    when: "做规划或立项时",
    output: "战略画布、季度建议",
    command: "/strategy",
    prompt:
      "请基于产品战略画布，帮我分析【产品名称】。\n已知信息：\n- 目标用户：【填写】\n- 当前市场阶段：【填写】\n- 我们的优势：【填写】\n- 我们面临的挑战：【填写】\n请输出结构化内容，至少包括：\n1. 目标用户与核心场景\n2. 核心价值主张\n3. 差异化优势\n4. 竞争环境\n5. 关键战略选择\n6. 未来 1 个季度的重点建议。",
  },
  {
    tag: "执行",
    level: "高频必用",
    title: "PRD 初稿生成器",
    description: "先把需求整理成清楚的 PRD 初稿。",
    when: "准备拉齐设计和研发时",
    output: "PRD、范围说明",
    command: "/write-prd",
    prompt:
      "请帮我撰写一份结构化 PRD。\n需求名称：【填写】\n背景问题：【填写】\n目标用户：【填写】\n业务目标：【填写】\n功能范围：【填写】\n约束条件：【填写】\n请输出：\n1. 背景与问题定义\n2. 目标与衡量方式\n3. 用户场景与流程\n4. 功能范围与非范围\n5. 核心规则与边界条件\n6. 风险与待确认问题\n语言要求清晰，适合直接给研发和设计评审。",
  },
  {
    tag: "执行",
    level: "适合实战",
    title: "上线前风险预演",
    description: "上线前先想清楚哪里会出问题。",
    when: "重要版本上线前",
    output: "风险清单、补救动作",
    command: "/pre-mortem",
    prompt:
      "请对【项目/版本名称】做一次 pre-mortem 风险预演。\n背景：\n- 上线时间：【填写】\n- 影响范围：【填写】\n- 关键依赖方：【填写】\n- 当前已知风险：【填写】\n请输出：\n1. 可能失败的 10 个原因\n2. 按严重程度分类为老虎 / 纸老虎 / 大象\n3. 每类风险的预防动作\n4. 上线前必须补齐的检查项。",
  },
  {
    tag: "分析",
    level: "入门友好",
    title: "自然语言转 SQL",
    description: "先把业务问题说清楚，再让 AI 帮你转 SQL。",
    when: "想看指标但不会写 SQL 时",
    output: "SQL、字段解释",
    command: "/write-query",
    prompt:
      "请把下面的业务分析需求转成 SQL 查询，并解释每一部分在做什么。\n分析目标：【填写】\n数据表信息：【填写表名和关键字段】\n指标口径：【填写】\n筛选条件：【填写】\n时间范围：【填写】\n请输出：\n1. SQL 查询\n2. 字段解释\n3. 可能需要确认的数据口径风险。",
  },
  {
    tag: "增长",
    level: "适合实战",
    title: "功能上线计划",
    description: "把发布动作拆成一张能执行的清单。",
    when: "功能准备上线时",
    output: "上线计划、观察指标",
    command: "/plan-launch",
    prompt:
      "请为【功能/产品名称】制定上线计划。\n背景：\n- 目标用户：【填写】\n- 上线目标：【填写】\n- 当前资源情况：【填写】\n- 关键配合团队：【填写】\n请输出：\n1. 上线分阶段方案\n2. 每阶段目标与成功标准\n3. 对运营/销售/客服需要同步的信息\n4. 风险点与应对建议\n5. 上线后一周需要重点观察的指标。",
  },
  {
    tag: "创作",
    level: "起号常用",
    title: "短视频账号定位",
    description: "先讲清你拍给谁看、能持续输出什么。",
    when: "起号或内容转型时",
    output: "账号定位、一句话简介、内容支柱",
    command: "账号定位",
    prompt:
      "请帮我梳理一个短视频账号定位。\n我的方向是：【填写赛道】\n我擅长的内容是：【填写】\n我希望吸引的人群是：【填写】\n我的目标是：【涨粉 / 获客 / 建立个人品牌 / 其他】\n请输出：\n1. 一句话账号定位\n2. 目标人群画像\n3. 3 到 5 个内容支柱\n4. 适合的人设与表达风格\n5. 不建议碰的内容边界。",
  },
  {
    tag: "创作",
    level: "高频必用",
    title: "短视频选题库",
    description: "不知道拍什么时，用它先批量生成可持续选题。",
    when: "没有灵感或想做内容规划时",
    output: "30 个选题、钩子方向、优先级",
    command: "选题库",
    prompt:
      "请围绕【赛道 / 主题】帮我生成一份短视频选题库。\n我的目标人群是：【填写】\n我的账号风格是：【专业 / 轻松 / 犀利 / 故事化 / 其他】\n请输出：\n1. 30 个具体选题\n2. 每个选题适合用的开头钩子\n3. 哪 10 个最适合新账号先拍\n4. 哪些选题更适合做系列内容。",
  },
  {
    tag: "创作",
    level: "高频必用",
    title: "短视频脚本生成",
    description: "按 3 秒钩子、主体、结尾行动快速生成脚本。",
    when: "已经确定选题，准备开拍时",
    output: "口播脚本、镜头节奏、结尾动作",
    command: "脚本模板",
    prompt:
      "请帮我把【短视频选题】写成一条短视频脚本。\n受众是：【填写】\n视频时长目标是：【15 秒 / 30 秒 / 60 秒】\n风格是：【口播 / 干货 / 故事 / 反转 / 其他】\n请输出：\n1. 3 秒开头钩子\n2. 中间主体内容\n3. 结尾引导动作\n4. 建议的分镜或字幕节奏\n要求：语言口语化，适合短视频表达。",
  },
  {
    tag: "创作",
    level: "复盘必备",
    title: "短视频数据复盘",
    description: "发完之后，看清哪里掉人、哪里值得继续放大。",
    when: "视频发布后复盘时",
    output: "复盘结论、优化动作、下一条建议",
    command: "数据复盘",
    prompt:
      "请帮我复盘这条短视频的数据表现。\n视频主题：【填写】\n播放数据：【填写】\n3 秒留存：【填写】\n完播率：【填写】\n点赞 / 评论 / 收藏 / 转发 / 涨粉：【填写】\n请输出：\n1. 这条内容表现好或不好的核心原因\n2. 是选题问题、开头问题、表达问题，还是结尾问题\n3. 下一条内容最该优化的 3 个点\n4. 是否值得继续做成系列。",
  },
  {
    tag: "创作",
    level: "爆款常用",
    title: "爆款切入公式",
    description: "把一个普通主题改成更容易被点开的短视频切入法。",
    when: "有主题但不知道怎么切入时",
    output: "10 个开头、4 种角度、优先级建议",
    command: "爆款公式",
    prompt:
      "请把【内容主题】改写成更适合短视频传播的切入角度。\n我的受众是：【填写】\n内容风格是：【专业 / 情绪 / 反差 / 故事 / 清单】\n请输出：\n1. 10 个适合短视频的标题或开头\n2. 分别对应误区型、清单型、反差型、案例型四种公式\n3. 哪 3 个最适合先拍\n4. 每个开头适合的情绪和表达方式。",
  },
  {
    tag: "创作",
    level: "运营常用",
    title: "一周内容日历",
    description: "把选题排成一周节奏，避免每天临时想内容。",
    when: "需要做稳定更新时",
    output: "7 天内容安排、主题分配、发布重点",
    command: "内容日历",
    prompt:
      "请围绕【账号定位 / 赛道】帮我做一份一周短视频内容日历。\n我的目标是：【涨粉 / 获客 / 建立专业感 / 其他】\n我的更新频率是：【每天 / 每周 3 条 / 其他】\n请输出：\n1. 一周每天适合拍的主题\n2. 每条内容适合的形式（观点 / 清单 / 案例 / 误区 / 复盘）\n3. 哪些内容适合做系列\n4. 一周内该如何安排轻内容和重内容。",
  },
  {
    tag: "创作",
    level: "平台必备",
    title: "多平台改写",
    description: "同一个主题，改成适合抖音、小红书、B 站、视频号的版本。",
    when: "想一稿多发时",
    output: "平台差异稿、标题建议、表达重点",
    command: "平台改写",
    prompt:
      "请把【同一个内容主题】分别改写成适合抖音、小红书、B 站、视频号的版本。\n原始主题是：【填写】\n目标受众是：【填写】\n请输出：\n1. 每个平台适合的标题\n2. 每个平台更适合的开头表达\n3. 内容长短和节奏建议\n4. 哪个平台更适合做观点、清单、案例或深度讲解。",
  },
  {
    tag: "创作",
    level: "标题必备",
    title: "爆款标题库",
    description: "围绕一个主题，一次性批量生成更容易点开的标题。",
    when: "有主题但标题不够吸引人时",
    output: "20 个标题、平台版本、优先级",
    command: "标题库",
    prompt:
      "请围绕【内容主题】帮我生成一份短视频爆款标题库。\n我的受众是：【填写】\n平台是：【抖音 / 小红书 / B站 / 视频号 / 多平台】\n内容风格是：【专业 / 情绪 / 反差 / 清单 / 故事】\n请输出：\n1. 20 个标题\n2. 分别覆盖问题型、数字型、反差型、结果型、避坑型几种写法\n3. 其中最值得先用的 5 个标题\n4. 哪些更适合抖音，哪些更适合小红书、B站、视频号。",
  },
  {
    tag: "创作",
    level: "互动必备",
    title: "评论区互动与转化话术",
    description: "按不同平台生成更自然的评论区互动和承接话术。",
    when: "视频发出后，想拉互动或承接下一步时",
    output: "互动句式、置顶评论、轻转化文案",
    command: "互动话术",
    prompt:
      "请围绕【视频主题】帮我生成一组评论区互动和转化话术。\n平台是：【抖音 / 小红书 / B站 / 视频号】\n目标是：【提高评论 / 提高收藏 / 引导关注 / 引导看下一条 / 其他】\n我的风格是：【专业 / 轻松 / 真诚 / 犀利 / 故事化】\n请输出：\n1. 10 句适合该平台的评论区互动话术\n2. 3 条适合置顶评论的文案\n3. 3 条更自然的轻转化文案\n4. 哪些话术太硬，不建议用。",
  },
  {
    tag: "创作",
    level: "封面必备",
    title: "封面文案模板",
    description: "按不同平台生成更像结果、提醒或答案的封面文案。",
    when: "视频要发了，但封面文案不够吸引时",
    output: "封面短句、平台版本、优先级",
    command: "封面文案",
    prompt:
      "请围绕【内容主题】帮我生成一组短视频封面文案。\n平台是：【抖音 / 小红书 / B站 / 视频号 / 多平台】\n目标受众是：【填写】\n内容风格是：【专业 / 清单 / 反差 / 真诚 / 情绪】\n请输出：\n1. 16 条适合做封面的短句\n2. 分别适合哪些平台\n3. 哪些更适合结果型，哪些更适合提醒型、问题型、清单型\n4. 最值得先用的 5 条。",
  },
  {
    tag: "创作",
    level: "开头必备",
    title: "开头 3 秒钩子库",
    description: "围绕一个主题批量生成前 3 秒更能抓人的开头句。",
    when: "主题有了，但开头不够抓人时",
    output: "20 个钩子、分类版本、优先级",
    command: "3秒钩子",
    prompt:
      "请围绕【内容主题】帮我生成一组适合短视频前 3 秒使用的钩子句。\n平台是：【抖音 / 小红书 / B站 / 视频号】\n受众是：【填写】\n风格是：【问题型 / 反差型 / 结果型 / 身份型 / 清单型 / 案例型】\n请输出：\n1. 20 句 3 秒钩子\n2. 分成问题型、反差型、结果型、身份型、清单型、案例型几类\n3. 哪 5 个最适合先拍\n4. 哪些表达太空、太慢，不建议用。",
  },
  {
    tag: "创作",
    level: "转化必备",
    title: "直播预告与私域承接话术",
    description: "生成直播预告、开播欢迎、轻承接和收尾转化的整套话术。",
    when: "准备直播、做预热或承接后续内容时",
    output: "预告文案、开播话术、轻转化句式",
    command: "直播承接",
    prompt:
      "请围绕【直播主题】帮我生成一组直播预告和私域承接话术。\n平台是：【视频号 / 抖音 / 小红书 / 多平台】\n我的目标是：【直播预热 / 拉人进直播 / 引导关注 / 做后续承接 / 其他】\n我的风格是：【专业 / 轻松 / 真诚 / 朋友式】\n请输出：\n1. 8 条直播预告文案\n2. 5 条开播欢迎话术\n3. 5 条更自然的私域或后续承接话术\n4. 5 条收尾转化话术\n5. 哪些表达容易太硬，需要避免。",
  },
  {
    tag: "创作",
    level: "设计必备",
    title: "封面图排版模板",
    description: "围绕不同平台生成更适合的封面层级、行数和重点词。",
    when: "封面已经有文案，但不知道怎么排版时",
    output: "主副标题结构、重点词、排版建议",
    command: "封面排版",
    prompt:
      "请围绕【视频主题】帮我生成一组适合短视频封面图的排版方案。\n平台是：【抖音 / 小红书 / B站 / 视频号】\n受众是：【填写】\n风格是：【专业 / 清单 / 反差 / 真诚 / 情绪】\n请输出：\n1. 4 版封面主标题\n2. 每版是否需要副标题\n3. 重点词应该放大哪些词\n4. 行数建议和排版层级\n5. 哪些信息不应该堆到封面上。",
  },
  {
    tag: "创作",
    level: "定位必备",
    title: "账号简介模板",
    description: "把账号简介写成“我是谁、帮谁、持续讲什么”的结构。",
    when: "起号、改版主页或想提升关注转化时",
    output: "简介文案、定位版本、关注理由",
    command: "账号简介",
    prompt:
      "请帮我为一个内容账号撰写简介文案。\n我的身份是：【填写】\n我主要分享：【填写】\n我想吸引的人群是：【填写】\n我的账号风格是：【专业 / 陪伴 / 结果导向 / 真实记录 / 其他】\n请输出：\n1. 10 版不同风格的账号简介\n2. 分成定位型、结果型、陪伴型、专业型几类\n3. 哪 3 版最适合先用\n4. 哪些表达太空、太泛，不建议写。",
  },
  {
    tag: "创作",
    level: "商务必备",
    title: "商业合作与报价话术",
    description: "生成初次沟通、报价、边界说明和婉拒合作的完整话术。",
    when: "接到商务合作、报价或想规范合作表达时",
    output: "合作回复、报价文案、婉拒话术",
    command: "合作报价",
    prompt:
      "请帮我生成一组内容账号的商业合作和报价话术。\n账号定位是：【填写】\n合作类型是：【单条视频 / 系列内容 / 直播 / 长期合作 / 其他】\n我的风格是：【专业 / 真诚 / 简洁 / 朋友式】\n请输出：\n1. 5 条初次回复合作方的话术\n2. 5 条更自然的报价表达\n3. 5 条边界说明话术\n4. 5 条婉拒合作的话术\n5. 哪些表达容易显得太强硬或太廉价，需要避免。",
  },
  {
    tag: "职业",
    level: "日常常用",
    title: "文档逻辑校对",
    description: "写完方案后，用它快速检查逻辑和表达。",
    when: "交付前自查时",
    output: "问题清单、修改建议",
    command: "/proofread",
    prompt:
      "请从产品经理视角帮我校对下面这份文档。\n文档目标：【填写】\n目标读者：【填写】\n文档内容：【粘贴文本】\n请重点检查：\n1. 逻辑是否完整\n2. 前后是否矛盾\n3. 是否缺少关键背景或结论\n4. 语言是否清晰、专业、易懂\n输出时请按“问题 - 原因 - 修改建议”的格式整理。",
  },
];

const moduleGrid = document.getElementById("modules-grid");
const scenarioGrid = document.getElementById("scenario-grid");
const searchInput = document.getElementById("scenario-search");
const scenarioHelper = document.getElementById("scenario-helper");
const scenarioFilters = document.getElementById("scenario-filters");
const scenarioTemplate = document.getElementById("scenario-template");

const detailTitle = document.getElementById("detail-title");
const detailSummary = document.getElementById("detail-summary");
const detailBestFor = document.getElementById("detail-best-for");
const detailDeliverable = document.getElementById("detail-deliverable");
const detailProblems = document.getElementById("detail-problems");
const detailActions = document.getElementById("detail-actions");
const detailTools = document.getElementById("detail-tools");

let activeScenarioFilter = "全部";

function fillList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    if (target === detailTools) {
      const code = document.createElement("code");
      code.textContent = item.replaceAll("`", "");
      li.appendChild(code);
    } else {
      li.textContent = item;
    }
    target.appendChild(li);
  });
}

function updateModuleDetail(module) {
  detailTitle.textContent = module.title;
  detailSummary.textContent = module.summary;
  detailBestFor.textContent = module.bestFor;
  detailDeliverable.textContent = module.deliverable;
  fillList(detailProblems, module.problems);
  fillList(detailActions, module.actions);
  fillList(detailTools, module.tools);
}

function renderModules() {
  modules.forEach((module, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `module-card${index === 0 ? " is-active" : ""}`;
    button.dataset.moduleId = module.id;
    button.innerHTML = `
      <span class="module-label">${module.label}</span>
      <h3>${module.title}</h3>
      <p>${module.teaser}</p>
      <div class="module-mini">
        <span>${module.bestFor}</span>
        <strong>${module.deliverable}</strong>
      </div>
    `;
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".module-card")
        .forEach((card) => card.classList.remove("is-active"));
      button.classList.add("is-active");
      updateModuleDetail(module);
    });
    moduleGrid.appendChild(button);
  });

  updateModuleDetail(modules[0]);
}

function legacyCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch (error) {
    copied = false;
  }

  document.body.removeChild(textarea);
  return copied;
}

function createScenarioCard(item) {
  const fragment = scenarioTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".scenario-card");
  const tag = fragment.querySelector(".scenario-tag");
  const level = fragment.querySelector(".scenario-level");
  const title = fragment.querySelector(".scenario-title");
  const description = fragment.querySelector(".scenario-description");
  const when = fragment.querySelector(".scenario-when");
  const output = fragment.querySelector(".scenario-output");
  const command = fragment.querySelector(".scenario-command");
  const promptBox = fragment.querySelector(".prompt-box");
  const prompt = fragment.querySelector(".prompt-content");
  const previewButton = fragment.querySelector(".preview-button");
  const copyButton = fragment.querySelector(".copy-button");

  tag.textContent = item.tag;
  level.textContent = item.level;
  title.textContent = item.title;
  description.textContent = item.description;
  when.textContent = item.when;
  output.textContent = item.output;
  command.textContent = item.command;
  prompt.textContent = item.prompt;

  previewButton.addEventListener("click", () => {
    const isHidden = promptBox.hasAttribute("hidden");
    if (isHidden) {
      promptBox.removeAttribute("hidden");
      previewButton.textContent = "收起模板";
    } else {
      promptBox.setAttribute("hidden", "");
      previewButton.textContent = "展开模板";
    }
  });

  copyButton.addEventListener("click", async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(item.prompt);
      } else if (!legacyCopy(item.prompt)) {
        throw new Error("Clipboard API unavailable");
      }
      copyButton.textContent = "已复制";
      copyButton.classList.add("is-copied");
      setTimeout(() => {
        copyButton.textContent = "复制模板";
        copyButton.classList.remove("is-copied");
      }, 1500);
    } catch (error) {
      if (legacyCopy(item.prompt)) {
        copyButton.textContent = "已复制";
        copyButton.classList.add("is-copied");
        setTimeout(() => {
          copyButton.textContent = "复制模板";
          copyButton.classList.remove("is-copied");
        }, 1500);
      } else {
        copyButton.textContent = "复制失败，请手动复制";
        setTimeout(() => {
          copyButton.textContent = "复制模板";
        }, 1800);
      }
    }
  });

  return card;
}

function renderScenarioFilters() {
  const filters = ["全部", ...new Set(scenarios.map((item) => item.tag))];
  scenarioFilters.innerHTML = "";

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${filter === activeScenarioFilter ? " is-active" : ""}`;
    button.textContent = filter;
    button.addEventListener("click", () => {
      activeScenarioFilter = filter;
      renderScenarioFilters();
      renderScenarios(searchInput.value);
    });
    scenarioFilters.appendChild(button);
  });
}

function renderScenarios(keyword = "") {
  const normalized = keyword.trim().toLowerCase();
  scenarioGrid.innerHTML = "";

  const filtered = scenarios.filter((item) => {
    const filterMatched = activeScenarioFilter === "全部" || item.tag === activeScenarioFilter;
    if (!filterMatched) return false;
    if (!normalized) return true;
    return [item.tag, item.level, item.title, item.description, item.when, item.output, item.command, item.prompt]
      .join(" ")
      .toLowerCase()
      .includes(normalized);
  });

  scenarioHelper.textContent = `当前 ${filtered.length} 个模板${activeScenarioFilter === "全部" ? "" : `，分类：${activeScenarioFilter}`}。`;

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "没有找到匹配的模板，试试输入“访谈”“PRD”“增长”这类关键词。";
    scenarioGrid.appendChild(empty);
    return;
  }

  filtered.forEach((item) => {
    scenarioGrid.appendChild(createScenarioCard(item));
  });
}

searchInput.addEventListener("input", (event) => {
  renderScenarios(event.target.value);
});

renderModules();
renderScenarioFilters();
renderScenarios();
