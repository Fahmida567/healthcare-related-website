import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div id='about'>
            <h1 className='text-light mx-5 mt-5'><span>Our </span>  History <span>And </span> Policy</h1>
            <div className="card mb-3 m-5"  >
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={'http://shahedkamal.me/wp-content/uploads/2020/04/120319-CaroMont-Regional-Medical-Center-712.jpg'} className="img-fluid rounded-start about-img" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body m-auto">
                            <h5 className="card-title text-primary">Our History</h5>
                            <p className="card-text">As Northwest Louisiana’s Long-Term Acute Care Specialist, our treatment plans are specifically designed for patients who need a longer recovery period. We specialize in the medical management of patients with complex, unresolved, acute, or chronic illnesses as well as multi-organ failures. Our Shreveport Campus also offers a Geriatric Behavioral Program, Addiction Medicine Program, and Multidisciplinary Pain Program.</p>
                            <p className="card-text"><small className="text-muted">Written By Dr. S Pratap C Reddy</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 m-5"  >
                <div className="row g-0">

                    <div className="col-md-4">
                        <div className="card-body m-auto">
                            <h5 className="card-title text-primary">Our Policy</h5>
                            <p className="card-text">
                                <ul>
                                    <li> Board Diversity Policy
                                    </li>
                                    <li> Board Evaluation Policy
                                    </li>
                                    <li> Nomination and Remuneration Policy
                                    </li>
                                    <li> Sexual Harassment Redressal Policy
                                    </li>
                                    <li> Dividend Distribution Policy
                                    </li>
                                    <li> AHEL Risk Management Policy
                                    </li>
                                    <li> Policy on preservation of documents
                                    </li>
                                    <li> Policy on disclosure of material events
                                    </li>
                                    <li> Policy on determining material subsidiaries
                                    </li>
                                    <li> Policy on Related Party Transactions
                                    </li>
                                    <li> Material Subsidiary Policy
                                    </li>
                                    <li> SEBI Insider Trading Policy
                                    </li>
                                    <li> Whistle Blower Policy
                                    </li>
                                    <li>Policy on Corporate Social Responsibility
                                    </li>
                                    <li> Code of conduct for Board Members
                                    </li>
                                    <li> Policy on determining material subsidiaries
                                    </li>
                                </ul>
                            </p>

                            <p className="card-text"><small className="text-muted">Written By Dr. S Pratap C Reddy</small></p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <img src={'https://www.policymedical.com/wp-content/uploads/2015/07/hospital-policies-and-procedures.jpg'} className="img-fluid rounded-start about-img m-auto" alt="..." />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;
