import React, { useState } from 'react';
import Link from 'next/link';

const Item = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='border rounded shadow-sm'>
			<button
				type='button'
				aria-label='Open item'
				title='Open item'
				className='flex items-center justify-between w-full p-4 focus:outline-none'
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className='text-lg font-medium'>{title}</p>
				<div className='flex items-center justify-center w-8 h-8 border rounded-full'>
					<svg
						viewBox='0 0 24 24'
						className={`w-3 text-gray-600 transition-transform duration-200 ${
							isOpen ? 'transform rotate-180' : ''
						}`}
					>
						<polyline
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeMiterlimit='10'
							points='2,7 12,17 22,7'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</button>
			{isOpen && (
				<div className='p-4 pt-0'>
					<p className='text-gray-700'>{children}</p>
				</div>
			)}
		</div>
	);
};

export default function FAQ() {
	return (
		<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
			<div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
				<div className='flex flex-col mb-16 sm:text-center'>
					<Link href='/'>
						<a className='mb-6 sm:mx-auto'>
							<div className='flex items-center justify-center w-12 h-12 rounded-full'>
								<svg
									className='w-12 h-12 text-fuchsia-500'
									stroke='currentColor'
									viewBox='0 0 52 52'
								>
									<polygon
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										fill='none'
										points='29 13 14 29 25 29 23 39 38 23 27 23'
									/>
								</svg>
							</div>
						</a>
					</Link>
					<div className='max-w-xl md:mx-auto sm:text-center lg:max-w-2xl'>
						<h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-accent sm:text-4xl md:mx-auto'>
							<span className='relative inline-block'>
								<svg
									viewBox='0 0 52 24'
									fill='currentColor'
									className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20  lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
								>
									<defs>
										<pattern
											id='ec5d8ef5-b853-4714-b94f-df28ec98eeb7'
											x='0'
											y='0'
											width='.135'
											height='.30'
										>
											<circle cx='1' cy='1' r='.7' />
										</pattern>
									</defs>
									<rect
										fill='url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)'
										width='52'
										height='24'
                                        
									/>
								</svg>
								<span className='relative'>Most</span>
							</span>{' '}
							Commonly Asked Questions
						</h2>
						<p className='text-base text-slate-300 md:text-xl'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque rem aperiam, eaque ipsa quae.
						</p>
					</div>
				</div>
				<div className='space-y-4 hover'>
					<Item title='What are your Prices?'>
						<p className='text-accent'>Quos non ex quisquam aliquam. 
                            Sed omnis laborum distinctio praesentium aspernatur doloremque molestiae. Eos consequatur ipsa iure ipsam ipsam tempore.</p>
					</Item>
					<Item title='What happens after the site is up?'>
                    <p className='text-accent'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque rem aperiam, eaque ipsa quae.
                        Non ea est sapiente accusamus voluptate et quam ut quo. Consectetur quam nihil esse perferendis quibusdam dolor explicabo officia impedit.
                        Iusto tempora vero dignissimos qui delectus aut voluptas aliquid. Odio id debitis doloremque distinctio hic.</p>
					</Item>
					<Item title='What if I already have a Website?'>
                    <p className='text-accent'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque rem aperiam, eaque ipsa quae.
                        Consectetur quam nihil esse perferendis quibusdam dolor explicabo officia impedit.</p>
					</Item>
					<Item title='Where can I get more Info?'>
                    <p className='text-accent'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque rem aperiam, eaque ipsa quae.
                        Consectetur quam nihil esse perferendis quibusdam dolor explicabo officia impedit.</p>
                    </Item> 
				</div>
			</div>
		</div>
	);
}