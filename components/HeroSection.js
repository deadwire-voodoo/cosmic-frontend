import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() { 
    return (
        <>
            <div className='relative h-screen overflow-hidden'>
                <Image
                src='/../public/5430284.jpg'
                alt='picture'
                layout='fill'
                className='absolute h-full w-full object-cover'
                />
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <header className='absolute justify-center left-0 right-0 z-20'></header>
                    <div className='container
                                    relative 
                                    z-10 
                                    mx-auto 
                                    my-24 
                                    flex w-4/5 
                                    items-center 
                                    rounded-xl 
                                    border-2 
                                    border-slate-800
                                    shadow-md
                                    shadow-slate-900
                                    py-16
                                    backdrop-brightness-125
                                    md:my-32'
                                    >
                        <div className='relative z-10 flex w-full flex-col items-center font-mono justify-between '>
                            <p className='flex flex-col items-center text-center text-6xl p-8 font-bold font-mono text-slate-300 break-words md:text-8xl'>
                            Cosmic Development
                            </p>
                            <p className='mt-6 flex max-w-lg flex-col items-center text-center text-6xl p-4 font-extrabold font-mono text-slate-300'>
                            Web + Mobile Apps, SasS, Social Media <br />
                            Design, Marketing
                            </p>
                            <a
                            href='#'
                            className='mt-10 
                                    block 
                                    rounded-lg 
                                    bg-primary 
                                    py-4 
                                    px-6 
                                    text-lg 
                                    font-bold 
                                    font-mono 
                                    uppercase 
                                    text-slate-00 
                                    hover:bg-gray-900'
                            >
                            Contact Us
                            </a>
                    </div>
                </div>
            </div>
        </>
    );
}

/*<div classNameNameName='hero min-h-screen bg-base mt-4 mb-6'>
                <div classNameNameName='hero-contentcontainer flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
                    <div>
                    <Image src='/spaceShuttle.png' alt='stock illustration' height='750' width='850' classNameNameName='object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128' />
                    </div>
                    <div classNameNameName='flex flex-col justify-center items-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
                        <h1 classNameNameName='text-5xl text-center sm:text-left text-primary font-bold'>
                            Blast Off With<br /> Cosmic Development!
                        </h1>
                        <p classNameNameName='text-3xl sm:text-left text-center font-bold mt-4 sm:mb-12'>
                            We&apos;re a One-Stop Shop <br /> for Custom Digital Solutions.
                        </p>
                        <p classNameNameName='text-xl sm:text-left text-center font-bold ml-4 -mt-6 mb-6'>
                            From Web + Mobile Apps, SasS, Social Media, <br />Design, Marketing <br /> - We&apos;ve Got You Covered
                        </p>

                        <Link href='https://www.linkedin.com/in/chris-hunter-505885163/'>
                            <a>
                                <button classNameNameName='btn btn-accent border-2 border-slate-800 rounded-2xl shadow-xl shadow-grey-300'>LinkedIn</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>*/
