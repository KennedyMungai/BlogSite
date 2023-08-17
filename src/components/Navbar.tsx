import Link from 'next/link'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from 'react-icons/fa'

const Navbar = () => {
	return (
		<nav className='bg-slate-800 p-4 sticky top-0 drop-shadow-xl z-10'>
			<div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
				<h1 className='text-3xl font-bold text-white flex justify-center'>
					<Link
						href={'/'}
						className='text-white/90 no-underline hover:text-white'
					>
						John Mungai
					</Link>
				</h1>
				<div className='flex justify-center sm:justify-evenly align-middle gap-6 text-white text-2xl lg:text-5xl'>
					<Link
						href={'https://youtube.com/@KennedyMungai01'}
						className='text-white/90 hover:text-white'
					>
						<FaYoutube />
					</Link>
					<Link
						href={'https://github.com/KennedyMungai'}
						className='text-white/90 hover:text-white'
					>
						<FaGithub />
					</Link>
					<Link
						href={'https://twitter.com/KennedyMungai'}
						className='text-white/90 hover:text-white'
					>
						<FaTwitter />
					</Link>
					<Link
						href={'https://kennedymungai.com/portfolio'}
						className='text-white/90 hover:text-white'
					>
						<FaLaptop />
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
