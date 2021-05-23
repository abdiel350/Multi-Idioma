import React from 'react';
import img from '../img/1.jpg';
import img1 from '../img/2.jpg';
import img2 from '../img/3.jpg';
import img3 from '../img/4.jpg';
import img4 from '../img/5.jpg';
import img5 from '../img/6.jpg';

const CardIMG = () => {
	return (
		<div className="grid">
			<div>
				<img src={img} alt=""/>
			</div>
			<div>
				<img src={img1} alt=""/>
			</div>
			<div>
				<img src={img2} alt="" />
			</div>
			<div>
				<img src={img3} alt="" />
			</div>
			<div>
				<img src={img4} alt="" />
			</div>
			<div>
				<img src={img5} alt="" />
			</div>
		</div>
	);
}
 
export default CardIMG;