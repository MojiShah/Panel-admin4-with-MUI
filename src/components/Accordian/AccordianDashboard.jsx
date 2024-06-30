import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: "space-evenly"
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: 35,
                                width: 35,
                                borderRadius: "50%",
                                margin: "0 10px"
                            }}
                            alt="Moji Profile"
                            src="img/ads.jpg"
                        />
                        <Typography>Advanced Design System</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Advanced Design System (ADS) is an electronic design automation software system produced by PathWave Design, a division of Keysight Technologies.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: "space-evenly"
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: 35,
                                width: 35,
                                borderRadius: "50%",
                                margin: "0 10px"
                            }}
                            alt="Moji Profile"
                            src="img/cst.jpg"
                        />
                        <Typography>CST Microwave Studio</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        CST Studio Suite® is a high-performance 3D EM analysis software package for designing, analyzing and optimizing electromagnetic (EM) components and systems.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: "space-evenly"
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: 35,
                                width: 35,
                                borderRadius: "50%",
                                margin: "0 10px"
                            }}
                            alt="Moji Profile"
                            src="img/Matlab.jpg"
                        />
                        <Typography>Matlab</Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MATLAB (Matrix Labratory) is the easiest and most productive software environment for engineers and scientists.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}