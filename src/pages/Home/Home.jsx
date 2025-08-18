import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import img from "/bg.jpg";
import heartIcon from "/heart2.png";
import "./Home.scss";

const Home = () => {
	// TODO:
	const targetDate = new Date("2025-08-28T16:00:00");
	const [days, setDays] = useState("0");
	const [hours, setHours] = useState("0");
	const [minutes, setMinutes] = useState("0");
	const [seconds, setSeconds] = useState("0");

	useEffect(() => {
		let interval = setInterval(() => {
			const date = new Date();
			const dateDifference = targetDate - date;
			setDays(Math.floor(dateDifference / 1000 / 60 / 60 / 24));
			setHours(Math.floor((dateDifference / 1000 / 60 / 60) % 24));
			setMinutes(Math.floor((dateDifference / 1000 / 60) % 60));
			setSeconds(Math.floor((dateDifference / 1000) % 60));

			if (dateDifference <= 0) {
				clearInterval(interval);
				setDays(0);
				setHours(0);
				setMinutes(0);
				setSeconds(0);
				handleClick();
			}
		}, 1000);
	}, []);

	const handleClick = () => {
		const duration = 5 * 1000;
		const animationEnd = Date.now() + duration;
		const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

		const randomInRange = (min, max) => Math.random() * (max - min) + min;

		const interval = window.setInterval(() => {
			const timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(interval);
			}

			const particleCount = 50 * (timeLeft / duration);
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
			});
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
			});
		}, 250);
	};

	return (
		<main className="home">
			<div className="home__top">
				<h1 className="home__top-title">Андрій та Наталія</h1>
				<img className="home__top-img" src={img} alt="" />
			</div>

			<div className="date" id="date">
				<span>{days} днів</span>
				<span>{hours} годин(на)</span>
				<span>{minutes} хвилин(на)</span>
				<span>{seconds} секунд(а)</span>
			</div>
			<div>
				<p className="pepe">
					<span>Дорогі гості,</span>
					<br />
					Щиро запрошуємо вас на свято, присвячене створенню нашої сім'ї, яке
					відбудеться:
				</p>
			</div>
			<div className="calendar-wrapper">
				<p className="calendar-top">Серпень 2025</p>
				<div className="calendar">
					<div>Пн</div>
					<div>Вт</div>
					<div>Ср</div>
					<div>Чт</div>
					<div>Пт</div>
					<div>Сб</div>
					<div>Нд</div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
					<div>7</div>
					<div>8</div>
					<div>9</div>
					<div>10</div>
					<div>11</div>
					<div>12</div>
					<div>13</div>
					<div>14</div>
					<div>15</div>
					<div>16</div>
					<div>17</div>
					<div>18</div>
					<div>19</div>
					<div>20</div>
					<div>21</div>
					<div>22</div>
					<div>23</div>
					<div>24</div>
					<div>25</div>
					<div>26</div>
					<div>27</div>
					<div className="target-time">
						28 <img className="calendar-heart" src={heartIcon} alt="" />{" "}
					</div>
					<div>29</div>
					<div>30</div>
					<div>31</div>
				</div>
			</div>
			<p className="pepe">
				І ми не уявляємо цей радісний день без Вас - близьких і дорогих нам
				людей!
			</p>
			<div className="addresses">
				<div className="address">
					<p>Вінчання</p>
					<iframe
						className="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.8214000197636!2d13.530101612005327!3d50.156151508391744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a41402926cbe7%3A0xbb620047900bbb55!2sPravoslavn%C3%BD%20Monast%C3%BDr%20sv.%20Cyrila%20a%20Metod%C4%9Bje!5e1!3m2!1sen!2scz!4v1755459539998!5m2!1sen!2scz"
						// width="600"
						// height="450"
						// style="border:0;"
						// allowfullscreen=""
						loading="lazy"
						// referrerpolicy="no-referrer-when-downgrade"
					></iframe>
					<a
						className="address__link"
						href="https://maps.app.goo.gl/M459wEdgqjRBhLEe7"
						target="_blank"
					>
						Отримати маршрут
					</a>
				</div>
				<div className="address">
					<p>Бенкет</p>
					<iframe
						className="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5273.010388171266!2d14.422204873322281!3d50.08922209402551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95452691e2cf%3A0x27150a1da02a743b!2sDergi%20Praha!5e1!3m2!1sen!2scz!4v1755497626955!5m2!1sen!2scz"
						// width="600"
						// height="450"
						// style="border:0;"
						// allowfullscreen=""
						loading="lazy"
						// referrerpolicy="no-referrer-when-downgrade"
					></iframe>
					<a
						className="address__link"
						href="https://maps.app.goo.gl/nHWv2Fre1u7tGAru7"
						target="_blank"
					>
						Отримати маршрут
					</a>
				</div>
			</div>
		</main>
	);
};

export default Home;
