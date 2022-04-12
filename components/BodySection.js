import Image from "next/image"


export default function BodySection() {
    return (
        <>
            <div className='container 
                            justify-center 
                            items-center 
                            flex 
                            flex-col
                            mx-auto'>
                <div className='flex-col items-center justify-center m-4 p-4'>
                    <div className='mb-6 mt-6 border border-slate-500 rounded-xl shadow-md shadow-slate-700'>
                        <div className='grid grid-flow-col gap-4 items-center justify-between p-6'>
                            <button className='btn btn-lg m-6 rounded-xl btn-base border border-primary hover:shadow-lg hover:shadow-accent'>Base</button>
                            <button className='btn btn-lg m-6 rounded-xl btn-primary border hover:shadow-lg hover:shadow-accent'>Primary</button>
                            <button className='btn btn-lg m-6 rounded-xl btn-secondary border hover:shadow-lg hover:shadow-accent'>Secondary</button>
                            <button className='btn btn-lg m-6 rounded-xl btn-accent border hover:shadow-lg hover:shadow-accent'>Accent</button>
                        </div>
                    </div>
                    <div className='mb-6 mt-6 border border-slate-500 rounded-xl shadow-md shadow-slate-700'>
                        <div className='grid grid-flow-col gap-4 items-center justify-between p-8'>
                            <div className='tooltip tooltip-neutral' data-tip='neutral'>
                                <div className='badge badge-outline'>neutral</div>
                            </div>
                            <div className='tooltip tooltip-primary' data-tip='primary'>
                                <div className='badge badge-primary badge-outline'>primary</div>
                            </div>
                            <div className='tooltip tooltip-secondary' data-tip='secondary'>
                                <div className='badge badge-secondary badge-outline'>secondary</div>
                            </div>
                            <div className='tooltip tooltip-accent' data-tip='accent'>
                                <div className='badge badge-accent badge-outline'>accent</div>
                            </div>
                            <div className='tooltip tooltip-ghost' data-tip='ghost'>
                                <div className='badge badge-ghost badge-outline'>ghost</div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-6 mt-6 border border-slate-500 rounded-xl shadow-md shadow-slate-700'>
                        <div className='grid grid-flow-col gap-4 items-center justify-between p-8'>
                            <Image className='mask mask-circle' alt='sneaker mask with outline' height='160' width='160' src='/5430284.jpg' />
                            <Image className='mask mask-hexagon-2' alt='sneaker mask with outline' height='160' width='160' src='/2340423.jpg' />
                            <Image className='mask mask-pentagon' alt='sneaker mask with outline' height='160' width='160' src='/2316611.jpg' />
                            <Image className='mask mask-squircle' alt='sneaker mask with outline' height='160' width='160' src='/cosmic-bear.jpg' />
                            <Image className='mask mask-parallelogram-3' alt='sneaker mask with outline' height='160' width='160' src='/duotone.jpg' />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}