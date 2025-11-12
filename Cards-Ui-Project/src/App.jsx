import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://thumbs.dreamstime.com/b/google-logo-white-background-vector-format-available-google-logo-124289805.jpg?w=768",
      nameOfCompany: "Google",
      datePosted: "3 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hour",
      location: "Mountain View, CA, USA",
    },
    {
      brandLogo:
        "https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png",
      nameOfCompany: "Amazon",
      datePosted: "1 week ago",
      post: "Cloud Support Associate",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Seattle, WA, USA",
    },
    {
      brandLogo:
        "https://blog.logomyway.com/wp-content/uploads/2021/11/meta-logo.png",
      nameOfCompany: "Meta ",
      datePosted: "10 hours ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Menlo Park, CA, USA",
    },
    {
      brandLogo:
        "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
      nameOfCompany: "Apple",
      datePosted: "4 weeks ago",
      post: "Project Manager",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hour",
      location: "Cupertino, CA, USA",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/017/396/814/large_2x/netflix-mobile-application-logo-free-png.png",
      nameOfCompany: "Netflix",
      datePosted: "2 days ago",
      post: "Frontend Developer (React)",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hour",
      location: "Los Gatos, CA, USA",
    },
    {
      brandLogo: "https://pngimg.com/d/microsoft_PNG13.png",
      nameOfCompany: "Microsoft",
      datePosted: "2 weeks ago",
      post: "AI/Machine Learning Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$30/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png",
      nameOfCompany: "Tesla",
      datePosted: "5 days ago",
      post: "Autopilot Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hour",
      location: "Palo Alto, CA, USA",
    },
    {
      brandLogo:
        "https://www.pngmart.com/files/23/Ibm-Logo-PNG-Isolated-HD.png",
      nameOfCompany: "IBM",
      datePosted: "1 month ago",
      post: "Cybersecurity Analyst",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4d1ZaFBMW_t3CeGqZfgWUXNivoO8JJ0uFg&s",
      nameOfCompany: "Salesforce",
      datePosted: "3 weeks ago",
      post: "Technical Writer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Dublin, Ireland",
    },
    {
      brandLogo:
        "https://images.seeklogo.com/logo-png/10/2/oracle-logo-png_seeklogo-103833.png",
      nameOfCompany: "Oracle",
      datePosted: "10 weeks ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Austin, TX, USA",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (job, i) {
        return (
          <div key={i}>
            <Card
              company={job.nameOfCompany}
              logo={job.brandLogo}
              posted={job.datePosted}
              post={job.post}
              tag1={job.tag1}
              tag2={job.tag2}
              pay={job.pay}
              location={job.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
