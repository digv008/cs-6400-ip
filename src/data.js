const mortality = [
    [
        "basic", [
            { "stateName": "age", "title": "Individual Age ≥ 60", "ratio": "OR 1.10", "ratioTitle": "", "points": 1 },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "", "ratioTitle": "", "points": 1 }, 
            { "stateName": "Laboured Breathig", "title": "Laboured Breathig", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "temp", "title": "Elevated Temperature (>102 F)", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "OR 3.05*", "ratioTitle": "", "points": 1 },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "OR 2.85*", "ratioTitle": "", "points": 1 },
            { "stateName": "Coronary Artery Diseases", "title": "Coronary Artery Diseases", "ratio": "OR 21.40*", "ratioTitle": "", "points": 1 },
        ]
    ],
    [
        "advanced", [
            { "stateName": "Sequential Organ Failure Assessment Score", "title": " Sequential Organ Failure Assessment Score", "ratio": "OR 5.65", "ratioTitle": "", "points": 1 },
            { "stateName": "lympho", "title": "Lymphopenia", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "leuko", "title": "White blood cells above normal range", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "Decreased bloof Iron levels", "title": " Decreased bloof Iron levels", "ratio": "HR 3.53", "ratioTitle": "", "points": 1 },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "Prothrombin time test", "title": " Prothrombin time test", "ratio": "HR 1.56", "ratioTitle": "", "points": 1 },
            { "stateName": "procal", "title": "    Increated blood Procalcitonin Levels", "ratio": "OR 13.75*", "ratioTitle": "", "points": 1 },
            { "stateName": "cr", "title": "   Increated blood Creatinine Levels", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "Decreased blood levels of platelets and albumin (all p < 0.05)", "title": " Decreased blood levels of platelets and albumin (all p < 0.05)", "ratio": "", "ratioTitle": "", "points": -1, "protective": true },
            { "stateName": "bilirubin", "title": " Bilirubin", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "urea", "title": " Urea", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "il6", "title": " Pro-inflammatory Cytokine ", "ratio": "OR 1.12", "ratioTitle": "", "points": 1 }
        ]
    ]
]

const ards = [
    [
        "basic", [
            { "stateName": "age", "title": "Patient Age ≥ 60", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "Laboured Breathing", "title": "Laboured Breathing", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "temp", "title": "Elevated Temperature (>102 F)", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "HR 1.82", "ratioTitle": "", "points": 1 },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "HR 2.34", "ratioTitle": " ", "points": 1 },
            { "stateName": "Coronary Artery Diseases", "title": "Coronary Artery Diseases", "ratio": "", "ratioTitle": "", "points": 1 },
        ]
    ],
    [
        "advanced", [
            { "stateName": "Sequential Organ Failure Assessment Score", "title": " Sequential Organ Failure Assessment Score", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "lympho", "title": "Lymphopenia", "ratio": "HR 0.37", "ratioTitle": "", "points": 1 },
            { "stateName": "leuko", "title": "White blood cells above normal range", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "Decreased bloof Iron levels", "title": " Decreased bloof Iron levels", "ratio": "HR 3.53", "ratioTitle": "", "points": 1 },
            { "stateName": "Increased Lactate Dehydrogenase  levels", "title": " Increased Lactate Dehydrogenase  levels", "ratio": "HR 1.61", "ratioTitle": "", "points": 1 },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "Prothrombin time test", "title": " Prothrombin time test", "ratio": "HR 1.56", "ratioTitle": "", "points": 1 },
            { "stateName": "procal", "title": "    Increated blood Procalcitonin Levels", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "cr", "title": "   Increated blood Creatinine Levels", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "Decreased blood levels of platelets and albumin (all p < 0.05)", "title": " Decreased blood levels of platelets and albumin (all p < 0.05)", "ratio": "HR 0.49", "ratioTitle": "", "points": -1, "protective": true },
            { "stateName": "bilirubin", "title": " Bilirubin", "ratio": "HR 1.05", "ratioTitle": "", "points": 1 },
            { "stateName": "urea", "title": " Urea", "ratio": "HR 1.13", "ratioTitle": "", "points": 1 },
        ]
    ]
]

const ardsDeath = [
    [
        "basic", [
            { "stateName": "age", "title": "Patient Age ≥ 60", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "covidExposure", "title": "COVID-19 Exposure", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "Laboured Breathing", "title": "Laboured Breathing", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "temp", "title": "Elevated Temperature (>102 F)", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "hypertension", "title": "Hypertension", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "diabetes", "title": "Diabetes", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "Coronary Artery Diseases", "title": "Coronary Artery Diseases", "ratio": "", "ratioTitle": "", "points": 1 },
        ]
    ],
    [
        "advanced", [
            { "stateName": "Sequential Organ Failure Assessment Score", "title": " Sequential Organ Failure Assessment Score", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "lympho", "title": "Lymphopenia", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "leuko", "title": "White blood cells above normal range", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "Decreased bloof Iron levels", "title": " Decreased bloof Iron levels", "ratio": "HR 3.53", "ratioTitle": "", "points": 1 },
            { "stateName": "Increased Lactate Dehydrogenase  levels", "title": " Increased Lactate Dehydrogenase  levels", "ratio": "HR 1.30", "ratioTitle": "", "points": 1 },
            { "stateName": "plateles", "title": "Low Platelets", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "Prothrombin time test", "title": " Prothrombin time test", "ratio": "HR 1.08", "ratioTitle": "", "points": 1 },
            { "stateName": "procal", "title": "    Increated blood Procalcitonin Levels", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "cr", "title": "   Increated blood Creatinine Levels", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "Decreased blood levels of platelets and albumin (all p < 0.05)", "title": " Decreased blood levels of platelets and albumin (all p < 0.05)", "ratio": "HR 0.19", "ratioTitle": "", "points": -1, "protective": true },
            { "stateName": "bilirubin", "title": " Bilirubin", "ratio": "HR 1.07", "ratioTitle": "", "points": 1 },
            { "stateName": "urea", "title": " Urea", "ratio": "", "ratioTitle": "", "points": 1 },
            { "stateName": "il6", "title": " Pro-inflammatory Cytokine ", "ratio": "", "ratioTitle": "", "points": 1 }
        ]
    ]]

const icu = [
    ["basic", [
        { "stateName": "age", "title": "Patient Age ≥ 60", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "covidExposure", "title": "Exposed to COVID-19", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "Laboured Breathing", "title": "Laboured Breathing", "ratio": "", "ratioTitle": "", "points": 1 }, 
        { "stateName": "temp", "title": "Elevated Temperature (>102 F)", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "hypertension", "title": "Hypertension", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "diabetes", "title": "Diabetes", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "Coronary Artery Diseases", "title": "Coronary Artery Diseases", "ratio": "", "ratioTitle": "", "points": 1 },
    ]],
    ["advanced", [
        { "stateName": "Sequential Organ Failure Assessment Score", "title": " Sequential Organ Failure Assessment Score", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "lympho", "title": "Lymphopenia", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "leuko", "title": "White blood cells above normal range", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "Decreased bloof Iron levels", "title": " Decreased bloof Iron levels", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "Increased Lactate Dehydrogenase  levels", "title": " Increased Lactate Dehydrogenase  levels", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "plateles", "title": "Low Platelets", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "Prothrombin time test", "title": " Prothrombin time test", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "cr", "title": "    Increated blood Creatinine Levels", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "Decreased blood levels of platelets and albumin (all p < 0.05)", "title": " Decreased blood levels of platelets and albumin (all p < 0.05)", "ratio": "", "ratioTitle": "", "points": 0, "protective": true },
        { "stateName": "bilirubin", "title": " Bilirubin", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "urea", "title": " Urea", "ratio": "", "ratioTitle": "", "points": 1 },
        { "stateName": "il6", "title": " Pro-inflammatory Cytokine ", "ratio": "", "ratioTitle": "", "points": 0 }
    ]]
]
export { ards, ardsDeath, mortality, icu }