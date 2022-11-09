import './globals.css';
import NavLink from './NavLink'

/**
 * !By default next_13 renders it's components on the server
 * ?in order to run code on the client 
 */

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
    }) {
    
	return (
		<html lang='en'>
			<head>
				<title>Nested layouts</title>
			</head>

			<body>
				<header>
					<nav>
                        <NavLink href='/'>Home</NavLink>
						<NavLink href='/movies'>Movies</NavLink>
					</nav>
                </header>
                
                {children}
                
			</body>
		</html>
	);
}
