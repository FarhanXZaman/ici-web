import React from 'react'
import NavBar from '../components/NavBar'
import Teacher from '../components/Teacher'
import person1 from '/images/teacher1.jpg'
import person2 from '/images/teacher2.jpg'
import person3 from '/images/teacher3.jpg'

const details = [
  {
    photo: person1,
    about: "Farhan Zaman is an experienced Math and Physics teacher at Invictus Coaching Institute. With a strong academic background and a passion for teaching, he simplifies complex concepts and helps students excel in their O' and A' Level exams."
  },
  {
    photo: person2,
    about: "Khawaja Mohib Nawaz is our passionate Chemistry Instructor. With his engaging teaching style and clear explanations, he helps students master complex concepts, building both their academic success and interest in the subjects.",
  },
  {
    photo: person3,
    about: "Ahsan Badhon is a dedicated Chemistry and Physics teacher for junior students. His interactive approach and clear explanations make learning enjoyable and help students develop a strong foundation in science, ensuring their academic growth and success.",
  }
]

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className='h-auto m-4 mt-16 flex gap-6 items-start justify-center flex-col'>
        <h1 className='text-white text-4xl'>Unlock Your Academic Potential with </h1>
        <span className='text-6xl'>Invictus Coaching Institute</span>
        <span className='text-[17px] '>Expert Guidance for O' Level & A' Level Excellence</span>
        <a href="https://wa.me/+8801869148700?text=Hello%2C%20I%20need%20more%20information%20about%20your%20coaching%20services" target="_blank">
        <button className='bg-white text-black w-24 h-10 rounded-3xl'>Contact Us</button>
        </a>
      </div>
      <hr className='my-7' />
      <div className='flex justify-center items-center flex-col gap-6'>
        <h1 className='text-3xl'>Our Teachers</h1>
        <Teacher teacher={details[0].photo} desp={details[0].about}/>
        <Teacher teacher={details[1].photo} desp={details[1].about}/>
        <Teacher teacher={details[2].photo} desp={details[2].about}/>
      </div>
      <hr className='my-10' />
      <div className='flex justify-center items-center flex-col gap-6'>
        <h1 className='text-3xl'>About Us</h1>
        <div className='w-auto '>
        <p className='text-center font-bold'>Established in 2008 by Md Pavel, Invictus Coaching Institute has stood as a pillar of trust and academic excellence in Luxmibazar, Puran Dhaka. For over 17 years, we’ve been more than just a coaching center — we’ve been a second home for countless O' Level and A' Level students, guiding them through their most crucial academic years with care, dedication, and belief in their potential.At Invictus, we don’t just prepare students for exams — we build confidence, character, and a mindset for success.</p>
        </div>
      </div>
      <hr className='my-8' />
      <div className="rounded-xl p-4 overflow-hidden shadow-lg my-10">
      <p className='mb-4'>Location - 22, Shyama Prasad Chowdhury Lane, Luxmibazar, Dhaka - 1100, Bangladesh</p>

      <a
  href="https://maps.app.goo.gl/7snK5ekfP35Fywwy5"
  target="_blank"
  rel="noopener noreferrer"
><iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271.51787993807903!2d90.4149593051544!3d23.708315916201258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9aa2ce0f947%3A0xdf833e3e57ccdaf1!2sLokkhi%20Bazar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1745601379923!5m2!1sen!2sbd"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe></a>
</div>

    </div>
  )
}
