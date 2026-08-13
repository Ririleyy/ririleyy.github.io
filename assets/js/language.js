(() => {
  const page = location.pathname.split('/').pop() || 'index.html';
  const original = new Map();

  const pages = {
    'index.html': {
      title: 'Jiayi Li — 虚幻引擎开发工程师',
      description: 'Jiayi Li 是一名虚幻引擎游戏开发工程师, 专注于 C++, 实时图形, 渲染与模拟.',
      text: {
        '.site-nav a:nth-child(1)': '游戏项目',
        '.site-nav a:nth-child(2)': '图形学',
        '.site-nav a:nth-child(3)': '关于我',
        '.hero-intro': '专注于虚幻引擎, C++, 实时图形与响应式玩法系统的游戏开发工程师.',
        '.button-ghost': '浏览图形学项目',
        '.carousel-slide:nth-child(1) .visual-caption strong': '构建下一个世界',
        '.carousel-slide:nth-child(1) .visual-caption small': '虚幻引擎 / 开发中',
        '.carousel-slide:nth-child(2) .visual-caption small': '虚幻引擎 / 坦克战斗',
        '.carousel-slide:nth-child(3) .visual-caption small': '虚幻引擎 / 战术射击',
        '.carousel-slide:nth-child(4) .visual-caption small': '自研 C++ / OpenGL 引擎',
        '.development-label': '项目开发中',
        '.discipline-strip span:nth-of-type(1)': '虚幻引擎',
        '.discipline-strip span:nth-of-type(3)': '玩法系统',
        '.discipline-strip span:nth-of-type(4)': '实时图形',
        '.projects .section-kicker': '精选作品 / 2026',
        '#projects-title': '游戏与引擎项目',
        '.projects .section-heading > p': '三个 C++ 游戏项目, 涵盖虚幻引擎玩法系统与自研 OpenGL 渲染引擎.观看短片预览, 并进入项目详情页了解完整开发过程.',
        '.project-card:nth-child(1) .project-type': 'Unreal Engine 5.6 · 坦克射击',
        '.project-card:nth-child(1) .project-copy > p:not(.project-type)': '一款单人坦克射击游戏, 包含扫掠式载具移动, 炮塔瞄准, 投射物战斗以及可复用的 Pawn 战斗架构.',
        '.project-card:nth-child(2) .project-type': 'Unreal Engine 5.6 · 第三人称射击',
        '.project-card:nth-child(2) .project-copy > p:not(.project-type)': '一款战术第三人称射击游戏, 包含协同敌人 AI, 目标驱动关卡, 事件式 UI 与运行时优化.',
        '.project-card:nth-child(3) .project-type': '自研 C++/OpenGL 引擎 · 钓鱼游戏',
        '.project-card:nth-child(3) .project-copy > p:not(.project-type)': '一款使用自研光栅化 C++/OpenGL 引擎打造的风格化钓鱼游戏, 融合粒子系统, 变化天气, 动态天空与动态水面.',
        '.graphics-copy .section-kicker': '技术基础',
        '#graphics-title': '计算机图形学项目',
        '.graphics-copy > p:not(.section-kicker)': '在深入游戏开发之前, 我完成了网格处理, ARAP 变形, 路径追踪, 有限元, 实时环境与可微渲染等图形和模拟项目.',
        '.about .section-kicker': '玩家一号',
        '#about-title': '你好, 我是 Jiayi Li.',
        '.about-lead': '我是一名游戏开发工程师, 使用虚幻引擎创造响应迅速, 视觉统一的交互世界.',
        '.about-copy > p:not(.section-kicker):not(.about-lead)': '计算机图形学背景塑造了我的玩法工程思维: 我关注系统底层如何运作, 如何保持实时性能, 以及每个技术选择如何影响玩家体验.',
        '.about-facts > div:nth-child(1) strong': '计算机科学硕士',
        '.about-facts > div:nth-child(1) span': '布朗大学 · 2026',
        '.about-facts > div:nth-child(2) strong': '计算机科学与统计学学士',
        '.about-facts > div:nth-child(2) span': '波士顿大学 · 2024',
        '.about-facts > div:nth-child(3) strong': 'C++ 培训',
        '.about-facts > div:nth-child(3) span': 'Udemy · 持续学习',
        '.about-facts > div:nth-child(4) strong': '核心工具',
        '.games-label': '工作之外',
        '#games-played-title': '我喜欢玩的游戏',
        '.games-played > p:not(.games-label)': '我喜欢温暖治愈的世界, 脑洞大开的解谜叙事, 由物理机制带来的喜剧感, 以及有点手忙脚乱, 却格外好玩的合作体验.',
        '.about-links a:nth-child(3)': '简历 ↗',
        '.about-photo > span': '现居中国 · 寻找游戏开发机会',
        '.site-footer > div > p': '有值得共同构建的世界吗?'
      },
      html: {
        '.header-resume': '简历 <span aria-hidden="true">↓</span>',
        '.eyebrow': '<span class="status-dot" aria-hidden="true"></span> 虚幻引擎开发工程师',
        '#hero-title': '我打造<br>令人<em>沉浸其中</em>的游戏世界',
        '.project-card:nth-child(1) .project-copy h3 a': 'Battle Blaster <small>· 坦克射击游戏</small>',
        '.project-card:nth-child(2) .project-copy h3 a': 'Shooter Sam <small>· 战术第三人称射击</small>',
        '.project-card:nth-child(3) .project-copy h3 a': 'Fishing Game <small>· 风格化钓鱼游戏</small>',
        '.button-primary': '查看我的作品 <span aria-hidden="true">↓</span>',
        '.project-card:nth-child(1) .project-state': '<i></i> 短片预览 · 00:07',
        '.project-card:nth-child(1) .project-open': '完整演示与项目 <b aria-hidden="true">↗</b>',
        '.project-card:nth-child(2) .project-state': '<i></i> 短片预览 · 00:04',
        '.project-card:nth-child(2) .project-open': '完整演示与项目 <b aria-hidden="true">↗</b>',
        '.project-card:nth-child(3) .project-state': '<i></i> 短片预览 · 00:08',
        '.project-card:nth-child(3) .project-open': '完整演示与项目 <b aria-hidden="true">↗</b>',
        '.project-card:nth-child(1) .case-study-link': '完整演示与项目详情 <span aria-hidden="true">→</span>',
        '.project-card:nth-child(2) .case-study-link': '完整演示与项目详情 <span aria-hidden="true">→</span>',
        '.project-card:nth-child(3) .case-study-link': '完整演示与项目详情 <span aria-hidden="true">→</span>',
        '.project-note': '<span>▶</span> 预览将静音播放.进入项目详情页可观看带声音的完整演示.',
        '.graphics-copy .text-link': '浏览全部图形学项目 <span aria-hidden="true">↗</span>',
        '.footer-meta': '© <span id="year">2026</span> Jiayi Li · 为实时体验而构建'
      },
      attrs: {
        '.site-nav': { 'aria-label': '主导航' },
        '.discipline-strip': { 'aria-label': '核心方向' },
        '.development-mark': { 'aria-label': '表示游戏正在开发中的像素女巫' },
        '.hero-visual': { 'aria-label': '精选游戏轮播' },
        '.carousel-slide:nth-child(1) > img': { 'alt': '月夜哥特拱廊外的幻想城堡' },
        '.carousel-controls': { 'aria-label': '轮播控制' },
        '.carousel-prev': { 'aria-label': '上一个游戏' },
        '.carousel-next': { 'aria-label': '下一个游戏' },
        '.carousel-dots': { 'aria-label': '选择游戏' },
        '.carousel-dot:nth-child(1)': { 'aria-label': '显示开发中游戏' },
        '.carousel-dot:nth-child(2)': { 'aria-label': '显示 Battle Blaster' },
        '.carousel-dot:nth-child(3)': { 'aria-label': '显示 Shooter Sam' },
        '.carousel-dot:nth-child(4)': { 'aria-label': '显示 Fishing Game' },
        '.project-card:nth-child(1) .project-art': { 'aria-label': '打开 Battle Blaster 项目详情' },
        '.project-card:nth-child(2) .project-art': { 'aria-label': '打开 Shooter Sam 项目详情' },
        '.project-card:nth-child(3) .project-art': { 'aria-label': '打开钓鱼游戏与自研引擎项目详情' }
      }
    },
    'battle-blaster.html': {
      title: 'Battle Blaster — Jiayi Li 项目',
      description: 'Battle Blaster: Jiayi Li 使用 C++, Blueprints 与 Unreal Engine 5.6 开发的单人坦克射击游戏.',
      text: {
        '.project-resume': '简历 ↓',
        '.project-kicker': '项目 01 / 载具战斗',
        '.project-hero-copy > p:not(.project-kicker)': '一款围绕响应式载具操控, 可复用战斗架构与可预测敌方炮塔行为打造的单人坦克射击游戏.',
        '.project-meta li:nth-child(1) span': '引擎',
        '.project-meta li:nth-child(2) span': '技术栈',
        '.project-meta li:nth-child(3) span': '类型',
        '.project-meta li:nth-child(3) strong': '坦克射击',
        '.project-meta li:nth-child(4) span': '重点',
        '.project-meta li:nth-child(4) strong': '玩法系统',
        '#demo-title': '完整玩法演示',
        '.demo-caption > span': '01:24 · 使用播放器控件开启声音与全屏',
        '.overview .section-label': '项目概览 / 01',
        '#overview-title': '为可复用战斗而构建.',
        '.overview-copy p:nth-child(1)': 'Battle Blaster 让玩家直接操控坦克, 在充满敌方炮塔的竞技场中战斗.',
        '.overview-copy p:nth-child(2)': '我使用 C++ 与 Blueprints 开发该项目, 并通过共享 Pawn 战斗架构, 使玩家坦克与敌方炮塔共用炮塔旋转, 投射物生成和伤害处理逻辑.',
        '.overview-copy p:nth-child(3)': '移动与瞄准系统强调清晰, 可预测的行为: 坦克采用碰撞安全的移动方式, 炮塔平滑地以恒定速率追踪目标, 并通过计时器控制射击.',
        '.systems .section-label': '工程实现 / 02',
        '#systems-title': '核心系统',
        '.systems-header > p': '实现将共享战斗职责与 Pawn 专属的移动和行为分离, 使项目无需复制核心逻辑即可继续扩展.',
        '.system-card:nth-child(1) h3': '共享 Pawn 架构',
        '.system-card:nth-child(1) p': '将炮塔旋转, 投射物生成与伤害处理提取为坦克和炮塔变体共享的可复用逻辑.',
        '.system-card:nth-child(2) h3': '扫掠式坦克移动',
        '.system-card:nth-child(2) p': '将油门和转向输入转换为基于盒形碰撞根节点的扫掠平移与旋转, 防止穿透和无效重叠.',
        '.system-card:nth-child(3) h3': '炮塔目标追踪',
        '.system-card:nth-child(3) p': '计算目标方向, 并以恒定速率插值炮塔旋转, 实现平滑且可预测的敌人追踪.',
        '.system-card:nth-child(4) h3': '射击节奏',
        '.system-card:nth-child(4) p': '使用计时器限制投射物生成, 使敌人攻击保持一致, 易读且便于调节.',
        '.next-project small': '下一个项目',
        '.project-footer a': '查看简历 ↗'
      },
      html: {
        '.back-link': '<span aria-hidden="true">←</span> 全部项目'
      },
      attrs: {
        '.project-meta': { 'aria-label': '项目详情' },
        '.demo-frame video': { 'aria-label': 'Battle Blaster 完整玩法演示' }
      }
    },
    'shooter-sam.html': {
      title: 'Shooter Sam — Jiayi Li 项目',
      description: 'Shooter Sam: Jiayi Li 使用 C++, Blueprints 与 Unreal Engine 5.6 开发的战术第三人称射击游戏.',
      text: {
        '.project-resume': '简历 ↓',
        '.project-kicker': '项目 02 / 战术 AI',
        '.project-hero-copy > p:not(.project-kicker)': '一款以协同敌人智能, 目标驱动关卡和事件式玩法系统为核心的单人第三人称射击游戏.',
        '.project-meta li:nth-child(1) span': '引擎',
        '.project-meta li:nth-child(2) span': '技术栈',
        '.project-meta li:nth-child(3) span': '类型',
        '.project-meta li:nth-child(3) strong': '第三人称射击',
        '.project-meta li:nth-child(4) span': '重点',
        '.project-meta li:nth-child(4) strong': 'AI / 任务目标',
        '#demo-title': '完整玩法演示',
        '.demo-caption > span': '00:32 · 使用播放器控件开启声音与全屏',
        '.overview .section-label': '项目概览 / 01',
        '#overview-title': '会进行调查的敌人.',
        '.overview-copy p:nth-child(1)': 'Shooter Sam 是一款战术第三人称射击游戏, 敌人小队会对所见与所闻做出反应.',
        '.overview-copy p:nth-child(2)': '我为巡逻, 调查, 追击与攻击构建了分层 Behavior Tree 状态.枪声会转化为共享的最后已知位置与方向信息, 使附近 AI 能够协同调查, 同时避免透墙获知玩家位置.',
        '.overview-copy p:nth-child(3)': '关卡结构由事件式目标框架驱动, 同时通过可复用组件与有针对性的运行时检查, 高效管理生命值 UI 与 AI 更新.',
        '.systems .section-label': '工程实现 / 02',
        '#systems-title': '核心系统',
        '.systems-header > p': '游戏通过专注的系统连接感知, 协作, 任务目标, 动画, 生命值和性能优化, 并利用事件与共享状态进行通信.',
        '.system-card:nth-child(1) h3': '战术行为树',
        '.system-card:nth-child(1) p': '使用 services, decorators 与可见性射线, 在巡逻, 调查, 追击和攻击间实现清晰切换, 并防止敌人透墙追踪玩家.',
        '.system-card:nth-child(2) h3': '小队感知',
        '.system-card:nth-child(2) p': '将枪声转换为共享的最后已知位置与方向数据, 使附近 AI 先协同调查, 再恢复各自决策.',
        '.system-card:nth-child(3) h3': '事件式任务目标',
        '.system-card:nth-child(3) p': '收集, 消灭与关键事件会更新 GameMode 状态, 仅在所有条件满足后解锁出口.',
        '.system-card:nth-child(4) h3': '动画状态',
        '.system-card:nth-child(4) p': '结合玩家输入, 速度, 移动方向和角色旋转, 在移动, 瞄准与攻击状态之间实现响应式过渡.',
        '.system-card:nth-child(5) h3': '可复用生命值组件',
        '.system-card:nth-child(5) p': '通过 multicast delegate 广播标准化生命值, 使玩家和 AI 的 UMG 生命条无需 Tick 轮询即可更新.',
        '.system-card:nth-child(6) h3': 'AI 工作负载控制',
        '.system-card:nth-child(6) p': '使用 octree 查询, 可见性射线与 NavMesh 连通性检查, 为不可达敌人暂停 Tick, 减少不必要的处理.',
        '.next-project small': '上一个项目',
        '.project-footer a': '查看简历 ↗'
      },
      html: {
        '.back-link': '<span aria-hidden="true">←</span> 全部项目'
      },
      attrs: {
        '.project-meta': { 'aria-label': '项目详情' },
        '.demo-frame video': { 'aria-label': 'Shooter Sam 完整玩法演示' }
      }
    },
    'fishing-engine.html': {
      title: 'Fishing Game — Jiayi Li 项目',
      description: 'Fishing Game 是 Jiayi Li 使用自研 C++/OpenGL 渲染引擎开发的风格化钓鱼游戏.',
      text: {
        '.project-resume': '简历 ↓',
        '.project-kicker': '项目 03 / 自研引擎',
        '.project-hero-copy > p:not(.project-kicker)': '一款使用自研 C++/OpenGL 渲染引擎与多种实时世界系统打造的风格化户外钓鱼游戏.',
        '.project-meta li:nth-child(1) span': '引擎',
        '.project-meta li:nth-child(2) span': '技术栈',
        '.project-meta li:nth-child(3) span': '类型',
        '.project-meta li:nth-child(3) strong': 'Fishing Game',
        '.project-meta li:nth-child(4) span': '重点',
        '.project-meta li:nth-child(4) strong': '渲染 / 世界系统',
        '#demo-title': '完整玩法演示',
        '.demo-caption > span': '02:08 · 使用播放器控件开启声音与全屏',
        '.overview .section-label': '项目概览 / 01',
        '#overview-title': '将引擎构建成世界.',
        '.overview-copy p:nth-child(1)': 'Fishing Game 是一款完整的交互作品, 游戏的渲染与玩法都运行在我自主开发的 C++/OpenGL 引擎上.',
        '.overview-copy p:nth-child(2)': '引擎采用光栅化管线, 通过 VAO 和 VBO 组织并实时绘制游戏几何体.',
        '.overview-copy p:nth-child(3)': '游戏世界将粒子系统, 变化天气, 动态天空与动态水面, 同核心钓鱼循环和收集反馈结合起来.',
        '.systems .section-label': '工程实现 / 02',
        '#systems-title': '核心系统',
        '.systems-header > p': '项目在同一个自研引擎中连接专注的光栅化管线, 环境系统与玩法.',
        '.system-card:nth-child(1) h3': '自研引擎基础',
        '.system-card:nth-child(1) p': '使用自研 C++/OpenGL 引擎构建游戏, 并组织专注于实时场景与玩法的基础结构.',
        '.system-card:nth-child(2) h3': '光栅化管线',
        '.system-card:nth-child(2) p': '使用 VAO 与 VBO 管理网格数据, 并通过传统 OpenGL 光栅化流程绘制游戏几何体.',
        '.system-card:nth-child(3) h3': '粒子系统',
        '.system-card:nth-child(3) p': '构建可复用的粒子系统, 为钓鱼体验提供实时环境效果与视觉反馈.',
        '.system-card:nth-child(4) h3': '天气与天空',
        '.system-card:nth-child(4) p': '连接变化的天气与天空状态, 为环境带来可见的时间与氛围变化.',
        '.system-card:nth-child(5) h3': '动态水面',
        '.system-card:nth-child(5) p': '创建响应式水面, 为游戏视觉风格与钓鱼过程提供核心环境表现.',
        '.system-card:nth-child(6) h3': 'Fishing Gameplay',
        '.system-card:nth-child(6) p': '将抛竿, 时机判断, 收集反馈, 天气变化与鱼类发现整合进自研引擎环境.',
        '.next-project small': '下一个项目',
        '.project-footer a': '查看简历 ↗'
      },
      html: {
        '.back-link': '<span aria-hidden="true">←</span> 全部项目'
      },
      attrs: {
        '.project-meta': { 'aria-label': '项目详情' },
        '.demo-frame video': { 'aria-label': 'Fishing Game 与自研引擎完整演示' }
      }
    },
    'graphics.html': {
      title: '图形学项目档案 — Jiayi Li',
      description: 'Jiayi Li 的计算机图形学项目档案: 网格处理, 变形, 路径追踪, 有限元, 实时渲染与可微渲染.',
      text: {
        '.graphics-nav a:nth-child(1)': '游戏项目',
        '.graphics-nav a:nth-child(2)': '图形学',
        '.graphics-nav a:nth-child(3)': '关于我',
        '.resume-button': '简历 ↓',
        '.graphics-hero .eyebrow': '技术档案 / 2022—2026',
        '.hero-copy > p': '一组涵盖渲染, 几何处理, 变形与模拟的项目, 构成了我进行实时游戏开发的技术基础.',
        '.hero-meta span:nth-child(1)': '06 个项目方向',
        '.hero-meta span:nth-child(3)': '渲染 / 模拟',
        '.graphics-strip span:nth-of-type(1)': '几何处理',
        '.graphics-strip span:nth-of-type(2)': '渲染',
        '.graphics-strip span:nth-of-type(3)': '模拟',
        '.graphics-strip span:nth-of-type(4)': '实时系统',
        '#mesh .project-heading span': '01 / 几何处理',
        '#mesh h2': 'Mesh Processing',
        '#mesh .project-heading > p': '用于控制几何细节与网格质量的细分, 简化与重网格化流程.',
        '#mesh article:nth-child(1) h3': '细分',
        '#mesh article:nth-child(2) h3': '简化',
        '#mesh article:nth-child(3) h3': '重网格化',
        '#arap .project-heading span': '02 / 变形',
        '#arap .project-heading > p': '尽可能保持局部形状, 同时实现响应迅速, 可控编辑的 ARAP 变形.',
        '#path-tracer .project-heading span': '03 / 光传输',
        '#path-tracer h2': 'Path Tracer',
        '#path-tracer .project-heading > p': '直接与全局光照, 递归反射与折射, 光泽材质及超采样.',
        '#path-tracer figure:nth-child(1) figcaption': 'Cornell Box / 直接光照',
        '#path-tracer figure:nth-child(2) figcaption': 'Cornell Box / 全局光照',
        '#path-tracer figure:nth-child(3) figcaption': '低概率采样',
        '#path-tracer figure:nth-child(4) figcaption': '光泽材质',
        '#path-tracer figure:nth-child(5) figcaption': '镜面反射',
        '#path-tracer figure:nth-child(6) figcaption': '折射',
        '#fem .project-heading span': '04 / 模拟',
        '#fem h2': 'Finite Element Method',
        '#fem .project-heading > p': '在多个测试场景中使用有限元模拟进行基于物理的变形实验.',
        '#real-time .project-heading span': '05 / 实时引擎',
        '#real-time h2': 'Natural Environment Renderer',
        '#real-time .project-heading > p': '使用光栅化 C++/OpenGL 构建的室外渲染器, 结合粒子系统, 变化天气与天空状态以及动态水面.',
        '#differentiable .project-heading span': '06 / 逆向渲染',
        '#differentiable h2': 'Differentiable Rendering',
        '#differentiable .project-heading > p': '基于 Wang, Deng, Zhang, Jakob 与 Marschner 的论文“A Simple Approach to Differentiable Rendering of SDFs”进行实现.',
        '.game-cta p': '更多游戏项目',
        '.graphics-footer a:nth-child(2)': '邮件 ↗'
      },
      html: {
        '.game-cta h2': '查看其他<br>游戏项目.',
        '.game-cta > a': '查看游戏项目 <span aria-hidden="true">→</span>'
      },
      attrs: {
        '.graphics-nav': { 'aria-label': '图形学页面导航' },
        '.graphics-strip': { 'aria-label': '图形学方向' }
      }
    }
  };

  const config = pages[page];
  if (!config) return;

  const remember = (element, type, name = '') => {
    const key = `${type}:${name}`;
    if (!original.has(element)) original.set(element, {});
    const values = original.get(element);
    if (!(key in values)) {
      values[key] = type === 'text' ? element.textContent : type === 'html' ? element.innerHTML : element.getAttribute(name);
    }
  };

  const restore = () => {
    original.forEach((values, element) => {
      Object.entries(values).forEach(([key, value]) => {
        const [type, name] = key.split(':');
        if (type === 'text') element.textContent = value;
        if (type === 'html') element.innerHTML = value;
        if (type === 'attr') value === null ? element.removeAttribute(name) : element.setAttribute(name, value);
      });
    });
  };

  const cacheTargets = () => {
    Object.keys(config.text || {}).forEach(selector => document.querySelectorAll(selector).forEach(el => remember(el, 'text')));
    Object.keys(config.html || {}).forEach(selector => document.querySelectorAll(selector).forEach(el => remember(el, 'html')));
    Object.entries(config.attrs || {}).forEach(([selector, attrs]) => document.querySelectorAll(selector).forEach(el => Object.keys(attrs).forEach(name => remember(el, 'attr', name))));
  };

  const applyLanguage = language => {
    restore();
    const isChinese = language === 'zh';
    document.documentElement.lang = isChinese ? 'zh-CN' : 'en';
    document.title = isChinese ? config.title : document.documentElement.dataset.originalTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = isChinese && config.description ? config.description : description.dataset.originalContent;

    if (isChinese) {
      Object.entries(config.text || {}).forEach(([selector, value]) => document.querySelectorAll(selector).forEach(el => { el.textContent = value; }));
      Object.entries(config.html || {}).forEach(([selector, value]) => document.querySelectorAll(selector).forEach(el => { el.innerHTML = value; }));
      Object.entries(config.attrs || {}).forEach(([selector, attrs]) => document.querySelectorAll(selector).forEach(el => Object.entries(attrs).forEach(([name, value]) => el.setAttribute(name, value))));
    }

    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    try { localStorage.setItem('portfolio-language', language); } catch (_) {}
  };

  document.documentElement.dataset.originalTitle = document.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.dataset.originalContent = description.content;
  cacheTargets();

  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
  let saved = 'en';
  try { saved = localStorage.getItem('portfolio-language') || 'en'; } catch (_) {}
  applyLanguage(saved === 'zh' ? 'zh' : 'en');
})();
