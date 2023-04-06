export default [
  {
    name: '회사소개',
    path: 'about',
    defaultPath: '/about/intro',
    children: [
      {
        children: [
          {
            name: '회사소개',
            path: 'intro',
          },
          {
            name: '주요연혁',
            path: 'history',
          },
          {
            name: '면허현황',
            path: 'licenses',
          },
          {
            name: '조직도',
            path: 'hierarchy',
          },
          {
            name: '오시는길',
            path: 'map',
          },
        ],
      },
    ],
    oneColumn: true,
  },
  {
    name: '사업영역',
    path: 'story',
    defaultPath: '/story/environment/intro',
    children: [
      {
        name: '환경영향평가',
        path: 'environment',
        defaultPath: '/story/environment/intro',
        children: [
          { name: '소개', path: 'intro' },
          { name: '환경영향평가', path: 'environment', hash: '환경영향평가' },
          { name: '전략환경영향평가', path: 'environment', hash: '전략환경영향평가' },
          { name: '소규모환경영향평가', path: 'environment', hash: '소규모환경영향평가' },
          { name: '사후환경영향조사', path: 'environment', hash: '사후환경영향조사' },
        ],
      },
      {
        name: '재해영향평가',
        path: 'disaster',
        defaultPath: '/story/disaster/intro',
        children: [
          { name: '소개', path: 'intro' },
          { name: '재해영향평가', path: 'disaster', hash: '재해영향평가' },
          { name: '소규모재해영향평가', path: 'disaster', hash: '소규모재해영향평가' },
          { name: '재해영향성검토', path: 'disaster', hash: '재해영향성검토' },
        ],
      },
      {
        name: '엔지니어링 (도시설계진단)',
        path: 'engineering',
        defaultPath: '/story/engineering/urban-planning',
        children: [
          { name: '도시계획', path: 'urban-planning' },
          { name: '조경설계', path: 'landscape' },
          { name: '전기설계 및 감리' },
          { name: '토목설계 및 감리', path: 'civil' },
          { name: '안전진단', path: 'safety-diagnosis' },
        ],
      },
      {
        name: '종합건설',
        children: [{ name: '토목공사' }, { name: '건축공사' }, { name: '조경' }, { name: '전기' }],
      },
      {
        name: '환경공사관리(인허가)',
        path: 'permission',
        defaultPath: '/story/permission/environment',
        children: [
          { name: '환경인허가', path: 'environment' },
          { name: '환경전문공사(수질대기)<br/> 및 수질환경관리', path: 'water' },
          { name: '수질측정기기관리', path: 'water-measurement' },
        ],
      },
    ],
  },
  {
    name: '사업실적',
    path: 'performance',
    defaultPath: '/performance/environment/environment',
    children: [
      {
        name: '환경영향평가 실적',
        path: 'environment',
        defaultPath: '/performance/environment/environment',
        children: [
          { name: '환경영향평가', path: 'environment' },
          { name: '전략환경영향평가', path: 'strategic' },
          { name: '소규모환경영향평가', path: 'small-scale' },
          { name: '사후환경영향조사', path: 'post' },
        ],
      },
      {
        name: '재해영향평가 실적',
        path: 'disaster',
        defaultPath: '/performance/disaster/disaster',
        children: [
          { name: '재해영향평가', path: 'disaster' },
          { name: '소규모재해영향평가', path: 'small-scale' },
          { name: '사전재해영향성검토', path: 'pre' },
        ],
      },
      {
        name: '엔지니어링 실적',
        path: 'engineering',
        defaultPath: '/performance/engineering/urban-planning',
        children: [
          { name: '도시계획', path: 'urban-planning' },
          { name: '조경설계', path: 'landscape' },
          { name: '토목설계 및 감리', path: 'civil' },
          { name: '안전진단', path: 'safety-diagnosis' },
        ],
      },
      {
        name: '환경공사/관리 실적',
        path: 'permission',
        defaultPath: '/performance/permission/environment',
        children: [
          { name: '환경인허가', path: 'environment' },
          { name: '환경전문공사(수질⋅대기) 및 수질환경관리', path: 'water' },
          { name: '수질측정기기관리', path: 'water-measurement' },
        ],
      },
    ],
  },
]
