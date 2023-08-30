import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '98%',marginTop:'10px',height:'60px',fontSize:'25px', flexShrink: 0 }}>
          Как происходит бронирование?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Бронирование происходит после внесения предоплаты 50% от суммы аренды, предварительно можно приезать 
          на осмотр дома или провести онлайн показ (при наличии такой возможности).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr />
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '98%',marginTop:'10px',height:'60px',fontSize:'25px', flexShrink: 0 }}>Какая сумма предоплаты нужна?</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Стандарт предоплаты 50% от суммы аренды, если сумма аренды большая, то можно уменьшить предоплату до 30%.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr />
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '98%',marginTop:'10px',height:'60px',fontSize:'25px', flexShrink: 0 }}>
          Можно ли разбить предоплату на несколько частей?
          </Typography>
        
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr />
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '98%',marginTop:'10px',height:'60px',fontSize:'25px', flexShrink: 0 }}>Как работаете с юр.лицами?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          У нас открыто ИП и мы можем предложить заключить с нами агентский договор, на основании которого мы забронируем за 
          Вами коттедж и пример оплату за дом на наш расчётный счёт. Более детально уточняйте у менеджера.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}