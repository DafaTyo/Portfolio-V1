import { Link } from "react-router-dom";
import CertificationList from "../elements/CertificationList";

const CertificationCard = (props) => {
    const { style } = props;

  return (
    <div className={`${style} bg-white rounded-lg p-4 bg-opacity-40 shadow-lg`}>
        <div className="flex justify-between items-center mx-3 mb-2">
          <h1 className="font-semibold text-xl text-gray-600">Certifications</h1>
          <Link to="https://drive.google.com/drive/u/1/folders/1-cvqp8iXfzsqBorpEqYKRuZZcYHvWMDZ" target="_blank" className="text-sm hover:underline">See All</Link>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <CertificationList skills={["JavaScripts", "Node.js", "Fundamental"]} img="dicoding.png">Dicoding</CertificationList>
          <CertificationList skills={["PHP", "Laravel", "MySQL", "Fundamental"]} img="jda.png">Jabar Digital Academy</CertificationList>
          <CertificationList skills={["Figma"]} img="gdgoc.png">Google Developer Groups on Campus</CertificationList>
          <CertificationList skills={["Cybersecurity", "Linux", "Fundamental"]} img="ibm.png">IBM</CertificationList>
        </div>
    </div>
  )
}

export default CertificationCard