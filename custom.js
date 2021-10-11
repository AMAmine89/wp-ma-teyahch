var badWords = [
    "nik",
    "hatchoun",
    "hatchon",
    "7atchoun",
    "7atchon",
    "tiz",
    "6iz",
    "n3atiz",
    "nik yemak",
    "nik ymk",
    "nik mok",
    "nkmk",
    "n3al",
    "yen3l",
    "yan3l",
    "yen3el",
    "yan3al",
    "yan3el",
    "nik yemakoum",
    "nik yamakoum",
    "nik yemakom",
    "nik yamakom",
    "nik yemahoum",
    "nik yamahom",
    "nik yemahom",
    "nik yamahom",
    "nik yemaha",
    "nik yemah",
    "niyak",
    "etnak",
    "tnak",
    "tnaket",
    "tetnak",
    "tmenyik",
    "tmeniik",
    "tmnyk",
    "etmenyek",
    "tmenyek",
    "noukch",
    "nokch",
    "no9ch",
    "noukch",
    "nou9ch",
    "nkoucha",
    "n9oucha",
    "nkocha",
    "n9ocha",
    "nouqch",
    "noqch",
    "nqoucha",
    "nqoucha",
    "zeb",
    "zebi",
    "ezeb",
    "azab",
    "ezab",
    "zbouba",
    "zboba",
    "souwa",
    "sowa",
    "soa",
    "sewa",
    "souwtek",
    "sowtek",
    "sewtek",
    "terma",
    "tarma",
    "tremtek",
    "tramtek",
    "tremtak",
    "tramtak",
    "kahba",
    "9ahba",
    "ka7ba",
    "9a7ba",
    "qahba",
    "qa7ba",
    "khab",
    "9hab",
    "k7ab",
    "97ab",
    "qhab",
    "q7ab",
    "kouhbi",
    "kohbi",
    "9ouhbi",
    "9ohbi",
    "kou7bi",
    "Ko7bi",
    "9ou7bi",
    "9o7bi",
    "qouhbi",
    "qohbi",
    "qou7bi",
    "qo7bi",
    "نيك",
    "نيك مك",
    "نيك يماك",
    "نيك يمك",
    "حتشون",
    "طيز",
    "نعطيز",
    "ينعل",
    "نعل",
    "نيك يماكم",
    "نيك ماتكم",
    "نيك يماهم",
    "نيك ماتهم",
    "تناك",
    "اتناك",
    "أتناك",
    "تمنيك",
    "أتمنيك",
    "اتمنيك",
    "تمنييك",
    "نقش",
    "نقوشة",
    "زب",
    "زبي",
    "زبوب",
    "زبوبة",
    "الزب",
    "سوة",
    "السوة",
    "سوتك",
    "سوتي",
    "سواوي",
    "ترمة",
    "ترمتك",
    "قحبة",
    "قحاب",
    "قحبي"
]

badWords.forEach(el => {
    let elUpper = el.toUpperCase(),
        elFirsCapital = el.charAt(0).toUpperCase() + el.slice(1);
    document.body.innerHTML = document.body.innerHTML.replaceAll(el, '****');
    document.body.innerHTML = document.body.innerHTML.replaceAll(elUpper, '****');
    document.body.innerHTML = document.body.innerHTML.replaceAll(elFirsCapital, '****');
});