import Image from 'next/image'

type Props = {}

const MyProfilePic = (props: Props) => {
	return (
		<section className='w-full mx-auto'>
			<Image
				className='border-4 border-black dark:border-slate-700 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
				src={'/images/HoneyBadger.jpg'}
				width={'200'}
				height={'200'}
				alt='Profile Pic'
				loading='lazy'
			></Image>
		</section>
	)
}

export default MyProfilePic
