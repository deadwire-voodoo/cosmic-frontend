import React from 'react';
import Link from 'next/link';

export default function InfoCards() {
	return (
		<>
			<section className='px-10 py-16'>
				<div className='container border-violet-900 border-4 rounded-3xl mx-auto '>
					<div className='shadow-2xl shadow-slate-900 p-10'>
						<div className='text-center mb-10'>
							<h1 className='sm:text-3xl text-xl font-medium title-font text-white p-2 mb-5'>
								Web Design & Development Studio
								<h2 className='sm:text-xl text-xl font-medium title-font text-white p-2 mb-5'>
									From conceptualization to launch
								</h2>
							</h1>

							<p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 p-2 mx-auto text-gray-400 text-opacity-80'>
								Our Website Design & Development services focus on what matters
								most to your business. We combine a Mobile-First and Intelligent
								User Experience Design, with technical and marketing know-how to
								build responsive dynamic products that increase Visibility,
								Engagement and Revenue.
							</p>
							<div className='flex mt-6 mb-6 p-3 justify-center'>
								<div className='w-16 h-1 p-1 rounded-full bg-success inline-flex'></div>
							</div>
						</div>

						<div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
							<div className='p-4 md:w-1/3 text-center items-center'>
								<div className='flex rounded-xl h-full bg-gray-800 bg-opacity-60 p-8 flex-col'>
									<div className='flex items-center justify-center mb-3'>
										<div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-10 h-10'
												viewBox='0 0 24 24'
											>
												<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
											</svg>
										</div>
									</div>
									<div className='flex-grow text-center'>
										<h2 className='text-white text-lg title-font font-medium mb-3'>
											Web Design
										</h2>
										<p className='leading-relaxed text-base'>
											Your website is often your first impression to a client.
											It is a digital storefront, and the same principles apply:
											the design needs to attract customers, communicate a
											message about your brand, be navigable for their needs,
											and demonstrate responsiveness to interest. In the digital
											age, a quality website drives sales.
										</p>
										<a className='mt-3 text-indigo-400 inline-flex items-center'>
											Learn More
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-4 h-4 ml-2'
												viewBox='0 0 24 24'
											>
												<path d='M5 12h14M12 5l7 7-7 7'></path>
											</svg>
										</a>
									</div>
									<div className='flex flex-col items-center justify-center px-2 py-8'>
										<div className='flex flex-col items-center justify-center px-2 py-8 space-y-4'>
											<h2 className='font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left'>
												THE 400 BLOWS
											</h2>
											<nav className='flex flex-col sm:items-start sm:text-left text-center items-left -mb-1 space-y-2.5'>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													Responsive Mobile-First Designs
												</a>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													Website redesign and updates
												</a>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													Graphic Design & Asset Creation
												</a>
												<Link href='https://www.w3.org/WAI/standards-guidelines/wcag/'>
													<a>
														<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
															<svg
																fill='none'
																stroke='currentColor'
																strokeLinecap='round'
																strokeLinejoin='round'
																strokeWidth='3'
																className='w-10 h-4'
																viewBox='0 0 24 24'
															>
																<path d='M20 6L9 17l-5-5'></path>
															</svg>
														</span>
														Web Accessibility Compliant
													</a>
												</Link>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													Content & Article Copywrite
												</a>
											</nav>
										</div>
									</div>
								</div>
							</div>

							<div className='p-4 md:w-1/3 text-center items-center'>
								<div className='flex rounded-xl h-full bg-gray-800 bg-opacity-60 p-8 flex-col'>
									<div className='flex items-center justify-center mb-3'>
										<div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-10 h-10'
												viewBox='0 0 24 24'
											>
												<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
											</svg>
										</div>
									</div>
									<div className='flex-grow'>
										<h2 className='text-white text-lg title-font font-medium mb-3'>
											Web Development
										</h2>
										<p className='leading-relaxed text-base'>
											Web development is as important as the design Each website
											is coded to our client&apos;s design and needs, making it
											a completely custom website development. Every client is
											unique. From custom, e-commerce sites, B2B, informational
											sites and everything in between, no matter your needs
											we&apos;ll create a customized solution specifically for
											you.
										</p>
										<a className='mt-3 text-indigo-400 inline-flex items-center'>
											Learn More
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-4 h-4 ml-2'
												viewBox='0 0 24 24'
											>
												<path d='M5 12h14M12 5l7 7-7 7'></path>
											</svg>
										</a>
									</div>
									<div className='flex flex-col items-center justify-center px-2 py-8'>
										<div className='flex flex-col items-center justify-center px-2 py-8 space-y-4'>
											<h2 className='font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left'>
												Full Stack Development Services
											</h2>
											<nav className='flex flex-col sm:items-start sm:text-left text-center items-left -mb-1 space-y-2.5'>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													In-House Custom Website Development
												</a>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													Mobile and Progressive Web Apps
												</a>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													E-commerce and Payment Processors
												</a>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													Custom API and CMS
												</a>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													Website Management Services
												</a>
											</nav>
										</div>
									</div>
								</div>
							</div>

							<div className='p-4 md:w-1/3 text-center items-center'>
								<div className='flex rounded-xl h-full bg-gray-800 bg-opacity-60 p-8 flex-col'>
									<div className='flex items-center justify-center mb-3'>
										<div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-10 h-10'
												viewBox='0 0 24 24'
											>
												<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
											</svg>
										</div>
									</div>
									<div className='flex-grow'>
										<h2 className='text-white text-lg title-font font-medium mb-3'>
											Digital Strategies
										</h2>
										<p className='leading-relaxed text-base'>
											Establishing a community around your brand and developing
											important relationships with your customers A powerful
											tool of communication, social media allows companies to
											reach their customers where they are, while also
											characterizing their brands and expanding their customer
											base.
										</p>
										<a className='mt-3 text-indigo-400 inline-flex items-center'>
											Learn More
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-4 h-4 ml-2'
												viewBox='0 0 24 24'
											>
												<path d='M5 12h14M12 5l7 7-7 7'></path>
											</svg>
										</a>
									</div>
									<div className='flex flex-col items-center justify-center px-2 py-8'>
										<div className='flex flex-col items-center justify-center px-2 py-8 space-y-4'>
											<h2 className='font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left'>
												Blueprint For Your Digital Success
											</h2>
											<nav className='flex flex-col sm:items-start sm:text-left text-center items-left -mb-1 space-y-2.5'>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													Social Media Management
												</a>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													Digital Marketing Solutions
												</a>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													Search Engine Optimization
												</a>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													Online Lead Generation
												</a>
												<a>
													<span className='bg-indigo-100 text-indigo-500 w-4 h-4 mr-4 rounded-full inline-flex items-center justify-center'>
														<svg
															fill='none'
															stroke='currentColor'
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='3'
															className='w-10 h-4'
															viewBox='0 0 24 24'
														>
															<path d='M20 6L9 17l-5-5'></path>
														</svg>
													</span>
													Digital Presence Audit
												</a>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}