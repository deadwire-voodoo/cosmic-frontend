import react from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className='border border-slate-800'>
            <footer className='footer bg-primary p-10 text-base'>
                <div className='mt-6 ml-6 flex flex-col items-center justify-between pl-4'>
                    <Image
                        src='/planet.png'
                        alt='cosmic dev logo'
                        width='75'
                        height='75'
                    ></Image>
                    <p className='mt-2 text-4xl font-bold font-mono text-slate-800'>cosmic.dev</p>
                </div>
                <div>
                    <span className='footer-title text-2xl text-purple-900'>Services</span>
                    <Link href=''>
                        <a className='link link-hover text-xl font-bold font-mono text-slate-800'>Design</a>
                    </Link>
                    <Link href=''>
                        <a className='link link-hover text-xl font-bold font-mono text-slate-800'>Development</a>
                    </Link>
                    <a className='link link-hover text-xl font-bold font-mono text-slate-800'>Social</a>
                    <Link href=''>
                        <a className='link link-hover text-xl font-bold font-mono text-slate-800'>Marketing</a>
                    </Link>
                </div>
                <div>
                    <span className='footer-title text-2xl text-purple-900'>Company</span>
                    <Link href=''>
                        <a className='link link-hover text-xl font-bold font-mono text-slate-800'>About</a>
                    </Link>
                    <Link href=''>
                        <a className='link link-hover text-xl font-bold font-mono text-slate-800'>Contact</a>
                    </Link>
                    <Link href=''>
                        <a className='link link-hover text-xl font-bold font-mono text-slate-800'>Jobs</a>
                    </Link>
                    <Link href=''>
                        <a className='link link-hover text-xl font-bold font-mono text-slate-800'>Press Kit</a>
                    </Link>
                </div>
                <div>
                    <span className='footer-title text-2xl text-purple-900'>Legal</span>
                    <Link href=''>
                        <a className='link link-hover text-xl font-bold font-mono text-slate-800'>Terms of Use</a>
                    </Link>
                    <Link href=''>
                        <a className='link link-hover text-xl font-bold font-mono text-slate-800'>Privacy Policy</a>
                    </Link>
                    <Link href=''>
                        <a className='link link-hover text-xl font-bold font-mono text-slate-800'>Cookie Policy</a>
                    </Link>
                </div>
            </footer>
        </div>
    );
}
