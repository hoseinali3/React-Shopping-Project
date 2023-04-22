import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './ProductDetailTabs.css'
import { Specs, Opinions, QuestionsAndAnswer } from '../../Pages/ProductDetail/ProductDetailData';
import {Rating } from '@mui/material';
import CommentForm from '../Forms/CommentForm/CommentForm';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [spec, setSpec] = React.useState(Specs);
  const [opinion, setOpinion] = React.useState(Opinions);
  const [questionAndAnswer, setQuestionAndAnswer] = React.useState(QuestionsAndAnswer);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <Box sx={{ width: '100%', padding: '1em 0' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="توضیحات" {...a11yProps(0)} />
          <Tab label="مشخصات فنی" {...a11yProps(1)} />
          <Tab label="دیدگاه ها" {...a11yProps(2)} />
          <Tab label="پرسش و پاسخ" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel className="prod-detail-info" value={value} index={0}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        <br /><br />
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        <br /><br />
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        <br /><br />
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </TabPanel>
      <TabPanel className="prod-detail-specs" value={value} index={1}>
        <div className="specs-table">

          {spec.map(sp => (

            <div key={sp.id} class="row specs-table-row">
              <div class="col-4 spec-key" >{sp.key}</div>
              <div class="col spec-value">{sp.value}</div>
            </div>
          ))}

        </div>
      </TabPanel>
      <TabPanel className="prod-detail-opinions" value={value} index={2}>
        <div className="prod-detail-opinions-wrapper">
          {
            opinion.map(opin => (
              <div key={opin.id} className="prod-detail-opinion">
                <div className="prod-detail-opinion-header">
                  <span className="prod-detail-opinion-username">{opin.username} </span>
                  -
                  <span className="prod-detail-opinion-date"> {opin.date} </span>
                </div>
                <Rating name="read-only" value={opin.rating} size="small" readOnly />
                <p className="prod-detail-opinion-comment">{opin.comment}</p>
              </div>
            ))
          }

          
        </div>

<CommentForm title="لطفا نظر خود را در این قسمت بنویسید:" label="نظر"/>
      </TabPanel>
      <TabPanel className="prod-detail-question-and-answer" value={value} index={3}>
        <div className="question-and-answer-wrapper">
          <ul className="question-and-answer-list">

            {
              questionAndAnswer.map(item => (
                <li key={item.id} className="question-and-answer-listitem">
                  <div className="question-and-answer-quest-wrapper">
                    <div className="question-and-answer-quest-header">

                    <span className="question-and-answer-username">{item.username}</span>
                    -
                    <span className="question-and-answer-quest-date">{item.Q_date}</span>
                    </div>
                    <p className="question-and-answer-question">{item.question}</p>
                  </div>
                  {item.answer && (
                    <div className="question-and-answer-answer-wrapper">
                      <div className="question-and-answer-answer-header">

                    <span className="question-and-answer-admin">{item.admin}</span>
                    -
                    <span className="question-and-answer-answer-date">{item.A_date}</span>
                      </div>
                    <p className="question-and-answer-answer">{item.answer}</p>
                  </div>
                  )}
                </li>
              ))
            }
          </ul>
          <CommentForm title="لطفا سوال خود را در این قسمت بنویسید:" label="سوال"/>
        </div>
      </TabPanel>
    </Box>
  );
}