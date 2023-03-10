const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-md">
				<a className="navbar-brand">
					<img className="signature" src={`${process.env.PUBLIC_URL}/images/signature.jpeg`} alt="" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item me-4">
							<a className="nav-link" href="#Skills">
								My Skills
							</a>
						</li>
						<li className="nav-item me-4">
							<a className="nav-link" href="#Projects">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#Contact">
								Contact Me
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
