import React, { useState } from 'react'
import './Seo.scss'
import { Tab, Tabs } from "react-bootstrap";
import SEOForm from '../../../../Components/SeoForm/SeoForm';

enum SEO_KEY {
    Home = "Home",
    AboutUs = "AboutUs",
    ContactUs = "ContactUs",
}

const SEO = () => {
    const [key, setKey] = useState<string>(SEO_KEY.Home)
    return (
        <div className='page_responsive'>
            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k!)}
                className="mb-3 tabs"
            >
                <Tab eventKey={SEO_KEY.Home} title="Home" className={'w-100'}>
                    <SEOForm />
                </Tab>
                <Tab eventKey={SEO_KEY.AboutUs} title='About Us' className={'w-100'}>
                    <SEOForm />
                </Tab>
                <Tab eventKey={SEO_KEY.ContactUs} title='Contact Us' className={'w-100'}>
                    <SEOForm />
                </Tab>
            </Tabs>
        </div >
    )
}

export default SEO