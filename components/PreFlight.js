import React from 'react';
// import Link from 'next/link';
import Image from 'next/image';

export default function PreFlight() {
	return (
		<>
			<div className='container px-5 py-24 mx-auto flex flex-wrap'>
				<div className='flex flex-wrap w-full'>
					<div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 mb-10 mr-20'>
						<div className='flex relative pb-12'>
							<div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
								<div className='h-full w-1 bg-accent pointer-events-none'></div>
							</div>
							<div className='flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-base-300 relative z-10'>
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='3'
									className='w-5 h-5'
									viewBox='0 0 24 24'
								>
									<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
								</svg>
							</div>
							<div className='flex-grow pl-8'>
								<h2 className='font-medium title-font text-lg text-accent mb-1 tracking-wider'>
									CONCEPT DESIGN
								</h2>
								<p className='leading-relaxed text-semibold'>
									Sketches and/or page mock-ups are created that reflect the
									general appearance and the look and feel of the website for
									visitors. Once these are reviewed and approved web development
									will begin.
								</p>
							</div>
						</div>
						<div className='flex relative pb-12'>
							<div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
								<div className='h-full w-1 bg-accent pointer-events-none'></div>
							</div>
							<div className='flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-base-300 relative z-10'>
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='3'
									className='w-6 h-6'
									viewBox='0 0 24 24'
								>
									<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
								</svg>
							</div>
							<div className='flex-grow pl-8'>
								<h2 className='font-medium title-font text-lg text-accent mb-1 tracking-wider'>
									REVISION
								</h2>
								<p className='leading-relaxed text-semibold'>
									Primary website pages are revised in accordance with the
									review/feedback you provide. All site secondary pages are
									created.
								</p>
							</div>
						</div>
						<div className='flex relative pb-12'>
							<div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
								<div className='h-full w-1 bg-accent pointer-events-none'></div>
							</div>
							<div className='flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-base-300 relative z-10'>
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='3'
									className='w-6 h-6'
									viewBox='0 0 24 24'
								>
									<circle cx='12' cy='5' r='3'></circle>
									<path d='M12 22V8M5 12H2a10 10 0 0020 0h-3'></path>
								</svg>
							</div>
							<div className='flex-grow pl-8'>
								<h2 className='font-medium title-font text-lg text-accent mb-1 tracking-wider'>
									CREATION
								</h2>
								<p className='leading-relaxed text-semibold'>
									Primary site (i.e. top level) web pages are created to meet
									all the appearance, performance, and content requirements.
									These will be then reviewed by you, and you&apos; ll provide
									appropriate feedback for revision.
								</p>
							</div>
						</div>
						<div className='flex relative pb-12'>
							<div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
								<div className='h-full w-1 bg-accent pointer-events-none'></div>
							</div>
							<div className='flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-base-300 relative z-10'>
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='3'
									className='w-5 h-5'
									viewBox='0 0 24 24'
								>
									<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
									<circle cx='12' cy='7' r='4'></circle>
								</svg>
							</div>
							<div className='flex-grow pl-8'>
								<h2 className='font-medium title-font text-lg text-accent mb-1 tracking-wider'>
									REVIEW
								</h2>
								<p className='leading-relaxed text-semibold'>
									Web Site Review and Testing: The finished web site will be
									reviewed and all functional aspects tested (i.e. forms,
									carts).
								</p>
							</div>
						</div>
						<div className='flex relative'>
							<div className='flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-base-300 relative z-10'>
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='3'
									className='w-5 h-5'
									viewBox='0 0 24 24'
								>
									<path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
									<path d='M22 4L12 14.01l-3-3'></path>
								</svg>
							</div>
							<div className='flex-grow pl-8'>
								<h2 className='font-medium title-font text-xl text-accent mb-1 tracking-wider'>
									LAUNCH
								</h2>
								<p className='leading-relaxed text-semibold'>
									Once revisions and modifications resulting from reviews are
									complete, the web site will be uploaded and go live. After a
									successful one week trial period, the web site project will be
									considered complete.
								</p>
							</div>
						</div>
					</div>
					<div className='flex items-center justify-center w-full mt-6 ml-15lg:mt-0 lg:w-1/2'>
						<Image
							src='/2340423.jpg'
							width={650}
							height={550}
							alt='step'
							className='objec'
						/>
					</div>
				</div>
			</div>
		</>
	);
}