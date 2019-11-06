import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './ScheduledMessages.scss';

function ScheduledMessages(props) {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [sec, setSec] = useState('');
    const [schedule, setSchedule] = useState({
        msg: '',
        min: '',
        hour: '',
        dom: '',
        month: '',
        weekday: '',
        sec: '',
        numbers: ''
    });

    const handleInputChange = e => {
        e.preventDefault();
        setSchedule({ ...schedule, [e.target.name]: e.target.value });
    };
    console.log('SCHEDULE', schedule);

    const submitNewMessage = e => {
        e.preventDefault();
        axios
            .post('http://localhost:4000/twilioRoute/schedule', schedule)
            .then(res => {
                console.log(schedule);
                console.log(res, 'res');
            })
            .catch(err => console.log(err));
    };
    console.log(schedule.sec, 'secondss');
    return (
        <>
            {/* <div>
                <img alt='#'></img>
            </div> */}
            <form onSubmit={submitNewMessage}>
                <textarea
                    rows='4'
                    cols='50'
                    onChange={handleInputChange}
                    value={schedule.msg}
                    name='msg'
                    type='text'
                    placeholder='Type your message here'
                    required
                ></textarea>
                <div className='selectheader'>
                    <select
                        name='sec'
                        value={schedule.sec}
                        onChange={handleInputChange}
                    >
                        <option value='' disabled selected>
                            Seconds
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                        <option value={16}>16</option>
                        <option value={17}>17</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                        <option value={22}>22</option>
                        <option value={23}>23</option>
                        <option value={24}>24</option>
                        <option value={25}>25</option>
                        <option value={26}>26</option>
                        <option value={27}>27</option>
                        <option value={28}>28</option>
                        <option value={29}>29</option>
                        <option value={30}>30</option>
                        <option value={31}>31</option>
                        <option value={32}>32</option>
                        <option value={33}>33</option>
                        <option value={34}>34</option>
                        <option value={35}>35</option>
                        <option value={36}>36</option>
                        <option value={37}>37</option>
                        <option value={38}>38</option>
                        <option value={39}>39</option>
                        <option value={40}>40</option>
                        <option value={41}>41</option>
                        <option value={42}>42</option>
                        <option value={43}>43</option>
                        <option value={44}>44</option>
                        <option value={45}>45</option>
                        <option value={46}>46</option>
                        <option value={47}>47</option>
                        <option value={48}>48</option>
                        <option value={49}>49</option>
                        <option value={50}>50</option>
                        <option value={51}>51</option>
                        <option value={52}>52</option>
                        <option value={53}>53</option>
                        <option value={54}>54</option>
                        <option value={55}>55</option>
                        <option value={56}>56</option>
                        <option value={57}>57</option>
                        <option value={58}>58</option>
                        <option value={59}>59</option>
                        <option value={60}>60</option>
                    </select>
                </div>
                <div className='selectheader'>
                    <select
                        name='min'
                        value={schedule.min}
                        onChange={handleInputChange}
                    >
                        <option value='' disabled selected>
                            Minutes
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                        <option value={16}>16</option>
                        <option value={17}>17</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                        <option value={22}>22</option>
                        <option value={23}>23</option>
                        <option value={24}>24</option>
                        <option value={25}>25</option>
                        <option value={26}>26</option>
                        <option value={27}>27</option>
                        <option value={28}>28</option>
                        <option value={29}>29</option>
                        <option value={30}>30</option>
                        <option value={31}>31</option>
                        <option value={32}>32</option>
                        <option value={33}>33</option>
                        <option value={34}>34</option>
                        <option value={35}>35</option>
                        <option value={36}>36</option>
                        <option value={37}>37</option>
                        <option value={38}>38</option>
                        <option value={39}>39</option>
                        <option value={40}>40</option>
                        <option value={41}>41</option>
                        <option value={42}>42</option>
                        <option value={43}>43</option>
                        <option value={44}>44</option>
                        <option value={45}>45</option>
                        <option value={46}>46</option>
                        <option value={47}>47</option>
                        <option value={48}>48</option>
                        <option value={49}>49</option>
                        <option value={50}>50</option>
                        <option value={51}>51</option>
                        <option value={52}>52</option>
                        <option value={53}>53</option>
                        <option value={54}>54</option>
                        <option value={55}>55</option>
                        <option value={56}>56</option>
                        <option value={57}>57</option>
                        <option value={58}>58</option>
                        <option value={59}>59</option>
                        <option value={60}>60</option>
                    </select>
                </div>
                <div className='selectheader'>
                    <select
                        name='hour'
                        value={schedule.hour}
                        onChange={handleInputChange}
                    >
                        <option value='' disabled selected>
                            Military Hour
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                        <option value={16}>16</option>
                        <option value={17}>17</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                        <option value={22}>22</option>
                        <option value={23}>23</option>
                        <option value={24}>24</option>
                    </select>
                </div>
                <div className='selectheader'>
                    <select
                        name='dom'
                        value={schedule.dom}
                        onChange={handleInputChange}
                    >
                        <option value='' disabled selected>
                            Day of Month
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                        <option value={16}>16</option>
                        <option value={17}>17</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                        <option value={22}>22</option>
                        <option value={23}>23</option>
                        <option value={24}>24</option>
                        <option value={25}>25</option>
                        <option value={26}>26</option>
                        <option value={27}>27</option>
                        <option value={28}>28</option>
                        <option value={29}>29</option>
                        <option value={30}>30</option>
                        <option value={31}>31</option>
                    </select>
                </div>
                <div className='selectheader'>
                    <select
                        name='month'
                        value={schedule.month}
                        onChange={handleInputChange}
                    >
                        <option value='' disabled selected>
                            Month
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                    </select>
                </div>
                <div className='selectheader'>
                    <select
                        name='weekday'
                        value={schedule.weekday}
                        onChange={handleInputChange}
                    >
                        <option value='' disabled selected>
                            Weekday
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                    </select>
                </div>
                <input
                    onChange={handleInputChange}
                    name='numbers'
                    value={[schedule.numbers]}
                    placeholder='Enter Phone Numbers Seperated by Comma'
                    required
                />
                <button>Submit</button>
            </form>
        </>
    );
}

export default ScheduledMessages;
