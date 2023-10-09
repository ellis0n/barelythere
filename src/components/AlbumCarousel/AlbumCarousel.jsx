import "./AlbumCarousel.css";

const AlbumCarousel = () => {
	const artwork = [
		{
			id: "btr-001",
			url: "https://f4.bcbits.com/img/a2100598597_2.jpg",
			name: "Intern",
		},
		{
			id: "btr-002",
			url: "https://f4.bcbits.com/img/a1675134041_2.jpg",
			name: "Swam",
		},
		{
			id: "btr-003",
			url: "https://f4.bcbits.com/img/a0627224211_2.jpg",
			name: "Andrew Smith",
		},
		{
			id: "btr-004",
			url: "https://f4.bcbits.com/img/a3481406581_2.jpg",
			name: "Mild Manors",
		},
		{
			id: "btr-005",
			url: "https://f4.bcbits.com/img/a0850957949_2.jpg",
			name: "Gallery",
		},
		{
			id: "btr-006",
			url: "https://f4.bcbits.com/img/a2753234509_2.jpg",
			name: "Real Tree",
		},
		{
			id: "btr-007",
			url: "https://f4.bcbits.com/img/a1209491437_2.jpg",
			name: "Bugfight",
		},
		{
			id: "btr-008",
			url: "https://f4.bcbits.com/img/a1564188441_2.jpg",
			name: "Bap",
		},
		{
			id: "btr-009",
			url: "https://f4.bcbits.com/img/a2161299333_2.jpg",
			name: "Hollow Grave",
		},
		{
			id: "btr-010",
			url: "https://f4.bcbits.com/img/a2732255997_2.jpg",
			name: "Lrning",
		},
		{
			id: "btr-011",
			url: "https://f4.bcbits.com/img/a3966229126_2.jpg",
			name: "Already Dead",
		},
		{
			id: "btr-012",
			url: "https://f4.bcbits.com/img/a1497488945_2.jpg",
			name: "El Toro",
		},
		{
			id: "btr-013",
			url: "https://f4.bcbits.com/img/a2692663087_2.jpg",
			name: "Monroe",
		},
		{
			id: "btr-014",
			url: "https://f4.bcbits.com/img/a1034879150_2.jpg",
			name: "Kerosene",
		},
		{
			id: "btr-015",
			url: "https://f4.bcbits.com/img/a3857910752_2.jpg",
			name: "Tea-Pose",
		},
		{
			id: "btr-016",
			url: "https://f4.bcbits.com/img/a3571539140_2.jpg",
			name: "Already Dead",
		},
		{
			id: "btr-017",
			url: "https://f4.bcbits.com/img/a3736869134_2.jpg",
			name: "Already Dead",
		},
		{
			id: "btr-018",
			url: "https://f4.bcbits.com/img/a0080315193_2.jpg",
			name: "Already Dead",
		},
		{
			id: "btr-019",
			url: "https://f4.bcbits.com/img/a3643250858_2.jpg",
			name: "Monroe",
		},
		{
			id: "btr-020",
			url: "https://f4.bcbits.com/img/a2832355784_2.jpg",
			name: "Monroe",
		},
		{
			id: "btr-021",
			url: "https://f4.bcbits.com/img/a2606961355_2.jpg",
			name: "Already Dead",
		},
		{
			id: "btr-022",
			url: "https://f4.bcbits.com/img/a3431981979_2.jpg",
			name: "Already Dead",
		},
		{
			id: "btr-023",
			url: "https://f4.bcbits.com/img/a2614224951_2.jpg",
			name: "Intern",
		},
	];

	return (
		<div
			className="album-carousel pb-12 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"
			onClick={(e) => {
				setScroll(!active);
			}}
		>
			{artwork.map((album) => (
				<a href={`/releases/${album.id}`}>
					<div key={album.name}>
						<img src={album.url} alt={album.name} />
						<p>{album.name}</p>
					</div>
				</a>
			))}
		</div>
	);
};

export default AlbumCarousel;
