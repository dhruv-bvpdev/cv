import Corizo from '../images/logos/corizo.png'
import selfEmp from '../images/logos/self-emp.png'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Card, CardHeader, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { CommandMenu } from '../components/command-menu'
import { Metadata } from 'next'
import { Section } from '../components/ui/section'

const RESUME_DATA = {
  name: 'Dhruv Gursahani',
  initials: 'DG',
  about: 'MBA Student',
  summary:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
      link: 'https://corizo.in',
      badges: ['Bangalore'],
      title: 'Summer Intern',
      logo: Corizo,
      start: 'May 2023',
      end: 'Jun 2023',
      description: 'XYZ'
    },
    {
      company: 'Self Employed',
      link: '',
      badges: ['Remote'],
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
    'Relay',
    'WebRTC'
  ]
} as const

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary
}

export default function Page() {
  return (
    <main className="container mx-auto p-1 md:p-12 relative overflow-auto scroll-mb-12">
      <section className="w-full max-w-2xl mx-auto bg-white space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="text-muted-foreground font-mono text-sm max-w-md text-pretty">
              {RESUME_DATA.about}
            </p>
            <div className="text-muted-foreground font-mono flex flex-col text-sm gap-x-1">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="h-28 w-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">Summary</h2>
          <p className="text-muted-foreground font-mono text-sm text-pretty">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map(work => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none inline-flex items-center justify-center gap-x-1">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map(badge => (
                          <Badge
                            variant="secondary"
                            className="text-xs align-middle"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-gray-500 text-sm tabular-nums">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="text-sm leading-none font-mono">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            )
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map(education => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-gray-500 text-sm tabular-nums">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            )
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map(skill => {
              return <Badge key={skill}>{skill}</Badge>
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: 'Personal Website'
          },
          ...RESUME_DATA.contact.social.map(socilaMediaLink => ({
            url: socilaMediaLink.url,
            title: socilaMediaLink.name
          }))
        ]}
      />
    </main>
  )
}
