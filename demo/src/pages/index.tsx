import { useState } from 'react';
import { Accordion, AccordionToggle, AccordionBody } from '@playbooks/interface/accordions';
import { H6 } from '@playbooks/interface/fonts';
import { Container } from '@playbooks/interface/grid';
import { Hero, HeroBody, HeroTitle, HeroSubtitle } from '@playbooks/interface/heros';
import { Main, Span } from '@playbooks/interface/html';
import { Section, SectionHeader, SectionTitle, SectionBody } from '@playbooks/interface/sections';
import { Navbar, NavbarBrand, NavbarList } from '@playbooks/interface/navbars';
import { NavItem, NavLink } from '@playbooks/interface/navs';
import { Route } from '@playbooks/interface/routes';

const Index = () => {
  const [open, setOpen] = useState(false);

  // Methods
  const onToggle = () => setOpen(!open);

  // Render
  return (
    <Route>
      <Navbar>
        <Span display='flex-start' space='space-x-4'>
          <NavbarBrand src='/playbooks-logo.svg' />
          <Span>|</Span>
          <H6 color='gray-500' fontWeight='font-normal'>Interface</H6>
        </Span>
        <NavbarList>
          <NavItem>
            <NavLink href='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/accordions'>Accordions</NavLink>
          </NavItem>
        </NavbarList>
      </Navbar>
      <Main className='flex-column min-h-screen w-full py-4'>
        <Container size='xl'>
          <Section>
            <SectionHeader>
              <SectionTitle>Heros</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <Hero>
                <HeroBody>
                  <HeroTitle>My hero</HeroTitle>
                  <HeroSubtitle>My hero</HeroSubtitle>
                </HeroBody>
              </Hero>
            </SectionBody>
          </Section>

          <Section>
            <SectionHeader>
              <SectionTitle>Accordions</SectionTitle>
            </SectionHeader>
            <SectionBody>
              <Accordion open={open}>
                <AccordionToggle className='text-white' onClick={onToggle}>
                  Toggle
                </AccordionToggle>
                <AccordionBody open={open} animate>
                  This is some text!
                </AccordionBody>
              </Accordion>
            </SectionBody>
          </Section>
        </Container>
      </Main>
    </Route>
  );
}

export default Index
