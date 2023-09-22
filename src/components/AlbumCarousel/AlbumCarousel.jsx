import React, { useState } from "react";
import "./AlbumCarousel.css";

const AlbumCarousel = () => {
	const artwork = [
		{
			url: "https://f4.bcbits.com/img/a2100598597_2.jpg",
			name: "Intern",
		},
		{
			url: "https://f4.bcbits.com/img/a1675134041_2.jpg",
			name: "Swam",
		},
		{
			url: "https://f4.bcbits.com/img/a0627224211_2.jpg",
			name: "Andrew Smith",
		},
		{
			url: "https://f4.bcbits.com/img/a3481406581_2.jpg",
			name: "Mild Manors",
		},
		{
			url: "https://f4.bcbits.com/img/a0850957949_2.jpg",
			name: "Gallery",
		},
		{
			url: "https://f4.bcbits.com/img/a2753234509_2.jpg",
			name: "Real Tree",
		},
		{
			url: "https://f4.bcbits.com/img/a1209491437_2.jpg",
			name: "Bugfight",
		},
		{
			url: "https://f4.bcbits.com/img/a1564188441_2.jpg",
			name: "Bap",
		},
		{
			url: "https://f4.bcbits.com/img/a2161299333_2.jpg",
			name: "Hollow Grave",
		},
		{
			url: "https://f4.bcbits.com/img/a2732255997_2.jpg",
			name: "Lrning",
		},
		{
			url: "https://f4.bcbits.com/img/a3966229126_2.jpg",
			name: "Already Dead",
		},
		{
			url: "https://f4.bcbits.com/img/a1497488945_2.jpg",
			name: "El Toro",
		},
		{
			url: "https://f4.bcbits.com/img/a2692663087_2.jpg",
			name: "Monroe",
		},
		{
			url: "https://f4.bcbits.com/img/a1034879150_2.jpg",
			name: "Kerosene",
		},
		{
			url: "https://f4.bcbits.com/img/a3857910752_2.jpg",
			name: "Tea-Pose",
		},
		{
			url: "https://f4.bcbits.com/img/a3571539140_2.jpg",
			name: "Already Dead",
		},
		{
			url: "https://f4.bcbits.com/img/a3736869134_2.jpg",
			name: "Already Dead",
		},
		{
			url: "https://f4.bcbits.com/img/a0080315193_2.jpg",
			name: "Already Dead",
		},
		{
			url: "https://f4.bcbits.com/img/a3643250858_2.jpg",
			name: "Monroe",
		},
		{
			url: "https://f4.bcbits.com/img/a2832355784_2.jpg",
			name: "Monroe",
		},
		{
			url: "https://f4.bcbits.com/img/a2606961355_2.jpg",
			name: "Already Dead",
		},
		{
			url: "https://f4.bcbits.com/img/a3431981979_2.jpg",
			name: "Already Dead",
		},
		{
			url: "https://f4.bcbits.com/img/a2614224951_2.jpg",
			name: "Intern",
		},
	];

	return (
		<div>
			<div
				className="album-carousel mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"
				onClick={(e) => {
					setScroll(!active);
				}}
			>
				{artwork.map((album) => (
					<div key={album.name} className="album-carousel__album">
						<img src={album.url} alt={album.name} />
						<p className="album-carousel__album-name">{album.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AlbumCarousel;
