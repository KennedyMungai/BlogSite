import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className='bg-slate-800 p-4 sticky top-0 drop-shadow-xl z-10'>
			<div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
				<Link
					href={'/'}
					className='text-white/90 no-underline hover:text-white'
				>
					John Mungai
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
