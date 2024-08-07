const productData = [
  {
    id: 1,
    name: "Анализатор мочи MIND UA-66",
    img: `https://global-mt.ru/upload/iblock/fac/2z16po15mw0bukk89j839sr5ra7m6kgx.jpg`,
    category: "Новинки",
    price: 300000,
    seriesNumber: "12345",
    amount: 1,
    description:
      "Тем не менее, рамки и место обучения кадров создаёт предпосылки для новых предложений.",
  },
  {
    id: 2,
    name: "Ветеринарное оборудование",
    img: "https://global-mt.ru/upload/iblock/85e/o3f2bd3fcsty3x0ykxn00ki55gjdkb3r/metrologya7.jpg",
    category: "Акции",
    price: 24000,
    oldprice: 28000,
    seriesNumber: "12346",
    amount: 1,
    description:
      "Как уже неоднократно упомянуто, понимание сути ресурсосберегающих технологий предопределяет высокую востребованность инновационных методов управления процессами.",
  },
  {
    id: 3,
    name: "Эндоскопия",
    img: `https://global-mt.ru/upload/iblock/54e/0ewuig86nbzzkpe5srk36avceish4cq5.jpg`,
    category: "Новинки",
    price: 392300,
    seriesNumber: "12347",
    amount: 1,
    description:
      "Имеющиеся убеждения, а также свежий взгляд на вещи требует анализа существующих финансовых и административных условий",
  },
  {
    id: 4,
    name: "Оборудование для анастезиологии",
    img: `https://global-mt.ru/upload/iblock/cd0/sbvrzjap6kqu0b0bh09pod3pdniwre02.jpg`,
    category: "Новинки",
    price: 56000,
    seriesNumber: "12348",
    amount: 1,
    description:
      "Внедрение современных методологий и подходов способствует обогащению накопленного опыта.",
  },
  {
    id: 5,
    name: "Для медицинской метрологии",
    img: `https://global-mt.ru/upload/iblock/81e/quff7dfxej1kipna3p9hdgshfubp1h2b.jpg`,
    category: "Акции",
    price: 220000,
    oldprice: 224000,
    seriesNumber: "12349",
    amount: 1,
    description:
      "Практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития.",
  },
  {
    id: 6,
    name: "Мебель для медецинских целей",
    img: `https://global-mt.ru/upload/iblock/8e6/uythew6glffk1ywe9uwob1b2aaxoo6ya.jpg`,
    category: "Хиты продаж",
    price: 23600,
    seriesNumber: "12350",
    amount: 1,
    description:
      "С учётом сложившейся международной обстановки, новая модель организационной деятельности в значительной степени обусловливает создание всесторонне сбалансированных нововведений.",
  },
  {
    id: 7,
    name: "ЛОР оборудование",
    img: `https://global-mt.ru/upload/iblock/aae/ocvg99358sbl1fio6esa1kkb3n1w2wff.jpg`,
    category: "Акции",
    price: 402000,
    oldprice: 401000,
    seriesNumber: "12351",
    amount: 1,
    description:
      "Таким образом, современная методология разработки требует от нас анализа модели развития.",
  },
  {
    id: 8,
    name: "Дерматологическое оборудование",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9JOXbKf08e-oxemFtmsvN-lUOdJ8yu3kAw&s",
    category: "Новинки",
    price: 458000,
    seriesNumber: "12352",
    amount: 1,
    description:
      "Идейные соображения высшего порядка, а также сложившаяся структура организации способствует подготовке и реализации соответствующих условий активизации.",
  },
  {
    id: 9,
    name: "Ультразвуковая диагностика",
    img: "https://media.istockphoto.com/id/1281389365/photo/blood-pressure-gauge.jpg?s=612x612&w=0&k=20&c=2vaSXGDF649H_UcFnNJ2YyJWmKY0p4FQDgk8PAKHZIA=",
    category: "Новинки",
    price: 16000,
    seriesNumber: "12353",
    amount: 1,
    description:
      "	В своём стремлении улучшить пользовательский опыт, мы забываем, что глубокий уровень погружения требует от нас более тщательного анализа существующих паттернов поведения.",
  },
  {
    id: 10,
    name: "Омрон БФ-212",
    img: "https://www.ciamedical.com/insights/content/uploads/2016/02/sss40.png",
    category: "Хиты продаж",
    price: 23400,
    seriesNumber: "12354",
    amount: 1,
    description:
      "Безусловно, перспективное планирование способствует повышению качества экспериментов, поражающих по своей масштабности и глубине.",
  },
  {
    id: 11,
    name: "Диакомс РМ-2",
    img: "https://global-mt.ru/upload/iblock/a4b/84vuhast5808oq0an2ih27qevkqb8lwp.png",
    category: "Новинки",
    price: 320010,
    seriesNumber: "12355",
    amount: 1,
    description:
      "На протяжении всей нашей истории формирование общественного мнения играет важную роль в развитии идей массового участия.",
  },
  {
    id: 12,
    name: "Ристер РИ-Чемпион",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoXFAE-2t6FAFbjxk6wPpWaETnRrClMGNpw&s",
    category: "Акции",
    price: 785200,
    oldprice: 788000,
    seriesNumber: "12356",
    amount: 1,
    description:
      "	Дорогие друзья, социально-экономическое развитие создаёт все необходимые предпосылки для внедрения современных тенденций.",
  },
  {
    id: 13,
    name: "ЭлМед Троакар по Красножену",
    img: "https://www.ciamedical.com/insights/content/uploads/2016/02/sss72.png",
    category: "Хиты продаж",
    price: 54860,
    seriesNumber: "12357",
    amount: 1,
    description:
      "С другой стороны, потребность в новых моделях диктует необходимость анализа кластеризации усилий.",
  },
  {
    id: 14,
    name: "Полимерные изделия окончатый 125 мм",
    img: "https://www.ciamedical.com/insights/content/uploads/2016/02/sss56.png",
    category: "Новинки",
    price: 89040,
    seriesNumber: "12358",
    amount: 1,
    description:
      "Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности напрямую зависит от своевременного выполнения сверхзадач",
  },
  {
    id: 15,
    name: "Биопсийные щипцы BIGopsy для ввода с дистального конца",
    img: "https://global-mt.ru/upload/iblock/c6e/0pordpcsv1m0eejjpk0uie7ftwusdl2k.jpg",
    category: "Новинки",
    price: 320450,
    seriesNumber: "12359",
    amount: 1,
    description:
      "	Важный и принципиальный момент — это то, что укрепление и развитие внутренней структуры влечёт за собой процесс внедрения и модернизации соответствующих условий активизации.",
  },
  {
    id: 16,
    name: "Кровать медицинская МЕГИ МСК-122",
    img: "https://global-mt.ru/upload/iblock/343/thhoixipw9z1qmr1d532z5xs0r698m68.jpg",
    category: "Акции",
    price: 84860,
    oldprice: 85000,
    seriesNumber: "12360",
    amount: 1,
    description:
      "Повседневная практика показывает, что повышение уровня гражданского сознания позволяет выполнить важные задания по разработке новых предложений.Как принято считать, глобализация и digital-преобразования требуют анализа экономической целесообразности принимаемых решений.",
  },
  {
    id: 17,
    name: "Karl Storz Рабочий элемент по Kuntz",
    img: "https://global-mt.ru/upload/iblock/994/up35t6hkl0i48yv6vzobk5q776fmkfo3.png",
    category: "Новинки",
    price: 77500,
    seriesNumber: "12361",
    amount: 1,
    description:
      "	Внедрение современных методик управления требует от нас системного подхода и анализа модели развития.",
  },
  {
    id: 18,
    name: "Магнитно-резонансный томограф Canon Vantage Titan 3T",
    img: "https://global-mt.ru/upload/iblock/59a/ityne23377ryop131c7midefx80suksh.jpg",
    category: "Хиты продаж",
    price: 81400,
    seriesNumber: "12362",
    amount: 1,
    description:
      "Идейные соображения высшего порядка и сложившаяся структура организации способствует подготовке и реализации планов активизации.",
  },
  {
    id: 19,
    name: "ЛОР-комбайн Dantschke Intra 350 с закругленным профилем",
    img: "https://global-mt.ru/upload/iblock/f4f/x5ak53u35c2xyod0djun1lznt9ihcccs.jpg",
    category: "Акции",
    price: 87400,
    oldprice: 88000,
    seriesNumber: "12363",
    amount: 1,
    description:
      "С другой стороны, реализация намеченных плановых заданий способствует подготовке и реализации моделей развития.",
  },
  {
    id: 20,
    name: "Монитор пациента Draeger Infinity M540",
    img: "https://global-mt.ru/upload/iblock/1b2/o4dt42ncygysdmmau7jr8rizq7uftkou.jpg",
    category: "Новинки",
    price: 84750,
    seriesNumber: "12364",
    amount: 1,
    description:
      "Значимость этих проблем настолько очевидна, что новая модель организационной деятельности в значительной степени обусловливает создание системы обучения кадров.",
  },
  {
    id: 21,
    name: "Стоматологическая установка PD-852",
    img: "https://global-mt.ru/upload/iblock/d10/dz087gckve0isg016ueeqh728qarqs0s/delphis_f.webp",
    category: "Хиты продаж",
    price: 32500,
    seriesNumber: "12365",
    amount: 1,
    description:
      "Кстати, глубокий уровень погружения требует от нас анализа существующих паттернов поведения.",
  },
  {
    id: 22,
    name: "Монитор пациента Welch Allyn ProPAQ LT",
    img: "https://global-mt.ru/upload/iblock/081/8qwdgwxyzfg37pzl307euom9zy22gelt.jpg",
    category: "Акции",
    price: 42500,
    oldprice: 43000,
    seriesNumber: "12366",
    amount: 1,
    description:
      "Равным образом, начало повседневной работы по формированию позиции позволяет оценить значение системы массового участия.",
  },
  {
    id: 23,
    name: "Клинический Е-индикатор",
    img: "https://global-mt.ru/upload/iblock/d0c/9qblkew2coh3bem6pn3iupvagg6gx8j3.jpg",
    category: "Акции",
    price: 24500,
    oldprice: 25000,
    seriesNumber: "12367",
    amount: 1,
    description:
      "В своём стремлении улучшить качество жизни, мы забываем, что постоянное информационно-пропагандистское обеспечение способствует дальнейшим направлениям развития.",
  },
  {
    id: 24,
    name: "Хирургический микроскоп Leica Proveo 8",
    img: "https://global-mt.ru/upload/iblock/f78/7j6jox9nw5k2b89gjpa6asg4649l63se.png",
    category: "Хиты продаж",
    price: 45700,
    seriesNumber: "12368",
    amount: 1,
    description:
      "Имеющиеся убеждения, а также свежий взгляд на вещи требует от нас системного подхода к укреплению и развитию внутренней структуры.",
  },
  {
    id: 25,
    name: "Кресло гинекологическое МЕГИ МСК-409",
    img: "https://global-mt.ru/upload/iblock/5b5/njqrvexqeeavhl6wrxtk279s0259v6cu.jpg",
    category: "Акции",
    price: 35200,
    oldprice: 36000,
    seriesNumber: "12369",
    amount: 1,
    description:
      "	Как уже неоднократно упомянуто, существующая теория требует анализа системы обучения кадров, соответствующей насущным потребностям.",
  },
  {
    id: 26,
    name: "Медицинский монитор Barco Eonis 24 (MDRC-2324)",
    img: "https://global-mt.ru/upload/iblock/23a/tatflbuw7bewixs2qq5vje1tz519sdqj.jpg",
    category: "Новинки",
    price: 420240,
    seriesNumber: "12370",
    amount: 1,
    description:
      "Таким образом, реализация намеченных плановых заданий позволяет выполнить важные задания по разработке модели развития.",
  },
  {
    id: 27,
    name: "Цифровой микроскоп DM-480A",
    img: "https://global-mt.ru/upload/iblock/ebf/aqgleom44nsherp43chdiy5ub93aybdd.jpg",
    category: "Хиты продаж",
    price: 45600,
    seriesNumber: "12371",
    amount: 1,
    description:
      "Безусловно, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значимость новых принципов формирования материально-технической базы.",
  },
  {
    id: 28,
    name: "Хирургический микроскоп Haag-Streit Allegra 90",
    img: "https://global-mt.ru/upload/iblock/9f6/jcu7l3eet1tutps5l58q76zbvj7x2zj6.jpg",
    category: "Хиты продаж",
    price: 98000,
    seriesNumber: "12372",
    amount: 1,
    description:
      "Повседневная практика показывает, что новая модель организационной деятельности способствует повышению актуальности укрепления моральных ценностей.",
  },
  {
    id: 29,
    name: "НПФ Крыло ВК – 01 – «Крыло» тип 2",
    img: "https://global-mt.ru/upload/iblock/4e0/2rc7vtpsdfu8iynwpjcvgctfks97h830.jpg",
    category: "Акции",
    price: 64000,
    oldprice: 64400,
    seriesNumber: "12373",
    amount: 1,
    description:
      "Практика показывает, что дальнейшее развитие различных форм деятельности требует от нас анализа существующих финансовых и административных условий.",
  },
  {
    id: 30,
    name: "Монитор пациента Philips IntelliVue MP90",
    img: "https://global-mt.ru/upload/iblock/0b9/bu398moo575z8w4bjc4ys2n3068n6g7q.png",
    category: "Хиты продаж",
    price: 31200,
    seriesNumber: "12374",
    amount: 1,
    description:
      "Как уже неоднократно упомянуто, понимание сути ресурсосберегающих технологий предопределяет высокую востребованность инновационных методов управления процессами.",
  },
  {
    id: 31,
    name: "Монитор пациента Philips IntelliVue MP90",
    img: "https://global-mt.ru/upload/iblock/0b9/bu398moo575z8w4bjc4ys2n3068n6g7q.png",
    category: "Хиты продаж",
    price: 31201,
    seriesNumber: "12374",
    amount: 1,
    description:
      "Кстати, глубокий уровень погружения требует от нас анализа существующих паттернов поведения.",
  },
];

export default productData;
