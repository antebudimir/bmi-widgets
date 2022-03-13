let gaugeOptions = {
	isInnerNumbers: false,
	aperture: 180,
	radius: 125,
	tickOffset: 10,
	arcStrokeWidth: 20,
	miniTickLength: 0,
	miniTickStrokeWidth: 0,
	centralCircleRadius: 10,
	marks: [
		'0',
		null,
		null,
		null,
		'40',
		null,
		null,
		null,
		'80',
		null,
		null,
		null,
		'120',
	],
	contentWidth: 360,
	svgContainerWidth: 360,
	svgContainerHeight: 200,
	arrowColor: '#354357',
	gaugeCenterLineHeight: 180,
	ranges: [
		{
			start: 0,
			end: 39 / 120,
			color: '#f3595b',
		},
		{
			start: 40 / 120,
			end: 79 / 120,
			color: '#30cc90',
		},
		{
			start: 80 / 120,
			end: 120 / 120,
			color: '#f3595b',
		},
	],
};

export default gaugeOptions;
