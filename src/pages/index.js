import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image';
import Televisor from '@/img/televisor.png'
import { register } from 'swiper/element/bundle'
register();

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>

      <Layout>
        <div className='font-basic flex gap-[42px]'>
          <div className='flex flex-col items-center max-w-[570px] border-base border-solid border-[1px] rounded-lg shadow py-6 text-center'>
            <p className='text-3xl'>Горячие скидки</p>
            <hr className='w-[300px] h-[7px] rounded bg-base my-2' />
            <div className='max-w-[570px] ' >
              <swiper-container
                slides-per-view="1"
                navigation="true"
                pagination='true'
                loop='true'
              >
                <swiper-slide><Image src={Televisor} width={200} quality={100} height={200}/></swiper-slide>
                <swiper-slide><Image src={Televisor} width={200} height={200}/></swiper-slide>
                <swiper-slide><Image src={Televisor} width={200} height={200}/></swiper-slide>
                <swiper-slide><Image src={Televisor} width={200} height={200}/></swiper-slide>
                <swiper-slide><Image src={Televisor} width={200} height={200}/></swiper-slide>
                <swiper-slide><Image src={Televisor} width={200} height={200}/></swiper-slide>
                
              </swiper-container>
            </div>
          </div>
          <div className='flex flex-col items-center max-w-[570px] border-base border-solid border-[1px] rounded-lg shadow py-6 text-center'>
            <p className='text-3xl'>Горячие скидки</p>
            <hr className='w-[300px] h-[7px] rounded bg-base my-2' />
            <div className='max-w-[570px] ' >
              <swiper-container
                slides-per-view="1"
                navigation="true"
                pagination='true'
                loop='true'
              >
                <swiper-slide><Image src={Televisor} width={200} quality={100} height={200}/></swiper-slide>
                <swiper-slide><Image src={Televisor} width={200} height={200}/></swiper-slide>
                <swiper-slide><Image src={Televisor} width={200} height={200}/></swiper-slide>
                <swiper-slide><Image src={Televisor} width={200} height={200}/></swiper-slide>
                <swiper-slide><Image src={Televisor} width={200} height={200}/></swiper-slide>
                <swiper-slide><Image src={Televisor} width={200} height={200}/></swiper-slide>
                
              </swiper-container>
            </div>
          </div>
         
        </div>
        <h1>Hello</h1>
      </Layout>
    </>
  )
}
