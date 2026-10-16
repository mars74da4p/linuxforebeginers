// Extracted JavaScript from main.html
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.side-nav a')];
const observer = new IntersectionObserver(entries => {
	for (const entry of entries) {
		if (!entry.isIntersecting) continue;
		navLinks.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
	}
}, { rootMargin: '-22% 0px -68% 0px' });
sections.forEach(section => observer.observe(section));

const distroData = [
	['Linux Mint', 'Ubuntu / Debian', 'Знакомый Cinnamon, простая настройка и спокойные обновления. Удобная отправная точка.', 'beg[...]
	['Ubuntu', 'Debian', 'Широкая поддержка оборудования и документации; LTS-релизы рассчитаны на долгую поддержку.', 'beg[...]
	['Fedora Workstation', 'RPM / Red Hat', 'Современный GNOME, новые технологии и близость к upstream; релизы обновляются регулярно.'[...]
	['Arch Linux', 'Независимый', 'Rolling release и ручная настройка с большим контролем; требует самостоятельного обслуж�[...]
	['Debian', 'DEB', 'Общественный проект с проверенными стабильными пакетами и широким применением на серверах.', '[...]
	['openSUSE Tumbleweed', 'RPM / SUSE', 'Rolling release с автоматическими проверками сборок, Btrfs и удобными средствами администри�[...]
	['Lubuntu', 'Ubuntu', 'Ubuntu с лёгкой средой LXQt для систем с ограниченными ресурсами.', 'beginner stable easy light desktop old'],
	['NixOS', 'Независимый', 'Декларативная конфигурация, воспроизводимые сборки и удобные откаты; необычная мод�[...]
	['Bazzite', 'Fedora Atomic', 'Игровая атомарная система с готовой интеграцией Steam; специализированный desktop.', 'beginner stable [...]
	['Pop!_OS', 'Ubuntu', 'Настольная система с удобной поддержкой графики и инструментами для разработки и игр.', 'beginne[...]
	['Zorin OS', 'Ubuntu', 'Дружелюбный настольный интерфейс и простая миграция с других ОС.', 'beginner stable easy desktop old'],
	['elementary OS', 'Ubuntu', 'Цельный и минималистичный desktop с собственным набором приложений.', 'beginner stable easy desktop'],
	['KDE neon', 'Ubuntu', 'База Ubuntu LTS с быстрыми обновлениями KDE Plasma; подходит поклонникам KDE.', 'some fresh desktop control modern'],
	['Kubuntu', 'Ubuntu', 'Ubuntu с настраиваемой средой KDE Plasma и большим набором приложений.', 'beginner stable easy desktop'],
	['Xubuntu', 'Ubuntu', 'Ubuntu с XFCE: привычный, гибкий и сравнительно лёгкий настольный вариант.', 'beginner stable easy light desktop old'[...]
	['Ubuntu Studio', 'Ubuntu', 'Готовый набор инструментов для аудио, видео, графики и создания контента.', 'some stable desktop devel[...]
	['Ubuntu Server', 'Ubuntu', 'Серверная редакция Ubuntu с длительной поддержкой и широкой документацией.', 'some stable easy server de[...]
	['Fedora KDE Plasma Desktop', 'RPM / Red Hat', 'Актуальная Fedora с Plasma и новыми версиями графического стека.', 'some fresh desktop control modern[...]
	['Fedora Silverblue', 'Fedora Atomic', 'Неизменяемая основа, атомарные обновления и контейнерный подход к приложениям.', 'so[...]
	['Fedora Server', 'RPM / Red Hat', 'Серверная Fedora с современным стеком и инструментами управления.', 'some fresh server developer'],
	['Rocky Linux', 'RHEL-compatible', 'Стабильная корпоративная система для серверов и долгого жизненного цикла.', 'stable server a[...]
	['AlmaLinux', 'RHEL-compatible', 'Совместимая с экосистемой RHEL система для серверов и рабочих нагрузок.', 'stable server advanced'],
	['Red Hat Enterprise Linux', 'RPM / Red Hat', 'Коммерческая платформа с вендорской поддержкой для корпоративной инфраструкт[...]
	['openSUSE Leap', 'RPM / SUSE', 'Предсказуемый релиз openSUSE для рабочих станций и серверов.', 'stable server easy desktop'],
	['openSUSE Aeon', 'RPM / SUSE', 'Атомарный desktop с автоматическими обновлениями и изолированными приложениями.', 'some stable [...]
	['Manjaro', 'Arch-based', 'Доступный настольный rolling-дистрибутив с графическими инструментами настройки.', 'beginner rolling[...]
	['EndeavourOS', 'Arch-based', 'Близкая к Arch система с удобным установщиком и сообществом.', 'some rolling fresh control desktop developer'],
	['CachyOS', 'Arch-based', 'Производительный Arch-вариант с актуальными пакетами и настройками для игр.', 'advanced rolling fresh co[...]
	['Garuda Linux', 'Arch-based', 'Яркий rolling desktop с игровыми инструментами и снимками системы.', 'some rolling fresh gaming desktop'],
	['Artix Linux', 'Arch-based', 'Arch-подобная система с выбором альтернатив systemd.', 'advanced rolling fresh control desktop'],
	['Gentoo', 'Независимый', 'Система с настройкой сборки пакетов и глубоким контролем над конфигурацией.', 'advanced r[...]
	['Void Linux', 'Независимый', 'Независимый дистрибутив с runit, rolling-моделью и лаконичным базовым окружением.', 'advance[...]
	['Alpine Linux', 'Независимый', 'Компактная система с musl и OpenRC, часто используемая в контейнерах и серверах.', 'advance[...]
	['Slackware', 'Независимый', 'Одна из старейших систем с простым устройством и минимальной автоматизацией.', 'advan[...]
	['Mageia', 'Независимый', 'Дружелюбный community-дистрибутив с графическими инструментами настройки.', 'beginner stable easy[...]
	['MX Linux', 'Debian', 'Практичный desktop на базе Debian с набором собственных системных утилит.', 'beginner stable easy light desktop old'],
	['antiX', 'Debian', 'Лёгкая система без systemd для старых и маломощных компьютеров.', 'beginner stable light old'],
	['Puppy Linux', 'Независимый', 'Очень компактная система для запуска с USB и старого оборудования.', 'beginner stable light old'[...]
	['Kali Linux', 'Debian', 'Специализированный набор для тестирования безопасности; не обычная система для новичка.', [...]
	['Parrot OS', 'Debian', 'Система для кибербезопасности, разработки и приватности с готовыми инструментами.', 'advanced ro[...]
	['Tails', 'Debian', 'Live-система, ориентированная на приватность и минимизацию следов на устройстве.', 'some stable privacy se[...]
	['Qubes OS', 'Fedora / Xen', 'Сильная изоляция задач в виртуальных машинах; требует совместимого мощного оборудовани[...]
	['Whonix', 'Debian', 'Система приватности с разделением рабочей среды и сетевого шлюза Tor.', 'advanced stable privacy security'],
	['Solus', 'Независимый', 'Самостоятельный настольный дистрибутив с собственным репозиторием и средой Budgie.', 'so[...]
	['Deepin', 'Debian', 'Настольный дистрибутив с собственной графической средой и приложениями.', 'beginner stable easy desktop'],
	['Vanilla OS', 'Ubuntu / Debian', 'Атомарный desktop с изолированными пакетами и обновлениями образа.', 'some stable desktop developer'],
	['blendOS', 'Arch-based', 'Неизменяемая система с контейнеризированными окружениями и несколькими источниками пак�[...]
	['Nobara', 'Fedora', 'Fedora-вариант с настройками и пакетами для игр, стриминга и создания контента.', 'some rolling fresh gaming d[...]
	['Oracle Linux', 'RPM / Oracle', 'Корпоративная система для серверов и приложений в инфраструктуре Oracle.', 'stable server advanced'],
	['Chimera Linux', 'Независимый', 'Современная независимая система с musl, LLVM и альтернативным системным стеком.', 'adva[...]
];
const distroGrid = document.getElementById('distro-grid');
const distroCards = distroData.map(([name, family, description, tags], index) => {
	const card = document.createElement('article');
	card.className = 'distro glass';
	card.id = `distro-${index + 1}`;
	card.dataset.tags = tags;
	const top = document.createElement('div');
	top.className = 'distro-top';
	const heading = document.createElement('div');
	const title = document.createElement('h3');
	title.textContent = name;
	const familyLabel = document.createElement('span');
	familyLabel.className = 'distro-family';
	familyLabel.textContent = family.toLocaleUpperCase('ru');
	heading.append(title, familyLabel);
	top.append(heading);
	const summary = document.createElement('p');
	summary.textContent = description;
	const meta = document.createElement('div');
	meta.className = 'distro-meta';
	tags.split(' ').forEach(tag => {
		if (!['beginner', 'rolling', 'stable', 'light', 'advanced', 'gaming', 'server', 'privacy'].includes(tag)) return;
		const chip = document.createElement('span');
		chip.className = 'tag';
		chip.textContent = ({ beginner: 'для начала', rolling: 'rolling', stable: 'стабильный', light: 'лёгкий', advanced: 'для опытных', gaming: 'игры', server[...]
		meta.append(chip);
	});
	card.append(top, summary, meta);
	distroGrid.append(card);
	return { name, family, description, tags: tags.split(' '), card };
});

let activeFilter = 'all';
function applyDistroFilter() {
	let visibleCount = 0;
	distroCards.forEach(distro => {
		distro.card.hidden = activeFilter !== 'all' && !distro.tags.includes(activeFilter);
		if (!distro.card.hidden) visibleCount++;
	});
	document.getElementById('catalog-count').textContent = `Показано ${visibleCount} из ${distroCards.length} дистрибутивов`;
}
document.querySelectorAll('.filter-btn').forEach(button => button.addEventListener('click', () => {
	activeFilter = button.dataset.filter;
	document.querySelectorAll('.filter-btn').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
	applyDistroFilter();
}));
applyDistroFilter();

const recommendationWeights = {
	experience: { new: { beginner: 5, easy: 2, advanced: -2 }, some: { beginner: 1, advanced: 1 }, advanced: { advanced: 4, control: 2 } },
	priority: { easy: { easy: 5, beginner: 2 }, fresh: { fresh: 5, rolling: 3 }, stable: { stable: 5, server: 1 }, control: { control: 5, advanced: 2 } },
	hardware: { old: { light: 6 }, modern: { modern: 2, fresh: 1 }, gaming: { gaming: 6, fresh: 2 } },
	purpose: { daily: { desktop: 3, easy: 1 }, gaming: { gaming: 7 }, server: { server: 7, stable: 2 }, developer: { developer: 6, control: 1 }, privacy: { privacy: 7, security: 2 } }
};
document.getElementById('recommend').addEventListener('click', () => {
	const selections = {
		experience: document.getElementById('experience').value,
		priority: document.getElementById('priority').value,
		hardware: document.getElementById('hardware').value,
		purpose: document.getElementById('purpose').value
	};
	const ranked = distroCards.map(distro => {
		let score = 0;
		const reasons = [];
		for (const [dimension, choice] of Object.entries(selections)) {
			for (const [tag, weight] of Object.entries(recommendationWeights[dimension][choice])) {
				if (!distro.tags.includes(tag)) continue;
				score += weight;
				if (weight >= 3 && reasons.length < 3) reasons.push(({ beginner: 'подходит для старта', easy: 'прост в повседневном использовании', advanced:[...]
			}
		}
		return { ...distro, score, reasons };
	}).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
	const result = document.getElementById('recommendation');
	result.replaceChildren();
	const lead = document.createElement('div');
	const first = ranked[0];
	const firstName = document.createElement('strong');
	firstName.textContent = `${first.name} · совпадение ${first.score} баллов`;
	lead.append(firstName, document.createTextNode(` — ${first.description} Совпадение ориентировочное: проверьте поддержку оборудования и[...]
	result.append(lead);
	const alternatives = document.createElement('ul');
	ranked.slice(1, 3).forEach(distro => {
		const item = document.createElement('li');
		item.textContent = `${distro.name} — ${distro.reasons.slice(0, 2).join(', ') || distro.description}`;
		alternatives.append(item);
	});
	result.append(alternatives);
	result.classList.add('visible');
});

function normalizeSearch(text) {
	return text.toLocaleLowerCase('ru').replaceAll('ё', 'е').replace(/[^ -\p{L}\p{N}+#.-]+/gu, ' ').trim();
}
function editDistanceAtMostOne(left, right) {
	if (Math.abs(left.length - right.length) > 1) return false;
	let leftIndex = 0;
	let rightIndex = 0;
	let edits = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] === right[rightIndex]) { leftIndex++; rightIndex++; continue; }
		if (++edits > 1) return false;
		if (left.length > right.length) leftIndex++;
		else if (right.length > left.length) rightIndex++;
		else { leftIndex++; rightIndex++; }
	}
	return edits + Number(leftIndex < left.length || rightIndex < right.length) <= 1;
}
const searchAliases = {
	'дистро': ['дистрибутив'], 'дистрибутивы': ['дистрибутив'], 'новичок': ['начало', 'beginner'], 'новичкам': ['начало', 'beginn[...]
	'игры': ['gaming', 'игровой'], 'гейминг': ['gaming', 'игровой'], 'сервер': ['server'], 'разработка': ['developer'], 'приватность': ['privacy[...]
	'легкий': ['light'], 'легкая': ['light'], 'слабый': ['light'], 'свежие': ['rolling', 'fresh'], 'обновления': ['rolling', 'fresh'],
	'стабильность': ['stable'], 'стабильный': ['stable'], 'настройка': ['control'], 'безопасность': ['security', 'privacy'],
	'рабочий': ['desktop'], 'стол': ['desktop'], 'арх': ['arch'], 'убунту': ['ubuntu'], 'дебиан': ['debian'], 'федора': ['fedora'], 'минт': ['mint'], 'вайф�[...]
};
const searchableSections = [...document.querySelectorAll('main section[id]')].map(section => ({
	title: section.querySelector('h2')?.textContent.trim() || section.id,
	href: `#${section.id}`,
	text: normalizeSearch(section.textContent),
	kind: 'Раздел'
}));
const searchIndex = [
	...searchableSections,
	...distroCards.map(distro => ({ title: distro.name, href: `#${distro.card.id}`, text: normalizeSearch(`${distro.name} ${distro.family} ${distro.description} ${distro.tags.join(' ')}`), kind: '[...]
];
const searchInput = document.getElementById('search');
const resultsBox = document.getElementById('search-results');
let activeSearchResult = -1;
function searchScore(item, queryTokens) {
	const words = item.text.split(' ');
	let score = 0;
	let matched = 0;
	for (const token of queryTokens) {
		const variants = [token, ...(searchAliases[token] || [])];
		let best = 0;
		for (const variant of variants) {
			if (item.text.includes(variant)) best = Math.max(best, item.title.toLocaleLowerCase('ru').includes(variant) ? 8 : 4);
			if (!best && variant.length >= 5 && words.some(word => editDistanceAtMostOne(variant, word))) best = 1;
		}
		if (best) { score += best; matched++; }
	}
	return matched >= Math.ceil(queryTokens.length / 2) ? score + matched * 2 : 0;
}
function updateSearchResults() {
	const tokens = normalizeSearch(searchInput.value).split(' ').filter(token => token.length > 1);
	resultsBox.replaceChildren();
	activeSearchResult = -1;
	if (!tokens.length) { resultsBox.classList.remove('open'); return; }
	const results = searchIndex.map(item => ({ ...item, score: searchScore(item, tokens) })).filter(item => item.score > 0).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title)).slic[...]
	if (!results.length) {
		const empty = document.createElement('p');
		empty.textContent = 'Ничего не найдено. Попробуйте другое слово или часть названия.';
		resultsBox.append(empty);
	} else {
		results.forEach(item => {
			const link = document.createElement('a');
			link.href = item.href;
			link.setAttribute('role', 'option');
			link.setAttribute('aria-selected', 'false');
			link.textContent = `${item.title} · ${item.kind}`;
			resultsBox.append(link);
		});
	}
	resultsBox.classList.add('open');
}
function selectSearchResult(index) {
	const links = [...resultsBox.querySelectorAll('a[role="option"]')];
	if (!links.length) return;
	activeSearchResult = (index + links.length) % links.length;
	links.forEach((link, linkIndex) => link.setAttribute('aria-selected', String(linkIndex === activeSearchResult)));
	links[activeSearchResult].scrollIntoView({ block: 'nearest' });
}
searchInput.addEventListener('input', updateSearchResults);
searchInput.addEventListener('keydown', event => {
	if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
		event.preventDefault();
		const count = resultsBox.querySelectorAll('a[role="option"]').length;
		const nextIndex = activeSearchResult === -1 && event.key === 'ArrowUp' ? count - 1 : activeSearchResult + (event.key === 'ArrowDown' ? 1 : -1);
		selectSearchResult(nextIndex);
	} else if (event.key === 'Enter') {
		const selected = resultsBox.querySelector('[aria-selected="true"]') || resultsBox.querySelector('a[role="option"]');
		if (selected) { event.preventDefault(); selected.click(); }
	} else if (event.key === 'Escape') resultsBox.classList.remove('open');
});
resultsBox.addEventListener('click', event => { if (event.target.closest('a')) resultsBox.classList.remove('open'); });
document.addEventListener('click', event => { if (!event.target.closest('.search-wrap')) resultsBox.classList.remove('open'); });
