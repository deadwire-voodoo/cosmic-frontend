import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
	return (
		<>
			<div className='navbar bg-gradient-to-r from-violet-600 to-fuchsia-400 shadow-lg shadow-zinc-800 rounded-lg'>
				<div className='flex justify-center flex-1'>
					<ul className='items-stretch hidden space-x-3 md:flex'>
						<li>
							<Link href='/'>
								<a className='text-neutral text-2xl font-mono font-bold m-6'>Home</a>
							</Link>
						</li>
						<li>
							<Link href='/'>
								<a className='text-neutral text-2xl font-mono font-bold m-8'>About</a>
							</Link>
						</li>
					</ul>
					<Link href='/'>
						<a>
							<Image
								src='/planet.png'
								alt='cosmic.dev logo'
								width='90'
								height='90'
							/>
						</a>
					</Link>
					<div className='dropdown 
                        dropdown-hover 
                        hover:border-4 
                        hover:border-accent 
                        hover:rounded-xl 
                        ml-8'
                    >
						<label 
                            tabIndex='0' 
                            className='btn 
                            bg-gradient-to-r from-cyan-500 to-indigo-400 
                                    text-neutral 
                                    text-mono 
                                    shadow-md 
                                    shadow-slate-800 
                                    btn-md 
                                    font-mono 
                                    font-bold 
                                    text-lg'
                                >
							Services
						</label>
						<ul
							tabIndex='0'
							className='dropdown-content 
                                    menu 
                                    p-2 
                                    shadow-md
                                    text-neutral
                                    text-mono
                                    shadow-gray-700
                                    bg-accent
                                    rounded-box 
                                    w-52'
						>
							<li>
								<Link href='/'>
									<a className='text-black font-monop text-xl'>
										Web/Brand Design
									</a>
								</Link>
							</li>
							<li>
								<Link href='/'>
									<a className='text-black font-monop text-xl'>
										Web/Mobile Development
									</a>
								</Link>
							</li>
							<li>
								<Link href='/'>
									<a className='text-black font-monop text-xl'>
										Social Media/Marketing
									</a>
								</Link>
							</li>
							<li>
								<Link href='/'>
									<a className='text-black font-monop text-xl'>
										SEO/Brand Optimization
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<ul className='items-stretch hidden space-x-3 md:flex ml-8'>
						<li>
							<Link href='/'>
								<a className='text-neutral font-mono font-bold text-2xl '>Contact</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}