import { useState } from 'react';
import { Accordion, AccordionToggle, AccordionBody } from 'playbooks-interface';

const Index = () => {
  const [open, setOpen] = useState(false);

  // Methods
  const onToggle = () => setOpen(!open);

  // Render
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24`}>
      <div className='space-y-4'>
        <h4>Home</h4>
        <Accordion open={open}>
          <button className='text-white' onClick={onToggle}>
            Toggle
          </button>
          <AccordionBody open={open} animate>
            This is some text!
          </AccordionBody>
        </Accordion>
      </div>
    </main>
  );
}

export default Index
