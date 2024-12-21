"use client"
import styled from 'styled-components'
import Link
    from 'next/link';
export default function Footer() {
    return (
        <div>
            <Foooter>
                <Design>
                    <FooterSection>
                        <Logocont>
                            <Logo src='/assets/logo.png' />
                            <Logotxt>Byway</Logotxt>
                        </Logocont>
                        <Empower>Empowering learners through accessible and engaging online education.
                            Byway is a leading online learning platform dedicated to providing
                            high-quality, flexible, and affordable educational experiences. </Empower>
                    </FooterSection>
                    <FooterSection>
                        <Heading>Get Help</Heading>
                        <HelpLink>
                            <Contact><Link href="">Contact Us</Link></Contact>
                            <Contact><Link href="">Latest Articles</Link></Contact>
                            <Contact><Link href="">FAQ</Link></Contact>
                        </HelpLink>
                    </FooterSection>
                    <FooterSection>
                        <Heading>Programs</Heading>
                        <HelpLink>
                            <Contact><Link href="">Art & Design</Link></Contact>
                            <Contact><Link href="">Business</Link></Contact>
                            <Contact><Link href="">IT & Software</Link></Contact>
                            <Contact><Link href="">Languages</Link></Contact>
                            <Contact><Link href="">Programming</Link></Contact>
                        </HelpLink>
                    </FooterSection>
                    <FooterSection>
                        <Heading>Contact Us</Heading>
                        <HelpLink>
                            <Contact><Link href=""></Link>Address: 123 Main Street, Anytown, CA 12345</Contact>
                            <Contact><Link href="">Tel: +(123) 456-7890</Link></Contact>
                            <Contact><Link href="">Mail: bywayedu@webkul.in</Link></Contact>
                            <Contacticon>
                                <Media src='/assets/fb.jpg' alt='media' />
                                <Media src='/assets/github.jpg' alt='media' />
                                <Media src='/assets/google.jpg' alt='media' />
                                <Media src='/assets/twitter.jpg' alt='media' />
                                <Media src='/assets/micro.jpg' alt='media' />
                            </Contacticon>
                        </HelpLink>
                    </FooterSection>
                </Design>
            </Foooter>
        </div>
    )
}

const Foooter = styled.div`
font-family: poppins;
display:flex;
background: #1E293B;
color:white;

`;

const Design = styled.div`
display:flex;
width: 90%;
gap:20px;
margin: 70px auto;
justify-content: space-between;
flex-wrap: wrap;
`;


const FooterSection = styled.div`

`;

const Logocont = styled.div`
display:flex;
align-items: center;
padding-bottom: 8px;
`;
const Logo = styled.img``;
const Logotxt = styled.p``;
const Empower = styled.p`
font-size:13px;
font-weight: 300;
width: 300px;
`;

const Heading = styled.div`
font-size:18px;
font-weight: 500;
padding-bottom: 8px;
`;
const HelpLink = styled.div`
font-size:14px;
font-weight: 300;
display: flex;
flex-direction: column;
gap:5px;
`;
const Contact = styled.div``;

const Contacticon = styled.div`
display:flex;
gap:5px;
`;
const Media = styled.img`
border-radius:60%;
width: 20px;
`;