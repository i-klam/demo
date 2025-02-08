import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen');

export const COLORS = {
	primary: "#6E4ED4",
	primaryLight: "rgba(110, 78, 212, 0.1)",
	secondary: "#3B3452",
	success: "#43CD8B",
	danger: "#F83838",
	warning: "#ffb02c",
	dark: "#2f2f2f",
	light: "#E6E6E6",
	info: "#2B39B9",
	white: "#fff",
	label: "#8A8A8A",
	backgroundColor: "#fff",
	black: "#000",

	//light theme
	card: "#fff",
	background: "#FAFAFA",
	text: "#7E7B7B",
	textLight: "#8A8A8A",
	title: "#12092E",
	borderColor: "#ABABAB",
	input: "#F9F9F9",
	placeholder: 'rgba(71,90,119,.5)',

	//dark theme
	darkCard: "#1C212E",
	darkBackground: "#0C101C",
	darkText: "#B8B8B8",
	darkTextLight: "#6C6E77",
	darkTitle: "#fff",
	darkBorder: "#2A2F3A",
	darkInput: "#151A28",
	darkPlaceholder: "rgba(255,255,255,.5)",
}

export const SIZES = {
	fontLg: 16,
	font: 14,
	fontSm: 13,
	fontXs: 12,

	//radius
	radius_sm: 8,
	radius: 6,
	radius_lg: 15,

	//space
	padding: 15,
	margin: 15,

	//Font Sizes
	h1: 40,
	h2: 28,
	h3: 24,
	h4: 20,
	h5: 18,
	h6: 16,

	//App dimensions
	width,
	height,

	container : 800,

};

export const FONTS = {
	fontLg: { fontSize: SIZES.fontLg, color: COLORS.text, lineHeight: 20, fontFamily: 'PoppinsRegular' },
	font: { fontSize: SIZES.font, color: COLORS.text, lineHeight: 20, fontFamily: 'PoppinsRegular' },
	fontSm: { fontSize: SIZES.fontSm, color: COLORS.text, lineHeight: 18, fontFamily: 'PoppinsRegular' },
	fontXs: { fontSize: SIZES.fontXs, color: COLORS.text, lineHeight: 14, fontFamily: 'PoppinsRegular' },
	h1: { fontSize: SIZES.h1, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
	h2: { fontSize: SIZES.h2, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
	h3: { fontSize: SIZES.h3, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
	h4: { fontSize: SIZES.h4, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
	h5: { fontSize: SIZES.h5, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
	h6: { fontSize: SIZES.h6, color: COLORS.title, fontFamily: 'PoppinsSemiBold' },
	fontBold: { fontFamily: 'PoppinsBold' },
	fontMedium: { fontFamily: 'PoppinsMedium' },
	fontTitle: { fontFamily: 'PoppinsMedium' },
	fontRegular: { fontFamily: 'PoppinsRegular' },
	fontSemiBold: { fontFamily: 'PoppinsSemiBold' },
}

export const IMAGES = {

	user: require('../assets/images/user.png'),
	logo: require('../assets/images/logo.png'),
	logowhite: require('../assets/images/logo-white.png'),
	sun: require('../assets/images/icons/sun.png'),
	moon: require('../assets/images/icons/moon.png'),
	plus: require('../assets/images/icons/plus.png'),
	home: require('../assets/images/icons/home3.png'),
	chat: require('../assets/images/icons/chat.png'),
	ads: require('../assets/images/icons/ads.png'),
	profile: require('../assets/images/icons/user3.png'),
	filter: require('../assets/images/icons/filter.png'),
	flash: require('../assets/images/icons/flash.png'),
	grid: require('../assets/images/icons/grid.png'),
	grid2: require('../assets/images/icons/grid2.png'),
	brand: require('../assets/images/icons/brand.png'),
	budget: require('../assets/images/icons/budget.png'),
	watch: require('../assets/images/icons/watch.png'),
	map: require('../assets/images/icons/map.png'),
	Vector: require('../assets/images/icons/Vector.png'),
	Vector: require('../assets/images/icons/Vector.png'),
	gasstation: require('../assets/images/icons/gas-station.png'),
	flashlight: require('../assets/images/icons/flashlight.png'),
	calendar: require('../assets/images/icons/calendar.png'),
	close: require('../assets/images/icons/close.png'),
	search: require('../assets/images/icons/search.png'),
	rightarrow: require('../assets/images/icons/rightarrow.png'),
	downarrow: require('../assets/images/icons/downarrow.png'),
	checkboxempty: require('../assets/images/icons/check-box-empty.png'),
	checkbox: require('../assets/images/icons/check-box.png'),
	more: require('../assets/images/icons/more.png'),
	arrowleft: require('../assets/images/icons/arrow-left.png'),
	audio: require('../assets/images/icons/audio.png'),
	audiomute: require('../assets/images/icons/audiomute.png'),
	phone: require('../assets/images/icons/phone.png'),
	call: require('../assets/images/icons/call.png'),
	camera: require('../assets/images/icons/camera.png'),
	send: require('../assets/images/icons/send.png'),
	happy: require('../assets/images/icons/happy.png'),
	volume: require('../assets/images/icons/volume.png'),
	delete: require('../assets/images/icons/delete.png'),
	mapgps: require('../assets/images/icons/mapgps.png'),
	rupee: require('../assets/images/icons/rupee.png'),
	eye: require('../assets/images/icons/eye.png'),
	eyeClose: require('../assets/images/icons/eye-close.png'),
	like: require('../assets/images/icons/like.png'),
	dollar: require('../assets/images/icons/dollar.png'),
	settings: require('../assets/images/icons/settings.png'),
	share: require('../assets/images/icons/share.png'),
	google: require('../assets/images/icons/google.png'),
	google2: require('../assets/images/icons/google2.png'),
	email: require('../assets/images/icons/email.png'),
	call2: require('../assets/images/icons/call2.png'),
	disable: require('../assets/images/icons/disable.png'),
	write: require('../assets/images/icons/write.png'),
	bell: require('../assets/images/icons/bell.png'),
	logout: require('../assets/images/icons/logout.png'),
	verified: require('../assets/images/icons/verified.png'),
	wallet: require('../assets/images/icons/wallet.png'),
	help: require('../assets/images/icons/help.png'),
	earth: require('../assets/images/icons/earth.png'),
	downaeeowsmall: require('../assets/images/icons/downaeeowsmall.png'),
	hamburger: require('../assets/images/icons/hamburger.png'),

	brand1: require('../assets/images/item/brand/brand1.jpg'),
	brand2: require('../assets/images/item/brand/brand2.jpg'),
	brand3: require('../assets/images/item/brand/brand3.jpg'),
	brand4: require('../assets/images/item/brand/brand4.jpg'),
	brand5: require('../assets/images/item/brand/brand5.jpg'),
	brand6: require('../assets/images/item/brand/brand6.jpg'),

	cat1: require('../assets/images/category/cat1.png'),
	cat2: require('../assets/images/category/cat2.png'),
	cat3: require('../assets/images/category/cat3.png'),
	cat4: require('../assets/images/category/cat4.png'),
	cat5: require('../assets/images/category/cat5.png'),
	cat6: require('../assets/images/category/cat6.png'),
	cat7: require('../assets/images/category/cat7.png'),
	cat8: require('../assets/images/category/cat8.png'),
	cat9: require('../assets/images/category/cat9.png'),
	cat10: require('../assets/images/category/cat10.png'),
	cat11: require('../assets/images/category/cat11.png'),

	car1: require('../assets/images/item/cars/item1.jpg'),
	car2: require('../assets/images/item/cars/item2.jpg'),
	car3: require('../assets/images/item/cars/item3.jpg'),
	car4: require('../assets/images/item/cars/item4.jpg'),
	car5: require('../assets/images/item/cars/item5.jpg'),
	car6: require('../assets/images/item/cars/item6.jpg'),

	detail1: require('../assets/images/item/detail/item1.jpg'),
	detail2: require('../assets/images/item/detail/item2.jpg'),
	detail3: require('../assets/images/item/detail/item3.jpg'),
	detail4: require('../assets/images/item/detail/item4.jpg'),


	Small1: require('../assets/images/small/pic1.jpg'),
	Small2: require('../assets/images/small/pic2.jpg'),
	Small3: require('../assets/images/small/pic3.jpg'),
	Small4: require('../assets/images/small/pic4.jpg'),
	Small5: require('../assets/images/small/pic5.jpg'),
	Small6: require('../assets/images/small/pic6.jpg'),
	Small7: require('../assets/images/small/pic7.jpg'),
	Small8: require('../assets/images/small/pic8.jpg'),
	Small9: require('../assets/images/small/pic9.jpg'),
	Small10: require('../assets/images/small/pic10.jpg'),

	mobile1: require('../assets/images/item/mobile/mobile-1.jpg'),
	mobile2: require('../assets/images/item/mobile/mobile-2.jpg'),
	mobile3: require('../assets/images/item/mobile/mobile-3.jpg'),
	mobile4: require('../assets/images/item/mobile/mobile-4.jpg'),
	mobile5: require('../assets/images/item/mobile/mobile-5.jpg'),
	mobile6: require('../assets/images/item/mobile/mobile-6.jpg'),

	properties1: require('../assets/images/item/properties/properties-1.jpg'),
	properties2: require('../assets/images/item/properties/properties-2.jpg'),
	properties3: require('../assets/images/item/properties/properties-3.jpg'),
	properties4: require('../assets/images/item/properties/properties-4.jpg'),
	properties5: require('../assets/images/item/properties/properties-5.jpg'),
	properties6: require('../assets/images/item/properties/properties-6.jpg'),

	service1: require('../assets/images/item/service/service-1.jpg'),
	service2: require('../assets/images/item/service/service-2.jpg'),
	service3: require('../assets/images/item/service/service-3.jpg'),
	service4: require('../assets/images/item/service/service-4.jpg'),

	pet1: require('../assets/images/item/pet/pet-1.jpg'),
	pet2: require('../assets/images/item/pet/pet-2.jpg'),
	pet3: require('../assets/images/item/pet/pet-3.jpg'),
	pet4: require('../assets/images/item/pet/pet-4.jpg'),
	pet5: require('../assets/images/item/pet/pet-5.jpg'),
	pet6: require('../assets/images/item/pet/pet-6.jpg'),

	jobs1: require('../assets/images/item/jobs/jobs-1.jpg'),
	jobs2: require('../assets/images/item/jobs/jobs-2.jpg'),
	jobs3: require('../assets/images/item/jobs/jobs-3.jpg'),
	jobs4: require('../assets/images/item/jobs/jobs-4.jpg'),
	jobs5: require('../assets/images/item/jobs/jobs-5.jpg'),
	jobs6: require('../assets/images/item/jobs/jobs-6.jpg'),

	furniture1: require('../assets/images/item/furniture/furniture-1.jpg'),
	furniture2: require('../assets/images/item/furniture/furniture-2.jpg'),
	furniture3: require('../assets/images/item/furniture/furniture-3.jpg'),
	furniture4: require('../assets/images/item/furniture/furniture-4.jpg'),
	furniture5: require('../assets/images/item/furniture/furniture-5.jpg'),
	furniture6: require('../assets/images/item/furniture/furniture-6.jpg'),

	faction1: require('../assets/images/item/fashion/faction-1.jpg'),
	faction2: require('../assets/images/item/fashion/faction-2.jpg'),
	faction3: require('../assets/images/item/fashion/faction-3.jpg'),
	faction4: require('../assets/images/item/fashion/faction-4.jpg'),
	faction5: require('../assets/images/item/fashion/faction-5.jpg'),
	faction6: require('../assets/images/item/fashion/faction-6.jpg'),

	electronics1: require('../assets/images/item/electronics/electronics-1.jpg'),
	electronics2: require('../assets/images/item/electronics/electronics-2.jpg'),
	electronics3: require('../assets/images/item/electronics/electronics-3.jpg'),
	electronics4: require('../assets/images/item/electronics/electronics-4.jpg'),
	electronics5: require('../assets/images/item/electronics/electronics-5.jpg'),
	electronics6: require('../assets/images/item/electronics/electronics-6.jpg'),

	books1: require('../assets/images/item/books/book-1.jpg'),
	books2: require('../assets/images/item/books/book-2.jpg'),
	books3: require('../assets/images/item/books/book-3.jpg'),
	books4: require('../assets/images/item/books/book-4.jpg'),
	books5: require('../assets/images/item/books/book-5.jpg'),
	books6: require('../assets/images/item/books/book-6.jpg'),

	bike1: require('../assets/images/item/bike/bike-1.jpg'),
	bike2: require('../assets/images/item/bike/bike-2.jpg'),
	bike3: require('../assets/images/item/bike/bike-3.jpg'),
	bike4: require('../assets/images/item/bike/bike-4.jpg'),
	bike5: require('../assets/images/item/bike/bike-5.jpg'),
	bike6: require('../assets/images/item/bike/bike-6.jpg'),

}

export const ICONS = {
	user: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
	lock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C4.44772 12 4 12.4477 4 13V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V13C20 12.4477 19.5523 12 19 12H5ZM2 13C2 11.3431 3.34315 10 5 10H19C20.6569 10 22 11.3431 22 13V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V13Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V11C18 11.5523 17.5523 12 17 12C16.4477 12 16 11.5523 16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3Z" /></svg>`,
	eyeOpen: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8475 7.43335C23.6331 7.1411 18.5245 0.277466 11.9999 0.277466C5.47529 0.277466 0.366469 7.1411 0.152297 7.43307C-0.0507657 7.71032 -0.0507657 8.08637 0.152297 8.36362C0.366469 8.65587 5.47529 15.5195 11.9999 15.5195C18.5245 15.5195 23.6331 8.65582 23.8475 8.36386C24.0508 8.08665 24.0508 7.71032 23.8475 7.43335ZM11.9999 13.9427C7.19382 13.9427 3.03127 9.38722 1.79907 7.89795C3.02968 6.40737 7.18351 1.85422 11.9999 1.85422C16.8057 1.85422 20.968 6.40896 22.2007 7.89902C20.9701 9.38955 16.8162 13.9427 11.9999 13.9427Z" fill="#FE4487"/><path d="M11.9998 3.16821C9.38224 3.16821 7.25256 5.29005 7.25256 7.89801C7.25256 10.506 9.38224 12.6278 11.9998 12.6278C14.6174 12.6278 16.7471 10.506 16.7471 7.89801C16.7471 5.29005 14.6174 3.16821 11.9998 3.16821ZM11.9998 11.0512C10.2547 11.0512 8.83502 9.6367 8.83502 7.89801C8.83502 6.15932 10.2547 4.74484 11.9998 4.74484C13.7449 4.74484 15.1646 6.15932 15.1646 7.89801C15.1646 9.6367 13.745 11.0512 11.9998 11.0512Z" fill="#FE4487"/></svg>`,
	eyeClose: `<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8475 10.4333C23.6331 10.1411 18.5245 3.27747 11.9999 3.27747C5.47529 3.27747 0.366469 10.1411 0.152297 10.4331C-0.0507657 10.7103 -0.0507657 11.0864 0.152297 11.3636C0.366469 11.6559 5.47529 18.5195 11.9999 18.5195C18.5245 18.5195 23.6331 11.6558 23.8475 11.3639C24.0508 11.0866 24.0508 10.7103 23.8475 10.4333ZM11.9999 16.9427C7.19382 16.9427 3.03127 12.3872 1.79907 10.8979C3.02968 9.40737 7.18351 4.85422 11.9999 4.85422C16.8057 4.85422 20.968 9.40896 22.2007 10.899C20.9701 12.3896 16.8162 16.9427 11.9999 16.9427Z" fill="#FE4487"/><path d="M11.9998 6.16821C9.38224 6.16821 7.25256 8.29005 7.25256 10.898C7.25256 13.506 9.38224 15.6278 11.9998 15.6278C14.6174 15.6278 16.7471 13.506 16.7471 10.898C16.7471 8.29005 14.6174 6.16821 11.9998 6.16821ZM11.9998 14.0512C10.2547 14.0512 8.83502 12.6367 8.83502 10.898C8.83502 9.15932 10.2547 7.74484 11.9998 7.74484C13.7449 7.74484 15.1646 9.15932 15.1646 10.898C15.1646 12.6367 13.745 14.0512 11.9998 14.0512Z" fill="#FE4487"/><path d="M5 1L18.5 20" stroke="#FE4487" stroke-width="2"/></svg>`,
	closeOpen: `<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8475 10.4333C23.6331 10.1411 18.5245 3.27747 11.9999 3.27747C5.47529 3.27747 0.366469 10.1411 0.152297 10.4331C-0.0507657 10.7103 -0.0507657 11.0864 0.152297 11.3636C0.366469 11.6559 5.47529 18.5195 11.9999 18.5195C18.5245 18.5195 23.6331 11.6558 23.8475 11.3639C24.0508 11.0866 24.0508 10.7103 23.8475 10.4333ZM11.9999 16.9427C7.19382 16.9427 3.03127 12.3872 1.79907 10.8979C3.02968 9.40737 7.18351 4.85422 11.9999 4.85422C16.8057 4.85422 20.968 9.40896 22.2007 10.899C20.9701 12.3896 16.8162 16.9427 11.9999 16.9427Z" fill="#FE9063"/><path d="M11.9998 6.16821C9.38224 6.16821 7.25256 8.29005 7.25256 10.898C7.25256 13.506 9.38224 15.6278 11.9998 15.6278C14.6174 15.6278 16.7471 13.506 16.7471 10.898C16.7471 8.29005 14.6174 6.16821 11.9998 6.16821ZM11.9998 14.0512C10.2547 14.0512 8.83502 12.6367 8.83502 10.898C8.83502 9.15932 10.2547 7.74484 11.9998 7.74484C13.7449 7.74484 15.1646 9.15932 15.1646 10.898C15.1646 12.6367 13.745 14.0512 11.9998 14.0512Z" fill="#FE9063"/><path d="M5 1L18.5 20" stroke="#FE9063" stroke-width="2"/></svg>`,
	email: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 6L12 13L2 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
}

const appTheme = { COLORS, SIZES, FONTS, IMAGES }

export default appTheme;