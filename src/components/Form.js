import React, { useState } from 'react';
import ElemUnit from './units/ElemUnit';
import SurvUnit from './units/SurvUnit';
import PreUnit from './units/PreUnit';
import IntUnit from './units/IntUnit';
import UppUnit from './units/UppUnit';
import AdvUnit from './units/AdvUnit';
import SpeUnit from './units/SpeUnit';
import Elem1 from './topics/elemtopics/Elem1';
import Elem2 from './topics/elemtopics/Elem2';
import Elem3 from './topics/elemtopics/Elem3';
import Elem4 from './topics/elemtopics/Elem4';
import Elem5 from './topics/elemtopics/Elem5';
import Elem6 from './topics/elemtopics/Elem6';
import Elem7 from './topics/elemtopics/Elem7';
import Elem8 from './topics/elemtopics/Elem8';
import Elem9 from './topics/elemtopics/Elem9';
import Elem10 from './topics/elemtopics/Elem10';
import Elem11 from './topics/elemtopics/Elem11';
import Elem12 from './topics/elemtopics/Elem12';
import Elem13 from './topics/elemtopics/Elem13';
import Elem14 from './topics/elemtopics/Elem14';
import Elem15 from './topics/elemtopics/Elem15';
import Pre1 from './topics/pretopics/Pre1';
import Pre2 from './topics/pretopics/Pre2';
import Pre3 from './topics/pretopics/Pre3';
import Pre4 from './topics/pretopics/Pre4';
import Pre5 from './topics/pretopics/Pre5';
import Pre6 from './topics/pretopics/Pre6';
import Pre7 from './topics/pretopics/Pre7';
import Pre8 from './topics/pretopics/Pre8';
import Pre9 from './topics/pretopics/Pre9';
import Pre10 from './topics/pretopics/Pre10';
import Pre11 from './topics/pretopics/Pre11';
import Pre12 from './topics/pretopics/Pre12';
import Pre13 from './topics/pretopics/Pre13';
import Pre14 from './topics/pretopics/Pre14';
import Pre15 from './topics/pretopics/Pre15';

const Form = ({ value }) => {
  const [level, setLevel] = useState('');
  const [unit, setUnit] = useState('');
  const [topic, setTopic] = useState('');
  const [progressRating, setProgressRating] = useState('');

  const handleChange = (unit) => {
    setUnit(unit);
  };

  const handleTopicChange = (topic) => {
    setTopic(topic);
  };

  return (
    <div>
      <form>
        <div className='form-group'>
          <label>Please Select a Level</label>
          <br />
          <select
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          >
            <option value='survivor'>Survivor</option>
            <option value='elementary'>Elementary</option>
            <option value='pre-intermediate'>Pre-Intermediate</option>
            <option value='intermediate'>Intermediate</option>
            <option value='upper-intermediate'>Upper-Intermediate</option>
            <option value='advanced'>Advanced</option>
            <option value='specialized'>Specialized</option>
          </select>
        </div>
        <div className='form-group'>
          {level === 'survivor' ? (
            <SurvUnit onChange={handleChange} />
          ) : level === 'elementary' ? (
            <ElemUnit value={value} onChange={handleChange} />
          ) : level === 'pre-intermediate' ? (
            <PreUnit onChange={handleChange} />
          ) : level === 'intermediate' ? (
            <IntUnit onChange={handleChange} />
          ) : level === 'upper-intermediate' ? (
            <UppUnit onChange={handleChange} />
          ) : level === 'advanced' ? (
            <AdvUnit onChange={handleChange} />
          ) : level === 'specialized' ? (
            <SpeUnit onChange={handleChange} />
          ) : null}
        </div>
        <div className='form-group'>
          {/* Unit inputs */}
          {unit === 'el1' ? (
            <Elem1 onChange={handleTopicChange} />
          ) : unit === 'el2' ? (
            <Elem2 onChange={handleTopicChange} />
          ) : unit === 'el3' ? (
            <Elem3 onChange={handleTopicChange} />
          ) : unit === 'el4' ? (
            <Elem4 onChange={handleTopicChange} />
          ) : unit === 'el5' ? (
            <Elem5 onChange={handleTopicChange} />
          ) : unit === 'el6' ? (
            <Elem6 onChange={handleTopicChange} />
          ) : unit === 'el7' ? (
            <Elem7 onChange={handleTopicChange} />
          ) : unit === 'el8' ? (
            <Elem8 onChange={handleTopicChange} />
          ) : unit === 'el9' ? (
            <Elem9 onChange={handleTopicChange} />
          ) : unit === 'el10' ? (
            <Elem10 onChange={handleTopicChange} />
          ) : unit === 'el11' ? (
            <Elem11 onChange={handleTopicChange} />
          ) : unit === 'el12' ? (
            <Elem12 onChange={handleTopicChange} />
          ) : unit === 'el13' ? (
            <Elem13 onChange={handleTopicChange} />
          ) : unit === 'el14' ? (
            <Elem14 onChange={handleTopicChange} />
          ) : unit === 'el15' ? (
            <Elem15 onChange={handleTopicChange} />
          ) : unit === 'pr1' ? (
            <Pre1 onChange={handleTopicChange} />
          ) : unit === 'pr2' ? (
            <Pre2 onChange={handleTopicChange} />
          ) : unit === 'pr3' ? (
            <Pre3 onChange={handleTopicChange} />
          ) : unit === 'pr4' ? (
            <Pre4 onChange={handleTopicChange} />
          ) : unit === 'pr5' ? (
            <Pre5 onChange={handleTopicChange} />
          ) : unit === 'pr6' ? (
            <Pre6 onChange={handleTopicChange} />
          ) : unit === 'pr7' ? (
            <Pre7 onChange={handleTopicChange} />
          ) : unit === 'pr8' ? (
            <Pre8 onChange={handleTopicChange} />
          ) : unit === 'pr9' ? (
            <Pre9 onChange={handleTopicChange} />
          ) : unit === 'pr10' ? (
            <Pre10 onChange={handleTopicChange} />
          ) : unit === 'pr11' ? (
            <Pre11 onChange={handleTopicChange} />
          ) : unit === 'pr12' ? (
            <Pre12 onChange={handleTopicChange} />
          ) : unit === 'pr13' ? (
            <Pre13 onChange={handleTopicChange} />
          ) : unit === 'pr14' ? (
            <Pre14 onChange={handleTopicChange} />
          ) : unit === 'pr15' ? (
            <Pre15 onChange={handleTopicChange} />
          ) : null}
        </div>
        {level && unit && topic ? (
          <div className='form-group'>
            <label>
              Please Rate Your student's Progress on the Above Topic from 1-10
            </label>
            <br />
            <select onChange={(e) => setProgressRating(e.target.value)}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
          </div>
        ) : null}
      </form>
      {level && <p>Level: {level}</p>}
      {unit && <p>Unit: {unit}</p>}
      {topic && <p>Topic: {topic}</p>}
      {progressRating && <p>Rating: {progressRating}</p>}
    </div>
  );
};

export default Form;
