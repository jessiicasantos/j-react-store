import { logoFooter, linksFooter, allRights } from "../data.json";
import { Link } from "react-router-dom";
import { navigation, socials } from "../data.json";

const Footer = () => {
	return (
		<footer>
			<div>
				<div className="left">
					{logoFooter.map((l: any, i: number) => (
						<div key={`logo-${i}`}>
							<Link to="https://flowbite.com">
								<img src={l.src} alt={l.alt} />
								<span>{l.text}</span>
							</Link>
						</div>
					))}
					<div className="center">
						<ul>
							{navigation.map((n: any, i: number) => (
								<li key={`link-${i}`}>
									{!n.children && (
										<Link to={n.href}>{n.name}</Link>

									)}
								</li>
							))}
						</ul>
					</div>
				</div>
				<hr />
				<div className="right">
					<span>{allRights.date} <Link to={allRights.href}>{allRights.company}</Link>. {allRights.text}
					</span>
					<div>
						{socials.map((s: any, i: number) => (
							<Link key={`s-${i}`} to={s.href} target="_blank">
								<img src={s.svg} alt="" width={30} height={30} />
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;