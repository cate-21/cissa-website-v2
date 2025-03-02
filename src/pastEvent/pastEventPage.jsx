import "../assets/css/pastEvent/pastEventPage.css";

const SectionSemester = (props) => {
    return(
        <div>
            <div class="events-section py-5">
                <h1>{props.title}</h1>
            </div>
            <iframe class="airtable-embed" src={props.src}></iframe>
        </div>
    )
}

const PastEventPage = (props) => {
    const infoList = [
        {title: "Semester 1, 2025", src: "https://airtable.com/embed/appq8cXX0yFGnGtpE/shrqQPTCxVgrDSQa2?backgroundColor=pink"},
        {title: "2024", src: "https://airtable.com/embed/appq8cXX0yFGnGtpE/shrubex6K8n6h7Sht?backgroundColor=pink"},
    ]

    return(
        <div>
            <header className="black-header">
                <h1 className="section-title white-header-text">PAST EVENTS</h1>
            </header>

            {infoList.map((info) => <SectionSemester title={info.title} src={info.src}/>)}
        </div>
    )

}

export default PastEventPage;