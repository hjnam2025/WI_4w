const eclipseSelect = document.getElementById('eclipse-select');
const typeSelect = document.getElementById('type-select');
const dateDisplay = document.getElementById('date-display');
const eclipseDescriptionDisplay = document.getElementById('eclipse-description-display');
const typeDescriptionDisplay = document.getElementById('type-description-display');
const eclipseGif = document.getElementById('eclipse-gif');


const typesData = {
    'Solar': {
        description: '달이 태양과 지구 사이에 놓여 지구에서 볼 때 달이 태양을 전부 또는 일부를 가리는 현상',
        types: [
            {
                name: '가장 가까운 시일',
                date: '2026-02-17',
                description: '금환일식,<br> 달이 태양의 한가운데만 가려 달 주위가 금고리 모양으로 나타나는 일식',
                gif: './other/annular-so.gif'
            },
            {
                name: '금환일식',
                date: '2026-02-17<br>2027-02-06<br>2028-01-26<br>2030-06-01',
                description: '달이 태양의 한가운데만 가려 달 주위가 금고리 모양으로 나타나는 일식',
                gif: './other/annular-so.gif'
            },
            {
                name: '부분일식',
                date: '2025-09-21<br>2029-01-14<br>2029-06-12<br>2029-07-11<br>2029-12-05',
                description: '태양의 일부만 가려지는 일식',
                gif: './other/part-so.gif'
            },
            {
                name: '개기일식',
                date: '2026-08-12<br>2027-08-02<br>2028-07-22<br>2030-11-25',
                description: '태양 전체가 가려지는 일식',
                gif: './other/total-so.gif'
            },
            {
                name: '혼성일식',
                date: '마지막 관측 : 2023-04-20',
                description: '2025년~ 2030년 이내에는 없습니다.',
                gif: './other/hybrid.jpg'
            }
        ]
    },
    'Lunar': {
        description: '태양, 지구 그리고 달이 태양-지구-달의 위치로 배열되어 지구의 그림자에 달이 가려져 어둡게 보이는 현상',
        types: [
            {
                name: '가장 가까운 시일',
                date: '2026-03-03',
                description: '개기월식, <br>달 전체가 지구 그림자에 가려지는 월식 ',
                gif: './other/total-lu.gif'
            },
            {
                name: '개기월식',
                date: '2026-03-03<br>2028-12-31~32<br>2029-06-26<br>2029-12-21',
                description: '달 전체가 지구 그림자에 가려지는 월식',
                gif: './other/total-lu.gif'
            },
            {
                name: '부분월식',
                date: '2026-08-28<br>2028-01-12<br>2028-07-07<br>2030-12-10',
                description: '달의 일부만 가려지는 월식',
                gif: './other/part-lu.gif'
            },
            {
                name: '반영월식',
                date: '2027-02-21<br>2027-07-19<br>2027-08-17<br>2030-12-10',
                description: '달이 지구의 반영(반그림자)에 가려져 흐릿해지는 월식',
                gif: './other/penum-lu.gif'
            }
        ]
    }
};

eclipseSelect.onchange = function() {
    const selectedEclipseValue = this.value;
    const eclipseData = typesData[selectedEclipseValue];

    typeSelect.innerHTML = '<option value="">종류</option>';
    dateDisplay.innerHTML = '';
    typeDescriptionDisplay.innerHTML = '';
    eclipseGif.src = '';

    if (eclipseData) {
        eclipseDescriptionDisplay.innerHTML = `${eclipseData.description}`;
        const typeList = eclipseData.types || [];
        typeList.forEach(type => {
            const newOption = document.createElement('option');
            newOption.value = type.name;
            newOption.textContent = type.name;
            typeSelect.appendChild(newOption);
        });
    } else {
        eclipseDescriptionDisplay.innerHTML = '';
    }
};

typeSelect.onchange = function() {
    const selectedTypeName = this.value;
    const selectedEclipse = eclipseSelect.value;
    const currentTypesList = typesData[selectedEclipse].types;

    let selectedTypeInfo = null;
    if (currentTypesList) {
        selectedTypeInfo = currentTypesList.find(item => item.name === selectedTypeName);
    }

    if (selectedTypeInfo && selectedTypeName !== '') {
        dateDisplay.innerHTML = `${selectedTypeInfo.date}`;
        typeDescriptionDisplay.innerHTML = `${selectedTypeInfo.description}`;
        eclipseGif.src = selectedTypeInfo.gif;

        document.body.style.backgroundImage = `url(${selectedTypeInfo.gif})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';

        const relativeGifPath = selectedTypeInfo.gif.replace('./other/', '../other/');
        localStorage.setItem('eclipseBackgroundGif', relativeGifPath);
        localStorage.setItem('eclipseName', selectedTypeInfo.name);
        localStorage.setItem('eclipseDate', selectedTypeInfo.date);



    } else {
        dateDisplay.innerHTML = '';
        typeDescriptionDisplay.innerHTML = '';
        eclipseGif.src = '';

         document.body.style.backgroundImage = 'none';
         localStorage.removeItem('eclipseBackgroundGif');
         localStorage.removeItem('eclipseName');
         localStorage.removeItem('eclipseDate');
    }
};