// Diamond
import IMC_img from "../assets/images/sponsors/imc.png";
import JaneStreet_img from "../assets/images/sponsors/janestreet.png";
import Airwallex_img from "../assets/images/sponsors/airwallex.png";

// Platinum
import Atlassian_img from "../assets/images/sponsors/atlassian-2022.png";
import Optiver_img from "../assets/images/sponsors/optiver.png";
import SIG_img from "../assets/images/sponsors/sig.png"
import Skand_img from "../assets/images/sponsors/skand.png"
import Talaria_img from "../assets/images/sponsors/talaria.png"

// Gold
import Citadel_img from "../assets/images/sponsors/citadel.png";
import Suncorp_img from "../assets/images/sponsors/suncorp.png"

// Silver
import Commbank_img from "../assets/images/sponsors/commbank.png";
import REA_img from "../assets/images/sponsors/rea.png";
import Xero_img from "../assets/images/sponsors/xero.png"
import Vanguard_img from "../assets/images/sponsors/vanguard.png"


// Check Airwallex EOI?
const allCardsInfo = {
    "IMC Trading": {
        image: IMC_img,
        link: "https://www.imc.com/eu/search-careers",
        opportunities: [            
            {name: "Graduate Java Software Engineer", type: "Graduate", location: "Sydney", link: "https://www.imc.com/eu/careers/jobs/4404007101"},
            {name: "Software Engineer Intern", type: "Internship", location: "Sydney", link: "https://www.imc.com/eu/careers/jobs/4533620101"},
            {name: "Graduate C++ Software Engineer", type: "Graduate", location: "Sydney", link: "https://www.imc.com/eu/careers/jobs/4403919101"},
            ]
    },

    "Airwallex": {
        image: Airwallex_img,
        link: "https://www.airwallex.com/careers",
        opportunities: []
    },

    "Jane Street": {
        image: JaneStreet_img,
        link: "https://www.janestreet.com/join-jane-street/open-roles/",
        opportunities: [            
            {name: "Software Engineer Internship", type: "Internship", location: "Hong Kong", link: "https://www.janestreet.com/join-jane-street/position/7582873002/"},
            {name: "Software Engineer", type: "Graduate", location: "Hong Kong", link: "https://www.janestreet.com/join-jane-street/position/7078182002/"},
            ]
    },
    "Atlassian": {
        image: Atlassian_img,
        link: "https://www.atlassian.com/company/careers/all-jobs",
        opportunities: [
            {name: "Software Engineer Intern", type: "Intern", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/details/18200"},
            {name: "Data Scientist Intern", type: "Intern", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/details/18207"},
            {name: "Data Engineer Intern", type: "Intern", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/details/18208"},
            {name: "Machine Learning Engineer Intern", type: "Intern", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/details/18204"},
            {name: "Site Reliability Engineer Intern", type: "Intern", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/details/18202"},
            {name: "Security/Intelligence Engineer Intern", type: "Intern", location: "Sydney or Remote", link: "https://www.atlassian.com/company/careers/details/18201"},
        ]
    },

    "Optiver": {
        image: Optiver_img,
        link: "https://optiver.com/working-at-optiver/career-opportunities/",
        opportunities: [            
            {name: "Software Develper Intern", type: "Intern", location: "Sydney", link: "https://optiver.com/working-at-optiver/career-opportunities/7854598002/"},
            {name: "Graduate Software Developer", type: "Graduate", location: "Sydney", link: "https://optiver.com/working-at-optiver/career-opportunities/7277617002/"},

        ]
    },

    "Susquehanna International Group": {
        image: SIG_img,
        link: "https://careers.sig.com/home",
        opportunities: [            
            {name: "Software Development Internship", type: "Intern", location: "Sydney", link: "https://careers.sig.com/job/8632/Software-Development-Internship-November-2025"},
            {name: "Graduate Software Developer", type: "Graduate", location: "Sydney", link: "https://careers.sig.com/job/8439/Graduate-Software-Developer-2026"},
        ]
    },

    "Skand": {
        image: Skand_img,
        link: "",
        opportunities: []
    },

    "Talaria Capital": {
        image: Talaria_img,
        link: "https://www.talariacapital.com.au/careers-at-talaria/",
        opportunities: []
    },
    

    "Citadel": {
        image: Citadel_img,
        link: "https://www.citadel.com/careers/open-opportunities/engineering/",
        opportunities: []
    },

    "Suncorp": {
        image: Suncorp_img,
        link: "https://careers.pageuppeople.com/346/cdw/en/listing",
        opportunities: []
    },

    "Commonwealth Bank": {
        image: Commbank_img,
        link: "https://cba.wd3.myworkdayjobs.com/CommBank_Careers",
        opportunities: [
            {name: "Graduate Program", type: "Graduate", location: "Multiple Locations", link: "https://cba.wd3.myworkdayjobs.com/Private_Ad/job/Sydney-CBD-Area/XMLNAME-2026-CommBank---Bankwest-Graduate-Campaign_REQ227539"},
        ]
    },

    "REA Group": {
        image: REA_img,
        link: "https://www.rea-group.com/careers/",
        opportunities: []
    },

    "Xero": {
        image: Xero_img,
        link: "https://jobs.lever.co/xero?department=Technology",
        opportunities: []
    },

    "Vanguard": {
        image: Vanguard_img,
        link: "https://www.vanguardjobs.com/job-search-results/",
        opportunities: [
            {name: "IT Graduate Program", type: "Graduate", location: "Melbourne", link: "https://www.vanguardjobs.com/job/21568593/vanguard-it-graduate-program-melbourne-au"},
        ]
    },
    

}

export default allCardsInfo