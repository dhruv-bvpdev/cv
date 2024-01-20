import { Inter } from 'next/font/google'

import Corizo from '../images/logos/corizo.png'
import selfEmp from '../images/logos/self-emp.png'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const ResumeData = {
  name: 'Dhruv Gursahani',
  email: 'dhruv.gursahani@hey.com',
  about: 'MBA Student',
  contact: {
    email: 'dhruv.gursahani@hey.com',
    tel: '+91-0000000000',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/dhruvgursahani/'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/dhruv_gursahani'
      }
    ]
  },
  education: [
    {
      school: 'FORE School of Management',
      degree: 'Master of Business Administration',
      start: '2022',
      end: '2024'
    },
    {
      school: 'Bharati Vidyapeeth Institute of Management and Research (BVIMR)',
      degree: 'Bachelor of Computer Applications',
      start: '2019',
      end: '2022'
    },
    {
      school: 'Bhatnagar International School',
      degree: 'Class XII (C.B.S.E)',
      start: '2018',
      end: '2019'
    },
    {
      school: 'Bhatnagar International School',
      degree: 'Class X (C.B.S.E)',
      start: '2016',
      end: '2017'
    }
  ],
  work: [
    {
      company: 'Corizo',
      title: 'Summer Intern',
      logo: Corizo,
      start: 'May 2023',
      end: 'Jun 2023'
    },
    {
      company: 'Self Employed',
      title: 'Free-Lance Web Developer',
      logo: selfEmp,
      start: '2021',
      end: '2022'
    }
  ]
} as const

const getResumeData = async () => {
  return ResumeData
}

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const resumeData = await getResumeData()

  return (
    <main className="container mx-auto p-6">
      <section className="w-full md:w-3/4 mx-auto bg-white p-6 space-y-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{resumeData.name}</h1>
            <p className="text-gray-500">
              MBA Student with a knack for technology
            </p>
          </div>

          <Avatar className="h-24 w-24">
            <AvatarImage alt={resumeData.name} src="/placeholder-avatar.jpg" />
            <AvatarFallback>BJ</AvatarFallback>
          </Avatar>
        </div>
        <section>
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <p className="text-gray-600">{resumeData.about}</p>
        </section>
        <section className="flex flex-col min-h-0 gap-y-5">
          <h2 className="text-xl font-bold my-2">Work Experience</h2>
          {resumeData.work.map(work => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <h3 className="text-lg font-semibold leading-none">
                    {work.company}
                  </h3>
                  <div className="text-gray-500 align-middle">
                    {work.start} - {work.end}
                  </div>
                </CardHeader>
                <CardContent className="mt-2">
                  <p className="text-gray-600">{work.title}</p>
                </CardContent>
              </Card>
            )
          })}
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Education</h2>
          {resumeData.education.map(education => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <h3 className="text-lg font-semibold">{education.school}</h3>
                  <p className="text-gray-500">
                    {education.degree}, {education.start} - {education.end}
                  </p>
                </CardHeader>
              </Card>
            )
          })}
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>JavaScript</Badge>
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>Angular</Badge>
            <Badge>Git</Badge>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <div className="flex flex-col gap-2">
            <Link className="text-blue-500 hover:underline" href="#">
              your-email@example.com
            </Link>
            <Link className="text-blue-500 hover:underline" href="#">
              +91-0000000000
            </Link>
            <Link className="text-blue-500 hover:underline" href="#">
              your-website.com
            </Link>
          </div>
        </section>
      </section>
    </main>
  )
}
