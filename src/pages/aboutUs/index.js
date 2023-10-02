import Banner from '@/common/Banner/Banner';
import Contact from '@/common/Contact/Contact';
import About from '@/components/About/About';
import OurClientSay from '@/components/About/OurClientSay';
import TeamMembers from '@/components/About/TeamMembers';
import WhyChooseUs from '@/components/About/whyChooseUs';
import { getData } from '@/services/getData';
import Head from 'next/head';
import Loading from '../Loading';
import WorkProcess from '@/components/About/WorkProcess';

const AboutUs = ({ data }) => {
    if (!data) return <Loading />
    const { about, whyChooseUs, workProcess, reviews, teamMembers } = data
    return <>
        <Head>
            <title>This is my Next.js page</title>
            <meta name="description" content="This is a description of my Next.js page" />
        </Head>
        <Banner />
        <About data={about} />
        <OurClientSay data={reviews} />
        <WhyChooseUs data={whyChooseUs} />
        <TeamMembers data={teamMembers} />
        <WorkProcess data={workProcess} />
        <Contact />
    </>;
};

export default AboutUs;

export const getStaticProps = async () => {
    const data = getData('aboutus');
    return {
        props: {
            data,
        },
    };
}
