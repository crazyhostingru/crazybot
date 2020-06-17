const { VK, Keyboard } = require('vk-io');;
const vk = new VK();
const commands = [];
const request = require('prequest');
const Markup = require('markup');

const cars = [
	{
		name: 'Самокат',
		cost: 500,
		id: 1
	},
	{
		name: 'Велосипед',
		cost: 2500,
		id: 2
	},
	{
		name: 'Гироскутер',
		cost: 5000,
		id: 3
	},
	{
		name: 'Сегвей',
		cost: 7500,
		id: 4
	},
	{
		name: 'Мопед',
		cost: 25000,
		id: 5
	},
	{
		name: 'Мотоцикл',
		cost: 50000,
		id: 6
	},
	{
		name: 'ВАЗ 2109',
		cost: 75000,
		id: 7
	},
	{
		name: 'Квадроцикл',
		cost: 80000,
		id: 8
	},
	{
		name: 'Багги',
		cost: 135000,
		id: 9
	},
	{
		name: 'Вездеход',
		cost: 200000,
		id: 10
	},
	{
		name: 'Лада Xray',
		cost: 350000,
		id: 11
	},
	{
		name: 'Audi Q7',
		cost: 750000,
		id: 12
	},
	{
		name: 'BMW X6',
		cost: 1000000,
		id: 13
	},
	{
		name: 'Toyota FT-HS',
		cost: 1750000,
		id: 14
	},
	{
		name: 'BMW Z4 M',
		cost: 2500000,
		id: 15
	},
	{
		name: 'Subaru WRX STI',
		cost: 2750000,
		id: 16
	},
	{
		name: 'Lamborghini Veneno',
		cost: 3000000,
		id: 17
	},
	{
		name: 'Tesla Roadster',
		cost: 4500000,
		id: 18
	},
	{
		name: 'Yamaha YZF R6',
		cost: 5000000,
		id: 19
	},
	{
		name: 'Bugatti Chiron',
		cost: 6500000,
		id: 20
	},
	{
		name: 'Thrust SSC',
		cost: 35000000,
		id: 21
	},
	{
		name: 'Ferrari LaFerrari',
		cost: 39000000,
		id: 22
	},
	{
		name: 'Koenigsegg Regear',
		cost: 50000000,
		id: 23
	},
	{
		name: 'Tesla Semi',
		cost: 75000000,
		id: 24
	},
	{
		name: 'Venom GT',
		cost: 125000000,
		id: 25
	},
	{
		name: 'Rolls-Royce',
		cost: 200000000,
		id: 26
	}
];

const yachts = [
	{
		name: 'Ванна',
		cost: 10000,
		id: 1
	},
	{
		name: 'Nauticat 331',
		cost: 10000000,
		id: 2
	},
	{
		name: 'Nordhavn 56 MS',
		cost: 15000000,
		id: 3
	},
	{
		name: 'Princess 60',
		cost: 25000000,
		id: 4
	},
	{
		name: 'Azimut 70',
		cost: 35000000,
		id: 5
	},
	{
		name: 'Dominator 40M',
		cost: 50000000,
		id: 6
	},
	{
		name: 'Moonen 124',
		cost: 60000000,
		id: 7
	},
	{
		name: 'Wider 150',
		cost: 65000000,
		id: 8
	},
	{
		name: 'Palmer Johnson 42M SuperSport',
		cost: 80000000,
		id: 9
	},
	{
		name: 'Wider 165',
		cost: 85000000,
		id: 10
	},
	{
		name: 'Eclipse',
		cost: 150000000,
		id: 11
	},
	{
		name: 'Dubai',
		cost: 300000000,
		id: 12
	},
	{
		name: 'Streets of Monaco',
		cost: 750000000,
		id: 13
	}
];

const airplanes = [
	{
		name: 'Параплан',
		cost: 100000,
		id: 1
	},
	{
		name: 'АН-2',
		cost: 350000,
		id: 2
	},
	{
		name: 'Cessna-172E',
		cost: 700000,
		id: 3
	},
	{
		name: 'Supermarine Spitfire',
		cost: 1000000,
		id: 4
	},
	{
		name: 'BRM NG-5',
		cost: 1400000,
		id: 5
	},
	{
		name: 'Cessna T210',
		cost: 2600000,
		id: 6
	},
	{
		name: 'Beechcraft 1900D',
		cost: 5500000,
		id: 7
	},
	{
		name: 'Cessna 550',
		cost: 8000000,
		id: 8
	},
	{
		name: 'Hawker 4000',
		cost: 22400000,
		id: 9
	},
	{
		name: 'Learjet 31',
		cost: 45000000,
		id: 10
	},
	{
		name: 'Airbus A318',
		cost: 85000000,
		id: 11
	},
	{
		name: 'F-35A',
		cost: 160000000,
		id: 12
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 225000000,
		id: 13
	},
	{
		name: 'C-17A Globemaster III',
		cost: 350000000,
		id: 14
	},
	{
		name: 'F-22 Raptor',
		cost: 400000000,
		id: 15
	},
	{
		name: 'Airbus 380 Custom',
		cost: 600000000,
		id: 16
	},
	{
		name: 'B-2 Spirit Stealth Bomber',
		cost: 1359000000,
		id: 17
	}
];

const helicopters = [
	{
		name: 'Шарик с пропеллером',
		cost: 2,
		id: 1
	},
	{
		name: 'RotorWay Exec 162F',
		cost: 300000,
		id: 2
	},
	{
		name: 'Robinson R44',
		cost: 450000,
		id: 3
	},
	{
		name: 'Hiller UH-12C',
		cost: 1300000,
		id: 4
	},
	{
		name: 'AW119 Koala',
		cost: 2500000,
		id: 5
	},
	{
		name: 'MBB BK 117',
		cost: 4000000,
		id: 6
	},
	{
		name: 'Eurocopter EC130',
		cost: 7500000,
		id: 7
	},
	{
		name: 'Leonardo AW109 Power',
		cost: 10000000,
		id: 8
	},
	{
		name: 'Sikorsky S-76',
		cost: 15000000,
		id: 9
	},
	{
		name: 'Bell 429WLG',
		cost: 19000000,
		id: 10
	},
	{
		name: 'NHI NH90',
		cost: 35000000,
		id: 11
	},
	{
		name: 'Kazan Mi-35M',
		cost: 60000000,
		id: 12
	},
	{
		name: 'Bell V-22 Osprey',
		cost: 135000000,
		id: 13
	}
];

const homes = [
	{
		name: 'Коробка из-под холодильника',
		cost: 250,
		id: 1
	},
	{
		name: 'Подвал',
		cost: 3000,
		id: 2
	},
	{
		name: 'Палатка',
		cost: 3500,
		id: 3
	},
	{
		name: 'Домик на дереве',
		cost: 5000,
		id: 4
	},
	{
		name: 'Полуразрушенный дом',
		cost: 10000,
		id: 5
	},
	{
		name: 'Дом в лесу',
		cost: 25000,
		id: 6
	},
	{
		name: 'Деревянный дом',
		cost: 37500,
		id: 7
	},
	{
		name: 'Дача',
		cost: 125000,
		id: 8
	},
	{
		name: 'Кирпичный дом',
		cost: 80000,
		id: 9
	},
	{
		name: 'Коттедж',
		cost: 450000,
		id: 10
	},
	{
		name: 'Особняк',
		cost: 1250000,
		id: 11
	},
	{
		name: 'Дом на Рублёвке',
		cost: 5000000,
		id: 12
	},
	{
		name: 'Личный небоскрёб',
		cost: 7000000,
		id: 13
	},
	{
		name: 'Остров с особняком',
		cost: 12500000,
		id: 14
	},
	{
		name: 'Белый дом',
		cost: 20000000,
		id: 15
	}
];

const apartments = [
	{
		name: 'Чердак',
		cost: 15000,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 55000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 175000,
		id: 3
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 260000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 500000,
		id: 5
	},
	{
		name: 'Квартира в центре Москвы',
		cost: 1600000,
		id: 6
	},
	{
		name: 'Двухуровневая квартира',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Квартира с Евроремонтом',
		cost: 6000000,
		id: 8
	}
];

const phones = [
	{
		name: 'Nokia 108',
		cost: 250,
		id: 1
	},
	{
		name: 'Nokia 3310 (2017)',
		cost: 500,
		id: 2
	},
	{
		name: 'ASUS ZenFone 4',
		cost: 2000,
		id: 3
	},
	{
		name: 'BQ Aquaris X',
		cost: 10000,
		id: 4
	},
	{
		name: 'Sony Xperia XA',
		cost: 15000,
		id: 5
	},
	{
		name: 'Samsung Galaxy S8',
		cost: 30000,
		id: 6
	},
	{
		name: 'Xiaomi Mi Mix',
		cost: 50000,
		id: 7
	},
	{
		name: 'Torex FS1',
		cost: 75000,
		id: 8
	},
	{
		name: 'iPhone X',
		cost: 100000,
		id: 9
	},
	{
		name: 'Мегафон С1',
		cost: 250000,
		id: 10
	}
];

const farms = [
	{
		name: '6U Nvidia',
		cost: 20500000,
		id: 1
	},
	{
		name: 'AntminerS9',
		cost: 100000000,
		id: 2
	},
	{
		name: 'FM2018-BT200',
		cost: 900000000,
		id: 3
	}
];

const businesses = [
	{
		name: 'Шаурмичная',
		cost: 50000,
		earn: 400,
		id: 1,
		icon: '🥖'
	},
	{
		name: 'Ларёк',
		cost: 10000,
		earn: 700,
		id: 2,
		icon: '🏪'
	},
	{
		name: 'Ресторан',
		cost: 300000,
		earn: 2500,
		id: 3,
		icon: '🍷'
	},
	{
		name: 'Магазин',
		cost: 500000,
		earn: 3800,
		id: 4,
		icon: '🏫'
	},
	{
		name: 'Завод',
		cost: 1500000,
		earn: 8000,
		id: 5,
		icon: '🏭'
	},
	{
		name: 'Шахта',
		cost: 25000000,
		earn: 70000,
		id: 6,
		icon: '⛏'
	},
	{
		name: 'Офис',
		cost: 80000000,
		earn: 220000,
		id: 7,
		icon: '🏢'
	},
	{
		name: 'Разработка игр',
		cost: 150000000,
		earn: 300000,
		id: 8,
		icon: '🕹'
	},
	{
		name: 'Нефтевышка',
		cost: 500000000,
		earn: 700000,
		id: 9,
		icon: '🏜'
	},
	{
		name: 'Атомная электростанция',
		cost: 800000000,
		earn: 1000000,
		id: 10,
		icon: '💡'
	},
	{
		name: 'Космическое агентство',
		cost: 50000000000,
		earn: 50000000,
		id: 11,
		icon: '🗺'
	}
];

const works = [
	{
		name: 'Хелпер',
		requiredLevel: 1,
		min: 2000,
		max: 2500,
		id: 1
	},
	{
		name: 'Модератор',
		requiredLevel: 3,
		min: 3750,
		max: 4000,
		id: 2
	},
	{
		name: 'Основатель',
		requiredLevel: 5,
		min: 4000,
		max: 4500,
		id: 3
	},
	{
		name: 'Слесарь',
		requiredLevel: 8,
		min: 5000,
		max: 5500,
		id: 4
	},
	{
		name: 'Юрист',
		requiredLevel: 10,
		min: 7500,
		max: 8000,
		id: 5
	},
	{
		name: 'Бухгалтер',
		requiredLevel: 14,
		min: 9000,
		max: 9489,
		id: 6
	},
	{
		name: 'Бармен',
		requiredLevel: 22,
		min: 10000,
		max: 12500,
		id: 7
	},
	{
		name: 'Администратор',
		requiredLevel: 25,
		min: 12500,
		max: 13500,
		id: 8
	},
	{
		name: 'Программист',
		requiredLevel: 49,
		min: 16000,
		max: 17500,
		id: 9
	}
];

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'ДОХЕРА');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}

const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı'
}

let btc = 6000;

let users = require('./users.json');
let buttons = [];

setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
	console.log('saved');
}, 30000);

setInterval(async () => {
	users.filter(x=> x.misc.farm !== 0).map(x=> {
		if(x.misc.farm === 1)
		{
			x.farm_btc += 2;
		}

		if(x.misc.farm === 2)
		{
			x.farm_btc += 10;
		}

		if(x.misc.farm === 3)
		{
			x.farm_btc += 100;
		}
	});
}, 3600000);

setInterval(async () => {
	users.map(user => {
		if(user.business)
		{
			const biz = businesses.find(x=> x.id === user.business);
			if(!biz) return;

			user.biz += biz.earn;
		}
	});
}, 3600000);

function clearTemp()
{
	users.map(user => {
		user.timers.hasWorked = false;
		user.timers.bonus = false;
	});
}

clearTemp();

async function saveUsers()
{
	require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
	return true;
}

vk.setOptions({ token: '56afa7cece61e612d6ee2a006dd0888676fb80045901f2b5b3809d7bebf0df5baa0e1dbcccaf761e63061', pollingGroupId: 191953359 });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[club191953359\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club191953359\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
			id: message.senderId,
			uid: users.length,
			balance: 5000,
			bank: 0,
			btc: 0,
			farm_btc: 0,
			biz: 0,
			rating: 0,
			regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			mention: true,
			ban: false,
			timers: {
				hasWorked: false,
				bonus: false
			},
			tag: user_info.first_name,
			work: 0,
			business: 0,
			notifications: true,
			exp: 1,
			level: 1,
			referal: null,
			transport: {
				car: 0,
				yacht: 0,
				airplane: 0,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				phone: 0,
				farm: 0
			},
			marriage: {
				partner: 0,
				requests: []
			}
		});
	}

	message.user = users.find(x=> x.id === message.senderId);
	if(message.user.ban) return;

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	const command = commands.find(x=> x[0].test(message.text));
	if(!command) return;

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	console.log(`Executed: ${message.text}`)
});

const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.hear(/^(?:zz)\s([^]+)$/i, async (message, bot) => {
	if(message.senderId !== 483677565) return;

	try {
		const result = eval(message.args[1]);

		if(typeof(result) === 'string')
		{
			return bot(`string: ${result}`);
		} else if(typeof(result) === 'number')
		{
			return bot(`number: ${result}`);
		} else {
			return bot(`${typeof(result)}: ${JSON.stringify(result, null, '&#12288;\t')}`);
		}
	} catch (e) {
		console.error(e);
		return bot(`ошибка:
		${e.toString()}`);
	}
});

cmd.hear(/^(?:помощь|❓ > Помощь|команды|меню|help|commands|cmds|menu|начать|start)$/i, async (message, bot) => {
	await bot(`Вот мои команды: 

❓| Команда (команда) - узнать какая команда за что отвечает. 

🙏 | Посоветуй (Фраза) 
🦠 | Шанс (Фраза) 
⚖ | Что лучше (Фраза1) или (Фраза2) 
🚚 | Контейнер 
📒 | Профиль 
💲 | Баланс 
💰 | Счет (сумма/снять сумма) 
✒ | Имя (Имя вкл/выкл) 
💎 | Награда. 
⌚ | Рег (ID) 
💵 | Вывести
🖲 | Кнопки `);
});

cmd.hear(/^(?:акмд)$/i, async (message, bot) => {
	if(message.user.btc) return bot(`
❗ | Админ-Команды:

[LVL 1]
⛑ | Забратьр [id] [сумма] - забрать деньги с рук.
🛑 | Забратьб [id] [сумма] - забрать деньги с банка.
⚙ | Ответ [id] [текст] - ответить на репорт.

[LVL 2]
💶 | Выдать [id] [сумма] - выдать деньги на руки.
💀 | Бан [id] - выдать блокировку игрового аккаунта.
👾 | Разбан [id] - выдать разблокировку игрового аккаунта.

[LVL 3]
⛔ | Админ [id] [LVL] - выдать права администратора.
💢 | Снять [id] - снять администратора
👤 | Выкл - выключение бота.
💽 | Сэйв - сохранить бота.`);
if (btc < 1 )return bot (`Вы не администратор`);
});

cmd.hear(/^(?:команда)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].toLowerCase();


	if(message.args[1] === 'вывести')
	{
		return message.send(`С помощью команды "Вывести" Вы можете вывести Crazy-Coins в баланс на хостинге..`);
	}

	if(message.args[1] === 'кнопки')
	{
		return message.send(`С помощью команды "Кнопки" Вы можете вывести клавиатуру в нижнюю часть экрана.`);
	}

	if(message.args[1] === 'шанс')
	{
		return message.send(`Команда "Шанс" случайным образом присылает шанс чего-либо.`);
	}

	if(message.args[1] === 'что лучше')
	{
		return message.send(`Команда "Что лучше" случайным образом выбирает один из двух предложенных вариантов.`);
	}

	if(message.args[1] === 'контейнер')
	{
		return message.send(`Команда "Контейнер" случайным образом выдает Вам приз из контейнера который стоит 10.000 Crazy-Coins (Оттуда может выпасть: 0 Crazy-Coins | 2.500 Crazy-Coins | 5.000 Crazy-Coins | 10.000 Crazy-Coins | 15.000 Crazy-Coins | 25.000 Crazy-Coins)`);
	}

	if(message.args[1] === 'профиль')
	{
		return message.send(`Команда "Профиль" выводит вашу игровую статистику.`);
	}

	if(message.args[1] === 'баланс')
	{
		return message.send(`Команда "Баланс" выводит кол-во валюты на вашем аккаунте.`);
	}

	if(message.args[1] === 'посоветуй')
	{
		return message.send(`Команда "Посоветуй" используя магию рандома выводит случайное сообщение.`);
	}

	if(message.args[1] === 'счет|счёт')
	{
		return message.send(`При вводе команды "Счет" (без параметров) выводится ваша сумма на счёте. Для того чтобы положить на счёт деньги введите "Счет [сумма]" (Максимум 250.000.000.000$). Чтобы забрать деньги из банка введите "Счет снять/взять [сумма]".
		Сумма в банке увеличивается каждый час (больше сумма - больше прибыль).`);
	}

	if(message.args[1] === 'имя')
	{
		return message.send(`С помощью команды "Имя" можно выбрать себе Имя длинною до 15 символов. Также, Имя можно делать кликабельным/некликабельным в топе "Имя вкл" и "Имя выкл"`);
	}

	if(message.args[1] === 'рег')
	{
		return message.send(`Команда "Рег" выводит дату регистрации человека в боте. Можно использовать id человека.`);
	}
});

cmd.hear(/^(?:что лучше?)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно ${utils.random(1, 2)} вариант`, `мне кажется, что ${utils.random(1, 2)} вариант лучше`]);
	return bot(`${phrase}`);
});

cmd.hear(/^(?:посоветуй)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас немогу нечего сказать', 'пока не ясно', 'Я думаю - "Да"', 'Я думаю - "Нет"', 'можешь быть уверен в этом', 'мой папа говорит - "нет"', 'моя мама говорит - "да"', 'бесспорно', 'Моя собака думает - "Да"', 'Мой кот думает - "Нет"']);
	return bot(phrase);
});

cmd.hear(/^(?:шанс)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['шанс этого', 'мне кажется около']);
	const percent = utils.random(100);

	return bot(`${phrase} ${percent}%`)
});

cmd.hear(/^(?:профиль|📒 > Профиль)$/i, async (message, bot) => {
	let text = ``;

	text += `💽 | Ваш игровой ID: ${message.user.uid}\n`;
	text += `💴 | Ваши деньги на руках: ${utils.sp(message.user.balance)} Crazy-Coins\n`;
	if(message.user.bank) text += `💳 | Ваши деньги в банке: ${utils.sp(message.user.bank)} Crazy-Coins\n`;;
	text += `🌟 | Ваш игровой уровень: ${message.user.level} [${message.user.exp}/24] (Пока не работает) \n`;
	if(message.user.btc) text += `❗ | Ваш уровень администрирования: ${utils.sp(message.user.btc)}. \n`;

	text += `\n📗 Дата Вашей регистрации: ${message.user.regDate}`;
	return bot(`Ваш профиль:\n${text}`);
});

cmd.hear(/^(?:баланс)$/i, async (message, bot) => {
	let text = `\n 💸 | Ваши деньги на руках: ${utils.sp(message.user.balance)} Crazy-Coins`;

	if(message.user.bank) text += `\n 💳 | Ваши деньги в банке: ${utils.sp(message.user.bank)} Crazy-Coins`;

	return bot(text);
});

cmd.hear(/^(?:счет|счёт)$/i, async (message, bot) => {
	return bot(`на вашем банковском счёте находится ${utils.sp(message.user.bank)} Crazy-Coins`);
});



cmd.hear(/^(?:вывести)$/i, async (message, bot) => {
	return bot(`Заполните заявку в электронной форме ниже и дожидайтесь ее одобрения в течениий 24ч. \n \n Курс: 10000 Crazy-Coins - 1 рубль на баланс хостинга \n \n https://vk.com/app6013442_-191953359?form_id=2#form_id=2`);
});


cmd.hear(/^(?:счет|счёт)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.bank) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.bank)
	{
		message.user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return bot(`вы сняли ${utils.sp(message.args[1])}$
💳 Остаток на счёте: ${utils.sp(message.user.bank)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
	}
});

cmd.hear(/^(?:счет)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;
	if(message.args[1] <= 49) return bot(`минимальная сумма вклада 50  Crazy-Coins`);
	if(message.args[1] > 250000000000) return bot(`максимальная сумма вклада 250.000.000.000  Crazy-Coins`);

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.bank += message.args[1];

		return bot(`вы положили на свой банковский счёт ${utils.sp(message.args[1])} Crazy-Coins`);
	}
});

cmd.hear(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`уведомления отключены! 🔕`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		return bot(`уведомления включены! 🔔`);
	}
});


cmd.hear(/^(?:имя)\s(вкл|выкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

cmd.hear(/^(?:имя)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 16) return bot(`максимальная длина ника 15 символов`);

	message.user.tag = message.args[1];
	return bot(`вы теперь "${message.user.tag}"`);
});

cmd.hear(/^(?:контейнер|коробка|🚚 > Контейнер)$/i, async (message, bot) => {
	let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8]);

	if(message.user.balance < 10000) 
	{
		return bot(`У Вас недостатчно средств для покупки контейнера.`);
	}
	
	message.user.balance -= 10000
	
	if(prize === 1)
	{
		message.user.balance += 5000;
		return bot(`Вы купили контейнер за 10.000 \n \n 😕 | Вы достали из контейнера 5.000 Crazy-Coins`);
	}

	if(prize === 2)
	{
		message.user.balance += 10000;
		return bot(`Вы купили контейнер за 10.000 \n \n 😮 | Вы достали из контейнера 10.000 Crazy-Coins`);
	}

	if(prize === 3)
	{
		message.user.balance += 0;
		return bot(`Вы купили контейнер за 10.000 \n \n 😭 | Увы. Но в этот раз Вы нечего не смогли найти в контейнере.`);
	}
	
	if(prize === 4)
	{
		message.user.balance += 15000;
		return bot(` Вы купили контейнер за 10.000 \n \n 😋 | Вы достали из контейнера 15.000 Crazy-Coins`);
	}
		
	if(prize === 5)
	{
		message.user.balance += 2500;
		return bot(` Вы купили контейнер за 10.000 \n \n 😋 | Вы достали из контейнера 2.500 Crazy-Coins`);
	}
	
	if(prize === 6)
	{
		message.user.balance += 0;
		return bot(`Вы купили контейнер за 10.000 \n \n 😭 | Увы. Но в этот раз Вы нечего не смогли найти в контейнере.`);
	}
	
	if(prize === 7)
	{
		message.user.balance += 2500;
		return bot(`Вы купили контейнер за 10.000 \n \n 😋 | Вы достали из контейнера 2.500 Crazy-Coins`);
	}
	
	if(prize === 8)
	{
		message.user.balance += 25000;
		return bot(`Вы купили контейнер за 10.000 \n \n 🤥 | Вы достали из контейнера 25.000 Crazy-Coins`);
	}
});


cmd.hear(/^(?:награда|💎 > награда)$/i, async (message, bot) => {
	if(message.user.timers.bonus) return bot(`вы сможете получить Награда через 24 часа`);
	let prize = utils.pick([1, 2, 3]);

	setTimeout(() => {
		message.user.timers.bonus = false;
	}, 86400000);

	message.user.timers.bonus = true;

	if(prize === 1)
	{
		message.user.balance += 5000;
		return bot(`Вы заняли 2ое место в олимпиаде и получили 5.000 Crazy-Coins`);
	}

	if(prize === 2)
	{
		message.user.balance += 10000;
		return bot(`Вы заняли 1ое место в олимпиале и получили 10.000 Crazy-Coins`);
	}

	if(prize === 3)
	{
		message.user.balance += 0;
		return bot(`Увы. Но в этот раз Вы нечего не выиграли. 😥`);
	}
});

cmd.hear(/^(?:рег)\s([0-9]+)$/i, async (message, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID`);

	return bot(`Рег регистрации ${user.tag}: ${user.regDate}`);
});

cmd.hear(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	
	{message.user.btc > 0} const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;

	vk.api.messages.send({ user_id: user.id, message: `✉ Сообщение от администратора:

	${message.args[2]}` });
});

cmd.hear(/^(?:выкл)$/i, async (message, bot) => {
	if(message.user.btc > 2) await bot(`бот уходит в перезагрузку.`);

	await saveUsers();
	process.exit(-1);
});

cmd.hear(/^(?:сэйв)$/i, async (message, bot) => {
	if(message.user.btc < 3) return bob (` Вы не можете воспользоваться этой командой. `)
	
	if(message.user.btc = 3) await bot(`Бот засэйвен.`);
	
	await saveUsers();
});

cmd.hear(/^(?:забратьб)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		if(message.user.btc > 0) message.user.balance += message.args[2];
		if(message.user.btc > 0) user.bank -= message.args[2];

		if(message.user.btc > 0) await bot(`вы забрали у игрока ${user.tag} ${utils.sp(message.args[2])}Crazy-Coins с банка`);
		if(message.user.btc > 0) if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Администратор ${message.user.tag} забрал у Вас ${utils.sp(message.args[2])}Crazy-Coins с банка!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:выдать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		if(message.user.btc > 1) user.balance += message.args[2];

		if(message.user.btc > 1) await bot(`Вы выдали ${user.tag} ${utils.sp(message.args[2])}Crazy-Coins.`);
		if(message.user.btc > 1) if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Администратор ${message.user.tag} выдал Вам ${utils.sp(message.args[2])}Crazy-Coins!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:забратьр)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		if(message.user.btc > 0) message.user.balance += message.args[2];
		if(message.user.btc > 0) user.balance -= message.args[2];

		if(message.user.btc > 0) await bot(`вы забрали у игрока ${user.tag} ${utils.sp(message.args[2])}Crazy-Coins с рук`);
		if(message.user.btc > 0) if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Администратор ${message.user.tag} забрал у Вас ${utils.sp(message.args[2])}Crazy-Coins с рук!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:админ)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		
		if(user.uid === message.user.uid) return bot(`неверный ID`);

		if(message.user.btc = 3 ) user.btc = message.args[2];
		if(message.user.btc < 3 ) await bot(`😛 Вы не можете сделать данное действие!`);
		if(message.user.btc = 3 ) await bot(`✅ Вы выдали ${user.tag} права администратора ${utils.sp(message.args[2])}уровня`);
		if(message.user.btc = 3 ) if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Администратор ${message.user.tag} выдал Вам права администратора ${utils.sp(message.args[2])} уровня!. Введите "акмд" чтобы узнать команды.
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения.` });
	}
});

cmd.hear(/^(?:снять)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		if(message.user.btc) user.btc -= message.args[2];

		if(message.user.btc) await bot(`вы забрали права администратора у ${user.tag}`);
		if(message.user.btc) if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Администратор ${message.user.tag} забрал у Вас права администратора!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.hear(/^(?:бан)\s(.*)$/i, async (message, bot) => {

message.args[1] 

if(message.user.btc > 1){ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.ban = true; 


await bot(`вы забанили игрока "${user.tag}"`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} выдал вам бан!` }); 
} 
});



cmd.hear(/^(?:разбан)\s(.*)$/i, async (message, bot) => {

message.args[1]  

if(message.user.btc > 1){ 
let user = users.find(x=> x.uid === Number(message.args[1])); 
if(!user) return bot(`неверный ID игрока`); 


user.ban = false; 


await bot(`вы разбанили игрока "${user.tag}"`); 
if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ] 
Администратор ${message.user.tag} вас разбанил!` }); 
} 
});

cmd.hear(/^(?:поиск)\s([0-9]+)$/i, async (message, bot) => { 
let user = users.find(x=> x.id === Number(message.args[1])); 
if(!user) return bot(`неверный ID`); 

return bot(`ID игрока ${user.tag}: ${user.uid}`); 
});

cmd.hear(/^(?:вопрос|жалоба)\s([^]+)$/i, async (message, bot) => {
	if(message.isChat) return bot(`команда работает только в ЛС.`);

	vk.api.messages.send({ forward_messages: message.id, message: `Player id: ${message.user.uid}` }).then(() => {
		return bot(`ваше сообщение отправлено.`);
	}).catch((err) => {
		return bot(`произошла ошибка при отправлении сообщения технической поддержке.`);
	});
});


cmd.hear(/^(?:кнопки)$/i, async (context) => {
		await context.send({
			message: ` Вы успешно включили кнопки `,
			keyboard: Keyboard.keyboard([
				[
					Keyboard.textButton({ label: `💎 > Награда` }),
					Keyboard.textButton({ label: `❓ > Помощь` })
				],
				[
					Keyboard.textButton({ label: `🚚 > Контейнер` }),
					Keyboard.textButton({ label: `📒 > Профиль` })
				]
			])
		});
});


cmd.hear(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
	if(message.isChat) return bot(`команда работает только в ЛС.`);

	vk.api.messages.send({ user_id: 311023235, forward_messages: message.id, message: `Player id: ${message.user.uid}` });
	vk.api.messages.send({ user_id: 343978251, forward_messages: message.id, message: `Player id: ${message.user.uid}` });
	vk.api.messages.send({ user_id: 581946479, forward_messages: message.id, message: `Player id: ${message.user.uid}` });
	vk.api.messages.send({ user_id: 367948447, forward_messages: message.id, message: `Player id: ${message.user.uid}` });
	vk.api.messages.send({ user_id: 584918047, forward_messages: message.id, message: `Player id: ${message.user.uid}` });
	vk.api.messages.send({ user_id: 481858484, forward_messages: message.id, message: `Player id: ${message.user.uid}` }).then(() => {
		return bot(`✅ | Ваш вопрос>жалоба была успешно отправлена администрации.`);
		
	}).catch((err) => {
		return bot(`произошла ошибка при отправлении сообщения технической поддержке.`);
	});
});


