import React, { useState } from 'react'
import Partner from '../components/Partner'
import Legal from '../components/Legal'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FAQs from '../components/FAQs'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const HelpPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

  return (
    <>
      <div className='bg-sky-700 pb-12'>
        <div className='w-4/5 mx-auto'>
          <div className='title pt-16 text-white'>Help & Support</div>
          <div className='mb-8 text-white'>Let's take a step ahead and help you better.</div>
          <div className='mx-auto flex flex-row p-12 bg-white'>
            <div className='px-16 bg-gray-100'>
              <Tabs
                orientation="vertical"
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                sx={{ borderRight: 1, borderColor: 'divider' }}
              >
                <Tab label="Partner Onboarding" {...a11yProps(0)} />
                <Tab label="Legal" {...a11yProps(1)} />
                <Tab label="FAQs"{...a11yProps(2)} />
              </Tabs>
            </div>
            <div>
              <TabPanel value={value} index={0}>
                <Partner />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Legal />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <FAQs />
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HelpPage