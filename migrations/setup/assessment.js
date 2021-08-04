const questions = [
  {
    code: "QUE00001",
    question: "Have you or your family members experienced disorders\\?",
    options: [
      {
        code: "OPT00001",
        option: "Yes"
      },
      {
        code: "OPT00002",
        option: "No"
      },
      {
        code: "OPT00003",
        option: "I don''t know"
      }
    ]
  },
  {
    code: "QUE00002",
    question: "How much sleep do you have in a day\\?",
    options: [
      {
        code: "OPT00004",
        option: "9-12 hrs"
      },
      {
        code: "OPT00005",
        option: "8-10 hrs"
      },
      {
        code: "OPT00006",
        option: "7-8 hrs"
      },
      {
        code: "OPT00007",
        option: "Less than 7 hrs"
      }
    ]
  },
  {
    code: "QUE00003",
    question: "How many sugary drinks would you usually have in a day\\?",
    options: [
      {
        code: "OPT00008",
        options: "2 or more"
      },
      {
        code: "OPT00009",
        options: "Not more than 1"
      },
      {
        code: "OPT00010",
        option: "I rarely drink soda"
      },
      {
        code: "OPT00011",
        options: "None"
      }
    ]
  },
  {
    code: "QUE00004",
    question: "How often do you eat fast food or sugary snacks\\?",
    options: [
      {
        code: "OPT00012",
        option: "more than twice a week"
      },
      {
        code: "OPT00013",
        option: "twice a week"
      },
      {
        code: "OPT00014",
        options: "once a week"
      },
      {
        code: "OPT00015",
        option: "Rarely"
      },
      {
        code: "OPT00016",
        option: "Never"
      }
    ]
  },
  {
    code: "QUE00005",
    question: "Are you often stressed or in a stressful environment\\?",
    options: [
      {
        code: "OPT00017",
        option: "Yes"
      },
      {
        code: "OPT00018",
        option: "Sometimes"
      },
      {
        code: "OPT00019",
        option: "Rarely"
      },
      {
        code: "OPT00020",
        option: "Never"
      }
    ]
  },
  {
    code: "QUE00006",
    question: "How much alcohol do you consume weekly\\?",
    options: [
      {
        code: "OPT00021",
        option: "more than 6 pints of beer"
      },
      {
        code: "OPT00022",
        option: "2 pints of lager/beer/cider or 2 large glasses of wine"
      },
      {
        code: "OPT00023",
        option: "Pint of beer or standard glass of wine"
      },
      {
        code: "OPT00024",
        option: "Single shot of spirits or small glass of wine"
      },
      {
        code: "OPT00025",
        option: "None"
      }
    ]
  },
  {
    code: "QUE00007",
    question: "Are you an active or social drinker\\?",
    options: [
      {
        code: "OPT00026",
        option: "Active- more than 20 years"
      },
      {
        code: "OPT00027",
        option: "Active- less than 20 years"
      },
      {
        code: "OPT00028",
        option: "Social"
      }
    ]
  },
  {
    code: "QUE00008",
    question: "Have you or a family member had liver-related infections? (Hepatitis A, B or C)",
    options: [
      {
        code: "OPT00029",
        option: "Yes"
      },
      {
        code: "OPT00030",
        option: "No"
      }
    ]
  },
  {
    code: "QUE00009",
    question: "Do you usually wash fruits or vegetables before consumption\\?",
    options: [
      {
        code: "OPT00031",
        option: "Yes"
      },
      {
        code: "OPT00032",
        option: "Sometimes"
      },
      {
        code: "OPT00033",
        option: "Rarely"
      },
      {
        code: "OPT00034",
        option: "Never"
      }
    ]
  },
  {
    code: "QUE00010",
    question: "Do you often take nore than one medicine/supplement at once\\?",
    options: [
      {
        code: "OPT00035",
        option: "Yes"
      },
      {
        code: "OPT00036",
        option: "Sometimes"
      },
      {
        code: "OPT00037",
        option: "Rarely"
      },
      {
        code: "OPT00038",
        option: "Never"
      }
    ]
  },
  {
    code: "QUE00011",
    question: "How much exercise do you have in a day\\?",
    options: [
      {
        code: "OPT00039",
        option: "30 mins or more moderate intensity"
      },
      {
        code: "OPT00040",
        option: "20 mins or more vigorous intensity"
      },
      {
        code: "OPT00041",
        option: "Less than 20 mins"
      },
      {
        code: "OPT00042",
        option: "less than 5 mins"
      },
      {
        code: "OPT00043",
        option: "I do not exercise"
      }
    ]
  },
  {
    code: "QUE00012",
    question: "What manner of exercise do you usually perform\\?",
    options: [
      {
        code: "OPT00044",
        option: "Cycling"
      },
      {
        code: "OPT00045",
        option: "Swimming"
      },
      {
        code: "OPT00046",
        option: "Running"
      },
      {
        code: "OPT00047",
        option: "Jogging "
      },
      {
        code: "OPT00048",
        option: "Walking"
      }
    ]
  },
  {
    code: "QUE00013",
    question: "What is the estimated number of steps you take in a day\\?",
    options: [
      {
        code: "OPT00049",
        option: "3000 and above"
      },
      {
        code: "OPT00050",
        option: "1000-2999"
      },
      {
        code: "OPT00051",
        option: "500-999"
      },
      {
        code: "OPT00052",
        option: "100-499"
      },
      {
        code: "OPT00053",
        option: "Less than 100"
      }
    ]
  },
  {
    code: "QUE00014",
    question: "Do you do any daily strecthes\\?",
    options: [
      {
        code: "OPT00054",
        option: "Yes"
      },
      {
        code: "OPT00055",
        option: "No"
      }
    ]
  },
  {
    code: "QUE00015",
    question: "What is your daily screen time? (Laptop/TV/tab/Ipad, etc.)",
    options: [
      {
        code: "OPT00056",
        option: "5 hours and above"
      },
      {
        code: "OPT00057",
        option: "2-4 hrs"
      },
      {
        code: "OPT00058",
        option: "1 hr"
      },
      {
        code: "OPT00059",
        option: "30-59 mins"
      },
      {
        code: "OPT00060",
        option: "Less than 30 mins"
      }
    ]
  },
  {
    code: "QUE00016",
    question: "How many cigarettes do you smoke in a day\\?",
    options: [
      {
        code: "OPT00061",
        option: "10 and above"
      },
      {
        code: "OPT00096",
        option: "Between 5-9"
      },
      {
        code: "OPT00062",
        option: "Less than 5"
      },
      {
        code: "OPT00063",
        option: "None"
      }
    ]
  },
  {
    code: "QUE00017",
    question: "How long have you been smoking\\?",
    options: [
      {
        code: "OPT00064",
        option: "30 pack years and above"
      },
      {
        code: "OPT00065",
        option: "20-29 pack years"
      },
      {
        code: "OPT00066",
        option: "10-19 pack years"
      },
      {
        code: "OPT00067",
        option: "5-9 pack years"
      },
      {
        code: "OPT00068",
        option: "1-4 pack years"
      },
      {
        code: "OPT00069",
        option: "None"
      }
    ]
  },
  {
    code: "QUE00018",
    question: "How often are you exposed to second-hand smoke\\?",
    options: [
      {
        code: "OPT00070",
        option: "At least twice a day"
      },
      {
        code: "OPT00071",
        option: "At least once a day"
      },
      {
        code: "OPT00072",
        option: "At least once a week"
      },
      {
        code: "OPT00073",
        option: "At least once a month"
      },
      {
        code: "OPT00074",
        option: "At least once a year"
      }
    ]
  },
  {
    code: "QUE00019",
    question: "Are you an active smoker\\?",
    options: [
      {
        code: "OPT00075",
        option: "Yes"
      },
      {
        code: "OPT00076",
        option: "No"
      }
    ]
  },
  {
    code: "QUE00020",
    question: "Have you or a family member had any smoking-related disease\\?",
    options: [
      {
        code: "OPT00077",
        option: "Yes"
      },
      {
        code: "OPT00078",
        option: "No"
      },
      {
        code: "OPT00079",
        option: "I don''t know"
      }
    ]
  },
  {
    code: "QUE00021",
    question: "Age",
    options: [
      {
        code: "OPT00080",
        option: "49 or younger"
      },
      {
        code: "OPT00081",
        option: "50-59"
      },
      {
        code: "OPT00082",
        option: "60-69"
      },
      {
        code: "OPT00083",
        option: "70 or older"
      }
    ]
  },
  {
    code: "QUE00022",
    question: "Gender",
    options: [
      {
        code: "OPT00084",
        option: "Male"
      },
      {
        code: "OPT00085",
        option: "Female"
      }
    ]
  },
  {
    code: "QUE00023",
    question: "Have you or a family member reported high blood pressure\\?",
    options: [
      {
        code: "OPT00086",
        option: "Yes"
      },
      {
        code: "OPT00087",
        option: "No"
      }
    ]
  },
  {
    code: "QUE00024",
    question: "Waist measurement",
    options: [
      {
        code: "OPT00088",
        option: "Less than 90cm (35.5in)"
      },
      {
        code: "OPT00089",
        option: "90-99.9cm (35.5-39.3in) "
      },
      {
        code: "OPT00090",
        option: "100-109.9 cm (39.4-43.4in)"
      },
      {
        code: "OPT00091",
        option: "110 cm or more (43.3in and above)"
      }
    ]
  },
  {
    code: "QUE00025",
    question: "BMI",
    options: [
      {
        code: "OPT00092",
        option: "Less than 25"
      },
      {
        code: "OPT00093",
        option: "25-29.9"
      },
      {
        code: "OPT00094",
        option: "30-34.9"
      },
      {
        code: "OPT00095",
        option: "35 and above"
      }
    ]
  }
];

const ObesityScores = [
  [5, 0, 2],
  [1, 1, 2, 5],
  [10, 5, 2, 1],
  [10, 8, 5, 2, 1],
  [5, 3, 2, 1],
  [2.5, 1.5, 1, 0, 0],
  [2.5, 1.5, 1],
  [2.5, 0],
  [0, 1, 1.5, 2.5],
  [2.5, 1.5, 1, 0],
  [0, 0, 1, 2, 5],
  [0, 0, 0, 0, 0],
  [0, 1, 1.5, 2, 2.5],
  [0, 2.5],
  [5, 3, 1.5, 1, 1],
  [3, 2, 1.5, 0],
  [3, 2.5, 2, 1.5, 1, 0],
  [3, 2.5, 2, 1.5, 1],
  [3, 0],
  [3, 0, 1.5],
  [1, 1.5, 2, 2.5],
  [2.5, 0], [2.5, 0],
  [0, 2.5, 3, 5],
  [0, 2.5, 5, 10]
];

const form = {
  code: "FORM12345",
  version: "1",
  diseaseScores: {
    "DIS00001": ObesityScores
  },
  questions
};

const recommendations = [
  {
    code: "REC00001",
    recommendation: "For most men, this will mean consuming no more than 1,900 calories a day"
  },
  {
    code: "REC00002",
    recommendation: "for most women, no more than 1,400 calories a day."
  },
  {
    code: "REC00003",
    recommendation: "minimum of 150 minutes moderate-intensity activity a week – for example, 5 sessions of 30-minute exercise a week. brisk walking, cycling, recreational swimming, dancing"
  },
  {
    code: "REC00004",
    recommendation: "Alternatively, you could do 75 minutes of vigorous-intensity activity a week, or a combination of moderate and vigorous activity e.g. running, most competitive sports, circuit training"
  },
  {
    code: "REC00005",
    recommendation: "you may need to do 60-90 minutes of moderate-intensity activity each day e.g brisk walking, cycling, recreational swimming or dancing."
  },
  {
    code: "REC00006",
    recommendation: "Sedentary activities, such as watching television and playing computer games, should be restricted."
  },
  {
    code: "REC00007",
    recommendation: "You should also do strength exercises and balance training 2 days a week. This could be in the form of a gym workout, carrying shopping bags, or doing an activity such as tai chi."
  },
  {
    code: "REC00008",
    recommendation: "To prevent obesity, 45-60 minutes of moderate-intensity activity a day is recommended."
  },
  {
    code: "REC00009",
    recommendation: "breakfast - Try a slice of wholegrain bread with peanut butter and grab an apple, or oats, low-fat milk, mixed berries in the morning."
  },
  {
    code: "REC00010",
    recommendation: "steer clear of the pastries and muffins (even the skinny ones) and have porridge made with low-fat milk or a slice of granary toast instead."
  },
  {
    code: "REC00011",
    recommendation: "Lunch-Make up salad boxes with roast vegetables, cooked chicken, fish or some healthy homemade hummusand add grains such as rice or quinoa."
  },
  {
    code: "REC00012",
    recommendation: "If you’re buying lunch, go for the healthy ranges of sandwiches or soups."
  },
  {
    code: "REC00013",
    recommendation: "Advised snacks. Fruit, a boiled egg, vegetable crudités, edamame beans, plain popcorn or a small handful of unsalted nuts all make good snacks."
  },
  {
    code: "REC00014",
    recommendation: "Often drinks from coffee shops and cafes can be high in calories. Ask for skimmed or semi-skimmed milk and skip the sugar, syrup and cream"
  },
  {
    code: "REC00015",
    recommendation: "Cut back on the caffeine and keep well-hydrated with water and other sugar-free drinks. Aim for 1.2 litres a day."
  },
  {
    code: "REC00016",
    recommendation: "swap your usual steak, meat or burger for a veggie pizza, fruits and vegetables, instead. "
  },
  {
    code: "REC00017",
    recommendation: "change your routine at or after mealtimes. Getting up and doing the dishes straight away or settling down in a room where you don''t smoke may help."
  },
  {
    code: "REC00018",
    recommendation: "drink more water and juice and less alcohol"
  },
  {
    code: "REC00019",
    recommendation: "at least a 5-minute walk or stretch everday"
  },
  {
    code: "REC00020",
    recommendation: "When you''re out, try putting your drink in the hand that usually holds a cigarette, or drink from a straw to keep your mouth busy"
  },
  {
    code: "REC00021",
    recommendation: "Avoid foods such as fatty cuts of meat, lard, cream, cakes and biscuits)"
  },
  {
    code: "REC00022",
    recommendation: "aim for less than 6g (0.2oz or 1 teaspoon) a day"
  },
  {
    code: "REC00023",
    recommendation: "eat at least 5 portions of fruit and vegetables a day"
  },
  {
    code: "REC00024",
    recommendation: "Avoid alcohol as much as possible or at least Try bottled beer instead of pints, or a small glass of wine instead of a large one."
  },
  {
    code: "REC00025",
    recommendation: "try to include healthier sources of fat, such as oily fish, nuts and seeds, and olive oil rather than found in foods such as fatty cuts of meat, lard, cream, cakes and biscuits)"
  },
  {
    code: "REC00026",
    recommendation: "You can still enjoy a drink, but go for smaller sizes. Try bottled beer instead of pints, or a small glass of wine instead of a large one."
  },
  {
    code: "REC00027",
    recommendation: "Cut down the alcohol by swapping strong beers or wines for ones with a lower strength (ABV in %). You''ll find this information on the bottle."
  },
  {
    code: "REC00028",
    recommendation: "Have a glass of water before you have alcohol and alternate alcoholic drinks with water or other non-alcoholic drinks."
  },
  {
    code: "REC00029",
    recommendation: "Avoid alcohol as much as possible"
  },
  {
    code: "REC00030",
    recommendation: "Avoid smoking as much as possible"
  },
  {
    code: "REC00031",
    recommendation: "Eating healthy snacks between meals, or having 3 or 4 small meals each day, rather than 1 or 2 large meals, may help."
  },
  {
    code: "REC00032",
    recommendation: "Avoid polluted areas as much as possible"
  },
  {
    code: "REC00033",
    recommendation: "Avoid smoking areas"
  },
  {
    code: "REC00034",
    recommendation: "Get as much as 7-8 hrs sleep a day"
  },
  {
    code: "REC00035",
    recommendation: "Eat healthy snacks between meals, or having 3 or 4 small meals each day, rather than 1 or 2 large meals"
  }
];

const diseases = [
  {
    code: "DIS00001",
    disease: "Obesity"
  },
  {
    code: "DIS00002",
    disease: "Type 2 diabetes"
  },
  {
    code: "DIS00003",
    disease: "Atherosclerosis & HD"
  },
  {
    code: "DIS00004",
    disease: "Cirrhosis"
  },
  {
    code: "DIS00005",
    disease: "NAFLD & MS"
  },
  {
    code: "DIS00006",
    disease: "COPD"
  }
];

const diseaseRecommendationScore = [
  {
    disease: "DIS00001",
    recommendations: [
      "REC00001",
      "REC00002",
      "REC00003",
      "REC00004",
      "REC00005"
    ],
    score: 70
  },
  {
    disease: "DIS00001",
    recommendations: [
      "REC00007",
      "REC00008",
      "REC00006",
      "REC00034"
    ],
    score: 30
  },
  {
    disease: "DIS00002",
    recommendations: [
      "REC00009",
      "REC00010",
      "REC00011",
      "REC00012",
      "REC00013",
      "REC00014",
      "REC00015",
      "REC00005"
    ],
    score: 70
  },
  {
    disease: "DIS00002",
    recommendations: [
      "REC00034",
      "REC00008",
    ],
    score: 30
  },
  {
    disease: "DIS00003",
    recommendations: [
      "REC00016",
      "REC00017",
      "REC00018",
      "REC00019",
      "REC00020",
      "REC00021",
      "REC00024",
      "REC00006",
    ],
    score: 70
  },
  {
    disease: "DIS00003",
    recommendations: [
      "REC00034",
      "REC00025",
      "REC00022",
      "REC00023",
      "REC00026",
      "REC00027",
      "REC00028",
    ],
    score: 30
  },
  {
    disease: "DIS00004",
    recommendations: [
      "REC00006",
      "REC00029",
      "REC00030",
      "REC00035",
      "REC00022",
    ],
    score: 70
  },
  {
    disease: "DIS00004",
    recommendations: [
      "REC00034",
      "REC00024",
      "REC00022",
      "REC00007",
      "REC00031",
    ],
    score: 30
  },
  {
    disease: "DIS00005",
    recommendations: [
      "REC00030",
      "REC00004",
      "REC00005",
      "REC00016",
      "REC00024",
      "REC00021",
      "REC00022",
    ],
    score: 70
  },
  {
    disease: "DIS00005",
    recommendations: [
      "REC00034",
      "REC00025",
      "REC00006",
      "REC00007",
    ],
    score: 30
  },
  {
    disease: "DIS00006",
    recommendations: [
      "REC00030",
      "REC00032",
      "REC00033",
      "REC00016",
      "REC00017",
      "REC00018",
      "REC00019",
      "REC00020",
      "REC00006",
    ],
    score: 70
  },
  {
    disease: "DIS00006",
    recommendations: [],
    score: 30
  }
];

module.exports = {recommendations, diseases, diseaseRecommendationScore, form};

