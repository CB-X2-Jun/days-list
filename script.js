// ===== 国家/地区代码 → 中文名 映射 =====
const countryNameMap = {
    // 国际组织
    'UN': '国际',

    // 亚洲
    'CN': '中国', 'HK': '香港', 'MO': '澳门', 'TW': '台湾',
    'JP': '日本', 'KR': '韩国', 'KP': '朝鲜', 'MN': '蒙古',
    'VN': '越南', 'LA': '老挝', 'KH': '柬埔寨', 'TH': '泰国',
    'MY': '马来西亚', 'SG': '新加坡', 'ID': '印尼', 'PH': '菲律宾',
    'BN': '文莱', 'MM': '缅甸', 'IN': '印度', 'NP': '尼泊尔',
    'BT': '不丹', 'BD': '孟加拉国', 'LK': '斯里兰卡', 'MV': '马尔代夫',
    'PK': '巴基斯坦', 'AF': '阿富汗', 'IR': '伊朗', 'IQ': '伊拉克',
    'SA': '沙特阿拉伯', 'YE': '也门', 'OM': '阿曼', 'AE': '阿联酋',
    'QA': '卡塔尔', 'BH': '巴林', 'KW': '科威特', 'JO': '约旦',
    'LB': '黎巴嫩', 'SY': '叙利亚', 'IL': '以色列', 'PS': '巴勒斯坦',
    'CY': '塞浦路斯', 'TR': '土耳其', 'GE': '格鲁吉亚', 'AM': '亚美尼亚',
    'AZ': '阿塞拜疆', 'KZ': '哈萨克斯坦', 'UZ': '乌兹别克斯坦',
    'TJ': '塔吉克斯坦', 'KG': '吉尔吉斯斯坦', 'TM': '土库曼斯坦',

    // 欧洲
    'RU': '俄罗斯', 'UA': '乌克兰', 'BY': '白俄罗斯', 'MD': '摩尔多瓦',
    'PL': '波兰', 'CZ': '捷克', 'SK': '斯洛伐克', 'HU': '匈牙利',
    'RO': '罗马尼亚', 'BG': '保加利亚', 'SI': '斯洛文尼亚', 'HR': '克罗地亚',
    'RS': '塞尔维亚', 'ME': '黑山', 'BA': '波黑', 'MK': '北马其顿',
    'AL': '阿尔巴尼亚', 'GR': '希腊', 'LT': '立陶宛', 'LV': '拉脱维亚',
    'EE': '爱沙尼亚', 'FI': '芬兰', 'SE': '瑞典', 'NO': '挪威',
    'DK': '丹麦', 'IS': '冰岛', 'IE': '爱尔兰', 'GB': '英国',
    'DE': '德国', 'NL': '荷兰', 'BE': '比利时', 'LU': '卢森堡',
    'FR': '法国', 'MC': '摩纳哥', 'CH': '瑞士', 'AT': '奥地利',
    'LI': '列支敦士登', 'ES': '西班牙', 'PT': '葡萄牙', 'IT': '意大利',
    'MT': '马耳他', 'SM': '圣马力诺', 'VA': '梵蒂冈', 'XK': '科索沃',

    // 非洲
    'EG': '埃及', 'LY': '利比亚', 'TN': '突尼斯', 'DZ': '阿尔及利亚',
    'MA': '摩洛哥', 'SD': '苏丹', 'SS': '南苏丹', 'ER': '厄立特里亚',
    'DJ': '吉布提', 'ET': '埃塞俄比亚', 'SO': '索里亚', 'KE': '肯尼亚',
    'UG': '乌干达', 'TZ': '坦桑尼亚', 'RW': '卢旺达', 'BU': '布隆迪',
    'CD': '刚果(金)', 'CG': '刚果(布)', 'GA': '加蓬', 'EQ': '赤道几内亚',
    'CM': '喀麦隆', 'CF': '中非', 'TD': '乍得', 'GQ': '赤道几内亚',
    'ST': '圣多美和普林西比', 'NG': '尼日利亚', 'BJ': '贝宁', 'TG': '多哥',
    'GH': '加纳', 'CI': '科特迪瓦', 'LR': '利比里亚', 'SL': '塞拉利昂',
    'GN': '几内亚', 'GW': '几内亚比绍', 'SN': '塞内加尔', 'GM': '冈比亚',
    'MR': '毛里塔尼亚', 'ML': '马里', 'BF': '布基纳法索', 'NE': '尼日尔',
    'ZA': '南非', 'NA': '纳米比亚', 'BW': '博茨瓦纳', 'ZW': '津巴布韦',
    'ZM': '赞比亚', 'MW': '马拉维', 'MZ': '莫桑比克', 'MG': '马达加斯加',
    'MU': '毛里求斯', 'SC': '塞舌尔', 'KM': '科摩罗',

    // 北美洲
    'CA': '加拿大', 'US': '美国', 'MX': '墨西哥', 'GT': '危地马拉',
    'BZ': '伯利兹', 'HN': '洪都拉斯', 'SV': '萨尔瓦多', 'NI': '尼加拉瓜',
    'CR': '哥斯达黎加', 'PA': '巴拿ma', 'JM': '牙买加', 'HT': '海地',
    'DO': '多米尼加', 'CU': '古巴', 'BS': '巴哈马', 'TT': '特立尼达和多巴哥',
    'BB': '巴巴多斯', 'AG': '安提瓜和巴布达', 'DM': '多米尼克',
    'KN': '圣基茨和尼维斯', 'LC': '圣卢西亚', 'VC': '圣文森特和格林纳丁斯',

    // 南美洲
    'CO': '哥伦比亚', 'VE': '委内瑞拉', 'GY': '圭亚那', 'SR': '苏里南',
    'EC': '厄瓜多尔', 'PE': '秘鲁', 'BR': '巴西', 'BO': '玻利维亚',
    'PY': '巴拉圭', 'CL': '智利', 'AR': '阿根廷', 'UY': '乌拉圭',

    // 大洋洲
    'AU': '澳大利亚', 'NZ': '新西兰', 'PG': '巴布亚新几内亚',
    'FJ': '斐济', 'SB': '所罗门群岛', 'VU': '瓦努阿图', 'WS': '萨摩亚',
    'TO': '汤加', 'FM': '密克罗尼西亚',

    // 未获广泛承认的国家/地区（中文直接使用）
    '德左': '德左',
    '南奥塞梯': '南奥塞梯',
    '阿布哈兹': '阿布哈兹'
};

// ===== 有flag-icons支持的国家代码集合 =====
const flagIconsSupported = new Set([
    'AD','AE','AF','AG','AI','AL','AM','AO','AQ','AR','AS','AT','AU','AW','AX','AZ',
    'BA','BB','BD','BE','BF','BG','BH','BI','BJ','BL','BM','BN','BO','BQ','BR','BS',
    'BT','BV','BW','BY','BZ','CA','CC','CD','CF','CG','CH','CI','CK','CL','CM','CN',
    'CO','CR','CU','CV','CW','CX','CY','CZ','DE','DJ','DK','DM','DO','DZ','EC','EE',
    'EG','EH','ER','ES','ET','FI','FJ','FK','FM','FO','FR','GA','GB','GD','GE','GF',
    'GG','GH','GI','GL','GM','GN','GP','GQ','GR','GS','GT','GU','GW','GY','HK','HM',
    'HN','HR','HT','HU','ID','IE','IL','IM','IN','IO','IQ','IR','IS','IT','JE','JM',
    'JO','JP','KE','KG','KH','KI','KM','KN','KP','KR','KW','KY','KZ','LA','LB','LC',
    'LI','LK','LR','LS','LT','LU','LV','LY','MA','MC','MD','ME','MF','MG','MH','MK',
    'ML','MM','MN','MO','MP','MQ','MR','MS','MT','MU','MV','MW','MX','MY','MZ','NA',
    'NC','NE','NF','NG','NI','NL','NO','NP','NR','NU','NZ','OM','PA','PE','PF','PG',
    'PH','PK','PL','PM','PN','PR','PS','PT','PW','PY','QA','RE','RO','RS','RU','RW',
    'SA','SB','SC','SD','SE','SG','SH','SI','SJ','SK','SL','SM','SN','SO','SR','SS','ST',
    'SV','SX','SY','SZ','TC','TD','TF','TG','TH','TJ','TK','TL','TM','TN','TO','TR',
    'TT','TV','TW','TZ','UA','UG','UM','US','UY','UZ','VA','VC','VE','VG','VI','VN',
    'VU','WF','WS','XK','YE','YT','ZA','ZM','ZW',
    // 联合国旗帜（特殊处理）
    'UN'
]);

// ===== 全局状态 =====
let allHolidays = [];
let activeFilter = null; // null 表示显示全部

// ===== DOM 元素 =====
const countryFilterEl = document.getElementById('countryFilter');
const holidayTableBody = document.getElementById('holidayTableBody');
const totalHolidaysEl = document.getElementById('totalHolidays');
const visibleHolidaysEl = document.getElementById('visibleHolidays');
const flagTooltip = document.getElementById('flagTooltip');
const themeToggle = document.getElementById('themeToggle');

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    await loadAndParseData();
    renderFilterBubbles();
    renderTable();
    updateStats();
});

// ===== 主题切换 =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
    });
}

// ===== 加载并解析 days.txt =====
async function loadAndParseData() {
    try {
        const response = await fetch('days.txt');
        const text = await response.text();
        allHolidays = parseDaysText(text);
    } catch (error) {
        console.error('加载 days.txt 失败:', error);
        // 使用示例数据作为后备
        allHolidays = [
            { date: '01-01', dateStart: '01-01', name: '元旦（新年）', countries: ['UN'] },
            { date: '06-01', dateStart: '06-01', name: '儿童节', countries: ['UN', 'CN', 'PL'] },
            { date: '12-25', dateStart: '12-25', name: '圣诞节', countries: ['UN'] },
        ];
    }
}

function parseDaysText(text) {
    const lines = text.trim().split('\n');
    const holidays = [];

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;

        const parts = trimmed.split('|');
        if (parts.length < 3) continue;

        let rawDate = parts[0].trim();
        const name = parts[1].trim();
        const countryStr = parts[2].trim();

        // 解析日期范围或单日期
        let date, dateStart;
        if (rawDate.includes(' to ')) {
            date = rawDate; // 保持原始格式显示
            dateStart = rawDate.split(' to ')[0].trim(); // 用于排序
        } else if (rawDate.includes('的')) {
            // 处理 "11月的第四个星期四" 这类格式
            date = rawDate;
            // 提取月份用于排序
            const monthMatch = rawDate.match(/(\d{1,2})月/);
            dateStart = monthMatch ? `${monthMatch[1].padStart(2, '0')}-01` : '12-31';
        } else {
            date = rawDate;
            dateStart = rawDate;
        }

        // 解析国家列表（空格分隔）
        const countries = countryStr.split(/\s+/).filter(c => c.length > 0);

        holidays.push({ date, dateStart, name, countries });
    }

    // 按日期排序
    holidays.sort((a, b) => compareDates(a.dateStart, b.dateStart));

    return holidays;
}

// ===== 日期比较（用于排序）=====
function compareDates(a, b) {
    // 处理 MM-dd 格式
    const parseDate = (d => {
        const match = d.match(/(\d{1,2})-(\d{1,2})/);
        if (match) {
            return { month: parseInt(match[1]), day: parseInt(match[2]) };
        }
        return { month: 13, day: 32 }; // 无法解析的排最后
    });

    const da = parseDate(a);
    const db = parseDate(b);

    if (da.month !== db.month) return da.month - db.month;
    return da.day - db.day;
}

// ===== 收集所有出现过的国家/地区 =====
function collectAllCountries() {
    const countrySet = new Set();

    for (const holiday of allHolidays) {
        for (const country of holiday.countries) {
            countrySet.add(country);
        }
    }

    // 排序：ISO代码在前，中文在后
    return Array.from(countrySet).sort((a, b) => {
        const aIsCode = /^[A-Z]{2}$/.test(a);
        const bIsCode = /^[A-Z]{2}$/.test(b);
        if (aIsCode && !bIsCode) return -1;
        if (!aIsCode && bIsCode) return 1;
        return a.localeCompare(b, 'zh-CN');
    });
}

// ===== 渲染筛选气泡 =====
function renderFilterBubbles() {
    const countries = collectAllCountries();

    // 添加"全部"按钮
    const allBtn = createBubbleBtn('全部', null, true);
    countryFilterEl.appendChild(allBtn);

    // 为每个国家创建气泡
    for (const country of countries) {
        const displayName = countryNameMap[country] || country;
        const btn = createBubbleBtn(displayName, country, false);
        countryFilterEl.appendChild(btn);
    }
}

function createBubbleBtn(label, value, isActive) {
    const btn = document.createElement('button');
    btn.className = `bubble-btn${isActive ? ' active' : ''}`;
    btn.textContent = label;
    btn.dataset.value = value;

    btn.addEventListener('click', () => {
        // 更新激活状态
        document.querySelectorAll('.bubble-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        activeFilter = value;
        renderTable();
        updateStats();
    });

    return btn;
}

// ===== 渲染表格 =====
function renderTable() {
    holidayTableBody.innerHTML = '';

    const filtered = getFilteredHolidays();

    for (const holiday of filtered) {
        const tr = document.createElement('tr');

        // 日期列
        const tdDate = document.createElement('td');
        tdDate.className = 'date-cell';
        tdDate.textContent = holiday.date;
        tr.appendChild(tdDate);

        // 名称列
        const tdName = document.createElement('td');
        tdName.className = 'name-cell';
        tdName.textContent = holiday.name;
        tr.appendChild(tdName);

        // 归属列（国旗）
        const tdCountry = document.createElement('td');
        tdCountry.className = 'country-cell';
        tdCountry.appendChild(renderFlags(holiday.countries));
        tr.appendChild(tdCountry);

        holidayTableBody.appendChild(tr);
    }
}

// ===== 渲染国旗 =====
function renderFlags(countries) {
    const container = document.createElement('span');

    for (let i = 0; i < countries.length; i++) {
        const code = countries[i];
        const displayName = countryNameMap[code] || code;

        if (flagIconsSupported.has(code)) {
            // 有 flag-icons 支持
            const wrapper = document.createElement('span');
            wrapper.className = 'flag-icon-wrapper';

            if (code === 'UN') {
                // 联合国旗帜 - 使用特殊CSS类
                wrapper.innerHTML = `<span class="fi fi-un"></span>`;
            } else {
                wrapper.innerHTML = `<span class="fi fi-${code.toLowerCase()}"></span>`;
            }

            // 绑定 tooltip 事件
            bindTooltip(wrapper, displayName);
            container.appendChild(wrapper);
        } else {
            // 无 flag-icons 支持，显示中文标签
            const textSpan = document.createElement('span');
            textSpan.className = 'country-text';
            textSpan.textContent = displayName;
            container.appendChild(textSpan);
        }

        // 国旗之间添加空格
        if (i < countries.length - 1) {
            container.appendChild(document.createTextNode(' '));
        }
    }

    return container;
}

// ===== Tooltip 绑定与显示 =====
function bindTooltip(element, text) {
    const showTooltip = (e) => {
        flagTooltip.textContent = text;
        flagTooltip.classList.add('visible');

        const rect = element.getBoundingClientRect();
        const tooltipRect = flagTooltip.getBoundingClientRect();

        // 计算位置：在元素上方居中
        let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
        let top = rect.top - tooltipRect.height - 10;

        // 边界检测
        if (left < 10) left = 10;
        if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
        }
        if (top < 10) {
            // 如果上方空间不够，显示在下方
            top = rect.bottom + 10;
            flagTooltip.style.setProperty('--arrow-flip', 'rotate(180deg)');
        } else {
            flagTooltip.style.setProperty('--arrow-flip', 'none');
        }

        flagTooltip.style.left = `${left}px`;
        flagTooltip.style.top = `${top}px`;
    };

    const hideTooltip = () => {
        flagTooltip.classList.remove('visible');
    };

    element.addEventListener('mouseenter', showTooltip);
    element.addEventListener('mouseleave', hideTooltip);
    element.addEventListener('click', (e) => {
        e.preventDefault();
        showTooltip(e);
        // 点击后 1.5 秒自动隐藏
        setTimeout(hideTooltip, 1500);
    });
}

// ===== 获取筛选后的节日列表 =====
function getFilteredHolidays() {
    if (activeFilter === null) {
        return allHolidays;
    }

    return allHolidays.filter(holiday =>
        holiday.countries.includes(activeFilter)
    );
}

// ===== 更新统计信息 =====
function updateStats() {
    totalHolidaysEl.textContent = allHolidays.length;
    visibleHolidaysEl.textContent = getFilteredHolidays().length;
}
