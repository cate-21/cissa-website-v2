import presidentImage from '../assets/images/committee/josh-heng.jpg'
import vicePresidentImage from '../assets/images/committee/ileana-huang.jpg'
import secretaryImage from '../assets/images/committee/delia-zhou.jpg'
import educationImage from '../assets/images/committee/rama-kaorma.jpg'
import treasurerImage from '../assets/images/committee/andy-kang.jpg'
import eventsDirectorImage from '../assets/images/committee/angela-chen.jpg'
import industryLiaisonImage from '../assets/images/committee/rebecca-chao.jpg'
import designDirectorImage from '../assets/images/committee/amy-nguyen.jpg'
import marketingDirectorImage from '../assets/images/committee/sammi-li.jpg'
import ITDirectorImage from '../assets/images/committee/caitlin-alberti.jpg'
import projectDirectorImage from '../assets/images/committee/suchit-rawat.jpg'
import productDirectorImage from '../assets/images/committee/girija-karajgi.jpg'
import competitionsDirectorImage from '../assets/images/committee/jasir-syed.jpg'
import diversityDirectorImage from '../assets/images/committee/nigel-loh.jpg'
import peopleDirectorImage from '../assets/images/committee/lucy-martin.jpg'

export const teams = [
  {
    name: 'Executive Team',
    members: [
      { name: 'Josh Heng', avatar: presidentImage, role: 'President' },
      { name: 'Ileana Huang', avatar: vicePresidentImage, role: 'Vice President' },
      { name: 'Delia Zhou', avatar: secretaryImage, role: 'Secretary' },
      { name: 'Rama Kaorma', avatar: educationImage, role: 'Education Director' },
      { name: 'Andy Kang', avatar: treasurerImage, role: 'Treasurer' },
      { name: 'Angela Chen', avatar: eventsDirectorImage, role: 'Events Director '}
    ]
  },
  {
    name: 'General Committee',
    members: [
      { name: 'Rebecca Chao', avatar: industryLiaisonImage, role: 'Industry Liaison' },
      { name: 'Sammi Li', avatar: marketingDirectorImage, role: 'Marketing Director' },
      { name: 'Amy Nguyen', avatar: designDirectorImage, role: 'Design Director' },
      { name: 'Caitlin Alberti', avatar: ITDirectorImage, role: 'IT Director' },
      { name: 'Suchit Rawat', avatar: projectDirectorImage, role: 'Projects Director' },
      { name: 'Girija Karajgi', avatar: productDirectorImage, role: 'Product Director' },
      { name: 'Jasir Syed', avatar: competitionsDirectorImage, role: 'Competitions Director '},
      { name: 'Nigel Loh', avatar: diversityDirectorImage, role: 'Diversity Director' },
      { name: 'Lucy Martin', avatar: peopleDirectorImage, role: 'People & Culture Director '}
    ]
  }
]