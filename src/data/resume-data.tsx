import Corizo from '@/images/logos/corizo.png'
import selfEmp from '@/images/logos/self-emp.png'
import { GitHubIcon } from '@/components/icons/GitHubIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { XIcon } from '@/components/icons/XIcon'

export const RESUME_DATA = {
  name: 'Dhruv Gursahani',
  initials: 'DG',
  location: 'Noida, Uttar Pradesh, India',
  locationLink: 'https://www.google.com/maps/place/Noida',
  about: "MBA FSM'24 | BCA BVP'22",
  summary:
    'As a dynamic professional with a multifaceted background, I bring a unique blend of financial expertise and hands-on technology experience. With a MBA, specializing in Finance, I have honed my skills in financial analysis & modeling. My proficiency in programming, acquired through extensive web development projects, serves as a valuable asset as I pursue a career transition into quant research. I am excited about leveraging my programming skills to analyze and interpret financial data, employing quantitative methods to derive meaningful insights. My ability to bridge the worlds of finance and technology positions me as a versatile candidate ready to contribute innovative solutions to the field of quantitative research. Eager to apply my analytical acumen, financial knowledge, and development experience, I am poised to excel in the dynamic and challenging realm of quant research.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/86593279?v=4',
  personalWebsiteUrl: 'https://dhruvgursahani.vercel.app',
  contact: {
    email: 'dhruv.gursahani@outlook.com',
    tel: '+91-9999819773',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/dhruv-bvpdev',
        icon: GitHubIcon
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/dhruvgursahani/',
        icon: LinkedInIcon
      },
      {
        name: 'X',
        url: 'https://x.com/dhruv_gursahani',
        icon: XIcon
      }
    ]
  },
  education: [
    {
      school: 'FORE School of Management',
      degree: 'Master of Business Administration -- 7.32/10',
      start: '2022',
      end: '2024'
    },
    {
      school: 'Bharati Vidyapeeth Institute of Management and Research',
      degree: 'Bachelor of Computer Applications -- 9.33/10',
      start: '2019',
      end: '2022'
    },
    {
      school: 'Bhatnagar International School',
      degree: 'Class XII (C.B.S.E) -- 91%',
      start: '2018',
      end: '2019'
    }
    /* {
      school: 'Bhatnagar International School',
      degree: 'Class X (C.B.S.E) -- 78%',
      start: '2016',
      end: '2017'
    } */
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
      description:
        'Ongoing monitoring and analysis of pipeline to review performance & optimize accordingly, to ensure objectives are met. Updated & created tailored client proposals and negotiated further to close the deals. Developed a strong pipeline of new customers through direct or indirect customer contact and prospecting.'
    },
    {
      company: 'Self Employed',
      link: '',
      badges: ['Remote'],
      title: 'Free-Lance Web Developer',
      logo: selfEmp,
      start: '2021',
      end: '2022',
      description:
        'Worked with clients to gather requirements, design solutions, and deliver custom web applications on time and within budget.Stayed up-to-date with the latest web development technologies and best practices to ensure high-quality and cutting-edge web applications.'
    }
  ],
  skills: [
    '#finance',
    'Financial Analysis',
    'Discounted Cash Flow Model',
    'Leveraged Buyout',
    'Financial Derivatives',
    'Portfolio Management',
    'Financial Engineering',
    'Tableau',
    'MS-Excel',
    'Corporate Finance',
    'Portfolio Optimization',
    '#dev',
    'Python',
    'Sckit-Learn',
    'Machine Learning',
    'Deep Learning',
    'Javascript',
    'Node.js',
    'Java',
    'C#',
    'Data Structures and Algorithms'
  ],
  projects: [
    {
      title: 'Emerging Technologies in Indian Edu-Tech',
      institute: 'FORE School of Management',
      year: '2023',
      description:
        'A work in progress research paper that is based on my summer internship project of the same name. The objectives were to explore the factors that influence the potential of emerging technologies in Indian Edu tech context and create a heirarchical relation between them.'
    },
    {
      title: 'Electronica: E-Commerce Website',
      institute: 'Bharati Vidyapeeth',
      year: '2022',
      description:
        'As part of major project to be submitted during my graduation, me and my team developed this website using MERN Stack and Stripe as Payment Processor'
    },
    {
      title: 'Gym Management System (JavaFx)',
      institute: 'Bharati Vidyapeeth',
      year: '2021',
      description:
        'As part of minor project to be submitted during my graduation, me and my team developed this Desktop application using JavaFx and MySQL as database'
    }
  ],
  certifications: [
    {
      title: 'Financial Modeling: Build a complete DCF Valuation Model',
      year: '2023',
      institute: 'Udemy'
    },
    {
      title: 'Python for Data Science, AI, and Development',
      year: '2023',
      institute: 'IBM'
    },
    {
      title: 'Financial Derivatives: A quantitative finance view',
      year: '2023',
      institute: 'Udemy'
    },
    {
      title: 'Machine Learning Specialization',
      year: '2023',
      institute: 'deeplearning.ai'
    },
    {
      title: 'Microsoft Power BI Desktop for Business Intelligence',
      year: '2022',
      institute: 'Udemy'
    },
    {
      title: 'Agile with Atlassian Jira',
      year: '2022',
      institute: 'Atlassian'
    }
  ]
  /* projects: [
    {
      title: 'XYZ',
      techStack: [
        'Side Project',
        'TypeScript',
        'Next.js',
        'Vite',
        'GraphQL',
        'WebRTC'
      ],
      description: 'ABC',
      logo: '',
      link: {
        label: 'xyz.com',
        href: 'https://xyz.com/'
      }
    },
  ] */
} as const
