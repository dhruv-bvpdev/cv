import Corizo from '../images/logos/corizo.png'
import selfEmp from '../images/logos/self-emp.png'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Card, CardHeader, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { CommandMenu } from '../components/command-menu'

const ResumeData = {
  name: 'Dhruv Gursahani',
  initials: 'DG',
  about: 'MBA Student',
  summary:
    ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  avatarUrl: '',
  personalWebsiteUrl: 'https://dhruvgursahani.vercel.app',
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
      end: 'Jun 2023',
      description: 'XYZ'
    },
    {
      company: 'Self Employed',
      title: 'Free-Lance Web Developer',
      logo: selfEmp,
      start: '2021',
      end: '2022',
      description: 'XYZ'
    }
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React/Next.js/Remix',
    'Node.js',
    'GraphQL',
    'WebRTC'
  ]
} as const

const getResumeData = async () => {
  return ResumeData
}

export default async function Home() {
  const resumeData = await getResumeData()

  return (
    <main className="container mx-auto p-1 md:p-6 relative overflow-auto">
      <section className="w-full max-w-2xl mx-auto bg-white p-6 space-y-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1 space-y-1">
            <h1 className="text-2xl font-bold">{resumeData.name}</h1>
            <p className="text-muted-foreground font-mono text-base max-w-md text-pretty">
              {resumeData.about}
            </p>
          </div>

          <Avatar className="h-28 w-28">
            <AvatarImage alt={resumeData.name} src={resumeData.avatarUrl} />
            <AvatarFallback>{resumeData.initials}</AvatarFallback>
          </Avatar>
        </div>
        <section className="space-y-1">
          <h2 className="text-xl font-bold">Summary</h2>
          <p className="text-muted-foreground font-mono text-sm text-pretty">
            {resumeData.summary}
          </p>
        </section>
        <section className="flex flex-col min-h-0 gap-y-5">
          <h2 className="text-xl font-bold my-2">Work Experience</h2>
          {resumeData.work.map(work => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-lg">
                    <h3 className="font-semibold leading-none">
                      {work.company}
                    </h3>
                    <div className="text-gray-500 text-sm">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="text-sm leading-none">{work.title}</h4>
                </CardHeader>
                <CardContent className="mt-2">{work.description}</CardContent>
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
            {resumeData.skills.map(skill => {
              return <Badge key={skill}>{skill}</Badge>
            })}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <div className="flex flex-col gap-2 text-sm">
            {resumeData.contact.email ? (
              <a href={`mailto:${resumeData.contact.email}`}>
                Mail:{' '}
                <span className="underline">{resumeData.contact.email}</span>
              </a>
            ) : null}
            {resumeData.contact.tel ? (
              <a href={`tel:${resumeData.contact.tel}`}>
                Mobile:{' '}
                <span className="underline">{resumeData.contact.tel}</span>
              </a>
            ) : null}
          </div>
        </section>
      </section>

      <CommandMenu
        links={[
          {
            url: resumeData.personalWebsiteUrl,
            title: 'Personal Website'
          },
          ...resumeData.contact.social.map(socilaMediaLink => ({
            url: socilaMediaLink.url,
            title: socilaMediaLink.name
          }))
        ]}
      />
    </main>
  )
}
