import React from 'react'
import AdviceCard from './AdviceCard'

type Props = {}

const DateAdviceSection = (props: Props) => {
  return (
    <section className='bg-gray-100 px-2 p-12 sm:px-8 lg:px-32'>
        <article className='w-full lg:w-2/3 mb-6'>
            <h1 className='text-3xl font-extrabold text-dark mb-4 text-center md:text-left'>Datign Advice For Singles</h1>
            <p className='text-dark text-center md:text-left'>
                Looking for love ? There is a dizzying amount of advice out there. You can overcome your obstacles.
                Finding the right person is just the beginning of the journey. In order to move from casual dating
                to a loving relationship, you need to keep that new connection. These tips can help put you on to 
                finding a healthy, loving relationship that last forever.
            </p>
        </article>
        <div className='grid gap-4 xl:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            <AdviceCard title="Golden rules for dating single girls" 
                        description='Looking to meet sigle girls ? dating in this day and date is not easy, especially if you are trying to find an ideal partner! of course.'
                        date={new Date().toDateString()}
                        image="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
            />
            <AdviceCard title="Golden rules for dating single girls" 
                        description='Looking to meet sigle girls ? dating in this day and date is not easy, especially if you are trying to find an ideal partner! of course.'
                        date={new Date().toDateString()}
                        image="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
            />
            <AdviceCard title="Golden rules for dating single girls" 
                        description='Looking to meet sigle girls ? dating in this day and date is not easy, especially if you are trying to find an ideal partner! of course.'
                        date={new Date().toDateString()}
                        image="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
            />
            <AdviceCard title="Golden rules for dating single girls" 
                        description='Looking to meet sigle girls ? dating in this day and date is not easy, especially if you are trying to find an ideal partner! of course.'
                        date={new Date().toDateString()}
                        image="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
            />
            <AdviceCard title="Golden rules for dating single girls" 
                        description='Looking to meet sigle girls ? dating in this day and date is not easy, especially if you are trying to find an ideal partner! of course.'
                        date={new Date().toDateString()}
                        image="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
            />
            <AdviceCard title="Golden rules for dating single girls" 
                        description='Looking to meet sigle girls ? dating in this day and date is not easy, especially if you are trying to find an ideal partner! of course.'
                        date={new Date().toDateString()}
                        image="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
            />
        </div>
    </section>
  )
}

export default DateAdviceSection