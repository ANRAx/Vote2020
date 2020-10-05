import React from 'react';

const UserCalendar = () => {
  return (
    <div id="calendar">
      <div className="month">
        <ul>
          <li>
            October
            <span>2020</span>
          </li>
        </ul>
      </div>

      <ul className="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>

      <ul className="days">
        <li>-</li>
        <li>-</li>
        <li>-</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>
          {' '}
          <span className="active">5</span>
        </li>
        <li> 6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>
          {' '}
          <span className="active-inPersonDeadline">22</span>
        </li>
        <li>
          <span className="active-mailDeadline">23</span>
        </li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>
          31
        </li>
        <li><span className="active-onlineDeadline">1</span></li>
        <li>2</li>
        <li>
          <p className="red">
            <strong>3</strong>
          </p>{' '}
        </li>
      </ul>
    </div>
  );
};

export default UserCalendar;
