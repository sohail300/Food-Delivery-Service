import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Partner = () => {
    return (
        <>
            <h1 className='title'>Partner Onboarding</h1>
            <div>
                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'
                    >
                        I want to partner my restaurant with Swiggy
                    </AccordionSummary>
                    <AccordionDetails>
                    <div className='text-sm text-orange-400 font-proximaBold my-4'>Partner with us</div>
                        <span className='border-solid border-2 border-orange-400 text-orange-400 font-proxima p-2 cursor-pointer'>
                            SEND AN EMAIL
                        </span>
                        <div className='text-xs text-zinc-950 opacity-60 font-proximaLight my-2'>
                        We will revert within 24-48 hrs
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'

                    >
                        What are the mandatory documents needed to list my restaurant on Swiggy?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm text-zinc-950 opacity-60 font-proximaLight'>
                        <div>
                            -  Copies of the below documents are mandatory
                        </div>
                        <div>
                            -  FSSAI Licence OR FSSAI Acknowledgement
                        </div>
                        <div>
                            -  Pan Card
                        </div>
                        <div>
                        -  GSTIN Certificate
                        </div>
                        <div>
                        -  Cancelled Cheque OR bank Passbook
                        </div>
                        <div>
                        -  Menu
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'

                    >
                        After I submit all documents, how long will it take for my restaurant to go live on Swiggy?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm text-zinc-950 opacity-60 font-proximaLight'>
                        After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform.
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'
                    >
                        What is this one time Onboarding fees? Do I have to pay for it while registering?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm text-zinc-950 opacity-60 font-proximaLight'>
                        This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy.
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'
                    >
                        Who should I contact if I need help & support in getting onboarded?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm text-zinc-950 opacity-60 font-proximaLight'>
                        You can connect with Partner Support on 080-67466777/68179777 or write to partnersuport@swiggy.in
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'
                    >
                        How much commission will I be charged by Swiggy?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm text-zinc-950 opacity-60 font-proximaLight'>
                        The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.
                    </AccordionDetails>
                </Accordion>

                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-zinc-950 opacity-90 font-proximaRegular'
                    >
                        I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?
                    </AccordionSummary>
                    <AccordionDetails className='text-sm text-zinc-950 opacity-60 font-proximaLight'>
                        FSSAI licence is a mandatory requirement according to the government’s policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration.
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default Partner